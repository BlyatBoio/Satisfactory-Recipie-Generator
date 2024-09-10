let input = "Adaptive Control Unit";
let inpAmnt = 10;
let path1;
let pathsToItterate = [];
let id = 0;
let inputScreenObj;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  loadAllItems();
  loadAllRecipes();
  input = StringToItem(input);
  path1 = new Path(input, id, 0, inpAmnt);
  id++;
  path1.construct();
  pathsToItterate.push(path1);
  inputScreenObj = createInput("Type The Item You Want Recipies For Here");
  inputScreenObj.size(260);
  inputScreenObj.position(width/2 - 130, height/2)
} 
function draw()
{
  background(100);
  textAlign(CENTER);
  if(stringIsItem(inputScreenObj.value())){
    input = inputScreenObj.value();
  } else {
    textSize(20);
    text("Invalid Item Name", width/2, height/2 + 50);
  }
  textSize(30);
  text("Press Enter To Get Results", width/2, height/2 - 30);
}

function displayOutput(){

}

function getOutput(){
  path1 = new Path(input, id, 0, inpAmnt);
  id++;
  path1.construct();
  for(let i = 0; i < 5; i++){
    let leg = pathsToItterate.length
    for(let i = 0; i < leg; i++){
      if(pathsToItterate[i].itterated == false){
        pathsToItterate[i].itterate();
      }
    }
    console.log(path1.branches);
  }
  path1.instructions = [];
  path1.constructInstructions(0);
}
function keyPressed(){
  if(keyCode === 13 && stringIsItem(inputScreenObj.value() == true)){
    console.log(1)
    getOutput();
  }
}
function stringIsItem(str){
  for(let i = 0; i < items.length; i++){
    if(str == items[i].name){
      return true;
    }
  }
  return false;
}
function loadAllItems()
{
  let saveArray = []
  for (let i = 0; i < items.length; i++)
  {
    let a = items[i];
    saveArray.push(new Item(a[0], a[1], a[2], a[3], a[4]));
  }
  items = saveArray;
}
function loadAllRecipes()
{
  let saveArray = []
  for (let i = 0; i < recipes.length; i++)
  {
    let a = recipes[i];
    saveArray.push(new recepie(a[0], a[1], a[2], a[3], a[4], a[5]));
  }
  recipes = saveArray;
}
function StringToItem(string)
{
  for (let i = 0; i < items.length; i++)
  {
    if (items[i].name == string)
    {
      return items[i];
    }
  }
}
function del(a, id)
{
  // creates an empty array and a duplicate of the input array.
  let array = [];
  let array2 = a;
  for (let i = 0; i < array2.length; i++)
  {
    //For the length of the input array, it pushes the values of the input array into the empty array if the current place in the array does not equal the current ID
    if (i != id)
    {
      array.push(array2[i]);
    }
    if (i > id)
    {
      //If the id of the object is larger than the deleted id, it decreases it's ID by one
      //array[i - 1].id -= 1;
    }
  }
  return array;
}
class Item
{
  constructor(name, stackLimit, radioactivity, baseItem, liquid)
  {
    // name of the item
    // ex: Iron_Ingot
    this.name = name;

    // the amout of an item can fit in one stack 
    // ex: 100 Iron Ingots in one stack but 500 screws can fit in one stack
    this.stackLimit = stackLimit;

    // float of 0.2 to 0.4 which describes the intensity of the radioactivity
    // anything below 0.2 will not be considered radioactive.
    this.radioactivity = radioactivity;

    // array containing the different recepies that can poduce this item.
    this.recepies = [];

    // caue to know if an item is at the most basic level such as Iron Ore or crude oil, 
    this.baseItem = baseItem;

    this.liquid = liquid;
  }
}
class recepie
{
  constructor(name, recItems, inRate, outRate, outItems, prodIn)
  {
    // name of the recepie;
    this.name = name;

    // array of the items required to produce the output
    this.requiredItems = recItems;

    // rates of production and output.
    this.inputRate = inRate;
    this.outputRate = outRate;

    // array of the items that are produced by the recepie
    this.output = outItems;

    // name of building that the recepie is made in
    this.producedIn = prodIn;

    this.StringsToItems();
    this.updateProductArrays();
  }
  updateProductArrays()
  {
    // function to update the recepies array in the produced items
    for (let i = 0; i < this.output.length; i++)
    {
      this.output[i].recepies.push(this);
    }
  }
  StringsToItems()
  {
    let a = [];
    for (let i = 0; i < this.requiredItems.length; i++)
    {
      a.push(StringToItem(this.requiredItems[i]));
    }
    this.requiredItems = a;
    a = [];
    for (let i = 0; i < this.output.length; i++)
    {
      a.push(StringToItem(this.output[i]));
    }
    this.output = a;
  }
}
function checkForBranches(item)
{
  // arrays to hold the data
  let recs = [];
  let items = [];
  let steps = [];

  // in the item's recipie's array
  for (let i = 0; i < item.recepies.length; i++)
  {
    //push that array to the recs array
    recs.push(item.recepies[i]);

    // create a variable to return which gives how many items are within each recipe
    let a = 0;
    for (let i2 = 0; i2 < item.recepies[i].requiredItems.length; i2++)
    {
      // push the items into the retrn array
      items.push(item.recepies[i].requiredItems[i2]);
      a++;
    }
    steps.push(a);
  }

  // return the values
  return [recs, items, steps];
}
class Path
{
  constructor(baseItem, id, callBackID, amnt)
  {
    // string to output the final instructions
    this.instructions = [];

    // variable to describe how many times the path has itterated

    // the inital item that is being traced to its root items
    this.baseItem = baseItem;

    this.callBackID = callBackID;

    // array containing the "branches" or sepparate paths of recipes that have been checked

    this.recipes = [];

    this.branches = [];
    this.amnt = amnt;
    this.id = id;
    this.itterated = false;
  }
  construct(){
    let a = checkForBranches(this.baseItem);
    let b = 0;
    let c = 0;
    for(let i = 0; i < a[0].length; i++){
      this.branches.push([]);
      this.recipes.push(a[0][i]);
      for(let i2 = c; i2 < a[1].length; i2++){
        if(b < a[2][i]){
          let amnt = (this.amnt / a[0][i].outputRate[0]) * a[0][i].inputRate[b];
          this.branches[i].push(new Path(a[1][i2], id, this.id, amnt));
          id++;
          b++;
          c++;
        }
      }
      b = 0;
    }
  }
  itterate(){
    for(let i = 0; i < this.branches.length; i++){
      for(let i2 = 0; i2 < this.branches[i].length; i2++){
       this.branches[i][i2].construct();
       pathsToItterate.push(this.branches[i][i2]);
      }
    }
    this.itterated = true;
  }
  constructInstructions(depth)
  {
    let instructions = [];
    instructions.push(this.baseItem.name + " X " + this.amnt, []);
    let currenti2 = 0;
    for(let i = 0; i < this.branches.length; i++){
      instructions[1].push("Using Recipe " + this.recipes[i].name);
      for(let i2 = currenti2; i2 < this.branches[i].length; i2++){
        let a = this.branches[i][i2].constructInstructions(depth + 1);
        instructions[1].push(a);
      }
    }
    if(this.branches.length == 0){
      return this.baseItem.name + " X " + this.amnt;
    } 
    this.instructions = instructions;
    return instructions;
  }
}
