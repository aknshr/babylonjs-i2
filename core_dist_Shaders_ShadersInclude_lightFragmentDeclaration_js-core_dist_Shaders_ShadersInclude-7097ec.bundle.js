"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_ShadersInclude_lightFragmentDeclaration_js-core_dist_Shaders_ShadersInclude-7097ec"],{

/***/ "../core/dist/Shaders/ShadersInclude/lightFragmentDeclaration.js":
/*!***********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/lightFragmentDeclaration.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFragmentDeclaration: () => (/* binding */ lightFragmentDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "lightFragmentDeclaration";
const shader = `#ifdef LIGHT{X}
uniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];uniform float cascadeBlendFactor{X};varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowTexture{X};uniform highp sampler2DArray depthTexture{X};uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowTexture{X};
#else
uniform highp sampler2DArray shadowTexture{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowTexture{X};
#else
varying vec4 vPositionFromLight{X};varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowTexture{X};uniform highp sampler2D depthTexture{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowTexture{X};
#else
uniform sampler2D shadowTexture{X};
#endif
uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#ifdef AREALIGHT{X}
uniform vec4 vLightWidth{X};uniform vec4 vLightHeight{X};
#endif
#ifdef IESLIGHTTEXTURE{X}
uniform sampler2D iesLightTexture{X};
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};uniform sampler2D projectionLightTexture{X};
#endif
#ifdef CLUSTLIGHT{X}
uniform vec2 vSliceData{X};uniform vec2 vSliceRanges{X}[CLUSTLIGHT_SLICES];uniform sampler2D lightDataTexture{X};uniform highp sampler2D tileMaskTexture{X};
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const lightFragmentDeclaration = { name, shader };


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) // removed by dead control flow
{}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "../core/dist/Shaders/ShadersInclude/lightUboDeclaration.js":
/*!******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/lightUboDeclaration.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightUboDeclaration: () => (/* binding */ lightUboDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "lightUboDeclaration";
const shader = `#ifdef LIGHT{X}
uniform Light{X}
{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#elif defined(CLUSTLIGHT{X})
vec2 vSliceData;vec2 vSliceRanges[CLUSTLIGHT_SLICES];
#endif
#if defined(AREALIGHT{X})
vec4 vLightWidth;vec4 vLightHeight;
#endif
vec4 shadowsInfo;vec2 depthValues;} light{X};
#ifdef IESLIGHTTEXTURE{X}
uniform sampler2D iesLightTexture{X};
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};uniform sampler2D projectionLightTexture{X};
#endif
#ifdef CLUSTLIGHT{X}
uniform sampler2D lightDataTexture{X};uniform highp sampler2D tileMaskTexture{X};
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];uniform float cascadeBlendFactor{X};varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowTexture{X};uniform highp sampler2DArray depthTexture{X};uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowTexture{X};
#else
uniform highp sampler2DArray shadowTexture{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowTexture{X}; 
#else
varying vec4 vPositionFromLight{X};varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowTexture{X};uniform highp sampler2D depthTexture{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowTexture{X};
#else
uniform sampler2D shadowTexture{X};
#endif
uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const lightUboDeclaration = { name, shader };


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) // removed by dead control flow
{}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "../core/dist/Shaders/ShadersInclude/ltcHelperFunctions.js":
/*!*****************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/ltcHelperFunctions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ltcHelperFunctions: () => (/* binding */ ltcHelperFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "ltcHelperFunctions";
const shader = `vec2 LTCUv( const in vec3 N,const in vec3 V,const in float roughness ) {const float LUTSIZE=64.0;const float LUTSCALE=( LUTSIZE-1.0 )/LUTSIZE;const float LUTBIAS=0.5/LUTSIZE;float dotNV=saturate( dot( N,V ) );vec2 uv=vec2( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+LUTBIAS;return uv;}
float LTCClippedSphereFormFactor( const in vec3 f ) {float l=length( f );return max( ( l*l+f.z )/( l+1.0 ),0.0 );}
vec3 LTCEdgeVectorFormFactor( const in vec3 v1,const in vec3 v2 ) {float x=dot( v1,v2 );float y=abs( x );float a=0.8543985+( 0.4965155+0.0145206*y )*y;float b=3.4175940+( 4.1616724+y )*y;float v=a/b;float thetaSintheta=0.0;if( x>0.0 )
{thetaSintheta=v;}
else
{thetaSintheta=0.5*inversesqrt( max( 1.0-x*x,1e-7 ) )-v;}
return cross( v1,v2 )*thetaSintheta;}
vec3 LTCEvaluate( const in vec3 N,const in vec3 V,const in vec3 P,const in mat3 mInv,const in vec3 rectCoords[ 4 ] ) {vec3 v1=rectCoords[ 1 ]-rectCoords[ 0 ];vec3 v2=rectCoords[ 3 ]-rectCoords[ 0 ];vec3 lightNormal=cross( v1,v2 );if( dot( lightNormal,P-rectCoords[ 0 ] )<0.0 ) return vec3( 0.0 );vec3 T1,T2;T1=normalize( V-N*dot( V,N ) );T2=- cross( N,T1 ); 
mat3 mat=mInv*transposeMat3( mat3( T1,T2,N ) );vec3 coords[ 4 ];coords[ 0 ]=mat*( rectCoords[ 0 ]-P );coords[ 1 ]=mat*( rectCoords[ 1 ]-P );coords[ 2 ]=mat*( rectCoords[ 2 ]-P );coords[ 3 ]=mat*( rectCoords[ 3 ]-P );coords[ 0 ]=normalize( coords[ 0 ] );coords[ 1 ]=normalize( coords[ 1 ] );coords[ 2 ]=normalize( coords[ 2 ] );coords[ 3 ]=normalize( coords[ 3 ] );vec3 vectorFormFactor=vec3( 0.0 );vectorFormFactor+=LTCEdgeVectorFormFactor( coords[ 0 ],coords[ 1 ] );vectorFormFactor+=LTCEdgeVectorFormFactor( coords[ 1 ],coords[ 2 ] );vectorFormFactor+=LTCEdgeVectorFormFactor( coords[ 2 ],coords[ 3 ] );vectorFormFactor+=LTCEdgeVectorFormFactor( coords[ 3 ],coords[ 0 ] );float result=LTCClippedSphereFormFactor( vectorFormFactor );return vec3( result );}
struct areaLightData
{vec3 Diffuse;vec3 Specular;vec4 Fresnel;};
#define inline
areaLightData computeAreaLightSpecularDiffuseFresnel(const in sampler2D ltc1,const in sampler2D ltc2,const in vec3 viewDir,const in vec3 normal,const in vec3 position,const in vec3 lightPos,const in vec3 halfWidth,const in vec3 halfHeight,const in float roughness) 
{areaLightData result;vec3 rectCoords[ 4 ];rectCoords[ 0 ]=lightPos+halfWidth-halfHeight; 
rectCoords[ 1 ]=lightPos-halfWidth-halfHeight;rectCoords[ 2 ]=lightPos-halfWidth+halfHeight;rectCoords[ 3 ]=lightPos+halfWidth+halfHeight;
#ifdef SPECULARTERM
vec2 uv=LTCUv( normal,viewDir,roughness );vec4 t1=texture2D( ltc1,uv );vec4 t2=texture2D( ltc2,uv );mat3 mInv=mat3(
vec3( t1.x,0,t1.y ),
vec3( 0,1, 0 ),
vec3( t1.z,0,t1.w )
);result.Specular=LTCEvaluate( normal,viewDir,position,mInv,rectCoords );result.Fresnel=t2;
#endif
result.Diffuse=LTCEvaluate( normal,viewDir,position,mat3( 1.0 ),rectCoords );return result;}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const ltcHelperFunctions = { name, shader };


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) // removed by dead control flow
{}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "../core/dist/Shaders/ShadersInclude/shadowsFragmentFunctions.js":
/*!***********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/shadowsFragmentFunctions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowsFragmentFunctions: () => (/* binding */ shadowsFragmentFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "shadowsFragmentFunctions";
const shader = `#ifdef SHADOWS
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)
#else
#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)
#endif
#ifndef SHADOWFLOAT
float unpack(vec4 color)
{const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}
#endif
float computeFallOff(float value,vec2 clipSpace,float frustumEdgeFalloff)
{float mask=smoothstep(1.0-frustumEdgeFalloff,1.00000012,clamp(dot(clipSpace,clipSpace),0.,1.));return mix(value,1.0,mask);}
#define inline
float computeShadowCube(vec3 worldPos,vec3 lightPosition,samplerCube shadowSampler,float darkness,vec2 depthValues)
{vec3 directionToLight=worldPos-lightPosition;float depth=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);depth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadow=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadow=textureCube(shadowSampler,directionToLight).x;
#endif
return depth>shadow ? darkness : 1.0;}
#define inline
float computeShadowWithPoissonSamplingCube(vec3 worldPos,vec3 lightPosition,samplerCube shadowSampler,float mapSize,float darkness,vec2 depthValues)
{vec3 directionToLight=worldPos-lightPosition;float depth=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);depth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;float visibility=1.;vec3 poissonDisk[4];poissonDisk[0]=vec3(-1.0,1.0,-1.0);poissonDisk[1]=vec3(1.0,-1.0,-1.0);poissonDisk[2]=vec3(-1.0,-1.0,-1.0);poissonDisk[3]=vec3(1.0,-1.0,1.0);
#ifndef SHADOWFLOAT
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize))<depth) visibility-=0.25;if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize))<depth) visibility-=0.25;if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize))<depth) visibility-=0.25;if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize))<depth) visibility-=0.25;
#else
if (textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize).x<depth) visibility-=0.25;if (textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize).x<depth) visibility-=0.25;if (textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize).x<depth) visibility-=0.25;if (textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize).x<depth) visibility-=0.25;
#endif
return min(1.0,visibility+darkness);}
#define inline
float computeShadowWithESMCube(vec3 worldPos,vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{vec3 directionToLight=worldPos-lightPosition;float depth=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);float shadowPixelDepth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);return esm;}
#define inline
float computeShadowWithCloseESMCube(vec3 worldPos,vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{vec3 directionToLight=worldPos-lightPosition;float depth=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);float shadowPixelDepth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);return esm;}
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define inline
float computeShadowCSM(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray shadowSampler,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec2 uv=0.5*clipSpace.xy+vec2(0.5);vec3 uvLayer=vec3(uv.x,uv.y,layer);float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(texture2D(shadowSampler,uvLayer));
#else
float shadow=texture2D(shadowSampler,uvLayer).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;}
#endif
#define inline
float computeShadow(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec2 uv=0.5*clipSpace.xy+vec2(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadow=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;}}
#define inline
float computeShadowWithPoissonSampling(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float mapSize,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec2 uv=0.5*clipSpace.xy+vec2(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{float shadowPixelDepth=clamp(depthMetric,0.,1.0);float visibility=1.;vec2 poissonDisk[4];poissonDisk[0]=vec2(-0.94201624,-0.39906216);poissonDisk[1]=vec2(0.94558609,-0.76890725);poissonDisk[2]=vec2(-0.094184101,-0.92938870);poissonDisk[3]=vec2(0.34495938,0.29387760);
#ifndef SHADOWFLOAT
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[0]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[1]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[2]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[3]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
#else
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[0]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[1]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[2]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[3]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
#endif
return computeFallOff(min(1.0,visibility+darkness),clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec2 uv=0.5*clipSpace.xy+vec2(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadowMapSample=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithCloseESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec2 uv=0.5*clipSpace.xy+vec2(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{float shadowPixelDepth=clamp(depthMetric,0.,1.0); 
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadowMapSample=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);}}
#ifdef IS_NDC_HALF_ZRANGE
#define ZINCLIP clipSpace.z
#else
#define ZINCLIP uvDepth.z
#endif
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define SMALLEST_ABOVE_ZERO 1.1754943508e-38
#define GREATEST_LESS_THAN_ONE 0.99999994
#define DISABLE_UNIFORMITY_ANALYSIS
#define inline
float computeShadowWithCSMPCF1(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
#ifdef USE_REVERSE_DEPTHBUFFER
uvDepth.z=clamp(ZINCLIP,SMALLEST_ABOVE_ZERO,1.);
#else
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
#endif
vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);float shadow=texture2D(shadowSampler,uvDepthLayer);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
#define inline
float computeShadowWithCSMPCF3(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
#ifdef USE_REVERSE_DEPTHBUFFER
uvDepth.z=clamp(ZINCLIP,SMALLEST_ABOVE_ZERO,1.);
#else
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
#endif
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;vec2 uvw1=1.+2.*st;vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;float shadow=0.;shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));shadow=shadow/16.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
#define inline
float computeShadowWithCSMPCF5(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
#ifdef USE_REVERSE_DEPTHBUFFER
uvDepth.z=clamp(ZINCLIP,SMALLEST_ABOVE_ZERO,1.);
#else
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
#endif
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=4.-3.*st;vec2 uvw1=vec2(7.);vec2 uvw2=1.+3.*st;vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;float shadow=0.;shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));shadow+=uvw2.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[0]),layer,uvDepth.z));shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));shadow+=uvw2.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[1]),layer,uvDepth.z));shadow+=uvw0.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[2]),layer,uvDepth.z));shadow+=uvw1.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[2]),layer,uvDepth.z));shadow+=uvw2.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[2]),layer,uvDepth.z));shadow=shadow/144.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
#define inline
float computeShadowWithPCF1(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=ZINCLIP;float shadow=TEXTUREFUNC(shadowSampler,uvDepth,0.);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithPCF3(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=ZINCLIP;vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;vec2 uvw1=1.+2.*st;vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;float shadow=0.;shadow+=uvw0.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z),0.);shadow+=uvw1.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z),0.);shadow+=uvw0.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z),0.);shadow+=uvw1.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z),0.);shadow=shadow/16.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithPCF5(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=ZINCLIP;vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=4.-3.*st;vec2 uvw1=vec2(7.);vec2 uvw2=1.+3.*st;vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;float shadow=0.;shadow+=uvw0.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z),0.);shadow+=uvw1.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z),0.);shadow+=uvw2.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[0]),uvDepth.z),0.);shadow+=uvw0.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z),0.);shadow+=uvw1.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z),0.);shadow+=uvw2.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[1]),uvDepth.z),0.);shadow+=uvw0.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[2]),uvDepth.z),0.);shadow+=uvw1.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[2]),uvDepth.z),0.);shadow+=uvw2.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[2]),uvDepth.z),0.);shadow=shadow/144.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
const vec3 PoissonSamplers32[64]=vec3[64](
vec3(0.06407013,0.05409927,0.),
vec3(0.7366577,0.5789394,0.),
vec3(-0.6270542,-0.5320278,0.),
vec3(-0.4096107,0.8411095,0.),
vec3(0.6849564,-0.4990818,0.),
vec3(-0.874181,-0.04579735,0.),
vec3(0.9989998,0.0009880066,0.),
vec3(-0.004920578,-0.9151649,0.),
vec3(0.1805763,0.9747483,0.),
vec3(-0.2138451,0.2635818,0.),
vec3(0.109845,0.3884785,0.),
vec3(0.06876755,-0.3581074,0.),
vec3(0.374073,-0.7661266,0.),
vec3(0.3079132,-0.1216763,0.),
vec3(-0.3794335,-0.8271583,0.),
vec3(-0.203878,-0.07715034,0.),
vec3(0.5912697,0.1469799,0.),
vec3(-0.88069,0.3031784,0.),
vec3(0.5040108,0.8283722,0.),
vec3(-0.5844124,0.5494877,0.),
vec3(0.6017799,-0.1726654,0.),
vec3(-0.5554981,0.1559997,0.),
vec3(-0.3016369,-0.3900928,0.),
vec3(-0.5550632,-0.1723762,0.),
vec3(0.925029,0.2995041,0.),
vec3(-0.2473137,0.5538505,0.),
vec3(0.9183037,-0.2862392,0.),
vec3(0.2469421,0.6718712,0.),
vec3(0.3916397,-0.4328209,0.),
vec3(-0.03576927,-0.6220032,0.),
vec3(-0.04661255,0.7995201,0.),
vec3(0.4402924,0.3640312,0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.)
);const vec3 PoissonSamplers64[64]=vec3[64](
vec3(-0.613392,0.617481,0.),
vec3(0.170019,-0.040254,0.),
vec3(-0.299417,0.791925,0.),
vec3(0.645680,0.493210,0.),
vec3(-0.651784,0.717887,0.),
vec3(0.421003,0.027070,0.),
vec3(-0.817194,-0.271096,0.),
vec3(-0.705374,-0.668203,0.),
vec3(0.977050,-0.108615,0.),
vec3(0.063326,0.142369,0.),
vec3(0.203528,0.214331,0.),
vec3(-0.667531,0.326090,0.),
vec3(-0.098422,-0.295755,0.),
vec3(-0.885922,0.215369,0.),
vec3(0.566637,0.605213,0.),
vec3(0.039766,-0.396100,0.),
vec3(0.751946,0.453352,0.),
vec3(0.078707,-0.715323,0.),
vec3(-0.075838,-0.529344,0.),
vec3(0.724479,-0.580798,0.),
vec3(0.222999,-0.215125,0.),
vec3(-0.467574,-0.405438,0.),
vec3(-0.248268,-0.814753,0.),
vec3(0.354411,-0.887570,0.),
vec3(0.175817,0.382366,0.),
vec3(0.487472,-0.063082,0.),
vec3(-0.084078,0.898312,0.),
vec3(0.488876,-0.783441,0.),
vec3(0.470016,0.217933,0.),
vec3(-0.696890,-0.549791,0.),
vec3(-0.149693,0.605762,0.),
vec3(0.034211,0.979980,0.),
vec3(0.503098,-0.308878,0.),
vec3(-0.016205,-0.872921,0.),
vec3(0.385784,-0.393902,0.),
vec3(-0.146886,-0.859249,0.),
vec3(0.643361,0.164098,0.),
vec3(0.634388,-0.049471,0.),
vec3(-0.688894,0.007843,0.),
vec3(0.464034,-0.188818,0.),
vec3(-0.440840,0.137486,0.),
vec3(0.364483,0.511704,0.),
vec3(0.034028,0.325968,0.),
vec3(0.099094,-0.308023,0.),
vec3(0.693960,-0.366253,0.),
vec3(0.678884,-0.204688,0.),
vec3(0.001801,0.780328,0.),
vec3(0.145177,-0.898984,0.),
vec3(0.062655,-0.611866,0.),
vec3(0.315226,-0.604297,0.),
vec3(-0.780145,0.486251,0.),
vec3(-0.371868,0.882138,0.),
vec3(0.200476,0.494430,0.),
vec3(-0.494552,-0.711051,0.),
vec3(0.612476,0.705252,0.),
vec3(-0.578845,-0.768792,0.),
vec3(-0.772454,-0.090976,0.),
vec3(0.504440,0.372295,0.),
vec3(0.155736,0.065157,0.),
vec3(0.391522,0.849605,0.),
vec3(-0.620106,-0.328104,0.),
vec3(0.789239,-0.419965,0.),
vec3(-0.545396,0.538133,0.),
vec3(-0.178564,-0.596057,0.)
);
#define inline
float computeShadowWithCSMPCSS(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
#ifdef USE_REVERSE_DEPTHBUFFER
uvDepth.z=clamp(ZINCLIP,SMALLEST_ABOVE_ZERO,1.);
#else
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
#endif
vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);float blockerDepth=0.0;float sumBlockerDepth=0.0;float numBlocker=0.0;for (int i=0; i<searchTapCount; i ++) {blockerDepth=texture2D(depthSampler,vec3(uvDepth.xy+(lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse*PoissonSamplers32[i].xy),layer)).r;if (blockerDepth<depthMetric) {sumBlockerDepth+=blockerDepth;numBlocker++;}}
float avgBlockerDepth=sumBlockerDepth/numBlocker;float AAOffset=shadowMapSizeInverse*10.;float penumbraRatio=((depthMetric-avgBlockerDepth)*depthCorrection+AAOffset);vec4 filterRadius=vec4(penumbraRatio*lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse,0.,0.);float random=getRand(vPositionFromLight.xy);float rotationAngle=random*3.1415926;vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));float shadow=0.;for (int i=0; i<pcfTapCount; i++) {vec4 offset=vec4(poissonSamplers[i],0.);offset=vec4(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.,0.);shadow+=texture2D(shadowSampler,uvDepthLayer+offset*filterRadius);}
shadow/=float(pcfTapCount);shadow=mix(shadow,1.,min((depthMetric-avgBlockerDepth)*depthCorrection*penumbraDarkness,1.));shadow=mix(darkness,1.,shadow);if (numBlocker<1.0) {return 1.0;}
else
{return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithPCSS(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers)
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=ZINCLIP;float blockerDepth=0.0;float sumBlockerDepth=0.0;float numBlocker=0.0;for (int i=0; i<searchTapCount; i ++) {blockerDepth=TEXTUREFUNC(depthSampler,uvDepth.xy+(lightSizeUV*shadowMapSizeInverse*PoissonSamplers32[i].xy),0.).r;if (blockerDepth<depthMetric) {sumBlockerDepth+=blockerDepth;numBlocker++;}}
if (numBlocker<1.0) {return 1.0;}
else
{float avgBlockerDepth=sumBlockerDepth/numBlocker;float AAOffset=shadowMapSizeInverse*10.;float penumbraRatio=((depthMetric-avgBlockerDepth)+AAOffset);float filterRadius=penumbraRatio*lightSizeUV*shadowMapSizeInverse;float random=getRand(vPositionFromLight.xy);float rotationAngle=random*3.1415926;vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));float shadow=0.;for (int i=0; i<pcfTapCount; i++) {vec3 offset=poissonSamplers[i];offset=vec3(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.);shadow+=TEXTUREFUNC(shadowSampler,uvDepth+offset*filterRadius,0.);}
shadow/=float(pcfTapCount);shadow=mix(shadow,1.,depthMetric-avgBlockerDepth);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}}
#define inline
float computeShadowWithPCSS16(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32);}
#define inline
float computeShadowWithPCSS32(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32);}
#define inline
float computeShadowWithPCSS64(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64);}
#define inline
float computeShadowWithCSMPCSS16(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
#define inline
float computeShadowWithCSMPCSS32(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
#define inline
float computeShadowWithCSMPCSS64(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const shadowsFragmentFunctions = { name, shader };


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) // removed by dead control flow
{}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfU2hhZGVyc0luY2x1ZGVfbGlnaHRGcmFnbWVudERlY2xhcmF0aW9uX2pzLWNvcmVfZGlzdF9TaGFkZXJzX1NoYWRlcnNJbmNsdWRlLTcwOTdlYy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2xpZ2h0RnJhZ21lbnREZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbGlnaHRVYm9EZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbHRjSGVscGVyRnVuY3Rpb25zLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9zaGFkb3dzRnJhZ21lbnRGdW5jdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImxpZ2h0RnJhZ21lbnREZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBMSUdIVHtYfVxudW5pZm9ybSB2ZWM0IHZMaWdodERhdGF7WH07dW5pZm9ybSB2ZWM0IHZMaWdodERpZmZ1c2V7WH07XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG51bmlmb3JtIHZlYzQgdkxpZ2h0U3BlY3VsYXJ7WH07XG4jZWxzZVxudmVjNCB2TGlnaHRTcGVjdWxhcntYfT12ZWM0KDAuKTtcbiNlbmRpZlxuI2lmZGVmIFNIQURPV3tYfVxuI2lmZGVmIFNIQURPV0NTTXtYfVxudW5pZm9ybSBtYXQ0IGxpZ2h0TWF0cml4e1h9W1NIQURPV0NTTU5VTV9DQVNDQURFU3tYfV07dW5pZm9ybSBmbG9hdCB2aWV3RnJ1c3R1bVp7WH1bU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9XTt1bmlmb3JtIGZsb2F0IGZydXN0dW1MZW5ndGhze1h9W1NIQURPV0NTTU5VTV9DQVNDQURFU3tYfV07dW5pZm9ybSBmbG9hdCBjYXNjYWRlQmxlbmRGYWN0b3J7WH07dmFyeWluZyB2ZWM0IHZQb3NpdGlvbkZyb21MaWdodHtYfVtTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH1dO3ZhcnlpbmcgZmxvYXQgdkRlcHRoTWV0cmlje1h9W1NIQURPV0NTTU5VTV9DQVNDQURFU3tYfV07dmFyeWluZyB2ZWM0IHZQb3NpdGlvbkZyb21DYW1lcmF7WH07XG4jaWYgZGVmaW5lZChTSEFET1dQQ1NTe1h9KVxudW5pZm9ybSBoaWdocCBzYW1wbGVyMkRBcnJheVNoYWRvdyBzaGFkb3dUZXh0dXJle1h9O3VuaWZvcm0gaGlnaHAgc2FtcGxlcjJEQXJyYXkgZGVwdGhUZXh0dXJle1h9O3VuaWZvcm0gdmVjMiBsaWdodFNpemVVVkNvcnJlY3Rpb257WH1bU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9XTt1bmlmb3JtIGZsb2F0IGRlcHRoQ29ycmVjdGlvbntYfVtTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH1dO3VuaWZvcm0gZmxvYXQgcGVudW1icmFEYXJrbmVzc3tYfTtcbiNlbGlmIGRlZmluZWQoU0hBRE9XUENGe1h9KVxudW5pZm9ybSBoaWdocCBzYW1wbGVyMkRBcnJheVNoYWRvdyBzaGFkb3dUZXh0dXJle1h9O1xuI2Vsc2VcbnVuaWZvcm0gaGlnaHAgc2FtcGxlcjJEQXJyYXkgc2hhZG93VGV4dHVyZXtYfTtcbiNlbmRpZlxuI2lmZGVmIFNIQURPV0NTTURFQlVHe1h9XG5jb25zdCB2ZWMzIHZDYXNjYWRlQ29sb3JzTXVsdGlwbGllcntYfVs4XT12ZWMzWzhdXG4oXG52ZWMzICggMS41LDAuMCwwLjAgKSxcbnZlYzMgKCAwLjAsMS41LDAuMCApLFxudmVjMyAoIDAuMCwwLjAsNS41ICksXG52ZWMzICggMS41LDAuMCw1LjUgKSxcbnZlYzMgKCAxLjUsMS41LDAuMCApLFxudmVjMyAoIDEuMCwxLjAsMS4wICksXG52ZWMzICggMC4wLDEuMCw1LjUgKSxcbnZlYzMgKCAwLjUsMy41LDAuNzUgKVxuKTt2ZWMzIHNoYWRvd0RlYnVne1h9O1xuI2VuZGlmXG4jaWZkZWYgU0hBRE9XQ1NNVVNFU0hBRE9XTUFYWntYfVxuaW50IGluZGV4e1h9PS0xO1xuI2Vsc2VcbmludCBpbmRleHtYfT1TSEFET1dDU01OVU1fQ0FTQ0FERVN7WH0tMTtcbiNlbmRpZlxuZmxvYXQgZGlmZntYfT0wLjtcbiNlbGlmIGRlZmluZWQoU0hBRE9XQ1VCRXtYfSlcbnVuaWZvcm0gc2FtcGxlckN1YmUgc2hhZG93VGV4dHVyZXtYfTtcbiNlbHNlXG52YXJ5aW5nIHZlYzQgdlBvc2l0aW9uRnJvbUxpZ2h0e1h9O3ZhcnlpbmcgZmxvYXQgdkRlcHRoTWV0cmlje1h9O1xuI2lmIGRlZmluZWQoU0hBRE9XUENTU3tYfSlcbnVuaWZvcm0gaGlnaHAgc2FtcGxlcjJEU2hhZG93IHNoYWRvd1RleHR1cmV7WH07dW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgZGVwdGhUZXh0dXJle1h9O1xuI2VsaWYgZGVmaW5lZChTSEFET1dQQ0Z7WH0pXG51bmlmb3JtIGhpZ2hwIHNhbXBsZXIyRFNoYWRvdyBzaGFkb3dUZXh0dXJle1h9O1xuI2Vsc2VcbnVuaWZvcm0gc2FtcGxlcjJEIHNoYWRvd1RleHR1cmV7WH07XG4jZW5kaWZcbnVuaWZvcm0gbWF0NCBsaWdodE1hdHJpeHtYfTtcbiNlbmRpZlxudW5pZm9ybSB2ZWM0IHNoYWRvd3NJbmZve1h9O3VuaWZvcm0gdmVjMiBkZXB0aFZhbHVlc3tYfTtcbiNlbmRpZlxuI2lmZGVmIFNQT1RMSUdIVHtYfVxudW5pZm9ybSB2ZWM0IHZMaWdodERpcmVjdGlvbntYfTt1bmlmb3JtIHZlYzQgdkxpZ2h0RmFsbG9mZntYfTtcbiNlbGlmIGRlZmluZWQoUE9JTlRMSUdIVHtYfSlcbnVuaWZvcm0gdmVjNCB2TGlnaHRGYWxsb2Zme1h9O1xuI2VsaWYgZGVmaW5lZChIRU1JTElHSFR7WH0pXG51bmlmb3JtIHZlYzMgdkxpZ2h0R3JvdW5ke1h9O1xuI2VuZGlmXG4jaWZkZWYgQVJFQUxJR0hUe1h9XG51bmlmb3JtIHZlYzQgdkxpZ2h0V2lkdGh7WH07dW5pZm9ybSB2ZWM0IHZMaWdodEhlaWdodHtYfTtcbiNlbmRpZlxuI2lmZGVmIElFU0xJR0hUVEVYVFVSRXtYfVxudW5pZm9ybSBzYW1wbGVyMkQgaWVzTGlnaHRUZXh0dXJle1h9O1xuI2VuZGlmXG4jaWZkZWYgUFJPSkVDVEVETElHSFRURVhUVVJFe1h9XG51bmlmb3JtIG1hdDQgdGV4dHVyZVByb2plY3Rpb25NYXRyaXh7WH07dW5pZm9ybSBzYW1wbGVyMkQgcHJvamVjdGlvbkxpZ2h0VGV4dHVyZXtYfTtcbiNlbmRpZlxuI2lmZGVmIENMVVNUTElHSFR7WH1cbnVuaWZvcm0gdmVjMiB2U2xpY2VEYXRhe1h9O3VuaWZvcm0gdmVjMiB2U2xpY2VSYW5nZXN7WH1bQ0xVU1RMSUdIVF9TTElDRVNdO3VuaWZvcm0gc2FtcGxlcjJEIGxpZ2h0RGF0YVRleHR1cmV7WH07dW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgdGlsZU1hc2tUZXh0dXJle1h9O1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbGlnaHRGcmFnbWVudERlY2xhcmF0aW9uID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJsaWdodFVib0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIExJR0hUe1h9XG51bmlmb3JtIExpZ2h0e1h9XG57dmVjNCB2TGlnaHREYXRhO3ZlYzQgdkxpZ2h0RGlmZnVzZTt2ZWM0IHZMaWdodFNwZWN1bGFyO1xuI2lmZGVmIFNQT1RMSUdIVHtYfVxudmVjNCB2TGlnaHREaXJlY3Rpb247dmVjNCB2TGlnaHRGYWxsb2ZmO1xuI2VsaWYgZGVmaW5lZChQT0lOVExJR0hUe1h9KVxudmVjNCB2TGlnaHRGYWxsb2ZmO1xuI2VsaWYgZGVmaW5lZChIRU1JTElHSFR7WH0pXG52ZWMzIHZMaWdodEdyb3VuZDtcbiNlbGlmIGRlZmluZWQoQ0xVU1RMSUdIVHtYfSlcbnZlYzIgdlNsaWNlRGF0YTt2ZWMyIHZTbGljZVJhbmdlc1tDTFVTVExJR0hUX1NMSUNFU107XG4jZW5kaWZcbiNpZiBkZWZpbmVkKEFSRUFMSUdIVHtYfSlcbnZlYzQgdkxpZ2h0V2lkdGg7dmVjNCB2TGlnaHRIZWlnaHQ7XG4jZW5kaWZcbnZlYzQgc2hhZG93c0luZm87dmVjMiBkZXB0aFZhbHVlczt9IGxpZ2h0e1h9O1xuI2lmZGVmIElFU0xJR0hUVEVYVFVSRXtYfVxudW5pZm9ybSBzYW1wbGVyMkQgaWVzTGlnaHRUZXh0dXJle1h9O1xuI2VuZGlmXG4jaWZkZWYgUFJPSkVDVEVETElHSFRURVhUVVJFe1h9XG51bmlmb3JtIG1hdDQgdGV4dHVyZVByb2plY3Rpb25NYXRyaXh7WH07dW5pZm9ybSBzYW1wbGVyMkQgcHJvamVjdGlvbkxpZ2h0VGV4dHVyZXtYfTtcbiNlbmRpZlxuI2lmZGVmIENMVVNUTElHSFR7WH1cbnVuaWZvcm0gc2FtcGxlcjJEIGxpZ2h0RGF0YVRleHR1cmV7WH07dW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgdGlsZU1hc2tUZXh0dXJle1h9O1xuI2VuZGlmXG4jaWZkZWYgU0hBRE9Xe1h9XG4jaWZkZWYgU0hBRE9XQ1NNe1h9XG51bmlmb3JtIG1hdDQgbGlnaHRNYXRyaXh7WH1bU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9XTt1bmlmb3JtIGZsb2F0IHZpZXdGcnVzdHVtWntYfVtTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH1dO3VuaWZvcm0gZmxvYXQgZnJ1c3R1bUxlbmd0aHN7WH1bU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9XTt1bmlmb3JtIGZsb2F0IGNhc2NhZGVCbGVuZEZhY3RvcntYfTt2YXJ5aW5nIHZlYzQgdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W1NIQURPV0NTTU5VTV9DQVNDQURFU3tYfV07dmFyeWluZyBmbG9hdCB2RGVwdGhNZXRyaWN7WH1bU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9XTt2YXJ5aW5nIHZlYzQgdlBvc2l0aW9uRnJvbUNhbWVyYXtYfTtcbiNpZiBkZWZpbmVkKFNIQURPV1BDU1N7WH0pXG51bmlmb3JtIGhpZ2hwIHNhbXBsZXIyREFycmF5U2hhZG93IHNoYWRvd1RleHR1cmV7WH07dW5pZm9ybSBoaWdocCBzYW1wbGVyMkRBcnJheSBkZXB0aFRleHR1cmV7WH07dW5pZm9ybSB2ZWMyIGxpZ2h0U2l6ZVVWQ29ycmVjdGlvbntYfVtTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH1dO3VuaWZvcm0gZmxvYXQgZGVwdGhDb3JyZWN0aW9ue1h9W1NIQURPV0NTTU5VTV9DQVNDQURFU3tYfV07dW5pZm9ybSBmbG9hdCBwZW51bWJyYURhcmtuZXNze1h9O1xuI2VsaWYgZGVmaW5lZChTSEFET1dQQ0Z7WH0pXG51bmlmb3JtIGhpZ2hwIHNhbXBsZXIyREFycmF5U2hhZG93IHNoYWRvd1RleHR1cmV7WH07XG4jZWxzZVxudW5pZm9ybSBoaWdocCBzYW1wbGVyMkRBcnJheSBzaGFkb3dUZXh0dXJle1h9O1xuI2VuZGlmXG4jaWZkZWYgU0hBRE9XQ1NNREVCVUd7WH1cbmNvbnN0IHZlYzMgdkNhc2NhZGVDb2xvcnNNdWx0aXBsaWVye1h9WzhdPXZlYzNbOF1cbihcbnZlYzMgKCAxLjUsMC4wLDAuMCApLFxudmVjMyAoIDAuMCwxLjUsMC4wICksXG52ZWMzICggMC4wLDAuMCw1LjUgKSxcbnZlYzMgKCAxLjUsMC4wLDUuNSApLFxudmVjMyAoIDEuNSwxLjUsMC4wICksXG52ZWMzICggMS4wLDEuMCwxLjAgKSxcbnZlYzMgKCAwLjAsMS4wLDUuNSApLFxudmVjMyAoIDAuNSwzLjUsMC43NSApXG4pO3ZlYzMgc2hhZG93RGVidWd7WH07XG4jZW5kaWZcbiNpZmRlZiBTSEFET1dDU01VU0VTSEFET1dNQVhae1h9XG5pbnQgaW5kZXh7WH09LTE7XG4jZWxzZVxuaW50IGluZGV4e1h9PVNIQURPV0NTTU5VTV9DQVNDQURFU3tYfS0xO1xuI2VuZGlmXG5mbG9hdCBkaWZme1h9PTAuO1xuI2VsaWYgZGVmaW5lZChTSEFET1dDVUJFe1h9KVxudW5pZm9ybSBzYW1wbGVyQ3ViZSBzaGFkb3dUZXh0dXJle1h9OyBcbiNlbHNlXG52YXJ5aW5nIHZlYzQgdlBvc2l0aW9uRnJvbUxpZ2h0e1h9O3ZhcnlpbmcgZmxvYXQgdkRlcHRoTWV0cmlje1h9O1xuI2lmIGRlZmluZWQoU0hBRE9XUENTU3tYfSlcbnVuaWZvcm0gaGlnaHAgc2FtcGxlcjJEU2hhZG93IHNoYWRvd1RleHR1cmV7WH07dW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgZGVwdGhUZXh0dXJle1h9O1xuI2VsaWYgZGVmaW5lZChTSEFET1dQQ0Z7WH0pXG51bmlmb3JtIGhpZ2hwIHNhbXBsZXIyRFNoYWRvdyBzaGFkb3dUZXh0dXJle1h9O1xuI2Vsc2VcbnVuaWZvcm0gc2FtcGxlcjJEIHNoYWRvd1RleHR1cmV7WH07XG4jZW5kaWZcbnVuaWZvcm0gbWF0NCBsaWdodE1hdHJpeHtYfTtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbGlnaHRVYm9EZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibHRjSGVscGVyRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgdmVjMiBMVENVdiggY29uc3QgaW4gdmVjMyBOLGNvbnN0IGluIHZlYzMgVixjb25zdCBpbiBmbG9hdCByb3VnaG5lc3MgKSB7Y29uc3QgZmxvYXQgTFVUU0laRT02NC4wO2NvbnN0IGZsb2F0IExVVFNDQUxFPSggTFVUU0laRS0xLjAgKS9MVVRTSVpFO2NvbnN0IGZsb2F0IExVVEJJQVM9MC41L0xVVFNJWkU7ZmxvYXQgZG90TlY9c2F0dXJhdGUoIGRvdCggTixWICkgKTt2ZWMyIHV2PXZlYzIoIHJvdWdobmVzcyxzcXJ0KCAxLjAtZG90TlYgKSApO3V2PXV2KkxVVFNDQUxFK0xVVEJJQVM7cmV0dXJuIHV2O31cbmZsb2F0IExUQ0NsaXBwZWRTcGhlcmVGb3JtRmFjdG9yKCBjb25zdCBpbiB2ZWMzIGYgKSB7ZmxvYXQgbD1sZW5ndGgoIGYgKTtyZXR1cm4gbWF4KCAoIGwqbCtmLnogKS8oIGwrMS4wICksMC4wICk7fVxudmVjMyBMVENFZGdlVmVjdG9yRm9ybUZhY3RvciggY29uc3QgaW4gdmVjMyB2MSxjb25zdCBpbiB2ZWMzIHYyICkge2Zsb2F0IHg9ZG90KCB2MSx2MiApO2Zsb2F0IHk9YWJzKCB4ICk7ZmxvYXQgYT0wLjg1NDM5ODUrKCAwLjQ5NjUxNTUrMC4wMTQ1MjA2KnkgKSp5O2Zsb2F0IGI9My40MTc1OTQwKyggNC4xNjE2NzI0K3kgKSp5O2Zsb2F0IHY9YS9iO2Zsb2F0IHRoZXRhU2ludGhldGE9MC4wO2lmKCB4PjAuMCApXG57dGhldGFTaW50aGV0YT12O31cbmVsc2Vcbnt0aGV0YVNpbnRoZXRhPTAuNSppbnZlcnNlc3FydCggbWF4KCAxLjAteCp4LDFlLTcgKSApLXY7fVxucmV0dXJuIGNyb3NzKCB2MSx2MiApKnRoZXRhU2ludGhldGE7fVxudmVjMyBMVENFdmFsdWF0ZSggY29uc3QgaW4gdmVjMyBOLGNvbnN0IGluIHZlYzMgVixjb25zdCBpbiB2ZWMzIFAsY29uc3QgaW4gbWF0MyBtSW52LGNvbnN0IGluIHZlYzMgcmVjdENvb3Jkc1sgNCBdICkge3ZlYzMgdjE9cmVjdENvb3Jkc1sgMSBdLXJlY3RDb29yZHNbIDAgXTt2ZWMzIHYyPXJlY3RDb29yZHNbIDMgXS1yZWN0Q29vcmRzWyAwIF07dmVjMyBsaWdodE5vcm1hbD1jcm9zcyggdjEsdjIgKTtpZiggZG90KCBsaWdodE5vcm1hbCxQLXJlY3RDb29yZHNbIDAgXSApPDAuMCApIHJldHVybiB2ZWMzKCAwLjAgKTt2ZWMzIFQxLFQyO1QxPW5vcm1hbGl6ZSggVi1OKmRvdCggVixOICkgKTtUMj0tIGNyb3NzKCBOLFQxICk7IFxubWF0MyBtYXQ9bUludip0cmFuc3Bvc2VNYXQzKCBtYXQzKCBUMSxUMixOICkgKTt2ZWMzIGNvb3Jkc1sgNCBdO2Nvb3Jkc1sgMCBdPW1hdCooIHJlY3RDb29yZHNbIDAgXS1QICk7Y29vcmRzWyAxIF09bWF0KiggcmVjdENvb3Jkc1sgMSBdLVAgKTtjb29yZHNbIDIgXT1tYXQqKCByZWN0Q29vcmRzWyAyIF0tUCApO2Nvb3Jkc1sgMyBdPW1hdCooIHJlY3RDb29yZHNbIDMgXS1QICk7Y29vcmRzWyAwIF09bm9ybWFsaXplKCBjb29yZHNbIDAgXSApO2Nvb3Jkc1sgMSBdPW5vcm1hbGl6ZSggY29vcmRzWyAxIF0gKTtjb29yZHNbIDIgXT1ub3JtYWxpemUoIGNvb3Jkc1sgMiBdICk7Y29vcmRzWyAzIF09bm9ybWFsaXplKCBjb29yZHNbIDMgXSApO3ZlYzMgdmVjdG9yRm9ybUZhY3Rvcj12ZWMzKCAwLjAgKTt2ZWN0b3JGb3JtRmFjdG9yKz1MVENFZGdlVmVjdG9yRm9ybUZhY3RvciggY29vcmRzWyAwIF0sY29vcmRzWyAxIF0gKTt2ZWN0b3JGb3JtRmFjdG9yKz1MVENFZGdlVmVjdG9yRm9ybUZhY3RvciggY29vcmRzWyAxIF0sY29vcmRzWyAyIF0gKTt2ZWN0b3JGb3JtRmFjdG9yKz1MVENFZGdlVmVjdG9yRm9ybUZhY3RvciggY29vcmRzWyAyIF0sY29vcmRzWyAzIF0gKTt2ZWN0b3JGb3JtRmFjdG9yKz1MVENFZGdlVmVjdG9yRm9ybUZhY3RvciggY29vcmRzWyAzIF0sY29vcmRzWyAwIF0gKTtmbG9hdCByZXN1bHQ9TFRDQ2xpcHBlZFNwaGVyZUZvcm1GYWN0b3IoIHZlY3RvckZvcm1GYWN0b3IgKTtyZXR1cm4gdmVjMyggcmVzdWx0ICk7fVxuc3RydWN0IGFyZWFMaWdodERhdGFcbnt2ZWMzIERpZmZ1c2U7dmVjMyBTcGVjdWxhcjt2ZWM0IEZyZXNuZWw7fTtcbiNkZWZpbmUgaW5saW5lXG5hcmVhTGlnaHREYXRhIGNvbXB1dGVBcmVhTGlnaHRTcGVjdWxhckRpZmZ1c2VGcmVzbmVsKGNvbnN0IGluIHNhbXBsZXIyRCBsdGMxLGNvbnN0IGluIHNhbXBsZXIyRCBsdGMyLGNvbnN0IGluIHZlYzMgdmlld0Rpcixjb25zdCBpbiB2ZWMzIG5vcm1hbCxjb25zdCBpbiB2ZWMzIHBvc2l0aW9uLGNvbnN0IGluIHZlYzMgbGlnaHRQb3MsY29uc3QgaW4gdmVjMyBoYWxmV2lkdGgsY29uc3QgaW4gdmVjMyBoYWxmSGVpZ2h0LGNvbnN0IGluIGZsb2F0IHJvdWdobmVzcykgXG57YXJlYUxpZ2h0RGF0YSByZXN1bHQ7dmVjMyByZWN0Q29vcmRzWyA0IF07cmVjdENvb3Jkc1sgMCBdPWxpZ2h0UG9zK2hhbGZXaWR0aC1oYWxmSGVpZ2h0OyBcbnJlY3RDb29yZHNbIDEgXT1saWdodFBvcy1oYWxmV2lkdGgtaGFsZkhlaWdodDtyZWN0Q29vcmRzWyAyIF09bGlnaHRQb3MtaGFsZldpZHRoK2hhbGZIZWlnaHQ7cmVjdENvb3Jkc1sgMyBdPWxpZ2h0UG9zK2hhbGZXaWR0aCtoYWxmSGVpZ2h0O1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxudmVjMiB1dj1MVENVdiggbm9ybWFsLHZpZXdEaXIscm91Z2huZXNzICk7dmVjNCB0MT10ZXh0dXJlMkQoIGx0YzEsdXYgKTt2ZWM0IHQyPXRleHR1cmUyRCggbHRjMix1diApO21hdDMgbUludj1tYXQzKFxudmVjMyggdDEueCwwLHQxLnkgKSxcbnZlYzMoIDAsMSwgMCApLFxudmVjMyggdDEueiwwLHQxLncgKVxuKTtyZXN1bHQuU3BlY3VsYXI9TFRDRXZhbHVhdGUoIG5vcm1hbCx2aWV3RGlyLHBvc2l0aW9uLG1JbnYscmVjdENvb3JkcyApO3Jlc3VsdC5GcmVzbmVsPXQyO1xuI2VuZGlmXG5yZXN1bHQuRGlmZnVzZT1MVENFdmFsdWF0ZSggbm9ybWFsLHZpZXdEaXIscG9zaXRpb24sbWF0MyggMS4wICkscmVjdENvb3JkcyApO3JldHVybiByZXN1bHQ7fWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbHRjSGVscGVyRnVuY3Rpb25zID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJzaGFkb3dzRnJhZ21lbnRGdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgU0hBRE9XU1xuI2lmIGRlZmluZWQoV0VCR0wyKSB8fCBkZWZpbmVkKFdFQkdQVSkgfHwgZGVmaW5lZChOQVRJVkUpXG4jZGVmaW5lIFRFWFRVUkVGVU5DKHMsYyxsKSB0ZXh0dXJlMkRMb2RFWFQocyxjLGwpXG4jZWxzZVxuI2RlZmluZSBURVhUVVJFRlVOQyhzLGMsYikgdGV4dHVyZTJEKHMsYyxiKVxuI2VuZGlmXG4jaWZuZGVmIFNIQURPV0ZMT0FUXG5mbG9hdCB1bnBhY2sodmVjNCBjb2xvcilcbntjb25zdCB2ZWM0IGJpdF9zaGlmdD12ZWM0KDEuMC8oMjU1LjAqMjU1LjAqMjU1LjApLDEuMC8oMjU1LjAqMjU1LjApLDEuMC8yNTUuMCwxLjApO3JldHVybiBkb3QoY29sb3IsYml0X3NoaWZ0KTt9XG4jZW5kaWZcbmZsb2F0IGNvbXB1dGVGYWxsT2ZmKGZsb2F0IHZhbHVlLHZlYzIgY2xpcFNwYWNlLGZsb2F0IGZydXN0dW1FZGdlRmFsbG9mZilcbntmbG9hdCBtYXNrPXNtb290aHN0ZXAoMS4wLWZydXN0dW1FZGdlRmFsbG9mZiwxLjAwMDAwMDEyLGNsYW1wKGRvdChjbGlwU3BhY2UsY2xpcFNwYWNlKSwwLiwxLikpO3JldHVybiBtaXgodmFsdWUsMS4wLG1hc2spO31cbiNkZWZpbmUgaW5saW5lXG5mbG9hdCBjb21wdXRlU2hhZG93Q3ViZSh2ZWMzIHdvcmxkUG9zLHZlYzMgbGlnaHRQb3NpdGlvbixzYW1wbGVyQ3ViZSBzaGFkb3dTYW1wbGVyLGZsb2F0IGRhcmtuZXNzLHZlYzIgZGVwdGhWYWx1ZXMpXG57dmVjMyBkaXJlY3Rpb25Ub0xpZ2h0PXdvcmxkUG9zLWxpZ2h0UG9zaXRpb247ZmxvYXQgZGVwdGg9bGVuZ3RoKGRpcmVjdGlvblRvTGlnaHQpO2RlcHRoPShkZXB0aCtkZXB0aFZhbHVlcy54KS8oZGVwdGhWYWx1ZXMueSk7ZGVwdGg9Y2xhbXAoZGVwdGgsMC4sMS4wKTtkaXJlY3Rpb25Ub0xpZ2h0PW5vcm1hbGl6ZShkaXJlY3Rpb25Ub0xpZ2h0KTtkaXJlY3Rpb25Ub0xpZ2h0Lnk9LWRpcmVjdGlvblRvTGlnaHQueTtcbiNpZm5kZWYgU0hBRE9XRkxPQVRcbmZsb2F0IHNoYWRvdz11bnBhY2sodGV4dHVyZUN1YmUoc2hhZG93U2FtcGxlcixkaXJlY3Rpb25Ub0xpZ2h0KSk7XG4jZWxzZVxuZmxvYXQgc2hhZG93PXRleHR1cmVDdWJlKHNoYWRvd1NhbXBsZXIsZGlyZWN0aW9uVG9MaWdodCkueDtcbiNlbmRpZlxucmV0dXJuIGRlcHRoPnNoYWRvdyA/IGRhcmtuZXNzIDogMS4wO31cbiNkZWZpbmUgaW5saW5lXG5mbG9hdCBjb21wdXRlU2hhZG93V2l0aFBvaXNzb25TYW1wbGluZ0N1YmUodmVjMyB3b3JsZFBvcyx2ZWMzIGxpZ2h0UG9zaXRpb24sc2FtcGxlckN1YmUgc2hhZG93U2FtcGxlcixmbG9hdCBtYXBTaXplLGZsb2F0IGRhcmtuZXNzLHZlYzIgZGVwdGhWYWx1ZXMpXG57dmVjMyBkaXJlY3Rpb25Ub0xpZ2h0PXdvcmxkUG9zLWxpZ2h0UG9zaXRpb247ZmxvYXQgZGVwdGg9bGVuZ3RoKGRpcmVjdGlvblRvTGlnaHQpO2RlcHRoPShkZXB0aCtkZXB0aFZhbHVlcy54KS8oZGVwdGhWYWx1ZXMueSk7ZGVwdGg9Y2xhbXAoZGVwdGgsMC4sMS4wKTtkaXJlY3Rpb25Ub0xpZ2h0PW5vcm1hbGl6ZShkaXJlY3Rpb25Ub0xpZ2h0KTtkaXJlY3Rpb25Ub0xpZ2h0Lnk9LWRpcmVjdGlvblRvTGlnaHQueTtmbG9hdCB2aXNpYmlsaXR5PTEuO3ZlYzMgcG9pc3NvbkRpc2tbNF07cG9pc3NvbkRpc2tbMF09dmVjMygtMS4wLDEuMCwtMS4wKTtwb2lzc29uRGlza1sxXT12ZWMzKDEuMCwtMS4wLC0xLjApO3BvaXNzb25EaXNrWzJdPXZlYzMoLTEuMCwtMS4wLC0xLjApO3BvaXNzb25EaXNrWzNdPXZlYzMoMS4wLC0xLjAsMS4wKTtcbiNpZm5kZWYgU0hBRE9XRkxPQVRcbmlmICh1bnBhY2sodGV4dHVyZUN1YmUoc2hhZG93U2FtcGxlcixkaXJlY3Rpb25Ub0xpZ2h0K3BvaXNzb25EaXNrWzBdKm1hcFNpemUpKTxkZXB0aCkgdmlzaWJpbGl0eS09MC4yNTtpZiAodW5wYWNrKHRleHR1cmVDdWJlKHNoYWRvd1NhbXBsZXIsZGlyZWN0aW9uVG9MaWdodCtwb2lzc29uRGlza1sxXSptYXBTaXplKSk8ZGVwdGgpIHZpc2liaWxpdHktPTAuMjU7aWYgKHVucGFjayh0ZXh0dXJlQ3ViZShzaGFkb3dTYW1wbGVyLGRpcmVjdGlvblRvTGlnaHQrcG9pc3NvbkRpc2tbMl0qbWFwU2l6ZSkpPGRlcHRoKSB2aXNpYmlsaXR5LT0wLjI1O2lmICh1bnBhY2sodGV4dHVyZUN1YmUoc2hhZG93U2FtcGxlcixkaXJlY3Rpb25Ub0xpZ2h0K3BvaXNzb25EaXNrWzNdKm1hcFNpemUpKTxkZXB0aCkgdmlzaWJpbGl0eS09MC4yNTtcbiNlbHNlXG5pZiAodGV4dHVyZUN1YmUoc2hhZG93U2FtcGxlcixkaXJlY3Rpb25Ub0xpZ2h0K3BvaXNzb25EaXNrWzBdKm1hcFNpemUpLng8ZGVwdGgpIHZpc2liaWxpdHktPTAuMjU7aWYgKHRleHR1cmVDdWJlKHNoYWRvd1NhbXBsZXIsZGlyZWN0aW9uVG9MaWdodCtwb2lzc29uRGlza1sxXSptYXBTaXplKS54PGRlcHRoKSB2aXNpYmlsaXR5LT0wLjI1O2lmICh0ZXh0dXJlQ3ViZShzaGFkb3dTYW1wbGVyLGRpcmVjdGlvblRvTGlnaHQrcG9pc3NvbkRpc2tbMl0qbWFwU2l6ZSkueDxkZXB0aCkgdmlzaWJpbGl0eS09MC4yNTtpZiAodGV4dHVyZUN1YmUoc2hhZG93U2FtcGxlcixkaXJlY3Rpb25Ub0xpZ2h0K3BvaXNzb25EaXNrWzNdKm1hcFNpemUpLng8ZGVwdGgpIHZpc2liaWxpdHktPTAuMjU7XG4jZW5kaWZcbnJldHVybiBtaW4oMS4wLHZpc2liaWxpdHkrZGFya25lc3MpO31cbiNkZWZpbmUgaW5saW5lXG5mbG9hdCBjb21wdXRlU2hhZG93V2l0aEVTTUN1YmUodmVjMyB3b3JsZFBvcyx2ZWMzIGxpZ2h0UG9zaXRpb24sc2FtcGxlckN1YmUgc2hhZG93U2FtcGxlcixmbG9hdCBkYXJrbmVzcyxmbG9hdCBkZXB0aFNjYWxlLHZlYzIgZGVwdGhWYWx1ZXMpXG57dmVjMyBkaXJlY3Rpb25Ub0xpZ2h0PXdvcmxkUG9zLWxpZ2h0UG9zaXRpb247ZmxvYXQgZGVwdGg9bGVuZ3RoKGRpcmVjdGlvblRvTGlnaHQpO2RlcHRoPShkZXB0aCtkZXB0aFZhbHVlcy54KS8oZGVwdGhWYWx1ZXMueSk7ZmxvYXQgc2hhZG93UGl4ZWxEZXB0aD1jbGFtcChkZXB0aCwwLiwxLjApO2RpcmVjdGlvblRvTGlnaHQ9bm9ybWFsaXplKGRpcmVjdGlvblRvTGlnaHQpO2RpcmVjdGlvblRvTGlnaHQueT0tZGlyZWN0aW9uVG9MaWdodC55O1xuI2lmbmRlZiBTSEFET1dGTE9BVFxuZmxvYXQgc2hhZG93TWFwU2FtcGxlPXVucGFjayh0ZXh0dXJlQ3ViZShzaGFkb3dTYW1wbGVyLGRpcmVjdGlvblRvTGlnaHQpKTtcbiNlbHNlXG5mbG9hdCBzaGFkb3dNYXBTYW1wbGU9dGV4dHVyZUN1YmUoc2hhZG93U2FtcGxlcixkaXJlY3Rpb25Ub0xpZ2h0KS54O1xuI2VuZGlmXG5mbG9hdCBlc209MS4wLWNsYW1wKGV4cChtaW4oODcuLGRlcHRoU2NhbGUqc2hhZG93UGl4ZWxEZXB0aCkpKnNoYWRvd01hcFNhbXBsZSwwLiwxLi1kYXJrbmVzcyk7cmV0dXJuIGVzbTt9XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhDbG9zZUVTTUN1YmUodmVjMyB3b3JsZFBvcyx2ZWMzIGxpZ2h0UG9zaXRpb24sc2FtcGxlckN1YmUgc2hhZG93U2FtcGxlcixmbG9hdCBkYXJrbmVzcyxmbG9hdCBkZXB0aFNjYWxlLHZlYzIgZGVwdGhWYWx1ZXMpXG57dmVjMyBkaXJlY3Rpb25Ub0xpZ2h0PXdvcmxkUG9zLWxpZ2h0UG9zaXRpb247ZmxvYXQgZGVwdGg9bGVuZ3RoKGRpcmVjdGlvblRvTGlnaHQpO2RlcHRoPShkZXB0aCtkZXB0aFZhbHVlcy54KS8oZGVwdGhWYWx1ZXMueSk7ZmxvYXQgc2hhZG93UGl4ZWxEZXB0aD1jbGFtcChkZXB0aCwwLiwxLjApO2RpcmVjdGlvblRvTGlnaHQ9bm9ybWFsaXplKGRpcmVjdGlvblRvTGlnaHQpO2RpcmVjdGlvblRvTGlnaHQueT0tZGlyZWN0aW9uVG9MaWdodC55O1xuI2lmbmRlZiBTSEFET1dGTE9BVFxuZmxvYXQgc2hhZG93TWFwU2FtcGxlPXVucGFjayh0ZXh0dXJlQ3ViZShzaGFkb3dTYW1wbGVyLGRpcmVjdGlvblRvTGlnaHQpKTtcbiNlbHNlXG5mbG9hdCBzaGFkb3dNYXBTYW1wbGU9dGV4dHVyZUN1YmUoc2hhZG93U2FtcGxlcixkaXJlY3Rpb25Ub0xpZ2h0KS54O1xuI2VuZGlmXG5mbG9hdCBlc209Y2xhbXAoZXhwKG1pbig4Ny4sLWRlcHRoU2NhbGUqKHNoYWRvd1BpeGVsRGVwdGgtc2hhZG93TWFwU2FtcGxlKSkpLGRhcmtuZXNzLDEuKTtyZXR1cm4gZXNtO31cbiNpZiBkZWZpbmVkKFdFQkdMMikgfHwgZGVmaW5lZChXRUJHUFUpIHx8IGRlZmluZWQoTkFUSVZFKVxuI2RlZmluZSBpbmxpbmVcbmZsb2F0IGNvbXB1dGVTaGFkb3dDU00oZmxvYXQgbGF5ZXIsdmVjNCB2UG9zaXRpb25Gcm9tTGlnaHQsZmxvYXQgZGVwdGhNZXRyaWMsaGlnaHAgc2FtcGxlcjJEQXJyYXkgc2hhZG93U2FtcGxlcixmbG9hdCBkYXJrbmVzcyxmbG9hdCBmcnVzdHVtRWRnZUZhbGxvZmYpXG57dmVjMyBjbGlwU3BhY2U9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2ZWMyIHV2PTAuNSpjbGlwU3BhY2UueHkrdmVjMigwLjUpO3ZlYzMgdXZMYXllcj12ZWMzKHV2LngsdXYueSxsYXllcik7ZmxvYXQgc2hhZG93UGl4ZWxEZXB0aD1jbGFtcChkZXB0aE1ldHJpYywwLiwxLjApO1xuI2lmbmRlZiBTSEFET1dGTE9BVFxuZmxvYXQgc2hhZG93PXVucGFjayh0ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix1dkxheWVyKSk7XG4jZWxzZVxuZmxvYXQgc2hhZG93PXRleHR1cmUyRChzaGFkb3dTYW1wbGVyLHV2TGF5ZXIpLng7XG4jZW5kaWZcbnJldHVybiBzaGFkb3dQaXhlbERlcHRoPnNoYWRvdyA/IGNvbXB1dGVGYWxsT2ZmKGRhcmtuZXNzLGNsaXBTcGFjZS54eSxmcnVzdHVtRWRnZUZhbGxvZmYpIDogMS47fVxuI2VuZGlmXG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvdyh2ZWM0IHZQb3NpdGlvbkZyb21MaWdodCxmbG9hdCBkZXB0aE1ldHJpYyxzYW1wbGVyMkQgc2hhZG93U2FtcGxlcixmbG9hdCBkYXJrbmVzcyxmbG9hdCBmcnVzdHVtRWRnZUZhbGxvZmYpXG57dmVjMyBjbGlwU3BhY2U9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2ZWMyIHV2PTAuNSpjbGlwU3BhY2UueHkrdmVjMigwLjUpO2lmICh1di54PDAuIHx8IHV2Lng+MS4wIHx8IHV2Lnk8MC4gfHwgdXYueT4xLjApXG57cmV0dXJuIDEuMDt9XG5lbHNlXG57ZmxvYXQgc2hhZG93UGl4ZWxEZXB0aD1jbGFtcChkZXB0aE1ldHJpYywwLiwxLjApO1xuI2lmbmRlZiBTSEFET1dGTE9BVFxuZmxvYXQgc2hhZG93PXVucGFjayhURVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHV2LDAuKSk7XG4jZWxzZVxuZmxvYXQgc2hhZG93PVRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdXYsMC4pLng7XG4jZW5kaWZcbnJldHVybiBzaGFkb3dQaXhlbERlcHRoPnNoYWRvdyA/IGNvbXB1dGVGYWxsT2ZmKGRhcmtuZXNzLGNsaXBTcGFjZS54eSxmcnVzdHVtRWRnZUZhbGxvZmYpIDogMS47fX1cbiNkZWZpbmUgaW5saW5lXG5mbG9hdCBjb21wdXRlU2hhZG93V2l0aFBvaXNzb25TYW1wbGluZyh2ZWM0IHZQb3NpdGlvbkZyb21MaWdodCxmbG9hdCBkZXB0aE1ldHJpYyxzYW1wbGVyMkQgc2hhZG93U2FtcGxlcixmbG9hdCBtYXBTaXplLGZsb2F0IGRhcmtuZXNzLGZsb2F0IGZydXN0dW1FZGdlRmFsbG9mZilcbnt2ZWMzIGNsaXBTcGFjZT12UG9zaXRpb25Gcm9tTGlnaHQueHl6L3ZQb3NpdGlvbkZyb21MaWdodC53O3ZlYzIgdXY9MC41KmNsaXBTcGFjZS54eSt2ZWMyKDAuNSk7aWYgKHV2Lng8MC4gfHwgdXYueD4xLjAgfHwgdXYueTwwLiB8fCB1di55PjEuMClcbntyZXR1cm4gMS4wO31cbmVsc2VcbntmbG9hdCBzaGFkb3dQaXhlbERlcHRoPWNsYW1wKGRlcHRoTWV0cmljLDAuLDEuMCk7ZmxvYXQgdmlzaWJpbGl0eT0xLjt2ZWMyIHBvaXNzb25EaXNrWzRdO3BvaXNzb25EaXNrWzBdPXZlYzIoLTAuOTQyMDE2MjQsLTAuMzk5MDYyMTYpO3BvaXNzb25EaXNrWzFdPXZlYzIoMC45NDU1ODYwOSwtMC43Njg5MDcyNSk7cG9pc3NvbkRpc2tbMl09dmVjMigtMC4wOTQxODQxMDEsLTAuOTI5Mzg4NzApO3BvaXNzb25EaXNrWzNdPXZlYzIoMC4zNDQ5NTkzOCwwLjI5Mzg3NzYwKTtcbiNpZm5kZWYgU0hBRE9XRkxPQVRcbmlmICh1bnBhY2soVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix1ditwb2lzc29uRGlza1swXSptYXBTaXplLDAuKSk8c2hhZG93UGl4ZWxEZXB0aCkgdmlzaWJpbGl0eS09MC4yNTtpZiAodW5wYWNrKFRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdXYrcG9pc3NvbkRpc2tbMV0qbWFwU2l6ZSwwLikpPHNoYWRvd1BpeGVsRGVwdGgpIHZpc2liaWxpdHktPTAuMjU7aWYgKHVucGFjayhURVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHV2K3BvaXNzb25EaXNrWzJdKm1hcFNpemUsMC4pKTxzaGFkb3dQaXhlbERlcHRoKSB2aXNpYmlsaXR5LT0wLjI1O2lmICh1bnBhY2soVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix1ditwb2lzc29uRGlza1szXSptYXBTaXplLDAuKSk8c2hhZG93UGl4ZWxEZXB0aCkgdmlzaWJpbGl0eS09MC4yNTtcbiNlbHNlXG5pZiAoVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix1ditwb2lzc29uRGlza1swXSptYXBTaXplLDAuKS54PHNoYWRvd1BpeGVsRGVwdGgpIHZpc2liaWxpdHktPTAuMjU7aWYgKFRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdXYrcG9pc3NvbkRpc2tbMV0qbWFwU2l6ZSwwLikueDxzaGFkb3dQaXhlbERlcHRoKSB2aXNpYmlsaXR5LT0wLjI1O2lmIChURVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHV2K3BvaXNzb25EaXNrWzJdKm1hcFNpemUsMC4pLng8c2hhZG93UGl4ZWxEZXB0aCkgdmlzaWJpbGl0eS09MC4yNTtpZiAoVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix1ditwb2lzc29uRGlza1szXSptYXBTaXplLDAuKS54PHNoYWRvd1BpeGVsRGVwdGgpIHZpc2liaWxpdHktPTAuMjU7XG4jZW5kaWZcbnJldHVybiBjb21wdXRlRmFsbE9mZihtaW4oMS4wLHZpc2liaWxpdHkrZGFya25lc3MpLGNsaXBTcGFjZS54eSxmcnVzdHVtRWRnZUZhbGxvZmYpO319XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhFU00odmVjNCB2UG9zaXRpb25Gcm9tTGlnaHQsZmxvYXQgZGVwdGhNZXRyaWMsc2FtcGxlcjJEIHNoYWRvd1NhbXBsZXIsZmxvYXQgZGFya25lc3MsZmxvYXQgZGVwdGhTY2FsZSxmbG9hdCBmcnVzdHVtRWRnZUZhbGxvZmYpXG57dmVjMyBjbGlwU3BhY2U9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2ZWMyIHV2PTAuNSpjbGlwU3BhY2UueHkrdmVjMigwLjUpO2lmICh1di54PDAuIHx8IHV2Lng+MS4wIHx8IHV2Lnk8MC4gfHwgdXYueT4xLjApXG57cmV0dXJuIDEuMDt9XG5lbHNlXG57ZmxvYXQgc2hhZG93UGl4ZWxEZXB0aD1jbGFtcChkZXB0aE1ldHJpYywwLiwxLjApO1xuI2lmbmRlZiBTSEFET1dGTE9BVFxuZmxvYXQgc2hhZG93TWFwU2FtcGxlPXVucGFjayhURVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHV2LDAuKSk7XG4jZWxzZVxuZmxvYXQgc2hhZG93TWFwU2FtcGxlPVRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdXYsMC4pLng7XG4jZW5kaWZcbmZsb2F0IGVzbT0xLjAtY2xhbXAoZXhwKG1pbig4Ny4sZGVwdGhTY2FsZSpzaGFkb3dQaXhlbERlcHRoKSkqc2hhZG93TWFwU2FtcGxlLDAuLDEuLWRhcmtuZXNzKTtyZXR1cm4gY29tcHV0ZUZhbGxPZmYoZXNtLGNsaXBTcGFjZS54eSxmcnVzdHVtRWRnZUZhbGxvZmYpO319XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhDbG9zZUVTTSh2ZWM0IHZQb3NpdGlvbkZyb21MaWdodCxmbG9hdCBkZXB0aE1ldHJpYyxzYW1wbGVyMkQgc2hhZG93U2FtcGxlcixmbG9hdCBkYXJrbmVzcyxmbG9hdCBkZXB0aFNjYWxlLGZsb2F0IGZydXN0dW1FZGdlRmFsbG9mZilcbnt2ZWMzIGNsaXBTcGFjZT12UG9zaXRpb25Gcm9tTGlnaHQueHl6L3ZQb3NpdGlvbkZyb21MaWdodC53O3ZlYzIgdXY9MC41KmNsaXBTcGFjZS54eSt2ZWMyKDAuNSk7aWYgKHV2Lng8MC4gfHwgdXYueD4xLjAgfHwgdXYueTwwLiB8fCB1di55PjEuMClcbntyZXR1cm4gMS4wO31cbmVsc2VcbntmbG9hdCBzaGFkb3dQaXhlbERlcHRoPWNsYW1wKGRlcHRoTWV0cmljLDAuLDEuMCk7IFxuI2lmbmRlZiBTSEFET1dGTE9BVFxuZmxvYXQgc2hhZG93TWFwU2FtcGxlPXVucGFjayhURVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHV2LDAuKSk7XG4jZWxzZVxuZmxvYXQgc2hhZG93TWFwU2FtcGxlPVRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdXYsMC4pLng7XG4jZW5kaWZcbmZsb2F0IGVzbT1jbGFtcChleHAobWluKDg3LiwtZGVwdGhTY2FsZSooc2hhZG93UGl4ZWxEZXB0aC1zaGFkb3dNYXBTYW1wbGUpKSksZGFya25lc3MsMS4pO3JldHVybiBjb21wdXRlRmFsbE9mZihlc20sY2xpcFNwYWNlLnh5LGZydXN0dW1FZGdlRmFsbG9mZik7fX1cbiNpZmRlZiBJU19ORENfSEFMRl9aUkFOR0VcbiNkZWZpbmUgWklOQ0xJUCBjbGlwU3BhY2UuelxuI2Vsc2VcbiNkZWZpbmUgWklOQ0xJUCB1dkRlcHRoLnpcbiNlbmRpZlxuI2lmIGRlZmluZWQoV0VCR0wyKSB8fCBkZWZpbmVkKFdFQkdQVSkgfHwgZGVmaW5lZChOQVRJVkUpXG4jZGVmaW5lIFNNQUxMRVNUX0FCT1ZFX1pFUk8gMS4xNzU0OTQzNTA4ZS0zOFxuI2RlZmluZSBHUkVBVEVTVF9MRVNTX1RIQU5fT05FIDAuOTk5OTk5OTRcbiNkZWZpbmUgRElTQUJMRV9VTklGT1JNSVRZX0FOQUxZU0lTXG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhDU01QQ0YxKGZsb2F0IGxheWVyLHZlYzQgdlBvc2l0aW9uRnJvbUxpZ2h0LGZsb2F0IGRlcHRoTWV0cmljLGhpZ2hwIHNhbXBsZXIyREFycmF5U2hhZG93IHNoYWRvd1NhbXBsZXIsZmxvYXQgZGFya25lc3MsZmxvYXQgZnJ1c3R1bUVkZ2VGYWxsb2ZmKVxue3ZlYzMgY2xpcFNwYWNlPXZQb3NpdGlvbkZyb21MaWdodC54eXovdlBvc2l0aW9uRnJvbUxpZ2h0Lnc7dmVjMyB1dkRlcHRoPXZlYzMoMC41KmNsaXBTcGFjZS54eXordmVjMygwLjUpKTtcbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxudXZEZXB0aC56PWNsYW1wKFpJTkNMSVAsU01BTExFU1RfQUJPVkVfWkVSTywxLik7XG4jZWxzZVxudXZEZXB0aC56PWNsYW1wKFpJTkNMSVAsMC4sR1JFQVRFU1RfTEVTU19USEFOX09ORSk7XG4jZW5kaWZcbnZlYzQgdXZEZXB0aExheWVyPXZlYzQodXZEZXB0aC54LHV2RGVwdGgueSxsYXllcix1dkRlcHRoLnopO2Zsb2F0IHNoYWRvdz10ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix1dkRlcHRoTGF5ZXIpO3NoYWRvdz1taXgoZGFya25lc3MsMS4sc2hhZG93KTtyZXR1cm4gY29tcHV0ZUZhbGxPZmYoc2hhZG93LGNsaXBTcGFjZS54eSxmcnVzdHVtRWRnZUZhbGxvZmYpO31cbiNkZWZpbmUgaW5saW5lXG5mbG9hdCBjb21wdXRlU2hhZG93V2l0aENTTVBDRjMoZmxvYXQgbGF5ZXIsdmVjNCB2UG9zaXRpb25Gcm9tTGlnaHQsZmxvYXQgZGVwdGhNZXRyaWMsaGlnaHAgc2FtcGxlcjJEQXJyYXlTaGFkb3cgc2hhZG93U2FtcGxlcix2ZWMyIHNoYWRvd01hcFNpemVBbmRJbnZlcnNlLGZsb2F0IGRhcmtuZXNzLGZsb2F0IGZydXN0dW1FZGdlRmFsbG9mZilcbnt2ZWMzIGNsaXBTcGFjZT12UG9zaXRpb25Gcm9tTGlnaHQueHl6L3ZQb3NpdGlvbkZyb21MaWdodC53O3ZlYzMgdXZEZXB0aD12ZWMzKDAuNSpjbGlwU3BhY2UueHl6K3ZlYzMoMC41KSk7XG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbnV2RGVwdGguej1jbGFtcChaSU5DTElQLFNNQUxMRVNUX0FCT1ZFX1pFUk8sMS4pO1xuI2Vsc2VcbnV2RGVwdGguej1jbGFtcChaSU5DTElQLDAuLEdSRUFURVNUX0xFU1NfVEhBTl9PTkUpO1xuI2VuZGlmXG52ZWMyIHV2PXV2RGVwdGgueHkqc2hhZG93TWFwU2l6ZUFuZEludmVyc2UueDsgXG51dis9MC41OyBcbnZlYzIgc3Q9ZnJhY3QodXYpOyBcbnZlYzIgYmFzZV91dj1mbG9vcih1diktMC41OyBcbmJhc2VfdXYqPXNoYWRvd01hcFNpemVBbmRJbnZlcnNlLnk7IFxudmVjMiB1dncwPTMuLTIuKnN0O3ZlYzIgdXZ3MT0xLisyLipzdDt2ZWMyIHU9dmVjMigoMi4tc3QueCkvdXZ3MC54LTEuLHN0LngvdXZ3MS54KzEuKSpzaGFkb3dNYXBTaXplQW5kSW52ZXJzZS55O3ZlYzIgdj12ZWMyKCgyLi1zdC55KS91dncwLnktMS4sc3QueS91dncxLnkrMS4pKnNoYWRvd01hcFNpemVBbmRJbnZlcnNlLnk7ZmxvYXQgc2hhZG93PTAuO3NoYWRvdys9dXZ3MC54KnV2dzAueSp0ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix2ZWM0KGJhc2VfdXYueHkrdmVjMih1WzBdLHZbMF0pLGxheWVyLHV2RGVwdGgueikpO3NoYWRvdys9dXZ3MS54KnV2dzAueSp0ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix2ZWM0KGJhc2VfdXYueHkrdmVjMih1WzFdLHZbMF0pLGxheWVyLHV2RGVwdGgueikpO3NoYWRvdys9dXZ3MC54KnV2dzEueSp0ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix2ZWM0KGJhc2VfdXYueHkrdmVjMih1WzBdLHZbMV0pLGxheWVyLHV2RGVwdGgueikpO3NoYWRvdys9dXZ3MS54KnV2dzEueSp0ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix2ZWM0KGJhc2VfdXYueHkrdmVjMih1WzFdLHZbMV0pLGxheWVyLHV2RGVwdGgueikpO3NoYWRvdz1zaGFkb3cvMTYuO3NoYWRvdz1taXgoZGFya25lc3MsMS4sc2hhZG93KTtyZXR1cm4gY29tcHV0ZUZhbGxPZmYoc2hhZG93LGNsaXBTcGFjZS54eSxmcnVzdHVtRWRnZUZhbGxvZmYpO31cbiNkZWZpbmUgaW5saW5lXG5mbG9hdCBjb21wdXRlU2hhZG93V2l0aENTTVBDRjUoZmxvYXQgbGF5ZXIsdmVjNCB2UG9zaXRpb25Gcm9tTGlnaHQsZmxvYXQgZGVwdGhNZXRyaWMsaGlnaHAgc2FtcGxlcjJEQXJyYXlTaGFkb3cgc2hhZG93U2FtcGxlcix2ZWMyIHNoYWRvd01hcFNpemVBbmRJbnZlcnNlLGZsb2F0IGRhcmtuZXNzLGZsb2F0IGZydXN0dW1FZGdlRmFsbG9mZilcbnt2ZWMzIGNsaXBTcGFjZT12UG9zaXRpb25Gcm9tTGlnaHQueHl6L3ZQb3NpdGlvbkZyb21MaWdodC53O3ZlYzMgdXZEZXB0aD12ZWMzKDAuNSpjbGlwU3BhY2UueHl6K3ZlYzMoMC41KSk7XG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbnV2RGVwdGguej1jbGFtcChaSU5DTElQLFNNQUxMRVNUX0FCT1ZFX1pFUk8sMS4pO1xuI2Vsc2VcbnV2RGVwdGguej1jbGFtcChaSU5DTElQLDAuLEdSRUFURVNUX0xFU1NfVEhBTl9PTkUpO1xuI2VuZGlmXG52ZWMyIHV2PXV2RGVwdGgueHkqc2hhZG93TWFwU2l6ZUFuZEludmVyc2UueDsgXG51dis9MC41OyBcbnZlYzIgc3Q9ZnJhY3QodXYpOyBcbnZlYzIgYmFzZV91dj1mbG9vcih1diktMC41OyBcbmJhc2VfdXYqPXNoYWRvd01hcFNpemVBbmRJbnZlcnNlLnk7IFxudmVjMiB1dncwPTQuLTMuKnN0O3ZlYzIgdXZ3MT12ZWMyKDcuKTt2ZWMyIHV2dzI9MS4rMy4qc3Q7dmVjMyB1PXZlYzMoKDMuLTIuKnN0LngpL3V2dzAueC0yLiwoMy4rc3QueCkvdXZ3MS54LHN0LngvdXZ3Mi54KzIuKSpzaGFkb3dNYXBTaXplQW5kSW52ZXJzZS55O3ZlYzMgdj12ZWMzKCgzLi0yLipzdC55KS91dncwLnktMi4sKDMuK3N0LnkpL3V2dzEueSxzdC55L3V2dzIueSsyLikqc2hhZG93TWFwU2l6ZUFuZEludmVyc2UueTtmbG9hdCBzaGFkb3c9MC47c2hhZG93Kz11dncwLngqdXZ3MC55KnRleHR1cmUyRChzaGFkb3dTYW1wbGVyLHZlYzQoYmFzZV91di54eSt2ZWMyKHVbMF0sdlswXSksbGF5ZXIsdXZEZXB0aC56KSk7c2hhZG93Kz11dncxLngqdXZ3MC55KnRleHR1cmUyRChzaGFkb3dTYW1wbGVyLHZlYzQoYmFzZV91di54eSt2ZWMyKHVbMV0sdlswXSksbGF5ZXIsdXZEZXB0aC56KSk7c2hhZG93Kz11dncyLngqdXZ3MC55KnRleHR1cmUyRChzaGFkb3dTYW1wbGVyLHZlYzQoYmFzZV91di54eSt2ZWMyKHVbMl0sdlswXSksbGF5ZXIsdXZEZXB0aC56KSk7c2hhZG93Kz11dncwLngqdXZ3MS55KnRleHR1cmUyRChzaGFkb3dTYW1wbGVyLHZlYzQoYmFzZV91di54eSt2ZWMyKHVbMF0sdlsxXSksbGF5ZXIsdXZEZXB0aC56KSk7c2hhZG93Kz11dncxLngqdXZ3MS55KnRleHR1cmUyRChzaGFkb3dTYW1wbGVyLHZlYzQoYmFzZV91di54eSt2ZWMyKHVbMV0sdlsxXSksbGF5ZXIsdXZEZXB0aC56KSk7c2hhZG93Kz11dncyLngqdXZ3MS55KnRleHR1cmUyRChzaGFkb3dTYW1wbGVyLHZlYzQoYmFzZV91di54eSt2ZWMyKHVbMl0sdlsxXSksbGF5ZXIsdXZEZXB0aC56KSk7c2hhZG93Kz11dncwLngqdXZ3Mi55KnRleHR1cmUyRChzaGFkb3dTYW1wbGVyLHZlYzQoYmFzZV91di54eSt2ZWMyKHVbMF0sdlsyXSksbGF5ZXIsdXZEZXB0aC56KSk7c2hhZG93Kz11dncxLngqdXZ3Mi55KnRleHR1cmUyRChzaGFkb3dTYW1wbGVyLHZlYzQoYmFzZV91di54eSt2ZWMyKHVbMV0sdlsyXSksbGF5ZXIsdXZEZXB0aC56KSk7c2hhZG93Kz11dncyLngqdXZ3Mi55KnRleHR1cmUyRChzaGFkb3dTYW1wbGVyLHZlYzQoYmFzZV91di54eSt2ZWMyKHVbMl0sdlsyXSksbGF5ZXIsdXZEZXB0aC56KSk7c2hhZG93PXNoYWRvdy8xNDQuO3NoYWRvdz1taXgoZGFya25lc3MsMS4sc2hhZG93KTtyZXR1cm4gY29tcHV0ZUZhbGxPZmYoc2hhZG93LGNsaXBTcGFjZS54eSxmcnVzdHVtRWRnZUZhbGxvZmYpO31cbiNkZWZpbmUgaW5saW5lXG5mbG9hdCBjb21wdXRlU2hhZG93V2l0aFBDRjEodmVjNCB2UG9zaXRpb25Gcm9tTGlnaHQsZmxvYXQgZGVwdGhNZXRyaWMsaGlnaHAgc2FtcGxlcjJEU2hhZG93IHNoYWRvd1NhbXBsZXIsZmxvYXQgZGFya25lc3MsZmxvYXQgZnJ1c3R1bUVkZ2VGYWxsb2ZmKVxue2lmIChkZXB0aE1ldHJpYz4xLjAgfHwgZGVwdGhNZXRyaWM8MC4wKSB7cmV0dXJuIDEuMDt9XG5lbHNlXG57dmVjMyBjbGlwU3BhY2U9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2ZWMzIHV2RGVwdGg9dmVjMygwLjUqY2xpcFNwYWNlLnh5eit2ZWMzKDAuNSkpO3V2RGVwdGguej1aSU5DTElQO2Zsb2F0IHNoYWRvdz1URVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHV2RGVwdGgsMC4pO3NoYWRvdz1taXgoZGFya25lc3MsMS4sc2hhZG93KTtyZXR1cm4gY29tcHV0ZUZhbGxPZmYoc2hhZG93LGNsaXBTcGFjZS54eSxmcnVzdHVtRWRnZUZhbGxvZmYpO319XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhQQ0YzKHZlYzQgdlBvc2l0aW9uRnJvbUxpZ2h0LGZsb2F0IGRlcHRoTWV0cmljLGhpZ2hwIHNhbXBsZXIyRFNoYWRvdyBzaGFkb3dTYW1wbGVyLHZlYzIgc2hhZG93TWFwU2l6ZUFuZEludmVyc2UsZmxvYXQgZGFya25lc3MsZmxvYXQgZnJ1c3R1bUVkZ2VGYWxsb2ZmKVxue2lmIChkZXB0aE1ldHJpYz4xLjAgfHwgZGVwdGhNZXRyaWM8MC4wKSB7cmV0dXJuIDEuMDt9XG5lbHNlXG57dmVjMyBjbGlwU3BhY2U9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2ZWMzIHV2RGVwdGg9dmVjMygwLjUqY2xpcFNwYWNlLnh5eit2ZWMzKDAuNSkpO3V2RGVwdGguej1aSU5DTElQO3ZlYzIgdXY9dXZEZXB0aC54eSpzaGFkb3dNYXBTaXplQW5kSW52ZXJzZS54OyBcbnV2Kz0wLjU7IFxudmVjMiBzdD1mcmFjdCh1dik7IFxudmVjMiBiYXNlX3V2PWZsb29yKHV2KS0wLjU7IFxuYmFzZV91dio9c2hhZG93TWFwU2l6ZUFuZEludmVyc2UueTsgXG52ZWMyIHV2dzA9My4tMi4qc3Q7dmVjMiB1dncxPTEuKzIuKnN0O3ZlYzIgdT12ZWMyKCgyLi1zdC54KS91dncwLngtMS4sc3QueC91dncxLngrMS4pKnNoYWRvd01hcFNpemVBbmRJbnZlcnNlLnk7dmVjMiB2PXZlYzIoKDIuLXN0LnkpL3V2dzAueS0xLixzdC55L3V2dzEueSsxLikqc2hhZG93TWFwU2l6ZUFuZEludmVyc2UueTtmbG9hdCBzaGFkb3c9MC47c2hhZG93Kz11dncwLngqdXZ3MC55KlRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdmVjMyhiYXNlX3V2Lnh5K3ZlYzIodVswXSx2WzBdKSx1dkRlcHRoLnopLDAuKTtzaGFkb3crPXV2dzEueCp1dncwLnkqVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix2ZWMzKGJhc2VfdXYueHkrdmVjMih1WzFdLHZbMF0pLHV2RGVwdGgueiksMC4pO3NoYWRvdys9dXZ3MC54KnV2dzEueSpURVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHZlYzMoYmFzZV91di54eSt2ZWMyKHVbMF0sdlsxXSksdXZEZXB0aC56KSwwLik7c2hhZG93Kz11dncxLngqdXZ3MS55KlRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdmVjMyhiYXNlX3V2Lnh5K3ZlYzIodVsxXSx2WzFdKSx1dkRlcHRoLnopLDAuKTtzaGFkb3c9c2hhZG93LzE2LjtzaGFkb3c9bWl4KGRhcmtuZXNzLDEuLHNoYWRvdyk7cmV0dXJuIGNvbXB1dGVGYWxsT2ZmKHNoYWRvdyxjbGlwU3BhY2UueHksZnJ1c3R1bUVkZ2VGYWxsb2ZmKTt9fVxuI2RlZmluZSBpbmxpbmVcbmZsb2F0IGNvbXB1dGVTaGFkb3dXaXRoUENGNSh2ZWM0IHZQb3NpdGlvbkZyb21MaWdodCxmbG9hdCBkZXB0aE1ldHJpYyxoaWdocCBzYW1wbGVyMkRTaGFkb3cgc2hhZG93U2FtcGxlcix2ZWMyIHNoYWRvd01hcFNpemVBbmRJbnZlcnNlLGZsb2F0IGRhcmtuZXNzLGZsb2F0IGZydXN0dW1FZGdlRmFsbG9mZilcbntpZiAoZGVwdGhNZXRyaWM+MS4wIHx8IGRlcHRoTWV0cmljPDAuMCkge3JldHVybiAxLjA7fVxuZWxzZVxue3ZlYzMgY2xpcFNwYWNlPXZQb3NpdGlvbkZyb21MaWdodC54eXovdlBvc2l0aW9uRnJvbUxpZ2h0Lnc7dmVjMyB1dkRlcHRoPXZlYzMoMC41KmNsaXBTcGFjZS54eXordmVjMygwLjUpKTt1dkRlcHRoLno9WklOQ0xJUDt2ZWMyIHV2PXV2RGVwdGgueHkqc2hhZG93TWFwU2l6ZUFuZEludmVyc2UueDsgXG51dis9MC41OyBcbnZlYzIgc3Q9ZnJhY3QodXYpOyBcbnZlYzIgYmFzZV91dj1mbG9vcih1diktMC41OyBcbmJhc2VfdXYqPXNoYWRvd01hcFNpemVBbmRJbnZlcnNlLnk7IFxudmVjMiB1dncwPTQuLTMuKnN0O3ZlYzIgdXZ3MT12ZWMyKDcuKTt2ZWMyIHV2dzI9MS4rMy4qc3Q7dmVjMyB1PXZlYzMoKDMuLTIuKnN0LngpL3V2dzAueC0yLiwoMy4rc3QueCkvdXZ3MS54LHN0LngvdXZ3Mi54KzIuKSpzaGFkb3dNYXBTaXplQW5kSW52ZXJzZS55O3ZlYzMgdj12ZWMzKCgzLi0yLipzdC55KS91dncwLnktMi4sKDMuK3N0LnkpL3V2dzEueSxzdC55L3V2dzIueSsyLikqc2hhZG93TWFwU2l6ZUFuZEludmVyc2UueTtmbG9hdCBzaGFkb3c9MC47c2hhZG93Kz11dncwLngqdXZ3MC55KlRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdmVjMyhiYXNlX3V2Lnh5K3ZlYzIodVswXSx2WzBdKSx1dkRlcHRoLnopLDAuKTtzaGFkb3crPXV2dzEueCp1dncwLnkqVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix2ZWMzKGJhc2VfdXYueHkrdmVjMih1WzFdLHZbMF0pLHV2RGVwdGgueiksMC4pO3NoYWRvdys9dXZ3Mi54KnV2dzAueSpURVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHZlYzMoYmFzZV91di54eSt2ZWMyKHVbMl0sdlswXSksdXZEZXB0aC56KSwwLik7c2hhZG93Kz11dncwLngqdXZ3MS55KlRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdmVjMyhiYXNlX3V2Lnh5K3ZlYzIodVswXSx2WzFdKSx1dkRlcHRoLnopLDAuKTtzaGFkb3crPXV2dzEueCp1dncxLnkqVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix2ZWMzKGJhc2VfdXYueHkrdmVjMih1WzFdLHZbMV0pLHV2RGVwdGgueiksMC4pO3NoYWRvdys9dXZ3Mi54KnV2dzEueSpURVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHZlYzMoYmFzZV91di54eSt2ZWMyKHVbMl0sdlsxXSksdXZEZXB0aC56KSwwLik7c2hhZG93Kz11dncwLngqdXZ3Mi55KlRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdmVjMyhiYXNlX3V2Lnh5K3ZlYzIodVswXSx2WzJdKSx1dkRlcHRoLnopLDAuKTtzaGFkb3crPXV2dzEueCp1dncyLnkqVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix2ZWMzKGJhc2VfdXYueHkrdmVjMih1WzFdLHZbMl0pLHV2RGVwdGgueiksMC4pO3NoYWRvdys9dXZ3Mi54KnV2dzIueSpURVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHZlYzMoYmFzZV91di54eSt2ZWMyKHVbMl0sdlsyXSksdXZEZXB0aC56KSwwLik7c2hhZG93PXNoYWRvdy8xNDQuO3NoYWRvdz1taXgoZGFya25lc3MsMS4sc2hhZG93KTtyZXR1cm4gY29tcHV0ZUZhbGxPZmYoc2hhZG93LGNsaXBTcGFjZS54eSxmcnVzdHVtRWRnZUZhbGxvZmYpO319XG5jb25zdCB2ZWMzIFBvaXNzb25TYW1wbGVyczMyWzY0XT12ZWMzWzY0XShcbnZlYzMoMC4wNjQwNzAxMywwLjA1NDA5OTI3LDAuKSxcbnZlYzMoMC43MzY2NTc3LDAuNTc4OTM5NCwwLiksXG52ZWMzKC0wLjYyNzA1NDIsLTAuNTMyMDI3OCwwLiksXG52ZWMzKC0wLjQwOTYxMDcsMC44NDExMDk1LDAuKSxcbnZlYzMoMC42ODQ5NTY0LC0wLjQ5OTA4MTgsMC4pLFxudmVjMygtMC44NzQxODEsLTAuMDQ1Nzk3MzUsMC4pLFxudmVjMygwLjk5ODk5OTgsMC4wMDA5ODgwMDY2LDAuKSxcbnZlYzMoLTAuMDA0OTIwNTc4LC0wLjkxNTE2NDksMC4pLFxudmVjMygwLjE4MDU3NjMsMC45NzQ3NDgzLDAuKSxcbnZlYzMoLTAuMjEzODQ1MSwwLjI2MzU4MTgsMC4pLFxudmVjMygwLjEwOTg0NSwwLjM4ODQ3ODUsMC4pLFxudmVjMygwLjA2ODc2NzU1LC0wLjM1ODEwNzQsMC4pLFxudmVjMygwLjM3NDA3MywtMC43NjYxMjY2LDAuKSxcbnZlYzMoMC4zMDc5MTMyLC0wLjEyMTY3NjMsMC4pLFxudmVjMygtMC4zNzk0MzM1LC0wLjgyNzE1ODMsMC4pLFxudmVjMygtMC4yMDM4NzgsLTAuMDc3MTUwMzQsMC4pLFxudmVjMygwLjU5MTI2OTcsMC4xNDY5Nzk5LDAuKSxcbnZlYzMoLTAuODgwNjksMC4zMDMxNzg0LDAuKSxcbnZlYzMoMC41MDQwMTA4LDAuODI4MzcyMiwwLiksXG52ZWMzKC0wLjU4NDQxMjQsMC41NDk0ODc3LDAuKSxcbnZlYzMoMC42MDE3Nzk5LC0wLjE3MjY2NTQsMC4pLFxudmVjMygtMC41NTU0OTgxLDAuMTU1OTk5NywwLiksXG52ZWMzKC0wLjMwMTYzNjksLTAuMzkwMDkyOCwwLiksXG52ZWMzKC0wLjU1NTA2MzIsLTAuMTcyMzc2MiwwLiksXG52ZWMzKDAuOTI1MDI5LDAuMjk5NTA0MSwwLiksXG52ZWMzKC0wLjI0NzMxMzcsMC41NTM4NTA1LDAuKSxcbnZlYzMoMC45MTgzMDM3LC0wLjI4NjIzOTIsMC4pLFxudmVjMygwLjI0Njk0MjEsMC42NzE4NzEyLDAuKSxcbnZlYzMoMC4zOTE2Mzk3LC0wLjQzMjgyMDksMC4pLFxudmVjMygtMC4wMzU3NjkyNywtMC42MjIwMDMyLDAuKSxcbnZlYzMoLTAuMDQ2NjEyNTUsMC43OTk1MjAxLDAuKSxcbnZlYzMoMC40NDAyOTI0LDAuMzY0MDMxMiwwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pXG4pO2NvbnN0IHZlYzMgUG9pc3NvblNhbXBsZXJzNjRbNjRdPXZlYzNbNjRdKFxudmVjMygtMC42MTMzOTIsMC42MTc0ODEsMC4pLFxudmVjMygwLjE3MDAxOSwtMC4wNDAyNTQsMC4pLFxudmVjMygtMC4yOTk0MTcsMC43OTE5MjUsMC4pLFxudmVjMygwLjY0NTY4MCwwLjQ5MzIxMCwwLiksXG52ZWMzKC0wLjY1MTc4NCwwLjcxNzg4NywwLiksXG52ZWMzKDAuNDIxMDAzLDAuMDI3MDcwLDAuKSxcbnZlYzMoLTAuODE3MTk0LC0wLjI3MTA5NiwwLiksXG52ZWMzKC0wLjcwNTM3NCwtMC42NjgyMDMsMC4pLFxudmVjMygwLjk3NzA1MCwtMC4xMDg2MTUsMC4pLFxudmVjMygwLjA2MzMyNiwwLjE0MjM2OSwwLiksXG52ZWMzKDAuMjAzNTI4LDAuMjE0MzMxLDAuKSxcbnZlYzMoLTAuNjY3NTMxLDAuMzI2MDkwLDAuKSxcbnZlYzMoLTAuMDk4NDIyLC0wLjI5NTc1NSwwLiksXG52ZWMzKC0wLjg4NTkyMiwwLjIxNTM2OSwwLiksXG52ZWMzKDAuNTY2NjM3LDAuNjA1MjEzLDAuKSxcbnZlYzMoMC4wMzk3NjYsLTAuMzk2MTAwLDAuKSxcbnZlYzMoMC43NTE5NDYsMC40NTMzNTIsMC4pLFxudmVjMygwLjA3ODcwNywtMC43MTUzMjMsMC4pLFxudmVjMygtMC4wNzU4MzgsLTAuNTI5MzQ0LDAuKSxcbnZlYzMoMC43MjQ0NzksLTAuNTgwNzk4LDAuKSxcbnZlYzMoMC4yMjI5OTksLTAuMjE1MTI1LDAuKSxcbnZlYzMoLTAuNDY3NTc0LC0wLjQwNTQzOCwwLiksXG52ZWMzKC0wLjI0ODI2OCwtMC44MTQ3NTMsMC4pLFxudmVjMygwLjM1NDQxMSwtMC44ODc1NzAsMC4pLFxudmVjMygwLjE3NTgxNywwLjM4MjM2NiwwLiksXG52ZWMzKDAuNDg3NDcyLC0wLjA2MzA4MiwwLiksXG52ZWMzKC0wLjA4NDA3OCwwLjg5ODMxMiwwLiksXG52ZWMzKDAuNDg4ODc2LC0wLjc4MzQ0MSwwLiksXG52ZWMzKDAuNDcwMDE2LDAuMjE3OTMzLDAuKSxcbnZlYzMoLTAuNjk2ODkwLC0wLjU0OTc5MSwwLiksXG52ZWMzKC0wLjE0OTY5MywwLjYwNTc2MiwwLiksXG52ZWMzKDAuMDM0MjExLDAuOTc5OTgwLDAuKSxcbnZlYzMoMC41MDMwOTgsLTAuMzA4ODc4LDAuKSxcbnZlYzMoLTAuMDE2MjA1LC0wLjg3MjkyMSwwLiksXG52ZWMzKDAuMzg1Nzg0LC0wLjM5MzkwMiwwLiksXG52ZWMzKC0wLjE0Njg4NiwtMC44NTkyNDksMC4pLFxudmVjMygwLjY0MzM2MSwwLjE2NDA5OCwwLiksXG52ZWMzKDAuNjM0Mzg4LC0wLjA0OTQ3MSwwLiksXG52ZWMzKC0wLjY4ODg5NCwwLjAwNzg0MywwLiksXG52ZWMzKDAuNDY0MDM0LC0wLjE4ODgxOCwwLiksXG52ZWMzKC0wLjQ0MDg0MCwwLjEzNzQ4NiwwLiksXG52ZWMzKDAuMzY0NDgzLDAuNTExNzA0LDAuKSxcbnZlYzMoMC4wMzQwMjgsMC4zMjU5NjgsMC4pLFxudmVjMygwLjA5OTA5NCwtMC4zMDgwMjMsMC4pLFxudmVjMygwLjY5Mzk2MCwtMC4zNjYyNTMsMC4pLFxudmVjMygwLjY3ODg4NCwtMC4yMDQ2ODgsMC4pLFxudmVjMygwLjAwMTgwMSwwLjc4MDMyOCwwLiksXG52ZWMzKDAuMTQ1MTc3LC0wLjg5ODk4NCwwLiksXG52ZWMzKDAuMDYyNjU1LC0wLjYxMTg2NiwwLiksXG52ZWMzKDAuMzE1MjI2LC0wLjYwNDI5NywwLiksXG52ZWMzKC0wLjc4MDE0NSwwLjQ4NjI1MSwwLiksXG52ZWMzKC0wLjM3MTg2OCwwLjg4MjEzOCwwLiksXG52ZWMzKDAuMjAwNDc2LDAuNDk0NDMwLDAuKSxcbnZlYzMoLTAuNDk0NTUyLC0wLjcxMTA1MSwwLiksXG52ZWMzKDAuNjEyNDc2LDAuNzA1MjUyLDAuKSxcbnZlYzMoLTAuNTc4ODQ1LC0wLjc2ODc5MiwwLiksXG52ZWMzKC0wLjc3MjQ1NCwtMC4wOTA5NzYsMC4pLFxudmVjMygwLjUwNDQ0MCwwLjM3MjI5NSwwLiksXG52ZWMzKDAuMTU1NzM2LDAuMDY1MTU3LDAuKSxcbnZlYzMoMC4zOTE1MjIsMC44NDk2MDUsMC4pLFxudmVjMygtMC42MjAxMDYsLTAuMzI4MTA0LDAuKSxcbnZlYzMoMC43ODkyMzksLTAuNDE5OTY1LDAuKSxcbnZlYzMoLTAuNTQ1Mzk2LDAuNTM4MTMzLDAuKSxcbnZlYzMoLTAuMTc4NTY0LC0wLjU5NjA1NywwLilcbik7XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhDU01QQ1NTKGZsb2F0IGxheWVyLHZlYzQgdlBvc2l0aW9uRnJvbUxpZ2h0LGZsb2F0IGRlcHRoTWV0cmljLGhpZ2hwIHNhbXBsZXIyREFycmF5IGRlcHRoU2FtcGxlcixoaWdocCBzYW1wbGVyMkRBcnJheVNoYWRvdyBzaGFkb3dTYW1wbGVyLGZsb2F0IHNoYWRvd01hcFNpemVJbnZlcnNlLGZsb2F0IGxpZ2h0U2l6ZVVWLGZsb2F0IGRhcmtuZXNzLGZsb2F0IGZydXN0dW1FZGdlRmFsbG9mZixpbnQgc2VhcmNoVGFwQ291bnQsaW50IHBjZlRhcENvdW50LHZlYzNbNjRdIHBvaXNzb25TYW1wbGVycyx2ZWMyIGxpZ2h0U2l6ZVVWQ29ycmVjdGlvbixmbG9hdCBkZXB0aENvcnJlY3Rpb24sZmxvYXQgcGVudW1icmFEYXJrbmVzcylcbnt2ZWMzIGNsaXBTcGFjZT12UG9zaXRpb25Gcm9tTGlnaHQueHl6L3ZQb3NpdGlvbkZyb21MaWdodC53O3ZlYzMgdXZEZXB0aD12ZWMzKDAuNSpjbGlwU3BhY2UueHl6K3ZlYzMoMC41KSk7XG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbnV2RGVwdGguej1jbGFtcChaSU5DTElQLFNNQUxMRVNUX0FCT1ZFX1pFUk8sMS4pO1xuI2Vsc2VcbnV2RGVwdGguej1jbGFtcChaSU5DTElQLDAuLEdSRUFURVNUX0xFU1NfVEhBTl9PTkUpO1xuI2VuZGlmXG52ZWM0IHV2RGVwdGhMYXllcj12ZWM0KHV2RGVwdGgueCx1dkRlcHRoLnksbGF5ZXIsdXZEZXB0aC56KTtmbG9hdCBibG9ja2VyRGVwdGg9MC4wO2Zsb2F0IHN1bUJsb2NrZXJEZXB0aD0wLjA7ZmxvYXQgbnVtQmxvY2tlcj0wLjA7Zm9yIChpbnQgaT0wOyBpPHNlYXJjaFRhcENvdW50OyBpICsrKSB7YmxvY2tlckRlcHRoPXRleHR1cmUyRChkZXB0aFNhbXBsZXIsdmVjMyh1dkRlcHRoLnh5KyhsaWdodFNpemVVVipsaWdodFNpemVVVkNvcnJlY3Rpb24qc2hhZG93TWFwU2l6ZUludmVyc2UqUG9pc3NvblNhbXBsZXJzMzJbaV0ueHkpLGxheWVyKSkucjtpZiAoYmxvY2tlckRlcHRoPGRlcHRoTWV0cmljKSB7c3VtQmxvY2tlckRlcHRoKz1ibG9ja2VyRGVwdGg7bnVtQmxvY2tlcisrO319XG5mbG9hdCBhdmdCbG9ja2VyRGVwdGg9c3VtQmxvY2tlckRlcHRoL251bUJsb2NrZXI7ZmxvYXQgQUFPZmZzZXQ9c2hhZG93TWFwU2l6ZUludmVyc2UqMTAuO2Zsb2F0IHBlbnVtYnJhUmF0aW89KChkZXB0aE1ldHJpYy1hdmdCbG9ja2VyRGVwdGgpKmRlcHRoQ29ycmVjdGlvbitBQU9mZnNldCk7dmVjNCBmaWx0ZXJSYWRpdXM9dmVjNChwZW51bWJyYVJhdGlvKmxpZ2h0U2l6ZVVWKmxpZ2h0U2l6ZVVWQ29ycmVjdGlvbipzaGFkb3dNYXBTaXplSW52ZXJzZSwwLiwwLik7ZmxvYXQgcmFuZG9tPWdldFJhbmQodlBvc2l0aW9uRnJvbUxpZ2h0Lnh5KTtmbG9hdCByb3RhdGlvbkFuZ2xlPXJhbmRvbSozLjE0MTU5MjY7dmVjMiByb3RhdGlvblZlY3Rvcj12ZWMyKGNvcyhyb3RhdGlvbkFuZ2xlKSxzaW4ocm90YXRpb25BbmdsZSkpO2Zsb2F0IHNoYWRvdz0wLjtmb3IgKGludCBpPTA7IGk8cGNmVGFwQ291bnQ7IGkrKykge3ZlYzQgb2Zmc2V0PXZlYzQocG9pc3NvblNhbXBsZXJzW2ldLDAuKTtvZmZzZXQ9dmVjNChvZmZzZXQueCpyb3RhdGlvblZlY3Rvci54LW9mZnNldC55KnJvdGF0aW9uVmVjdG9yLnksb2Zmc2V0Lnkqcm90YXRpb25WZWN0b3IueCtvZmZzZXQueCpyb3RhdGlvblZlY3Rvci55LDAuLDAuKTtzaGFkb3crPXRleHR1cmUyRChzaGFkb3dTYW1wbGVyLHV2RGVwdGhMYXllcitvZmZzZXQqZmlsdGVyUmFkaXVzKTt9XG5zaGFkb3cvPWZsb2F0KHBjZlRhcENvdW50KTtzaGFkb3c9bWl4KHNoYWRvdywxLixtaW4oKGRlcHRoTWV0cmljLWF2Z0Jsb2NrZXJEZXB0aCkqZGVwdGhDb3JyZWN0aW9uKnBlbnVtYnJhRGFya25lc3MsMS4pKTtzaGFkb3c9bWl4KGRhcmtuZXNzLDEuLHNoYWRvdyk7aWYgKG51bUJsb2NrZXI8MS4wKSB7cmV0dXJuIDEuMDt9XG5lbHNlXG57cmV0dXJuIGNvbXB1dGVGYWxsT2ZmKHNoYWRvdyxjbGlwU3BhY2UueHksZnJ1c3R1bUVkZ2VGYWxsb2ZmKTt9fVxuI2RlZmluZSBpbmxpbmVcbmZsb2F0IGNvbXB1dGVTaGFkb3dXaXRoUENTUyh2ZWM0IHZQb3NpdGlvbkZyb21MaWdodCxmbG9hdCBkZXB0aE1ldHJpYyxzYW1wbGVyMkQgZGVwdGhTYW1wbGVyLGhpZ2hwIHNhbXBsZXIyRFNoYWRvdyBzaGFkb3dTYW1wbGVyLGZsb2F0IHNoYWRvd01hcFNpemVJbnZlcnNlLGZsb2F0IGxpZ2h0U2l6ZVVWLGZsb2F0IGRhcmtuZXNzLGZsb2F0IGZydXN0dW1FZGdlRmFsbG9mZixpbnQgc2VhcmNoVGFwQ291bnQsaW50IHBjZlRhcENvdW50LHZlYzNbNjRdIHBvaXNzb25TYW1wbGVycylcbntpZiAoZGVwdGhNZXRyaWM+MS4wIHx8IGRlcHRoTWV0cmljPDAuMCkge3JldHVybiAxLjA7fVxuZWxzZVxue3ZlYzMgY2xpcFNwYWNlPXZQb3NpdGlvbkZyb21MaWdodC54eXovdlBvc2l0aW9uRnJvbUxpZ2h0Lnc7dmVjMyB1dkRlcHRoPXZlYzMoMC41KmNsaXBTcGFjZS54eXordmVjMygwLjUpKTt1dkRlcHRoLno9WklOQ0xJUDtmbG9hdCBibG9ja2VyRGVwdGg9MC4wO2Zsb2F0IHN1bUJsb2NrZXJEZXB0aD0wLjA7ZmxvYXQgbnVtQmxvY2tlcj0wLjA7Zm9yIChpbnQgaT0wOyBpPHNlYXJjaFRhcENvdW50OyBpICsrKSB7YmxvY2tlckRlcHRoPVRFWFRVUkVGVU5DKGRlcHRoU2FtcGxlcix1dkRlcHRoLnh5KyhsaWdodFNpemVVVipzaGFkb3dNYXBTaXplSW52ZXJzZSpQb2lzc29uU2FtcGxlcnMzMltpXS54eSksMC4pLnI7aWYgKGJsb2NrZXJEZXB0aDxkZXB0aE1ldHJpYykge3N1bUJsb2NrZXJEZXB0aCs9YmxvY2tlckRlcHRoO251bUJsb2NrZXIrKzt9fVxuaWYgKG51bUJsb2NrZXI8MS4wKSB7cmV0dXJuIDEuMDt9XG5lbHNlXG57ZmxvYXQgYXZnQmxvY2tlckRlcHRoPXN1bUJsb2NrZXJEZXB0aC9udW1CbG9ja2VyO2Zsb2F0IEFBT2Zmc2V0PXNoYWRvd01hcFNpemVJbnZlcnNlKjEwLjtmbG9hdCBwZW51bWJyYVJhdGlvPSgoZGVwdGhNZXRyaWMtYXZnQmxvY2tlckRlcHRoKStBQU9mZnNldCk7ZmxvYXQgZmlsdGVyUmFkaXVzPXBlbnVtYnJhUmF0aW8qbGlnaHRTaXplVVYqc2hhZG93TWFwU2l6ZUludmVyc2U7ZmxvYXQgcmFuZG9tPWdldFJhbmQodlBvc2l0aW9uRnJvbUxpZ2h0Lnh5KTtmbG9hdCByb3RhdGlvbkFuZ2xlPXJhbmRvbSozLjE0MTU5MjY7dmVjMiByb3RhdGlvblZlY3Rvcj12ZWMyKGNvcyhyb3RhdGlvbkFuZ2xlKSxzaW4ocm90YXRpb25BbmdsZSkpO2Zsb2F0IHNoYWRvdz0wLjtmb3IgKGludCBpPTA7IGk8cGNmVGFwQ291bnQ7IGkrKykge3ZlYzMgb2Zmc2V0PXBvaXNzb25TYW1wbGVyc1tpXTtvZmZzZXQ9dmVjMyhvZmZzZXQueCpyb3RhdGlvblZlY3Rvci54LW9mZnNldC55KnJvdGF0aW9uVmVjdG9yLnksb2Zmc2V0Lnkqcm90YXRpb25WZWN0b3IueCtvZmZzZXQueCpyb3RhdGlvblZlY3Rvci55LDAuKTtzaGFkb3crPVRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdXZEZXB0aCtvZmZzZXQqZmlsdGVyUmFkaXVzLDAuKTt9XG5zaGFkb3cvPWZsb2F0KHBjZlRhcENvdW50KTtzaGFkb3c9bWl4KHNoYWRvdywxLixkZXB0aE1ldHJpYy1hdmdCbG9ja2VyRGVwdGgpO3NoYWRvdz1taXgoZGFya25lc3MsMS4sc2hhZG93KTtyZXR1cm4gY29tcHV0ZUZhbGxPZmYoc2hhZG93LGNsaXBTcGFjZS54eSxmcnVzdHVtRWRnZUZhbGxvZmYpO319fVxuI2RlZmluZSBpbmxpbmVcbmZsb2F0IGNvbXB1dGVTaGFkb3dXaXRoUENTUzE2KHZlYzQgdlBvc2l0aW9uRnJvbUxpZ2h0LGZsb2F0IGRlcHRoTWV0cmljLHNhbXBsZXIyRCBkZXB0aFNhbXBsZXIsaGlnaHAgc2FtcGxlcjJEU2hhZG93IHNoYWRvd1NhbXBsZXIsZmxvYXQgc2hhZG93TWFwU2l6ZUludmVyc2UsZmxvYXQgbGlnaHRTaXplVVYsZmxvYXQgZGFya25lc3MsZmxvYXQgZnJ1c3R1bUVkZ2VGYWxsb2ZmKVxue3JldHVybiBjb21wdXRlU2hhZG93V2l0aFBDU1ModlBvc2l0aW9uRnJvbUxpZ2h0LGRlcHRoTWV0cmljLGRlcHRoU2FtcGxlcixzaGFkb3dTYW1wbGVyLHNoYWRvd01hcFNpemVJbnZlcnNlLGxpZ2h0U2l6ZVVWLGRhcmtuZXNzLGZydXN0dW1FZGdlRmFsbG9mZiwxNiwxNixQb2lzc29uU2FtcGxlcnMzMik7fVxuI2RlZmluZSBpbmxpbmVcbmZsb2F0IGNvbXB1dGVTaGFkb3dXaXRoUENTUzMyKHZlYzQgdlBvc2l0aW9uRnJvbUxpZ2h0LGZsb2F0IGRlcHRoTWV0cmljLHNhbXBsZXIyRCBkZXB0aFNhbXBsZXIsaGlnaHAgc2FtcGxlcjJEU2hhZG93IHNoYWRvd1NhbXBsZXIsZmxvYXQgc2hhZG93TWFwU2l6ZUludmVyc2UsZmxvYXQgbGlnaHRTaXplVVYsZmxvYXQgZGFya25lc3MsZmxvYXQgZnJ1c3R1bUVkZ2VGYWxsb2ZmKVxue3JldHVybiBjb21wdXRlU2hhZG93V2l0aFBDU1ModlBvc2l0aW9uRnJvbUxpZ2h0LGRlcHRoTWV0cmljLGRlcHRoU2FtcGxlcixzaGFkb3dTYW1wbGVyLHNoYWRvd01hcFNpemVJbnZlcnNlLGxpZ2h0U2l6ZVVWLGRhcmtuZXNzLGZydXN0dW1FZGdlRmFsbG9mZiwxNiwzMixQb2lzc29uU2FtcGxlcnMzMik7fVxuI2RlZmluZSBpbmxpbmVcbmZsb2F0IGNvbXB1dGVTaGFkb3dXaXRoUENTUzY0KHZlYzQgdlBvc2l0aW9uRnJvbUxpZ2h0LGZsb2F0IGRlcHRoTWV0cmljLHNhbXBsZXIyRCBkZXB0aFNhbXBsZXIsaGlnaHAgc2FtcGxlcjJEU2hhZG93IHNoYWRvd1NhbXBsZXIsZmxvYXQgc2hhZG93TWFwU2l6ZUludmVyc2UsZmxvYXQgbGlnaHRTaXplVVYsZmxvYXQgZGFya25lc3MsZmxvYXQgZnJ1c3R1bUVkZ2VGYWxsb2ZmKVxue3JldHVybiBjb21wdXRlU2hhZG93V2l0aFBDU1ModlBvc2l0aW9uRnJvbUxpZ2h0LGRlcHRoTWV0cmljLGRlcHRoU2FtcGxlcixzaGFkb3dTYW1wbGVyLHNoYWRvd01hcFNpemVJbnZlcnNlLGxpZ2h0U2l6ZVVWLGRhcmtuZXNzLGZydXN0dW1FZGdlRmFsbG9mZiwzMiw2NCxQb2lzc29uU2FtcGxlcnM2NCk7fVxuI2RlZmluZSBpbmxpbmVcbmZsb2F0IGNvbXB1dGVTaGFkb3dXaXRoQ1NNUENTUzE2KGZsb2F0IGxheWVyLHZlYzQgdlBvc2l0aW9uRnJvbUxpZ2h0LGZsb2F0IGRlcHRoTWV0cmljLGhpZ2hwIHNhbXBsZXIyREFycmF5IGRlcHRoU2FtcGxlcixoaWdocCBzYW1wbGVyMkRBcnJheVNoYWRvdyBzaGFkb3dTYW1wbGVyLGZsb2F0IHNoYWRvd01hcFNpemVJbnZlcnNlLGZsb2F0IGxpZ2h0U2l6ZVVWLGZsb2F0IGRhcmtuZXNzLGZsb2F0IGZydXN0dW1FZGdlRmFsbG9mZix2ZWMyIGxpZ2h0U2l6ZVVWQ29ycmVjdGlvbixmbG9hdCBkZXB0aENvcnJlY3Rpb24sZmxvYXQgcGVudW1icmFEYXJrbmVzcylcbntyZXR1cm4gY29tcHV0ZVNoYWRvd1dpdGhDU01QQ1NTKGxheWVyLHZQb3NpdGlvbkZyb21MaWdodCxkZXB0aE1ldHJpYyxkZXB0aFNhbXBsZXIsc2hhZG93U2FtcGxlcixzaGFkb3dNYXBTaXplSW52ZXJzZSxsaWdodFNpemVVVixkYXJrbmVzcyxmcnVzdHVtRWRnZUZhbGxvZmYsMTYsMTYsUG9pc3NvblNhbXBsZXJzMzIsbGlnaHRTaXplVVZDb3JyZWN0aW9uLGRlcHRoQ29ycmVjdGlvbixwZW51bWJyYURhcmtuZXNzKTt9XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhDU01QQ1NTMzIoZmxvYXQgbGF5ZXIsdmVjNCB2UG9zaXRpb25Gcm9tTGlnaHQsZmxvYXQgZGVwdGhNZXRyaWMsaGlnaHAgc2FtcGxlcjJEQXJyYXkgZGVwdGhTYW1wbGVyLGhpZ2hwIHNhbXBsZXIyREFycmF5U2hhZG93IHNoYWRvd1NhbXBsZXIsZmxvYXQgc2hhZG93TWFwU2l6ZUludmVyc2UsZmxvYXQgbGlnaHRTaXplVVYsZmxvYXQgZGFya25lc3MsZmxvYXQgZnJ1c3R1bUVkZ2VGYWxsb2ZmLHZlYzIgbGlnaHRTaXplVVZDb3JyZWN0aW9uLGZsb2F0IGRlcHRoQ29ycmVjdGlvbixmbG9hdCBwZW51bWJyYURhcmtuZXNzKVxue3JldHVybiBjb21wdXRlU2hhZG93V2l0aENTTVBDU1MobGF5ZXIsdlBvc2l0aW9uRnJvbUxpZ2h0LGRlcHRoTWV0cmljLGRlcHRoU2FtcGxlcixzaGFkb3dTYW1wbGVyLHNoYWRvd01hcFNpemVJbnZlcnNlLGxpZ2h0U2l6ZVVWLGRhcmtuZXNzLGZydXN0dW1FZGdlRmFsbG9mZiwxNiwzMixQb2lzc29uU2FtcGxlcnMzMixsaWdodFNpemVVVkNvcnJlY3Rpb24sZGVwdGhDb3JyZWN0aW9uLHBlbnVtYnJhRGFya25lc3MpO31cbiNkZWZpbmUgaW5saW5lXG5mbG9hdCBjb21wdXRlU2hhZG93V2l0aENTTVBDU1M2NChmbG9hdCBsYXllcix2ZWM0IHZQb3NpdGlvbkZyb21MaWdodCxmbG9hdCBkZXB0aE1ldHJpYyxoaWdocCBzYW1wbGVyMkRBcnJheSBkZXB0aFNhbXBsZXIsaGlnaHAgc2FtcGxlcjJEQXJyYXlTaGFkb3cgc2hhZG93U2FtcGxlcixmbG9hdCBzaGFkb3dNYXBTaXplSW52ZXJzZSxmbG9hdCBsaWdodFNpemVVVixmbG9hdCBkYXJrbmVzcyxmbG9hdCBmcnVzdHVtRWRnZUZhbGxvZmYsdmVjMiBsaWdodFNpemVVVkNvcnJlY3Rpb24sZmxvYXQgZGVwdGhDb3JyZWN0aW9uLGZsb2F0IHBlbnVtYnJhRGFya25lc3MpXG57cmV0dXJuIGNvbXB1dGVTaGFkb3dXaXRoQ1NNUENTUyhsYXllcix2UG9zaXRpb25Gcm9tTGlnaHQsZGVwdGhNZXRyaWMsZGVwdGhTYW1wbGVyLHNoYWRvd1NhbXBsZXIsc2hhZG93TWFwU2l6ZUludmVyc2UsbGlnaHRTaXplVVYsZGFya25lc3MsZnJ1c3R1bUVkZ2VGYWxsb2ZmLDMyLDY0LFBvaXNzb25TYW1wbGVyczY0LGxpZ2h0U2l6ZVVWQ29ycmVjdGlvbixkZXB0aENvcnJlY3Rpb24scGVudW1icmFEYXJrbmVzcyk7fVxuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgc2hhZG93c0ZyYWdtZW50RnVuY3Rpb25zID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==