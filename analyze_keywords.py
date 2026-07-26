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
    except Exception as e:
        print(f"FAIL: {site} - {e}")

combined = pd.concat(all_data, ignore_index=True)

keywords_filter = [
    'hydraulic oil press', 'cold press', 'oil press machine', 'oil expeller',
    'coconut', 'sesame', 'peanut', 'shea butter', 'sunflower', 'palm',
    'olive', 'mustard', 'rapeseed', 'flaxseed', 'avocado', 'almond', 'walnut',
    'screw press', 'oil extraction', 'oil refinery', 'oil filter',
    'seed crusher', 'oil roaster', 'oil steamer',
    'oil mill', 'oil processing', 'oil pressing',
    'hydraulic press', 'seed press',
]

mask = combined['Keyword'].astype(str).str.lower().apply(
    lambda x: any(kw in x for kw in keywords_filter)
)
filtered = combined[mask].copy()
filtered['Search Volume'] = pd.to_numeric(filtered['Search Volume'], errors='coerce').fillna(0).astype(int)
filtered = filtered.sort_values('Search Volume', ascending=False)

print("=== TOP 80 KEYWORDS BY SEARCH VOLUME ===")
print(f"Total filtered keywords: {len(filtered)}")
print()

for i, row in filtered.head(80).iterrows():
    vol = row['Search Volume']
    kd = row['Keyword Difficulty']
    pos = row['Position']
    intent = row['Keyword Intents']
    source = row['Source']
    kw = row['Keyword']
    print(f"{vol:>6} | KD:{kd:>4} | Pos:{pos:>3} | {str(intent):>15} | {source:>20} | {kw}")

print("\n\n=== KEYWORDS BY CATEGORY ===")

# Category 1: Hydraulic Oil Press
print("\n--- 1. HYDRAULIC OIL PRESS ---")
hyd_mask = filtered['Keyword'].astype(str).str.lower().str.contains('hydraulic')
for i, row in filtered[hyd_mask].head(30).iterrows():
    print(f"{row['Search Volume']:>6} | KD:{row['Keyword Difficulty']:>4} | {row['Keyword']}")

# Category 2: Cold Press
print("\n--- 2. COLD PRESS ---")
cold_mask = filtered['Keyword'].astype(str).str.lower().str.contains('cold press')
for i, row in filtered[cold_mask].head(30).iterrows():
    print(f"{row['Search Volume']:>6} | KD:{row['Keyword Difficulty']:>4} | {row['Keyword']}")

# Category 3: By Oil Seed
print("\n--- 3. BY OIL SEED ---")
seeds = ['coconut', 'sesame', 'peanut', 'shea', 'sunflower', 'palm', 'olive', 'mustard', 'avocado', 'almond', 'walnut', 'flaxseed', 'rapeseed', 'castor']
for seed in seeds:
    seed_mask = filtered['Keyword'].astype(str).str.lower().str.contains(seed)
    seed_data = filtered[seed_mask].head(5)
    if len(seed_data) > 0:
        print(f"\n  [{seed}]")
        for i, row in seed_data.iterrows():
            print(f"    {row['Search Volume']:>6} | KD:{row['Keyword Difficulty']:>4} | {row['Keyword']}")

# Category 4: Oil Processing Equipment
print("\n--- 4. OIL PROCESSING EQUIPMENT ---")
equip_mask = filtered['Keyword'].astype(str).str.lower().str.contains('refinery|filter|crusher|roaster|steamer|expeller|extraction|mill|processing')
for i, row in filtered[equip_mask].head(30).iterrows():
    print(f"{row['Search Volume']:>6} | KD:{row['Keyword Difficulty']:>4} | {row['Keyword']}")

# Save full data
output_path = r'E:\液压榨油机\参考资料\filtered_keywords.csv'
filtered.to_csv(output_path, index=False, encoding='utf-8-sig')
print(f"\nFull data saved to: {output_path}")
