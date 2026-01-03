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
#if defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
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
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=ZINCLIP;if (depthMetric<0.0 || depthMetric>1.0 || uvDepth.x<0. || uvDepth.x>1.0 || uvDepth.y<0. || uvDepth.y>1.0) {return 1.0;} else {float shadow=TEXTUREFUNC(shadowSampler,uvDepth,0.);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithPCF3(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=ZINCLIP;if (depthMetric<0.0 || depthMetric>1.0 || uvDepth.x<0. || uvDepth.x>1.0 || uvDepth.y<0. || uvDepth.y>1.0) {return 1.0;} else {vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;vec2 uvw1=1.+2.*st;vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;float shadow=0.;shadow+=uvw0.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z),0.);shadow+=uvw1.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z),0.);shadow+=uvw0.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z),0.);shadow+=uvw1.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z),0.);shadow=shadow/16.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithPCF5(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=ZINCLIP;if (depthMetric<0.0 || depthMetric>1.0 || uvDepth.x<0. || uvDepth.x>1.0 || uvDepth.y<0. || uvDepth.y>1.0) {return 1.0;} else {vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
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
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=ZINCLIP;if (depthMetric<0.0 || depthMetric>1.0 || uvDepth.x<0. || uvDepth.x>1.0 || uvDepth.y<0. || uvDepth.y>1.0) {return 1.0;} else {float blockerDepth=0.0;float sumBlockerDepth=0.0;float numBlocker=0.0;for (int i=0; i<searchTapCount; i ++) {blockerDepth=TEXTUREFUNC(depthSampler,uvDepth.xy+(lightSizeUV*shadowMapSizeInverse*PoissonSamplers32[i].xy),0.).r;if (blockerDepth<depthMetric) {sumBlockerDepth+=blockerDepth;numBlocker++;}}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfU2hhZGVyc0luY2x1ZGVfbGlnaHRGcmFnbWVudERlY2xhcmF0aW9uX2pzLWNvcmVfZGlzdF9TaGFkZXJzX1NoYWRlcnNJbmNsdWRlLTcwOTdlYy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9saWdodEZyYWdtZW50RGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2xpZ2h0VWJvRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2x0Y0hlbHBlckZ1bmN0aW9ucy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvc2hhZG93c0ZyYWdtZW50RnVuY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJsaWdodEZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTElHSFR7WH1cbnVuaWZvcm0gdmVjNCB2TGlnaHREYXRhe1h9O3VuaWZvcm0gdmVjNCB2TGlnaHREaWZmdXNle1h9O1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxudW5pZm9ybSB2ZWM0IHZMaWdodFNwZWN1bGFye1h9O1xuI2Vsc2VcbnZlYzQgdkxpZ2h0U3BlY3VsYXJ7WH09dmVjNCgwLik7XG4jZW5kaWZcbiNpZmRlZiBTSEFET1d7WH1cbiNpZmRlZiBTSEFET1dDU017WH1cbnVuaWZvcm0gbWF0NCBsaWdodE1hdHJpeHtYfVtTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH1dO3VuaWZvcm0gZmxvYXQgdmlld0ZydXN0dW1ae1h9W1NIQURPV0NTTU5VTV9DQVNDQURFU3tYfV07dW5pZm9ybSBmbG9hdCBmcnVzdHVtTGVuZ3Roc3tYfVtTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH1dO3VuaWZvcm0gZmxvYXQgY2FzY2FkZUJsZW5kRmFjdG9ye1h9O3ZhcnlpbmcgdmVjNCB2UG9zaXRpb25Gcm9tTGlnaHR7WH1bU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9XTt2YXJ5aW5nIGZsb2F0IHZEZXB0aE1ldHJpY3tYfVtTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH1dO3ZhcnlpbmcgdmVjNCB2UG9zaXRpb25Gcm9tQ2FtZXJhe1h9O1xuI2lmIGRlZmluZWQoU0hBRE9XUENTU3tYfSlcbnVuaWZvcm0gaGlnaHAgc2FtcGxlcjJEQXJyYXlTaGFkb3cgc2hhZG93VGV4dHVyZXtYfTt1bmlmb3JtIGhpZ2hwIHNhbXBsZXIyREFycmF5IGRlcHRoVGV4dHVyZXtYfTt1bmlmb3JtIHZlYzIgbGlnaHRTaXplVVZDb3JyZWN0aW9ue1h9W1NIQURPV0NTTU5VTV9DQVNDQURFU3tYfV07dW5pZm9ybSBmbG9hdCBkZXB0aENvcnJlY3Rpb257WH1bU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9XTt1bmlmb3JtIGZsb2F0IHBlbnVtYnJhRGFya25lc3N7WH07XG4jZWxpZiBkZWZpbmVkKFNIQURPV1BDRntYfSlcbnVuaWZvcm0gaGlnaHAgc2FtcGxlcjJEQXJyYXlTaGFkb3cgc2hhZG93VGV4dHVyZXtYfTtcbiNlbHNlXG51bmlmb3JtIGhpZ2hwIHNhbXBsZXIyREFycmF5IHNoYWRvd1RleHR1cmV7WH07XG4jZW5kaWZcbiNpZmRlZiBTSEFET1dDU01ERUJVR3tYfVxuY29uc3QgdmVjMyB2Q2FzY2FkZUNvbG9yc011bHRpcGxpZXJ7WH1bOF09dmVjM1s4XVxuKFxudmVjMyAoIDEuNSwwLjAsMC4wICksXG52ZWMzICggMC4wLDEuNSwwLjAgKSxcbnZlYzMgKCAwLjAsMC4wLDUuNSApLFxudmVjMyAoIDEuNSwwLjAsNS41ICksXG52ZWMzICggMS41LDEuNSwwLjAgKSxcbnZlYzMgKCAxLjAsMS4wLDEuMCApLFxudmVjMyAoIDAuMCwxLjAsNS41ICksXG52ZWMzICggMC41LDMuNSwwLjc1IClcbik7dmVjMyBzaGFkb3dEZWJ1Z3tYfTtcbiNlbmRpZlxuI2lmZGVmIFNIQURPV0NTTVVTRVNIQURPV01BWFp7WH1cbmludCBpbmRleHtYfT0tMTtcbiNlbHNlXG5pbnQgaW5kZXh7WH09U0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9LTE7XG4jZW5kaWZcbmZsb2F0IGRpZmZ7WH09MC47XG4jZWxpZiBkZWZpbmVkKFNIQURPV0NVQkV7WH0pXG51bmlmb3JtIHNhbXBsZXJDdWJlIHNoYWRvd1RleHR1cmV7WH07XG4jZWxzZVxudmFyeWluZyB2ZWM0IHZQb3NpdGlvbkZyb21MaWdodHtYfTt2YXJ5aW5nIGZsb2F0IHZEZXB0aE1ldHJpY3tYfTtcbiNpZiBkZWZpbmVkKFNIQURPV1BDU1N7WH0pXG51bmlmb3JtIGhpZ2hwIHNhbXBsZXIyRFNoYWRvdyBzaGFkb3dUZXh0dXJle1h9O3VuaWZvcm0gaGlnaHAgc2FtcGxlcjJEIGRlcHRoVGV4dHVyZXtYfTtcbiNlbGlmIGRlZmluZWQoU0hBRE9XUENGe1h9KVxudW5pZm9ybSBoaWdocCBzYW1wbGVyMkRTaGFkb3cgc2hhZG93VGV4dHVyZXtYfTtcbiNlbHNlXG51bmlmb3JtIHNhbXBsZXIyRCBzaGFkb3dUZXh0dXJle1h9O1xuI2VuZGlmXG51bmlmb3JtIG1hdDQgbGlnaHRNYXRyaXh7WH07XG4jZW5kaWZcbnVuaWZvcm0gdmVjNCBzaGFkb3dzSW5mb3tYfTt1bmlmb3JtIHZlYzIgZGVwdGhWYWx1ZXN7WH07XG4jZW5kaWZcbiNpZmRlZiBTUE9UTElHSFR7WH1cbnVuaWZvcm0gdmVjNCB2TGlnaHREaXJlY3Rpb257WH07dW5pZm9ybSB2ZWM0IHZMaWdodEZhbGxvZmZ7WH07XG4jZWxpZiBkZWZpbmVkKFBPSU5UTElHSFR7WH0pXG51bmlmb3JtIHZlYzQgdkxpZ2h0RmFsbG9mZntYfTtcbiNlbGlmIGRlZmluZWQoSEVNSUxJR0hUe1h9KVxudW5pZm9ybSB2ZWMzIHZMaWdodEdyb3VuZHtYfTtcbiNlbmRpZlxuI2lmZGVmIEFSRUFMSUdIVHtYfVxudW5pZm9ybSB2ZWM0IHZMaWdodFdpZHRoe1h9O3VuaWZvcm0gdmVjNCB2TGlnaHRIZWlnaHR7WH07XG4jZW5kaWZcbiNpZmRlZiBJRVNMSUdIVFRFWFRVUkV7WH1cbnVuaWZvcm0gc2FtcGxlcjJEIGllc0xpZ2h0VGV4dHVyZXtYfTtcbiNlbmRpZlxuI2lmZGVmIFBST0pFQ1RFRExJR0hUVEVYVFVSRXtYfVxudW5pZm9ybSBtYXQ0IHRleHR1cmVQcm9qZWN0aW9uTWF0cml4e1h9O3VuaWZvcm0gc2FtcGxlcjJEIHByb2plY3Rpb25MaWdodFRleHR1cmV7WH07XG4jZW5kaWZcbiNpZmRlZiBDTFVTVExJR0hUe1h9XG51bmlmb3JtIHZlYzIgdlNsaWNlRGF0YXtYfTt1bmlmb3JtIHZlYzIgdlNsaWNlUmFuZ2Vze1h9W0NMVVNUTElHSFRfU0xJQ0VTXTt1bmlmb3JtIHNhbXBsZXIyRCBsaWdodERhdGFUZXh0dXJle1h9O3VuaWZvcm0gaGlnaHAgc2FtcGxlcjJEIHRpbGVNYXNrVGV4dHVyZXtYfTtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGxpZ2h0RnJhZ21lbnREZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibGlnaHRVYm9EZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBMSUdIVHtYfVxudW5pZm9ybSBMaWdodHtYfVxue3ZlYzQgdkxpZ2h0RGF0YTt2ZWM0IHZMaWdodERpZmZ1c2U7dmVjNCB2TGlnaHRTcGVjdWxhcjtcbiNpZmRlZiBTUE9UTElHSFR7WH1cbnZlYzQgdkxpZ2h0RGlyZWN0aW9uO3ZlYzQgdkxpZ2h0RmFsbG9mZjtcbiNlbGlmIGRlZmluZWQoUE9JTlRMSUdIVHtYfSlcbnZlYzQgdkxpZ2h0RmFsbG9mZjtcbiNlbGlmIGRlZmluZWQoSEVNSUxJR0hUe1h9KVxudmVjMyB2TGlnaHRHcm91bmQ7XG4jZWxpZiBkZWZpbmVkKENMVVNUTElHSFR7WH0pXG52ZWMyIHZTbGljZURhdGE7dmVjMiB2U2xpY2VSYW5nZXNbQ0xVU1RMSUdIVF9TTElDRVNdO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChBUkVBTElHSFR7WH0pICYmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG52ZWM0IHZMaWdodFdpZHRoO3ZlYzQgdkxpZ2h0SGVpZ2h0O1xuI2VuZGlmXG52ZWM0IHNoYWRvd3NJbmZvO3ZlYzIgZGVwdGhWYWx1ZXM7fSBsaWdodHtYfTtcbiNpZmRlZiBJRVNMSUdIVFRFWFRVUkV7WH1cbnVuaWZvcm0gc2FtcGxlcjJEIGllc0xpZ2h0VGV4dHVyZXtYfTtcbiNlbmRpZlxuI2lmZGVmIFBST0pFQ1RFRExJR0hUVEVYVFVSRXtYfVxudW5pZm9ybSBtYXQ0IHRleHR1cmVQcm9qZWN0aW9uTWF0cml4e1h9O3VuaWZvcm0gc2FtcGxlcjJEIHByb2plY3Rpb25MaWdodFRleHR1cmV7WH07XG4jZW5kaWZcbiNpZmRlZiBDTFVTVExJR0hUe1h9XG51bmlmb3JtIHNhbXBsZXIyRCBsaWdodERhdGFUZXh0dXJle1h9O3VuaWZvcm0gaGlnaHAgc2FtcGxlcjJEIHRpbGVNYXNrVGV4dHVyZXtYfTtcbiNlbmRpZlxuI2lmZGVmIFNIQURPV3tYfVxuI2lmZGVmIFNIQURPV0NTTXtYfVxudW5pZm9ybSBtYXQ0IGxpZ2h0TWF0cml4e1h9W1NIQURPV0NTTU5VTV9DQVNDQURFU3tYfV07dW5pZm9ybSBmbG9hdCB2aWV3RnJ1c3R1bVp7WH1bU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9XTt1bmlmb3JtIGZsb2F0IGZydXN0dW1MZW5ndGhze1h9W1NIQURPV0NTTU5VTV9DQVNDQURFU3tYfV07dW5pZm9ybSBmbG9hdCBjYXNjYWRlQmxlbmRGYWN0b3J7WH07dmFyeWluZyB2ZWM0IHZQb3NpdGlvbkZyb21MaWdodHtYfVtTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH1dO3ZhcnlpbmcgZmxvYXQgdkRlcHRoTWV0cmlje1h9W1NIQURPV0NTTU5VTV9DQVNDQURFU3tYfV07dmFyeWluZyB2ZWM0IHZQb3NpdGlvbkZyb21DYW1lcmF7WH07XG4jaWYgZGVmaW5lZChTSEFET1dQQ1NTe1h9KVxudW5pZm9ybSBoaWdocCBzYW1wbGVyMkRBcnJheVNoYWRvdyBzaGFkb3dUZXh0dXJle1h9O3VuaWZvcm0gaGlnaHAgc2FtcGxlcjJEQXJyYXkgZGVwdGhUZXh0dXJle1h9O3VuaWZvcm0gdmVjMiBsaWdodFNpemVVVkNvcnJlY3Rpb257WH1bU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9XTt1bmlmb3JtIGZsb2F0IGRlcHRoQ29ycmVjdGlvbntYfVtTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH1dO3VuaWZvcm0gZmxvYXQgcGVudW1icmFEYXJrbmVzc3tYfTtcbiNlbGlmIGRlZmluZWQoU0hBRE9XUENGe1h9KVxudW5pZm9ybSBoaWdocCBzYW1wbGVyMkRBcnJheVNoYWRvdyBzaGFkb3dUZXh0dXJle1h9O1xuI2Vsc2VcbnVuaWZvcm0gaGlnaHAgc2FtcGxlcjJEQXJyYXkgc2hhZG93VGV4dHVyZXtYfTtcbiNlbmRpZlxuI2lmZGVmIFNIQURPV0NTTURFQlVHe1h9XG5jb25zdCB2ZWMzIHZDYXNjYWRlQ29sb3JzTXVsdGlwbGllcntYfVs4XT12ZWMzWzhdXG4oXG52ZWMzICggMS41LDAuMCwwLjAgKSxcbnZlYzMgKCAwLjAsMS41LDAuMCApLFxudmVjMyAoIDAuMCwwLjAsNS41ICksXG52ZWMzICggMS41LDAuMCw1LjUgKSxcbnZlYzMgKCAxLjUsMS41LDAuMCApLFxudmVjMyAoIDEuMCwxLjAsMS4wICksXG52ZWMzICggMC4wLDEuMCw1LjUgKSxcbnZlYzMgKCAwLjUsMy41LDAuNzUgKVxuKTt2ZWMzIHNoYWRvd0RlYnVne1h9O1xuI2VuZGlmXG4jaWZkZWYgU0hBRE9XQ1NNVVNFU0hBRE9XTUFYWntYfVxuaW50IGluZGV4e1h9PS0xO1xuI2Vsc2VcbmludCBpbmRleHtYfT1TSEFET1dDU01OVU1fQ0FTQ0FERVN7WH0tMTtcbiNlbmRpZlxuZmxvYXQgZGlmZntYfT0wLjtcbiNlbGlmIGRlZmluZWQoU0hBRE9XQ1VCRXtYfSlcbnVuaWZvcm0gc2FtcGxlckN1YmUgc2hhZG93VGV4dHVyZXtYfTsgXG4jZWxzZVxudmFyeWluZyB2ZWM0IHZQb3NpdGlvbkZyb21MaWdodHtYfTt2YXJ5aW5nIGZsb2F0IHZEZXB0aE1ldHJpY3tYfTtcbiNpZiBkZWZpbmVkKFNIQURPV1BDU1N7WH0pXG51bmlmb3JtIGhpZ2hwIHNhbXBsZXIyRFNoYWRvdyBzaGFkb3dUZXh0dXJle1h9O3VuaWZvcm0gaGlnaHAgc2FtcGxlcjJEIGRlcHRoVGV4dHVyZXtYfTtcbiNlbGlmIGRlZmluZWQoU0hBRE9XUENGe1h9KVxudW5pZm9ybSBoaWdocCBzYW1wbGVyMkRTaGFkb3cgc2hhZG93VGV4dHVyZXtYfTtcbiNlbHNlXG51bmlmb3JtIHNhbXBsZXIyRCBzaGFkb3dUZXh0dXJle1h9O1xuI2VuZGlmXG51bmlmb3JtIG1hdDQgbGlnaHRNYXRyaXh7WH07XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGxpZ2h0VWJvRGVjbGFyYXRpb24gPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImx0Y0hlbHBlckZ1bmN0aW9uc1wiO1xuY29uc3Qgc2hhZGVyID0gYHZlYzIgTFRDVXYoIGNvbnN0IGluIHZlYzMgTixjb25zdCBpbiB2ZWMzIFYsY29uc3QgaW4gZmxvYXQgcm91Z2huZXNzICkge2NvbnN0IGZsb2F0IExVVFNJWkU9NjQuMDtjb25zdCBmbG9hdCBMVVRTQ0FMRT0oIExVVFNJWkUtMS4wICkvTFVUU0laRTtjb25zdCBmbG9hdCBMVVRCSUFTPTAuNS9MVVRTSVpFO2Zsb2F0IGRvdE5WPXNhdHVyYXRlKCBkb3QoIE4sViApICk7dmVjMiB1dj12ZWMyKCByb3VnaG5lc3Msc3FydCggMS4wLWRvdE5WICkgKTt1dj11dipMVVRTQ0FMRStMVVRCSUFTO3JldHVybiB1djt9XG5mbG9hdCBMVENDbGlwcGVkU3BoZXJlRm9ybUZhY3RvciggY29uc3QgaW4gdmVjMyBmICkge2Zsb2F0IGw9bGVuZ3RoKCBmICk7cmV0dXJuIG1heCggKCBsKmwrZi56ICkvKCBsKzEuMCApLDAuMCApO31cbnZlYzMgTFRDRWRnZVZlY3RvckZvcm1GYWN0b3IoIGNvbnN0IGluIHZlYzMgdjEsY29uc3QgaW4gdmVjMyB2MiApIHtmbG9hdCB4PWRvdCggdjEsdjIgKTtmbG9hdCB5PWFicyggeCApO2Zsb2F0IGE9MC44NTQzOTg1KyggMC40OTY1MTU1KzAuMDE0NTIwNip5ICkqeTtmbG9hdCBiPTMuNDE3NTk0MCsoIDQuMTYxNjcyNCt5ICkqeTtmbG9hdCB2PWEvYjtmbG9hdCB0aGV0YVNpbnRoZXRhPTAuMDtpZiggeD4wLjAgKVxue3RoZXRhU2ludGhldGE9djt9XG5lbHNlXG57dGhldGFTaW50aGV0YT0wLjUqaW52ZXJzZXNxcnQoIG1heCggMS4wLXgqeCwxZS03ICkgKS12O31cbnJldHVybiBjcm9zcyggdjEsdjIgKSp0aGV0YVNpbnRoZXRhO31cbnZlYzMgTFRDRXZhbHVhdGUoIGNvbnN0IGluIHZlYzMgTixjb25zdCBpbiB2ZWMzIFYsY29uc3QgaW4gdmVjMyBQLGNvbnN0IGluIG1hdDMgbUludixjb25zdCBpbiB2ZWMzIHJlY3RDb29yZHNbIDQgXSApIHt2ZWMzIHYxPXJlY3RDb29yZHNbIDEgXS1yZWN0Q29vcmRzWyAwIF07dmVjMyB2Mj1yZWN0Q29vcmRzWyAzIF0tcmVjdENvb3Jkc1sgMCBdO3ZlYzMgbGlnaHROb3JtYWw9Y3Jvc3MoIHYxLHYyICk7aWYoIGRvdCggbGlnaHROb3JtYWwsUC1yZWN0Q29vcmRzWyAwIF0gKTwwLjAgKSByZXR1cm4gdmVjMyggMC4wICk7dmVjMyBUMSxUMjtUMT1ub3JtYWxpemUoIFYtTipkb3QoIFYsTiApICk7VDI9LSBjcm9zcyggTixUMSApOyBcbm1hdDMgbWF0PW1JbnYqdHJhbnNwb3NlTWF0MyggbWF0MyggVDEsVDIsTiApICk7dmVjMyBjb29yZHNbIDQgXTtjb29yZHNbIDAgXT1tYXQqKCByZWN0Q29vcmRzWyAwIF0tUCApO2Nvb3Jkc1sgMSBdPW1hdCooIHJlY3RDb29yZHNbIDEgXS1QICk7Y29vcmRzWyAyIF09bWF0KiggcmVjdENvb3Jkc1sgMiBdLVAgKTtjb29yZHNbIDMgXT1tYXQqKCByZWN0Q29vcmRzWyAzIF0tUCApO2Nvb3Jkc1sgMCBdPW5vcm1hbGl6ZSggY29vcmRzWyAwIF0gKTtjb29yZHNbIDEgXT1ub3JtYWxpemUoIGNvb3Jkc1sgMSBdICk7Y29vcmRzWyAyIF09bm9ybWFsaXplKCBjb29yZHNbIDIgXSApO2Nvb3Jkc1sgMyBdPW5vcm1hbGl6ZSggY29vcmRzWyAzIF0gKTt2ZWMzIHZlY3RvckZvcm1GYWN0b3I9dmVjMyggMC4wICk7dmVjdG9yRm9ybUZhY3Rvcis9TFRDRWRnZVZlY3RvckZvcm1GYWN0b3IoIGNvb3Jkc1sgMCBdLGNvb3Jkc1sgMSBdICk7dmVjdG9yRm9ybUZhY3Rvcis9TFRDRWRnZVZlY3RvckZvcm1GYWN0b3IoIGNvb3Jkc1sgMSBdLGNvb3Jkc1sgMiBdICk7dmVjdG9yRm9ybUZhY3Rvcis9TFRDRWRnZVZlY3RvckZvcm1GYWN0b3IoIGNvb3Jkc1sgMiBdLGNvb3Jkc1sgMyBdICk7dmVjdG9yRm9ybUZhY3Rvcis9TFRDRWRnZVZlY3RvckZvcm1GYWN0b3IoIGNvb3Jkc1sgMyBdLGNvb3Jkc1sgMCBdICk7ZmxvYXQgcmVzdWx0PUxUQ0NsaXBwZWRTcGhlcmVGb3JtRmFjdG9yKCB2ZWN0b3JGb3JtRmFjdG9yICk7cmV0dXJuIHZlYzMoIHJlc3VsdCApO31cbnN0cnVjdCBhcmVhTGlnaHREYXRhXG57dmVjMyBEaWZmdXNlO3ZlYzMgU3BlY3VsYXI7dmVjNCBGcmVzbmVsO307XG4jZGVmaW5lIGlubGluZVxuYXJlYUxpZ2h0RGF0YSBjb21wdXRlQXJlYUxpZ2h0U3BlY3VsYXJEaWZmdXNlRnJlc25lbChjb25zdCBpbiBzYW1wbGVyMkQgbHRjMSxjb25zdCBpbiBzYW1wbGVyMkQgbHRjMixjb25zdCBpbiB2ZWMzIHZpZXdEaXIsY29uc3QgaW4gdmVjMyBub3JtYWwsY29uc3QgaW4gdmVjMyBwb3NpdGlvbixjb25zdCBpbiB2ZWMzIGxpZ2h0UG9zLGNvbnN0IGluIHZlYzMgaGFsZldpZHRoLGNvbnN0IGluIHZlYzMgaGFsZkhlaWdodCxjb25zdCBpbiBmbG9hdCByb3VnaG5lc3MpIFxue2FyZWFMaWdodERhdGEgcmVzdWx0O3ZlYzMgcmVjdENvb3Jkc1sgNCBdO3JlY3RDb29yZHNbIDAgXT1saWdodFBvcytoYWxmV2lkdGgtaGFsZkhlaWdodDsgXG5yZWN0Q29vcmRzWyAxIF09bGlnaHRQb3MtaGFsZldpZHRoLWhhbGZIZWlnaHQ7cmVjdENvb3Jkc1sgMiBdPWxpZ2h0UG9zLWhhbGZXaWR0aCtoYWxmSGVpZ2h0O3JlY3RDb29yZHNbIDMgXT1saWdodFBvcytoYWxmV2lkdGgraGFsZkhlaWdodDtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnZlYzIgdXY9TFRDVXYoIG5vcm1hbCx2aWV3RGlyLHJvdWdobmVzcyApO3ZlYzQgdDE9dGV4dHVyZTJEKCBsdGMxLHV2ICk7dmVjNCB0Mj10ZXh0dXJlMkQoIGx0YzIsdXYgKTttYXQzIG1JbnY9bWF0MyhcbnZlYzMoIHQxLngsMCx0MS55ICksXG52ZWMzKCAwLDEsIDAgKSxcbnZlYzMoIHQxLnosMCx0MS53IClcbik7cmVzdWx0LlNwZWN1bGFyPUxUQ0V2YWx1YXRlKCBub3JtYWwsdmlld0Rpcixwb3NpdGlvbixtSW52LHJlY3RDb29yZHMgKTtyZXN1bHQuRnJlc25lbD10MjtcbiNlbmRpZlxucmVzdWx0LkRpZmZ1c2U9TFRDRXZhbHVhdGUoIG5vcm1hbCx2aWV3RGlyLHBvc2l0aW9uLG1hdDMoIDEuMCApLHJlY3RDb29yZHMgKTtyZXR1cm4gcmVzdWx0O31gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGx0Y0hlbHBlckZ1bmN0aW9ucyA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwic2hhZG93c0ZyYWdtZW50RnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIFNIQURPV1NcbiNpZiBkZWZpbmVkKFdFQkdMMikgfHwgZGVmaW5lZChXRUJHUFUpIHx8IGRlZmluZWQoTkFUSVZFKVxuI2RlZmluZSBURVhUVVJFRlVOQyhzLGMsbCkgdGV4dHVyZTJETG9kRVhUKHMsYyxsKVxuI2Vsc2VcbiNkZWZpbmUgVEVYVFVSRUZVTkMocyxjLGIpIHRleHR1cmUyRChzLGMsYilcbiNlbmRpZlxuI2lmbmRlZiBTSEFET1dGTE9BVFxuZmxvYXQgdW5wYWNrKHZlYzQgY29sb3IpXG57Y29uc3QgdmVjNCBiaXRfc2hpZnQ9dmVjNCgxLjAvKDI1NS4wKjI1NS4wKjI1NS4wKSwxLjAvKDI1NS4wKjI1NS4wKSwxLjAvMjU1LjAsMS4wKTtyZXR1cm4gZG90KGNvbG9yLGJpdF9zaGlmdCk7fVxuI2VuZGlmXG5mbG9hdCBjb21wdXRlRmFsbE9mZihmbG9hdCB2YWx1ZSx2ZWMyIGNsaXBTcGFjZSxmbG9hdCBmcnVzdHVtRWRnZUZhbGxvZmYpXG57ZmxvYXQgbWFzaz1zbW9vdGhzdGVwKDEuMC1mcnVzdHVtRWRnZUZhbGxvZmYsMS4wMDAwMDAxMixjbGFtcChkb3QoY2xpcFNwYWNlLGNsaXBTcGFjZSksMC4sMS4pKTtyZXR1cm4gbWl4KHZhbHVlLDEuMCxtYXNrKTt9XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd0N1YmUodmVjMyB3b3JsZFBvcyx2ZWMzIGxpZ2h0UG9zaXRpb24sc2FtcGxlckN1YmUgc2hhZG93U2FtcGxlcixmbG9hdCBkYXJrbmVzcyx2ZWMyIGRlcHRoVmFsdWVzKVxue3ZlYzMgZGlyZWN0aW9uVG9MaWdodD13b3JsZFBvcy1saWdodFBvc2l0aW9uO2Zsb2F0IGRlcHRoPWxlbmd0aChkaXJlY3Rpb25Ub0xpZ2h0KTtkZXB0aD0oZGVwdGgrZGVwdGhWYWx1ZXMueCkvKGRlcHRoVmFsdWVzLnkpO2RlcHRoPWNsYW1wKGRlcHRoLDAuLDEuMCk7ZGlyZWN0aW9uVG9MaWdodD1ub3JtYWxpemUoZGlyZWN0aW9uVG9MaWdodCk7ZGlyZWN0aW9uVG9MaWdodC55PS1kaXJlY3Rpb25Ub0xpZ2h0Lnk7XG4jaWZuZGVmIFNIQURPV0ZMT0FUXG5mbG9hdCBzaGFkb3c9dW5wYWNrKHRleHR1cmVDdWJlKHNoYWRvd1NhbXBsZXIsZGlyZWN0aW9uVG9MaWdodCkpO1xuI2Vsc2VcbmZsb2F0IHNoYWRvdz10ZXh0dXJlQ3ViZShzaGFkb3dTYW1wbGVyLGRpcmVjdGlvblRvTGlnaHQpLng7XG4jZW5kaWZcbnJldHVybiBkZXB0aD5zaGFkb3cgPyBkYXJrbmVzcyA6IDEuMDt9XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhQb2lzc29uU2FtcGxpbmdDdWJlKHZlYzMgd29ybGRQb3MsdmVjMyBsaWdodFBvc2l0aW9uLHNhbXBsZXJDdWJlIHNoYWRvd1NhbXBsZXIsZmxvYXQgbWFwU2l6ZSxmbG9hdCBkYXJrbmVzcyx2ZWMyIGRlcHRoVmFsdWVzKVxue3ZlYzMgZGlyZWN0aW9uVG9MaWdodD13b3JsZFBvcy1saWdodFBvc2l0aW9uO2Zsb2F0IGRlcHRoPWxlbmd0aChkaXJlY3Rpb25Ub0xpZ2h0KTtkZXB0aD0oZGVwdGgrZGVwdGhWYWx1ZXMueCkvKGRlcHRoVmFsdWVzLnkpO2RlcHRoPWNsYW1wKGRlcHRoLDAuLDEuMCk7ZGlyZWN0aW9uVG9MaWdodD1ub3JtYWxpemUoZGlyZWN0aW9uVG9MaWdodCk7ZGlyZWN0aW9uVG9MaWdodC55PS1kaXJlY3Rpb25Ub0xpZ2h0Lnk7ZmxvYXQgdmlzaWJpbGl0eT0xLjt2ZWMzIHBvaXNzb25EaXNrWzRdO3BvaXNzb25EaXNrWzBdPXZlYzMoLTEuMCwxLjAsLTEuMCk7cG9pc3NvbkRpc2tbMV09dmVjMygxLjAsLTEuMCwtMS4wKTtwb2lzc29uRGlza1syXT12ZWMzKC0xLjAsLTEuMCwtMS4wKTtwb2lzc29uRGlza1szXT12ZWMzKDEuMCwtMS4wLDEuMCk7XG4jaWZuZGVmIFNIQURPV0ZMT0FUXG5pZiAodW5wYWNrKHRleHR1cmVDdWJlKHNoYWRvd1NhbXBsZXIsZGlyZWN0aW9uVG9MaWdodCtwb2lzc29uRGlza1swXSptYXBTaXplKSk8ZGVwdGgpIHZpc2liaWxpdHktPTAuMjU7aWYgKHVucGFjayh0ZXh0dXJlQ3ViZShzaGFkb3dTYW1wbGVyLGRpcmVjdGlvblRvTGlnaHQrcG9pc3NvbkRpc2tbMV0qbWFwU2l6ZSkpPGRlcHRoKSB2aXNpYmlsaXR5LT0wLjI1O2lmICh1bnBhY2sodGV4dHVyZUN1YmUoc2hhZG93U2FtcGxlcixkaXJlY3Rpb25Ub0xpZ2h0K3BvaXNzb25EaXNrWzJdKm1hcFNpemUpKTxkZXB0aCkgdmlzaWJpbGl0eS09MC4yNTtpZiAodW5wYWNrKHRleHR1cmVDdWJlKHNoYWRvd1NhbXBsZXIsZGlyZWN0aW9uVG9MaWdodCtwb2lzc29uRGlza1szXSptYXBTaXplKSk8ZGVwdGgpIHZpc2liaWxpdHktPTAuMjU7XG4jZWxzZVxuaWYgKHRleHR1cmVDdWJlKHNoYWRvd1NhbXBsZXIsZGlyZWN0aW9uVG9MaWdodCtwb2lzc29uRGlza1swXSptYXBTaXplKS54PGRlcHRoKSB2aXNpYmlsaXR5LT0wLjI1O2lmICh0ZXh0dXJlQ3ViZShzaGFkb3dTYW1wbGVyLGRpcmVjdGlvblRvTGlnaHQrcG9pc3NvbkRpc2tbMV0qbWFwU2l6ZSkueDxkZXB0aCkgdmlzaWJpbGl0eS09MC4yNTtpZiAodGV4dHVyZUN1YmUoc2hhZG93U2FtcGxlcixkaXJlY3Rpb25Ub0xpZ2h0K3BvaXNzb25EaXNrWzJdKm1hcFNpemUpLng8ZGVwdGgpIHZpc2liaWxpdHktPTAuMjU7aWYgKHRleHR1cmVDdWJlKHNoYWRvd1NhbXBsZXIsZGlyZWN0aW9uVG9MaWdodCtwb2lzc29uRGlza1szXSptYXBTaXplKS54PGRlcHRoKSB2aXNpYmlsaXR5LT0wLjI1O1xuI2VuZGlmXG5yZXR1cm4gbWluKDEuMCx2aXNpYmlsaXR5K2RhcmtuZXNzKTt9XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhFU01DdWJlKHZlYzMgd29ybGRQb3MsdmVjMyBsaWdodFBvc2l0aW9uLHNhbXBsZXJDdWJlIHNoYWRvd1NhbXBsZXIsZmxvYXQgZGFya25lc3MsZmxvYXQgZGVwdGhTY2FsZSx2ZWMyIGRlcHRoVmFsdWVzKVxue3ZlYzMgZGlyZWN0aW9uVG9MaWdodD13b3JsZFBvcy1saWdodFBvc2l0aW9uO2Zsb2F0IGRlcHRoPWxlbmd0aChkaXJlY3Rpb25Ub0xpZ2h0KTtkZXB0aD0oZGVwdGgrZGVwdGhWYWx1ZXMueCkvKGRlcHRoVmFsdWVzLnkpO2Zsb2F0IHNoYWRvd1BpeGVsRGVwdGg9Y2xhbXAoZGVwdGgsMC4sMS4wKTtkaXJlY3Rpb25Ub0xpZ2h0PW5vcm1hbGl6ZShkaXJlY3Rpb25Ub0xpZ2h0KTtkaXJlY3Rpb25Ub0xpZ2h0Lnk9LWRpcmVjdGlvblRvTGlnaHQueTtcbiNpZm5kZWYgU0hBRE9XRkxPQVRcbmZsb2F0IHNoYWRvd01hcFNhbXBsZT11bnBhY2sodGV4dHVyZUN1YmUoc2hhZG93U2FtcGxlcixkaXJlY3Rpb25Ub0xpZ2h0KSk7XG4jZWxzZVxuZmxvYXQgc2hhZG93TWFwU2FtcGxlPXRleHR1cmVDdWJlKHNoYWRvd1NhbXBsZXIsZGlyZWN0aW9uVG9MaWdodCkueDtcbiNlbmRpZlxuZmxvYXQgZXNtPTEuMC1jbGFtcChleHAobWluKDg3LixkZXB0aFNjYWxlKnNoYWRvd1BpeGVsRGVwdGgpKSpzaGFkb3dNYXBTYW1wbGUsMC4sMS4tZGFya25lc3MpO3JldHVybiBlc207fVxuI2RlZmluZSBpbmxpbmVcbmZsb2F0IGNvbXB1dGVTaGFkb3dXaXRoQ2xvc2VFU01DdWJlKHZlYzMgd29ybGRQb3MsdmVjMyBsaWdodFBvc2l0aW9uLHNhbXBsZXJDdWJlIHNoYWRvd1NhbXBsZXIsZmxvYXQgZGFya25lc3MsZmxvYXQgZGVwdGhTY2FsZSx2ZWMyIGRlcHRoVmFsdWVzKVxue3ZlYzMgZGlyZWN0aW9uVG9MaWdodD13b3JsZFBvcy1saWdodFBvc2l0aW9uO2Zsb2F0IGRlcHRoPWxlbmd0aChkaXJlY3Rpb25Ub0xpZ2h0KTtkZXB0aD0oZGVwdGgrZGVwdGhWYWx1ZXMueCkvKGRlcHRoVmFsdWVzLnkpO2Zsb2F0IHNoYWRvd1BpeGVsRGVwdGg9Y2xhbXAoZGVwdGgsMC4sMS4wKTtkaXJlY3Rpb25Ub0xpZ2h0PW5vcm1hbGl6ZShkaXJlY3Rpb25Ub0xpZ2h0KTtkaXJlY3Rpb25Ub0xpZ2h0Lnk9LWRpcmVjdGlvblRvTGlnaHQueTtcbiNpZm5kZWYgU0hBRE9XRkxPQVRcbmZsb2F0IHNoYWRvd01hcFNhbXBsZT11bnBhY2sodGV4dHVyZUN1YmUoc2hhZG93U2FtcGxlcixkaXJlY3Rpb25Ub0xpZ2h0KSk7XG4jZWxzZVxuZmxvYXQgc2hhZG93TWFwU2FtcGxlPXRleHR1cmVDdWJlKHNoYWRvd1NhbXBsZXIsZGlyZWN0aW9uVG9MaWdodCkueDtcbiNlbmRpZlxuZmxvYXQgZXNtPWNsYW1wKGV4cChtaW4oODcuLC1kZXB0aFNjYWxlKihzaGFkb3dQaXhlbERlcHRoLXNoYWRvd01hcFNhbXBsZSkpKSxkYXJrbmVzcywxLik7cmV0dXJuIGVzbTt9XG4jaWYgZGVmaW5lZChXRUJHTDIpIHx8IGRlZmluZWQoV0VCR1BVKSB8fCBkZWZpbmVkKE5BVElWRSlcbiNkZWZpbmUgaW5saW5lXG5mbG9hdCBjb21wdXRlU2hhZG93Q1NNKGZsb2F0IGxheWVyLHZlYzQgdlBvc2l0aW9uRnJvbUxpZ2h0LGZsb2F0IGRlcHRoTWV0cmljLGhpZ2hwIHNhbXBsZXIyREFycmF5IHNoYWRvd1NhbXBsZXIsZmxvYXQgZGFya25lc3MsZmxvYXQgZnJ1c3R1bUVkZ2VGYWxsb2ZmKVxue3ZlYzMgY2xpcFNwYWNlPXZQb3NpdGlvbkZyb21MaWdodC54eXovdlBvc2l0aW9uRnJvbUxpZ2h0Lnc7dmVjMiB1dj0wLjUqY2xpcFNwYWNlLnh5K3ZlYzIoMC41KTt2ZWMzIHV2TGF5ZXI9dmVjMyh1di54LHV2LnksbGF5ZXIpO2Zsb2F0IHNoYWRvd1BpeGVsRGVwdGg9Y2xhbXAoZGVwdGhNZXRyaWMsMC4sMS4wKTtcbiNpZm5kZWYgU0hBRE9XRkxPQVRcbmZsb2F0IHNoYWRvdz11bnBhY2sodGV4dHVyZTJEKHNoYWRvd1NhbXBsZXIsdXZMYXllcikpO1xuI2Vsc2VcbmZsb2F0IHNoYWRvdz10ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix1dkxheWVyKS54O1xuI2VuZGlmXG5yZXR1cm4gc2hhZG93UGl4ZWxEZXB0aD5zaGFkb3cgPyBjb21wdXRlRmFsbE9mZihkYXJrbmVzcyxjbGlwU3BhY2UueHksZnJ1c3R1bUVkZ2VGYWxsb2ZmKSA6IDEuO31cbiNlbmRpZlxuI2RlZmluZSBpbmxpbmVcbmZsb2F0IGNvbXB1dGVTaGFkb3codmVjNCB2UG9zaXRpb25Gcm9tTGlnaHQsZmxvYXQgZGVwdGhNZXRyaWMsc2FtcGxlcjJEIHNoYWRvd1NhbXBsZXIsZmxvYXQgZGFya25lc3MsZmxvYXQgZnJ1c3R1bUVkZ2VGYWxsb2ZmKVxue3ZlYzMgY2xpcFNwYWNlPXZQb3NpdGlvbkZyb21MaWdodC54eXovdlBvc2l0aW9uRnJvbUxpZ2h0Lnc7dmVjMiB1dj0wLjUqY2xpcFNwYWNlLnh5K3ZlYzIoMC41KTtpZiAodXYueDwwLiB8fCB1di54PjEuMCB8fCB1di55PDAuIHx8IHV2Lnk+MS4wKVxue3JldHVybiAxLjA7fVxuZWxzZVxue2Zsb2F0IHNoYWRvd1BpeGVsRGVwdGg9Y2xhbXAoZGVwdGhNZXRyaWMsMC4sMS4wKTtcbiNpZm5kZWYgU0hBRE9XRkxPQVRcbmZsb2F0IHNoYWRvdz11bnBhY2soVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix1diwwLikpO1xuI2Vsc2VcbmZsb2F0IHNoYWRvdz1URVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHV2LDAuKS54O1xuI2VuZGlmXG5yZXR1cm4gc2hhZG93UGl4ZWxEZXB0aD5zaGFkb3cgPyBjb21wdXRlRmFsbE9mZihkYXJrbmVzcyxjbGlwU3BhY2UueHksZnJ1c3R1bUVkZ2VGYWxsb2ZmKSA6IDEuO319XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhQb2lzc29uU2FtcGxpbmcodmVjNCB2UG9zaXRpb25Gcm9tTGlnaHQsZmxvYXQgZGVwdGhNZXRyaWMsc2FtcGxlcjJEIHNoYWRvd1NhbXBsZXIsZmxvYXQgbWFwU2l6ZSxmbG9hdCBkYXJrbmVzcyxmbG9hdCBmcnVzdHVtRWRnZUZhbGxvZmYpXG57dmVjMyBjbGlwU3BhY2U9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2ZWMyIHV2PTAuNSpjbGlwU3BhY2UueHkrdmVjMigwLjUpO2lmICh1di54PDAuIHx8IHV2Lng+MS4wIHx8IHV2Lnk8MC4gfHwgdXYueT4xLjApXG57cmV0dXJuIDEuMDt9XG5lbHNlXG57ZmxvYXQgc2hhZG93UGl4ZWxEZXB0aD1jbGFtcChkZXB0aE1ldHJpYywwLiwxLjApO2Zsb2F0IHZpc2liaWxpdHk9MS47dmVjMiBwb2lzc29uRGlza1s0XTtwb2lzc29uRGlza1swXT12ZWMyKC0wLjk0MjAxNjI0LC0wLjM5OTA2MjE2KTtwb2lzc29uRGlza1sxXT12ZWMyKDAuOTQ1NTg2MDksLTAuNzY4OTA3MjUpO3BvaXNzb25EaXNrWzJdPXZlYzIoLTAuMDk0MTg0MTAxLC0wLjkyOTM4ODcwKTtwb2lzc29uRGlza1szXT12ZWMyKDAuMzQ0OTU5MzgsMC4yOTM4Nzc2MCk7XG4jaWZuZGVmIFNIQURPV0ZMT0FUXG5pZiAodW5wYWNrKFRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdXYrcG9pc3NvbkRpc2tbMF0qbWFwU2l6ZSwwLikpPHNoYWRvd1BpeGVsRGVwdGgpIHZpc2liaWxpdHktPTAuMjU7aWYgKHVucGFjayhURVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHV2K3BvaXNzb25EaXNrWzFdKm1hcFNpemUsMC4pKTxzaGFkb3dQaXhlbERlcHRoKSB2aXNpYmlsaXR5LT0wLjI1O2lmICh1bnBhY2soVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix1ditwb2lzc29uRGlza1syXSptYXBTaXplLDAuKSk8c2hhZG93UGl4ZWxEZXB0aCkgdmlzaWJpbGl0eS09MC4yNTtpZiAodW5wYWNrKFRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdXYrcG9pc3NvbkRpc2tbM10qbWFwU2l6ZSwwLikpPHNoYWRvd1BpeGVsRGVwdGgpIHZpc2liaWxpdHktPTAuMjU7XG4jZWxzZVxuaWYgKFRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdXYrcG9pc3NvbkRpc2tbMF0qbWFwU2l6ZSwwLikueDxzaGFkb3dQaXhlbERlcHRoKSB2aXNpYmlsaXR5LT0wLjI1O2lmIChURVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHV2K3BvaXNzb25EaXNrWzFdKm1hcFNpemUsMC4pLng8c2hhZG93UGl4ZWxEZXB0aCkgdmlzaWJpbGl0eS09MC4yNTtpZiAoVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix1ditwb2lzc29uRGlza1syXSptYXBTaXplLDAuKS54PHNoYWRvd1BpeGVsRGVwdGgpIHZpc2liaWxpdHktPTAuMjU7aWYgKFRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdXYrcG9pc3NvbkRpc2tbM10qbWFwU2l6ZSwwLikueDxzaGFkb3dQaXhlbERlcHRoKSB2aXNpYmlsaXR5LT0wLjI1O1xuI2VuZGlmXG5yZXR1cm4gY29tcHV0ZUZhbGxPZmYobWluKDEuMCx2aXNpYmlsaXR5K2RhcmtuZXNzKSxjbGlwU3BhY2UueHksZnJ1c3R1bUVkZ2VGYWxsb2ZmKTt9fVxuI2RlZmluZSBpbmxpbmVcbmZsb2F0IGNvbXB1dGVTaGFkb3dXaXRoRVNNKHZlYzQgdlBvc2l0aW9uRnJvbUxpZ2h0LGZsb2F0IGRlcHRoTWV0cmljLHNhbXBsZXIyRCBzaGFkb3dTYW1wbGVyLGZsb2F0IGRhcmtuZXNzLGZsb2F0IGRlcHRoU2NhbGUsZmxvYXQgZnJ1c3R1bUVkZ2VGYWxsb2ZmKVxue3ZlYzMgY2xpcFNwYWNlPXZQb3NpdGlvbkZyb21MaWdodC54eXovdlBvc2l0aW9uRnJvbUxpZ2h0Lnc7dmVjMiB1dj0wLjUqY2xpcFNwYWNlLnh5K3ZlYzIoMC41KTtpZiAodXYueDwwLiB8fCB1di54PjEuMCB8fCB1di55PDAuIHx8IHV2Lnk+MS4wKVxue3JldHVybiAxLjA7fVxuZWxzZVxue2Zsb2F0IHNoYWRvd1BpeGVsRGVwdGg9Y2xhbXAoZGVwdGhNZXRyaWMsMC4sMS4wKTtcbiNpZm5kZWYgU0hBRE9XRkxPQVRcbmZsb2F0IHNoYWRvd01hcFNhbXBsZT11bnBhY2soVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix1diwwLikpO1xuI2Vsc2VcbmZsb2F0IHNoYWRvd01hcFNhbXBsZT1URVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHV2LDAuKS54O1xuI2VuZGlmXG5mbG9hdCBlc209MS4wLWNsYW1wKGV4cChtaW4oODcuLGRlcHRoU2NhbGUqc2hhZG93UGl4ZWxEZXB0aCkpKnNoYWRvd01hcFNhbXBsZSwwLiwxLi1kYXJrbmVzcyk7cmV0dXJuIGNvbXB1dGVGYWxsT2ZmKGVzbSxjbGlwU3BhY2UueHksZnJ1c3R1bUVkZ2VGYWxsb2ZmKTt9fVxuI2RlZmluZSBpbmxpbmVcbmZsb2F0IGNvbXB1dGVTaGFkb3dXaXRoQ2xvc2VFU00odmVjNCB2UG9zaXRpb25Gcm9tTGlnaHQsZmxvYXQgZGVwdGhNZXRyaWMsc2FtcGxlcjJEIHNoYWRvd1NhbXBsZXIsZmxvYXQgZGFya25lc3MsZmxvYXQgZGVwdGhTY2FsZSxmbG9hdCBmcnVzdHVtRWRnZUZhbGxvZmYpXG57dmVjMyBjbGlwU3BhY2U9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2ZWMyIHV2PTAuNSpjbGlwU3BhY2UueHkrdmVjMigwLjUpO2lmICh1di54PDAuIHx8IHV2Lng+MS4wIHx8IHV2Lnk8MC4gfHwgdXYueT4xLjApXG57cmV0dXJuIDEuMDt9XG5lbHNlXG57ZmxvYXQgc2hhZG93UGl4ZWxEZXB0aD1jbGFtcChkZXB0aE1ldHJpYywwLiwxLjApOyBcbiNpZm5kZWYgU0hBRE9XRkxPQVRcbmZsb2F0IHNoYWRvd01hcFNhbXBsZT11bnBhY2soVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix1diwwLikpO1xuI2Vsc2VcbmZsb2F0IHNoYWRvd01hcFNhbXBsZT1URVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHV2LDAuKS54O1xuI2VuZGlmXG5mbG9hdCBlc209Y2xhbXAoZXhwKG1pbig4Ny4sLWRlcHRoU2NhbGUqKHNoYWRvd1BpeGVsRGVwdGgtc2hhZG93TWFwU2FtcGxlKSkpLGRhcmtuZXNzLDEuKTtyZXR1cm4gY29tcHV0ZUZhbGxPZmYoZXNtLGNsaXBTcGFjZS54eSxmcnVzdHVtRWRnZUZhbGxvZmYpO319XG4jaWZkZWYgSVNfTkRDX0hBTEZfWlJBTkdFXG4jZGVmaW5lIFpJTkNMSVAgY2xpcFNwYWNlLnpcbiNlbHNlXG4jZGVmaW5lIFpJTkNMSVAgdXZEZXB0aC56XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFdFQkdMMikgfHwgZGVmaW5lZChXRUJHUFUpIHx8IGRlZmluZWQoTkFUSVZFKVxuI2RlZmluZSBTTUFMTEVTVF9BQk9WRV9aRVJPIDEuMTc1NDk0MzUwOGUtMzhcbiNkZWZpbmUgR1JFQVRFU1RfTEVTU19USEFOX09ORSAwLjk5OTk5OTk0XG4jZGVmaW5lIERJU0FCTEVfVU5JRk9STUlUWV9BTkFMWVNJU1xuI2RlZmluZSBpbmxpbmVcbmZsb2F0IGNvbXB1dGVTaGFkb3dXaXRoQ1NNUENGMShmbG9hdCBsYXllcix2ZWM0IHZQb3NpdGlvbkZyb21MaWdodCxmbG9hdCBkZXB0aE1ldHJpYyxoaWdocCBzYW1wbGVyMkRBcnJheVNoYWRvdyBzaGFkb3dTYW1wbGVyLGZsb2F0IGRhcmtuZXNzLGZsb2F0IGZydXN0dW1FZGdlRmFsbG9mZilcbnt2ZWMzIGNsaXBTcGFjZT12UG9zaXRpb25Gcm9tTGlnaHQueHl6L3ZQb3NpdGlvbkZyb21MaWdodC53O3ZlYzMgdXZEZXB0aD12ZWMzKDAuNSpjbGlwU3BhY2UueHl6K3ZlYzMoMC41KSk7XG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbnV2RGVwdGguej1jbGFtcChaSU5DTElQLFNNQUxMRVNUX0FCT1ZFX1pFUk8sMS4pO1xuI2Vsc2VcbnV2RGVwdGguej1jbGFtcChaSU5DTElQLDAuLEdSRUFURVNUX0xFU1NfVEhBTl9PTkUpO1xuI2VuZGlmXG52ZWM0IHV2RGVwdGhMYXllcj12ZWM0KHV2RGVwdGgueCx1dkRlcHRoLnksbGF5ZXIsdXZEZXB0aC56KTtmbG9hdCBzaGFkb3c9dGV4dHVyZTJEKHNoYWRvd1NhbXBsZXIsdXZEZXB0aExheWVyKTtzaGFkb3c9bWl4KGRhcmtuZXNzLDEuLHNoYWRvdyk7cmV0dXJuIGNvbXB1dGVGYWxsT2ZmKHNoYWRvdyxjbGlwU3BhY2UueHksZnJ1c3R1bUVkZ2VGYWxsb2ZmKTt9XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhDU01QQ0YzKGZsb2F0IGxheWVyLHZlYzQgdlBvc2l0aW9uRnJvbUxpZ2h0LGZsb2F0IGRlcHRoTWV0cmljLGhpZ2hwIHNhbXBsZXIyREFycmF5U2hhZG93IHNoYWRvd1NhbXBsZXIsdmVjMiBzaGFkb3dNYXBTaXplQW5kSW52ZXJzZSxmbG9hdCBkYXJrbmVzcyxmbG9hdCBmcnVzdHVtRWRnZUZhbGxvZmYpXG57dmVjMyBjbGlwU3BhY2U9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2ZWMzIHV2RGVwdGg9dmVjMygwLjUqY2xpcFNwYWNlLnh5eit2ZWMzKDAuNSkpO1xuI2lmZGVmIFVTRV9SRVZFUlNFX0RFUFRIQlVGRkVSXG51dkRlcHRoLno9Y2xhbXAoWklOQ0xJUCxTTUFMTEVTVF9BQk9WRV9aRVJPLDEuKTtcbiNlbHNlXG51dkRlcHRoLno9Y2xhbXAoWklOQ0xJUCwwLixHUkVBVEVTVF9MRVNTX1RIQU5fT05FKTtcbiNlbmRpZlxudmVjMiB1dj11dkRlcHRoLnh5KnNoYWRvd01hcFNpemVBbmRJbnZlcnNlLng7IFxudXYrPTAuNTsgXG52ZWMyIHN0PWZyYWN0KHV2KTsgXG52ZWMyIGJhc2VfdXY9Zmxvb3IodXYpLTAuNTsgXG5iYXNlX3V2Kj1zaGFkb3dNYXBTaXplQW5kSW52ZXJzZS55OyBcbnZlYzIgdXZ3MD0zLi0yLipzdDt2ZWMyIHV2dzE9MS4rMi4qc3Q7dmVjMiB1PXZlYzIoKDIuLXN0LngpL3V2dzAueC0xLixzdC54L3V2dzEueCsxLikqc2hhZG93TWFwU2l6ZUFuZEludmVyc2UueTt2ZWMyIHY9dmVjMigoMi4tc3QueSkvdXZ3MC55LTEuLHN0LnkvdXZ3MS55KzEuKSpzaGFkb3dNYXBTaXplQW5kSW52ZXJzZS55O2Zsb2F0IHNoYWRvdz0wLjtzaGFkb3crPXV2dzAueCp1dncwLnkqdGV4dHVyZTJEKHNoYWRvd1NhbXBsZXIsdmVjNChiYXNlX3V2Lnh5K3ZlYzIodVswXSx2WzBdKSxsYXllcix1dkRlcHRoLnopKTtzaGFkb3crPXV2dzEueCp1dncwLnkqdGV4dHVyZTJEKHNoYWRvd1NhbXBsZXIsdmVjNChiYXNlX3V2Lnh5K3ZlYzIodVsxXSx2WzBdKSxsYXllcix1dkRlcHRoLnopKTtzaGFkb3crPXV2dzAueCp1dncxLnkqdGV4dHVyZTJEKHNoYWRvd1NhbXBsZXIsdmVjNChiYXNlX3V2Lnh5K3ZlYzIodVswXSx2WzFdKSxsYXllcix1dkRlcHRoLnopKTtzaGFkb3crPXV2dzEueCp1dncxLnkqdGV4dHVyZTJEKHNoYWRvd1NhbXBsZXIsdmVjNChiYXNlX3V2Lnh5K3ZlYzIodVsxXSx2WzFdKSxsYXllcix1dkRlcHRoLnopKTtzaGFkb3c9c2hhZG93LzE2LjtzaGFkb3c9bWl4KGRhcmtuZXNzLDEuLHNoYWRvdyk7cmV0dXJuIGNvbXB1dGVGYWxsT2ZmKHNoYWRvdyxjbGlwU3BhY2UueHksZnJ1c3R1bUVkZ2VGYWxsb2ZmKTt9XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhDU01QQ0Y1KGZsb2F0IGxheWVyLHZlYzQgdlBvc2l0aW9uRnJvbUxpZ2h0LGZsb2F0IGRlcHRoTWV0cmljLGhpZ2hwIHNhbXBsZXIyREFycmF5U2hhZG93IHNoYWRvd1NhbXBsZXIsdmVjMiBzaGFkb3dNYXBTaXplQW5kSW52ZXJzZSxmbG9hdCBkYXJrbmVzcyxmbG9hdCBmcnVzdHVtRWRnZUZhbGxvZmYpXG57dmVjMyBjbGlwU3BhY2U9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2ZWMzIHV2RGVwdGg9dmVjMygwLjUqY2xpcFNwYWNlLnh5eit2ZWMzKDAuNSkpO1xuI2lmZGVmIFVTRV9SRVZFUlNFX0RFUFRIQlVGRkVSXG51dkRlcHRoLno9Y2xhbXAoWklOQ0xJUCxTTUFMTEVTVF9BQk9WRV9aRVJPLDEuKTtcbiNlbHNlXG51dkRlcHRoLno9Y2xhbXAoWklOQ0xJUCwwLixHUkVBVEVTVF9MRVNTX1RIQU5fT05FKTtcbiNlbmRpZlxudmVjMiB1dj11dkRlcHRoLnh5KnNoYWRvd01hcFNpemVBbmRJbnZlcnNlLng7IFxudXYrPTAuNTsgXG52ZWMyIHN0PWZyYWN0KHV2KTsgXG52ZWMyIGJhc2VfdXY9Zmxvb3IodXYpLTAuNTsgXG5iYXNlX3V2Kj1zaGFkb3dNYXBTaXplQW5kSW52ZXJzZS55OyBcbnZlYzIgdXZ3MD00Li0zLipzdDt2ZWMyIHV2dzE9dmVjMig3Lik7dmVjMiB1dncyPTEuKzMuKnN0O3ZlYzMgdT12ZWMzKCgzLi0yLipzdC54KS91dncwLngtMi4sKDMuK3N0LngpL3V2dzEueCxzdC54L3V2dzIueCsyLikqc2hhZG93TWFwU2l6ZUFuZEludmVyc2UueTt2ZWMzIHY9dmVjMygoMy4tMi4qc3QueSkvdXZ3MC55LTIuLCgzLitzdC55KS91dncxLnksc3QueS91dncyLnkrMi4pKnNoYWRvd01hcFNpemVBbmRJbnZlcnNlLnk7ZmxvYXQgc2hhZG93PTAuO3NoYWRvdys9dXZ3MC54KnV2dzAueSp0ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix2ZWM0KGJhc2VfdXYueHkrdmVjMih1WzBdLHZbMF0pLGxheWVyLHV2RGVwdGgueikpO3NoYWRvdys9dXZ3MS54KnV2dzAueSp0ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix2ZWM0KGJhc2VfdXYueHkrdmVjMih1WzFdLHZbMF0pLGxheWVyLHV2RGVwdGgueikpO3NoYWRvdys9dXZ3Mi54KnV2dzAueSp0ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix2ZWM0KGJhc2VfdXYueHkrdmVjMih1WzJdLHZbMF0pLGxheWVyLHV2RGVwdGgueikpO3NoYWRvdys9dXZ3MC54KnV2dzEueSp0ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix2ZWM0KGJhc2VfdXYueHkrdmVjMih1WzBdLHZbMV0pLGxheWVyLHV2RGVwdGgueikpO3NoYWRvdys9dXZ3MS54KnV2dzEueSp0ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix2ZWM0KGJhc2VfdXYueHkrdmVjMih1WzFdLHZbMV0pLGxheWVyLHV2RGVwdGgueikpO3NoYWRvdys9dXZ3Mi54KnV2dzEueSp0ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix2ZWM0KGJhc2VfdXYueHkrdmVjMih1WzJdLHZbMV0pLGxheWVyLHV2RGVwdGgueikpO3NoYWRvdys9dXZ3MC54KnV2dzIueSp0ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix2ZWM0KGJhc2VfdXYueHkrdmVjMih1WzBdLHZbMl0pLGxheWVyLHV2RGVwdGgueikpO3NoYWRvdys9dXZ3MS54KnV2dzIueSp0ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix2ZWM0KGJhc2VfdXYueHkrdmVjMih1WzFdLHZbMl0pLGxheWVyLHV2RGVwdGgueikpO3NoYWRvdys9dXZ3Mi54KnV2dzIueSp0ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix2ZWM0KGJhc2VfdXYueHkrdmVjMih1WzJdLHZbMl0pLGxheWVyLHV2RGVwdGgueikpO3NoYWRvdz1zaGFkb3cvMTQ0LjtzaGFkb3c9bWl4KGRhcmtuZXNzLDEuLHNoYWRvdyk7cmV0dXJuIGNvbXB1dGVGYWxsT2ZmKHNoYWRvdyxjbGlwU3BhY2UueHksZnJ1c3R1bUVkZ2VGYWxsb2ZmKTt9XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhQQ0YxKHZlYzQgdlBvc2l0aW9uRnJvbUxpZ2h0LGZsb2F0IGRlcHRoTWV0cmljLGhpZ2hwIHNhbXBsZXIyRFNoYWRvdyBzaGFkb3dTYW1wbGVyLGZsb2F0IGRhcmtuZXNzLGZsb2F0IGZydXN0dW1FZGdlRmFsbG9mZilcbnt2ZWMzIGNsaXBTcGFjZT12UG9zaXRpb25Gcm9tTGlnaHQueHl6L3ZQb3NpdGlvbkZyb21MaWdodC53O3ZlYzMgdXZEZXB0aD12ZWMzKDAuNSpjbGlwU3BhY2UueHl6K3ZlYzMoMC41KSk7dXZEZXB0aC56PVpJTkNMSVA7aWYgKGRlcHRoTWV0cmljPDAuMCB8fCBkZXB0aE1ldHJpYz4xLjAgfHwgdXZEZXB0aC54PDAuIHx8IHV2RGVwdGgueD4xLjAgfHwgdXZEZXB0aC55PDAuIHx8IHV2RGVwdGgueT4xLjApIHtyZXR1cm4gMS4wO30gZWxzZSB7ZmxvYXQgc2hhZG93PVRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdXZEZXB0aCwwLik7c2hhZG93PW1peChkYXJrbmVzcywxLixzaGFkb3cpO3JldHVybiBjb21wdXRlRmFsbE9mZihzaGFkb3csY2xpcFNwYWNlLnh5LGZydXN0dW1FZGdlRmFsbG9mZik7fX1cbiNkZWZpbmUgaW5saW5lXG5mbG9hdCBjb21wdXRlU2hhZG93V2l0aFBDRjModmVjNCB2UG9zaXRpb25Gcm9tTGlnaHQsZmxvYXQgZGVwdGhNZXRyaWMsaGlnaHAgc2FtcGxlcjJEU2hhZG93IHNoYWRvd1NhbXBsZXIsdmVjMiBzaGFkb3dNYXBTaXplQW5kSW52ZXJzZSxmbG9hdCBkYXJrbmVzcyxmbG9hdCBmcnVzdHVtRWRnZUZhbGxvZmYpXG57dmVjMyBjbGlwU3BhY2U9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2ZWMzIHV2RGVwdGg9dmVjMygwLjUqY2xpcFNwYWNlLnh5eit2ZWMzKDAuNSkpO3V2RGVwdGguej1aSU5DTElQO2lmIChkZXB0aE1ldHJpYzwwLjAgfHwgZGVwdGhNZXRyaWM+MS4wIHx8IHV2RGVwdGgueDwwLiB8fCB1dkRlcHRoLng+MS4wIHx8IHV2RGVwdGgueTwwLiB8fCB1dkRlcHRoLnk+MS4wKSB7cmV0dXJuIDEuMDt9IGVsc2Uge3ZlYzIgdXY9dXZEZXB0aC54eSpzaGFkb3dNYXBTaXplQW5kSW52ZXJzZS54OyBcbnV2Kz0wLjU7IFxudmVjMiBzdD1mcmFjdCh1dik7IFxudmVjMiBiYXNlX3V2PWZsb29yKHV2KS0wLjU7IFxuYmFzZV91dio9c2hhZG93TWFwU2l6ZUFuZEludmVyc2UueTsgXG52ZWMyIHV2dzA9My4tMi4qc3Q7dmVjMiB1dncxPTEuKzIuKnN0O3ZlYzIgdT12ZWMyKCgyLi1zdC54KS91dncwLngtMS4sc3QueC91dncxLngrMS4pKnNoYWRvd01hcFNpemVBbmRJbnZlcnNlLnk7dmVjMiB2PXZlYzIoKDIuLXN0LnkpL3V2dzAueS0xLixzdC55L3V2dzEueSsxLikqc2hhZG93TWFwU2l6ZUFuZEludmVyc2UueTtmbG9hdCBzaGFkb3c9MC47c2hhZG93Kz11dncwLngqdXZ3MC55KlRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdmVjMyhiYXNlX3V2Lnh5K3ZlYzIodVswXSx2WzBdKSx1dkRlcHRoLnopLDAuKTtzaGFkb3crPXV2dzEueCp1dncwLnkqVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix2ZWMzKGJhc2VfdXYueHkrdmVjMih1WzFdLHZbMF0pLHV2RGVwdGgueiksMC4pO3NoYWRvdys9dXZ3MC54KnV2dzEueSpURVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHZlYzMoYmFzZV91di54eSt2ZWMyKHVbMF0sdlsxXSksdXZEZXB0aC56KSwwLik7c2hhZG93Kz11dncxLngqdXZ3MS55KlRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdmVjMyhiYXNlX3V2Lnh5K3ZlYzIodVsxXSx2WzFdKSx1dkRlcHRoLnopLDAuKTtzaGFkb3c9c2hhZG93LzE2LjtzaGFkb3c9bWl4KGRhcmtuZXNzLDEuLHNoYWRvdyk7cmV0dXJuIGNvbXB1dGVGYWxsT2ZmKHNoYWRvdyxjbGlwU3BhY2UueHksZnJ1c3R1bUVkZ2VGYWxsb2ZmKTt9fVxuI2RlZmluZSBpbmxpbmVcbmZsb2F0IGNvbXB1dGVTaGFkb3dXaXRoUENGNSh2ZWM0IHZQb3NpdGlvbkZyb21MaWdodCxmbG9hdCBkZXB0aE1ldHJpYyxoaWdocCBzYW1wbGVyMkRTaGFkb3cgc2hhZG93U2FtcGxlcix2ZWMyIHNoYWRvd01hcFNpemVBbmRJbnZlcnNlLGZsb2F0IGRhcmtuZXNzLGZsb2F0IGZydXN0dW1FZGdlRmFsbG9mZilcbnt2ZWMzIGNsaXBTcGFjZT12UG9zaXRpb25Gcm9tTGlnaHQueHl6L3ZQb3NpdGlvbkZyb21MaWdodC53O3ZlYzMgdXZEZXB0aD12ZWMzKDAuNSpjbGlwU3BhY2UueHl6K3ZlYzMoMC41KSk7dXZEZXB0aC56PVpJTkNMSVA7aWYgKGRlcHRoTWV0cmljPDAuMCB8fCBkZXB0aE1ldHJpYz4xLjAgfHwgdXZEZXB0aC54PDAuIHx8IHV2RGVwdGgueD4xLjAgfHwgdXZEZXB0aC55PDAuIHx8IHV2RGVwdGgueT4xLjApIHtyZXR1cm4gMS4wO30gZWxzZSB7dmVjMiB1dj11dkRlcHRoLnh5KnNoYWRvd01hcFNpemVBbmRJbnZlcnNlLng7IFxudXYrPTAuNTsgXG52ZWMyIHN0PWZyYWN0KHV2KTsgXG52ZWMyIGJhc2VfdXY9Zmxvb3IodXYpLTAuNTsgXG5iYXNlX3V2Kj1zaGFkb3dNYXBTaXplQW5kSW52ZXJzZS55OyBcbnZlYzIgdXZ3MD00Li0zLipzdDt2ZWMyIHV2dzE9dmVjMig3Lik7dmVjMiB1dncyPTEuKzMuKnN0O3ZlYzMgdT12ZWMzKCgzLi0yLipzdC54KS91dncwLngtMi4sKDMuK3N0LngpL3V2dzEueCxzdC54L3V2dzIueCsyLikqc2hhZG93TWFwU2l6ZUFuZEludmVyc2UueTt2ZWMzIHY9dmVjMygoMy4tMi4qc3QueSkvdXZ3MC55LTIuLCgzLitzdC55KS91dncxLnksc3QueS91dncyLnkrMi4pKnNoYWRvd01hcFNpemVBbmRJbnZlcnNlLnk7ZmxvYXQgc2hhZG93PTAuO3NoYWRvdys9dXZ3MC54KnV2dzAueSpURVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHZlYzMoYmFzZV91di54eSt2ZWMyKHVbMF0sdlswXSksdXZEZXB0aC56KSwwLik7c2hhZG93Kz11dncxLngqdXZ3MC55KlRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdmVjMyhiYXNlX3V2Lnh5K3ZlYzIodVsxXSx2WzBdKSx1dkRlcHRoLnopLDAuKTtzaGFkb3crPXV2dzIueCp1dncwLnkqVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix2ZWMzKGJhc2VfdXYueHkrdmVjMih1WzJdLHZbMF0pLHV2RGVwdGgueiksMC4pO3NoYWRvdys9dXZ3MC54KnV2dzEueSpURVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHZlYzMoYmFzZV91di54eSt2ZWMyKHVbMF0sdlsxXSksdXZEZXB0aC56KSwwLik7c2hhZG93Kz11dncxLngqdXZ3MS55KlRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdmVjMyhiYXNlX3V2Lnh5K3ZlYzIodVsxXSx2WzFdKSx1dkRlcHRoLnopLDAuKTtzaGFkb3crPXV2dzIueCp1dncxLnkqVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix2ZWMzKGJhc2VfdXYueHkrdmVjMih1WzJdLHZbMV0pLHV2RGVwdGgueiksMC4pO3NoYWRvdys9dXZ3MC54KnV2dzIueSpURVhUVVJFRlVOQyhzaGFkb3dTYW1wbGVyLHZlYzMoYmFzZV91di54eSt2ZWMyKHVbMF0sdlsyXSksdXZEZXB0aC56KSwwLik7c2hhZG93Kz11dncxLngqdXZ3Mi55KlRFWFRVUkVGVU5DKHNoYWRvd1NhbXBsZXIsdmVjMyhiYXNlX3V2Lnh5K3ZlYzIodVsxXSx2WzJdKSx1dkRlcHRoLnopLDAuKTtzaGFkb3crPXV2dzIueCp1dncyLnkqVEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix2ZWMzKGJhc2VfdXYueHkrdmVjMih1WzJdLHZbMl0pLHV2RGVwdGgueiksMC4pO3NoYWRvdz1zaGFkb3cvMTQ0LjtzaGFkb3c9bWl4KGRhcmtuZXNzLDEuLHNoYWRvdyk7cmV0dXJuIGNvbXB1dGVGYWxsT2ZmKHNoYWRvdyxjbGlwU3BhY2UueHksZnJ1c3R1bUVkZ2VGYWxsb2ZmKTt9fVxuY29uc3QgdmVjMyBQb2lzc29uU2FtcGxlcnMzMls2NF09dmVjM1s2NF0oXG52ZWMzKDAuMDY0MDcwMTMsMC4wNTQwOTkyNywwLiksXG52ZWMzKDAuNzM2NjU3NywwLjU3ODkzOTQsMC4pLFxudmVjMygtMC42MjcwNTQyLC0wLjUzMjAyNzgsMC4pLFxudmVjMygtMC40MDk2MTA3LDAuODQxMTA5NSwwLiksXG52ZWMzKDAuNjg0OTU2NCwtMC40OTkwODE4LDAuKSxcbnZlYzMoLTAuODc0MTgxLC0wLjA0NTc5NzM1LDAuKSxcbnZlYzMoMC45OTg5OTk4LDAuMDAwOTg4MDA2NiwwLiksXG52ZWMzKC0wLjAwNDkyMDU3OCwtMC45MTUxNjQ5LDAuKSxcbnZlYzMoMC4xODA1NzYzLDAuOTc0NzQ4MywwLiksXG52ZWMzKC0wLjIxMzg0NTEsMC4yNjM1ODE4LDAuKSxcbnZlYzMoMC4xMDk4NDUsMC4zODg0Nzg1LDAuKSxcbnZlYzMoMC4wNjg3Njc1NSwtMC4zNTgxMDc0LDAuKSxcbnZlYzMoMC4zNzQwNzMsLTAuNzY2MTI2NiwwLiksXG52ZWMzKDAuMzA3OTEzMiwtMC4xMjE2NzYzLDAuKSxcbnZlYzMoLTAuMzc5NDMzNSwtMC44MjcxNTgzLDAuKSxcbnZlYzMoLTAuMjAzODc4LC0wLjA3NzE1MDM0LDAuKSxcbnZlYzMoMC41OTEyNjk3LDAuMTQ2OTc5OSwwLiksXG52ZWMzKC0wLjg4MDY5LDAuMzAzMTc4NCwwLiksXG52ZWMzKDAuNTA0MDEwOCwwLjgyODM3MjIsMC4pLFxudmVjMygtMC41ODQ0MTI0LDAuNTQ5NDg3NywwLiksXG52ZWMzKDAuNjAxNzc5OSwtMC4xNzI2NjU0LDAuKSxcbnZlYzMoLTAuNTU1NDk4MSwwLjE1NTk5OTcsMC4pLFxudmVjMygtMC4zMDE2MzY5LC0wLjM5MDA5MjgsMC4pLFxudmVjMygtMC41NTUwNjMyLC0wLjE3MjM3NjIsMC4pLFxudmVjMygwLjkyNTAyOSwwLjI5OTUwNDEsMC4pLFxudmVjMygtMC4yNDczMTM3LDAuNTUzODUwNSwwLiksXG52ZWMzKDAuOTE4MzAzNywtMC4yODYyMzkyLDAuKSxcbnZlYzMoMC4yNDY5NDIxLDAuNjcxODcxMiwwLiksXG52ZWMzKDAuMzkxNjM5NywtMC40MzI4MjA5LDAuKSxcbnZlYzMoLTAuMDM1NzY5MjcsLTAuNjIyMDAzMiwwLiksXG52ZWMzKC0wLjA0NjYxMjU1LDAuNzk5NTIwMSwwLiksXG52ZWMzKDAuNDQwMjkyNCwwLjM2NDAzMTIsMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKSxcbnZlYzMoMC4pLFxudmVjMygwLiksXG52ZWMzKDAuKVxuKTtjb25zdCB2ZWMzIFBvaXNzb25TYW1wbGVyczY0WzY0XT12ZWMzWzY0XShcbnZlYzMoLTAuNjEzMzkyLDAuNjE3NDgxLDAuKSxcbnZlYzMoMC4xNzAwMTksLTAuMDQwMjU0LDAuKSxcbnZlYzMoLTAuMjk5NDE3LDAuNzkxOTI1LDAuKSxcbnZlYzMoMC42NDU2ODAsMC40OTMyMTAsMC4pLFxudmVjMygtMC42NTE3ODQsMC43MTc4ODcsMC4pLFxudmVjMygwLjQyMTAwMywwLjAyNzA3MCwwLiksXG52ZWMzKC0wLjgxNzE5NCwtMC4yNzEwOTYsMC4pLFxudmVjMygtMC43MDUzNzQsLTAuNjY4MjAzLDAuKSxcbnZlYzMoMC45NzcwNTAsLTAuMTA4NjE1LDAuKSxcbnZlYzMoMC4wNjMzMjYsMC4xNDIzNjksMC4pLFxudmVjMygwLjIwMzUyOCwwLjIxNDMzMSwwLiksXG52ZWMzKC0wLjY2NzUzMSwwLjMyNjA5MCwwLiksXG52ZWMzKC0wLjA5ODQyMiwtMC4yOTU3NTUsMC4pLFxudmVjMygtMC44ODU5MjIsMC4yMTUzNjksMC4pLFxudmVjMygwLjU2NjYzNywwLjYwNTIxMywwLiksXG52ZWMzKDAuMDM5NzY2LC0wLjM5NjEwMCwwLiksXG52ZWMzKDAuNzUxOTQ2LDAuNDUzMzUyLDAuKSxcbnZlYzMoMC4wNzg3MDcsLTAuNzE1MzIzLDAuKSxcbnZlYzMoLTAuMDc1ODM4LC0wLjUyOTM0NCwwLiksXG52ZWMzKDAuNzI0NDc5LC0wLjU4MDc5OCwwLiksXG52ZWMzKDAuMjIyOTk5LC0wLjIxNTEyNSwwLiksXG52ZWMzKC0wLjQ2NzU3NCwtMC40MDU0MzgsMC4pLFxudmVjMygtMC4yNDgyNjgsLTAuODE0NzUzLDAuKSxcbnZlYzMoMC4zNTQ0MTEsLTAuODg3NTcwLDAuKSxcbnZlYzMoMC4xNzU4MTcsMC4zODIzNjYsMC4pLFxudmVjMygwLjQ4NzQ3MiwtMC4wNjMwODIsMC4pLFxudmVjMygtMC4wODQwNzgsMC44OTgzMTIsMC4pLFxudmVjMygwLjQ4ODg3NiwtMC43ODM0NDEsMC4pLFxudmVjMygwLjQ3MDAxNiwwLjIxNzkzMywwLiksXG52ZWMzKC0wLjY5Njg5MCwtMC41NDk3OTEsMC4pLFxudmVjMygtMC4xNDk2OTMsMC42MDU3NjIsMC4pLFxudmVjMygwLjAzNDIxMSwwLjk3OTk4MCwwLiksXG52ZWMzKDAuNTAzMDk4LC0wLjMwODg3OCwwLiksXG52ZWMzKC0wLjAxNjIwNSwtMC44NzI5MjEsMC4pLFxudmVjMygwLjM4NTc4NCwtMC4zOTM5MDIsMC4pLFxudmVjMygtMC4xNDY4ODYsLTAuODU5MjQ5LDAuKSxcbnZlYzMoMC42NDMzNjEsMC4xNjQwOTgsMC4pLFxudmVjMygwLjYzNDM4OCwtMC4wNDk0NzEsMC4pLFxudmVjMygtMC42ODg4OTQsMC4wMDc4NDMsMC4pLFxudmVjMygwLjQ2NDAzNCwtMC4xODg4MTgsMC4pLFxudmVjMygtMC40NDA4NDAsMC4xMzc0ODYsMC4pLFxudmVjMygwLjM2NDQ4MywwLjUxMTcwNCwwLiksXG52ZWMzKDAuMDM0MDI4LDAuMzI1OTY4LDAuKSxcbnZlYzMoMC4wOTkwOTQsLTAuMzA4MDIzLDAuKSxcbnZlYzMoMC42OTM5NjAsLTAuMzY2MjUzLDAuKSxcbnZlYzMoMC42Nzg4ODQsLTAuMjA0Njg4LDAuKSxcbnZlYzMoMC4wMDE4MDEsMC43ODAzMjgsMC4pLFxudmVjMygwLjE0NTE3NywtMC44OTg5ODQsMC4pLFxudmVjMygwLjA2MjY1NSwtMC42MTE4NjYsMC4pLFxudmVjMygwLjMxNTIyNiwtMC42MDQyOTcsMC4pLFxudmVjMygtMC43ODAxNDUsMC40ODYyNTEsMC4pLFxudmVjMygtMC4zNzE4NjgsMC44ODIxMzgsMC4pLFxudmVjMygwLjIwMDQ3NiwwLjQ5NDQzMCwwLiksXG52ZWMzKC0wLjQ5NDU1MiwtMC43MTEwNTEsMC4pLFxudmVjMygwLjYxMjQ3NiwwLjcwNTI1MiwwLiksXG52ZWMzKC0wLjU3ODg0NSwtMC43Njg3OTIsMC4pLFxudmVjMygtMC43NzI0NTQsLTAuMDkwOTc2LDAuKSxcbnZlYzMoMC41MDQ0NDAsMC4zNzIyOTUsMC4pLFxudmVjMygwLjE1NTczNiwwLjA2NTE1NywwLiksXG52ZWMzKDAuMzkxNTIyLDAuODQ5NjA1LDAuKSxcbnZlYzMoLTAuNjIwMTA2LC0wLjMyODEwNCwwLiksXG52ZWMzKDAuNzg5MjM5LC0wLjQxOTk2NSwwLiksXG52ZWMzKC0wLjU0NTM5NiwwLjUzODEzMywwLiksXG52ZWMzKC0wLjE3ODU2NCwtMC41OTYwNTcsMC4pXG4pO1xuI2RlZmluZSBpbmxpbmVcbmZsb2F0IGNvbXB1dGVTaGFkb3dXaXRoQ1NNUENTUyhmbG9hdCBsYXllcix2ZWM0IHZQb3NpdGlvbkZyb21MaWdodCxmbG9hdCBkZXB0aE1ldHJpYyxoaWdocCBzYW1wbGVyMkRBcnJheSBkZXB0aFNhbXBsZXIsaGlnaHAgc2FtcGxlcjJEQXJyYXlTaGFkb3cgc2hhZG93U2FtcGxlcixmbG9hdCBzaGFkb3dNYXBTaXplSW52ZXJzZSxmbG9hdCBsaWdodFNpemVVVixmbG9hdCBkYXJrbmVzcyxmbG9hdCBmcnVzdHVtRWRnZUZhbGxvZmYsaW50IHNlYXJjaFRhcENvdW50LGludCBwY2ZUYXBDb3VudCx2ZWMzWzY0XSBwb2lzc29uU2FtcGxlcnMsdmVjMiBsaWdodFNpemVVVkNvcnJlY3Rpb24sZmxvYXQgZGVwdGhDb3JyZWN0aW9uLGZsb2F0IHBlbnVtYnJhRGFya25lc3MpXG57dmVjMyBjbGlwU3BhY2U9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2ZWMzIHV2RGVwdGg9dmVjMygwLjUqY2xpcFNwYWNlLnh5eit2ZWMzKDAuNSkpO1xuI2lmZGVmIFVTRV9SRVZFUlNFX0RFUFRIQlVGRkVSXG51dkRlcHRoLno9Y2xhbXAoWklOQ0xJUCxTTUFMTEVTVF9BQk9WRV9aRVJPLDEuKTtcbiNlbHNlXG51dkRlcHRoLno9Y2xhbXAoWklOQ0xJUCwwLixHUkVBVEVTVF9MRVNTX1RIQU5fT05FKTtcbiNlbmRpZlxudmVjNCB1dkRlcHRoTGF5ZXI9dmVjNCh1dkRlcHRoLngsdXZEZXB0aC55LGxheWVyLHV2RGVwdGgueik7ZmxvYXQgYmxvY2tlckRlcHRoPTAuMDtmbG9hdCBzdW1CbG9ja2VyRGVwdGg9MC4wO2Zsb2F0IG51bUJsb2NrZXI9MC4wO2ZvciAoaW50IGk9MDsgaTxzZWFyY2hUYXBDb3VudDsgaSArKykge2Jsb2NrZXJEZXB0aD10ZXh0dXJlMkQoZGVwdGhTYW1wbGVyLHZlYzModXZEZXB0aC54eSsobGlnaHRTaXplVVYqbGlnaHRTaXplVVZDb3JyZWN0aW9uKnNoYWRvd01hcFNpemVJbnZlcnNlKlBvaXNzb25TYW1wbGVyczMyW2ldLnh5KSxsYXllcikpLnI7aWYgKGJsb2NrZXJEZXB0aDxkZXB0aE1ldHJpYykge3N1bUJsb2NrZXJEZXB0aCs9YmxvY2tlckRlcHRoO251bUJsb2NrZXIrKzt9fVxuZmxvYXQgYXZnQmxvY2tlckRlcHRoPXN1bUJsb2NrZXJEZXB0aC9udW1CbG9ja2VyO2Zsb2F0IEFBT2Zmc2V0PXNoYWRvd01hcFNpemVJbnZlcnNlKjEwLjtmbG9hdCBwZW51bWJyYVJhdGlvPSgoZGVwdGhNZXRyaWMtYXZnQmxvY2tlckRlcHRoKSpkZXB0aENvcnJlY3Rpb24rQUFPZmZzZXQpO3ZlYzQgZmlsdGVyUmFkaXVzPXZlYzQocGVudW1icmFSYXRpbypsaWdodFNpemVVVipsaWdodFNpemVVVkNvcnJlY3Rpb24qc2hhZG93TWFwU2l6ZUludmVyc2UsMC4sMC4pO2Zsb2F0IHJhbmRvbT1nZXRSYW5kKHZQb3NpdGlvbkZyb21MaWdodC54eSk7ZmxvYXQgcm90YXRpb25BbmdsZT1yYW5kb20qMy4xNDE1OTI2O3ZlYzIgcm90YXRpb25WZWN0b3I9dmVjMihjb3Mocm90YXRpb25BbmdsZSksc2luKHJvdGF0aW9uQW5nbGUpKTtmbG9hdCBzaGFkb3c9MC47Zm9yIChpbnQgaT0wOyBpPHBjZlRhcENvdW50OyBpKyspIHt2ZWM0IG9mZnNldD12ZWM0KHBvaXNzb25TYW1wbGVyc1tpXSwwLik7b2Zmc2V0PXZlYzQob2Zmc2V0Lngqcm90YXRpb25WZWN0b3IueC1vZmZzZXQueSpyb3RhdGlvblZlY3Rvci55LG9mZnNldC55KnJvdGF0aW9uVmVjdG9yLngrb2Zmc2V0Lngqcm90YXRpb25WZWN0b3IueSwwLiwwLik7c2hhZG93Kz10ZXh0dXJlMkQoc2hhZG93U2FtcGxlcix1dkRlcHRoTGF5ZXIrb2Zmc2V0KmZpbHRlclJhZGl1cyk7fVxuc2hhZG93Lz1mbG9hdChwY2ZUYXBDb3VudCk7c2hhZG93PW1peChzaGFkb3csMS4sbWluKChkZXB0aE1ldHJpYy1hdmdCbG9ja2VyRGVwdGgpKmRlcHRoQ29ycmVjdGlvbipwZW51bWJyYURhcmtuZXNzLDEuKSk7c2hhZG93PW1peChkYXJrbmVzcywxLixzaGFkb3cpO2lmIChudW1CbG9ja2VyPDEuMCkge3JldHVybiAxLjA7fVxuZWxzZVxue3JldHVybiBjb21wdXRlRmFsbE9mZihzaGFkb3csY2xpcFNwYWNlLnh5LGZydXN0dW1FZGdlRmFsbG9mZik7fX1cbiNkZWZpbmUgaW5saW5lXG5mbG9hdCBjb21wdXRlU2hhZG93V2l0aFBDU1ModmVjNCB2UG9zaXRpb25Gcm9tTGlnaHQsZmxvYXQgZGVwdGhNZXRyaWMsc2FtcGxlcjJEIGRlcHRoU2FtcGxlcixoaWdocCBzYW1wbGVyMkRTaGFkb3cgc2hhZG93U2FtcGxlcixmbG9hdCBzaGFkb3dNYXBTaXplSW52ZXJzZSxmbG9hdCBsaWdodFNpemVVVixmbG9hdCBkYXJrbmVzcyxmbG9hdCBmcnVzdHVtRWRnZUZhbGxvZmYsaW50IHNlYXJjaFRhcENvdW50LGludCBwY2ZUYXBDb3VudCx2ZWMzWzY0XSBwb2lzc29uU2FtcGxlcnMpXG57dmVjMyBjbGlwU3BhY2U9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2ZWMzIHV2RGVwdGg9dmVjMygwLjUqY2xpcFNwYWNlLnh5eit2ZWMzKDAuNSkpO3V2RGVwdGguej1aSU5DTElQO2lmIChkZXB0aE1ldHJpYzwwLjAgfHwgZGVwdGhNZXRyaWM+MS4wIHx8IHV2RGVwdGgueDwwLiB8fCB1dkRlcHRoLng+MS4wIHx8IHV2RGVwdGgueTwwLiB8fCB1dkRlcHRoLnk+MS4wKSB7cmV0dXJuIDEuMDt9IGVsc2Uge2Zsb2F0IGJsb2NrZXJEZXB0aD0wLjA7ZmxvYXQgc3VtQmxvY2tlckRlcHRoPTAuMDtmbG9hdCBudW1CbG9ja2VyPTAuMDtmb3IgKGludCBpPTA7IGk8c2VhcmNoVGFwQ291bnQ7IGkgKyspIHtibG9ja2VyRGVwdGg9VEVYVFVSRUZVTkMoZGVwdGhTYW1wbGVyLHV2RGVwdGgueHkrKGxpZ2h0U2l6ZVVWKnNoYWRvd01hcFNpemVJbnZlcnNlKlBvaXNzb25TYW1wbGVyczMyW2ldLnh5KSwwLikucjtpZiAoYmxvY2tlckRlcHRoPGRlcHRoTWV0cmljKSB7c3VtQmxvY2tlckRlcHRoKz1ibG9ja2VyRGVwdGg7bnVtQmxvY2tlcisrO319XG5pZiAobnVtQmxvY2tlcjwxLjApIHtyZXR1cm4gMS4wO31cbmVsc2VcbntmbG9hdCBhdmdCbG9ja2VyRGVwdGg9c3VtQmxvY2tlckRlcHRoL251bUJsb2NrZXI7ZmxvYXQgQUFPZmZzZXQ9c2hhZG93TWFwU2l6ZUludmVyc2UqMTAuO2Zsb2F0IHBlbnVtYnJhUmF0aW89KChkZXB0aE1ldHJpYy1hdmdCbG9ja2VyRGVwdGgpK0FBT2Zmc2V0KTtmbG9hdCBmaWx0ZXJSYWRpdXM9cGVudW1icmFSYXRpbypsaWdodFNpemVVVipzaGFkb3dNYXBTaXplSW52ZXJzZTtmbG9hdCByYW5kb209Z2V0UmFuZCh2UG9zaXRpb25Gcm9tTGlnaHQueHkpO2Zsb2F0IHJvdGF0aW9uQW5nbGU9cmFuZG9tKjMuMTQxNTkyNjt2ZWMyIHJvdGF0aW9uVmVjdG9yPXZlYzIoY29zKHJvdGF0aW9uQW5nbGUpLHNpbihyb3RhdGlvbkFuZ2xlKSk7ZmxvYXQgc2hhZG93PTAuO2ZvciAoaW50IGk9MDsgaTxwY2ZUYXBDb3VudDsgaSsrKSB7dmVjMyBvZmZzZXQ9cG9pc3NvblNhbXBsZXJzW2ldO29mZnNldD12ZWMzKG9mZnNldC54KnJvdGF0aW9uVmVjdG9yLngtb2Zmc2V0Lnkqcm90YXRpb25WZWN0b3IueSxvZmZzZXQueSpyb3RhdGlvblZlY3Rvci54K29mZnNldC54KnJvdGF0aW9uVmVjdG9yLnksMC4pO3NoYWRvdys9VEVYVFVSRUZVTkMoc2hhZG93U2FtcGxlcix1dkRlcHRoK29mZnNldCpmaWx0ZXJSYWRpdXMsMC4pO31cbnNoYWRvdy89ZmxvYXQocGNmVGFwQ291bnQpO3NoYWRvdz1taXgoc2hhZG93LDEuLGRlcHRoTWV0cmljLWF2Z0Jsb2NrZXJEZXB0aCk7c2hhZG93PW1peChkYXJrbmVzcywxLixzaGFkb3cpO3JldHVybiBjb21wdXRlRmFsbE9mZihzaGFkb3csY2xpcFNwYWNlLnh5LGZydXN0dW1FZGdlRmFsbG9mZik7fX19XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhQQ1NTMTYodmVjNCB2UG9zaXRpb25Gcm9tTGlnaHQsZmxvYXQgZGVwdGhNZXRyaWMsc2FtcGxlcjJEIGRlcHRoU2FtcGxlcixoaWdocCBzYW1wbGVyMkRTaGFkb3cgc2hhZG93U2FtcGxlcixmbG9hdCBzaGFkb3dNYXBTaXplSW52ZXJzZSxmbG9hdCBsaWdodFNpemVVVixmbG9hdCBkYXJrbmVzcyxmbG9hdCBmcnVzdHVtRWRnZUZhbGxvZmYpXG57cmV0dXJuIGNvbXB1dGVTaGFkb3dXaXRoUENTUyh2UG9zaXRpb25Gcm9tTGlnaHQsZGVwdGhNZXRyaWMsZGVwdGhTYW1wbGVyLHNoYWRvd1NhbXBsZXIsc2hhZG93TWFwU2l6ZUludmVyc2UsbGlnaHRTaXplVVYsZGFya25lc3MsZnJ1c3R1bUVkZ2VGYWxsb2ZmLDE2LDE2LFBvaXNzb25TYW1wbGVyczMyKTt9XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhQQ1NTMzIodmVjNCB2UG9zaXRpb25Gcm9tTGlnaHQsZmxvYXQgZGVwdGhNZXRyaWMsc2FtcGxlcjJEIGRlcHRoU2FtcGxlcixoaWdocCBzYW1wbGVyMkRTaGFkb3cgc2hhZG93U2FtcGxlcixmbG9hdCBzaGFkb3dNYXBTaXplSW52ZXJzZSxmbG9hdCBsaWdodFNpemVVVixmbG9hdCBkYXJrbmVzcyxmbG9hdCBmcnVzdHVtRWRnZUZhbGxvZmYpXG57cmV0dXJuIGNvbXB1dGVTaGFkb3dXaXRoUENTUyh2UG9zaXRpb25Gcm9tTGlnaHQsZGVwdGhNZXRyaWMsZGVwdGhTYW1wbGVyLHNoYWRvd1NhbXBsZXIsc2hhZG93TWFwU2l6ZUludmVyc2UsbGlnaHRTaXplVVYsZGFya25lc3MsZnJ1c3R1bUVkZ2VGYWxsb2ZmLDE2LDMyLFBvaXNzb25TYW1wbGVyczMyKTt9XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhQQ1NTNjQodmVjNCB2UG9zaXRpb25Gcm9tTGlnaHQsZmxvYXQgZGVwdGhNZXRyaWMsc2FtcGxlcjJEIGRlcHRoU2FtcGxlcixoaWdocCBzYW1wbGVyMkRTaGFkb3cgc2hhZG93U2FtcGxlcixmbG9hdCBzaGFkb3dNYXBTaXplSW52ZXJzZSxmbG9hdCBsaWdodFNpemVVVixmbG9hdCBkYXJrbmVzcyxmbG9hdCBmcnVzdHVtRWRnZUZhbGxvZmYpXG57cmV0dXJuIGNvbXB1dGVTaGFkb3dXaXRoUENTUyh2UG9zaXRpb25Gcm9tTGlnaHQsZGVwdGhNZXRyaWMsZGVwdGhTYW1wbGVyLHNoYWRvd1NhbXBsZXIsc2hhZG93TWFwU2l6ZUludmVyc2UsbGlnaHRTaXplVVYsZGFya25lc3MsZnJ1c3R1bUVkZ2VGYWxsb2ZmLDMyLDY0LFBvaXNzb25TYW1wbGVyczY0KTt9XG4jZGVmaW5lIGlubGluZVxuZmxvYXQgY29tcHV0ZVNoYWRvd1dpdGhDU01QQ1NTMTYoZmxvYXQgbGF5ZXIsdmVjNCB2UG9zaXRpb25Gcm9tTGlnaHQsZmxvYXQgZGVwdGhNZXRyaWMsaGlnaHAgc2FtcGxlcjJEQXJyYXkgZGVwdGhTYW1wbGVyLGhpZ2hwIHNhbXBsZXIyREFycmF5U2hhZG93IHNoYWRvd1NhbXBsZXIsZmxvYXQgc2hhZG93TWFwU2l6ZUludmVyc2UsZmxvYXQgbGlnaHRTaXplVVYsZmxvYXQgZGFya25lc3MsZmxvYXQgZnJ1c3R1bUVkZ2VGYWxsb2ZmLHZlYzIgbGlnaHRTaXplVVZDb3JyZWN0aW9uLGZsb2F0IGRlcHRoQ29ycmVjdGlvbixmbG9hdCBwZW51bWJyYURhcmtuZXNzKVxue3JldHVybiBjb21wdXRlU2hhZG93V2l0aENTTVBDU1MobGF5ZXIsdlBvc2l0aW9uRnJvbUxpZ2h0LGRlcHRoTWV0cmljLGRlcHRoU2FtcGxlcixzaGFkb3dTYW1wbGVyLHNoYWRvd01hcFNpemVJbnZlcnNlLGxpZ2h0U2l6ZVVWLGRhcmtuZXNzLGZydXN0dW1FZGdlRmFsbG9mZiwxNiwxNixQb2lzc29uU2FtcGxlcnMzMixsaWdodFNpemVVVkNvcnJlY3Rpb24sZGVwdGhDb3JyZWN0aW9uLHBlbnVtYnJhRGFya25lc3MpO31cbiNkZWZpbmUgaW5saW5lXG5mbG9hdCBjb21wdXRlU2hhZG93V2l0aENTTVBDU1MzMihmbG9hdCBsYXllcix2ZWM0IHZQb3NpdGlvbkZyb21MaWdodCxmbG9hdCBkZXB0aE1ldHJpYyxoaWdocCBzYW1wbGVyMkRBcnJheSBkZXB0aFNhbXBsZXIsaGlnaHAgc2FtcGxlcjJEQXJyYXlTaGFkb3cgc2hhZG93U2FtcGxlcixmbG9hdCBzaGFkb3dNYXBTaXplSW52ZXJzZSxmbG9hdCBsaWdodFNpemVVVixmbG9hdCBkYXJrbmVzcyxmbG9hdCBmcnVzdHVtRWRnZUZhbGxvZmYsdmVjMiBsaWdodFNpemVVVkNvcnJlY3Rpb24sZmxvYXQgZGVwdGhDb3JyZWN0aW9uLGZsb2F0IHBlbnVtYnJhRGFya25lc3MpXG57cmV0dXJuIGNvbXB1dGVTaGFkb3dXaXRoQ1NNUENTUyhsYXllcix2UG9zaXRpb25Gcm9tTGlnaHQsZGVwdGhNZXRyaWMsZGVwdGhTYW1wbGVyLHNoYWRvd1NhbXBsZXIsc2hhZG93TWFwU2l6ZUludmVyc2UsbGlnaHRTaXplVVYsZGFya25lc3MsZnJ1c3R1bUVkZ2VGYWxsb2ZmLDE2LDMyLFBvaXNzb25TYW1wbGVyczMyLGxpZ2h0U2l6ZVVWQ29ycmVjdGlvbixkZXB0aENvcnJlY3Rpb24scGVudW1icmFEYXJrbmVzcyk7fVxuI2RlZmluZSBpbmxpbmVcbmZsb2F0IGNvbXB1dGVTaGFkb3dXaXRoQ1NNUENTUzY0KGZsb2F0IGxheWVyLHZlYzQgdlBvc2l0aW9uRnJvbUxpZ2h0LGZsb2F0IGRlcHRoTWV0cmljLGhpZ2hwIHNhbXBsZXIyREFycmF5IGRlcHRoU2FtcGxlcixoaWdocCBzYW1wbGVyMkRBcnJheVNoYWRvdyBzaGFkb3dTYW1wbGVyLGZsb2F0IHNoYWRvd01hcFNpemVJbnZlcnNlLGZsb2F0IGxpZ2h0U2l6ZVVWLGZsb2F0IGRhcmtuZXNzLGZsb2F0IGZydXN0dW1FZGdlRmFsbG9mZix2ZWMyIGxpZ2h0U2l6ZVVWQ29ycmVjdGlvbixmbG9hdCBkZXB0aENvcnJlY3Rpb24sZmxvYXQgcGVudW1icmFEYXJrbmVzcylcbntyZXR1cm4gY29tcHV0ZVNoYWRvd1dpdGhDU01QQ1NTKGxheWVyLHZQb3NpdGlvbkZyb21MaWdodCxkZXB0aE1ldHJpYyxkZXB0aFNhbXBsZXIsc2hhZG93U2FtcGxlcixzaGFkb3dNYXBTaXplSW52ZXJzZSxsaWdodFNpemVVVixkYXJrbmVzcyxmcnVzdHVtRWRnZUZhbGxvZmYsMzIsNjQsUG9pc3NvblNhbXBsZXJzNjQsbGlnaHRTaXplVVZDb3JyZWN0aW9uLGRlcHRoQ29ycmVjdGlvbixwZW51bWJyYURhcmtuZXNzKTt9XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dzRnJhZ21lbnRGdW5jdGlvbnMgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==