// Do not edit this file; automatically generated by build.py.
'use strict';


// Copyright 2014 Google Inc.  Apache License 2.0
Blockly.Dart=new Blockly.Generator("Dart");Blockly.Dart.addReservedWords("assert,break,case,catch,class,const,continue,default,do,else,enum,extends,false,final,finally,for,if,in,is,new,null,rethrow,return,super,switch,this,throw,true,try,var,void,while,with,print,identityHashCode,identical,BidirectionalIterator,Comparable,double,Function,int,Invocation,Iterable,Iterator,List,Map,Match,num,Pattern,RegExp,Set,StackTrace,String,StringSink,Type,bool,DateTime,Deprecated,Duration,Expando,Null,Object,RuneIterator,Runes,Stopwatch,StringBuffer,Symbol,Uri,Comparator,AbstractClassInstantiationError,ArgumentError,AssertionError,CastError,ConcurrentModificationError,CyclicInitializationError,Error,Exception,FallThroughError,FormatException,IntegerDivisionByZeroException,NoSuchMethodError,NullThrownError,OutOfMemoryError,RangeError,StackOverflowError,StateError,TypeError,UnimplementedError,UnsupportedError");
Blockly.Dart.ORDER_ATOMIC=0;Blockly.Dart.ORDER_UNARY_POSTFIX=1;Blockly.Dart.ORDER_UNARY_PREFIX=2;Blockly.Dart.ORDER_MULTIPLICATIVE=3;Blockly.Dart.ORDER_ADDITIVE=4;Blockly.Dart.ORDER_SHIFT=5;Blockly.Dart.ORDER_BITWISE_AND=6;Blockly.Dart.ORDER_BITWISE_XOR=7;Blockly.Dart.ORDER_BITWISE_OR=8;Blockly.Dart.ORDER_RELATIONAL=9;Blockly.Dart.ORDER_EQUALITY=10;Blockly.Dart.ORDER_LOGICAL_AND=11;Blockly.Dart.ORDER_LOGICAL_OR=12;Blockly.Dart.ORDER_CONDITIONAL=13;Blockly.Dart.ORDER_CASCADE=14;
Blockly.Dart.ORDER_ASSIGNMENT=15;Blockly.Dart.ORDER_NONE=99;
Blockly.Dart.init=function(a){Blockly.Dart.definitions_=Object.create(null);Blockly.Dart.functionNames_=Object.create(null);Blockly.Dart.variableDB_?Blockly.Dart.variableDB_.reset():Blockly.Dart.variableDB_=new Blockly.Names(Blockly.Dart.RESERVED_WORDS_);var b=[];a=Blockly.Variables.allVariables(a);if(a.length){for(var c=0;c<a.length;c++)b[c]=Blockly.Dart.variableDB_.getName(a[c],Blockly.Variables.NAME_TYPE);Blockly.Dart.definitions_.variables="var "+b.join(", ")+";"}};
Blockly.Dart.finish=function(a){a&&(a=Blockly.Dart.prefixLines(a,Blockly.Dart.INDENT));a="main() {\n"+a+"}";var b=[],c=[],d;for(d in Blockly.Dart.definitions_){var e=Blockly.Dart.definitions_[d];e.match(/^import\s/)?b.push(e):c.push(e)}delete Blockly.Dart.definitions_;delete Blockly.Dart.functionNames_;Blockly.Dart.variableDB_.reset();return(b.join("\n")+"\n\n"+c.join("\n\n")).replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a};Blockly.Dart.scrubNakedValue=function(a){return a+";\n"};
Blockly.Dart.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.Dart.scrub_=function(a,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=Blockly.Dart.prefixLines(d,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Dart.allNestedComments(d))&&(c+=Blockly.Dart.prefixLines(d,"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.Dart.blockToCode(e);return c+b+e};Blockly.Dart.colour={};Blockly.Dart.addReservedWords("Math");Blockly.Dart.colour_picker=function(a){return["'"+a.getFieldValue("COLOUR")+"'",Blockly.Dart.ORDER_ATOMIC]};
Blockly.Dart.colour_random=function(a){Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;";return[Blockly.Dart.provideFunction_("colour_random",["String "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"() {","  String hex = '0123456789abcdef';","  var rnd = new Math.Random();","  return '#${hex[rnd.nextInt(16)]}${hex[rnd.nextInt(16)]}'","      '${hex[rnd.nextInt(16)]}${hex[rnd.nextInt(16)]}'","      '${hex[rnd.nextInt(16)]}${hex[rnd.nextInt(16)]}';","}"])+"()",Blockly.Dart.ORDER_UNARY_POSTFIX]};
Blockly.Dart.colour_rgb=function(a){var b=Blockly.Dart.valueToCode(a,"RED",Blockly.Dart.ORDER_NONE)||0,c=Blockly.Dart.valueToCode(a,"GREEN",Blockly.Dart.ORDER_NONE)||0;a=Blockly.Dart.valueToCode(a,"BLUE",Blockly.Dart.ORDER_NONE)||0;Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;";return[Blockly.Dart.provideFunction_("colour_rgb",["String "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(num r, num g, num b) {","  num rn = (Math.max(Math.min(r, 1), 0) * 255).round();","  String rs = rn.toInt().toRadixString(16);",
"  rs = '0$rs';","  rs = rs.substring(rs.length - 2);","  num gn = (Math.max(Math.min(g, 1), 0) * 255).round();","  String gs = gn.toInt().toRadixString(16);","  gs = '0$gs';","  gs = gs.substring(gs.length - 2);","  num bn = (Math.max(Math.min(b, 1), 0) * 255).round();","  String bs = bn.toInt().toRadixString(16);","  bs = '0$bs';","  bs = bs.substring(bs.length - 2);","  return '#$rs$gs$bs';","}"])+"("+b+", "+c+", "+a+")",Blockly.Dart.ORDER_UNARY_POSTFIX]};
Blockly.Dart.colour_blend=function(a){var b=Blockly.Dart.valueToCode(a,"COLOUR1",Blockly.Dart.ORDER_NONE)||"'#000000'",c=Blockly.Dart.valueToCode(a,"COLOUR2",Blockly.Dart.ORDER_NONE)||"'#000000'";a=Blockly.Dart.valueToCode(a,"RATIO",Blockly.Dart.ORDER_NONE)||.5;Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;";return[Blockly.Dart.provideFunction_("colour_blend",["String "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(String c1, String c2, num ratio) {","  ratio = Math.max(Math.min(ratio, 1), 0);",
"  int r1 = int.parse('0x${c1.substring(1, 3)}');","  int g1 = int.parse('0x${c1.substring(3, 5)}');","  int b1 = int.parse('0x${c1.substring(5, 7)}');","  int r2 = int.parse('0x${c2.substring(1, 3)}');","  int g2 = int.parse('0x${c2.substring(3, 5)}');","  int b2 = int.parse('0x${c2.substring(5, 7)}');","  num rn = (r1 * (1 - ratio) + r2 * ratio).round();","  String rs = rn.toInt().toRadixString(16);","  num gn = (g1 * (1 - ratio) + g2 * ratio).round();","  String gs = gn.toInt().toRadixString(16);",
"  num bn = (b1 * (1 - ratio) + b2 * ratio).round();","  String bs = bn.toInt().toRadixString(16);","  rs = '0$rs';","  rs = rs.substring(rs.length - 2);","  gs = '0$gs';","  gs = gs.substring(gs.length - 2);","  bs = '0$bs';","  bs = bs.substring(bs.length - 2);","  return '#$rs$gs$bs';","}"])+"("+b+", "+c+", "+a+")",Blockly.Dart.ORDER_UNARY_POSTFIX]};Blockly.Dart.procedures={};
Blockly.Dart.procedures_defreturn=function(a){var b=Blockly.Dart.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=Blockly.Dart.statementToCode(a,"STACK");Blockly.Dart.STATEMENT_PREFIX&&(c=Blockly.Dart.prefixLines(Blockly.Dart.STATEMENT_PREFIX.replace(/%1/g,"'"+a.id+"'"),Blockly.Dart.INDENT)+c);Blockly.Dart.INFINITE_LOOP_TRAP&&(c=Blockly.Dart.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+a.id+"'")+c);var d=Blockly.Dart.valueToCode(a,"RETURN",Blockly.Dart.ORDER_NONE)||"";d&&(d="  return "+
d+";\n");for(var e=d?"dynamic":"void",f=[],g=0;g<a.arguments_.length;g++)f[g]=Blockly.Dart.variableDB_.getName(a.arguments_[g],Blockly.Variables.NAME_TYPE);c=e+" "+b+"("+f.join(", ")+") {\n"+c+d+"}";c=Blockly.Dart.scrub_(a,c);Blockly.Dart.definitions_[b]=c;return null};Blockly.Dart.procedures_defnoreturn=Blockly.Dart.procedures_defreturn;
Blockly.Dart.procedures_callreturn=function(a){for(var b=Blockly.Dart.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Dart.valueToCode(a,"ARG"+d,Blockly.Dart.ORDER_NONE)||"null";return[b+"("+c.join(", ")+")",Blockly.Dart.ORDER_UNARY_POSTFIX]};
Blockly.Dart.procedures_callnoreturn=function(a){for(var b=Blockly.Dart.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Dart.valueToCode(a,"ARG"+d,Blockly.Dart.ORDER_NONE)||"null";return b+"("+c.join(", ")+");\n"};
Blockly.Dart.procedures_ifreturn=function(a){var b="if ("+(Blockly.Dart.valueToCode(a,"CONDITION",Blockly.Dart.ORDER_NONE)||"false")+") {\n";a.hasReturnValue_?(a=Blockly.Dart.valueToCode(a,"VALUE",Blockly.Dart.ORDER_NONE)||"null",b+="  return "+a+";\n"):b+="  return;\n";return b+"}\n"};Blockly.Dart.lists={};Blockly.Dart.addReservedWords("Math");Blockly.Dart.lists_create_empty=function(a){return["[]",Blockly.Dart.ORDER_ATOMIC]};Blockly.Dart.lists_create_with=function(a){for(var b=Array(a.itemCount_),c=0;c<a.itemCount_;c++)b[c]=Blockly.Dart.valueToCode(a,"ADD"+c,Blockly.Dart.ORDER_NONE)||"null";b="["+b.join(", ")+"]";return[b,Blockly.Dart.ORDER_ATOMIC]};
Blockly.Dart.lists_repeat=function(a){var b=Blockly.Dart.valueToCode(a,"ITEM",Blockly.Dart.ORDER_NONE)||"null";return["new List.filled("+(Blockly.Dart.valueToCode(a,"NUM",Blockly.Dart.ORDER_NONE)||"0")+", "+b+")",Blockly.Dart.ORDER_UNARY_POSTFIX]};Blockly.Dart.lists_length=function(a){return[(Blockly.Dart.valueToCode(a,"VALUE",Blockly.Dart.ORDER_UNARY_POSTFIX)||"[]")+".length",Blockly.Dart.ORDER_UNARY_POSTFIX]};
Blockly.Dart.lists_isEmpty=function(a){return[(Blockly.Dart.valueToCode(a,"VALUE",Blockly.Dart.ORDER_UNARY_POSTFIX)||"[]")+".isEmpty",Blockly.Dart.ORDER_UNARY_POSTFIX]};Blockly.Dart.lists_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"indexOf":"lastIndexOf",c=Blockly.Dart.valueToCode(a,"FIND",Blockly.Dart.ORDER_NONE)||"''";return[(Blockly.Dart.valueToCode(a,"VALUE",Blockly.Dart.ORDER_UNARY_POSTFIX)||"[]")+"."+b+"("+c+") + 1",Blockly.Dart.ORDER_UNARY_POSTFIX]};
Blockly.Dart.lists_getIndex=function(a){var b=a.getFieldValue("MODE")||"GET",c=a.getFieldValue("WHERE")||"FROM_START",d=Blockly.Dart.valueToCode(a,"AT",Blockly.Dart.ORDER_UNARY_PREFIX)||"1";a=Blockly.Dart.valueToCode(a,"VALUE",Blockly.Dart.ORDER_UNARY_POSTFIX)||"[]";if("FIRST"==c){if("GET"==b)return[a+".first",Blockly.Dart.ORDER_UNARY_POSTFIX];if("GET_REMOVE"==b)return[a+".removeAt(0)",Blockly.Dart.ORDER_UNARY_POSTFIX];if("REMOVE"==b)return a+".removeAt(0);\n"}else if("LAST"==c){if("GET"==b)return[a+
".last",Blockly.Dart.ORDER_UNARY_POSTFIX];if("GET_REMOVE"==b)return[a+".removeLast()",Blockly.Dart.ORDER_UNARY_POSTFIX];if("REMOVE"==b)return a+".removeLast();\n"}else if("FROM_START"==c){d=Blockly.isNumber(d)?parseInt(d,10)-1:d+" - 1";if("GET"==b)return[a+"["+d+"]",Blockly.Dart.ORDER_UNARY_POSTFIX];if("GET_REMOVE"==b)return[a+".removeAt("+d+")",Blockly.Dart.ORDER_UNARY_POSTFIX];if("REMOVE"==b)return a+".removeAt("+d+");\n"}else if("FROM_END"==c){if("GET"==b)return c=Blockly.Dart.provideFunction_("lists_get_from_end",
["dynamic "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(List myList, num x) {","  x = myList.length - x;","  return myList.removeAt(x);","}"]),[c+"("+a+", "+d+")",Blockly.Dart.ORDER_UNARY_POSTFIX];if("GET_REMOVE"==b||"REMOVE"==b){c=Blockly.Dart.provideFunction_("lists_remove_from_end",["dynamic "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(List myList, num x) {","  x = myList.length - x;","  return myList.removeAt(x);","}"]);d=c+"("+a+", "+d+")";if("GET_REMOVE"==b)return[d,Blockly.Dart.ORDER_UNARY_POSTFIX];
if("REMOVE"==b)return d+";\n"}}else if("RANDOM"==c){Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;";c=Blockly.Dart.provideFunction_("lists_get_random_item",["dynamic "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(List myList, bool remove) {","  int x = new Math.Random().nextInt(myList.length);","  if (remove) {","    return myList.removeAt(x);","  } else {","    return myList[x];","  }","}"]);d=c+"("+a+", "+("GET"!=b)+")";if("GET"==b||"GET_REMOVE"==b)return[d,Blockly.Dart.ORDER_UNARY_POSTFIX];
if("REMOVE"==b)return d+";\n"}throw"Unhandled combination (lists_getIndex).";};
Blockly.Dart.lists_setIndex=function(a){function b(){if(c.match(/^\w+$/))return"";var a=Blockly.Dart.variableDB_.getDistinctName("tmp_list",Blockly.Variables.NAME_TYPE),b="List "+a+" = "+c+";\n";c=a;return b}var c=Blockly.Dart.valueToCode(a,"LIST",Blockly.Dart.ORDER_UNARY_POSTFIX)||"[]",d=a.getFieldValue("MODE")||"GET",e=a.getFieldValue("WHERE")||"FROM_START",f=Blockly.Dart.valueToCode(a,"AT",Blockly.Dart.ORDER_ADDITIVE)||"1";a=Blockly.Dart.valueToCode(a,"TO",Blockly.Dart.ORDER_ASSIGNMENT)||"null";
if("FIRST"==e){if("SET"==d)return c+"[0] = "+a+";\n";if("INSERT"==d)return c+".insert(0, "+a+");\n"}else if("LAST"==e){if("SET"==d)return e=b(),e+(c+"["+c+".length - 1] = "+a+";\n");if("INSERT"==d)return c+".add("+a+");\n"}else if("FROM_START"==e){f=Blockly.isNumber(f)?parseInt(f,10)-1:f+" - 1";if("SET"==d)return c+"["+f+"] = "+a+";\n";if("INSERT"==d)return c+".insert("+f+", "+a+");\n"}else if("FROM_END"==e){e=b();if("SET"==d)return e+(c+"["+c+".length - "+f+"] = "+a+";\n");if("INSERT"==d)return e+
(c+".insert("+c+".length - "+f+", "+a+");\n")}else if("RANDOM"==e){Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;";e=b();f=Blockly.Dart.variableDB_.getDistinctName("tmp_x",Blockly.Variables.NAME_TYPE);e+="int "+f+" = new Math.Random().nextInt("+c+".length);";if("SET"==d)return e+(c+"["+f+"] = "+a+";\n");if("INSERT"==d)return e+(c+".insert("+f+", "+a+");\n")}throw"Unhandled combination (lists_setIndex).";};
Blockly.Dart.lists_getSublist=function(a){var b=Blockly.Dart.valueToCode(a,"LIST",Blockly.Dart.ORDER_UNARY_POSTFIX)||"[]",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2"),e=Blockly.Dart.valueToCode(a,"AT1",Blockly.Dart.ORDER_NONE)||"1";a=Blockly.Dart.valueToCode(a,"AT2",Blockly.Dart.ORDER_NONE)||"1";("FIRST"==c||"FROM_START"==c&&Blockly.isNumber(e))&&("LAST"==d||"FROM_START"==d&&Blockly.isNumber(a))?(e="FIRST"==c?0:parseInt(e,10)-1,"LAST"==d?b=b+".sublist("+e+")":(a=parseInt(a,10),b=b+".sublist("+
e+", "+a+")")):b=Blockly.Dart.provideFunction_("lists_get_sublist",["List "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(list, where1, at1, where2, at2) {","  int getAt(where, at) {","    if (where == 'FROM_START') {","      at--;","    } else if (where == 'FROM_END') {","      at = list.length - at;","    } else if (where == 'FIRST') {","      at = 0;","    } else if (where == 'LAST') {","      at = list.length - 1;","    } else {","      throw 'Unhandled option (lists_getSublist).';","    }","    return at;",
"  }","  at1 = getAt(where1, at1);","  at2 = getAt(where2, at2) + 1;","  return list.sublist(at1, at2);","}"])+"("+b+", '"+c+"', "+e+", '"+d+"', "+a+")";return[b,Blockly.Dart.ORDER_UNARY_POSTFIX]};
Blockly.Dart.lists_sort=function(a){var b=Blockly.Dart.valueToCode(a,"LIST",Blockly.Dart.ORDER_UNARY_POSTFIX)||"[]",c="1"===a.getFieldValue("DIRECTION")?1:-1;a=a.getFieldValue("TYPE");return[Blockly.Dart.provideFunction_("lists_sort",["List "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(list, type, direction) {","  var compareFuncs = {",'    "NUMERIC": (a, b) => direction * a.compareTo(b),','    "TEXT": (a, b) => direction * a.toString().compareTo(b.toString()),','    "IGNORE_CASE": ',"       (a, b) => direction * ",
"      a.toString().toLowerCase().compareTo(b.toString().toLowerCase())","  };","  list = new List.from(list);","  var compare = compareFuncs[type];","  list.sort(compare);","  return list;","}"])+"("+b+', "'+a+'", '+c+")",Blockly.Dart.ORDER_UNARY_POSTFIX]};
Blockly.Dart.lists_split=function(a){var b=Blockly.Dart.valueToCode(a,"INPUT",Blockly.Dart.ORDER_UNARY_POSTFIX),c=Blockly.Dart.valueToCode(a,"DELIM",Blockly.Dart.ORDER_NONE)||"''";a=a.getFieldValue("MODE");if("SPLIT"==a)b||(b="''"),a="split";else if("JOIN"==a)b||(b="[]"),a="join";else throw"Unknown mode: "+a;return[b+"."+a+"("+c+")",Blockly.Dart.ORDER_UNARY_POSTFIX]};Blockly.Dart.math={};Blockly.Dart.addReservedWords("Math");Blockly.Dart.math_number=function(a){a=parseFloat(a.getFieldValue("NUM"));if(Infinity==a){a="double.INFINITY";var b=Blockly.Dart.ORDER_UNARY_POSTFIX}else-Infinity==a?(a="-double.INFINITY",b=Blockly.Dart.ORDER_UNARY_PREFIX):b=0>a?Blockly.Dart.ORDER_UNARY_PREFIX:Blockly.Dart.ORDER_ATOMIC;return[a,b]};
Blockly.Dart.math_arithmetic=function(a){var b={ADD:[" + ",Blockly.Dart.ORDER_ADDITIVE],MINUS:[" - ",Blockly.Dart.ORDER_ADDITIVE],MULTIPLY:[" * ",Blockly.Dart.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",Blockly.Dart.ORDER_MULTIPLICATIVE],POWER:[null,Blockly.Dart.ORDER_NONE]}[a.getFieldValue("OP")],c=b[0];b=b[1];var d=Blockly.Dart.valueToCode(a,"A",b)||"0";a=Blockly.Dart.valueToCode(a,"B",b)||"0";return c?[d+c+a,b]:(Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;",["Math.pow("+d+", "+
a+")",Blockly.Dart.ORDER_UNARY_POSTFIX])};
Blockly.Dart.math_single=function(a){var b=a.getFieldValue("OP");if("NEG"==b)return a=Blockly.Dart.valueToCode(a,"NUM",Blockly.Dart.ORDER_UNARY_PREFIX)||"0","-"==a[0]&&(a=" "+a),["-"+a,Blockly.Dart.ORDER_UNARY_PREFIX];Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;";a="ABS"==b||"ROUND"==b.substring(0,5)?Blockly.Dart.valueToCode(a,"NUM",Blockly.Dart.ORDER_UNARY_POSTFIX)||"0":"SIN"==b||"COS"==b||"TAN"==b?Blockly.Dart.valueToCode(a,"NUM",Blockly.Dart.ORDER_MULTIPLICATIVE)||"0":
Blockly.Dart.valueToCode(a,"NUM",Blockly.Dart.ORDER_NONE)||"0";switch(b){case "ABS":var c=a+".abs()";break;case "ROOT":c="Math.sqrt("+a+")";break;case "LN":c="Math.log("+a+")";break;case "EXP":c="Math.exp("+a+")";break;case "POW10":c="Math.pow(10,"+a+")";break;case "ROUND":c=a+".round()";break;case "ROUNDUP":c=a+".ceil()";break;case "ROUNDDOWN":c=a+".floor()";break;case "SIN":c="Math.sin("+a+" / 180 * Math.PI)";break;case "COS":c="Math.cos("+a+" / 180 * Math.PI)";break;case "TAN":c="Math.tan("+a+
" / 180 * Math.PI)"}if(c)return[c,Blockly.Dart.ORDER_UNARY_POSTFIX];switch(b){case "LOG10":c="Math.log("+a+") / Math.log(10)";break;case "ASIN":c="Math.asin("+a+") / Math.PI * 180";break;case "ACOS":c="Math.acos("+a+") / Math.PI * 180";break;case "ATAN":c="Math.atan("+a+") / Math.PI * 180";break;default:throw"Unknown math operator: "+b;}return[c,Blockly.Dart.ORDER_MULTIPLICATIVE]};
Blockly.Dart.math_constant=function(a){var b={PI:["Math.PI",Blockly.Dart.ORDER_UNARY_POSTFIX],E:["Math.E",Blockly.Dart.ORDER_UNARY_POSTFIX],GOLDEN_RATIO:["(1 + Math.sqrt(5)) / 2",Blockly.Dart.ORDER_MULTIPLICATIVE],SQRT2:["Math.SQRT2",Blockly.Dart.ORDER_UNARY_POSTFIX],SQRT1_2:["Math.SQRT1_2",Blockly.Dart.ORDER_UNARY_POSTFIX],INFINITY:["double.INFINITY",Blockly.Dart.ORDER_ATOMIC]};a=a.getFieldValue("CONSTANT");"INFINITY"!=a&&(Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;");
return b[a]};
Blockly.Dart.math_number_property=function(a){var b=Blockly.Dart.valueToCode(a,"NUMBER_TO_CHECK",Blockly.Dart.ORDER_MULTIPLICATIVE);if(!b)return["false",Blockly.Python.ORDER_ATOMIC];var c=a.getFieldValue("PROPERTY");if("PRIME"==c)return Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;",[Blockly.Dart.provideFunction_("math_isPrime",["bool "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(n) {","  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  if (n == 2 || n == 3) {","    return true;",
"  }","  // False if n is null, negative, is 1, or not whole.","  // And false if n is divisible by 2 or 3.","  if (n == null || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {","    return false;","  }","  // Check all the numbers of form 6k +/- 1, up to sqrt(n).","  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {","    if (n % (x - 1) == 0 || n % (x + 1) == 0) {","      return false;","    }","  }","  return true;","}"])+"("+b+")",Blockly.Dart.ORDER_UNARY_POSTFIX];switch(c){case "EVEN":var d=
b+" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":d=b+" % 1 == 0";break;case "POSITIVE":d=b+" > 0";break;case "NEGATIVE":d=b+" < 0";break;case "DIVISIBLE_BY":a=Blockly.Dart.valueToCode(a,"DIVISOR",Blockly.Dart.ORDER_MULTIPLICATIVE);if(!a)return["false",Blockly.Python.ORDER_ATOMIC];d=b+" % "+a+" == 0"}return[d,Blockly.Dart.ORDER_EQUALITY]};
Blockly.Dart.math_change=function(a){var b=Blockly.Dart.valueToCode(a,"DELTA",Blockly.Dart.ORDER_ADDITIVE)||"0";a=Blockly.Dart.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);return a+" = ("+a+" is num ? "+a+" : 0) + "+b+";\n"};Blockly.Dart.math_round=Blockly.Dart.math_single;Blockly.Dart.math_trig=Blockly.Dart.math_single;
Blockly.Dart.math_on_list=function(a){var b=a.getFieldValue("OP");a=Blockly.Dart.valueToCode(a,"LIST",Blockly.Dart.ORDER_NONE)||"[]";switch(b){case "SUM":b=Blockly.Dart.provideFunction_("math_sum",["num "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  num sumVal = 0;","  myList.forEach((num entry) {sumVal += entry;});","  return sumVal;","}"]);b=b+"("+a+")";break;case "MIN":Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;";b=Blockly.Dart.provideFunction_("math_min",
["num "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  if (myList.isEmpty) return null;","  num minVal = myList[0];","  myList.forEach((num entry) {minVal = Math.min(minVal, entry);});","  return minVal;","}"]);b=b+"("+a+")";break;case "MAX":Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;";b=Blockly.Dart.provideFunction_("math_max",["num "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  if (myList.isEmpty) return null;","  num maxVal = myList[0];",
"  myList.forEach((num entry) {maxVal = Math.max(maxVal, entry);});","  return maxVal;","}"]);b=b+"("+a+")";break;case "AVERAGE":b=Blockly.Dart.provideFunction_("math_average",["num "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  // First filter list for numbers only.","  List localList = new List.from(myList);","  localList.removeMatching((a) => a is! num);","  if (localList.isEmpty) return null;","  num sumVal = 0;","  localList.forEach((num entry) {sumVal += entry;});","  return sumVal / localList.length;",
"}"]);b=b+"("+a+")";break;case "MEDIAN":b=Blockly.Dart.provideFunction_("math_median",["num "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  // First filter list for numbers only, then sort, then return middle value","  // or the average of two middle values if list has an even number of elements.","  List localList = new List.from(myList);","  localList.removeMatching((a) => a is! num);","  if (localList.isEmpty) return null;","  localList.sort((a, b) => (a - b));","  int index = localList.length ~/ 2;",
"  if (localList.length % 2 == 1) {","    return localList[index];","  } else {","    return (localList[index - 1] + localList[index]) / 2;","  }","}"]);b=b+"("+a+")";break;case "MODE":Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;";b=Blockly.Dart.provideFunction_("math_modes",["List "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(List values) {","  List modes = [];","  List counts = [];","  int maxCount = 0;","  for (int i = 0; i < values.length; i++) {","    var value = values[i];",
"    bool found = false;","    int thisCount;","    for (int j = 0; j < counts.length; j++) {","      if (counts[j][0] == value) {","        thisCount = ++counts[j][1];","        found = true;","        break;","      }","    }","    if (!found) {","      counts.add([value, 1]);","      thisCount = 1;","    }","    maxCount = Math.max(thisCount, maxCount);","  }","  for (int j = 0; j < counts.length; j++) {","    if (counts[j][1] == maxCount) {","        modes.add(counts[j][0]);","    }","  }","  return modes;",
"}"]);b=b+"("+a+")";break;case "STD_DEV":Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;";b=Blockly.Dart.provideFunction_("math_standard_deviation",["num "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  // First filter list for numbers only.","  List numbers = new List.from(myList);","  numbers.removeMatching((a) => a is! num);","  if (numbers.isEmpty) return null;","  num n = numbers.length;","  num sum = 0;","  numbers.forEach((x) => sum += x);","  num mean = sum / n;",
"  num sumSquare = 0;","  numbers.forEach((x) => sumSquare += Math.pow(x - mean, 2));","  return Math.sqrt(sumSquare / n);","}"]);b=b+"("+a+")";break;case "RANDOM":Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;";b=Blockly.Dart.provideFunction_("math_random_item",["dynamic "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  int x = new Math.Random().nextInt(myList.length);","  return myList[x];","}"]);b=b+"("+a+")";break;default:throw"Unknown operator: "+b;}return[b,
Blockly.Dart.ORDER_UNARY_POSTFIX]};Blockly.Dart.math_modulo=function(a){var b=Blockly.Dart.valueToCode(a,"DIVIDEND",Blockly.Dart.ORDER_MULTIPLICATIVE)||"0";a=Blockly.Dart.valueToCode(a,"DIVISOR",Blockly.Dart.ORDER_MULTIPLICATIVE)||"0";return[b+" % "+a,Blockly.Dart.ORDER_MULTIPLICATIVE]};
Blockly.Dart.math_constrain=function(a){Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;";var b=Blockly.Dart.valueToCode(a,"VALUE",Blockly.Dart.ORDER_NONE)||"0",c=Blockly.Dart.valueToCode(a,"LOW",Blockly.Dart.ORDER_NONE)||"0";a=Blockly.Dart.valueToCode(a,"HIGH",Blockly.Dart.ORDER_NONE)||"double.INFINITY";return["Math.min(Math.max("+b+", "+c+"), "+a+")",Blockly.Dart.ORDER_UNARY_POSTFIX]};
Blockly.Dart.math_random_int=function(a){Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;";var b=Blockly.Dart.valueToCode(a,"FROM",Blockly.Dart.ORDER_NONE)||"0";a=Blockly.Dart.valueToCode(a,"TO",Blockly.Dart.ORDER_NONE)||"0";return[Blockly.Dart.provideFunction_("math_random_int",["int "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(num a, num b) {","  if (a > b) {","    // Swap a and b to ensure a is smaller.","    num c = a;","    a = b;","    b = c;","  }","  return new Math.Random().nextInt(b - a + 1) + a;",
"}"])+"("+b+", "+a+")",Blockly.Dart.ORDER_UNARY_POSTFIX]};Blockly.Dart.math_random_float=function(a){Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;";return["new Math.Random().nextDouble()",Blockly.Dart.ORDER_UNARY_POSTFIX]};Blockly.Dart.logic={};Blockly.Dart.controls_if=function(a){var b=0,c=Blockly.Dart.valueToCode(a,"IF"+b,Blockly.Dart.ORDER_NONE)||"false",d=Blockly.Dart.statementToCode(a,"DO"+b),e="if ("+c+") {\n"+d+"}";for(b=1;b<=a.elseifCount_;b++)c=Blockly.Dart.valueToCode(a,"IF"+b,Blockly.Dart.ORDER_NONE)||"false",d=Blockly.Dart.statementToCode(a,"DO"+b),e+=" else if ("+c+") {\n"+d+"}";a.elseCount_&&(d=Blockly.Dart.statementToCode(a,"ELSE"),e+=" else {\n"+d+"}");return e+"\n"};
Blockly.Dart.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c="=="==b||"!="==b?Blockly.Dart.ORDER_EQUALITY:Blockly.Dart.ORDER_RELATIONAL,d=Blockly.Dart.valueToCode(a,"A",c)||"0";a=Blockly.Dart.valueToCode(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
Blockly.Dart.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"&&":"||",c="&&"==b?Blockly.Dart.ORDER_LOGICAL_AND:Blockly.Dart.ORDER_LOGICAL_OR,d=Blockly.Dart.valueToCode(a,"A",c);a=Blockly.Dart.valueToCode(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};Blockly.Dart.logic_negate=function(a){var b=Blockly.Dart.ORDER_UNARY_PREFIX;return["!"+(Blockly.Dart.valueToCode(a,"BOOL",b)||"true"),b]};
Blockly.Dart.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"true":"false",Blockly.Dart.ORDER_ATOMIC]};Blockly.Dart.logic_null=function(a){return["null",Blockly.Dart.ORDER_ATOMIC]};Blockly.Dart.logic_ternary=function(a){var b=Blockly.Dart.valueToCode(a,"IF",Blockly.Dart.ORDER_CONDITIONAL)||"false",c=Blockly.Dart.valueToCode(a,"THEN",Blockly.Dart.ORDER_CONDITIONAL)||"null";a=Blockly.Dart.valueToCode(a,"ELSE",Blockly.Dart.ORDER_CONDITIONAL)||"null";return[b+" ? "+c+" : "+a,Blockly.Dart.ORDER_CONDITIONAL]};Blockly.Dart.variables={};Blockly.Dart.variables_get=function(a){return[Blockly.Dart.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.Dart.ORDER_ATOMIC]};Blockly.Dart.variables_set=function(a){var b=Blockly.Dart.valueToCode(a,"VALUE",Blockly.Dart.ORDER_ASSIGNMENT)||"0";return Blockly.Dart.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" = "+b+";\n"};Blockly.Dart.texts={};Blockly.Dart.addReservedWords("Html,Math");Blockly.Dart.text=function(a){return[Blockly.Dart.quote_(a.getFieldValue("TEXT")),Blockly.Dart.ORDER_ATOMIC]};
Blockly.Dart.text_join=function(a){if(0==a.itemCount_)return["''",Blockly.Dart.ORDER_ATOMIC];if(1==a.itemCount_)return[(Blockly.Dart.valueToCode(a,"ADD0",Blockly.Dart.ORDER_UNARY_POSTFIX)||"''")+".toString()",Blockly.Dart.ORDER_UNARY_POSTFIX];var b=Array(a.itemCount_);for(var c=0;c<a.itemCount_;c++)b[c]=Blockly.Dart.valueToCode(a,"ADD"+c,Blockly.Dart.ORDER_NONE)||"''";b="["+b.join(",")+"].join()";return[b,Blockly.Dart.ORDER_UNARY_POSTFIX]};
Blockly.Dart.text_append=function(a){var b=Blockly.Dart.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);a=Blockly.Dart.valueToCode(a,"TEXT",Blockly.Dart.ORDER_UNARY_POSTFIX)||"''";return b+" = ["+b+", "+a+"].join();\n"};Blockly.Dart.text_length=function(a){return[(Blockly.Dart.valueToCode(a,"VALUE",Blockly.Dart.ORDER_UNARY_POSTFIX)||"''")+".length",Blockly.Dart.ORDER_UNARY_POSTFIX]};
Blockly.Dart.text_isEmpty=function(a){return[(Blockly.Dart.valueToCode(a,"VALUE",Blockly.Dart.ORDER_UNARY_POSTFIX)||"''")+".isEmpty",Blockly.Dart.ORDER_UNARY_POSTFIX]};Blockly.Dart.text_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"indexOf":"lastIndexOf",c=Blockly.Dart.valueToCode(a,"FIND",Blockly.Dart.ORDER_NONE)||"''";return[(Blockly.Dart.valueToCode(a,"VALUE",Blockly.Dart.ORDER_UNARY_POSTFIX)||"''")+"."+b+"("+c+") + 1",Blockly.Dart.ORDER_UNARY_POSTFIX]};
Blockly.Dart.text_charAt=function(a){var b=a.getFieldValue("WHERE")||"FROM_START",c=Blockly.Dart.valueToCode(a,"AT",Blockly.Dart.ORDER_NONE)||"1";a=Blockly.Dart.valueToCode(a,"VALUE",Blockly.Dart.ORDER_UNARY_POSTFIX)||"''";switch(b){case "FIRST":return[a+"[0]",Blockly.Dart.ORDER_UNARY_POSTFIX];case "FROM_START":return c=c.match(/^-?\d+$/)?parseInt(c,10)-1:c+" - 1",[a+"["+c+"]",Blockly.Dart.ORDER_UNARY_POSTFIX];case "LAST":c=1;case "FROM_END":return b=Blockly.Dart.provideFunction_("text_get_from_end",
["String "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(String text, num x) {","  return text[text.length - x];","}"]),[b+"("+a+", "+c+")",Blockly.Dart.ORDER_UNARY_POSTFIX];case "RANDOM":return Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;",b=Blockly.Dart.provideFunction_("text_random_letter",["String "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(String text) {","  int x = new Math.Random().nextInt(text.length);","  return text[x];","}"]),[b+"("+a+")",Blockly.Dart.ORDER_UNARY_POSTFIX]}throw"Unhandled option (text_charAt).";
};
Blockly.Dart.text_getSubstring=function(a){var b=Blockly.Dart.valueToCode(a,"STRING",Blockly.Dart.ORDER_UNARY_POSTFIX)||"''",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2"),e=Blockly.Dart.valueToCode(a,"AT1",Blockly.Dart.ORDER_NONE)||"1";a=Blockly.Dart.valueToCode(a,"AT2",Blockly.Dart.ORDER_NONE)||"1";return["FIRST"==c&&"LAST"==d?b:Blockly.Dart.provideFunction_("text_get_substring",["function "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(text, where1, at1, where2, at2) {","  function getAt(where, at) {","    if (where == 'FROM_START') {",
"      at--;","    } else if (where == 'FROM_END') {","      at = text.length - at;","    } else if (where == 'FIRST') {","      at = 0;","    } else if (where == 'LAST') {","      at = text.length - 1;","    } else {","      throw 'Unhandled option (text_getSubstring).';","    }","    return at;","  }","  at1 = getAt(where1, at1);","  at2 = getAt(where2, at2) + 1;","  return text.substring(at1, at2);","}"])+"("+b+", '"+c+"', "+e+", '"+d+"', "+a+")",Blockly.Dart.ORDER_UNARY_POSTFIX]};
Blockly.Dart.text_changeCase=function(a){var b={UPPERCASE:".toUpperCase()",LOWERCASE:".toLowerCase()",TITLECASE:null}[a.getFieldValue("CASE")];b?(a=Blockly.Dart.valueToCode(a,"TEXT",Blockly.Dart.ORDER_UNARY_POSTFIX)||"''",a+=b):(b=Blockly.Dart.provideFunction_("text_toTitleCase",["String "+Blockly.Dart.FUNCTION_NAME_PLACEHOLDER_+"(String str) {","  RegExp exp = new RegExp(r'\\b');","  List<String> list = str.split(exp);","  final title = new StringBuffer();","  for (String part in list) {","    if (part.length > 0) {",
"      title.write(part[0].toUpperCase());","      if (part.length > 0) {","        title.write(part.substring(1).toLowerCase());","      }","    }","  }","  return title.toString();","}"]),a=Blockly.Dart.valueToCode(a,"TEXT",Blockly.Dart.ORDER_NONE)||"''",a=b+"("+a+")");return[a,Blockly.Dart.ORDER_UNARY_POSTFIX]};
Blockly.Dart.text_trim=function(a){var b={LEFT:".replaceFirst(new RegExp(r'^\\s+'), '')",RIGHT:".replaceFirst(new RegExp(r'\\s+$'), '')",BOTH:".trim()"}[a.getFieldValue("MODE")];return[(Blockly.Dart.valueToCode(a,"TEXT",Blockly.Dart.ORDER_UNARY_POSTFIX)||"''")+b,Blockly.Dart.ORDER_UNARY_POSTFIX]};Blockly.Dart.text_print=function(a){return"print("+(Blockly.Dart.valueToCode(a,"TEXT",Blockly.Dart.ORDER_NONE)||"''")+");\n"};
Blockly.Dart.text_prompt_ext=function(a){Blockly.Dart.definitions_.import_dart_html="import 'dart:html' as Html;";var b="Html.window.prompt("+(a.getField("TEXT")?Blockly.Dart.quote_(a.getFieldValue("TEXT")):Blockly.Dart.valueToCode(a,"TEXT",Blockly.Dart.ORDER_NONE)||"''")+", '')";"NUMBER"==a.getFieldValue("TYPE")&&(Blockly.Dart.definitions_.import_dart_math="import 'dart:math' as Math;",b="Math.parseDouble("+b+")");return[b,Blockly.Dart.ORDER_UNARY_POSTFIX]};Blockly.Dart.text_prompt=Blockly.Dart.text_prompt_ext;Blockly.Dart.loops={};
Blockly.Dart.controls_repeat_ext=function(a){var b=a.getField("TIMES")?String(Number(a.getFieldValue("TIMES"))):Blockly.Dart.valueToCode(a,"TIMES",Blockly.Dart.ORDER_ASSIGNMENT)||"0",c=Blockly.Dart.statementToCode(a,"DO");c=Blockly.Dart.addLoopTrap(c,a.id);a="";var d=Blockly.Dart.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE),e=b;b.match(/^\w+$/)||Blockly.isNumber(b)||(e=Blockly.Dart.variableDB_.getDistinctName("repeat_end",Blockly.Variables.NAME_TYPE),a+="var "+e+" = "+b+";\n");
return a+("for (int "+d+" = 0; "+d+" < "+e+"; "+d+"++) {\n"+c+"}\n")};Blockly.Dart.controls_repeat=Blockly.Dart.controls_repeat_ext;Blockly.Dart.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.Dart.valueToCode(a,"BOOL",b?Blockly.Dart.ORDER_UNARY_PREFIX:Blockly.Dart.ORDER_NONE)||"false",d=Blockly.Dart.statementToCode(a,"DO");d=Blockly.Dart.addLoopTrap(d,a.id);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
Blockly.Dart.controls_for=function(a){var b=Blockly.Dart.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.Dart.valueToCode(a,"FROM",Blockly.Dart.ORDER_ASSIGNMENT)||"0",d=Blockly.Dart.valueToCode(a,"TO",Blockly.Dart.ORDER_ASSIGNMENT)||"0",e=Blockly.Dart.valueToCode(a,"BY",Blockly.Dart.ORDER_ASSIGNMENT)||"1",f=Blockly.Dart.statementToCode(a,"DO");f=Blockly.Dart.addLoopTrap(f,a.id);if(Blockly.isNumber(c)&&Blockly.isNumber(d)&&Blockly.isNumber(e)){var g=parseFloat(c)<=
parseFloat(d);a="for ("+b+" = "+c+"; "+b+(g?" <= ":" >= ")+d+"; "+b;b=Math.abs(parseFloat(e));a=(1==b?a+(g?"++":"--"):a+((g?" += ":" -= ")+b))+(") {\n"+f+"}\n")}else a="",g=c,c.match(/^\w+$/)||Blockly.isNumber(c)||(g=Blockly.Dart.variableDB_.getDistinctName(b+"_start",Blockly.Variables.NAME_TYPE),a+="var "+g+" = "+c+";\n"),c=d,d.match(/^\w+$/)||Blockly.isNumber(d)||(c=Blockly.Dart.variableDB_.getDistinctName(b+"_end",Blockly.Variables.NAME_TYPE),a+="var "+c+" = "+d+";\n"),d=Blockly.Dart.variableDB_.getDistinctName(b+
"_inc",Blockly.Variables.NAME_TYPE),a+="num "+d+" = ",a=Blockly.isNumber(e)?a+(Math.abs(e)+";\n"):a+("("+e+").abs();\n"),a=a+("if ("+g+" > "+c+") {\n")+(Blockly.Dart.INDENT+d+" = -"+d+";\n"),a+="}\n",a+="for ("+b+" = "+g+";\n     "+d+" >= 0 ? "+b+" <= "+c+" : "+b+" >= "+c+";\n     "+b+" += "+d+") {\n"+f+"}\n";return a};
Blockly.Dart.controls_forEach=function(a){var b=Blockly.Dart.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.Dart.valueToCode(a,"LIST",Blockly.Dart.ORDER_ASSIGNMENT)||"[]",d=Blockly.Dart.statementToCode(a,"DO");d=Blockly.Dart.addLoopTrap(d,a.id);return"for (var "+b+" in "+c+") {\n"+d+"}\n"};
Blockly.Dart.controls_flow_statements=function(a){switch(a.getFieldValue("FLOW")){case "BREAK":return"break;\n";case "CONTINUE":return"continue;\n"}throw"Unknown flow statement.";};