from pathlib import Path

entries = [
("hypercompound","Hypercompound","Hpc₄","#9B59B6","Unusually complex fictional bonding."),
("metacompound","Metacompound","Mtc₂","#6C5CE7","A fictional compound that can change its properties."),
("complexium_compound","Complexium compound","Cpx₃","#483D8B","Represents complex-number chemistry."),
("transfinite_compound","Transfinite compound","Tfc∞","#4B79A1","Represents transfinite mathematical structures."),
("polysymbol_compound","Polysymbol compound","Psy₄","#E056A0","Contains symbol-based fictional components."),
("matrix_compound","Matrix compound","Mtx₂","#27AE60","Has a fictional matrix-like structure."),
("tensor_compound","Tensor compound","Tsr₃","#16A085","Represents tensor-based structures."),
("vector_compound","Vector compound","Vct₂","#3498DB","Represents directional properties."),
("scalar_compound","Scalar compound","Scr₂","#95A5A6","Represents scalar quantities."),
("quaternion_compound","Quaternion compound","Qtn₄","#8E44AD","Represents quaternion mathematics."),
("infinitate","Infinitate","Inf₂O","#D4AC0D","Represents infinity in the fictional chemistry universe."),
("alephite","Alephite","Ale₃","#B7950B","Represents cardinal infinity."),
("omegate","Omegate","Om₂X","#F1C40F","Represents ordinal infinity."),
("limitate","Limitate","Lim₄","#7DCEA0","Represents mathematical limits."),
("unboundium","Unboundium","Unb₂","#5DADE2","Represents an unbounded structure."),
("hyperinfinitate","Hyperinfinitate","Hif₅","#AF7AC5","Represents higher orders of infinity."),
("endlessium","Endlessium","End₃","#F5B041","Represents an endless repeating pattern."),
("polycrystal","Polycrystal","Ply₄","#AED6F1","Represents multiple crystal patterns."),
("hyperpolymer","Hyperpolymer","Hpm₆","#D7BDE2","Represents a fictional complex polymer structure."),
("latticium","Latticium","Lat₂","#76D7C4","Represents a repeating lattice."),
("fractalate","Fractalate","Frc₃","#E59866","Represents self-similar fractal patterns."),
("dimensionate","Dimensionate","Dim₄","#5499C7","Represents multidimensional structure."),
("multilayerite","Multilayerite","Mly₅","#A3E4D7","Represents a structure with multiple layers."),
("crystalium","Crystalium","Cry₂","#D6EAF8","Represents fictional crystal formation."),
("quantium_oxide","Quantium oxide","QntO₂","#5DADE2","Represents quantum properties."),
("plasmate","Plasmate","Pls₃","#E74C3C","Represents plasma-like fictional behavior."),
("photonite","Photonite","Pht₂","#F7DC6F","Represents light-based properties."),
("chronium_compound","Chronium compound","Chr₄","#AF7AC5","Represents time-related properties."),
("gravitite","Gravitite","Grv₂","#566573","Represents gravity-related properties."),
("radiantite","Radiantite","Rad₃","#F39C12","A fictional compound that glows."),
("darkenergite","Darkenergite","Dke₅","#34495E","Represents imaginary dark energy."),
("antimatterite","Antimatterite","Amt₂","#C0392B","Represents antimatter as a fictional concept."),
("exoticite","Exoticite","Ext₃","#1ABC9C","Represents hypothetical exotic matter."),
("negamassate","Negamassate","Ngm₂","#7F8C8D","Represents the hypothetical idea of negative mass."),
("topologite","Topologite","Tpg₄","#9B59B6","Represents unusual topological structures."),
("metamaterialite","Metamaterialite","Mtm₅","#48C9B0","Represents engineered material properties."),
("phasechangeite","Phasechangeite","Pcg₃","#E67E22","Represents fictional phase-shifting behavior."),
("voidium","Voidium","Voi₂","#212F3D","Represents fictional empty-space matter."),
("greekite","Greekite","Grk₃","#F1948A","Represents Greek-letter structures."),
("unicodite","Unicodite","Unc₄","#85C1E9","Represents Unicode-symbol structures."),
("operatorite","Operatorite","Opr₂","#BB8FCE","Represents mathematical operators."),
("derivative","Derivative","Dvt₃","#73C6B6","Represents derivatives in mathematics."),
("integralite","Integralite","Int₄","#F8C471","Represents integration."),
("summationite","Summationite","Sum₂","#82E0AA","Represents mathematical summations."),
("setite","Setite","Set₃","#7FB3D5","Represents set theory."),
("paradoxite","Paradoxite","Prd₃","#EC7063","Represents logical paradoxes."),
("probabilite","Probabilite","Prb₂","#5DADE2","Represents probability."),
("statistite","Statistite","Sts₄","#A569BD","Represents statistical values."),
("geometrite","Geometrite","Geo₃","#52BE80","Represents geometry."),
("algebraite","Algebraite","Alg₂","#F4D03F","Represents algebraic structures."),
("logicate","Logicate","Log₃","#5499C7","Represents logical operations."),
("categorialite","Categorialite","Cat₄","#D98880","Represents category theory."),
("non_euclideate","Non-Euclideate","Neu₅","#AF7AC5","Represents non-Euclidean geometry."),
]

lines = [
'// Fan-made Compounds for Sandboxels',
'// Install: place this file in the Sandboxels mods folder, then enable it in the Mods menu.',
'// These are fictional sandbox elements, not real chemical substances or validated chemical formulas.',
'',
'if (typeof elements !== "undefined" && typeof behaviors !== "undefined") {',
'    const fanCompoundDefinitions = ['
]
for key, name, formula, color, desc in entries:
    safe_desc = desc.replace('"', '\\"')
    lines.append(f'        {{ key: "{key}", name: "{name}", formula: "{formula}", color: "{color}", desc: "{safe_desc}" }},')
lines += [
'    ];',
'',
'    fanCompoundDefinitions.forEach(function (compound) {',
'        elements[compound.key] = {',
'            color: compound.color,',
'            behavior: behaviors.POWDER,',
'            category: "powders",',
'            state: "solid",',
'            density: 1500,',
'            hardness: 0.35,',
'            desc: compound.name + " (" + compound.formula + "): " + compound.desc',
'        };',
'    });',
'}'
]
content = "\n".join(lines) + "\n"
path = Path("/mnt/data/fan_compounds.js")
path.write_text(content, encoding="utf-8")
print(f"Created {path.name} with {len(entries)} fictional Sandboxels compounds.")
print(f"File size: {path.stat().st_size} bytes")
