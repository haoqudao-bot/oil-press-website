---
title:
  en: Oil Press Electrical Requirements
  fr: Exigences électriques de la presse
  ar: المتطلبات الكهربائية للمكبس الزيتي
  id: Persyaratan Listrik Mesin Press
description:
  en: Electrical requirements guide for oil press machines covering voltage specifications, power consumption, generator sizing, wiring standards, and safety compliance
  fr: Guide des exigences électriques pour presses à huile couvrant les spécifications de tension, la consommation électrique, le dimensionnement du générateur et la conformité sécurité
  ar: دليل المتطلبات الكهربائية لمكابس الزيت يغطي مواصفات الجهد واستهلاك الطاقة وحجم المولد ومعايير الأسلاك والامتثال للسلامة
  id: Panduan kebutuhan listrik mesin press minyak mencakup spesifikasi tegangan, konsumsi daya, ukuran generator, standar kabel, dan kepatuhan keselamatan
type: guide
publishedAt: 2026-07-18
seoKeywords:
  - oil press electrical requirements
  - generator for oil press
  - power supply configuration
---

## Introduction

A hydraulic oil press is a forgiving machine electrically — a single 2.2 kW motor drives the hydraulic pack — but "forgiving" is not "indifferent." Voltage configured for the wrong phase, an undersized generator, long thin cables, or a missing earth can stall the pump, burn the motor, or create a shock hazard in a room that also contains water and oil. Most electrical problems reported by new mills trace back to three avoidable mistakes: treating starting current as if it were running current, ignoring cable voltage drop over distance, and earthing the frame poorly.

This guide gives the actual numbers per model class, explains how to size a generator or breaker, sets out wiring by distance, and covers the safety and backup-power questions buyers ask before installation.

## Basic Electrical Requirements

### Voltage and Frequency

Haonuo presses are built to order against the destination grid at no extra charge:

- 220–240 V single phase, 50 or 60 Hz
- 380–415 V three phase, 50 or 60 Hz (380 V China, 400 V EU, 415 V common in Africa and South Asia)

Confirm the label with your electrician before the machine ships. Three phase is strongly recommended for commercial sites: starting current is far lower per phase, the motor runs cooler, and supporting equipment (roaster, crusher, filters) will usually need three phase anyway.

### Power Consumption

The main motor is **2.2 kW on all current models**. Consumption follows the press cycle:

| Phase | Draw |
|-------|------|
| Idle / pumping up | 0.5–1.0 kW |
| Sustained pressing | 1.5–2.2 kW |
| Peak during pressure build-up | up to ~3.0 kW for short intervals |

A typical eight-hour pressing day uses roughly 12–18 kWh at the press itself; budget separately for roaster, crusher, cleaner, and filters when calculating the site bill.

### Current and Protection

| Supply | Running Current | Starting Current | Recommended Breaker |
|--------|----------------|------------------|----------------------|
| 220–240 V single phase | 10–15 A | 20–30 A | 30 A, C-curve (motor-rated) |
| 380–415 V three phase | 5–8 A per phase | 10–15 A per phase | 16 A per phase, C-curve |

Use a motor-rated (C- or D-curve) circuit breaker or a motor-protection circuit breaker rather than a lighting-type B-curve breaker, which trips nuisance-style on motor start. Larger frames such as the HN365 use star-delta (Y-Δ) reduced-voltage starting to cut the inrush.

## Generator Sizing

Many mills run where the grid is weak, metered for limited hours, or absent entirely. Generator kVA must cover peak draw plus starting inrush, not just running power.

| Model Class | Minimum Generator | Recommended Generator |
|-------------|-------------------|------------------------|
| HN325 | 5 kVA | 6–7 kVA |
| HN365 | 5.5 kVA | 7–8 kVA |
| HN426 | 5.5 kVA | 7–8 kVA |
| HN500 | 7 kVA | 9–10 kVA |

These ratings cover the press only. If the roaster, crusher, and lighting share the generator, add their nameplate power and keep the total sustained load below 70–80% of generator capacity — lightly loaded diesel generators last longer and regulate voltage better.

### Generator Selection Rules

1. Add a **20–30% safety margin** above running load for starting current.
2. Account for other equipment on the same set and for cable voltage drop.
3. Prefer a reputable diesel set with an automatic voltage regulator (AVR); cheap unregulated generators can deliver frequency and voltage swings that overheat motors.
4. For single-phase sites above 5 kW, consider a three-phase machine plus a three-phase generator — the total investment is often comparable and far more stable.
5. Inverter-type generators are quiet and clean but usually too small for a full line; they suit mobile demonstrations rather than daily production.

## Wiring and Connection

### Connection Layout

**Single phase:** L (phase) → motor-rated breaker → contactor/starter → motor; N straight to motor; PE bonded to the machine frame and to the earth electrode.

**Three phase:** L1/L2/L3 → breaker → starter (star-delta where fitted) → motor; N to the control circuit; PE bonded to frame and earth electrode.

Never use the neutral as an earth (TN-C-style improvised bonding) in a wet production room; fit a proper protective earth with measured resistance below 4 Ω.

### Cable Size by Distance

Voltage drop should stay under 5% from the supply point to the motor. For copper cables at the press's current, conservative minimums are:

| Distance | 220–240 V Single Phase | 380–415 V Three Phase |
|----------|------------------------|------------------------|
| Up to 10 m | 2.5 mm² | 2.5 mm² |
| Up to 20 m | 4 mm² | 2.5 mm² |
| Up to 30 m | 6 mm² | 4 mm² |
| Up to 50 m | 10 mm² | 6 mm² |

These are planning figures for the press alone; a qualified electrician must size the final installation for local regulations, ambient temperature, bundling, and total site load. Long runs on single phase are the classic cause of "the motor sounds weak" complaints — voltage is being lost in the cable, not in the machine.

### Control Panel

Factory panels include main isolator, motor protection, starter, run/stop controls, pressure gauge, and an emergency stop. Install the panel within the operator's line of sight of the barrel but outside the splash zone, leave clearance for heat dissipation, and do not bypass the e-stop or door interlocks to save time.

## Safety Considerations

### Working Practices

- Only qualified electricians open the panel or motor terminal box.
- Lockout/tagout before electrical work: isolate, lock the switch, test with a known-good meter, then work.
- Keep water, oil, and washdown hoses away from the panel; use IP-rated covers where the environment demands.
- Insulated gloves and mats are cheap insurance during maintenance.

### Voltage Problems

| Problem | Cause | Effect | Remedy |
|---------|-------|--------|--------|
| Chronic low voltage | Long thin cable, weak grid/gen set | Slow pump build-up, motor overheating | Larger cable, AVR generator, voltage stabiliser |
| Voltage spikes/surges | Lightning, load switching, gen set faults | Control and motor insulation damage | Surge protective device, proper earthing |
| Phase loss (three phase) | Broken fuse/connection | Single-phasing burns motors quickly | Phase-loss protection relay |
| Reversed rotation | Two phases swapped at install | Pump runs backwards, no pressure | Swap any two phases; test before first run |

### Earthing and Lightning

- Dedicated earth electrode, tested after installation and annually; under 4 Ω.
- Equipotential bonding between press frame, tanks, and steel building structure.
- In lightning-prone areas: surge protection devices at the panel and a lightning protection system on the building; these protect the control electronics far more reliably than unplugging after the fact.

## Backup and Off-Grid Power

### UPS for the Control Circuit

A small 500–1,000 VA UPS on the control circuit is inexpensive insurance: it keeps the pressure controller and e-stop logic alive through flicker and brief outages so a cycle stops in a controlled state instead of mid-stroke. It does not power the motor.

### Solar-Hybrid Systems

Solar makes sense for daytime pressing in high-tariff or off-grid locations, but the motor's starting current and the cloudy-day question mean practical systems are hybrid: solar array and inverter sized for the *average* load plus a battery bank, with a diesel generator for starts and overcast stretches. Size the system on measured daily kWh — press plus all ancillary equipment — not on the motor plate alone.

## Energy Cost and Efficiency

Daily energy cost is straightforward to estimate:

**Cost/day ≈ power (kW) × running hours × local tariff (per kWh)**

Example: a 2.2 kW press drawing ~1.8 kW on average for 8 hours consumes about 14.4 kWh; at a tariff of 0.15 per kWh that is roughly 2.16 currency units of energy cost per day at the press. Practical savings come from operating habits rather than exotic equipment:

- Batch back-to-back loads to reduce the number of motor starts and warm-up losses.
- Keep hydraulic oil at 30–50°C — cold oil thickens, the pump works longer per cycle, and kWh per litre rises.
- Schedule the electric roaster (a much larger load than the press) to avoid simultaneous peaks where the grid or generator is marginal.
- In time-of-use tariff markets, shift pressing and roasting into off-peak windows.

## Pre-Installation Checklist

- [ ] Voltage, phase, and frequency confirmed to the factory before shipping
- [ ] Motor-rated breaker and proper PE earth installed, resistance measured
- [ ] Cable cross-section checked against run length
- [ ] Generator (if used) sized with 20–30% margin and AVR
- [ ] Rotation direction tested at commissioning
- [ ] E-stop, phase-loss protection, and surge protection verified
- [ ] Ancillary loads (roaster, crusher, filters) added to the site power budget

## Conclusion

The electrical side of a hydraulic oil press is not complex, but it rewards doing once and doing correctly: the right voltage and phase at order time, a generator or breaker sized for starting current rather than nameplate running current, cables that do not waste voltage over distance, and a proper protective earth. Get those four things right and electrical faults essentially disappear as a source of downtime. Send Haonuo your local voltage, available supply (grid or generator), and distances from the panel to the supply point; our engineers will confirm the configuration and cable plan before the machine ships.
