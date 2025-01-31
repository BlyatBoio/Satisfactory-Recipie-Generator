let recipes = [
    ["Standard Iron Ingot", ["Iron Ore"], [30], [30], ["Iron Ingot"], "Smelter"],
    ["Alt 1 Iron Ingot", ["Iron Ore", "Copper Ore"], [20, 20], [50], ["Iron Ingot"], "Foundry"],
    ["Alt 2 Iron Ingot", ["Iron Ore", "Water"], [45, 20], [65], ["Iron Ingot"], "Refinery"],
    ["Standard Iron Plate", ["Iron Ingot"], [30], [20], ["Iron Plate"], "Constructor"],
    ["Alt 1 Iron Plate", ["Iron Ingot", "Plastic"], [50, 10], [75], ["Iron Plate"], "Assembler"],
    ["Alt 2 Iron Plate", ["Steel Ingot", "Plastic"], [7.5, 5], [45], ["Iron Plate"], "Assembler"],
    ["Standard Iron Rod", ["Iron Ingot"], [15], [15], ["Iron Rod"], "Constructor"],
    ["Alt 1 Iron Rod", ["Steel Ingot"], [12], [48], ["Iron Rod"], "Constructor"],
    ["Standard Copper Ingot", ["Copper Ore"], [30], [30], ["Copper Ingot"], "Smelter"],
    ["Alt 1 Copper Ingot", ["Copper Ore", "Iron Ore"], [50, 25], [100], ["Copper Ingot"], "Foundry"],
    ["Alt 2 Copper Ingot", ["Copper Ore", "Water"], [15, 10], [37.5], ["Copper Ingot"], "Refinery"],
    ["Standard Wire", ["Copper Ingot"], [15], [30], ["Wire"], "Constructor"],
    ["Alt 1 Wire", ["Caterium Ingot"], [15], [120], ["Wire"], "Constructor"],
    ["Alt 2 Wire", ["Copper Ingot", "Caterium Ingot"], [12, 3], [90], ["Wire"], "Assembler"],
    ["Alt 3 Wire", ["Iron Ingot"], [12.5], [22.5], ["Wire"], "Constructor"],
    ["Standard Cable", ["Wire"], [60], [30], ["Cable"], "Constructor"],
    ["Alt 1 Cable", ["Wire", "Heavy Oil Residue"], [37.5, 15], [67.5], ["Cable"], "Refinery"],
    ["Alt 2 Cable", ["Wire", "Rubber"], [45, 30], [100], ["Cable"], "Assembler"],
    ["Alt 3 Cable", ["Quickwire", "Rubber"], [7.5, 5], [27.5], ["Cable"], "Assembler"],
    ["Standard Concrete", ["Limestone"], [45], [15], ["Concrete"], "Constructor"],
    ["Alt 1 Concrete", ["Silica", "Limestone"], [7.5, 30], [25], ["Concrete"], "Assebler"],
    ["Alt 2 Concrete", ["Limestone", "Water"], [120, 100], [80], ["Concrete"], "Refinery"],
    ["Alt 3 Concrete", ["Limestone", "Rubber"], [50, 10], [45], ["Concrete"], "Assembler"],
    ["Standard Screw", ["Iron Rod"], [10], [40], ["Screw"], "Constructor"],
    ["Alt 1 Screw", ["Iron Ingot"], [12.5], [50], ["Screw"], "Constructor"],
    ["Alt 2 Screw", ["Steel Beam"], [5], [260], ["Screw"], "Constructor"],
    ["Standard Reinforced Iron Plate", ["Iron Plate", "Screw"], [30, 60], [5], ["Reinforced Iron Plate"], "Assembler"],
    ["Alt 1 Reinforced Iron Plate", ["Iron Plate", "Screw"], [90, 250], [15], ["Reinforced Iron Plate"], "Assebler"],
    ["Alt 2 Reinforced Iron Plate", ["Iron Ingot", "Wire"], [18.75, 37.5], [5.625], ["Reinforced Iron Plate"], "Assembler"],
    ["Alt 3 Reinforced Iron Plate", ["Iron Plate", "Rubber"], [11.25, 3.75], [3.75], ["Reinforced Iron Plate"], "Assembler"],
    ["Standard Biomass", ["Wood"], [60], [300], ["Biomass"], "Constructor"],
    ["Alt 1 Biomass", ["Leaves"], [120], [60], ["Biomass"], "Constructor"],
    ["Alt 2 Biomass", ["Alien Protien"], [15], [1500], ["Biomass"], "Constructor"],
    ["Alt 3 Biomass", ["Mycelia"], [15], [150], ["Biomass"], "Constructor"],
    ["Standard Solid Biofuel", ["Biomass"], [120], [60], ["Biomass"], "Constructor"],
    ["Standard Copper Sheet", ["Copper Ingot"], [20], [10], ["Copper Sheet"], "Constructor"],
    ["Alt 1 Copper Sheet", ["Copper Ingot", "Water"], [22.5, 22.5], [22.5], ["Copper Sheet"], "Refinery"],
    ["Standard Rotor", ["Iron Ingot", "Screw"], [20, 100], [4], ["Rotor"], "Assembler"],
    ["Alt 1 Rotor", ["Copper Sheet", "Screw"], [22.5, 195], [11.25], ["Rotor"], "Assembler"],
    ["Alt 2 Rotor", ["Steel Pipe", "Wire"], [10, 30], [5], ["Rotor"], "Assembler"],
    ["Standard Modular Frame", ["Reinforced Iron Plate", "Iron Rod"], [3, 12], [2], ["Modular Frame"], "Assembler"],
    ["Alt 1 Modular Frame", ["Reinforced Iron Plate", "Screw"], [7.5, 140], [5], ["Modular Frame"], "Assembler"],
    ["Alt 2 Modular Frame", ["Reinforced Iron Plate", "Steel Pipe"], [2, 10], [3], ["Modular Frame"], "Assembler"],
    ["Standard Smart Plating", ["Reinforced Iron Plate", "Rotor"], [2, 2], [2], ["Smart Plating"], "Assembler"],
    ["Alt 1 Smart Plating", ["Reinforced Iron Plate", "Rotor", "Plastic"], [2.5, 2.5, 7.5], [5], ["Smart Plating"], "Manufacturer"],
    ["Standard Color Cartridge", ["Flower Petals"], [50], [100], ["Color Cartridge"], "Constructor"],
    ["Standard Alien Protien", ["Alien Remains"], [20], [20], ["Alien Protien"], "Constructor"],
    ["Standad Alien DNA Capsule", ["Alien Protien"], [10], [10], ["Alien DNA Capsule"], "Constructor"],
    ["Standard Steel Ingot", ["Iron Ore", "Coal"], [45, 45], [45], ["Steel Ingot"], "Foundry"],
    ["Alt 1 Steel Ingot", ["Iron Ingot", "Coal"], [40, 40], [60], ["Steel Ingot"], "Foundry"],
    ["Alt 2 Steel Ingot", ["Iron Ore", "Compacted Coal"], [22.5, 11.25], [37.5], ["Steel Ingot"], "Foundry"],
    ["Alt 3 Steel Ingot", ["Iron Ore", "Coal"], [75, 75], [100], ["Steel Ingot"], "Foundry"],
    ["Standard Steel Beam", ["Steel Ingot"], [60], [15], ["Steel Beam"], "Constructor"],
    ["Standard Steel Pipe", ["Steel Ingot"], [30], [20], ["Steel Pipe"], "Constructor"],
    ["Standard Versatile Framework", ["Modular Frame", "Steel Beam"], [2.5, 30], [5], ["Versatile Framework"], "Assembler"],
    ["Alt 1 Versatile Framework", ["Modular Frame", "Steel Beam", "Rubber"], [3.75, 22.5, 30], [7.5], ["Versatile Framework"], "Manufacturer"],
    ["Standard Caterium Ingot", ["Caterium Ore"], [45], [15], ["Caterium Ingot"], "Smelter"],
    ["Alt 1 Caterium Ingot", ["Caterium Ore", "Water"], [24, 24], [12], ["Caterium Ingot"], "Refinery"],
    ["Standard Quickwire", ["Caterium Ingot"], [12], [60], ["Quickwire"], "Constructor"],
    ["Alt 1 Quickwire", ["Caterium Ingot", "Copper Ingot"], [7.5, 37.5], [90], ["Quickwire"], "Assembler"],
    ["Standard AI Limiter", ["Copper Sheet", "Quickwire"], [25, 100], [5], ["AI Limiter"], "Assembler"],
    ["Standard Encased Industrial Beam", ["Steel Beam", "Concrete"], [24, 30], [6], ["Encased Industrial Beam"], "Assembler"],
    ["Alt 1 Encased Industrial Beam", ["Steel Pipe", "Concrete"], [28, 20], [4], ["Encased Industrial Beam"], "Assembler"],
    ["Standard Stator", ["Steel Pipe", "Wire"], [15, 40], [5], ["Stator"], "Assembler"],
    ["Alt 1 Stator", ["Steel Pipe", "Quickwire"], [32, 120], [8], ["Stator"], "Assembler"],
    ["Standard Motor", ["Rotor", "Stator"], [10, 10], [5], ["Motor"], "Assembler"],
    ["Alt 1 Motor", ["Rotor", "Stator", "Crystal Oscillator"], [3.75, 3.75, 1.25], [7.5], ["Motor"], "Manufacturer"],
    ["Alt 2 Motor", ["Electromagnetic Control Rod", "Rotor"], [3.75, 7.5], [3.75], ["Motor"], "Assembler"],
    ["Standard Automated Wiring", ["Stator", "Cable"], [2.5, 50], [2.5], ["Automated Wiring"], "Assembler"],
    ["Alt 1 Automated Wiring", ["Stator", "Wire", "High-Speed Connector"], [3.75, 75, 1.85], [7.5], ["Automated Wiring"], "Manufacturer"],
    ["Standard Heavy Modular Frame", ["Modular Frame", "Steel Pipe", "Encased Industrial Beam", "Screw"], [10, 30, 10, 200], [2], ["Heavy Modular Frame"], "Manufacturer"],
    ["Alt 1 Heavy Modular Frame", ["Modular Frame", "Encased Industrial Beam", "Rubber", "Screw"], [18.75, 11.25, 75, 390], [3.75], ["Heavy Modular Frame"], "Manufacturer"],
    ["Alt 2 Heavy Modular Frame", ["Modular Frame", "Encased Industrial Beam", "Steel Pipe", "Concrete"], [7.5, 9.375, 33.75, 20.625], [2.8125], ["Heavy Modular Frame"], "Manufacturer"],
    ["Standard Plastic", ["Crude Oil"], [30], [20, 10], ["Plastic", "Heavy Oil Residue"], "Refinery"],
    ["Alt 1 Plastic", ["Polymer Resin", "Water"], [60, 20], [20], ["Plastic"], "Refinery"],
    ["Alt 2 Plastic", ["Rubber", "Fuel"], [30, 30], [60], ["Plastic"], "Refinery"],
    ["Standard Rubber", ["Plastic", "Fuel"], [30, 30], [60], ["Rubber"], "Refinery"],
    ["Alt 1 Rubber", ["Crude Oil"], [30], [20, 20], ["Rubber", "Heavy Oil Residue"], "Refinery"],
    ["Alt 2 Rubber", ["Polymer Resin", "Water"], [40, 40], [20], ["Rubber"], "Refinery"],
    ["Standard Heavy Oil Residue", ["Crude Oil"], [30], [20, 10], ["Plastic", "Heavy Oil Residue"], "Refinery"],
    ["Alt 1 Heavy Oil Residue", ["Crude Oil"], [30], [20, 20], ["Rubber", "Heavy Oil Residue"], "Refinery"],
    ["Alt 2 Heavy Oil Residue", ["Packaged Heavy Oil Residue"], [20], [20, 20], ["Heavy Oil Residue", "Empty Canister"], "Packager"],
    ["Alt 3 Heavy Oil Residue", ["Crude Oil"], [30], [40, 20], ["Heavy Oil Residue", "Polymer Resin"], "Refinery"],
    ["Alt 4 Heavy Oil Residue", ["Crude Oil"], [60], [130, 20], ["Polymer Resin", "Heavy Oil Residue"], "Refinery"],
    ["Standard Rubber", ["Crude Oil"], [30], [20, 20], ["Rubber", "Heavy Oil Residue"], "Refinery"],
    ["Alt 1 Rubber", ["Polymer Resin", "Water"], [40, 40], [20], ["Rubber"], "Refinery"],
    ["Alt 2 Rubber", ["Plastic", "Fuel"], [30, 30], [60], ["Rubber"], "Refinery"],
    ["Standard Fuel", ["Crude Oil"], [60], [40, 30], ["Fuel", "Polymer Resin"], "Refinery"],
    ["Alt 1 Fuel", ["Heavy Oil Residue"], [60], [40], ["Fuel"], "Refinery"],
    ["Alt 2 Fuel", ["Packaged Fuel"], [60], [60, 60], ["Fuel", "Empty Canister"], "Packager"],
    ["Alt 3 Fuel", ["Heavy Oil Residue", "Water"], [50, 100], [100], ["Fuel"], "Blender"],
    ["Standard Polymer Resin", ["Crude Oil"], [60], [40, 30], ["Fuel", "Polymer Resin"], "Refinery"],
    ["Alt 1 Polymer Resin", ["Crude Oil"], [30], [40, 20], ["Heavy Oil Residue", "Polymer Resin"], "Refinery"],
    ["Alt 2 Polymer Resin", ["Crude Oil"], [60], [130, 20], ["Polymer Resin", "Heavy Oil Residue"], "Refinery"],
    ["Standard Petroleum Coke", ["Heavy Oil Residue"], [40], [120], ["Petroleum Coke"], "Refinery"],
    ["Standard Circuit Board", ["Copper Sheet", "Plastic"], [15, 30], [7.5], ["Circuit Board"]],
    ["Alt 1 Circuit Board", ["Rubber", "Coal"], [30, 45], [5], ["Circuit Board"], "Assembler"],
    ["Alt 2 Circuit Board", ["Plastic", "Quickwire"], [12.5, 37.5], [8.75], ["Circuit Board"], "Assembler"],
    ["Alt 3 Circuit Board", ["Copper Sheet", "Silica"], [27.5, 27.5], [12.5], ["Circuit Board"], "Assembler"],
    ["Standard Iron Rebar", ["Iron Rod"], [15], [15], ["Iron Rebar"], "Constructor"],
    ["Standard Empty Canister", ["Plastic"], [30], [60], ["Empty Canister"], "Constructor"],
    ["Alt 1 Empty Canister", ["Packaged Water"], [60], [60, 60], ["Water", "Empty Canister"], "Packager"],
    ["Alt 2 Empty Canister", ["Packaged Oil"], [60], [60, 60], ["Crude Oil", "Empty Canister"], "Packager"],
    ["Alt 3 Empty Canister", ["Packaged Fuel"], [60], [60, 60], ["Fuel", "Empty Canister"], "Packager"],
    ["Alt 4 Empty Canister", ["Packaged Heavy Oil Residue"], [60], [60, 60], ["Heavy Oil Residue", "Empty Canister"], "Packager"],
    ["Alt 5 Empty Canister", ["Packaged Liquid Biofuel"], [60], [60, 60], ["Liquid Biofuel", "Empty Canister"], "Packager"],
    ["Alt 6 Empty Canister", ["Packaged Turbofuel"], [20], [20, 20], ["Turbofuel", "Empty Canister"], "Packager"],
    ["Alt 7 Empty Canister", ["Steel Ingot"], [60], [40], ["Empty Canister"], "Constructor"],
    ["Alt 8 Empty Canister", ["Iron Plate", "Copper Sheet"], [30, 15], [60], ["Empty Canister"], "Assembler"],
    ["Standard Packaged Water", ["Water", "Empty Canister"], [60, 60], [60], ["Packaged Water"], "Packager"],
    ["Standard Packaged Oil", ["Crude Oil", "Empty Canister"], [60, 60], [60], ["Packaged Oil"], "Packager"],
    ["Standard Packaged Fuel", ["Fuel", "Empty Canister"], [60, 60], [60], ["Packaged Fuel"], "Packager"],
    ["Alt 1 Packaged Fuel", ["Heavy Oil Residue", "Packaged Water"], [60, 60], [60], ["Packaged Fuel"], "Packager"],
    ["Standard Packaged Heavy Oil Residue", ["Heavy Oil Residue", "Empty Canister"], [60, 60], [60], ["Packaged Heavy Oil Residue"], "Packager"],
    ["Standard Packaged Liquid Biofuel", ["Liquid Biofuel", "Empty Canister"], [60, 60], [60], ["Packaged Liquid Biofuel"], "Packager"],
    ["Standard Liquid Biofuel", ["Solid Biofuel", "Water"], [75, 45], [60], ["Liquid Biofuel"], "Refinery"],
    ["Alt 1 Liquid Biofuel", ["Packaged Liquid Biofuel"], [60], [60, 60], ["Liquid Biofuel", "Empty Canister"], "Packager"],
    ["Standard Computer", ["Circuit Board", "Cable", "Plastic", "Screw"], [25, 22.5, 45, 130], [2.5], ["Computer"], "Manufacturer"],
    ["Alt 1 Computer", ["Circuit Board", "Quickwire", "Rubber"], [26.25, 105, 45], [3.75], ["Computer"], "Manufacturer"],
    ["Alt 2 Computer", ["Circuit Board", "Crystal Oscillator"], [7.5, 2.8125], [2.8125], ["Computer"], "Assembler"],
    ["Standard Modular Engine", ["Motor", "Rubber", "Smart Plating"], [2, 15, 1], [1], ["Modular Engine"], "Manufacturer"],
    ["Standard Adaptive Control Unit", ["Automated Wiring", "Circuit Board", "Heavy Modular Frame", "Computer"], [7.5, 5, 1, 1], [1], ["Adaptive Control Unit"], "Manufacturer"],
    ["Standard Black Powder", ["Coal", "Sulfur"], [15, 15], [30], ["Black Powder"], "Assembler"],
    ["Alt 1 Black Powder", ["Sulfur", "Compacted Coal"], [7.5, 3.75], [15], ["Black Powder"], "Assembler"],
    ["Standard Radio Control Unit", ["Heat Sink", "High-Speed Connector", "Quartz Crystal"], [15, 7.5, 45], [3.5], ["Radio Control Unit"], "Manufacturer"],
    ["Alt 1 Radio Control Unit", ["Crystal Oscillator", "Circuit Board", "Aluminum Casing", "Rubber"], [1.5, 15, 90, 45], [4.5], ["Radio Control Unit"], "Manufacturer"],
    ["Standard Silica", ["Raw Quartz", "Limestone"], [11.25, 18.75], [26.25], ["Silica"], "Assembler"],
    ["Standard Quartz Crystal", ["Raw Quartz", "Water"], [67.5, 37.5], [52.5], ["Quartz Crystal"], "Refinery"],
    ["Alt 1 Quartz Crystal", ["Raw Quartz"], [37.5], [22.5], ["Quartz Crystal"], "Refinery"],
    ["Standard Compacted Coal", ["Coal", "Sulfur"], [25, 25], [25], ["Compacted Coal"], "Assembler"],
    ["Standard Turbofuel", ["Heavy Oil Residue", "Compacted Coal"], [37.5, 30], [30], ["Turbofuel"], "Refinery"],
    ["Alt 1 Turbofuel", ["Fuel", "Compacted Coal"], [22.5, 15], [18.75], ["Turbofuel"], "Refinery"],
    ["Alt 2 Turbofuel", ["Packaged Turbofuel"], [20], [20, 20], ["Turbofuel", "Empty Canister"], "Packager"],
    ["Alt 3 Turbofuel", ["Fuel", "Heavy Oil Residue", "Sulfur", "Coal"], [15, 30, 22.5, 22.5], [45], ["Turbofuel"], "Blender"],
    ["Standard High-Speed Connector", ["Quickwire", "Silica", "Circuit Board"], [90, 37.5, 3], [3], ["High-Speed Connector"], "Manufacturer"],
    ["Alt 1 High-Speed Connector", ["Quickwire", "Wire", "Circuit Board"], [210, 37.5, 3.75], [3.75], ["High-Speed Connector"], "Manufacturer"],
    ["Standard Fabric", ["Polymer Resin", "Water"], [30, 30], [30], ["Fabric"], "Refinery"],
    ["Alt 1 Fabric", ["Mycelia", "Biomass"], [15, 75], [15], ["Fabric"], "Assembler"],
    ["Standard Crystal Oscillator", ["Quartz Crystal", "Rubber", "AI Limiter"], [18.75, 13.125, 1.875], [1.875], ["Crystal Oscillator"], "Manufacturer"],
    ["Alt 1 Crystal Oscillator", ["Quartz Crystal", "Cable", "Reinforced Iron Plate"], [18, 24, 2.5], [1], ["Crystal Oscillator"], "Manufacturer"],
    ["Standard Heat Sink", ["Aluminum Casing", "Rubber"], [30, 30], [10], ["Heat Sink"], "Assembler"],
    ["Alt 1 Heat Sink", ["Alclad Aluminum Sheet", "Copper Sheet"], [37.5, 22.5], [7.5], ["Heat Sink"], "Assembler"],
    ["Standard Turbo Motor", ["Motor", "Radio Control Unit", "Electromagnetic Control Rod", "Rotor"], [6.5625, 8.4375, 4.6875, 6.5625], [2.8125], ["Turbo Motor"], "Manufacturer"],
    ["Alt 1 Turbo Motor", ["Motor", "Pressure Conversion Cube", "Packaged Nitrogen Gas", "Stator"], [7.5, 1.875, 45, 15], [3.75], ["Turbo Motor"], "Manufacturer"],
    ["Alt 2 Turbo Motor", ["Cooling System", "Radio Control Unit", "Motor", "Rubber"], [7.5, 3.75, 7.5, 45], [1.875], ["Turbo Motor"], "Manufacturer"],
    ["Standard Aluminum Ingot", ["Aluminum Scrap"], [60], [30], ["Aluminum Ingot"], "Smelter"],
    ["Alt 1 Aluminum Ingot", ["Aluminum Scrap", "Silica"], [90, 75], [60], ["Aluminum Ingot"], "Foundry"],
    ["Standard Aluminum Scrap", ["Alumina Solution", "Coal"], [180, 60], [300, 105], ["Aluminum Scrap", "Water"], "Refinery"],
    ["Alt 1 Aluminum Scrap", ["Bauxite", "Coal", "Sulfiric Acid", "Water"], [150, 10, 50, 60], [300, 50], ["Aluminum Scrap", "Water"], "Blender"],
    ["Alt 2 Aluminum Scrap", ["Alumina Solution", "Coal"], [240, 120], [360, 120], ["Aluminum Scrap", "Water"], "Blender"],
    ["Standard Electromagnetic Control Rod", ["Stator", "High-Speed Connector"], [8, 4], [8], ["Electromagnetic Control Rod"], "Assembler"],
    ["Alt 1 Electromagnetic Control Rod", ["Stator", "AI Limiter"], [6, 4], [4], ["Electromagnetic Control Rod"], "Assembler"],
    ["Standard Encased Uranium Cell", ["Uranium", "Silica", "Sulfur", "Quickwire"], [25, 15, 25, 75], [20], ["Encased Uranium Cell"], "Manufacturer"],
    ["Alt 1 Encased Uranium Cell", ["Uranium", "Concrete", "Sulfiric Acid"], [50, 15, 40], [25, 10], ["Encased Uranium Cell", "Sulfiric Acid"], "Blender"],
    ["Standard Uranium Fuel Rod", ["Encased Uranium Cell", "Electromagnetic Control Rod", "Crystal Oscillator", "Beacon"], [20, 2, 0.6, 1.2], [0.6], ["Uranium Fuel Rod"], "Manufacturer"],
    ["Alt 1 Uranium Fuel Rod", ["Encased Uranium Cell", "Encased Industrial Beam", "Electromagnetic Control Rod"], [20, 1.2, 2], [0.4], ["Uranium Fuel Rod"], "Manufacturer"],
    ["Stanard Packaged Turbofuel", ["Turbofuel", "Empty Canister"], [20, 20], [20], ["Packaged Turbofuel"], "Packager"],
    ["Standard Aluminm Casing", ["Aluminum Ingot", "Copper Ingot"], [150, 75], [112.5], ["Aluminum Casing"], "Assembler"],
    ["Alt 1 Aluminm Casing", ["Aluminum Ingot"], [90], [60], ["Aluminum Casing"], "Constructor"],
    ["Standard Battery", ["Sulfur", "Alclad Aluminum Sheet", "Plastic", "Wire"], [45, 52.5, 60, 90], [30], ["Battery"], "Manufacturer"],
    ["Alt 1 Battery", ["Sulfiric Acid", "Alumina Solution", "Aluminum Casing"], [50, 40, 20], [20, 30], ["Battery", "Water"], "Blender"],
    ["Standad Cooling System", ["Heat Sink", "Motor", "Nitrogen Gas"], [9.375, 1.875, 45], [3.75], ["Cooling System"], "Blender"],
    ["Alt 1 Cooling System", ["Heat Sink", "Rubber", "Water", "Nitrogen Gas"], [12, 12, 30, 150], [6], ["Cooling System"], "Blender"],
    ["Standard Non-Fissile Uranium", ["Uranium", "Uranium Waste", "Nitric Acid", "Sulfiric Acid"], [25, 25, 15, 25], [100, 40], ["Non-Fissile Uranium", "Water"], "Blender"],
    ["Alt 1 Non-Fissile Uranium", ["Uranium Waste", "Silica", "Nitric Acid", "Sulfiric Acid"], [37.5, 25, 15, 15], [50, 15], ["Non-Fissile Uranium", "Water"], "Blender"],
    ["Standard Fused Modular Frame", ["Heavy Modular Frame", "Aluminum Ingot", "Nitric Acid", "Fuel"], [3, 150, 24, 30], [3], ["Fused Modular Frame"], "Blender"],
    ["Alt 1 Fused Modular Frame", ["Heavy Modular Frame", "Aluminum Casing", "Nitrogen Gas"], [1.5, 75, 37.5], [1.5], ["Fused Modular Frame"], "Blender"],
    ["Standard Encased Plutonium Cell", ["Non-Fissile Uranium", "Aluminum Casing"], [75, 10], [10], ["Encased Plutonium Cell"], "Particle Accelerator"],
    ["Alt 1 Encased Plutonium Cell", ["Plutonium Pellet", "Concrete"], [10, 20], [5], ["Encased Plutonium Cell"], "Assembler"],
    ["Standard Supercomputer", ["Radio Control Unit", "Cooling System"], [9, 9], [3], ["Supercomputer"], "Assembler"],
    ["Alt 1 Supercomputer", ["Computer", "Electromagnetic Control Rod", "Battery", "Wire"], [3.6, 2.4, 24, 54], [2.4], ["Supercomputer"], "Manufacturer"],
    ["Alt 2 Supercomputer", ["Computer", "AI Limiter", "High-Speed Connector", "Plastic"], [3.75, 3.75, 5.625, 52.5], [1.875], ["Supercomputer"], "Manufacturer"],
    ["Standard Plutonium Fuel Rod", ["Encased Plutonium Cell", "Pressure Conversion Cube"], [10, 0.5], [0.5], ["Plutonium Fuel Rod"], "Assembler"],
    ["Alt 1 Plutonium Fuel Rod", ["Encased Plutonium Cell", "Steel Beam", "Electromagnetic Control Rod", "Heat Sink"], [7.5, 4.5, 1.5, 2.5], [0.25], ["Plutonium Fuel Rod"], "Manufacturer"],
    ["Standard Alumina Solution", ["Bauxite", "Wire"], [200, 200], [240], ["Alumina Solution"], "Refinery"],
    ["Alt 1 Alumina Solution", ["Bauxite", "Water"], [120, 180], [120, 50], ["Alumina Solution", "Silica"], "Refinery"],
    ["Alt 2 Alumina Solution", ["Packaged Alumina Solution"], [120], [120, 120], ["Alumina Solution", "Empty Canister"], "Packager"],
    ["Standard Smokeless Powder", ["Black Powder", "Heavy Oil Residue"], [20, 10], [20], ["Smokeless Powder"], "Refinery"],
    ["Standard Packaged Alumina Solution", ["Alumina Solution", "Empty Canister"], [120, 120], [120], ["Packaged Alumina Solution"], "Packager"],
    ["Standard Alclad Aluminum Sheet", ["Aluminum Ingot", "Copper Ingot"], [30, 10], [30], ["Alclad Aluminum Sheet"], "Assembler"],
    ["Standard Sulfiric Acid", ["Sulfur", "Water"], [50, 50], [50], ["Sulfiric Acid"], "Refinery"],
    ["Alt 1 Sulfiric Acid", ["Packaged Sulfiric Acid"], [60], [60, 60], ["Sulfiric Acid", "Empty Canister"], "Packager"],
    ["Standard Packaged Sulfiric Acid", ["Sulfiric Acid", "Empty Canister"], [60, 60], [60], ["Packaged Sulfiric Acid"], "Packager"],
    ["Standad Assembly Director System", ["Adaptive Control Unit", "Supercomputer"], [1.5, 0.75], [0.75], ["Assembly Director System"], "Assembler"],
    ["Standard Magnetic Field Generator", ["Versatile Framework", "Electromagnetic Control Rod", "Battery"], [2.5, 1, 5], [1], ["Magnetic Field Generator"], "Manufacturer"],
    ["Standard Empty Fluid Tank", ["Aluminum Ingot"], [60], [60], ["Empty Fluid Tank"], "Constructor"],
    ["Alt 1 Empty Fluid Tank", ["Packaged Nitrogen Gas"], [60], [240, 60], ["Nitrogen Gas", "Empty Fluid Tank"], "Packager"],
    ["Alt 2 Empty Fluid Tank", ["Packaged Nitric Acid"], [20], [20, 20], ["Nitric Acid", "Empty Fluid Tank"], "Packager"],
    ["Standard Packaged Nitrogen Gas", ["Nitrogen Gas", "Empty Fluid Tank"], [240, 60], [60], ["Packaged Nitrogen Gas"], "Packager"],
    ["Standard Thermal Propulsion Rocket", ["Modular Engine", "Turbo Motor", "Cooling System", "Fused Modular Frame"], [2.5, 1, 3, 1], [1], ["Thermal Propulsion Rocket"], "Manufacturer"],
    ["Standard Nitric Acid", ["Alumina Solution", "Water", "Iron Plate"], [120, 30, 10], [30], ["Nitric Acid"], "Blender"],
    ["Alt 1 Nitric Acid", ["Packaged Nitric Acid"], [20], [20, 20], ["Nitric Acid", "Empty Fluid Tank"], "Packager"],
    ["Standard Packaged Nitric Acid", ["Nitric Acid", "Empty Fluid Tank"], [20, 20], [20], ["Packaged Nitric Acid"], "Packager"],
    ["Standard Plutonium Pellet", ["Non-Fissile Uranium", "Uranium Waste"], [100, 25], [30], ["Plutonium Pellet"], "Particle Accelerator"],
    ["Standard Copper Powder", ["Copper Ingot"], [300], [50], ["Copper Powder"], "Constructor"],
    ["Standard Pressure Conversion Cube", ["Fused Modular Frame", "Radio Control Unit"], [1, 2], [1], ["Pressure Conversion Cube"], "Assembler"],
    ["Standard Nuclear Pasta", ["Copper Powder", "Pressure Conversion Cube"], [100, 0.5], [0.5], ["Nuclear Pasta"], "Particle Accelerator"]
];