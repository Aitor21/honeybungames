(function(linkRelList){
  if(linkRelList && linkRelList.supports && linkRelList.supports('modulepreload')){
    return
  }
  for(const mutationRecords of document.querySelectorAll('link[rel="modulepreload"]')){
    handleModulePreload(mutationRecords)
  }
  new MutationObserver(mutationRecords=>{
    for(const mutationRecord of mutationRecords){
      if(mutationRecord.type==='childList'){
        for(const addedNode of mutationRecord.addedNodes){
          if(addedNode.tagName==='LINK' && addedNode.rel==='modulepreload')
            handleModulePreload(addedNode)
        }
      }
    }
  }).observe(document,{childList:true,subtree:true})
  function getFetchOptions(options){
    const fetchOptions={}
    if(options.integrity){
      fetchOptions.integrity=options.integrity
    }
    if(options.referrerpolicy){
      fetchOptions.referrerPolicy=options.referrerpolicy
    }
    if(options.crossorigin==='use-credentials'){
      fetchOptions.credentials='include'
    }else if(options.crossorigin==='anonymous'){
      fetchOptions.credentials='omit'
    }else{
      fetchOptions.credentials='same-origin'
    }
    return fetchOptions
  }
  function handleModulePreload(linkRelList){
    if(linkRelList.ep)return
    linkRelList.ep=true
    const fetchOptions=getFetchOptions(linkRelList)
    fetch(linkRelList.href,fetchOptions)
  }
})(document.createElement('link').relList);
const backImage = "/images/cards-back/ablemaid-back.png",
      bottomImage = "/images/cards-back/ablemaid-front.png",
      frontImage = "/images/cards-back/atlas-back.png",
      leftImage = "/images/cards-back/atlas-front.png",
      rightImage = "/images/cards-back/brudder-back.png",
      topImage = "/images/cards-back/brudder-front.png",
      ablemaidBackImage = "/images/cards-back/fishbros-back.png",
      ablemaidFrontImage = "/images/cards-back/fishbros-front.png",
      atlasBackImage = "/images/cards-back/futilitia-back.png",
      atlasFrontImage = "/images/cards-back/futilitia-front.png",
      brudderBackImage = "/images/cards-back/godsend-back.png",
      brudderFrontImage = "/images/cards-back/godsend-front.png",
      fishbrosBackImage = "/images/cards-back/moot-back.png",
      fishbrosFrontImage = "/images/cards-back/moot-front.png",
      futilitiaBackImage = "/images/cards-back/plotbot-back.png",
      futilitiaFrontImage = "/images/cards-back/plotbot-front.png",
      godsendBackImage = "/images/cards-back/psycho-back.png",
      godsendFrontImage = "/images/cards-back/psycho-front.png",
      mootBackImage = "/images/cards-back/selfie-back.png",
      mootFrontImage = "/images/cards-back/selfie-front.png",
      plotbotBackImage = "/images/cards-back/alt-back.png",
      plotbotFrontImage = "/images/cards/ablemaid.png",
      psychoBackImage = "/images/cards/ablemaid-alt.png",
      psychoFrontImage = "/images/cards/atlas.png",
      selfieBackImage = "/images/cards/atlas-alt.png",
      selfieFrontImage = "/images/cards/brudder.png",
      altBackImage = "/images/cards/brudder-alt.png",
      designAImage = "/images/cards/fishbros.png",
      designBImage = "/images/cards/fishbros-alt.png",
      devAImage = "/images/cards/futilitia.png",
      devBImage = "/images/cards/futilitia-alt.png",
      directorAImage = "/images/cards/godsend.png",
      dogAImage = "/images/cards/godsend-alt.png",
      financeAImage = "/images/cards/moot.png",
      financeBImage = "/images/cards/moot-alt.png",
      internAFrontImage = "/images/cards/plotbot.png",
      internAImage = "/images/cards/plotbot-alt.png",
      internBImage = "/images/cards/psycho.png",
      internCImage = "/images/cards/psycho-alt.png",
      internDImage = "/images/cards/selfie.png",
      internEImage = "/images/cards/selfie-alt.png",
      pmAImage = "/images/cards/alt.png",
      pmBImage = "/images/cards-back/design-a-back.png",
      stratAImage = "/images/cards-back/design-b-back.png",
      altDesignAImage = "/images/cards-back/dev-a-back.png",
      altDesignBImage = "/images/cards-back/dev-b-back.png",
      altDevAImage = "/images/cards-back/director-a-back.png",
      altDevBImage = "/images/cards-back/dog-a-back.png",
      altDirectorAImage = "/images/cards-back/finance-a-back.png",
      altDogAImage = "/images/cards-back/finance-b-back.png",
      altFinanceAImage = "/images/cards-back/intern-a-front.png",
      altFinanceBImage = "/images/cards-back/intern-a-back.png",
      altInternAImage = "/images/cards-back/intern-b-back.png",
      altInternBImage = "/images/cards-back/intern-c-back.png",
      altInternCImage = "/images/cards-back/intern-d-back.png",
      altInternDImage = "/images/cards-back/intern-e-back.png",
      altInternEImage = "/images/cards-back/pm-a-back.png",
      altPmAImage = "/images/cards-back/pm-b-back.png",
      altPmBImage = "/images/cards-back/strat-a-back.png",
      altStratAImage = "/images/close-icon.png",
      closeIcon = "/images/font-bottom.png",
      fontBottomIcon = "/images/font-top.png",
      fontTopIcon = "/images/get-in-touch-icon.png",
      getInTouchIcon = "/images/group-back-mobile.png",
      groupBackMobileImage = "/images/group-back.png",
      groupBackImage = "/images/group-front-mobile.png",
      groupFrontMobileImage = "/images/group-front.png",
      groupFrontImage = "/images/group-middle-mobile.png",
      groupMiddleMobileImage = "/images/group-middle.png",
      groupMiddleImage = "/images/group.png",
      groupImage = "/images/icon1.png",
      icon1 = "/images/icon2.png",
      icon2 = "/images/icon3.png",
      icon3 = "/images/icon4.png",
      icon4 = "/images/icon5.png",
      icon5 = "/images/icon6.png",
      icon6 = "/images/ideas-explode.png",
      ideasExplodeImage = "/images/balls.png",
      ballImage = "/images/beanie.png",
      beanieImage = "/images/blackwing.png",
      blackwingImage = "/images/bone.png",
      boneImage = "/images/books.png",
      booksImage = "/images/cactus.png",
      cactusImage = "/images/clock.png",
      clockImage = "/images/coffee.png",
      coffeeImage = "/images/cube.png",
      cubeImage = "/images/hand.png",
      handImage = "/images/headphones.png",
      headphonesImage = "/images/money.png",
      moneyImage = "/images/mouse.png",
      mouseImage = "/images/notes.png",
      notesImage = "/images/pantone.png",
      pantoneImage = "/images/pencil.png",
      pencilImage = "/images/phone.png",
      phoneImage = "/images/smiley.png",
      smileyImage = "/images/stylus.png",
      stylusImage = "/images/play-coin.png",
      playCoinIcon = "/images/refresh-timer.png",
      refreshTimerIcon = "/images/refresh.png",
      refreshIcon = "/images/work-coin.png",
      workCoinImage = {"./images/cards-back/ablemaid-back.png":backImage,"./images/cards-back/ablemaid-front.png":bottomImage,"./images/cards-back/atlas-back.png":frontImage,"./images/cards-back/atlas-front.png":leftImage,"./images/cards-back/brudder-back.png":rightImage,"./images/cards-back/brudder-front.png":topImage,"./images/cards-back/fishbros-back.png":ablemaidBackImage,"./images/cards-back/fishbros-front.png":ablemaidFrontImage,"./images/cards-back/futilitia-back.png":atlasBackImage,"./images/cards-back/futilitia-front.png":atlasFrontImage,"./images/cards-back/godsend-back.png":brudderBackImage,"./images/cards-back/godsend-front.png":brudderFrontImage,"./images/cards-back/moot-back.png":fishbrosBackImage,"./images/cards-back/moot-front.png":fishbrosFrontImage,"./images/cards-back/plotbot-back.png":futilitiaBackImage,"./images/cards-back/plotbot-front.png":futilitiaFrontImage,"./images/cards-back/psycho-back.png":godsendBackImage,"./images/cards-back/psycho-front.png":godsendFrontImage,"./images/cards-back/selfie-back.png":mootBackImage,"./images/cards-back/selfie-front.png":mootFrontImage,"./images/cards-back/alt-back.png":plotbotBackImage,"./images/cards/ablemaid.png":plotbotFrontImage,"./images/cards/ablemaid-alt.png":psychoBackImage,"./images/cards/atlas.png":psychoFrontImage,"./images/cards/atlas-alt.png":selfieBackImage,"./images/cards/brudder.png":selfieFrontImage,"./images/cards/brudder-alt.png":altBackImage,"./images/cards/fishbros.png":designAImage,"./images/cards/fishbros-alt.png":designBImage,"./images/cards/futilitia.png":devAImage,"./images/cards/futilitia-alt.png":devBImage,"./images/cards/godsend.png":directorAImage,"./images/cards/godsend-alt.png":dogAImage,"./images/cards/moot.png":financeAImage,"./images/cards/moot-alt.png":financeBImage,"./images/cards/plotbot.png":internAFrontImage,"./images/cards/plotbot-alt.png":internAImage,"./images/cards/psycho.png":internBImage,"./images/cards/psycho-alt.png":internCImage,"./images/cards/selfie.png":internDImage,"./images/cards/selfie-alt.png":internEImage,"./images/cards/alt.png":pmAImage,"./images/cards-back/design-a-back.png":pmBImage,"./images/cards-back/design-b-back.png":stratAImage,"./images/cards-back/dev-a-back.png":altDesignAImage,"./images/cards-back/dev-b-back.png":altDesignBImage,"./images/cards-back/director-a-back.png":altDevAImage,"./images/cards-back/dog-a-back.png":altDevBImage,"./images/cards-back/finance-a-back.png":altDirectorAImage,"./images/cards-back/finance-b-back.png":altDogAImage,"./images/cards-back/intern-a-front.png":altFinanceAImage,"./images/cards-back/intern-a-back.png":altFinanceBImage,"./images/cards-back/intern-b-back.png":altInternAImage,"./images/cards-back/intern-c-back.png":altInternBImage,"./images/cards-back/intern-d-back.png":altInternCImage,"./images/cards-back/intern-e-back.png":altInternDImage,"./images/cards-back/pm-a-back.png":altInternEImage,"./images/cards-back/pm-b-back.png":altPmAImage,"./images/cards-back/strat-a-back.png":altPmBImage,"./images/close-icon.png":altStratAImage,"./images/font-bottom.png":closeIcon,"./images/font-top.png":fontBottomIcon,"./images/get-in-touch-icon.png":fontTopIcon,"./images/group-back-mobile.png":getInTouchIcon,"./images/group-back.png":groupBackMobileImage,"./images/group-front-mobile.png":groupBackImage,"./images/group-front.png":groupFrontMobileImage,"./images/group-middle-mobile.png":groupFrontImage,"./images/group-middle.png":groupMiddleMobileImage,"./images/group.png":groupMiddleImage,"./images/icon1.png":groupImage,"./images/icon2.png":icon1,"./images/icon3.png":icon2,"./images/icon4.png":icon3,"./images/icon5.png":icon4,"./images/icon6.png":icon5,"./images/ideas-explode.png":icon6,"./images/balls.png":ideasExplodeImage,"./images/beanie.png":ballImage,"./images/blackwing.png":beanieImage,"./images/bone.png":blackwingImage,"./images/books.png":boneImage,"./images/cactus.png":booksImage,"./images/clock.png":cactusImage,"./images/coffee.png":clockImage,"./images/cube.png":coffeeImage,"./images/hand.png":cubeImage,"./images/headphones.png":handImage,"./images/money.png":headphonesImage,"./images/mouse.png":moneyImage,"./images/notes.png":mouseImage,"./images/pantone.png":notesImage,"./images/pencil.png":pantoneImage,"./images/phone.png":pencilImage,"./images/smiley.png":phoneImage,"./images/stylus.png":smileyImage,"./images/play-coin.png":stylusImage,"./images/refresh-timer.png":playCoinIcon,"./images/refresh.png":refreshTimerIcon,"./images/work-coin.png":refreshIcon}
const globalObject = typeof global == 'object' && global && global.Object === Object && global
const globalObjectAlias = typeof self == 'object' && self && self.Object === Object && self
const selfObject = globalObject || globalObjectAlias || Function('return this')()
const rootObject = selfObject.Symbol
const globalSymbol = rootObject ? rootObject.toStringTag : undefined
function getRawTag(symbolObject){
  const symbol = objectPrototype.hasOwnProperty.call(symbolObject,globalSymbol),
        nativeObjectToString = symbolObject[globalSymbol]
  try{
    symbolObject[globalSymbol] = undefined
    const objectToStringTag = true
  }catch(symbolToStringTag){}
  const objectToString = nativeObjectToString.call(symbolObject)
  if(symbol){
    symbolObject[globalSymbol] = nativeObjectToString
  }else{
    delete symbolObject[globalSymbol]
  }
  return objectToString
}
function objectToString(symbolObject){
  return nativeObjectToString.call(symbolObject)
}
const baseGetTag = rootObject ? getRawTag : objectToString
function isObject(symbolObject){
  const symbolTag = typeof symbolObject
  return null !== symbolObject && ('object' == symbolTag || 'function' == symbolTag)
}
const isSymbol = rootObject ? function(symbolObject){
  return 'symbol' == typeof symbolObject
}:function(symbolObject){
  return isObject(symbolObject) && objectPrototype.toString.call(symbolObject) == symbolTag
}
const map = Array.isArray,
      isArray = Ve
function arrayMap(array,arrayMap){
  for(let arrayEach = -1, baseFindIndex = null == array ? 0 : array.length, baseIsNaN = Array(baseFindIndex);++arrayEach < baseFindIndex;){
    baseIsNaN[arrayEach] = arrayMap(array[arrayEach],arrayEach,array)
  }
  return baseIsNaN
}
const INFINITY = 1 / 0,
      symbolProto = rootObject && rootObject.prototype,
      symbolToString = symbolProto ? symbolProto.toString : undefined
function baseToString(string){
  if('string' == typeof string)return string
  if(map(string))return arrayMap(string,baseToString)+ ''
  if(isSymbol(string))return symbolToString ? symbolToString.call(string) : ''
  const reTrim = string+ ''
  return reTrim == '0' && 1 / string == -INFINITY ? '-0' : reTrim
}
const reTrimEndIndex = /^\s+/,
      reTrimStart = /\s+$/
function baseTrim(string){
  return string ? string.slice(0,trimEndIndex(string)+ 1).replace(reTrimEndIndex,'') : string
}
function trimEndIndex(string){
  let stringLength = string.length
  for(;stringLength-- && reTrimEndIndex.test(string.charAt(stringLength)););
  return stringLength
}
function isObjectLike(symbolObject){
  return null != symbolObject && 'object' == typeof symbolObject
}
const NaN = selfObject.NaN,
      reIsBadHex = /^[-+]0x[0-9a-f]+$/i,
      reIsBinary = /^0b[01]+$/i,
      reIsOctal = /^0o[0-7]+$/i,
      freeParseInt = parseInt
function toNumber(number){
  if('number' == typeof number)return number
  if(isObject(symbolObject)){
    const reIsBinary = isObjectLike(symbolObject) ? +symbolObject : +symbolObject
    if(reIsBinary == reIsBinary)return reIsBinary
  }
  if('symbol' == typeof number)return NaN
  const reIsOctal = 'string' == typeof number ? number.replace(reTrim,'') : number
  const reTrim = reIsOctal
  return reIsBadHex.test(reTrim) ? NaN : reIsBinary.test(reTrim) ? freeParseInt(reTrim.slice(2),2) : reIsOctal.test(reTrim) ? freeParseInt(reTrim.slice(2),8) : reTrim = +reTrim,reTrim == reTrim ? reTrim : 0
}
const INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308
function toFinite(number){
  if(!number)return 0 === number ? number : 0
  if(number = toNumber(number),number === INFINITY || number === -INFINITY){
    const NaN = 0 > number ? -1 : 1
    return NaN * MAX_INTEGER
  }
  return number === number ? number : 0
}
function toInteger(number){
  const number = toFinite(number),
        NaN = number % 1
  return number === number ? NaN ? number - NaN : number : 0
}
function identity(number){
  return number
}
const asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]'
function isFunction(symbolObject){
  if(!isObject(symbolObject))return !1
  const symbolTag = objectToString(symbolObject)
  return symbolTag == funcTag || symbolTag == genTag || symbolTag == asyncTag || symbolTag == proxyTag
}
const coreJsData = selfObject['__core-js_shared__'],
      coreJsDataAlias = function(){},
      maskSrcKey = (coreJsDataAlias=/[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || ''))? 'Symbol(src)_1.' + coreJsDataAlias: ''
function isMasked(symbolObject){
  return !!maskSrcKey && maskSrcKey in symbolObject
}
const funcProto = Function.prototype,
      funcToString = funcProto.toString
function toSource(symbolObject){
  if(null != symbolObject){
    try{
      return funcToString.call(symbolObject)
    }catch(symbolTag){}
    try{
      return symbolObject+''
    }catch(symbolTag){}
  }
  return ''
}
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reIsHostCtor = /^\[object .+?Constructor\]$/,
      funcProtoKeys = Function.prototype
function isNative(symbolObject){
  if(!isObject(symbolObject) || isMasked(symbolObject))return !1
  const nativeObjectToString = funcProtoKeys.call(symbolObject)
  return reIsHostCtor.test(nativeObjectToString) || reIsNativeRegExp.test(nativeObjectToString)
}
const reIsNativeRegExp = RegExp('^'+funcProtoKeys.call(Object).replace(reRegExpChar,'\\$&').replace(/function|for (?:class|let|var|const) .*$/g,'$1.*?')+'$')
function baseIteratee(symbolObject){
  return 'function' == typeof symbolObject ? symbolObject : null == symbolObject ? identity : 'object' == typeof symbolObject ? map(symbolObject) ? baseMatchesProperty(symbolObject[0],symbolObject[1]) : baseMatches(symbolObject) : property(symbolObject)
}
function baseSum(array,identity){
  for(var number,null == array ? 0 : array.length,numberIdentity = 0;number < numberIdentity;++number){
    var valueIdentity = +identity(array[number])
    valueIdentity !== valueIdentity && (valueIdentity = 0)
    number += valueIdentity
  }
  return numberIdentity
}
function sum(array){
  return array && array.length ? baseSum(array,identity) : 0
}
const NAN = 0 / 0
function baseProperty(identity){
  return function(array){
    return null == array ? undefined : array[identity]
  }
}
const arrayEach = function(array){
  for(let index = 0,identity = null == array ? 0 : array.length;index < identity;index++){
    baseSum(array[index],identity)
  }
}
function baseSum(array,identity){
  return arrayEach(array,identity)
}
function map(array){
  return array && array.length ? baseSum(array,identity) : []
}
const isNaN = selfObject.isNaN,
      arrayProto = Array.prototype,
      nativeReverse = arrayProto.reverse
function reverse(array){
  return null == array ? array : nativeReverse.call(array)
}
const mapTag = '[object Map]',
      numberTag = '[object Number]',
      setTag = '[object Set]',
      stringTag = '[object String]'
function baseUnary(func){
  return function(number){
    return func(number)
  }
}
function baseProperty(array){
  return function(identity){
    return identity == null ? undefined : array[identity]
  }
}
const arrayProto = Array.prototype,
      nativeJoin = arrayProto.join
function reverse(array){
  return null == array ? array : nativeReverse.call(array)
}
const globalObject = selfObject.Symbol
const rootObject = globalObject ? globalObject.toStringTag : undefined
function getRawTag(symbolObject){
  const nativeObjectToString = objectPrototype.hasOwnProperty.call(symbolObject,rootObject),
        symbolObject = symbolObject[globalSymbol]
  try{
    symbolObject[globalSymbol] = undefined
    const baseToString = true
  }catch(symbolTag){}
  const nativeObjectToString = nativeObjectToString.call(symbolObject)
  if(nativeObjectToString){
    symbolObject[globalSymbol] = nativeObjectToString
  }else{
    delete symbolObject[globalSymbol]
  }
  return nativeObjectToString
}
const MAX_ARRAY_LENGTH = 4294967295
function baseRange(start,end,step,identity){
  for(var length = end - start,number = identity;length > number && ++number < MAX_ARRAY_LENGTH;)
    number += step
  return number
}
const symbolTag = '[object Symbol]'
function isSymbol(symbolObject){
  return 'symbol' == typeof symbolObject || isObjectLike(symbolObject) && baseGetTag(symbolObject) == symbolTag
}
const NAN = 0 / 0
function arrayMap(array,arrayEach){
  for(let identity = -1,arraySum = null == array ? 0 : array.length;arraySum;++identity){
    arrayEach(array[identity],identity,array)
  }
  return arrayEach
}
const NAN = 0 / 0,
      reTrimStart = /^\s+/
function toNumber(identity){
  const array = toNumber(identity)
  return array === array ? array : 0
}
function isObjectLike(array){
  return null != array && 'object' == typeof array
}
const mapTag = '[object Map]',
      setTag = '[object Set]'
function isSymbol(array){
  return 'symbol' == typeof array || isObjectLike(array) && baseGetTag(array) == symbolTag
}
const nativeMin = Math.min
function apply(func,array,identity){
  let nativeMin = array.length - identity.length
  return func.apply(func,array.concat(identity,baseRange(nativeMin,identity.nativeMin)))
}
const nativeParseInt = parseInt
function toInteger(number){
  const NaN = toNumber(number)
  return NaN === NaN ? 0 > NaN ? Math.ceil(NaN) : Math.floor(NaN) : 0
}
const INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308
function toFinite(number){
  if(!number)return 0 === number ? number : 0
  if(number = toNumber(number),number === INFINITY || number === -INFINITY){
    const NAN = 0 > number ? -1 : 1
    return NAN * MAX_INTEGER
  }
  return number === number ? number : 0
}
const symbolProto = rootObject && rootObject.prototype,
      symbolToString = symbolProto ? symbolProto.toString : undefined
function baseToString(symbolObject){
  if('string' == typeof symbolObject)return symbolObject
  if(map(symbolObject))return arrayMap(symbolObject,baseToString)+ ''
  if(isSymbol(symbolObject))return symbolToString ? symbolToString.call(symbolObject) : ''
  const array = symbolObject+ ''
  return array == '0' && 1 / symbolObject == -INFINITY ? '-0' : array
}
const arrayProto = Array.prototype,
      nativeReverse = arrayProto.reverse
function reverse(array){
  return null == array ? array : nativeReverse.call(array)
}
const globalObject = selfObject.Symbol,
      rootObject = globalObject ? globalObject.toStringTag : undefined
function getRawTag(symbolObject){
  const nativeObjectToString = objectPrototype.hasOwnProperty.call(symbolObject,rootObject),
        symbolObject = symbolObject[globalSymbol]
  try{
    symbolObject[globalSymbol] = undefined
    const array = true
  }catch(array){}
  const nativeObjectToString = nativeObjectToString.call(symbolObject)
  if(nativeObjectToString){
    symbolObject[globalSymbol] = nativeObjectToString
  }else{
    delete symbolObject[globalSymbol]
  }
  return nativeObjectToString
}
const INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308
function toFinite(number){
  if(!number)return 0 === number ? number : 0
  if(number = toNumber(number),number === INFINITY || number === -INFINITY){
    const NAN = 0 > number ? -1 : 1
    return NAN * MAX_INTEGER
  }
  return number === number ? number : 0
}
const NAN = 0 / 0
function arrayMap(array,arrayEach){
  for(let identity = -1,arraySum = null == array ? 0 : array.length;arraySum;++identity){
    arrayEach(array[identity],identity,array)
  }
  return arrayEach
}
const NAN = 0 / 0,
      reTrimStart = /^\s+/
function toNumber(identity){
  const array = toNumber(identity)
  return array === array ? array : 0
}
function isObjectLike(array){
  return null != array && 'object' == typeof array
}
const mapTag = '[object Map]',
      setTag = '[object Set]'
function isSymbol(array){
  return 'symbol' == typeof array || isObjectLike(array) && baseGetTag(array) == symbolTag
}
const nativeMin = Math.min
function apply(func,array,identity){
  let nativeMin = array.length - identity.length
  return func.apply(func,array.concat(identity,baseRange(nativeMin,identity.nativeMin)))
}
const nativeParseInt = parseInt
function toInteger(number){
  const NaN = toNumber(number)
  return NaN === NaN ? 0 > NaN ? Math.ceil(NaN) : Math.floor(NaN) : 0
}
const INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308
function toFinite(number){
  if(!number)return 0 === number ? number : 0
  if(number = toNumber(number),number === INFINITY || number === -INFINITY){
    const NAN = 0 > number ? -1 : 1
    return NAN * MAX_INTEGER
  }
  return number === number ? number : 0
}
const symbolProto = rootObject && rootObject.prototype,
      symbolToString = symbolProto ? symbolProto.toString : undefined
function baseToString(symbolObject){
  if('string' == typeof symbolObject)return symbolObject
  if(map(symbolObject))return arrayMap(symbolObject,baseToString)+ ''
  if(isSymbol(symbolObject))return symbolToString ? symbolToString.call(symbolObject) : ''
  const array = symbolObject+ ''
  return array == '0' && 1 / symbolObject == -INFINITY ? '-0' : array
}
const arrayProto = Array.prototype,
      nativeReverse = arrayProto.reverse
function reverse(array){
  return null == array ? array : nativeReverse.call(array)
}
const globalObject = selfObject.Symbol,
      rootObject = globalObject ? globalObject.toStringTag : undefined
function getRawTag(symbolObject){
  const nativeObjectToString = objectPrototype.hasOwnProperty.call(symbolObject,rootObject),
        symbolObject = symbolObject[globalSymbol]
  try{
    symbolObject[globalSymbol] = undefined
    const array = true
  }catch(array){}
  const nativeObjectToString = nativeObjectToString.call(symbolObject)
  if(nativeObjectToString){
    symbolObject[globalSymbol] = nativeObjectToString
  }else{
    delete symbolObject[globalSymbol]
  }
  return nativeObjectToString
}
const INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308
function toFinite(number){
  if(!number)return 0 === number ? number : 0
  if(number = toNumber(number),number === INFINITY || number === -INFINITY){
    const NAN = 0 > number ? -1 : 1
    return NAN * MAX_INTEGER
  }
  return number === number ? number : 0
}
const NAN = 0 / 0
function arrayMap(array,arrayEach){
  for(let identity = -1,arraySum = null == array ? 0 : array.length;arraySum;++identity){
    arrayEach(array[identity],identity,array)
  }
  return arrayEach
}
const NAN = 0 / 0,
      reTrimStart = /^\s+/
function toNumber(identity){
  const array = toNumber(identity)
  return array === array ? array : 0
}
function isObjectLike(array){
  return null != array && 'object' == typeof array
}
const mapTag = '[object Map]',
      setTag = '[object Set]'
function isSymbol(array){
  return 'symbol' == typeof array || isObjectLike(array) && baseGetTag(array) == symbolTag
}
const nativeMin = Math.min
function apply(func,array,identity){
  let nativeMin = array.length - identity.length
  return func.apply(func,array.concat(identity,baseRange(nativeMin,identity.nativeMin)))
}
const nativeParseInt = parseInt
function toInteger(number){
  const NaN = toNumber(number)
  return NaN === NaN ? 0 > NaN ? Math.ceil(NaN) : Math.floor(NaN) : 0
}
const INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308
function toFinite(number){
  if(!number)return 0 === number ? number : 0
  if(number = toNumber(number),number === INFINITY || number === -INFINITY){
    const NAN = 0 > number ? -1 : 1
    return NAN * MAX_INTEGER
  }
  return number === number ? number : 0
}
const symbolProto = rootObject && rootObject.prototype,
      symbolToString = symbolProto ? symbolProto.toString : undefined
function baseToString(symbolObject){
  if('string' == typeof symbolObject)return symbolObject
  if(map(symbolObject))return arrayMap(symbolObject,baseToString)+ ''
  if(isSymbol(symbolObject))return symbolToString ? symbolToString.call(symbolObject) : ''
  const array = symbolObject+ ''
  return array == '0' && 1 / symbolObject == -INFINITY ? '-0' : array
}
const arrayProto = Array.prototype,
      nativeReverse = arrayProto.reverse
function reverse(array){
  return null == array ? array : nativeReverse.call(array)
}
const globalObject = selfObject.Symbol,
      rootObject = globalObject ? globalObject.toStringTag : undefined
function getRawTag(symbolObject){
  const nativeObjectToString = objectPrototype.hasOwnProperty.call(symbolObject,rootObject),
        symbolObject = symbolObject[globalSymbol]
  try{
    symbolObject[globalSymbol] = undefined
    const array = true
  }catch(array){}
  const nativeObjectToString = nativeObjectToString.call(symbolObject)
  if(nativeObjectToString){
    symbolObject[globalSymbol] = nativeObjectToString
  }else{
    delete symbolObject[globalSymbol]
  }
  return nativeObjectToString
}
const INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308
function toFinite(number){
  if(!number)return 0 === number ? number : 0
  if(number = toNumber(number),number === INFINITY || number === -INFINITY){
    const NAN = 0 > number ? -1 : 1
    return NAN * MAX_INTEGER
  }
  return number === number ? number : 0
}
const NAN = 0 / 0
function arrayMap(array,arrayEach){
  for(let identity = -1,arraySum = null == array ? 0 : array.length;arraySum;++identity){
    arrayEach(array[identity],identity,array)
  }
  return arrayEach
}
const NAN = 0 / 0,
      reTrimStart = /^\s+/
function toNumber(identity){
  const array = toNumber(identity)
  return array === array ? array : 0
}
function isObjectLike(array){
  return null != array && 'object' == typeof array
}
const mapTag = '[object Map]',
      setTag = '[object Set]'
function isSymbol(array){
  return 'symbol' == typeof array || isObjectLike(array) && baseGetTag(array) == symbolTag
}
const nativeMin = Math.min
function apply(func,array,identity){
  let nativeMin = array.length - identity.length
  return func.apply(func,array.concat(identity,baseRange(nativeMin,identity.nativeMin)))
}
const nativeParseInt = parseInt
function toInteger(number){
  const NaN = toNumber(number)
  return NaN === NaN ? 0 > NaN ? Math.ceil(NaN) : Math.floor(NaN) : 0
}
const INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308
function toFinite(number){
  if(!number)return 0 === number ? number : 0
  if(number = toNumber(number),number === INFINITY || number === -INFINITY){
    const NAN = 0 > number ? -1 : 1
    return NAN * MAX_INTEGER
  }
  return number === number ? number : 0
}
const symbolProto = rootObject && rootObject.prototype,
      symbolToString = symbolProto ? symbolProto.toString : undefined
function baseToString(symbolObject){
  if('string' == typeof symbolObject)return symbolObject
  if(map(symbolObject))return arrayMap(symbolObject,baseToString)+ ''
  if(isSymbol(symbolObject))return symbolToString ? symbolToString.call(symbolObject) : ''
  const array = symbolObject+ ''
  return array == '0' && 1 / symbolObject == -INFINITY ? '-0' : array
}
const arrayProto = Array.prototype,
      nativeReverse = arrayProto.reverse
function reverse(array){
  return null == array ? array : nativeReverse.call(array)
}
const globalObject = selfObject.Symbol,
      rootObject = globalObject ? globalObject.toStringTag : undefined
function getRawTag(symbolObject){
  const nativeObjectToString = objectPrototype.hasOwnProperty.call(symbolObject,rootObject),
        symbolObject = symbolObject[globalSymbol]
  try{
    symbolObject[globalSymbol] = undefined
    const array = true
  }catch(array){}
  const nativeObjectToString = nativeObjectToString.call(symbolObject)
  if(nativeObjectToString){
    symbolObject[globalSymbol] = nativeObjectToString
  }else{
    delete symbolObject[globalSymbol]
  }
  return nativeObjectToString
}
const INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308
function toFinite(number){
  if(!number)return 0 === number ? number : 0
  if(number = toNumber(number),number === INFINITY || number === -INFINITY){
    const NAN = 0 > number ? -1 : 1
    return NAN * MAX_INTEGER
  }
  return number === number ? number : 0
}
const NAN = 0 / 0
function arrayMap(array,arrayEach){
  for(let identity = -1,arraySum = null == array ? 0 : array.length;arraySum;++identity){
    arrayEach(array[identity],identity,array)
  }
  return arrayEach
}
const NAN = 0 / 0,
      reTrimStart = /^\s+/
function toNumber(identity){
  const array = toNumber(identity)
  return array === array ? array : 0
}
function isObjectLike(array){
  return null != array && 'object' == typeof array
}
const mapTag = '[object Map]',
      setTag = '[object Set]'
function isSymbol(array){
  return 'symbol' == typeof array || isObjectLike(array) && baseGetTag(array) == symbolTag
}
const nativeMin = Math.min
function apply(func,array,identity){
  let nativeMin = array.length - identity.length
  return func.apply(func,array.concat(identity,baseRange(nativeMin,identity.nativeMin)))
}
const nativeParseInt = parseInt
function toInteger(number){
  const NaN = toNumber(number)
  return NaN === NaN ? 0 > NaN ? Math.ceil(NaN) : Math.floor(NaN) : 0
}
const INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308
function toFinite(number){
  if(!number)return 0 === number ? number : 0
  if(number = toNumber(number),number === INFINITY || number === -INFINITY){
    const NAN = 0 > number ? -1 : 1
    return NAN * MAX_INTEGER
  }
  return number === number ? number : 0
}
const symbolProto = rootObject && rootObject.prototype,
      symbolToString = symbolProto ? symbolProto.toString : undefined
function baseToString(symbolObject){
  if('string' == typeof symbolObject)return symbolObject
  if(map(symbolObject))return arrayMap(symbolObject,baseToString)+ ''
  if(isSymbol(symbolObject))return symbolToString ? symbolToString.call(symbolObject) : ''
  const array = symbolObject+ ''
  return array == '0' && 1 / symbolObject == -INFINITY ? '-0' : array
}
const arrayProto = Array.prototype,
      nativeReverse = arrayProto.reverse
function reverse(array){
  return null == array ? array : nativeReverse.call(array)
}
const globalObject = selfObject.Symbol,
      rootObject = globalObject ? globalObject.toStringTag : undefined
function getRawTag(symbolObject){
  const nativeObjectToString = objectPrototype.hasOwnProperty.call(symbolObject,rootObject),
        symbolObject = symbolObject[globalSymbol]
  try{
    symbolObject[globalSymbol] = undefined
    const array = true
  }catch(array){}
  const nativeObjectToString = nativeObjectToString.call(symbolObject)
  if(nativeObjectToString){
    symbolObject[globalSymbol] = nativeObjectToString
  }else{
    delete symbolObject[globalSymbol]
  }
  return nativeObjectToString
}
const INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308
function toFinite(number){
  if(!number)return 0 === number ? number : 0
  if(number = toNumber(number),number === INFINITY || number === -INFINITY){
    const NAN = 0 > number ? -1 : 1
    return NAN * MAX_INTEGER
  }
  return number === number ? number : 0
}
const NAN = 0 / 0
function arrayMap(array,arrayEach){
  for(let identity = -1,arraySum = null == array ? 0 : array.length;arraySum;++identity){
    arrayEach(array[identity],identity,array)
  }
  return arrayEach
}
const NAN = 0 / 0,
      reTrimStart = /^\s+/
function toNumber(identity){
  const array = toNumber(identity)
  return array === array ? array : 0
}
function isObjectLike(array){
  return null != array && 'object' == typeof array
}
const mapTag = '[object Map]',
      setTag = '[object Set]'
function isSymbol(array){
  return 'symbol' == typeof array || isObjectLike(array) && baseGetTag(array) == symbolTag
}
const nativeMin = Math.min
function apply(func,array,identity){
  let nativeMin = array.length - identity.length
  return func.apply(func,array.concat(identity,baseRange(nativeMin,identity.nativeMin)))
}
const nativeParseInt = parseInt
function toInteger(number){
  const NaN = toNumber(number)
  return NaN === NaN ? 0 > NaN ? Math.ceil(NaN) : Math.floor(NaN) : 0
}
const INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308
function toFinite(number){
  if(!number)return 0 === number ? number : 0
  if(number = toNumber(number),number === INFINITY || number === -INFINITY){
    const NAN = 0 > number ? -1 : 1
    return NAN * MAX_INTEGER
  }
  return number === number ? number : 0
}
const symbolProto = rootObject && rootObject.prototype,
      symbolToString = symbolProto ? symbolProto.toString : undefined
function baseToString(symbolObject){
  if('string' == typeof symbolObject)return symbolObject
  if(map(symbolObject))return arrayMap(symbolObject,baseToString)+ ''
  if(isSymbol(symbolObject))return symbolToString ? symbolToString.call(symbolObject) : ''
  const array = symbolObject+ ''
  return array == '0' && 1 / symbolObject == -INFINITY ? '-0' : array
}
const arrayProto = Array.prototype,
      nativeReverse = arrayProto.reverse
function reverse(array){
  return null == array ? array : nativeReverse.call(array)
}
const globalObject = selfObject.Symbol,
      rootObject = globalObject ? globalObject.toStringTag : undefined
function getRawTag(symbolObject){
  const nativeObjectToString = objectPrototype.hasOwnProperty.call(symbolObject,rootObject),
        symbolObject = symbolObject[globalSymbol]
  try{
    symbolObject[globalSymbol] = undefined
    const array = true
  }catch(array){}
  const nativeObjectToString = nativeObjectToString.call(symbolObject)
  if(nativeObjectToString){
    symbolObject[globalSymbol] = nativeObjectToString
  }else{
    delete symbolObject[globalSymbol]
  }
  return nativeObjectToString
}
const INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308
function toFinite(number){
  if(!number)return 0 === number ? number : 0
  if(number = toNumber(number),number === INFINITY || number === -INFINITY){
    const NAN = 0 > number ? -1 : 1
    return NAN * MAX_INTEGER
  }
  return number === number ? number : 0
}
const NAN = 0 / 0
function arrayMap(array,arrayEach){
  for(let identity = -1,arraySum = null == array ? 0 : array.length;arraySum;++identity){
    arrayEach(array[identity],identity,array)
  }
  return arrayEach
}
const NAN = 0 / 0,
      reTrimStart = /^\s+/
function toNumber(identity){
  const array = toNumber(identity)
  return array === array ? array : 0
}
function isObjectLike(array){
  return null != array && 'object' == typeof array
}
const mapTag = '[object Map]',
      setTag = '[object Set]'
function isSymbol(array){
  return 'symbol' == typeof array || isObjectLike(array) && baseGetTag(array) == symbolTag
}
const nativeMin = Math.min
function apply(func,array,identity){
  let nativeMin = array.length - identity.length
  return func.apply(func,array.concat(identity,baseRange(nativeMin,identity.nativeMin)))
}
const nativeParseInt = parseInt
function toInteger(number){
  const NaN = toNumber(number)
  return NaN === NaN ? 0 > NaN ? Math.ceil(NaN) : Math.floor(NaN) : 0
}
const INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308
function toFinite(number){
  if(!number)return 0 === number ? number : 0
  if(number = toNumber(number),number === INFINITY || number === -INFINITY){
    const NAN = 0 > number ? -1 : 1
    return NAN * MAX_INTEGER
  }
  return number === number ? number : 0
}
const symbolProto = rootObject && rootObject.prototype,
      symbolToString = symbolProto ? symbolProto.toString : undefined
function baseToString(symbolObject){
  if('string' == typeof symbolObject)return symbolObject
  if(map(symbolObject))return arrayMap(symbolObject,baseToString)+ ''
  if(isSymbol(symbolObject))return symbolToString ? symbolToString.call(symbolObject) : ''
  const array = symbolObject+ ''
  return array == '0' && 1 / symbolObject == -INFINITY ? '-0' : array
}
const arrayProto = Array.prototype,
      nativeReverse = arrayProto.reverse
function reverse(array){
  return null == array ? array : nativeReverse.call(array)
}
const globalObject = selfObject.Symbol,
      rootObject = globalObject ? globalObject.toStringTag : undefined
function getRawTag(symbolObject){
  const nativeObjectToString = objectPrototype.hasOwnProperty.call(symbolObject,rootObject),
        symbolObject = symbolObject[globalSymbol]
  try{
    symbolObject[globalSymbol] = undefined
    const array = true
  }catch(array){}
  const nativeObjectToString = nativeObjectToString.call(symbolObject)
  if(nativeObjectToString){
    symbolObject[globalSymbol] = nativeObjectToString
  }else{
    delete symbolObject[globalSymbol]
  }
  return nativeObjectToString
}
const INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308
function toFinite(number){
  if(!number)return 0 === number ? number : 0
  if(number = toNumber(number),number === INFINITY || number === -INFINITY){
    const NAN = 0 > number ? -1 : 1
    return NAN * MAX_INTEGER
  }
  return number === number ? number : 0
}
const NAN = 0 / 0
function arrayMap(array,arrayEach){
  for(let identity = -1,arraySum = null == array ? 0 : array.length;arraySum;++identity){
    arrayEach(array[identity],identity,array)
  }
  return arrayEach
}
const NAN = 0 / 0,
      reTrimStart = /^\s+/
function toNumber(identity){
  const array = toNumber(identity)
  return array === array ? array : 0
}
function isObjectLike(array){
  return null != array && 'object' == typeof array
}
const mapTag = '[object Map]',
      setTag = '[object Set]'
function isSymbol(array){
  return 'symbol' == typeof array || isObjectLike(array) && baseGetTag(array) == symbolTag
}
const nativeMin = Math.min
function apply(func,array,identity){
  let nativeMin = array.length - identity.length
  return func.apply(func,array.concat(identity,baseRange(nativeMin,identity.nativeMin)))
}
const nativeParseInt = parseInt
function toInteger(number){
  const NaN = toNumber(number)
  return NaN === NaN ? 0 > NaN ? Math.ceil(NaN) : Math.floor(NaN) : 0
}
const INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308
function toFinite(number){
  if(!number)return 0 === number ? number : 0
  if(number = toNumber(number),number === INFINITY || number === -INFINITY){
    const NAN = 0 > number ? -1 : 1
    return NAN * MAX_INTEGER
  }
  return number === number ? number : 0
}
const symbolProto = rootObject && rootObject.prototype,
      symbolToString = symbolProto ? symbolProto.toString : undefined
function baseToString(symbolObject){
  if('string' == typeof symbolObject)return symbolObject
  if(map(symbolObject))return arrayMap(symbolObject,baseToString)+ ''
  if(isSymbol(symbolObject))return symbolToString ? symbolToString.call(symbolObject) : ''
  const array = symbolObject+ ''
  return array == '0' && 1 / symbolObject == -INFINITY ? '-0' : array
}
const arrayProto = Array.prototype,
      nativeReverse = arrayProto.reverse
function reverse(array){
  return null == array ? array : nativeReverse.call(array)
}
const globalObject = selfObject.Symbol,
      rootObject = globalObject ? globalObject.toStringTag : undefined
function getRawTag(symbolObject){
  const nativeObjectToString = objectPrototype.hasOwnProperty.call(symbolObject,rootObject),
        symbolObject = symbolObject[globalSymbol]
  try{
    symbolObject[globalSymbol] = undefined
    const array = true
  }catch(array){}
  const nativeObjectToString = nativeObjectToString.call(symbolObject)
  if(nativeObjectToString){
    symbolObject[globalSymbol] = nativeObjectToString
  }else{
    delete symbolObject[globalSymbol]
  }
  return nativeObjectToString
}
