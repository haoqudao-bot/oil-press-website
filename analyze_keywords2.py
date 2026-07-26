import pandas as pd

files = {
    'abcmach_IN': r'E:\液压榨油机\参考资料\abcmach.com-organic.Positions-in-20260602-2026-06-03T01_29_41Z.xlsx',
    'abcmach_PH': r'E:\液压榨油机\参考资料\abcmach.com-organic.Positions-ph-20260602-2026-06-03T01_31_42Z.xlsx',
    'oil-mill-plant': r'E:\液压榨油机\参考资料\oil-mill-plant.com-organic.Positions-in-20260602-2026-06-03T01_33_09Z.xlsx',
    'oilexpeller': r'E:\液压榨油机\参考资料\oilexpeller.com-organic.Positions-in-20260602-2026-06-03T01_32_18Z.xlsx',
    'seedoilpress': r'E:\液压榨油机\参考资料\seedoilpress.com-organic.Positions-in-20260602-2026-06-03T01_38_47Z.xlsx',
    'smallagrimachinery': r'E:\液压榨油机\参考资料\smallagrimachinery.com-organic.Positions-in-20260602-2026-06-03T01_40_06Z.xlsx',
}

all_data = []
for site, filepath in files.items():
    try:
        df = pd.read_excel(filepath)
        df['Source'] = site
        all_data.append(df)
    except: pass

combined = pd.concat(all_data, ignore_index=True)
combined['Search Volume'] = pd.to_numeric(combined['Search Volume'], errors='coerce').fillna(0).astype(int)

# Get unique keywords with highest volume
unique_kw = combined.sort_values('Search Volume', ascending=False).drop_duplicates(subset=['Keyword'], keep='first')

# Filter for our business keywords
keywords_filter = [
    'hydraulic oil press', 'cold press', 'oil press', 'oil expeller',
    'coconut', 'sesame', 'peanut', 'shea', 'sunflower', 'palm',
    'olive', 'mustard', 'avocado', 'almond', 'walnut', 'flaxseed', 'rapeseed', 'castor',
    'oil mill', 'oil extraction', 'oil refinery', 'oil filter',
    'seed crusher', 'oil roaster', 'oil steamer', 'oil processing',
    'hydraulic press',
]

mask = unique_kw['Keyword'].astype(str).str.lower().apply(
    lambda x: any(kw in x for kw in keywords_filter)
)
filtered = unique_kw[mask].copy()

# Categorize keywords
categories = {
    'Core - Hydraulic Oil Press': ['hydraulic oil press', 'hydraulic press'],
    'Core - Cold Press': ['cold press'],
    'Core - Oil Press Machine': ['oil press machine', 'oil press'],
    'Core - Oil Expeller': ['oil expeller'],
    'By Seed - Coconut': ['coconut'],
    'By Seed - Sesame': ['sesame'],
    'By Seed - Peanut': ['peanut'],
    'By Seed - Shea Butter': ['shea'],
    'By Seed - Sunflower': ['sunflower'],
    'By Seed - Palm': ['palm'],
    'By Seed - Olive': ['olive'],
    'By Seed - Mustard': ['mustard'],
    'By Seed - Avocado': ['avocado'],
    'By Seed - Almond': ['almond'],
    'By Seed - Flaxseed': ['flaxseed'],
    'By Seed - Rapeseed': ['rapeseed'],
    'By Seed - Castor': ['castor'],
    'By Seed - Walnut': ['walnut'],
    'Equipment - Oil Mill': ['oil mill'],
    'Equipment - Oil Extraction': ['oil extraction'],
    'Equipment - Oil Refinery': ['oil refinery'],
    'Equipment - Oil Filter': ['oil filter'],
    'Equipment - Seed Crusher': ['seed crusher'],
    'Equipment - Oil Processing': ['oil processing'],
}

for cat_name, cat_keywords in categories.items():
    cat_mask = filtered['Keyword'].astype(str).str.lower().apply(
        lambda x: any(kw in x for kw in cat_keywords)
    )
    cat_data = filtered[cat_mask].sort_values('Search Volume', ascending=False)
    if len(cat_data) > 0:
        total_vol = cat_data['Search Volume'].sum()
        print(f"\n{'='*60}")
        print(f"{cat_name} (Total Volume: {total_vol}, Keywords: {len(cat_data)})")
        print(f"{'='*60}")
        for i, row in cat_data.head(15).iterrows():
            print(f"  {row['Search Volume']:>6} vol | KD:{row['Keyword Difficulty']:>4} | {row['Keyword Intents']:>20} | {row['Keyword']}")
