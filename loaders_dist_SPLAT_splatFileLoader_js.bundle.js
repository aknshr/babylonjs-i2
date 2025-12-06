"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_SPLAT_splatFileLoader_js"],{

/***/ "../core/dist/Particles/cloudPoint.js":
/*!********************************************!*\
  !*** ../core/dist/Particles/cloudPoint.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudPoint: () => (/* binding */ CloudPoint),
/* harmony export */   PointsGroup: () => (/* binding */ PointsGroup)
/* harmony export */ });
/* harmony import */ var _Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Maths/math */ "../core/dist/Maths/math.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Represents one particle of a points cloud system.
 */
class CloudPoint {
    /**
     * Creates a Point Cloud object.
     * Don't create particles manually, use instead the PCS internal tools like _addParticle()
     * @param particleIndex (integer) is the particle index in the PCS pool. It's also the particle identifier.
     * @param group (PointsGroup) is the group the particle belongs to
     * @param groupId (integer) is the group identifier in the PCS.
     * @param idxInGroup (integer) is the index of the particle in the current point group (ex: the 10th point of addPoints(30))
     * @param pcs defines the PCS it is associated to
     */
    constructor(particleIndex, group, groupId, idxInGroup, pcs) {
        /**
         * particle global index
         */
        this.idx = 0;
        /**
         * The color of the particle
         */
        this.color = new _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color4(1.0, 1.0, 1.0, 1.0);
        /**
         * The world space position of the particle.
         */
        this.position = _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        /**
         * The world space rotation of the particle. (Not use if rotationQuaternion is set)
         */
        this.rotation = _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        /**
         * The uv of the particle.
         */
        this.uv = new _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector2(0.0, 0.0);
        /**
         * The current speed of the particle.
         */
        this.velocity = _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        /**
         * The pivot point in the particle local space.
         */
        this.pivot = _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        /**
         * Must the particle be translated from its pivot point in its local space ?
         * In this case, the pivot point is set at the origin of the particle local space and the particle is translated.
         * Default : false
         */
        this.translateFromPivot = false;
        /**
         * Index of this particle in the global "positions" array (Internal use)
         * @internal
         */
        this._pos = 0;
        /**
         * @internal Index of this particle in the global "indices" array (Internal use)
         */
        this._ind = 0;
        /**
         * Group id of this particle
         */
        this.groupId = 0;
        /**
         * Index of the particle in its group id (Internal use)
         */
        this.idxInGroup = 0;
        /**
         * @internal Still set as invisible in order to skip useless computations (Internal use)
         */
        this._stillInvisible = false;
        /**
         * @internal Last computed particle rotation matrix
         */
        this._rotationMatrix = [1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0];
        /**
         * Parent particle Id, if any.
         * Default null.
         */
        this.parentId = null;
        /**
         * @internal Internal global position in the PCS.
         */
        this._globalPosition = _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        this.idx = particleIndex;
        this._group = group;
        this.groupId = groupId;
        this.idxInGroup = idxInGroup;
        this._pcs = pcs;
    }
    /**
     * get point size
     */
    get size() {
        return this.size;
    }
    /**
     * Set point size
     */
    set size(scale) {
        this.size = scale;
    }
    /**
     * Legacy support, changed quaternion to rotationQuaternion
     */
    get quaternion() {
        return this.rotationQuaternion;
    }
    /**
     * Legacy support, changed quaternion to rotationQuaternion
     */
    set quaternion(q) {
        this.rotationQuaternion = q;
    }
    /**
     * Returns a boolean. True if the particle intersects a mesh, else false
     * The intersection is computed on the particle position and Axis Aligned Bounding Box (AABB) or Sphere
     * @param target is the object (point or mesh) what the intersection is computed against
     * @param isSphere is boolean flag when false (default) bounding box of mesh is used, when true the bounding sphere is used
     * @returns true if it intersects
     */
    intersectsMesh(target, isSphere) {
        if (!target.hasBoundingInfo) {
            return false;
        }
        if (!this._pcs.mesh) {
            throw new Error("Point Cloud System doesnt contain the Mesh");
        }
        if (isSphere) {
            return target.getBoundingInfo().boundingSphere.intersectsPoint(this.position.add(this._pcs.mesh.position));
        }
        const bbox = target.getBoundingInfo().boundingBox;
        const maxX = bbox.maximumWorld.x;
        const minX = bbox.minimumWorld.x;
        const maxY = bbox.maximumWorld.y;
        const minY = bbox.minimumWorld.y;
        const maxZ = bbox.maximumWorld.z;
        const minZ = bbox.minimumWorld.z;
        const x = this.position.x + this._pcs.mesh.position.x;
        const y = this.position.y + this._pcs.mesh.position.y;
        const z = this.position.z + this._pcs.mesh.position.z;
        return minX <= x && x <= maxX && minY <= y && y <= maxY && minZ <= z && z <= maxZ;
    }
    /**
     * get the rotation matrix of the particle
     * @internal
     */
    getRotationMatrix(m) {
        let quaternion;
        if (this.rotationQuaternion) {
            quaternion = this.rotationQuaternion;
        }
        else {
            quaternion = _Maths_math__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0];
            const rotation = this.rotation;
            _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRollToRef(rotation.y, rotation.x, rotation.z, quaternion);
        }
        quaternion.toRotationMatrix(m);
    }
}
/**
 * Represents a group of points in a points cloud system
 *  * PCS internal tool, don't use it manually.
 */
class PointsGroup {
    /**
     * Get or set the groupId
     * @deprecated Please use groupId instead
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    get groupID() {
        return this.groupId;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    set groupID(groupID) {
        this.groupId = groupID;
    }
    /**
     * Creates a points group object. This is an internal reference to produce particles for the PCS.
     * PCS internal tool, don't use it manually.
     * @internal
     */
    constructor(id, posFunction) {
        this.groupId = id;
        this._positionFunction = posFunction;
    }
}


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

/***/ "../core/dist/Particles/pointsCloudSystem.js":
/*!***************************************************!*\
  !*** ../core/dist/Particles/pointsCloudSystem.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointColor: () => (/* binding */ PointColor),
/* harmony export */   PointsCloudSystem: () => (/* binding */ PointsCloudSystem)
/* harmony export */ });
/* harmony import */ var _Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Maths/math */ "../core/dist/Maths/math.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var _Buffers_buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Buffers/buffer */ "../core/dist/Buffers/buffer.js");
/* harmony import */ var _Meshes_mesh_vertexData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Meshes/mesh.vertexData */ "../core/dist/Meshes/mesh.vertexData.js");
/* harmony import */ var _Meshes_mesh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Meshes/mesh */ "../core/dist/Meshes/mesh.js");
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Engines/engineStore */ "../core/dist/Engines/engineStore.js");
/* harmony import */ var _cloudPoint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cloudPoint */ "../core/dist/Particles/cloudPoint.js");
/* harmony import */ var _Culling_ray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Culling/ray */ "../core/dist/Culling/ray.js");
/* harmony import */ var _Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Materials/standardMaterial */ "../core/dist/Materials/standardMaterial.js");
/* harmony import */ var _Materials_Textures_baseTexture__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../Materials/Textures/baseTexture */ "../core/dist/Materials/Textures/baseTexture.js");
/* harmony import */ var _Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Maths/math.scalar.functions */ "../core/dist/Maths/math.scalar.functions.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");













/** Defines the 4 color options */
var PointColor;
(function (PointColor) {
    /** color value */
    PointColor[PointColor["Color"] = 2] = "Color";
    /** uv value */
    PointColor[PointColor["UV"] = 1] = "UV";
    /** random value */
    PointColor[PointColor["Random"] = 0] = "Random";
    /** stated value */
    PointColor[PointColor["Stated"] = 3] = "Stated";
})(PointColor || (PointColor = {}));
/**
 * The PointCloudSystem (PCS) is a single updatable mesh. The points corresponding to the vertices of this big mesh.
 * As it is just a mesh, the PointCloudSystem has all the same properties as any other BJS mesh : not more, not less. It can be scaled, rotated, translated, enlighted, textured, moved, etc.

 * The PointCloudSystem is also a particle system, with each point being a particle. It provides some methods to manage the particles.
 * However it is behavior agnostic. This means it has no emitter, no particle physics, no particle recycler. You have to implement your own behavior.
 *
 * Full documentation here : TO BE ENTERED
 */
class PointsCloudSystem {
    /**
     * Gets the particle positions computed by the Point Cloud System
     */
    get positions() {
        return this._positions32;
    }
    /**
     * Gets the particle colors computed by the Point Cloud System
     */
    get colors() {
        return this._colors32;
    }
    /**
     * Gets the particle uvs computed by the Point Cloud System
     */
    get uvs() {
        return this._uvs32;
    }
    /**
     * Creates a PCS (Points Cloud System) object
     * @param name (String) is the PCS name, this will be the underlying mesh name
     * @param pointSize (number) is the size for each point. Has no effect on a WebGPU engine.
     * @param scene (Scene) is the scene in which the PCS is added
     * @param options defines the options of the PCS e.g.
     * * updatable (optional boolean, default true) : if the PCS must be updatable or immutable
     */
    constructor(name, pointSize, scene, options) {
        /**
         *  The PCS array of cloud point objects. Just access each particle as with any classic array.
         *  Example : var p = SPS.particles[i];
         */
        this.particles = new Array();
        /**
         * The PCS total number of particles. Read only. Use PCS.counter instead if you need to set your own value.
         */
        this.nbParticles = 0;
        /**
         * This a counter for your own usage. It's not set by any SPS functions.
         */
        this.counter = 0;
        /**
         * This empty object is intended to store some PCS specific or temporary values in order to lower the Garbage Collector activity.
         * Please read :
         */
        this.vars = {};
        this._promises = [];
        this._positions = new Array();
        this._indices = new Array();
        this._normals = new Array();
        this._colors = new Array();
        this._uvs = new Array();
        this._updatable = true;
        this._isVisibilityBoxLocked = false;
        this._alwaysVisible = false;
        this._groups = new Array(); //start indices for each group of particles
        this._groupCounter = 0;
        this._computeParticleColor = true;
        this._computeParticleTexture = true;
        this._computeParticleRotation = true;
        this._computeBoundingBox = false;
        this._isReady = false;
        this.name = name;
        this._size = pointSize;
        this._scene = scene || _Engines_engineStore__WEBPACK_IMPORTED_MODULE_6__.EngineStore.LastCreatedScene;
        if (options && options.updatable !== undefined) {
            this._updatable = options.updatable;
        }
        else {
            this._updatable = true;
        }
    }
    /**
     * Builds the PCS underlying mesh. Returns a standard Mesh.
     * If no points were added to the PCS, the returned mesh is just a single point.
     * @param material The material to use to render the mesh. If not provided, will create a default one
     * @returns a promise for the created mesh
     */
    async buildMeshAsync(material) {
        await Promise.all(this._promises);
        this._isReady = true;
        return await this._buildMeshAsync(material);
    }
    async _buildMeshAsync(material) {
        if (this.nbParticles === 0) {
            this.addPoints(1);
        }
        this._positions32 = new Float32Array(this._positions);
        this._uvs32 = new Float32Array(this._uvs);
        this._colors32 = new Float32Array(this._colors);
        const vertexData = new _Meshes_mesh_vertexData__WEBPACK_IMPORTED_MODULE_4__.VertexData();
        vertexData.set(this._positions32, _Buffers_buffer__WEBPACK_IMPORTED_MODULE_3__.VertexBuffer.PositionKind);
        if (this._uvs32.length > 0) {
            vertexData.set(this._uvs32, _Buffers_buffer__WEBPACK_IMPORTED_MODULE_3__.VertexBuffer.UVKind);
        }
        let ec = 0; //emissive color value 0 for UVs, 1 for color
        if (this._colors32.length > 0) {
            ec = 1;
            vertexData.set(this._colors32, _Buffers_buffer__WEBPACK_IMPORTED_MODULE_3__.VertexBuffer.ColorKind);
        }
        const mesh = new _Meshes_mesh__WEBPACK_IMPORTED_MODULE_5__.Mesh(this.name, this._scene);
        vertexData.applyToMesh(mesh, this._updatable);
        this.mesh = mesh;
        // free memory
        this._positions = null;
        this._uvs = null;
        this._colors = null;
        if (!this._updatable) {
            this.particles.length = 0;
        }
        let mat = material;
        if (!mat) {
            mat = new _Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_9__.StandardMaterial("point cloud material", this._scene);
            mat.emissiveColor = new _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color3(ec, ec, ec);
            mat.disableLighting = true;
            mat.pointsCloud = true;
            mat.pointSize = this._size;
        }
        mesh.material = mat;
        return mesh;
    }
    // adds a new particle object in the particles array
    _addParticle(idx, group, groupId, idxInGroup) {
        const cp = new _cloudPoint__WEBPACK_IMPORTED_MODULE_7__.CloudPoint(idx, group, groupId, idxInGroup, this);
        this.particles.push(cp);
        return cp;
    }
    _randomUnitVector(particle) {
        particle.position = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(Math.random(), Math.random(), Math.random());
        particle.color = new _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color4(1, 1, 1, 1);
    }
    _getColorIndicesForCoord(pointsGroup, x, y, width) {
        const imageData = pointsGroup._groupImageData;
        const color = y * (width * 4) + x * 4;
        const colorIndices = [color, color + 1, color + 2, color + 3];
        const redIndex = colorIndices[0];
        const greenIndex = colorIndices[1];
        const blueIndex = colorIndices[2];
        const alphaIndex = colorIndices[3];
        const redForCoord = imageData[redIndex];
        const greenForCoord = imageData[greenIndex];
        const blueForCoord = imageData[blueIndex];
        const alphaForCoord = imageData[alphaIndex];
        return new _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color4(redForCoord / 255, greenForCoord / 255, blueForCoord / 255, alphaForCoord);
    }
    _setPointsColorOrUV(mesh, pointsGroup, isVolume, colorFromTexture, hasTexture, color, range, uvSetIndex) {
        uvSetIndex = uvSetIndex ?? 0;
        if (isVolume) {
            mesh.updateFacetData();
        }
        const boundInfo = mesh.getBoundingInfo();
        const diameter = 2 * boundInfo.boundingSphere.radius;
        let meshPos = mesh.getVerticesData(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_3__.VertexBuffer.PositionKind);
        const meshInd = mesh.getIndices();
        const meshUV = mesh.getVerticesData(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_3__.VertexBuffer.UVKind + (uvSetIndex ? uvSetIndex + 1 : ""));
        const meshCol = mesh.getVerticesData(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_3__.VertexBuffer.ColorKind);
        const place = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        mesh.computeWorldMatrix();
        const meshMatrix = mesh.getWorldMatrix();
        if (!meshMatrix.isIdentity()) {
            meshPos = meshPos.slice(0);
            for (let p = 0; p < meshPos.length / 3; p++) {
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformCoordinatesFromFloatsToRef(meshPos[3 * p], meshPos[3 * p + 1], meshPos[3 * p + 2], meshMatrix, place);
                meshPos[3 * p] = place.x;
                meshPos[3 * p + 1] = place.y;
                meshPos[3 * p + 2] = place.z;
            }
        }
        let idxPoints = 0;
        let id0 = 0;
        let id1 = 0;
        let id2 = 0;
        let v0X = 0;
        let v0Y = 0;
        let v0Z = 0;
        let v1X = 0;
        let v1Y = 0;
        let v1Z = 0;
        let v2X = 0;
        let v2Y = 0;
        let v2Z = 0;
        const vertex0 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        const vertex1 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        const vertex2 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        const vec0 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        const vec1 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        let uv0X = 0;
        let uv0Y = 0;
        let uv1X = 0;
        let uv1Y = 0;
        let uv2X = 0;
        let uv2Y = 0;
        const uv0 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2.Zero();
        const uv1 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2.Zero();
        const uv2 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2.Zero();
        const uvec0 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2.Zero();
        const uvec1 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2.Zero();
        let col0X = 0;
        let col0Y = 0;
        let col0Z = 0;
        let col0A = 0;
        let col1X = 0;
        let col1Y = 0;
        let col1Z = 0;
        let col1A = 0;
        let col2X = 0;
        let col2Y = 0;
        let col2Z = 0;
        let col2A = 0;
        const col0 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.Zero();
        const col1 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.Zero();
        const col2 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.Zero();
        const colvec0 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.Zero();
        const colvec1 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.Zero();
        let lamda = 0;
        let mu = 0;
        range = range ? range : 0;
        let facetPoint;
        let uvPoint;
        let colPoint = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4(0, 0, 0, 0);
        let norm = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        let tang = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        let biNorm = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        let angle = 0;
        let facetPlaneVec = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        let gap = 0;
        let distance = 0;
        const ray = new _Culling_ray__WEBPACK_IMPORTED_MODULE_8__.Ray(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 0, 0));
        let pickInfo;
        let direction = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        for (let index = 0; index < meshInd.length / 3; index++) {
            id0 = meshInd[3 * index];
            id1 = meshInd[3 * index + 1];
            id2 = meshInd[3 * index + 2];
            v0X = meshPos[3 * id0];
            v0Y = meshPos[3 * id0 + 1];
            v0Z = meshPos[3 * id0 + 2];
            v1X = meshPos[3 * id1];
            v1Y = meshPos[3 * id1 + 1];
            v1Z = meshPos[3 * id1 + 2];
            v2X = meshPos[3 * id2];
            v2Y = meshPos[3 * id2 + 1];
            v2Z = meshPos[3 * id2 + 2];
            vertex0.set(v0X, v0Y, v0Z);
            vertex1.set(v1X, v1Y, v1Z);
            vertex2.set(v2X, v2Y, v2Z);
            vertex1.subtractToRef(vertex0, vec0);
            vertex2.subtractToRef(vertex1, vec1);
            if (meshUV) {
                uv0X = meshUV[2 * id0];
                uv0Y = meshUV[2 * id0 + 1];
                uv1X = meshUV[2 * id1];
                uv1Y = meshUV[2 * id1 + 1];
                uv2X = meshUV[2 * id2];
                uv2Y = meshUV[2 * id2 + 1];
                uv0.set(uv0X, uv0Y);
                uv1.set(uv1X, uv1Y);
                uv2.set(uv2X, uv2Y);
                uv1.subtractToRef(uv0, uvec0);
                uv2.subtractToRef(uv1, uvec1);
            }
            if (meshCol && colorFromTexture) {
                col0X = meshCol[4 * id0];
                col0Y = meshCol[4 * id0 + 1];
                col0Z = meshCol[4 * id0 + 2];
                col0A = meshCol[4 * id0 + 3];
                col1X = meshCol[4 * id1];
                col1Y = meshCol[4 * id1 + 1];
                col1Z = meshCol[4 * id1 + 2];
                col1A = meshCol[4 * id1 + 3];
                col2X = meshCol[4 * id2];
                col2Y = meshCol[4 * id2 + 1];
                col2Z = meshCol[4 * id2 + 2];
                col2A = meshCol[4 * id2 + 3];
                col0.set(col0X, col0Y, col0Z, col0A);
                col1.set(col1X, col1Y, col1Z, col1A);
                col2.set(col2X, col2Y, col2Z, col2A);
                col1.subtractToRef(col0, colvec0);
                col2.subtractToRef(col1, colvec1);
            }
            let width;
            let height;
            let deltaS;
            let deltaV;
            let h;
            let s;
            let v;
            let hsvCol;
            const statedColor = new _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color3(0, 0, 0);
            const colPoint3 = new _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color3(0, 0, 0);
            let pointColors;
            let particle;
            for (let i = 0; i < pointsGroup._groupDensity[index]; i++) {
                idxPoints = this.particles.length;
                this._addParticle(idxPoints, pointsGroup, this._groupCounter, index + i);
                particle = this.particles[idxPoints];
                //form a point inside the facet v0, v1, v2;
                lamda = Math.sqrt((0,_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_11__.RandomRange)(0, 1));
                mu = (0,_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_11__.RandomRange)(0, 1);
                facetPoint = vertex0.add(vec0.scale(lamda)).add(vec1.scale(lamda * mu));
                if (isVolume) {
                    norm = mesh.getFacetNormal(index).normalize().scale(-1);
                    tang = vec0.clone().normalize();
                    biNorm = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Cross(norm, tang);
                    angle = (0,_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_11__.RandomRange)(0, 2 * Math.PI);
                    facetPlaneVec = tang.scale(Math.cos(angle)).add(biNorm.scale(Math.sin(angle)));
                    angle = (0,_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_11__.RandomRange)(0.1, Math.PI / 2);
                    direction = facetPlaneVec.scale(Math.cos(angle)).add(norm.scale(Math.sin(angle)));
                    ray.origin = facetPoint.add(direction.scale(0.00001));
                    ray.direction = direction;
                    ray.length = diameter;
                    pickInfo = ray.intersectsMesh(mesh);
                    if (pickInfo.hit) {
                        distance = pickInfo.pickedPoint.subtract(facetPoint).length();
                        gap = (0,_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_11__.RandomRange)(0, 1) * distance;
                        facetPoint.addInPlace(direction.scale(gap));
                    }
                }
                particle.position = facetPoint.clone();
                this._positions.push(particle.position.x, particle.position.y, particle.position.z);
                if (colorFromTexture !== undefined) {
                    if (meshUV) {
                        uvPoint = uv0.add(uvec0.scale(lamda)).add(uvec1.scale(lamda * mu));
                        if (colorFromTexture) {
                            //Set particle color to texture color
                            if (hasTexture && pointsGroup._groupImageData !== null) {
                                width = pointsGroup._groupImgWidth;
                                height = pointsGroup._groupImgHeight;
                                pointColors = this._getColorIndicesForCoord(pointsGroup, Math.round(uvPoint.x * width), Math.round(uvPoint.y * height), width);
                                particle.color = pointColors;
                                this._colors.push(pointColors.r, pointColors.g, pointColors.b, pointColors.a);
                            }
                            else {
                                if (meshCol) {
                                    //failure in texture and colors available
                                    colPoint = col0.add(colvec0.scale(lamda)).add(colvec1.scale(lamda * mu));
                                    particle.color = new _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color4(colPoint.x, colPoint.y, colPoint.z, colPoint.w);
                                    this._colors.push(colPoint.x, colPoint.y, colPoint.z, colPoint.w);
                                }
                                else {
                                    colPoint = col0.set(Math.random(), Math.random(), Math.random(), 1);
                                    particle.color = new _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color4(colPoint.x, colPoint.y, colPoint.z, colPoint.w);
                                    this._colors.push(colPoint.x, colPoint.y, colPoint.z, colPoint.w);
                                }
                            }
                        }
                        else {
                            //Set particle uv based on a mesh uv
                            particle.uv = uvPoint.clone();
                            this._uvs.push(particle.uv.x, particle.uv.y);
                        }
                    }
                }
                else {
                    if (color) {
                        statedColor.set(color.r, color.g, color.b);
                        deltaS = (0,_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_11__.RandomRange)(-range, range);
                        deltaV = (0,_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_11__.RandomRange)(-range, range);
                        hsvCol = statedColor.toHSV();
                        h = hsvCol.r;
                        s = hsvCol.g + deltaS;
                        v = hsvCol.b + deltaV;
                        if (s < 0) {
                            s = 0;
                        }
                        if (s > 1) {
                            s = 1;
                        }
                        if (v < 0) {
                            v = 0;
                        }
                        if (v > 1) {
                            v = 1;
                        }
                        _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color3.HSVtoRGBToRef(h, s, v, colPoint3);
                        colPoint.set(colPoint3.r, colPoint3.g, colPoint3.b, 1);
                    }
                    else {
                        colPoint = col0.set(Math.random(), Math.random(), Math.random(), 1);
                    }
                    particle.color = new _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color4(colPoint.x, colPoint.y, colPoint.z, colPoint.w);
                    this._colors.push(colPoint.x, colPoint.y, colPoint.z, colPoint.w);
                }
            }
        }
    }
    // stores mesh texture in dynamic texture for color pixel retrieval
    // when pointColor type is color for surface points
    _colorFromTexture(mesh, pointsGroup, isVolume) {
        if (mesh.material === null) {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Warn(mesh.name + "has no material.");
            pointsGroup._groupImageData = null;
            this._setPointsColorOrUV(mesh, pointsGroup, isVolume, true, false);
            return;
        }
        const mat = mesh.material;
        const textureList = mat.getActiveTextures();
        if (textureList.length === 0) {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Warn(mesh.name + "has no usable texture.");
            pointsGroup._groupImageData = null;
            this._setPointsColorOrUV(mesh, pointsGroup, isVolume, true, false);
            return;
        }
        const clone = mesh.clone();
        clone.setEnabled(false);
        this._promises.push(new Promise((resolve) => {
            _Materials_Textures_baseTexture__WEBPACK_IMPORTED_MODULE_10__.BaseTexture.WhenAllReady(textureList, () => {
                let n = pointsGroup._textureNb;
                if (n < 0) {
                    n = 0;
                }
                if (n > textureList.length - 1) {
                    n = textureList.length - 1;
                }
                const finalize = () => {
                    pointsGroup._groupImgWidth = textureList[n].getSize().width;
                    pointsGroup._groupImgHeight = textureList[n].getSize().height;
                    this._setPointsColorOrUV(clone, pointsGroup, isVolume, true, true, undefined, undefined, textureList[n].coordinatesIndex);
                    clone.dispose();
                    resolve();
                };
                pointsGroup._groupImageData = null;
                const dataPromise = textureList[n].readPixels();
                if (!dataPromise) {
                    finalize();
                }
                else {
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
                    dataPromise.then((data) => {
                        pointsGroup._groupImageData = data;
                        finalize();
                    });
                }
            });
        }));
    }
    // calculates the point density per facet of a mesh for surface points
    _calculateDensity(nbPoints, positions, indices) {
        let id0;
        let id1;
        let id2;
        let v0X;
        let v0Y;
        let v0Z;
        let v1X;
        let v1Y;
        let v1Z;
        let v2X;
        let v2Y;
        let v2Z;
        const vertex0 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        const vertex1 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        const vertex2 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        const vec0 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        const vec1 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        const normal = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        let area;
        const cumulativeAreas = [];
        let surfaceArea = 0;
        const nbFacets = indices.length / 3;
        //surface area
        for (let index = 0; index < nbFacets; index++) {
            id0 = indices[3 * index];
            id1 = indices[3 * index + 1];
            id2 = indices[3 * index + 2];
            v0X = positions[3 * id0];
            v0Y = positions[3 * id0 + 1];
            v0Z = positions[3 * id0 + 2];
            v1X = positions[3 * id1];
            v1Y = positions[3 * id1 + 1];
            v1Z = positions[3 * id1 + 2];
            v2X = positions[3 * id2];
            v2Y = positions[3 * id2 + 1];
            v2Z = positions[3 * id2 + 2];
            vertex0.set(v0X, v0Y, v0Z);
            vertex1.set(v1X, v1Y, v1Z);
            vertex2.set(v2X, v2Y, v2Z);
            vertex1.subtractToRef(vertex0, vec0);
            vertex2.subtractToRef(vertex1, vec1);
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.CrossToRef(vec0, vec1, normal);
            area = 0.5 * normal.length();
            surfaceArea += area;
            cumulativeAreas[index] = surfaceArea;
        }
        const density = new Array(nbFacets);
        let remainingPoints = nbPoints;
        for (let index = nbFacets - 1; index > 0; index--) {
            const cumulativeArea = cumulativeAreas[index];
            if (cumulativeArea === 0) {
                // avoiding division by 0 upon degenerate triangles
                density[index] = 0;
            }
            else {
                const area = cumulativeArea - cumulativeAreas[index - 1];
                const facetPointsWithFraction = (area / cumulativeArea) * remainingPoints;
                const floored = Math.floor(facetPointsWithFraction);
                const fraction = facetPointsWithFraction - floored;
                const extraPoint = Number(Math.random() < fraction);
                const facetPoints = floored + extraPoint;
                density[index] = facetPoints;
                remainingPoints -= facetPoints;
            }
        }
        density[0] = remainingPoints;
        return density;
    }
    /**
     * Adds points to the PCS in random positions within a unit sphere
     * @param nb (positive integer) the number of particles to be created from this model
     * @param pointFunction is an optional javascript function to be called for each particle on PCS creation
     * @returns the number of groups in the system
     */
    addPoints(nb, pointFunction = this._randomUnitVector) {
        const pointsGroup = new _cloudPoint__WEBPACK_IMPORTED_MODULE_7__.PointsGroup(this._groupCounter, pointFunction);
        let cp;
        // particles
        let idx = this.nbParticles;
        for (let i = 0; i < nb; i++) {
            cp = this._addParticle(idx, pointsGroup, this._groupCounter, i);
            if (pointsGroup && pointsGroup._positionFunction) {
                pointsGroup._positionFunction(cp, idx, i);
            }
            this._positions.push(cp.position.x, cp.position.y, cp.position.z);
            if (cp.color) {
                this._colors.push(cp.color.r, cp.color.g, cp.color.b, cp.color.a);
            }
            if (cp.uv) {
                this._uvs.push(cp.uv.x, cp.uv.y);
            }
            idx++;
        }
        this.nbParticles += nb;
        this._groupCounter++;
        return this._groupCounter;
    }
    /**
     * Adds points to the PCS from the surface of the model shape
     * @param mesh is any Mesh object that will be used as a surface model for the points
     * @param nb (positive integer) the number of particles to be created from this model
     * @param colorWith determines whether a point is colored using color (default), uv, random, stated or none (invisible)
     * @param color (color4) to be used when colorWith is stated or color (number) when used to specify texture position
     * @param range (number from 0 to 1) to determine the variation in shape and tone for a stated color
     * @returns the number of groups in the system
     */
    addSurfacePoints(mesh, nb, colorWith, color, range) {
        let colored = colorWith ? colorWith : 0 /* PointColor.Random */;
        if (isNaN(colored) || colored < 0 || colored > 3) {
            colored = 0 /* PointColor.Random */;
        }
        const meshPos = mesh.getVerticesData(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_3__.VertexBuffer.PositionKind);
        const meshInd = mesh.getIndices();
        this._groups.push(this._groupCounter);
        const pointsGroup = new _cloudPoint__WEBPACK_IMPORTED_MODULE_7__.PointsGroup(this._groupCounter, null);
        pointsGroup._groupDensity = this._calculateDensity(nb, meshPos, meshInd);
        if (colored === 2 /* PointColor.Color */) {
            pointsGroup._textureNb = color ? color : 0;
        }
        else {
            color = color ? color : new _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color4(1, 1, 1, 1);
        }
        switch (colored) {
            case 2 /* PointColor.Color */:
                this._colorFromTexture(mesh, pointsGroup, false);
                break;
            case 1 /* PointColor.UV */:
                this._setPointsColorOrUV(mesh, pointsGroup, false, false, false);
                break;
            case 0 /* PointColor.Random */:
                this._setPointsColorOrUV(mesh, pointsGroup, false);
                break;
            case 3 /* PointColor.Stated */:
                this._setPointsColorOrUV(mesh, pointsGroup, false, undefined, undefined, color, range);
                break;
        }
        this.nbParticles += nb;
        this._groupCounter++;
        return this._groupCounter - 1;
    }
    /**
     * Adds points to the PCS inside the model shape
     * @param mesh is any Mesh object that will be used as a surface model for the points
     * @param nb (positive integer) the number of particles to be created from this model
     * @param colorWith determines whether a point is colored using color (default), uv, random, stated or none (invisible)
     * @param color (color4) to be used when colorWith is stated or color (number) when used to specify texture position
     * @param range (number from 0 to 1) to determine the variation in shape and tone for a stated color
     * @returns the number of groups in the system
     */
    addVolumePoints(mesh, nb, colorWith, color, range) {
        let colored = colorWith ? colorWith : 0 /* PointColor.Random */;
        if (isNaN(colored) || colored < 0 || colored > 3) {
            colored = 0 /* PointColor.Random */;
        }
        const meshPos = mesh.getVerticesData(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_3__.VertexBuffer.PositionKind);
        const meshInd = mesh.getIndices();
        this._groups.push(this._groupCounter);
        const pointsGroup = new _cloudPoint__WEBPACK_IMPORTED_MODULE_7__.PointsGroup(this._groupCounter, null);
        pointsGroup._groupDensity = this._calculateDensity(nb, meshPos, meshInd);
        if (colored === 2 /* PointColor.Color */) {
            pointsGroup._textureNb = color ? color : 0;
        }
        else {
            color = color ? color : new _Maths_math__WEBPACK_IMPORTED_MODULE_0__.Color4(1, 1, 1, 1);
        }
        switch (colored) {
            case 2 /* PointColor.Color */:
                this._colorFromTexture(mesh, pointsGroup, true);
                break;
            case 1 /* PointColor.UV */:
                this._setPointsColorOrUV(mesh, pointsGroup, true, false, false);
                break;
            case 0 /* PointColor.Random */:
                this._setPointsColorOrUV(mesh, pointsGroup, true);
                break;
            case 3 /* PointColor.Stated */:
                this._setPointsColorOrUV(mesh, pointsGroup, true, undefined, undefined, color, range);
                break;
        }
        this.nbParticles += nb;
        this._groupCounter++;
        return this._groupCounter - 1;
    }
    /**
     *  Sets all the particles : this method actually really updates the mesh according to the particle positions, rotations, colors, textures, etc.
     *  This method calls `updateParticle()` for each particle of the SPS.
     *  For an animated SPS, it is usually called within the render loop.
     * @param start The particle index in the particle array where to start to compute the particle property values _(default 0)_
     * @param end The particle index in the particle array where to stop to compute the particle property values _(default nbParticle - 1)_
     * @param update If the mesh must be finally updated on this call after all the particle computations _(default true)_
     * @returns the PCS.
     */
    setParticles(start = 0, end = this.nbParticles - 1, update = true) {
        if (!this._updatable || !this._isReady) {
            return this;
        }
        // custom beforeUpdate
        this.beforeUpdateParticles(start, end, update);
        const rotMatrix = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Matrix[0];
        const mesh = this.mesh;
        const colors32 = this._colors32;
        const positions32 = this._positions32;
        const uvs32 = this._uvs32;
        const tempVectors = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3;
        const camAxisX = tempVectors[5].copyFromFloats(1.0, 0.0, 0.0);
        const camAxisY = tempVectors[6].copyFromFloats(0.0, 1.0, 0.0);
        const camAxisZ = tempVectors[7].copyFromFloats(0.0, 0.0, 1.0);
        const minimum = tempVectors[8].setAll(Number.MAX_VALUE);
        const maximum = tempVectors[9].setAll(-Number.MAX_VALUE);
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.IdentityToRef(rotMatrix);
        let idx = 0; // current index of the particle
        if (this.mesh?.isFacetDataEnabled) {
            this._computeBoundingBox = true;
        }
        end = end >= this.nbParticles ? this.nbParticles - 1 : end;
        if (this._computeBoundingBox) {
            if (start != 0 || end != this.nbParticles - 1) {
                // only some particles are updated, then use the current existing BBox basis. Note : it can only increase.
                const boundingInfo = this.mesh?.getBoundingInfo();
                if (boundingInfo) {
                    minimum.copyFrom(boundingInfo.minimum);
                    maximum.copyFrom(boundingInfo.maximum);
                }
            }
        }
        idx = 0; // particle index
        let pindex = 0; //index in positions array
        let cindex = 0; //index in color array
        let uindex = 0; //index in uv array
        // particle loop
        for (let p = start; p <= end; p++) {
            const particle = this.particles[p];
            idx = particle.idx;
            pindex = 3 * idx;
            cindex = 4 * idx;
            uindex = 2 * idx;
            // call to custom user function to update the particle properties
            this.updateParticle(particle);
            const particleRotationMatrix = particle._rotationMatrix;
            const particlePosition = particle.position;
            const particleGlobalPosition = particle._globalPosition;
            if (this._computeParticleRotation) {
                particle.getRotationMatrix(rotMatrix);
            }
            const particleHasParent = particle.parentId !== null;
            if (particleHasParent) {
                const parent = this.particles[particle.parentId];
                const parentRotationMatrix = parent._rotationMatrix;
                const parentGlobalPosition = parent._globalPosition;
                const rotatedY = particlePosition.x * parentRotationMatrix[1] + particlePosition.y * parentRotationMatrix[4] + particlePosition.z * parentRotationMatrix[7];
                const rotatedX = particlePosition.x * parentRotationMatrix[0] + particlePosition.y * parentRotationMatrix[3] + particlePosition.z * parentRotationMatrix[6];
                const rotatedZ = particlePosition.x * parentRotationMatrix[2] + particlePosition.y * parentRotationMatrix[5] + particlePosition.z * parentRotationMatrix[8];
                particleGlobalPosition.x = parentGlobalPosition.x + rotatedX;
                particleGlobalPosition.y = parentGlobalPosition.y + rotatedY;
                particleGlobalPosition.z = parentGlobalPosition.z + rotatedZ;
                if (this._computeParticleRotation) {
                    const rotMatrixValues = rotMatrix.m;
                    particleRotationMatrix[0] =
                        rotMatrixValues[0] * parentRotationMatrix[0] + rotMatrixValues[1] * parentRotationMatrix[3] + rotMatrixValues[2] * parentRotationMatrix[6];
                    particleRotationMatrix[1] =
                        rotMatrixValues[0] * parentRotationMatrix[1] + rotMatrixValues[1] * parentRotationMatrix[4] + rotMatrixValues[2] * parentRotationMatrix[7];
                    particleRotationMatrix[2] =
                        rotMatrixValues[0] * parentRotationMatrix[2] + rotMatrixValues[1] * parentRotationMatrix[5] + rotMatrixValues[2] * parentRotationMatrix[8];
                    particleRotationMatrix[3] =
                        rotMatrixValues[4] * parentRotationMatrix[0] + rotMatrixValues[5] * parentRotationMatrix[3] + rotMatrixValues[6] * parentRotationMatrix[6];
                    particleRotationMatrix[4] =
                        rotMatrixValues[4] * parentRotationMatrix[1] + rotMatrixValues[5] * parentRotationMatrix[4] + rotMatrixValues[6] * parentRotationMatrix[7];
                    particleRotationMatrix[5] =
                        rotMatrixValues[4] * parentRotationMatrix[2] + rotMatrixValues[5] * parentRotationMatrix[5] + rotMatrixValues[6] * parentRotationMatrix[8];
                    particleRotationMatrix[6] =
                        rotMatrixValues[8] * parentRotationMatrix[0] + rotMatrixValues[9] * parentRotationMatrix[3] + rotMatrixValues[10] * parentRotationMatrix[6];
                    particleRotationMatrix[7] =
                        rotMatrixValues[8] * parentRotationMatrix[1] + rotMatrixValues[9] * parentRotationMatrix[4] + rotMatrixValues[10] * parentRotationMatrix[7];
                    particleRotationMatrix[8] =
                        rotMatrixValues[8] * parentRotationMatrix[2] + rotMatrixValues[9] * parentRotationMatrix[5] + rotMatrixValues[10] * parentRotationMatrix[8];
                }
            }
            else {
                particleGlobalPosition.x = 0;
                particleGlobalPosition.y = 0;
                particleGlobalPosition.z = 0;
                if (this._computeParticleRotation) {
                    const rotMatrixValues = rotMatrix.m;
                    particleRotationMatrix[0] = rotMatrixValues[0];
                    particleRotationMatrix[1] = rotMatrixValues[1];
                    particleRotationMatrix[2] = rotMatrixValues[2];
                    particleRotationMatrix[3] = rotMatrixValues[4];
                    particleRotationMatrix[4] = rotMatrixValues[5];
                    particleRotationMatrix[5] = rotMatrixValues[6];
                    particleRotationMatrix[6] = rotMatrixValues[8];
                    particleRotationMatrix[7] = rotMatrixValues[9];
                    particleRotationMatrix[8] = rotMatrixValues[10];
                }
            }
            const pivotBackTranslation = tempVectors[11];
            if (particle.translateFromPivot) {
                pivotBackTranslation.setAll(0.0);
            }
            else {
                pivotBackTranslation.copyFrom(particle.pivot);
            }
            // positions
            const tmpVertex = tempVectors[0];
            tmpVertex.copyFrom(particle.position);
            const vertexX = tmpVertex.x - particle.pivot.x;
            const vertexY = tmpVertex.y - particle.pivot.y;
            const vertexZ = tmpVertex.z - particle.pivot.z;
            let rotatedX = vertexX * particleRotationMatrix[0] + vertexY * particleRotationMatrix[3] + vertexZ * particleRotationMatrix[6];
            let rotatedY = vertexX * particleRotationMatrix[1] + vertexY * particleRotationMatrix[4] + vertexZ * particleRotationMatrix[7];
            let rotatedZ = vertexX * particleRotationMatrix[2] + vertexY * particleRotationMatrix[5] + vertexZ * particleRotationMatrix[8];
            rotatedX += pivotBackTranslation.x;
            rotatedY += pivotBackTranslation.y;
            rotatedZ += pivotBackTranslation.z;
            const px = (positions32[pindex] = particleGlobalPosition.x + camAxisX.x * rotatedX + camAxisY.x * rotatedY + camAxisZ.x * rotatedZ);
            const py = (positions32[pindex + 1] = particleGlobalPosition.y + camAxisX.y * rotatedX + camAxisY.y * rotatedY + camAxisZ.y * rotatedZ);
            const pz = (positions32[pindex + 2] = particleGlobalPosition.z + camAxisX.z * rotatedX + camAxisY.z * rotatedY + camAxisZ.z * rotatedZ);
            if (this._computeBoundingBox) {
                minimum.minimizeInPlaceFromFloats(px, py, pz);
                maximum.maximizeInPlaceFromFloats(px, py, pz);
            }
            if (this._computeParticleColor && particle.color) {
                const color = particle.color;
                const colors32 = this._colors32;
                colors32[cindex] = color.r;
                colors32[cindex + 1] = color.g;
                colors32[cindex + 2] = color.b;
                colors32[cindex + 3] = color.a;
            }
            if (this._computeParticleTexture && particle.uv) {
                const uv = particle.uv;
                const uvs32 = this._uvs32;
                uvs32[uindex] = uv.x;
                uvs32[uindex + 1] = uv.y;
            }
        }
        // if the VBO must be updated
        if (mesh) {
            if (update) {
                if (this._computeParticleColor) {
                    mesh.updateVerticesData(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_3__.VertexBuffer.ColorKind, colors32, false, false);
                }
                if (this._computeParticleTexture) {
                    mesh.updateVerticesData(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_3__.VertexBuffer.UVKind, uvs32, false, false);
                }
                mesh.updateVerticesData(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_3__.VertexBuffer.PositionKind, positions32, false, false);
            }
            if (this._computeBoundingBox) {
                if (mesh.hasBoundingInfo) {
                    mesh.getBoundingInfo().reConstruct(minimum, maximum, mesh._worldMatrix);
                }
                else {
                    mesh.buildBoundingInfo(minimum, maximum, mesh._worldMatrix);
                }
            }
        }
        this.afterUpdateParticles(start, end, update);
        return this;
    }
    /**
     * Disposes the PCS.
     */
    dispose() {
        this.mesh?.dispose();
        this.vars = null;
        // drop references to internal big arrays for the GC
        this._positions = null;
        this._indices = null;
        this._normals = null;
        this._uvs = null;
        this._colors = null;
        this._indices32 = null;
        this._positions32 = null;
        this._uvs32 = null;
        this._colors32 = null;
    }
    /**
     * Visibility helper : Recomputes the visible size according to the mesh bounding box
     * doc :
     * @returns the PCS.
     */
    refreshVisibleSize() {
        if (!this._isVisibilityBoxLocked) {
            this.mesh?.refreshBoundingInfo();
        }
        return this;
    }
    /**
     * Visibility helper : Sets the size of a visibility box, this sets the underlying mesh bounding box.
     * @param size the size (float) of the visibility box
     * note : this doesn't lock the PCS mesh bounding box.
     * doc :
     */
    setVisibilityBox(size) {
        if (!this.mesh) {
            return;
        }
        const vis = size / 2;
        this.mesh.buildBoundingInfo(new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(-vis, -vis, -vis), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(vis, vis, vis));
    }
    /**
     * Gets whether the PCS is always visible or not
     * doc :
     */
    get isAlwaysVisible() {
        return this._alwaysVisible;
    }
    /**
     * Sets the PCS as always visible or not
     * doc :
     */
    set isAlwaysVisible(val) {
        if (!this.mesh) {
            return;
        }
        this._alwaysVisible = val;
        this.mesh.alwaysSelectAsActiveMesh = val;
    }
    /**
     * Tells to `setParticles()` to compute the particle rotations or not
     * Default value : false. The PCS is faster when it's set to false
     * Note : particle rotations are only applied to parent particles
     * Note : the particle rotations aren't stored values, so setting `computeParticleRotation` to false will prevents the particle to rotate
     */
    set computeParticleRotation(val) {
        this._computeParticleRotation = val;
    }
    /**
     * Tells to `setParticles()` to compute the particle colors or not.
     * Default value : true. The PCS is faster when it's set to false.
     * Note : the particle colors are stored values, so setting `computeParticleColor` to false will keep yet the last colors set.
     */
    set computeParticleColor(val) {
        this._computeParticleColor = val;
    }
    set computeParticleTexture(val) {
        this._computeParticleTexture = val;
    }
    /**
     * Gets if `setParticles()` computes the particle colors or not.
     * Default value : false. The PCS is faster when it's set to false.
     * Note : the particle colors are stored values, so setting `computeParticleColor` to false will keep yet the last colors set.
     */
    get computeParticleColor() {
        return this._computeParticleColor;
    }
    /**
     * Gets if `setParticles()` computes the particle textures or not.
     * Default value : false. The PCS is faster when it's set to false.
     * Note : the particle textures are stored values, so setting `computeParticleTexture` to false will keep yet the last colors set.
     */
    get computeParticleTexture() {
        return this._computeParticleTexture;
    }
    /**
     * Tells to `setParticles()` to compute or not the mesh bounding box when computing the particle positions.
     */
    set computeBoundingBox(val) {
        this._computeBoundingBox = val;
    }
    /**
     * Gets if `setParticles()` computes or not the mesh bounding box when computing the particle positions.
     */
    get computeBoundingBox() {
        return this._computeBoundingBox;
    }
    // =======================================================================
    // Particle behavior logic
    // these following methods may be overwritten by users to fit their needs
    /**
     * This function does nothing. It may be overwritten to set all the particle first values.
     * The PCS doesn't call this function, you may have to call it by your own.
     * doc :
     */
    initParticles() { }
    /**
     * This function does nothing. It may be overwritten to recycle a particle
     * The PCS doesn't call this function, you can to call it
     * doc :
     * @param particle The particle to recycle
     * @returns the recycled particle
     */
    recycleParticle(particle) {
        return particle;
    }
    /**
     * Updates a particle : this function should  be overwritten by the user.
     * It is called on each particle by `setParticles()`. This is the place to code each particle behavior.
     * doc :
     * @example : just set a particle position or velocity and recycle conditions
     * @param particle The particle to update
     * @returns the updated particle
     */
    updateParticle(particle) {
        return particle;
    }
    /**
     * This will be called before any other treatment by `setParticles()` and will be passed three parameters.
     * This does nothing and may be overwritten by the user.
     * @param start the particle index in the particle array where to start to iterate, same than the value passed to setParticle()
     * @param stop the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
     * @param update the boolean update value actually passed to setParticles()
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    beforeUpdateParticles(start, stop, update) { }
    /**
     * This will be called  by `setParticles()` after all the other treatments and just before the actual mesh update.
     * This will be passed three parameters.
     * This does nothing and may be overwritten by the user.
     * @param start the particle index in the particle array where to start to iterate, same than the value passed to setParticle()
     * @param stop the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
     * @param update the boolean update value actually passed to setParticles()
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    afterUpdateParticles(start, stop, update) { }
}


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

/***/ "../loaders/dist/SPLAT/sog.js":
/*!************************************!*\
  !*** ../loaders/dist/SPLAT/sog.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParseSogMeta: () => (/* binding */ ParseSogMeta)
/* harmony export */ });
/* harmony import */ var core_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.scalar */ "../core/dist/Maths/math.scalar.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


const SH_C0 = 0.28209479177387814;
async function LoadWebpImageData(rootUrlOrData, filename, engine) {
    const promise = new Promise((resolve, reject) => {
        const image = engine.createCanvasImage();
        if (!image) {
            throw new Error("Failed to create ImageBitmap");
        }
        image.onload = () => {
            try {
                // Draw to canvas
                const canvas = engine.createCanvas(image.width, image.height);
                if (!canvas) {
                    throw new Error("Failed to create canvas");
                }
                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    throw new Error("Failed to get 2D context");
                }
                ctx.drawImage(image, 0, 0);
                // Extract pixel data (RGBA per pixel)
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                resolve({ bits: new Uint8Array(imageData.data.buffer), width: imageData.width });
            }
            catch (error) {
                // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                reject(`Error loading image ${image.src} with exception: ${error}`);
            }
        };
        image.onerror = (error) => {
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            reject(`Error loading image ${image.src} with exception: ${error}`);
        };
        image.crossOrigin = "anonymous"; // To avoid CORS issues
        let objectUrl;
        if (typeof rootUrlOrData === "string") {
            // old behavior: URL + filename
            if (!filename) {
                throw new Error("filename is required when using a URL");
            }
            image.src = rootUrlOrData + filename;
        }
        else {
            // new behavior: Uint8Array
            const blob = new Blob([rootUrlOrData], { type: "image/webp" });
            objectUrl = URL.createObjectURL(blob);
            image.src = objectUrl;
        }
    });
    return await promise;
}
async function ParseSogDatas(data, imageDataArrays, scene) {
    const splatCount = data.count ? data.count : data.means.shape[0];
    const rowOutputLength = 3 * 4 + 3 * 4 + 4 + 4; // 32
    const buffer = new ArrayBuffer(rowOutputLength * splatCount);
    const position = new Float32Array(buffer);
    const scale = new Float32Array(buffer);
    const rgba = new Uint8ClampedArray(buffer);
    const rot = new Uint8ClampedArray(buffer);
    // Undo the symmetric log transform used at encode time:
    const unlog = (n) => Math.sign(n) * (Math.exp(Math.abs(n)) - 1);
    const meansl = imageDataArrays[0].bits;
    const meansu = imageDataArrays[1].bits;
    // Check that data.means.mins is an array
    if (!Array.isArray(data.means.mins) || !Array.isArray(data.means.maxs)) {
        throw new Error("Missing arrays in SOG data.");
    }
    // --- Positions
    for (let i = 0; i < splatCount; i++) {
        const index = i * 4;
        for (let j = 0; j < 3; j++) {
            const meansMin = data.means.mins[j];
            const meansMax = data.means.maxs[j];
            const meansup = meansu[index + j];
            const meanslow = meansl[index + j];
            const q = (meansup << 8) | meanslow;
            const n = core_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__.Scalar.Lerp(meansMin, meansMax, q / 65535);
            position[i * 8 + j] = unlog(n);
        }
    }
    // --- Scales
    const scales = imageDataArrays[2].bits;
    if (data.version === 2) {
        if (!data.scales.codebook) {
            throw new Error("Missing codebook in SOG version 2 scales data.");
        }
        for (let i = 0; i < splatCount; i++) {
            const index = i * 4;
            for (let j = 0; j < 3; j++) {
                const sc = data.scales.codebook[scales[index + j]];
                const sce = Math.exp(sc);
                scale[i * 8 + 3 + j] = sce;
            }
        }
    }
    else {
        if (!Array.isArray(data.scales.mins) || !Array.isArray(data.scales.maxs)) {
            throw new Error("Missing arrays in SOG scales data.");
        }
        for (let i = 0; i < splatCount; i++) {
            const index = i * 4;
            for (let j = 0; j < 3; j++) {
                const sc = scales[index + j];
                const lsc = core_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__.Scalar.Lerp(data.scales.mins[j], data.scales.maxs[j], sc / 255);
                const lsce = Math.exp(lsc);
                scale[i * 8 + 3 + j] = lsce;
            }
        }
    }
    // --- Colors/SH0
    const colors = imageDataArrays[4].bits;
    if (data.version === 2) {
        if (!data.sh0.codebook) {
            throw new Error("Missing codebook in SOG version 2 sh0 data.");
        }
        for (let i = 0; i < splatCount; i++) {
            const index = i * 4;
            for (let j = 0; j < 3; j++) {
                const component = 0.5 + data.sh0.codebook[colors[index + j]] * SH_C0;
                rgba[i * 32 + 24 + j] = Math.max(0, Math.min(255, Math.round(255 * component)));
            }
            rgba[i * 32 + 24 + 3] = colors[index + 3];
        }
    }
    else {
        if (!Array.isArray(data.sh0.mins) || !Array.isArray(data.sh0.maxs)) {
            throw new Error("Missing arrays in SOG sh0 data.");
        }
        for (let i = 0; i < splatCount; i++) {
            const index = i * 4;
            for (let j = 0; j < 4; j++) {
                const colorsMin = data.sh0.mins[j];
                const colorsMax = data.sh0.maxs[j];
                const colort = colors[index + j];
                const c = core_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__.Scalar.Lerp(colorsMin, colorsMax, colort / 255);
                let csh;
                if (j < 3) {
                    csh = 0.5 + c * SH_C0;
                }
                else {
                    csh = 1.0 / (1.0 + Math.exp(-c));
                }
                rgba[i * 32 + 24 + j] = Math.max(0, Math.min(255, Math.round(255 * csh)));
            }
        }
    }
    // --- Rotations
    // Dequantize the stored three components:
    const toComp = (c) => ((c / 255 - 0.5) * 2.0) / Math.SQRT2;
    const quatArray = imageDataArrays[3].bits;
    for (let i = 0; i < splatCount; i++) {
        const quatsr = quatArray[i * 4 + 0];
        const quatsg = quatArray[i * 4 + 1];
        const quatsb = quatArray[i * 4 + 2];
        const quatsa = quatArray[i * 4 + 3];
        const a = toComp(quatsr);
        const b = toComp(quatsg);
        const c = toComp(quatsb);
        const mode = quatsa - 252; // 0..3 (R,G,B,A is one of the four components)
        // Reconstruct the omitted component so that ||q|| = 1 and w.l.o.g. the omitted one is non-negative
        const t = a * a + b * b + c * c;
        const d = Math.sqrt(Math.max(0, 1 - t));
        // Place components according to mode
        let q;
        switch (mode) {
            case 0:
                q = [d, a, b, c];
                break; // omitted = x
            case 1:
                q = [a, d, b, c];
                break; // omitted = y
            case 2:
                q = [a, b, d, c];
                break; // omitted = z
            case 3:
                q = [a, b, c, d];
                break; // omitted = w
            default:
                throw new Error("Invalid quaternion mode");
        }
        rot[i * 32 + 28 + 0] = q[0] * 127.5 + 127.5;
        rot[i * 32 + 28 + 1] = q[1] * 127.5 + 127.5;
        rot[i * 32 + 28 + 2] = q[2] * 127.5 + 127.5;
        rot[i * 32 + 28 + 3] = q[3] * 127.5 + 127.5;
    }
    // --- SH
    if (data.shN) {
        const coeffCounts = [0, 3, 8, 15];
        const coeffs = data.shN.bands ? coeffCounts[data.shN.bands] : data.shN.shape[1] / 3; // 3 components per coeff
        const shCentroids = imageDataArrays[5].bits;
        const shLabelsData = imageDataArrays[6].bits;
        const shCentroidsWidth = imageDataArrays[5].width;
        const shComponentCount = coeffs * 3;
        const textureCount = Math.ceil(shComponentCount / 16); // 4 components can be stored per texture, 4 sh per component
        //let shIndexRead = byteOffset;
        // sh is an array of uint8array that will be used to create sh textures
        const sh = [];
        const engine = scene.getEngine();
        const width = engine.getCaps().maxTextureSize;
        const height = Math.ceil(splatCount / width);
        // create array for the number of textures needed.
        for (let textureIndex = 0; textureIndex < textureCount; textureIndex++) {
            const texture = new Uint8Array(height * width * 4 * 4); // 4 components per texture, 4 sh per component
            sh.push(texture);
        }
        if (data.version === 2) {
            if (!data.shN.codebook) {
                throw new Error("Missing codebook in SOG version 2 shN data.");
            }
            for (let i = 0; i < splatCount; i++) {
                const n = shLabelsData[i * 4 + 0] + (shLabelsData[i * 4 + 1] << 8);
                const u = (n % 64) * coeffs;
                const v = Math.floor(n / 64);
                for (let k = 0; k < coeffs; k++) {
                    for (let j = 0; j < 3; j++) {
                        const shIndexWrite = k * 3 + j;
                        const textureIndex = Math.floor(shIndexWrite / 16);
                        const shArray = sh[textureIndex];
                        const byteIndexInTexture = shIndexWrite % 16; // [0..15]
                        const offsetPerSplat = i * 16; // 16 sh values per texture per splat.
                        const shValue = data.shN.codebook[shCentroids[(u + k) * 4 + j + v * shCentroidsWidth * 4]] * 127.5 + 127.5;
                        shArray[byteIndexInTexture + offsetPerSplat] = Math.max(0, Math.min(255, shValue));
                    }
                }
            }
        }
        else {
            for (let i = 0; i < splatCount; i++) {
                const n = shLabelsData[i * 4 + 0] + (shLabelsData[i * 4 + 1] << 8);
                const u = (n % 64) * coeffs;
                const v = Math.floor(n / 64);
                const shMin = data.shN.mins;
                const shMax = data.shN.maxs;
                for (let j = 0; j < 3; j++) {
                    for (let k = 0; k < coeffs / 3; k++) {
                        const shIndexWrite = k * 3 + j;
                        const textureIndex = Math.floor(shIndexWrite / 16);
                        const shArray = sh[textureIndex];
                        const byteIndexInTexture = shIndexWrite % 16; // [0..15]
                        const offsetPerSplat = i * 16; // 16 sh values per texture per splat.
                        const shValue = core_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__.Scalar.Lerp(shMin, shMax, shCentroids[(u + k) * 4 + j + v * shCentroidsWidth * 4] / 255) * 127.5 + 127.5;
                        shArray[byteIndexInTexture + offsetPerSplat] = Math.max(0, Math.min(255, shValue));
                    }
                }
            }
        }
        return await new Promise((resolve) => {
            resolve({ mode: 0 /* Mode.Splat */, data: buffer, hasVertexColors: false, sh: sh });
        });
    }
    return await new Promise((resolve) => {
        resolve({ mode: 0 /* Mode.Splat */, data: buffer, hasVertexColors: false });
    });
}
/**
 * Parse SOG data from either a SOGRootData object (with webp files loaded from rootUrl) or from a Map of filenames to Uint8Array file data (including meta.json)
 * @param dataOrFiles Either the SOGRootData or a Map of filenames to Uint8Array file data (including meta.json)
 * @param rootUrl Base URL to load webp files from (if dataOrFiles is SOGRootData)
 * @param scene The Babylon.js scene
 * @returns Parsed data
 */
async function ParseSogMeta(dataOrFiles, rootUrl, scene) {
    let data;
    let files;
    if (dataOrFiles instanceof Map) {
        files = dataOrFiles;
        const metaFile = files.get("meta.json");
        if (!metaFile) {
            throw new Error("meta.json not found in files Map");
        }
        data = JSON.parse(new TextDecoder().decode(metaFile));
    }
    else {
        data = dataOrFiles;
    }
    // Collect all file names
    const urls = [...data.means.files, ...data.scales.files, ...data.quats.files, ...data.sh0.files];
    if (data.shN) {
        urls.push(...data.shN.files);
    }
    // Load webp images in parallel
    const imageDataArrays = await Promise.all(urls.map(async (fileName) => {
        if (files && files.has(fileName)) {
            // load from in-memory Uint8Array
            const fileData = files.get(fileName);
            return await LoadWebpImageData(fileData, fileName, scene.getEngine());
        }
        else {
            // fallback: load from URL
            return await LoadWebpImageData(rootUrl, fileName, scene.getEngine());
        }
    }));
    return await ParseSogDatas(data, imageDataArrays, scene);
}


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

/***/ "../loaders/dist/SPLAT/splatFileLoader.js":
/*!************************************************!*\
  !*** ../loaders/dist/SPLAT/splatFileLoader.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPLATFileLoader: () => (/* binding */ SPLATFileLoader)
/* harmony export */ });
/* harmony import */ var core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Loading/sceneLoader */ "../core/dist/Loading/sceneLoader.js");
/* harmony import */ var _splatFileLoader_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splatFileLoader.metadata */ "../loaders/dist/SPLAT/splatFileLoader.metadata.js");
/* harmony import */ var core_Meshes_GaussianSplatting_gaussianSplattingMesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Meshes/GaussianSplatting/gaussianSplattingMesh */ "../core/dist/Meshes/GaussianSplatting/gaussianSplattingMesh.js");
/* harmony import */ var core_assetContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/assetContainer */ "../core/dist/assetContainer.js");
/* harmony import */ var core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Meshes/mesh */ "../core/dist/Meshes/mesh.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Particles_pointsCloudSystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/Particles/pointsCloudSystem */ "../core/dist/Particles/pointsCloudSystem.js");
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var core_Meshes_mesh_vertexData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core/Meshes/mesh.vertexData */ "../core/dist/Meshes/mesh.vertexData.js");
/* harmony import */ var _spz__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spz */ "../loaders/dist/SPLAT/spz.js");
/* harmony import */ var _sog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sog */ "../loaders/dist/SPLAT/sog.js");
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");














/**
 * @experimental
 * SPLAT file type loader.
 * This is a babylon scene loader plugin.
 */
class SPLATFileLoader {
    /**
     * Creates loader for gaussian splatting files
     * @param loadingOptions options for loading and parsing splat and PLY files.
     */
    constructor(loadingOptions = SPLATFileLoader._DefaultLoadingOptions) {
        /**
         * Defines the name of the plugin.
         */
        this.name = _splatFileLoader_metadata__WEBPACK_IMPORTED_MODULE_1__.SPLATFileLoaderMetadata.name;
        this._assetContainer = null;
        /**
         * Defines the extensions the splat loader is able to load.
         * force data to come in as an ArrayBuffer
         */
        this.extensions = _splatFileLoader_metadata__WEBPACK_IMPORTED_MODULE_1__.SPLATFileLoaderMetadata.extensions;
        this._loadingOptions = loadingOptions;
    }
    /** @internal */
    createPlugin(options) {
        return new SPLATFileLoader(options[_splatFileLoader_metadata__WEBPACK_IMPORTED_MODULE_1__.SPLATFileLoaderMetadata.name]);
    }
    /**
     * Imports  from the loaded gaussian splatting data and adds them to the scene
     * @param meshesNames a string or array of strings of the mesh names that should be loaded from the file
     * @param scene the scene the meshes should be added to
     * @param data the gaussian splatting data to load
     * @param rootUrl root url to load from
     * @param _onProgress callback called while file is loading
     * @param _fileName Defines the name of the file to load
     * @returns a promise containing the loaded meshes, particles, skeletons and animations
     */
    async importMeshAsync(meshesNames, scene, data, rootUrl, _onProgress, _fileName) {
        // eslint-disable-next-line github/no-then
        return await this._parseAsync(meshesNames, scene, data, rootUrl).then((meshes) => {
            return {
                meshes: meshes,
                particleSystems: [],
                skeletons: [],
                animationGroups: [],
                transformNodes: [],
                geometries: [],
                lights: [],
                spriteManagers: [],
            };
        });
    }
    static _BuildPointCloud(pointcloud, data) {
        if (!data.byteLength) {
            return false;
        }
        const uBuffer = new Uint8Array(data);
        const fBuffer = new Float32Array(data);
        // parsed array contains room for position(3floats), normal(3floats), color (4b), quantized quaternion (4b)
        const rowLength = 3 * 4 + 3 * 4 + 4 + 4;
        const vertexCount = uBuffer.length / rowLength;
        const pointcloudfunc = function (particle, i) {
            const x = fBuffer[8 * i + 0];
            const y = fBuffer[8 * i + 1];
            const z = fBuffer[8 * i + 2];
            particle.position = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_6__.Vector3(x, y, z);
            const r = uBuffer[rowLength * i + 24 + 0] / 255;
            const g = uBuffer[rowLength * i + 24 + 1] / 255;
            const b = uBuffer[rowLength * i + 24 + 2] / 255;
            particle.color = new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_8__.Color4(r, g, b, 1);
        };
        pointcloud.addPoints(vertexCount, pointcloudfunc);
        return true;
    }
    static _BuildMesh(scene, parsedPLY) {
        const mesh = new core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_4__.Mesh("PLYMesh", scene);
        const uBuffer = new Uint8Array(parsedPLY.data);
        const fBuffer = new Float32Array(parsedPLY.data);
        const rowLength = 3 * 4 + 3 * 4 + 4 + 4;
        const vertexCount = uBuffer.length / rowLength;
        const positions = [];
        const vertexData = new core_Meshes_mesh_vertexData__WEBPACK_IMPORTED_MODULE_9__.VertexData();
        for (let i = 0; i < vertexCount; i++) {
            const x = fBuffer[8 * i + 0];
            const y = fBuffer[8 * i + 1];
            const z = fBuffer[8 * i + 2];
            positions.push(x, y, z);
        }
        if (parsedPLY.hasVertexColors) {
            const colors = new Float32Array(vertexCount * 4);
            for (let i = 0; i < vertexCount; i++) {
                const r = uBuffer[rowLength * i + 24 + 0] / 255;
                const g = uBuffer[rowLength * i + 24 + 1] / 255;
                const b = uBuffer[rowLength * i + 24 + 2] / 255;
                colors[i * 4 + 0] = r;
                colors[i * 4 + 1] = g;
                colors[i * 4 + 2] = b;
                colors[i * 4 + 3] = 1;
            }
            vertexData.colors = colors;
        }
        vertexData.positions = positions;
        vertexData.indices = parsedPLY.faces;
        vertexData.applyToMesh(mesh);
        return mesh;
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax, @typescript-eslint/naming-convention
    async _unzipWithFFlateAsync(data) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        let fflate = this._loadingOptions.fflate;
        // ensure fflate is loaded
        if (!fflate) {
            if (typeof window.fflate === "undefined") {
                await core_Misc_tools__WEBPACK_IMPORTED_MODULE_12__.Tools.LoadScriptAsync(this._loadingOptions.deflateURL ?? "https://unpkg.com/fflate/umd/index.js");
            }
            fflate = window.fflate;
        }
        const { unzipSync } = fflate;
        const unzipped = unzipSync(data); // { [filename: string]: Uint8Array }
        const files = new Map();
        for (const [name, content] of Object.entries(unzipped)) {
            files.set(name, content);
        }
        return files;
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _parseAsync(meshesNames, scene, data, rootUrl) {
        const babylonMeshesArray = []; //The mesh for babylon
        const makeGSFromParsedSOG = (parsedSOG) => {
            scene._blockEntityCollection = !!this._assetContainer;
            const gaussianSplatting = new core_Meshes_GaussianSplatting_gaussianSplattingMesh__WEBPACK_IMPORTED_MODULE_2__.GaussianSplattingMesh("GaussianSplatting", null, scene, this._loadingOptions.keepInRam);
            gaussianSplatting._parentContainer = this._assetContainer;
            gaussianSplatting.viewDirectionFactor.set(1, -1, 1);
            babylonMeshesArray.push(gaussianSplatting);
            gaussianSplatting.updateData(parsedSOG.data, parsedSOG.sh);
            scene._blockEntityCollection = false;
        };
        // check if data is json string
        if (typeof data === "string") {
            const dataSOG = JSON.parse(data);
            if (dataSOG && dataSOG.means && dataSOG.scales && dataSOG.quats && dataSOG.sh0) {
                return new Promise((resolve) => {
                    (0,_sog__WEBPACK_IMPORTED_MODULE_11__.ParseSogMeta)(dataSOG, rootUrl, scene)
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
                        .then((parsedSOG) => {
                        makeGSFromParsedSOG(parsedSOG);
                        resolve(babylonMeshesArray);
                    })
                        // eslint-disable-next-line github/no-then
                        .catch(() => {
                        throw new Error("Failed to parse SOG data.");
                    });
                });
            }
        }
        const u8 = data instanceof ArrayBuffer ? new Uint8Array(data) : data;
        // ZIP signature check for SOG
        if (u8[0] === 0x50 && u8[1] === 0x4b) {
            return new Promise((resolve) => {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
                this._unzipWithFFlateAsync(u8).then((files) => {
                    (0,_sog__WEBPACK_IMPORTED_MODULE_11__.ParseSogMeta)(files, rootUrl, scene)
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
                        .then((parsedSOG) => {
                        makeGSFromParsedSOG(parsedSOG);
                        resolve(babylonMeshesArray);
                    }) // eslint-disable-next-line github/no-then
                        .catch(() => {
                        throw new Error("Failed to parse SOG zip data.");
                    });
                });
            });
        }
        const readableStream = new ReadableStream({
            start(controller) {
                controller.enqueue(new Uint8Array(data)); // Enqueue the ArrayBuffer as a Uint8Array
                controller.close();
            },
        });
        // Use GZip DecompressionStream
        const decompressionStream = new DecompressionStream("gzip");
        const decompressedStream = readableStream.pipeThrough(decompressionStream);
        return new Promise((resolve) => {
            new Response(decompressedStream)
                .arrayBuffer()
                // eslint-disable-next-line github/no-then
                .then((buffer) => {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
                (0,_spz__WEBPACK_IMPORTED_MODULE_10__.ParseSpz)(buffer, scene, this._loadingOptions).then((parsedSPZ) => {
                    scene._blockEntityCollection = !!this._assetContainer;
                    const gaussianSplatting = new core_Meshes_GaussianSplatting_gaussianSplattingMesh__WEBPACK_IMPORTED_MODULE_2__.GaussianSplattingMesh("GaussianSplatting", null, scene, this._loadingOptions.keepInRam);
                    if (parsedSPZ.trainedWithAntialiasing) {
                        const gsMaterial = gaussianSplatting.material;
                        gsMaterial.kernelSize = 0.1;
                        gsMaterial.compensation = true;
                    }
                    gaussianSplatting._parentContainer = this._assetContainer;
                    babylonMeshesArray.push(gaussianSplatting);
                    gaussianSplatting.updateData(parsedSPZ.data, parsedSPZ.sh);
                    scene._blockEntityCollection = false;
                    this.applyAutoCameraLimits(parsedSPZ, scene);
                    resolve(babylonMeshesArray);
                });
            })
                // eslint-disable-next-line github/no-then
                .catch(() => {
                // Catch any decompression errors
                // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
                SPLATFileLoader._ConvertPLYToSplat(data).then(async (parsedPLY) => {
                    scene._blockEntityCollection = !!this._assetContainer;
                    switch (parsedPLY.mode) {
                        case 0 /* Mode.Splat */:
                            {
                                const gaussianSplatting = new core_Meshes_GaussianSplatting_gaussianSplattingMesh__WEBPACK_IMPORTED_MODULE_2__.GaussianSplattingMesh("GaussianSplatting", null, scene, this._loadingOptions.keepInRam);
                                gaussianSplatting._parentContainer = this._assetContainer;
                                babylonMeshesArray.push(gaussianSplatting);
                                gaussianSplatting.updateData(parsedPLY.data, parsedPLY.sh);
                                if (parsedPLY.compressed || !parsedPLY.rawSplat) {
                                    gaussianSplatting.viewDirectionFactor.set(-1, -1, 1);
                                }
                                if (parsedPLY.chirality === "RightHanded") {
                                    gaussianSplatting.scaling.y *= -1.0;
                                }
                                switch (parsedPLY.upAxis) {
                                    case "X":
                                        gaussianSplatting.rotation = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_6__.Vector3(0, 0, Math.PI / 2);
                                        break;
                                    case "Y":
                                        gaussianSplatting.rotation = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_6__.Vector3(0, 0, Math.PI);
                                        break;
                                    case "Z":
                                        gaussianSplatting.rotation = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_6__.Vector3(-Math.PI / 2, Math.PI, 0);
                                        break;
                                }
                            }
                            break;
                        case 1 /* Mode.PointCloud */:
                            {
                                const pointcloud = new core_Particles_pointsCloudSystem__WEBPACK_IMPORTED_MODULE_7__.PointsCloudSystem("PointCloud", 1, scene);
                                if (SPLATFileLoader._BuildPointCloud(pointcloud, parsedPLY.data)) {
                                    // eslint-disable-next-line github/no-then
                                    await pointcloud.buildMeshAsync().then((mesh) => {
                                        babylonMeshesArray.push(mesh);
                                    });
                                }
                                else {
                                    pointcloud.dispose();
                                }
                            }
                            break;
                        case 2 /* Mode.Mesh */:
                            {
                                if (parsedPLY.faces) {
                                    babylonMeshesArray.push(SPLATFileLoader._BuildMesh(scene, parsedPLY));
                                }
                                else {
                                    throw new Error("PLY mesh doesn't contain face informations.");
                                }
                            }
                            break;
                        default:
                            throw new Error("Unsupported Splat mode");
                    }
                    scene._blockEntityCollection = false;
                    this.applyAutoCameraLimits(parsedPLY, scene);
                    resolve(babylonMeshesArray);
                });
            });
        });
    }
    /**
     * Applies camera limits based on parsed meta data
     * @param meta parsed splat meta data
     * @param scene
     */
    applyAutoCameraLimits(meta, scene) {
        if (this._loadingOptions.disableAutoCameraLimits) {
            return;
        }
        if ((meta.safeOrbitCameraRadiusMin !== undefined || meta.safeOrbitCameraElevationMinMax !== undefined) && scene.activeCamera?.getClassName() === "ArcRotateCamera") {
            const arcCam = scene.activeCamera;
            if (meta.safeOrbitCameraElevationMinMax) {
                arcCam.lowerBetaLimit = Math.PI * 0.5 - meta.safeOrbitCameraElevationMinMax[1];
                arcCam.upperBetaLimit = Math.PI * 0.5 - meta.safeOrbitCameraElevationMinMax[0];
            }
            if (meta.safeOrbitCameraRadiusMin) {
                arcCam.lowerRadiusLimit = meta.safeOrbitCameraRadiusMin;
            }
        }
    }
    /**
     * Load into an asset container.
     * @param scene The scene to load into
     * @param data The data to import
     * @param rootUrl The root url for scene and resources
     * @returns The loaded asset container
     */
    // eslint-disable-next-line no-restricted-syntax
    loadAssetContainerAsync(scene, data, rootUrl) {
        const container = new core_assetContainer__WEBPACK_IMPORTED_MODULE_3__.AssetContainer(scene);
        this._assetContainer = container;
        return (this.importMeshAsync(null, scene, data, rootUrl)
            // eslint-disable-next-line github/no-then
            .then((result) => {
            for (const mesh of result.meshes) {
                container.meshes.push(mesh);
            }
            // mesh material will be null before 1st rendered frame.
            this._assetContainer = null;
            return container;
        })
            // eslint-disable-next-line github/no-then
            .catch((ex) => {
            this._assetContainer = null;
            throw ex;
        }));
    }
    /**
     * Imports all objects from the loaded OBJ data and adds them to the scene
     * @param scene the scene the objects should be added to
     * @param data the OBJ data to load
     * @param rootUrl root url to load from
     * @returns a promise which completes when objects have been loaded to the scene
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    loadAsync(scene, data, rootUrl) {
        //Get the 3D model
        // eslint-disable-next-line github/no-then
        return this.importMeshAsync(null, scene, data, rootUrl).then(() => {
            // return void
        });
    }
    /**
     * Code from https://github.com/dylanebert/gsplat.js/blob/main/src/loaders/PLYLoader.ts Under MIT license
     * Converts a .ply data array buffer to splat
     * if data array buffer is not ply, returns the original buffer
     * @param data the .ply data to load
     * @returns the loaded splat buffer
     */
    static _ConvertPLYToSplat(data) {
        const ubuf = new Uint8Array(data);
        const header = new TextDecoder().decode(ubuf.slice(0, 1024 * 10));
        const headerEnd = "end_header\n";
        const headerEndIndex = header.indexOf(headerEnd);
        if (headerEndIndex < 0 || !header) {
            // standard splat
            return new Promise((resolve) => {
                resolve({ mode: 0 /* Mode.Splat */, data: data, rawSplat: true });
            });
        }
        const vertexCount = parseInt(/element vertex (\d+)\n/.exec(header)[1]);
        const faceElement = /element face (\d+)\n/.exec(header);
        let faceCount = 0;
        if (faceElement) {
            faceCount = parseInt(faceElement[1]);
        }
        const chunkElement = /element chunk (\d+)\n/.exec(header);
        let chunkCount = 0;
        if (chunkElement) {
            chunkCount = parseInt(chunkElement[1]);
        }
        let rowVertexOffset = 0;
        let rowChunkOffset = 0;
        const offsets = {
            double: 8,
            int: 4,
            uint: 4,
            float: 4,
            short: 2,
            ushort: 2,
            uchar: 1,
            list: 0,
        };
        const ElementMode = {
            Vertex: 0,
            Chunk: 1,
            SH: 2,
            Float_Tuple: 3,
            Float: 4,
            Uchar: 5,
        };
        let chunkMode = ElementMode.Chunk;
        const vertexProperties = [];
        const chunkProperties = [];
        const filtered = header.slice(0, headerEndIndex).split("\n");
        const metaData = {};
        for (const prop of filtered) {
            if (prop.startsWith("property ")) {
                const [, type, name] = prop.split(" ");
                if (chunkMode == ElementMode.Chunk) {
                    chunkProperties.push({ name, type, offset: rowChunkOffset });
                    rowChunkOffset += offsets[type];
                }
                else if (chunkMode == ElementMode.Vertex) {
                    vertexProperties.push({ name, type, offset: rowVertexOffset });
                    rowVertexOffset += offsets[type];
                }
                else if (chunkMode == ElementMode.SH) {
                    vertexProperties.push({ name, type, offset: rowVertexOffset });
                }
                else if (chunkMode == ElementMode.Float_Tuple) {
                    const view = new DataView(data, rowChunkOffset, offsets.float * 2);
                    metaData.safeOrbitCameraElevationMinMax = [view.getFloat32(0, true), view.getFloat32(4, true)];
                }
                else if (chunkMode == ElementMode.Float) {
                    const view = new DataView(data, rowChunkOffset, offsets.float);
                    metaData.safeOrbitCameraRadiusMin = view.getFloat32(0, true);
                }
                else if (chunkMode == ElementMode.Uchar) {
                    const view = new DataView(data, rowChunkOffset, offsets.uchar);
                    if (name == "up_axis") {
                        metaData.upAxis = view.getUint8(0) == 0 ? "X" : view.getUint8(0) == 1 ? "Y" : "Z";
                    }
                    else if (name == "chirality") {
                        metaData.chirality = view.getUint8(0) == 0 ? "LeftHanded" : "RightHanded";
                    }
                }
                if (!offsets[type]) {
                    core_Misc_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Warn(`Unsupported property type: ${type}.`);
                }
            }
            else if (prop.startsWith("element ")) {
                const [, type] = prop.split(" ");
                if (type == "chunk") {
                    chunkMode = ElementMode.Chunk;
                }
                else if (type == "vertex") {
                    chunkMode = ElementMode.Vertex;
                }
                else if (type == "sh") {
                    chunkMode = ElementMode.SH;
                }
                else if (type == "safe_orbit_camera_elevation_min_max_radians") {
                    chunkMode = ElementMode.Float_Tuple;
                }
                else if (type == "safe_orbit_camera_radius_min") {
                    chunkMode = ElementMode.Float;
                }
                else if (type == "up_axis" || type == "chirality") {
                    chunkMode = ElementMode.Uchar;
                }
            }
        }
        const rowVertexLength = rowVertexOffset;
        const rowChunkLength = rowChunkOffset;
        // eslint-disable-next-line github/no-then
        return core_Meshes_GaussianSplatting_gaussianSplattingMesh__WEBPACK_IMPORTED_MODULE_2__.GaussianSplattingMesh.ConvertPLYWithSHToSplatAsync(data).then(async (splatsData) => {
            const dataView = new DataView(data, headerEndIndex + headerEnd.length);
            let offset = rowChunkLength * chunkCount + rowVertexLength * vertexCount;
            // faces
            const faces = [];
            if (faceCount) {
                for (let i = 0; i < faceCount; i++) {
                    const faceVertexCount = dataView.getUint8(offset);
                    if (faceVertexCount != 3) {
                        continue; // only support triangles
                    }
                    offset += 1;
                    for (let j = 0; j < faceVertexCount; j++) {
                        const vertexIndex = dataView.getUint32(offset + (2 - j) * 4, true); // change face winding
                        faces.push(vertexIndex);
                    }
                    offset += 12;
                }
            }
            // early exit for chunked/quantized ply
            if (chunkCount) {
                return await new Promise((resolve) => {
                    resolve({ mode: 0 /* Mode.Splat */, data: splatsData.buffer, sh: splatsData.sh, faces: faces, hasVertexColors: false, compressed: true, rawSplat: false });
                });
            }
            // count available properties. if all necessary are present then it's a splat. Otherwise, it's a point cloud
            // if faces are found, then it's a standard mesh
            let propertyCount = 0;
            let propertyColorCount = 0;
            const splatProperties = ["x", "y", "z", "scale_0", "scale_1", "scale_2", "opacity", "rot_0", "rot_1", "rot_2", "rot_3"];
            const splatColorProperties = ["red", "green", "blue", "f_dc_0", "f_dc_1", "f_dc_2"];
            for (let propertyIndex = 0; propertyIndex < vertexProperties.length; propertyIndex++) {
                const property = vertexProperties[propertyIndex];
                if (splatProperties.includes(property.name)) {
                    propertyCount++;
                }
                if (splatColorProperties.includes(property.name)) {
                    propertyColorCount++;
                }
            }
            const hasMandatoryProperties = propertyCount == splatProperties.length && propertyColorCount == 3;
            const currentMode = faceCount ? 2 /* Mode.Mesh */ : hasMandatoryProperties ? 0 /* Mode.Splat */ : 1 /* Mode.PointCloud */;
            // parsed ready ready to be used as a splat
            return await new Promise((resolve) => {
                resolve({
                    ...metaData,
                    mode: currentMode,
                    data: splatsData.buffer,
                    sh: splatsData.sh,
                    faces: faces,
                    hasVertexColors: !!propertyColorCount,
                    compressed: false,
                    rawSplat: false,
                });
            });
        });
    }
}
SPLATFileLoader._DefaultLoadingOptions = {
    keepInRam: false,
    flipY: false,
};
// Add this loader into the register plugin
(0,core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__.RegisterSceneLoaderPlugin)(new SPLATFileLoader());


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

/***/ "../loaders/dist/SPLAT/spz.js":
/*!************************************!*\
  !*** ../loaders/dist/SPLAT/spz.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParseSpz: () => (/* binding */ ParseSpz)
/* harmony export */ });
/* harmony import */ var core_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.scalar */ "../core/dist/Maths/math.scalar.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/* eslint-disable @typescript-eslint/promise-function-async */

/**
 * Parses SPZ data and returns a promise resolving to an IParsedPLY object.
 * @param data The ArrayBuffer containing SPZ data.
 * @param scene The Babylon.js scene.
 * @param loadingOptions Options for loading Gaussian Splatting files.
 * @returns A promise resolving to the parsed SPZ data.
 */
function ParseSpz(data, scene, loadingOptions) {
    const ubuf = new Uint8Array(data);
    const ubufu32 = new Uint32Array(data.slice(0, 12)); // Only need ubufu32[0] to [2]
    // debug infos
    const splatCount = ubufu32[2];
    const shDegree = ubuf[12];
    const fractionalBits = ubuf[13];
    const flags = ubuf[14];
    const reserved = ubuf[15];
    const version = ubufu32[1];
    // check magic and version
    if (reserved || ubufu32[0] != 0x5053474e || (version != 2 && version != 3)) {
        // reserved must be 0
        return new Promise((resolve) => {
            resolve({ mode: 3 /* Mode.Reject */, data: buffer, hasVertexColors: false });
        });
    }
    const rowOutputLength = 3 * 4 + 3 * 4 + 4 + 4; // 32
    const buffer = new ArrayBuffer(rowOutputLength * splatCount);
    const positionScale = 1.0 / (1 << fractionalBits);
    const int32View = new Int32Array(1);
    const uint8View = new Uint8Array(int32View.buffer);
    const read24bComponent = function (u8, offset) {
        uint8View[0] = u8[offset + 0];
        uint8View[1] = u8[offset + 1];
        uint8View[2] = u8[offset + 2];
        uint8View[3] = u8[offset + 2] & 0x80 ? 0xff : 0x00;
        return int32View[0] * positionScale;
    };
    let byteOffset = 16;
    const position = new Float32Array(buffer);
    const scale = new Float32Array(buffer);
    const rgba = new Uint8ClampedArray(buffer);
    const rot = new Uint8ClampedArray(buffer);
    let coordinateSign = 1;
    let quaternionOffset = 0;
    if (!loadingOptions.flipY) {
        coordinateSign = -1;
        quaternionOffset = 255;
    }
    // positions
    for (let i = 0; i < splatCount; i++) {
        position[i * 8 + 0] = read24bComponent(ubuf, byteOffset + 0);
        position[i * 8 + 1] = coordinateSign * read24bComponent(ubuf, byteOffset + 3);
        position[i * 8 + 2] = coordinateSign * read24bComponent(ubuf, byteOffset + 6);
        byteOffset += 9;
    }
    // colors
    const shC0 = 0.282;
    for (let i = 0; i < splatCount; i++) {
        for (let component = 0; component < 3; component++) {
            const byteValue = ubuf[byteOffset + splatCount + i * 3 + component];
            // 0.15 is hard coded value from spz
            // Scale factor for DC color components. To convert to RGB, we should multiply by 0.282, but it can
            // be useful to represent base colors that are out of range if the higher spherical harmonics bands
            // bring them back into range so we multiply by a smaller value.
            const value = (byteValue - 127.5) / (0.15 * 255);
            rgba[i * 32 + 24 + component] = core_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__.Scalar.Clamp((0.5 + shC0 * value) * 255, 0, 255);
        }
        rgba[i * 32 + 24 + 3] = ubuf[byteOffset + i];
    }
    byteOffset += splatCount * 4;
    // scales
    for (let i = 0; i < splatCount; i++) {
        scale[i * 8 + 3 + 0] = Math.exp(ubuf[byteOffset + 0] / 16.0 - 10.0);
        scale[i * 8 + 3 + 1] = Math.exp(ubuf[byteOffset + 1] / 16.0 - 10.0);
        scale[i * 8 + 3 + 2] = Math.exp(ubuf[byteOffset + 2] / 16.0 - 10.0);
        byteOffset += 3;
    }
    // convert quaternion
    if (version >= 3) {
        /*
            In version 3, rotations are represented as the smallest three components of the normalized rotation quaternion, for optimal rotation accuracy.
            The largest component can be derived from the others and is not stored. Its index is stored on 2 bits
            and each of the smallest three components is encoded as a 10-bit signed integer.
        */
        const sqrt12 = Math.SQRT1_2;
        for (let i = 0; i < splatCount; i++) {
            const r = [ubuf[byteOffset + 0], ubuf[byteOffset + 1], ubuf[byteOffset + 2], ubuf[byteOffset + 3]];
            const comp = r[0] + (r[1] << 8) + (r[2] << 16) + (r[3] << 24);
            const cmask = (1 << 9) - 1;
            const rotation = [];
            const iLargest = comp >>> 30;
            let remaining = comp;
            let sumSquares = 0;
            for (let i = 3; i >= 0; --i) {
                if (i !== iLargest) {
                    const mag = remaining & cmask;
                    const negbit = (remaining >>> 9) & 0x1;
                    remaining = remaining >>> 10;
                    rotation[i] = sqrt12 * (mag / cmask);
                    if (negbit === 1) {
                        rotation[i] = -rotation[i];
                    }
                    // accumulate the sum of squares
                    sumSquares += rotation[i] * rotation[i];
                }
            }
            const square = 1 - sumSquares;
            rotation[iLargest] = Math.sqrt(Math.max(square, 0));
            rotation[1] *= coordinateSign;
            rotation[2] *= coordinateSign;
            const shuffle = [3, 0, 1, 2]; // shuffle to match the order of the quaternion components in the splat file
            for (let j = 0; j < 4; j++) {
                rot[i * 32 + 28 + j] = Math.round(127.5 + rotation[shuffle[j]] * 127.5);
            }
            byteOffset += 4;
        }
    }
    else {
        /*
            In version 2, rotations are represented as the `(x, y, z)` components of the normalized rotation quaternion. The
            `w` component can be derived from the others and is not stored. Each component is encoded as an
            8-bit signed integer.
        */
        for (let i = 0; i < splatCount; i++) {
            const x = ubuf[byteOffset + 0];
            const y = ubuf[byteOffset + 1] * coordinateSign + quaternionOffset;
            const z = ubuf[byteOffset + 2] * coordinateSign + quaternionOffset;
            const nx = x / 127.5 - 1;
            const ny = y / 127.5 - 1;
            const nz = z / 127.5 - 1;
            rot[i * 32 + 28 + 1] = x;
            rot[i * 32 + 28 + 2] = y;
            rot[i * 32 + 28 + 3] = z;
            const v = 1 - (nx * nx + ny * ny + nz * nz);
            rot[i * 32 + 28 + 0] = 127.5 + Math.sqrt(v < 0 ? 0 : v) * 127.5;
            byteOffset += 3;
        }
    }
    //SH
    if (shDegree) {
        // shVectorCount is : 3 for dim = 1, 8 for dim = 2 and 15 for dim = 3
        // number of vec3 vector needed per splat
        const shVectorCount = (shDegree + 1) * (shDegree + 1) - 1; // minus 1 because sh0 is color
        // number of component values : 3 per vector3 (45)
        const shComponentCount = shVectorCount * 3;
        const textureCount = Math.ceil(shComponentCount / 16); // 4 components can be stored per texture, 4 sh per component
        let shIndexRead = byteOffset;
        // sh is an array of uint8array that will be used to create sh textures
        const sh = [];
        const engine = scene.getEngine();
        const width = engine.getCaps().maxTextureSize;
        const height = Math.ceil(splatCount / width);
        // create array for the number of textures needed.
        for (let textureIndex = 0; textureIndex < textureCount; textureIndex++) {
            const texture = new Uint8Array(height * width * 4 * 4); // 4 components per texture, 4 sh per component
            sh.push(texture);
        }
        for (let i = 0; i < splatCount; i++) {
            for (let shIndexWrite = 0; shIndexWrite < shComponentCount; shIndexWrite++) {
                const shValue = ubuf[shIndexRead++];
                const textureIndex = Math.floor(shIndexWrite / 16);
                const shArray = sh[textureIndex];
                const byteIndexInTexture = shIndexWrite % 16; // [0..15]
                const offsetPerSplat = i * 16; // 16 sh values per texture per splat.
                shArray[byteIndexInTexture + offsetPerSplat] = shValue;
            }
        }
        return new Promise((resolve) => {
            resolve({ mode: 0 /* Mode.Splat */, data: buffer, hasVertexColors: false, sh: sh, trainedWithAntialiasing: !!flags });
        });
    }
    return new Promise((resolve) => {
        resolve({ mode: 0 /* Mode.Splat */, data: buffer, hasVertexColors: false, trainedWithAntialiasing: !!flags });
    });
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X1NQTEFUX3NwbGF0RmlsZUxvYWRlcl9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFJQTs7QUFFQTtBQUNBO0FBc0ZBOzs7Ozs7OztBQVFBO0FBQ0E7QUE5RkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFxQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFzREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBbEZBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFTQTs7O0FBR0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMza0NBO0FBc0ZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVaQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFFQTtBQWdCQTs7OztBQUlBO0FBQ0E7QUFlQTs7O0FBR0E7QUFDQTtBQWxCQTs7QUFFQTtBQUNBO0FBRUE7QUFHQTs7O0FBR0E7QUFDQTtBQU9BO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBaGhCQTtBQUNBO0FBQ0E7QUFDQTtBQWdoQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2bEJBO0FBQ0E7QUFNQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9QYXJ0aWNsZXMvY2xvdWRQb2ludC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1BhcnRpY2xlcy9wb2ludHNDbG91ZFN5c3RlbS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL1NQTEFUL3NvZy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL1NQTEFUL3NwbGF0RmlsZUxvYWRlci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL1NQTEFUL3Nwei50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0cml4IH0gZnJvbSBcIi4uL01hdGhzL21hdGhcIjtcclxuaW1wb3J0IHsgQ29sb3I0LCBWZWN0b3IyLCBWZWN0b3IzLCBUbXBWZWN0b3JzLCBRdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL01hdGhzL21hdGhcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXNoIH0gZnJvbSBcIi4uL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgQm91bmRpbmdJbmZvIH0gZnJvbSBcIi4uL0N1bGxpbmcvYm91bmRpbmdJbmZvXCI7XHJcbmltcG9ydCB0eXBlIHsgUG9pbnRzQ2xvdWRTeXN0ZW0gfSBmcm9tIFwiLi9wb2ludHNDbG91ZFN5c3RlbVwiO1xyXG4vKipcclxuICogUmVwcmVzZW50cyBvbmUgcGFydGljbGUgb2YgYSBwb2ludHMgY2xvdWQgc3lzdGVtLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsb3VkUG9pbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBwYXJ0aWNsZSBnbG9iYWwgaW5kZXhcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlkeDogbnVtYmVyID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbG9yIG9mIHRoZSBwYXJ0aWNsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29sb3I6IE51bGxhYmxlPENvbG9yND4gPSBuZXcgQ29sb3I0KDEuMCwgMS4wLCAxLjAsIDEuMCk7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB3b3JsZCBzcGFjZSBwb3NpdGlvbiBvZiB0aGUgcGFydGljbGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgd29ybGQgc3BhY2Ugcm90YXRpb24gb2YgdGhlIHBhcnRpY2xlLiAoTm90IHVzZSBpZiByb3RhdGlvblF1YXRlcm5pb24gaXMgc2V0KVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcm90YXRpb246IFZlY3RvcjMgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHdvcmxkIHNwYWNlIHJvdGF0aW9uIHF1YXRlcm5pb24gb2YgdGhlIHBhcnRpY2xlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcm90YXRpb25RdWF0ZXJuaW9uOiBOdWxsYWJsZTxRdWF0ZXJuaW9uPjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHV2IG9mIHRoZSBwYXJ0aWNsZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHV2OiBOdWxsYWJsZTxWZWN0b3IyPiA9IG5ldyBWZWN0b3IyKDAuMCwgMC4wKTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGN1cnJlbnQgc3BlZWQgb2YgdGhlIHBhcnRpY2xlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmVsb2NpdHk6IFZlY3RvcjMgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBpdm90IHBvaW50IGluIHRoZSBwYXJ0aWNsZSBsb2NhbCBzcGFjZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHBpdm90OiBWZWN0b3IzID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAvKipcclxuICAgICAqIE11c3QgdGhlIHBhcnRpY2xlIGJlIHRyYW5zbGF0ZWQgZnJvbSBpdHMgcGl2b3QgcG9pbnQgaW4gaXRzIGxvY2FsIHNwYWNlID9cclxuICAgICAqIEluIHRoaXMgY2FzZSwgdGhlIHBpdm90IHBvaW50IGlzIHNldCBhdCB0aGUgb3JpZ2luIG9mIHRoZSBwYXJ0aWNsZSBsb2NhbCBzcGFjZSBhbmQgdGhlIHBhcnRpY2xlIGlzIHRyYW5zbGF0ZWQuXHJcbiAgICAgKiBEZWZhdWx0IDogZmFsc2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRyYW5zbGF0ZUZyb21QaXZvdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRleCBvZiB0aGlzIHBhcnRpY2xlIGluIHRoZSBnbG9iYWwgXCJwb3NpdGlvbnNcIiBhcnJheSAoSW50ZXJuYWwgdXNlKVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfcG9zOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWwgSW5kZXggb2YgdGhpcyBwYXJ0aWNsZSBpbiB0aGUgZ2xvYmFsIFwiaW5kaWNlc1wiIGFycmF5IChJbnRlcm5hbCB1c2UpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfaW5kOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHcm91cCB0aGlzIHBhcnRpY2xlIGJlbG9uZ3MgdG9cclxuICAgICAqL1xyXG4gICAgcHVibGljIF9ncm91cDogUG9pbnRzR3JvdXA7XHJcbiAgICAvKipcclxuICAgICAqIEdyb3VwIGlkIG9mIHRoaXMgcGFydGljbGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdyb3VwSWQ6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIEluZGV4IG9mIHRoZSBwYXJ0aWNsZSBpbiBpdHMgZ3JvdXAgaWQgKEludGVybmFsIHVzZSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlkeEluR3JvdXA6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbCBQYXJ0aWNsZSBCb3VuZGluZ0luZm8gb2JqZWN0IChJbnRlcm5hbCB1c2UpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfYm91bmRpbmdJbmZvOiBCb3VuZGluZ0luZm87XHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbCBSZWZlcmVuY2UgdG8gdGhlIFBDUyB0aGF0IHRoZSBwYXJ0aWNsZSBiZWxvbmdzIHRvIChJbnRlcm5hbCB1c2UpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfcGNzOiBQb2ludHNDbG91ZFN5c3RlbTtcclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsIFN0aWxsIHNldCBhcyBpbnZpc2libGUgaW4gb3JkZXIgdG8gc2tpcCB1c2VsZXNzIGNvbXB1dGF0aW9ucyAoSW50ZXJuYWwgdXNlKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3N0aWxsSW52aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbCBMYXN0IGNvbXB1dGVkIHBhcnRpY2xlIHJvdGF0aW9uIG1hdHJpeFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3JvdGF0aW9uTWF0cml4OiBudW1iZXJbXSA9IFsxLjAsIDAuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAwLjAsIDAuMCwgMS4wXTtcclxuICAgIC8qKlxyXG4gICAgICogUGFyZW50IHBhcnRpY2xlIElkLCBpZiBhbnkuXHJcbiAgICAgKiBEZWZhdWx0IG51bGwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwYXJlbnRJZDogTnVsbGFibGU8bnVtYmVyPiA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbCBJbnRlcm5hbCBnbG9iYWwgcG9zaXRpb24gaW4gdGhlIFBDUy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIF9nbG9iYWxQb3NpdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuWmVybygpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIFBvaW50IENsb3VkIG9iamVjdC5cclxuICAgICAqIERvbid0IGNyZWF0ZSBwYXJ0aWNsZXMgbWFudWFsbHksIHVzZSBpbnN0ZWFkIHRoZSBQQ1MgaW50ZXJuYWwgdG9vbHMgbGlrZSBfYWRkUGFydGljbGUoKVxyXG4gICAgICogQHBhcmFtIHBhcnRpY2xlSW5kZXggKGludGVnZXIpIGlzIHRoZSBwYXJ0aWNsZSBpbmRleCBpbiB0aGUgUENTIHBvb2wuIEl0J3MgYWxzbyB0aGUgcGFydGljbGUgaWRlbnRpZmllci5cclxuICAgICAqIEBwYXJhbSBncm91cCAoUG9pbnRzR3JvdXApIGlzIHRoZSBncm91cCB0aGUgcGFydGljbGUgYmVsb25ncyB0b1xyXG4gICAgICogQHBhcmFtIGdyb3VwSWQgKGludGVnZXIpIGlzIHRoZSBncm91cCBpZGVudGlmaWVyIGluIHRoZSBQQ1MuXHJcbiAgICAgKiBAcGFyYW0gaWR4SW5Hcm91cCAoaW50ZWdlcikgaXMgdGhlIGluZGV4IG9mIHRoZSBwYXJ0aWNsZSBpbiB0aGUgY3VycmVudCBwb2ludCBncm91cCAoZXg6IHRoZSAxMHRoIHBvaW50IG9mIGFkZFBvaW50cygzMCkpXHJcbiAgICAgKiBAcGFyYW0gcGNzIGRlZmluZXMgdGhlIFBDUyBpdCBpcyBhc3NvY2lhdGVkIHRvXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHBhcnRpY2xlSW5kZXg6IG51bWJlciwgZ3JvdXA6IFBvaW50c0dyb3VwLCBncm91cElkOiBudW1iZXIsIGlkeEluR3JvdXA6IG51bWJlciwgcGNzOiBQb2ludHNDbG91ZFN5c3RlbSkge1xyXG4gICAgICAgIHRoaXMuaWR4ID0gcGFydGljbGVJbmRleDtcclxuICAgICAgICB0aGlzLl9ncm91cCA9IGdyb3VwO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBJZCA9IGdyb3VwSWQ7XHJcbiAgICAgICAgdGhpcy5pZHhJbkdyb3VwID0gaWR4SW5Hcm91cDtcclxuICAgICAgICB0aGlzLl9wY3MgPSBwY3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgcG9pbnQgc2l6ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHNpemUoKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBwb2ludCBzaXplXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgc2l6ZShzY2FsZTogVmVjdG9yMykge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGVnYWN5IHN1cHBvcnQsIGNoYW5nZWQgcXVhdGVybmlvbiB0byByb3RhdGlvblF1YXRlcm5pb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBxdWF0ZXJuaW9uKCk6IE51bGxhYmxlPFF1YXRlcm5pb24+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGlvblF1YXRlcm5pb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMZWdhY3kgc3VwcG9ydCwgY2hhbmdlZCBxdWF0ZXJuaW9uIHRvIHJvdGF0aW9uUXVhdGVybmlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHF1YXRlcm5pb24ocTogTnVsbGFibGU8UXVhdGVybmlvbj4pIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiA9IHE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgYm9vbGVhbi4gVHJ1ZSBpZiB0aGUgcGFydGljbGUgaW50ZXJzZWN0cyBhIG1lc2gsIGVsc2UgZmFsc2VcclxuICAgICAqIFRoZSBpbnRlcnNlY3Rpb24gaXMgY29tcHV0ZWQgb24gdGhlIHBhcnRpY2xlIHBvc2l0aW9uIGFuZCBBeGlzIEFsaWduZWQgQm91bmRpbmcgQm94IChBQUJCKSBvciBTcGhlcmVcclxuICAgICAqIEBwYXJhbSB0YXJnZXQgaXMgdGhlIG9iamVjdCAocG9pbnQgb3IgbWVzaCkgd2hhdCB0aGUgaW50ZXJzZWN0aW9uIGlzIGNvbXB1dGVkIGFnYWluc3RcclxuICAgICAqIEBwYXJhbSBpc1NwaGVyZSBpcyBib29sZWFuIGZsYWcgd2hlbiBmYWxzZSAoZGVmYXVsdCkgYm91bmRpbmcgYm94IG9mIG1lc2ggaXMgdXNlZCwgd2hlbiB0cnVlIHRoZSBib3VuZGluZyBzcGhlcmUgaXMgdXNlZFxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBpdCBpbnRlcnNlY3RzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbnRlcnNlY3RzTWVzaCh0YXJnZXQ6IE1lc2gsIGlzU3BoZXJlOiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0YXJnZXQuaGFzQm91bmRpbmdJbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fcGNzLm1lc2gpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUG9pbnQgQ2xvdWQgU3lzdGVtIGRvZXNudCBjb250YWluIHRoZSBNZXNoXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzU3BoZXJlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQuZ2V0Qm91bmRpbmdJbmZvKCkuYm91bmRpbmdTcGhlcmUuaW50ZXJzZWN0c1BvaW50KHRoaXMucG9zaXRpb24uYWRkKHRoaXMuX3Bjcy5tZXNoLnBvc2l0aW9uKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBiYm94ID0gdGFyZ2V0LmdldEJvdW5kaW5nSW5mbygpLmJvdW5kaW5nQm94O1xyXG5cclxuICAgICAgICBjb25zdCBtYXhYID0gYmJveC5tYXhpbXVtV29ybGQueDtcclxuICAgICAgICBjb25zdCBtaW5YID0gYmJveC5taW5pbXVtV29ybGQueDtcclxuICAgICAgICBjb25zdCBtYXhZID0gYmJveC5tYXhpbXVtV29ybGQueTtcclxuICAgICAgICBjb25zdCBtaW5ZID0gYmJveC5taW5pbXVtV29ybGQueTtcclxuICAgICAgICBjb25zdCBtYXhaID0gYmJveC5tYXhpbXVtV29ybGQuejtcclxuICAgICAgICBjb25zdCBtaW5aID0gYmJveC5taW5pbXVtV29ybGQuejtcclxuXHJcbiAgICAgICAgY29uc3QgeCA9IHRoaXMucG9zaXRpb24ueCArIHRoaXMuX3Bjcy5tZXNoLnBvc2l0aW9uLng7XHJcbiAgICAgICAgY29uc3QgeSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuX3Bjcy5tZXNoLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgY29uc3QgeiA9IHRoaXMucG9zaXRpb24ueiArIHRoaXMuX3Bjcy5tZXNoLnBvc2l0aW9uLno7XHJcblxyXG4gICAgICAgIHJldHVybiBtaW5YIDw9IHggJiYgeCA8PSBtYXhYICYmIG1pblkgPD0geSAmJiB5IDw9IG1heFkgJiYgbWluWiA8PSB6ICYmIHogPD0gbWF4WjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCB0aGUgcm90YXRpb24gbWF0cml4IG9mIHRoZSBwYXJ0aWNsZVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRSb3RhdGlvbk1hdHJpeChtOiBNYXRyaXgpIHtcclxuICAgICAgICBsZXQgcXVhdGVybmlvbjogUXVhdGVybmlvbjtcclxuICAgICAgICBpZiAodGhpcy5yb3RhdGlvblF1YXRlcm5pb24pIHtcclxuICAgICAgICAgICAgcXVhdGVybmlvbiA9IHRoaXMucm90YXRpb25RdWF0ZXJuaW9uO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHF1YXRlcm5pb24gPSBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdGF0aW9uID0gdGhpcy5yb3RhdGlvbjtcclxuICAgICAgICAgICAgUXVhdGVybmlvbi5Sb3RhdGlvbllhd1BpdGNoUm9sbFRvUmVmKHJvdGF0aW9uLnksIHJvdGF0aW9uLngsIHJvdGF0aW9uLnosIHF1YXRlcm5pb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcXVhdGVybmlvbi50b1JvdGF0aW9uTWF0cml4KG0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGdyb3VwIG9mIHBvaW50cyBpbiBhIHBvaW50cyBjbG91ZCBzeXN0ZW1cclxuICogICogUENTIGludGVybmFsIHRvb2wsIGRvbid0IHVzZSBpdCBtYW51YWxseS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQb2ludHNHcm91cCB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCBvciBzZXQgdGhlIGdyb3VwSWRcclxuICAgICAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgZ3JvdXBJZCBpbnN0ZWFkXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIHB1YmxpYyBnZXQgZ3JvdXBJRCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwSWQ7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBwdWJsaWMgc2V0IGdyb3VwSUQoZ3JvdXBJRDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cElkID0gZ3JvdXBJRDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGdyb3VwIGlkXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdyb3VwSWQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogaW1hZ2UgZGF0YSBmb3IgZ3JvdXAgKGludGVybmFsIHVzZSlcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2dyb3VwSW1hZ2VEYXRhOiBOdWxsYWJsZTxBcnJheUJ1ZmZlclZpZXc+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbWFnZSBXaWR0aCAoaW50ZXJuYWwgdXNlKVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZ3JvdXBJbWdXaWR0aDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbWFnZSBIZWlnaHQgKGludGVybmFsIHVzZSlcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2dyb3VwSW1nSGVpZ2h0OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIEN1c3RvbSBwb3NpdGlvbiBmdW5jdGlvbiAoaW50ZXJuYWwgdXNlKVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfcG9zaXRpb25GdW5jdGlvbjogTnVsbGFibGU8KHBhcnRpY2xlOiBDbG91ZFBvaW50LCBpPzogbnVtYmVyLCBzPzogbnVtYmVyKSA9PiB2b2lkPjtcclxuICAgIC8qKlxyXG4gICAgICogZGVuc2l0eSBwZXIgZmFjZXQgZm9yIHN1cmZhY2UgcG9pbnRzXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9ncm91cERlbnNpdHk6IG51bWJlcltdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbmx5IHdoZW4gcG9pbnRzIGFyZSBjb2xvcmVkIGJ5IHRleHR1cmUgY2FycmllcyBwb2ludGVyIHRvIHRleHR1cmUgbGlzdCBhcnJheVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfdGV4dHVyZU5iOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgcG9pbnRzIGdyb3VwIG9iamVjdC4gVGhpcyBpcyBhbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gcHJvZHVjZSBwYXJ0aWNsZXMgZm9yIHRoZSBQQ1MuXHJcbiAgICAgKiBQQ1MgaW50ZXJuYWwgdG9vbCwgZG9uJ3QgdXNlIGl0IG1hbnVhbGx5LlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHBvc0Z1bmN0aW9uOiBOdWxsYWJsZTwocGFydGljbGU6IENsb3VkUG9pbnQsIGk/OiBudW1iZXIsIHM/OiBudW1iZXIpID0+IHZvaWQ+KSB7XHJcbiAgICAgICAgdGhpcy5ncm91cElkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb25GdW5jdGlvbiA9IHBvc0Z1bmN0aW9uO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgSW5kaWNlc0FycmF5LCBGbG9hdEFycmF5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IENvbG9yNCwgQ29sb3IzIH0gZnJvbSBcIi4uL01hdGhzL21hdGhcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiwgVmVjdG9yMywgVmVjdG9yNCwgVG1wVmVjdG9ycywgTWF0cml4IH0gZnJvbSBcIi4uL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBWZXJ0ZXhCdWZmZXIgfSBmcm9tIFwiLi4vQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHsgVmVydGV4RGF0YSB9IGZyb20gXCIuLi9NZXNoZXMvbWVzaC52ZXJ0ZXhEYXRhXCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiLi4vTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHsgRW5naW5lU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9lbmdpbmVTdG9yZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lLCBJRGlzcG9zYWJsZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG5pbXBvcnQgeyBDbG91ZFBvaW50LCBQb2ludHNHcm91cCB9IGZyb20gXCIuL2Nsb3VkUG9pbnRcIjtcclxuaW1wb3J0IHsgUmF5IH0gZnJvbSBcIi4uL0N1bGxpbmcvcmF5XCI7XHJcbmltcG9ydCB0eXBlIHsgUGlja2luZ0luZm8gfSBmcm9tIFwiLi4vQ29sbGlzaW9ucy9waWNraW5nSW5mb1wiO1xyXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcIi4uL01hdGVyaWFscy9zdGFuZGFyZE1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcIi4vLi4vTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB7IFJhbmRvbVJhbmdlIH0gZnJvbSBcIi4uL01hdGhzL21hdGguc2NhbGFyLmZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcIi4uL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5cclxuLyoqIERlZmluZXMgdGhlIDQgY29sb3Igb3B0aW9ucyAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBQb2ludENvbG9yIHtcclxuICAgIC8qKiBjb2xvciB2YWx1ZSAqL1xyXG4gICAgQ29sb3IgPSAyLFxyXG4gICAgLyoqIHV2IHZhbHVlICovXHJcbiAgICBVViA9IDEsXHJcbiAgICAvKiogcmFuZG9tIHZhbHVlICovXHJcbiAgICBSYW5kb20gPSAwLFxyXG4gICAgLyoqIHN0YXRlZCB2YWx1ZSAqL1xyXG4gICAgU3RhdGVkID0gMyxcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBQb2ludENsb3VkU3lzdGVtIChQQ1MpIGlzIGEgc2luZ2xlIHVwZGF0YWJsZSBtZXNoLiBUaGUgcG9pbnRzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZlcnRpY2VzIG9mIHRoaXMgYmlnIG1lc2guXHJcbiAqIEFzIGl0IGlzIGp1c3QgYSBtZXNoLCB0aGUgUG9pbnRDbG91ZFN5c3RlbSBoYXMgYWxsIHRoZSBzYW1lIHByb3BlcnRpZXMgYXMgYW55IG90aGVyIEJKUyBtZXNoIDogbm90IG1vcmUsIG5vdCBsZXNzLiBJdCBjYW4gYmUgc2NhbGVkLCByb3RhdGVkLCB0cmFuc2xhdGVkLCBlbmxpZ2h0ZWQsIHRleHR1cmVkLCBtb3ZlZCwgZXRjLlxyXG5cclxuICogVGhlIFBvaW50Q2xvdWRTeXN0ZW0gaXMgYWxzbyBhIHBhcnRpY2xlIHN5c3RlbSwgd2l0aCBlYWNoIHBvaW50IGJlaW5nIGEgcGFydGljbGUuIEl0IHByb3ZpZGVzIHNvbWUgbWV0aG9kcyB0byBtYW5hZ2UgdGhlIHBhcnRpY2xlcy5cclxuICogSG93ZXZlciBpdCBpcyBiZWhhdmlvciBhZ25vc3RpYy4gVGhpcyBtZWFucyBpdCBoYXMgbm8gZW1pdHRlciwgbm8gcGFydGljbGUgcGh5c2ljcywgbm8gcGFydGljbGUgcmVjeWNsZXIuIFlvdSBoYXZlIHRvIGltcGxlbWVudCB5b3VyIG93biBiZWhhdmlvci5cclxuICpcclxuICogRnVsbCBkb2N1bWVudGF0aW9uIGhlcmUgOiBUTyBCRSBFTlRFUkVEXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG9pbnRzQ2xvdWRTeXN0ZW0gaW1wbGVtZW50cyBJRGlzcG9zYWJsZSB7XHJcbiAgICAvKipcclxuICAgICAqICBUaGUgUENTIGFycmF5IG9mIGNsb3VkIHBvaW50IG9iamVjdHMuIEp1c3QgYWNjZXNzIGVhY2ggcGFydGljbGUgYXMgd2l0aCBhbnkgY2xhc3NpYyBhcnJheS5cclxuICAgICAqICBFeGFtcGxlIDogdmFyIHAgPSBTUFMucGFydGljbGVzW2ldO1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGFydGljbGVzOiBDbG91ZFBvaW50W10gPSBuZXcgQXJyYXk8Q2xvdWRQb2ludD4oKTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIFBDUyB0b3RhbCBudW1iZXIgb2YgcGFydGljbGVzLiBSZWFkIG9ubHkuIFVzZSBQQ1MuY291bnRlciBpbnN0ZWFkIGlmIHlvdSBuZWVkIHRvIHNldCB5b3VyIG93biB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5iUGFydGljbGVzOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGEgY291bnRlciBmb3IgeW91ciBvd24gdXNhZ2UuIEl0J3Mgbm90IHNldCBieSBhbnkgU1BTIGZ1bmN0aW9ucy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvdW50ZXI6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBQQ1MgbmFtZS4gVGhpcyBuYW1lIGlzIGFsc28gZ2l2ZW4gdG8gdGhlIHVuZGVybHlpbmcgbWVzaC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIFBDUyBtZXNoLiBJdCdzIGEgc3RhbmRhcmQgQkpTIE1lc2gsIHNvIGFsbCB0aGUgbWV0aG9kcyBmcm9tIHRoZSBNZXNoIGNsYXNzIGFyZSBhdmFpbGFibGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtZXNoPzogTWVzaDtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBlbXB0eSBvYmplY3QgaXMgaW50ZW5kZWQgdG8gc3RvcmUgc29tZSBQQ1Mgc3BlY2lmaWMgb3IgdGVtcG9yYXJ5IHZhbHVlcyBpbiBvcmRlciB0byBsb3dlciB0aGUgR2FyYmFnZSBDb2xsZWN0b3IgYWN0aXZpdHkuXHJcbiAgICAgKiBQbGVhc2UgcmVhZCA6XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YXJzOiBhbnkgPSB7fTtcclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfc2l6ZTogbnVtYmVyOyAvL3NpemUgb2YgZWFjaCBwb2ludCBwYXJ0aWNsZVxyXG5cclxuICAgIHByaXZhdGUgX3NjZW5lOiBTY2VuZTtcclxuICAgIHByaXZhdGUgX3Byb21pc2VzOiBBcnJheTxQcm9taXNlPGFueT4+ID0gW107XHJcbiAgICBwcml2YXRlIF9wb3NpdGlvbnM6IG51bWJlcltdID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgIHByaXZhdGUgX2luZGljZXM6IG51bWJlcltdID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgIHByaXZhdGUgX25vcm1hbHM6IG51bWJlcltdID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgIHByaXZhdGUgX2NvbG9yczogbnVtYmVyW10gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgcHJpdmF0ZSBfdXZzOiBudW1iZXJbXSA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICBwcml2YXRlIF9pbmRpY2VzMzI6IEluZGljZXNBcnJheTsgLy8gdXNlZCBhcyBkZXB0aCBzb3J0ZWQgYXJyYXkgaWYgZGVwdGggc29ydCBlbmFibGVkLCBlbHNlIHVzZWQgYXMgdHlwZWQgaW5kaWNlc1xyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25zMzI6IEZsb2F0MzJBcnJheTsgLy8gdXBkYXRlZCBwb3NpdGlvbnMgZm9yIHRoZSBWQk9cclxuICAgIHByaXZhdGUgX2NvbG9yczMyOiBGbG9hdDMyQXJyYXk7XHJcbiAgICBwcml2YXRlIF91dnMzMjogRmxvYXQzMkFycmF5O1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRhYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2lzVmlzaWJpbGl0eUJveExvY2tlZCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfYWx3YXlzVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfZ3JvdXBzOiBudW1iZXJbXSA9IG5ldyBBcnJheTxudW1iZXI+KCk7IC8vc3RhcnQgaW5kaWNlcyBmb3IgZWFjaCBncm91cCBvZiBwYXJ0aWNsZXNcclxuICAgIHByaXZhdGUgX2dyb3VwQ291bnRlcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2NvbXB1dGVQYXJ0aWNsZUNvbG9yOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2NvbXB1dGVQYXJ0aWNsZVRleHR1cmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfY29tcHV0ZVBhcnRpY2xlUm90YXRpb246IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfY29tcHV0ZUJvdW5kaW5nQm94OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9pc1JlYWR5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBwYXJ0aWNsZSBwb3NpdGlvbnMgY29tcHV0ZWQgYnkgdGhlIFBvaW50IENsb3VkIFN5c3RlbVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHBvc2l0aW9ucygpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbnMzMjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHBhcnRpY2xlIGNvbG9ycyBjb21wdXRlZCBieSB0aGUgUG9pbnQgQ2xvdWQgU3lzdGVtXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY29sb3JzKCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yczMyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgcGFydGljbGUgdXZzIGNvbXB1dGVkIGJ5IHRoZSBQb2ludCBDbG91ZCBTeXN0ZW1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB1dnMoKTogRmxvYXQzMkFycmF5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXZzMzI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgUENTIChQb2ludHMgQ2xvdWQgU3lzdGVtKSBvYmplY3RcclxuICAgICAqIEBwYXJhbSBuYW1lIChTdHJpbmcpIGlzIHRoZSBQQ1MgbmFtZSwgdGhpcyB3aWxsIGJlIHRoZSB1bmRlcmx5aW5nIG1lc2ggbmFtZVxyXG4gICAgICogQHBhcmFtIHBvaW50U2l6ZSAobnVtYmVyKSBpcyB0aGUgc2l6ZSBmb3IgZWFjaCBwb2ludC4gSGFzIG5vIGVmZmVjdCBvbiBhIFdlYkdQVSBlbmdpbmUuXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgKFNjZW5lKSBpcyB0aGUgc2NlbmUgaW4gd2hpY2ggdGhlIFBDUyBpcyBhZGRlZFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgZGVmaW5lcyB0aGUgb3B0aW9ucyBvZiB0aGUgUENTIGUuZy5cclxuICAgICAqICogdXBkYXRhYmxlIChvcHRpb25hbCBib29sZWFuLCBkZWZhdWx0IHRydWUpIDogaWYgdGhlIFBDUyBtdXN0IGJlIHVwZGF0YWJsZSBvciBpbW11dGFibGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb2ludFNpemU6IG51bWJlciwgc2NlbmU6IFNjZW5lLCBvcHRpb25zPzogeyB1cGRhdGFibGU/OiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3NpemUgPSBwb2ludFNpemU7XHJcbiAgICAgICAgdGhpcy5fc2NlbmUgPSBzY2VuZSB8fCBFbmdpbmVTdG9yZS5MYXN0Q3JlYXRlZFNjZW5lO1xyXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMudXBkYXRhYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRhYmxlID0gb3B0aW9ucy51cGRhdGFibGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIFBDUyB1bmRlcmx5aW5nIG1lc2guIFJldHVybnMgYSBzdGFuZGFyZCBNZXNoLlxyXG4gICAgICogSWYgbm8gcG9pbnRzIHdlcmUgYWRkZWQgdG8gdGhlIFBDUywgdGhlIHJldHVybmVkIG1lc2ggaXMganVzdCBhIHNpbmdsZSBwb2ludC5cclxuICAgICAqIEBwYXJhbSBtYXRlcmlhbCBUaGUgbWF0ZXJpYWwgdG8gdXNlIHRvIHJlbmRlciB0aGUgbWVzaC4gSWYgbm90IHByb3ZpZGVkLCB3aWxsIGNyZWF0ZSBhIGRlZmF1bHQgb25lXHJcbiAgICAgKiBAcmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSBjcmVhdGVkIG1lc2hcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGJ1aWxkTWVzaEFzeW5jKG1hdGVyaWFsPzogTWF0ZXJpYWwpOiBQcm9taXNlPE1lc2g+IHtcclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLl9wcm9taXNlcyk7XHJcbiAgICAgICAgdGhpcy5faXNSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2J1aWxkTWVzaEFzeW5jKG1hdGVyaWFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9idWlsZE1lc2hBc3luYyhtYXRlcmlhbD86IE1hdGVyaWFsKTogUHJvbWlzZTxNZXNoPiB7XHJcbiAgICAgICAgaWYgKHRoaXMubmJQYXJ0aWNsZXMgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRQb2ludHMoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9wb3NpdGlvbnMzMiA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5fcG9zaXRpb25zKTtcclxuICAgICAgICB0aGlzLl91dnMzMiA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5fdXZzKTtcclxuICAgICAgICB0aGlzLl9jb2xvcnMzMiA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5fY29sb3JzKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmVydGV4RGF0YSA9IG5ldyBWZXJ0ZXhEYXRhKCk7XHJcbiAgICAgICAgdmVydGV4RGF0YS5zZXQodGhpcy5fcG9zaXRpb25zMzIsIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fdXZzMzIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2ZXJ0ZXhEYXRhLnNldCh0aGlzLl91dnMzMiwgVmVydGV4QnVmZmVyLlVWS2luZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBlYyA9IDA7IC8vZW1pc3NpdmUgY29sb3IgdmFsdWUgMCBmb3IgVVZzLCAxIGZvciBjb2xvclxyXG4gICAgICAgIGlmICh0aGlzLl9jb2xvcnMzMi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGVjID0gMTtcclxuICAgICAgICAgICAgdmVydGV4RGF0YS5zZXQodGhpcy5fY29sb3JzMzIsIFZlcnRleEJ1ZmZlci5Db2xvcktpbmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtZXNoID0gbmV3IE1lc2godGhpcy5uYW1lLCB0aGlzLl9zY2VuZSk7XHJcbiAgICAgICAgdmVydGV4RGF0YS5hcHBseVRvTWVzaChtZXNoLCB0aGlzLl91cGRhdGFibGUpO1xyXG4gICAgICAgIHRoaXMubWVzaCA9IG1lc2g7XHJcblxyXG4gICAgICAgIC8vIGZyZWUgbWVtb3J5XHJcbiAgICAgICAgKDxhbnk+dGhpcy5fcG9zaXRpb25zKSA9IG51bGw7XHJcbiAgICAgICAgKDxhbnk+dGhpcy5fdXZzKSA9IG51bGw7XHJcbiAgICAgICAgKDxhbnk+dGhpcy5fY29sb3JzKSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fdXBkYXRhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWF0ID0gbWF0ZXJpYWw7XHJcblxyXG4gICAgICAgIGlmICghbWF0KSB7XHJcbiAgICAgICAgICAgIG1hdCA9IG5ldyBTdGFuZGFyZE1hdGVyaWFsKFwicG9pbnQgY2xvdWQgbWF0ZXJpYWxcIiwgdGhpcy5fc2NlbmUpO1xyXG4gICAgICAgICAgICAoPFN0YW5kYXJkTWF0ZXJpYWw+bWF0KS5lbWlzc2l2ZUNvbG9yID0gbmV3IENvbG9yMyhlYywgZWMsIGVjKTtcclxuICAgICAgICAgICAgKDxTdGFuZGFyZE1hdGVyaWFsPm1hdCkuZGlzYWJsZUxpZ2h0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgKDxTdGFuZGFyZE1hdGVyaWFsPm1hdCkucG9pbnRzQ2xvdWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAoPFN0YW5kYXJkTWF0ZXJpYWw+bWF0KS5wb2ludFNpemUgPSB0aGlzLl9zaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXNoLm1hdGVyaWFsID0gbWF0O1xyXG5cclxuICAgICAgICByZXR1cm4gbWVzaDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGRzIGEgbmV3IHBhcnRpY2xlIG9iamVjdCBpbiB0aGUgcGFydGljbGVzIGFycmF5XHJcbiAgICBwcml2YXRlIF9hZGRQYXJ0aWNsZShpZHg6IG51bWJlciwgZ3JvdXA6IFBvaW50c0dyb3VwLCBncm91cElkOiBudW1iZXIsIGlkeEluR3JvdXA6IG51bWJlcik6IENsb3VkUG9pbnQge1xyXG4gICAgICAgIGNvbnN0IGNwID0gbmV3IENsb3VkUG9pbnQoaWR4LCBncm91cCwgZ3JvdXBJZCwgaWR4SW5Hcm91cCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChjcCk7XHJcbiAgICAgICAgcmV0dXJuIGNwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JhbmRvbVVuaXRWZWN0b3IocGFydGljbGU6IENsb3VkUG9pbnQpOiB2b2lkIHtcclxuICAgICAgICBwYXJ0aWNsZS5wb3NpdGlvbiA9IG5ldyBWZWN0b3IzKE1hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHBhcnRpY2xlLmNvbG9yID0gbmV3IENvbG9yNCgxLCAxLCAxLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRDb2xvckluZGljZXNGb3JDb29yZChwb2ludHNHcm91cDogUG9pbnRzR3JvdXAsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyKTogQ29sb3I0IHtcclxuICAgICAgICBjb25zdCBpbWFnZURhdGEgPSA8VWludDhBcnJheT5wb2ludHNHcm91cC5fZ3JvdXBJbWFnZURhdGE7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSB5ICogKHdpZHRoICogNCkgKyB4ICogNDtcclxuICAgICAgICBjb25zdCBjb2xvckluZGljZXMgPSBbY29sb3IsIGNvbG9yICsgMSwgY29sb3IgKyAyLCBjb2xvciArIDNdO1xyXG4gICAgICAgIGNvbnN0IHJlZEluZGV4ID0gY29sb3JJbmRpY2VzWzBdO1xyXG4gICAgICAgIGNvbnN0IGdyZWVuSW5kZXggPSBjb2xvckluZGljZXNbMV07XHJcbiAgICAgICAgY29uc3QgYmx1ZUluZGV4ID0gY29sb3JJbmRpY2VzWzJdO1xyXG4gICAgICAgIGNvbnN0IGFscGhhSW5kZXggPSBjb2xvckluZGljZXNbM107XHJcbiAgICAgICAgY29uc3QgcmVkRm9yQ29vcmQgPSBpbWFnZURhdGFbcmVkSW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGdyZWVuRm9yQ29vcmQgPSBpbWFnZURhdGFbZ3JlZW5JbmRleF07XHJcbiAgICAgICAgY29uc3QgYmx1ZUZvckNvb3JkID0gaW1hZ2VEYXRhW2JsdWVJbmRleF07XHJcbiAgICAgICAgY29uc3QgYWxwaGFGb3JDb29yZCA9IGltYWdlRGF0YVthbHBoYUluZGV4XTtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yNChyZWRGb3JDb29yZCAvIDI1NSwgZ3JlZW5Gb3JDb29yZCAvIDI1NSwgYmx1ZUZvckNvb3JkIC8gMjU1LCBhbHBoYUZvckNvb3JkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRQb2ludHNDb2xvck9yVVYoXHJcbiAgICAgICAgbWVzaDogTWVzaCxcclxuICAgICAgICBwb2ludHNHcm91cDogUG9pbnRzR3JvdXAsXHJcbiAgICAgICAgaXNWb2x1bWU6IGJvb2xlYW4sXHJcbiAgICAgICAgY29sb3JGcm9tVGV4dHVyZT86IGJvb2xlYW4sXHJcbiAgICAgICAgaGFzVGV4dHVyZT86IGJvb2xlYW4sXHJcbiAgICAgICAgY29sb3I/OiBDb2xvcjQsXHJcbiAgICAgICAgcmFuZ2U/OiBudW1iZXIsXHJcbiAgICAgICAgdXZTZXRJbmRleD86IG51bWJlclxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgdXZTZXRJbmRleCA9IHV2U2V0SW5kZXggPz8gMDtcclxuXHJcbiAgICAgICAgaWYgKGlzVm9sdW1lKSB7XHJcbiAgICAgICAgICAgIG1lc2gudXBkYXRlRmFjZXREYXRhKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBib3VuZEluZm8gPSBtZXNoLmdldEJvdW5kaW5nSW5mbygpO1xyXG4gICAgICAgIGNvbnN0IGRpYW1ldGVyID0gMiAqIGJvdW5kSW5mby5ib3VuZGluZ1NwaGVyZS5yYWRpdXM7XHJcblxyXG4gICAgICAgIGxldCBtZXNoUG9zID0gPEZsb2F0QXJyYXk+bWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCk7XHJcbiAgICAgICAgY29uc3QgbWVzaEluZCA9IDxJbmRpY2VzQXJyYXk+bWVzaC5nZXRJbmRpY2VzKCk7XHJcbiAgICAgICAgY29uc3QgbWVzaFVWID0gPEZsb2F0QXJyYXk+bWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlVWS2luZCArICh1dlNldEluZGV4ID8gdXZTZXRJbmRleCArIDEgOiBcIlwiKSk7XHJcbiAgICAgICAgY29uc3QgbWVzaENvbCA9IDxGbG9hdEFycmF5Pm1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Db2xvcktpbmQpO1xyXG5cclxuICAgICAgICBjb25zdCBwbGFjZSA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgIG1lc2guY29tcHV0ZVdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgY29uc3QgbWVzaE1hdHJpeDogTWF0cml4ID0gbWVzaC5nZXRXb3JsZE1hdHJpeCgpO1xyXG4gICAgICAgIGlmICghbWVzaE1hdHJpeC5pc0lkZW50aXR5KCkpIHtcclxuICAgICAgICAgICAgbWVzaFBvcyA9IG1lc2hQb3Muc2xpY2UoMCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgbWVzaFBvcy5sZW5ndGggLyAzOyBwKyspIHtcclxuICAgICAgICAgICAgICAgIFZlY3RvcjMuVHJhbnNmb3JtQ29vcmRpbmF0ZXNGcm9tRmxvYXRzVG9SZWYobWVzaFBvc1szICogcF0sIG1lc2hQb3NbMyAqIHAgKyAxXSwgbWVzaFBvc1szICogcCArIDJdLCBtZXNoTWF0cml4LCBwbGFjZSk7XHJcbiAgICAgICAgICAgICAgICBtZXNoUG9zWzMgKiBwXSA9IHBsYWNlLng7XHJcbiAgICAgICAgICAgICAgICBtZXNoUG9zWzMgKiBwICsgMV0gPSBwbGFjZS55O1xyXG4gICAgICAgICAgICAgICAgbWVzaFBvc1szICogcCArIDJdID0gcGxhY2UuejtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGlkeFBvaW50czogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgbGV0IGlkMDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgaWQxOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBpZDI6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHYwWDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgdjBZOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCB2MFo6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHYxWDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgdjFZOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCB2MVo6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHYyWDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgdjJZOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCB2Mlo6IG51bWJlciA9IDA7XHJcbiAgICAgICAgY29uc3QgdmVydGV4MCA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IHZlcnRleDEgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXgyID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgY29uc3QgdmVjMCA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IHZlYzEgPSBWZWN0b3IzLlplcm8oKTtcclxuXHJcbiAgICAgICAgbGV0IHV2MFg6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHV2MFk6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHV2MVg6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHV2MVk6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHV2Mlg6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHV2Mlk6IG51bWJlciA9IDA7XHJcbiAgICAgICAgY29uc3QgdXYwID0gVmVjdG9yMi5aZXJvKCk7XHJcbiAgICAgICAgY29uc3QgdXYxID0gVmVjdG9yMi5aZXJvKCk7XHJcbiAgICAgICAgY29uc3QgdXYyID0gVmVjdG9yMi5aZXJvKCk7XHJcbiAgICAgICAgY29uc3QgdXZlYzAgPSBWZWN0b3IyLlplcm8oKTtcclxuICAgICAgICBjb25zdCB1dmVjMSA9IFZlY3RvcjIuWmVybygpO1xyXG5cclxuICAgICAgICBsZXQgY29sMFg6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGNvbDBZOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBjb2wwWjogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgY29sMEE6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGNvbDFYOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBjb2wxWTogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgY29sMVo6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGNvbDFBOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBjb2wyWDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgY29sMlk6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGNvbDJaOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBjb2wyQTogbnVtYmVyID0gMDtcclxuICAgICAgICBjb25zdCBjb2wwID0gVmVjdG9yNC5aZXJvKCk7XHJcbiAgICAgICAgY29uc3QgY29sMSA9IFZlY3RvcjQuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IGNvbDIgPSBWZWN0b3I0Llplcm8oKTtcclxuICAgICAgICBjb25zdCBjb2x2ZWMwID0gVmVjdG9yNC5aZXJvKCk7XHJcbiAgICAgICAgY29uc3QgY29sdmVjMSA9IFZlY3RvcjQuWmVybygpO1xyXG5cclxuICAgICAgICBsZXQgbGFtZGE6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IG11OiBudW1iZXIgPSAwO1xyXG4gICAgICAgIHJhbmdlID0gcmFuZ2UgPyByYW5nZSA6IDA7XHJcblxyXG4gICAgICAgIGxldCBmYWNldFBvaW50OiBWZWN0b3IzO1xyXG4gICAgICAgIGxldCB1dlBvaW50OiBWZWN0b3IyO1xyXG4gICAgICAgIGxldCBjb2xQb2ludDogVmVjdG9yNCA9IG5ldyBWZWN0b3I0KDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICBsZXQgbm9ybSA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgIGxldCB0YW5nID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgbGV0IGJpTm9ybSA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IDA7XHJcbiAgICAgICAgbGV0IGZhY2V0UGxhbmVWZWMgPSBWZWN0b3IzLlplcm8oKTtcclxuXHJcbiAgICAgICAgbGV0IGdhcCA9IDA7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gMDtcclxuICAgICAgICBjb25zdCByYXkgPSBuZXcgUmF5KFZlY3RvcjMuWmVybygpLCBuZXcgVmVjdG9yMygxLCAwLCAwKSk7XHJcbiAgICAgICAgbGV0IHBpY2tJbmZvOiBQaWNraW5nSW5mbztcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gVmVjdG9yMy5aZXJvKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtZXNoSW5kLmxlbmd0aCAvIDM7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWQwID0gbWVzaEluZFszICogaW5kZXhdO1xyXG4gICAgICAgICAgICBpZDEgPSBtZXNoSW5kWzMgKiBpbmRleCArIDFdO1xyXG4gICAgICAgICAgICBpZDIgPSBtZXNoSW5kWzMgKiBpbmRleCArIDJdO1xyXG4gICAgICAgICAgICB2MFggPSBtZXNoUG9zWzMgKiBpZDBdO1xyXG4gICAgICAgICAgICB2MFkgPSBtZXNoUG9zWzMgKiBpZDAgKyAxXTtcclxuICAgICAgICAgICAgdjBaID0gbWVzaFBvc1szICogaWQwICsgMl07XHJcbiAgICAgICAgICAgIHYxWCA9IG1lc2hQb3NbMyAqIGlkMV07XHJcbiAgICAgICAgICAgIHYxWSA9IG1lc2hQb3NbMyAqIGlkMSArIDFdO1xyXG4gICAgICAgICAgICB2MVogPSBtZXNoUG9zWzMgKiBpZDEgKyAyXTtcclxuICAgICAgICAgICAgdjJYID0gbWVzaFBvc1szICogaWQyXTtcclxuICAgICAgICAgICAgdjJZID0gbWVzaFBvc1szICogaWQyICsgMV07XHJcbiAgICAgICAgICAgIHYyWiA9IG1lc2hQb3NbMyAqIGlkMiArIDJdO1xyXG4gICAgICAgICAgICB2ZXJ0ZXgwLnNldCh2MFgsIHYwWSwgdjBaKTtcclxuICAgICAgICAgICAgdmVydGV4MS5zZXQodjFYLCB2MVksIHYxWik7XHJcbiAgICAgICAgICAgIHZlcnRleDIuc2V0KHYyWCwgdjJZLCB2MlopO1xyXG4gICAgICAgICAgICB2ZXJ0ZXgxLnN1YnRyYWN0VG9SZWYodmVydGV4MCwgdmVjMCk7XHJcbiAgICAgICAgICAgIHZlcnRleDIuc3VidHJhY3RUb1JlZih2ZXJ0ZXgxLCB2ZWMxKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtZXNoVVYpIHtcclxuICAgICAgICAgICAgICAgIHV2MFggPSBtZXNoVVZbMiAqIGlkMF07XHJcbiAgICAgICAgICAgICAgICB1djBZID0gbWVzaFVWWzIgKiBpZDAgKyAxXTtcclxuICAgICAgICAgICAgICAgIHV2MVggPSBtZXNoVVZbMiAqIGlkMV07XHJcbiAgICAgICAgICAgICAgICB1djFZID0gbWVzaFVWWzIgKiBpZDEgKyAxXTtcclxuICAgICAgICAgICAgICAgIHV2MlggPSBtZXNoVVZbMiAqIGlkMl07XHJcbiAgICAgICAgICAgICAgICB1djJZID0gbWVzaFVWWzIgKiBpZDIgKyAxXTtcclxuICAgICAgICAgICAgICAgIHV2MC5zZXQodXYwWCwgdXYwWSk7XHJcbiAgICAgICAgICAgICAgICB1djEuc2V0KHV2MVgsIHV2MVkpO1xyXG4gICAgICAgICAgICAgICAgdXYyLnNldCh1djJYLCB1djJZKTtcclxuICAgICAgICAgICAgICAgIHV2MS5zdWJ0cmFjdFRvUmVmKHV2MCwgdXZlYzApO1xyXG4gICAgICAgICAgICAgICAgdXYyLnN1YnRyYWN0VG9SZWYodXYxLCB1dmVjMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtZXNoQ29sICYmIGNvbG9yRnJvbVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIGNvbDBYID0gbWVzaENvbFs0ICogaWQwXTtcclxuICAgICAgICAgICAgICAgIGNvbDBZID0gbWVzaENvbFs0ICogaWQwICsgMV07XHJcbiAgICAgICAgICAgICAgICBjb2wwWiA9IG1lc2hDb2xbNCAqIGlkMCArIDJdO1xyXG4gICAgICAgICAgICAgICAgY29sMEEgPSBtZXNoQ29sWzQgKiBpZDAgKyAzXTtcclxuICAgICAgICAgICAgICAgIGNvbDFYID0gbWVzaENvbFs0ICogaWQxXTtcclxuICAgICAgICAgICAgICAgIGNvbDFZID0gbWVzaENvbFs0ICogaWQxICsgMV07XHJcbiAgICAgICAgICAgICAgICBjb2wxWiA9IG1lc2hDb2xbNCAqIGlkMSArIDJdO1xyXG4gICAgICAgICAgICAgICAgY29sMUEgPSBtZXNoQ29sWzQgKiBpZDEgKyAzXTtcclxuICAgICAgICAgICAgICAgIGNvbDJYID0gbWVzaENvbFs0ICogaWQyXTtcclxuICAgICAgICAgICAgICAgIGNvbDJZID0gbWVzaENvbFs0ICogaWQyICsgMV07XHJcbiAgICAgICAgICAgICAgICBjb2wyWiA9IG1lc2hDb2xbNCAqIGlkMiArIDJdO1xyXG4gICAgICAgICAgICAgICAgY29sMkEgPSBtZXNoQ29sWzQgKiBpZDIgKyAzXTtcclxuICAgICAgICAgICAgICAgIGNvbDAuc2V0KGNvbDBYLCBjb2wwWSwgY29sMFosIGNvbDBBKTtcclxuICAgICAgICAgICAgICAgIGNvbDEuc2V0KGNvbDFYLCBjb2wxWSwgY29sMVosIGNvbDFBKTtcclxuICAgICAgICAgICAgICAgIGNvbDIuc2V0KGNvbDJYLCBjb2wyWSwgY29sMlosIGNvbDJBKTtcclxuICAgICAgICAgICAgICAgIGNvbDEuc3VidHJhY3RUb1JlZihjb2wwLCBjb2x2ZWMwKTtcclxuICAgICAgICAgICAgICAgIGNvbDIuc3VidHJhY3RUb1JlZihjb2wxLCBjb2x2ZWMxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHdpZHRoOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQ6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IGRlbHRhUzogbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgZGVsdGFWOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBoOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBzOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCB2OiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBoc3ZDb2w6IENvbG9yMztcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGVkQ29sb3I6IENvbG9yMyA9IG5ldyBDb2xvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbFBvaW50MzogQ29sb3IzID0gbmV3IENvbG9yMygwLCAwLCAwKTtcclxuICAgICAgICAgICAgbGV0IHBvaW50Q29sb3JzOiBDb2xvcjQ7XHJcbiAgICAgICAgICAgIGxldCBwYXJ0aWNsZTogQ2xvdWRQb2ludDtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzR3JvdXAuX2dyb3VwRGVuc2l0eVtpbmRleF07IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWR4UG9pbnRzID0gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkUGFydGljbGUoaWR4UG9pbnRzLCBwb2ludHNHcm91cCwgdGhpcy5fZ3JvdXBDb3VudGVyLCBpbmRleCArIGkpO1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGUgPSB0aGlzLnBhcnRpY2xlc1tpZHhQb2ludHNdO1xyXG4gICAgICAgICAgICAgICAgLy9mb3JtIGEgcG9pbnQgaW5zaWRlIHRoZSBmYWNldCB2MCwgdjEsIHYyO1xyXG4gICAgICAgICAgICAgICAgbGFtZGEgPSBNYXRoLnNxcnQoUmFuZG9tUmFuZ2UoMCwgMSkpO1xyXG4gICAgICAgICAgICAgICAgbXUgPSBSYW5kb21SYW5nZSgwLCAxKTtcclxuICAgICAgICAgICAgICAgIGZhY2V0UG9pbnQgPSB2ZXJ0ZXgwLmFkZCh2ZWMwLnNjYWxlKGxhbWRhKSkuYWRkKHZlYzEuc2NhbGUobGFtZGEgKiBtdSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVm9sdW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybSA9IG1lc2guZ2V0RmFjZXROb3JtYWwoaW5kZXgpLm5vcm1hbGl6ZSgpLnNjYWxlKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB0YW5nID0gdmVjMC5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJpTm9ybSA9IFZlY3RvcjMuQ3Jvc3Mobm9ybSwgdGFuZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5nbGUgPSBSYW5kb21SYW5nZSgwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFjZXRQbGFuZVZlYyA9IHRhbmcuc2NhbGUoTWF0aC5jb3MoYW5nbGUpKS5hZGQoYmlOb3JtLnNjYWxlKE1hdGguc2luKGFuZ2xlKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlID0gUmFuZG9tUmFuZ2UoMC4xLCBNYXRoLlBJIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gZmFjZXRQbGFuZVZlYy5zY2FsZShNYXRoLmNvcyhhbmdsZSkpLmFkZChub3JtLnNjYWxlKE1hdGguc2luKGFuZ2xlKSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByYXkub3JpZ2luID0gZmFjZXRQb2ludC5hZGQoZGlyZWN0aW9uLnNjYWxlKDAuMDAwMDEpKTtcclxuICAgICAgICAgICAgICAgICAgICByYXkuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHJheS5sZW5ndGggPSBkaWFtZXRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwaWNrSW5mbyA9IHJheS5pbnRlcnNlY3RzTWVzaChtZXNoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGlja0luZm8uaGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gcGlja0luZm8ucGlja2VkUG9pbnQhLnN1YnRyYWN0KGZhY2V0UG9pbnQpLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXAgPSBSYW5kb21SYW5nZSgwLCAxKSAqIGRpc3RhbmNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNldFBvaW50LmFkZEluUGxhY2UoZGlyZWN0aW9uLnNjYWxlKGdhcCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnBvc2l0aW9uID0gZmFjZXRQb2ludC5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25zLnB1c2gocGFydGljbGUucG9zaXRpb24ueCwgcGFydGljbGUucG9zaXRpb24ueSwgcGFydGljbGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb3JGcm9tVGV4dHVyZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc2hVVikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dlBvaW50ID0gdXYwLmFkZCh1dmVjMC5zY2FsZShsYW1kYSkpLmFkZCh1dmVjMS5zY2FsZShsYW1kYSAqIG11KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xvckZyb21UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1NldCBwYXJ0aWNsZSBjb2xvciB0byB0ZXh0dXJlIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzVGV4dHVyZSAmJiBwb2ludHNHcm91cC5fZ3JvdXBJbWFnZURhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHBvaW50c0dyb3VwLl9ncm91cEltZ1dpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHBvaW50c0dyb3VwLl9ncm91cEltZ0hlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludENvbG9ycyA9IHRoaXMuX2dldENvbG9ySW5kaWNlc0ZvckNvb3JkKHBvaW50c0dyb3VwLCBNYXRoLnJvdW5kKHV2UG9pbnQueCAqIHdpZHRoKSwgTWF0aC5yb3VuZCh1dlBvaW50LnkgKiBoZWlnaHQpLCB3aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGUuY29sb3IgPSBwb2ludENvbG9ycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xvcnMucHVzaChwb2ludENvbG9ycy5yLCBwb2ludENvbG9ycy5nLCBwb2ludENvbG9ycy5iLCBwb2ludENvbG9ycy5hKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc2hDb2wpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9mYWlsdXJlIGluIHRleHR1cmUgYW5kIGNvbG9ycyBhdmFpbGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sUG9pbnQgPSBjb2wwLmFkZChjb2x2ZWMwLnNjYWxlKGxhbWRhKSkuYWRkKGNvbHZlYzEuc2NhbGUobGFtZGEgKiBtdSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS5jb2xvciA9IG5ldyBDb2xvcjQoY29sUG9pbnQueCwgY29sUG9pbnQueSwgY29sUG9pbnQueiwgY29sUG9pbnQudyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9ycy5wdXNoKGNvbFBvaW50LngsIGNvbFBvaW50LnksIGNvbFBvaW50LnosIGNvbFBvaW50LncpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbFBvaW50ID0gY29sMC5zZXQoTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLmNvbG9yID0gbmV3IENvbG9yNChjb2xQb2ludC54LCBjb2xQb2ludC55LCBjb2xQb2ludC56LCBjb2xQb2ludC53KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sb3JzLnB1c2goY29sUG9pbnQueCwgY29sUG9pbnQueSwgY29sUG9pbnQueiwgY29sUG9pbnQudyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TZXQgcGFydGljbGUgdXYgYmFzZWQgb24gYSBtZXNoIHV2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS51diA9IHV2UG9pbnQuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3V2cy5wdXNoKHBhcnRpY2xlLnV2LngsIHBhcnRpY2xlLnV2LnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVkQ29sb3Iuc2V0KGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YVMgPSBSYW5kb21SYW5nZSgtcmFuZ2UsIHJhbmdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFWID0gUmFuZG9tUmFuZ2UoLXJhbmdlLCByYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhzdkNvbCA9IHN0YXRlZENvbG9yLnRvSFNWKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSBoc3ZDb2wucjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IGhzdkNvbC5nICsgZGVsdGFTO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gaHN2Q29sLmIgKyBkZWx0YVY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodiA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3IzLkhTVnRvUkdCVG9SZWYoaCwgcywgdiwgY29sUG9pbnQzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sUG9pbnQuc2V0KGNvbFBvaW50My5yLCBjb2xQb2ludDMuZywgY29sUG9pbnQzLmIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbFBvaW50ID0gY29sMC5zZXQoTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLmNvbG9yID0gbmV3IENvbG9yNChjb2xQb2ludC54LCBjb2xQb2ludC55LCBjb2xQb2ludC56LCBjb2xQb2ludC53KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xvcnMucHVzaChjb2xQb2ludC54LCBjb2xQb2ludC55LCBjb2xQb2ludC56LCBjb2xQb2ludC53KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzdG9yZXMgbWVzaCB0ZXh0dXJlIGluIGR5bmFtaWMgdGV4dHVyZSBmb3IgY29sb3IgcGl4ZWwgcmV0cmlldmFsXHJcbiAgICAvLyB3aGVuIHBvaW50Q29sb3IgdHlwZSBpcyBjb2xvciBmb3Igc3VyZmFjZSBwb2ludHNcclxuICAgIHByaXZhdGUgX2NvbG9yRnJvbVRleHR1cmUobWVzaDogTWVzaCwgcG9pbnRzR3JvdXA6IFBvaW50c0dyb3VwLCBpc1ZvbHVtZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChtZXNoLm1hdGVyaWFsID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5XYXJuKG1lc2gubmFtZSArIFwiaGFzIG5vIG1hdGVyaWFsLlwiKTtcclxuICAgICAgICAgICAgcG9pbnRzR3JvdXAuX2dyb3VwSW1hZ2VEYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fc2V0UG9pbnRzQ29sb3JPclVWKG1lc2gsIHBvaW50c0dyb3VwLCBpc1ZvbHVtZSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXQgPSBtZXNoLm1hdGVyaWFsO1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVMaXN0OiBCYXNlVGV4dHVyZVtdID0gbWF0LmdldEFjdGl2ZVRleHR1cmVzKCk7XHJcbiAgICAgICAgaWYgKHRleHR1cmVMaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBMb2dnZXIuV2FybihtZXNoLm5hbWUgKyBcImhhcyBubyB1c2FibGUgdGV4dHVyZS5cIik7XHJcbiAgICAgICAgICAgIHBvaW50c0dyb3VwLl9ncm91cEltYWdlRGF0YSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldFBvaW50c0NvbG9yT3JVVihtZXNoLCBwb2ludHNHcm91cCwgaXNWb2x1bWUsIHRydWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2xvbmUgPSBtZXNoLmNsb25lKCk7XHJcbiAgICAgICAgY2xvbmUuc2V0RW5hYmxlZChmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5fcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmU6IChfOiB2b2lkKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBCYXNlVGV4dHVyZS5XaGVuQWxsUmVhZHkodGV4dHVyZUxpc3QsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbiA9IHBvaW50c0dyb3VwLl90ZXh0dXJlTmI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IHRleHR1cmVMaXN0Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbiA9IHRleHR1cmVMaXN0Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbmFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludHNHcm91cC5fZ3JvdXBJbWdXaWR0aCA9IHRleHR1cmVMaXN0W25dLmdldFNpemUoKS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzR3JvdXAuX2dyb3VwSW1nSGVpZ2h0ID0gdGV4dHVyZUxpc3Rbbl0uZ2V0U2l6ZSgpLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0UG9pbnRzQ29sb3JPclVWKGNsb25lLCBwb2ludHNHcm91cCwgaXNWb2x1bWUsIHRydWUsIHRydWUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0ZXh0dXJlTGlzdFtuXS5jb29yZGluYXRlc0luZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmUuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludHNHcm91cC5fZ3JvdXBJbWFnZURhdGEgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFQcm9taXNlID0gdGV4dHVyZUxpc3Rbbl0ucmVhZFBpeGVscygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZGF0YVByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzLCBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUHJvbWlzZS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludHNHcm91cC5fZ3JvdXBJbWFnZURhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxjdWxhdGVzIHRoZSBwb2ludCBkZW5zaXR5IHBlciBmYWNldCBvZiBhIG1lc2ggZm9yIHN1cmZhY2UgcG9pbnRzXHJcbiAgICBwcml2YXRlIF9jYWxjdWxhdGVEZW5zaXR5KG5iUG9pbnRzOiBudW1iZXIsIHBvc2l0aW9uczogRmxvYXRBcnJheSwgaW5kaWNlczogSW5kaWNlc0FycmF5KTogbnVtYmVyW10ge1xyXG4gICAgICAgIGxldCBpZDA6IG51bWJlcjtcclxuICAgICAgICBsZXQgaWQxOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGlkMjogbnVtYmVyO1xyXG4gICAgICAgIGxldCB2MFg6IG51bWJlcjtcclxuICAgICAgICBsZXQgdjBZOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IHYwWjogbnVtYmVyO1xyXG4gICAgICAgIGxldCB2MVg6IG51bWJlcjtcclxuICAgICAgICBsZXQgdjFZOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IHYxWjogbnVtYmVyO1xyXG4gICAgICAgIGxldCB2Mlg6IG51bWJlcjtcclxuICAgICAgICBsZXQgdjJZOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IHYyWjogbnVtYmVyO1xyXG4gICAgICAgIGNvbnN0IHZlcnRleDAgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXgxID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgY29uc3QgdmVydGV4MiA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IHZlYzAgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICBjb25zdCB2ZWMxID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsID0gVmVjdG9yMy5aZXJvKCk7XHJcblxyXG4gICAgICAgIGxldCBhcmVhOiBudW1iZXI7XHJcbiAgICAgICAgY29uc3QgY3VtdWxhdGl2ZUFyZWFzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGxldCBzdXJmYWNlQXJlYTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgY29uc3QgbmJGYWNldHMgPSBpbmRpY2VzLmxlbmd0aCAvIDM7XHJcblxyXG4gICAgICAgIC8vc3VyZmFjZSBhcmVhXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5iRmFjZXRzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlkMCA9IGluZGljZXNbMyAqIGluZGV4XTtcclxuICAgICAgICAgICAgaWQxID0gaW5kaWNlc1szICogaW5kZXggKyAxXTtcclxuICAgICAgICAgICAgaWQyID0gaW5kaWNlc1szICogaW5kZXggKyAyXTtcclxuICAgICAgICAgICAgdjBYID0gcG9zaXRpb25zWzMgKiBpZDBdO1xyXG4gICAgICAgICAgICB2MFkgPSBwb3NpdGlvbnNbMyAqIGlkMCArIDFdO1xyXG4gICAgICAgICAgICB2MFogPSBwb3NpdGlvbnNbMyAqIGlkMCArIDJdO1xyXG4gICAgICAgICAgICB2MVggPSBwb3NpdGlvbnNbMyAqIGlkMV07XHJcbiAgICAgICAgICAgIHYxWSA9IHBvc2l0aW9uc1szICogaWQxICsgMV07XHJcbiAgICAgICAgICAgIHYxWiA9IHBvc2l0aW9uc1szICogaWQxICsgMl07XHJcbiAgICAgICAgICAgIHYyWCA9IHBvc2l0aW9uc1szICogaWQyXTtcclxuICAgICAgICAgICAgdjJZID0gcG9zaXRpb25zWzMgKiBpZDIgKyAxXTtcclxuICAgICAgICAgICAgdjJaID0gcG9zaXRpb25zWzMgKiBpZDIgKyAyXTtcclxuICAgICAgICAgICAgdmVydGV4MC5zZXQodjBYLCB2MFksIHYwWik7XHJcbiAgICAgICAgICAgIHZlcnRleDEuc2V0KHYxWCwgdjFZLCB2MVopO1xyXG4gICAgICAgICAgICB2ZXJ0ZXgyLnNldCh2MlgsIHYyWSwgdjJaKTtcclxuICAgICAgICAgICAgdmVydGV4MS5zdWJ0cmFjdFRvUmVmKHZlcnRleDAsIHZlYzApO1xyXG4gICAgICAgICAgICB2ZXJ0ZXgyLnN1YnRyYWN0VG9SZWYodmVydGV4MSwgdmVjMSk7XHJcbiAgICAgICAgICAgIFZlY3RvcjMuQ3Jvc3NUb1JlZih2ZWMwLCB2ZWMxLCBub3JtYWwpO1xyXG4gICAgICAgICAgICBhcmVhID0gMC41ICogbm9ybWFsLmxlbmd0aCgpO1xyXG4gICAgICAgICAgICBzdXJmYWNlQXJlYSArPSBhcmVhO1xyXG4gICAgICAgICAgICBjdW11bGF0aXZlQXJlYXNbaW5kZXhdID0gc3VyZmFjZUFyZWE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkZW5zaXR5OiBudW1iZXJbXSA9IG5ldyBBcnJheTxudW1iZXI+KG5iRmFjZXRzKTtcclxuICAgICAgICBsZXQgcmVtYWluaW5nUG9pbnRzID0gbmJQb2ludHM7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBuYkZhY2V0cyAtIDE7IGluZGV4ID4gMDsgaW5kZXgtLSkge1xyXG4gICAgICAgICAgICBjb25zdCBjdW11bGF0aXZlQXJlYSA9IGN1bXVsYXRpdmVBcmVhc1tpbmRleF07XHJcbiAgICAgICAgICAgIGlmIChjdW11bGF0aXZlQXJlYSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gYXZvaWRpbmcgZGl2aXNpb24gYnkgMCB1cG9uIGRlZ2VuZXJhdGUgdHJpYW5nbGVzXHJcbiAgICAgICAgICAgICAgICBkZW5zaXR5W2luZGV4XSA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmVhID0gY3VtdWxhdGl2ZUFyZWEgLSBjdW11bGF0aXZlQXJlYXNbaW5kZXggLSAxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhY2V0UG9pbnRzV2l0aEZyYWN0aW9uID0gKGFyZWEgLyBjdW11bGF0aXZlQXJlYSkgKiByZW1haW5pbmdQb2ludHM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmbG9vcmVkID0gTWF0aC5mbG9vcihmYWNldFBvaW50c1dpdGhGcmFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmcmFjdGlvbiA9IGZhY2V0UG9pbnRzV2l0aEZyYWN0aW9uIC0gZmxvb3JlZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4dHJhUG9pbnQgPSBOdW1iZXIoTWF0aC5yYW5kb20oKSA8IGZyYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhY2V0UG9pbnRzID0gZmxvb3JlZCArIGV4dHJhUG9pbnQ7XHJcbiAgICAgICAgICAgICAgICBkZW5zaXR5W2luZGV4XSA9IGZhY2V0UG9pbnRzO1xyXG4gICAgICAgICAgICAgICAgcmVtYWluaW5nUG9pbnRzIC09IGZhY2V0UG9pbnRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbnNpdHlbMF0gPSByZW1haW5pbmdQb2ludHM7XHJcblxyXG4gICAgICAgIHJldHVybiBkZW5zaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBwb2ludHMgdG8gdGhlIFBDUyBpbiByYW5kb20gcG9zaXRpb25zIHdpdGhpbiBhIHVuaXQgc3BoZXJlXHJcbiAgICAgKiBAcGFyYW0gbmIgKHBvc2l0aXZlIGludGVnZXIpIHRoZSBudW1iZXIgb2YgcGFydGljbGVzIHRvIGJlIGNyZWF0ZWQgZnJvbSB0aGlzIG1vZGVsXHJcbiAgICAgKiBAcGFyYW0gcG9pbnRGdW5jdGlvbiBpcyBhbiBvcHRpb25hbCBqYXZhc2NyaXB0IGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCBwYXJ0aWNsZSBvbiBQQ1MgY3JlYXRpb25cclxuICAgICAqIEByZXR1cm5zIHRoZSBudW1iZXIgb2YgZ3JvdXBzIGluIHRoZSBzeXN0ZW1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFBvaW50cyhuYjogbnVtYmVyLCBwb2ludEZ1bmN0aW9uOiBhbnkgPSB0aGlzLl9yYW5kb21Vbml0VmVjdG9yKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBwb2ludHNHcm91cCA9IG5ldyBQb2ludHNHcm91cCh0aGlzLl9ncm91cENvdW50ZXIsIHBvaW50RnVuY3Rpb24pO1xyXG4gICAgICAgIGxldCBjcDogQ2xvdWRQb2ludDtcclxuXHJcbiAgICAgICAgLy8gcGFydGljbGVzXHJcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMubmJQYXJ0aWNsZXM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNwID0gdGhpcy5fYWRkUGFydGljbGUoaWR4LCBwb2ludHNHcm91cCwgdGhpcy5fZ3JvdXBDb3VudGVyLCBpKTtcclxuICAgICAgICAgICAgaWYgKHBvaW50c0dyb3VwICYmIHBvaW50c0dyb3VwLl9wb3NpdGlvbkZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBwb2ludHNHcm91cC5fcG9zaXRpb25GdW5jdGlvbihjcCwgaWR4LCBpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbnMucHVzaChjcC5wb3NpdGlvbi54LCBjcC5wb3NpdGlvbi55LCBjcC5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgaWYgKGNwLmNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xvcnMucHVzaChjcC5jb2xvci5yLCBjcC5jb2xvci5nLCBjcC5jb2xvci5iLCBjcC5jb2xvci5hKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3AudXYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3V2cy5wdXNoKGNwLnV2LngsIGNwLnV2LnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlkeCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5iUGFydGljbGVzICs9IG5iO1xyXG4gICAgICAgIHRoaXMuX2dyb3VwQ291bnRlcisrO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cENvdW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHBvaW50cyB0byB0aGUgUENTIGZyb20gdGhlIHN1cmZhY2Ugb2YgdGhlIG1vZGVsIHNoYXBlXHJcbiAgICAgKiBAcGFyYW0gbWVzaCBpcyBhbnkgTWVzaCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgYXMgYSBzdXJmYWNlIG1vZGVsIGZvciB0aGUgcG9pbnRzXHJcbiAgICAgKiBAcGFyYW0gbmIgKHBvc2l0aXZlIGludGVnZXIpIHRoZSBudW1iZXIgb2YgcGFydGljbGVzIHRvIGJlIGNyZWF0ZWQgZnJvbSB0aGlzIG1vZGVsXHJcbiAgICAgKiBAcGFyYW0gY29sb3JXaXRoIGRldGVybWluZXMgd2hldGhlciBhIHBvaW50IGlzIGNvbG9yZWQgdXNpbmcgY29sb3IgKGRlZmF1bHQpLCB1diwgcmFuZG9tLCBzdGF0ZWQgb3Igbm9uZSAoaW52aXNpYmxlKVxyXG4gICAgICogQHBhcmFtIGNvbG9yIChjb2xvcjQpIHRvIGJlIHVzZWQgd2hlbiBjb2xvcldpdGggaXMgc3RhdGVkIG9yIGNvbG9yIChudW1iZXIpIHdoZW4gdXNlZCB0byBzcGVjaWZ5IHRleHR1cmUgcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSByYW5nZSAobnVtYmVyIGZyb20gMCB0byAxKSB0byBkZXRlcm1pbmUgdGhlIHZhcmlhdGlvbiBpbiBzaGFwZSBhbmQgdG9uZSBmb3IgYSBzdGF0ZWQgY29sb3JcclxuICAgICAqIEByZXR1cm5zIHRoZSBudW1iZXIgb2YgZ3JvdXBzIGluIHRoZSBzeXN0ZW1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFN1cmZhY2VQb2ludHMobWVzaDogTWVzaCwgbmI6IG51bWJlciwgY29sb3JXaXRoPzogbnVtYmVyLCBjb2xvcj86IENvbG9yNCB8IG51bWJlciwgcmFuZ2U/OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBjb2xvcmVkID0gY29sb3JXaXRoID8gY29sb3JXaXRoIDogUG9pbnRDb2xvci5SYW5kb207XHJcbiAgICAgICAgaWYgKGlzTmFOKGNvbG9yZWQpIHx8IGNvbG9yZWQgPCAwIHx8IGNvbG9yZWQgPiAzKSB7XHJcbiAgICAgICAgICAgIGNvbG9yZWQgPSBQb2ludENvbG9yLlJhbmRvbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1lc2hQb3MgPSA8RmxvYXRBcnJheT5tZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kKTtcclxuICAgICAgICBjb25zdCBtZXNoSW5kID0gPEluZGljZXNBcnJheT5tZXNoLmdldEluZGljZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZ3JvdXBzLnB1c2godGhpcy5fZ3JvdXBDb3VudGVyKTtcclxuICAgICAgICBjb25zdCBwb2ludHNHcm91cCA9IG5ldyBQb2ludHNHcm91cCh0aGlzLl9ncm91cENvdW50ZXIsIG51bGwpO1xyXG5cclxuICAgICAgICBwb2ludHNHcm91cC5fZ3JvdXBEZW5zaXR5ID0gdGhpcy5fY2FsY3VsYXRlRGVuc2l0eShuYiwgbWVzaFBvcywgbWVzaEluZCk7XHJcbiAgICAgICAgaWYgKGNvbG9yZWQgPT09IFBvaW50Q29sb3IuQ29sb3IpIHtcclxuICAgICAgICAgICAgcG9pbnRzR3JvdXAuX3RleHR1cmVOYiA9IDxudW1iZXI+Y29sb3IgPyA8bnVtYmVyPmNvbG9yIDogMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xvciA9IDxDb2xvcjQ+Y29sb3IgPyA8Q29sb3I0PmNvbG9yIDogbmV3IENvbG9yNCgxLCAxLCAxLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChjb2xvcmVkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUG9pbnRDb2xvci5Db2xvcjpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9yRnJvbVRleHR1cmUobWVzaCwgcG9pbnRzR3JvdXAsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFBvaW50Q29sb3IuVVY6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRQb2ludHNDb2xvck9yVVYobWVzaCwgcG9pbnRzR3JvdXAsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUG9pbnRDb2xvci5SYW5kb206XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRQb2ludHNDb2xvck9yVVYobWVzaCwgcG9pbnRzR3JvdXAsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFBvaW50Q29sb3IuU3RhdGVkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0UG9pbnRzQ29sb3JPclVWKG1lc2gsIHBvaW50c0dyb3VwLCBmYWxzZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIDxDb2xvcjQ+Y29sb3IsIHJhbmdlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5iUGFydGljbGVzICs9IG5iO1xyXG4gICAgICAgIHRoaXMuX2dyb3VwQ291bnRlcisrO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cENvdW50ZXIgLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBwb2ludHMgdG8gdGhlIFBDUyBpbnNpZGUgdGhlIG1vZGVsIHNoYXBlXHJcbiAgICAgKiBAcGFyYW0gbWVzaCBpcyBhbnkgTWVzaCBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgYXMgYSBzdXJmYWNlIG1vZGVsIGZvciB0aGUgcG9pbnRzXHJcbiAgICAgKiBAcGFyYW0gbmIgKHBvc2l0aXZlIGludGVnZXIpIHRoZSBudW1iZXIgb2YgcGFydGljbGVzIHRvIGJlIGNyZWF0ZWQgZnJvbSB0aGlzIG1vZGVsXHJcbiAgICAgKiBAcGFyYW0gY29sb3JXaXRoIGRldGVybWluZXMgd2hldGhlciBhIHBvaW50IGlzIGNvbG9yZWQgdXNpbmcgY29sb3IgKGRlZmF1bHQpLCB1diwgcmFuZG9tLCBzdGF0ZWQgb3Igbm9uZSAoaW52aXNpYmxlKVxyXG4gICAgICogQHBhcmFtIGNvbG9yIChjb2xvcjQpIHRvIGJlIHVzZWQgd2hlbiBjb2xvcldpdGggaXMgc3RhdGVkIG9yIGNvbG9yIChudW1iZXIpIHdoZW4gdXNlZCB0byBzcGVjaWZ5IHRleHR1cmUgcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSByYW5nZSAobnVtYmVyIGZyb20gMCB0byAxKSB0byBkZXRlcm1pbmUgdGhlIHZhcmlhdGlvbiBpbiBzaGFwZSBhbmQgdG9uZSBmb3IgYSBzdGF0ZWQgY29sb3JcclxuICAgICAqIEByZXR1cm5zIHRoZSBudW1iZXIgb2YgZ3JvdXBzIGluIHRoZSBzeXN0ZW1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFZvbHVtZVBvaW50cyhtZXNoOiBNZXNoLCBuYjogbnVtYmVyLCBjb2xvcldpdGg/OiBudW1iZXIsIGNvbG9yPzogQ29sb3I0IHwgbnVtYmVyLCByYW5nZT86IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGNvbG9yZWQgPSBjb2xvcldpdGggPyBjb2xvcldpdGggOiBQb2ludENvbG9yLlJhbmRvbTtcclxuICAgICAgICBpZiAoaXNOYU4oY29sb3JlZCkgfHwgY29sb3JlZCA8IDAgfHwgY29sb3JlZCA+IDMpIHtcclxuICAgICAgICAgICAgY29sb3JlZCA9IFBvaW50Q29sb3IuUmFuZG9tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWVzaFBvcyA9IDxGbG9hdEFycmF5Pm1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQpO1xyXG4gICAgICAgIGNvbnN0IG1lc2hJbmQgPSA8SW5kaWNlc0FycmF5Pm1lc2guZ2V0SW5kaWNlcygpO1xyXG5cclxuICAgICAgICB0aGlzLl9ncm91cHMucHVzaCh0aGlzLl9ncm91cENvdW50ZXIpO1xyXG4gICAgICAgIGNvbnN0IHBvaW50c0dyb3VwID0gbmV3IFBvaW50c0dyb3VwKHRoaXMuX2dyb3VwQ291bnRlciwgbnVsbCk7XHJcblxyXG4gICAgICAgIHBvaW50c0dyb3VwLl9ncm91cERlbnNpdHkgPSB0aGlzLl9jYWxjdWxhdGVEZW5zaXR5KG5iLCBtZXNoUG9zLCBtZXNoSW5kKTtcclxuICAgICAgICBpZiAoY29sb3JlZCA9PT0gUG9pbnRDb2xvci5Db2xvcikge1xyXG4gICAgICAgICAgICBwb2ludHNHcm91cC5fdGV4dHVyZU5iID0gPG51bWJlcj5jb2xvciA/IDxudW1iZXI+Y29sb3IgOiAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gPENvbG9yND5jb2xvciA/IDxDb2xvcjQ+Y29sb3IgOiBuZXcgQ29sb3I0KDEsIDEsIDEsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKGNvbG9yZWQpIHtcclxuICAgICAgICAgICAgY2FzZSBQb2ludENvbG9yLkNvbG9yOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sb3JGcm9tVGV4dHVyZShtZXNoLCBwb2ludHNHcm91cCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQb2ludENvbG9yLlVWOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0UG9pbnRzQ29sb3JPclVWKG1lc2gsIHBvaW50c0dyb3VwLCB0cnVlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUG9pbnRDb2xvci5SYW5kb206XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRQb2ludHNDb2xvck9yVVYobWVzaCwgcG9pbnRzR3JvdXAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUG9pbnRDb2xvci5TdGF0ZWQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRQb2ludHNDb2xvck9yVVYobWVzaCwgcG9pbnRzR3JvdXAsIHRydWUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCA8Q29sb3I0PmNvbG9yLCByYW5nZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uYlBhcnRpY2xlcyArPSBuYjtcclxuICAgICAgICB0aGlzLl9ncm91cENvdW50ZXIrKztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JvdXBDb3VudGVyIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBTZXRzIGFsbCB0aGUgcGFydGljbGVzIDogdGhpcyBtZXRob2QgYWN0dWFsbHkgcmVhbGx5IHVwZGF0ZXMgdGhlIG1lc2ggYWNjb3JkaW5nIHRvIHRoZSBwYXJ0aWNsZSBwb3NpdGlvbnMsIHJvdGF0aW9ucywgY29sb3JzLCB0ZXh0dXJlcywgZXRjLlxyXG4gICAgICogIFRoaXMgbWV0aG9kIGNhbGxzIGB1cGRhdGVQYXJ0aWNsZSgpYCBmb3IgZWFjaCBwYXJ0aWNsZSBvZiB0aGUgU1BTLlxyXG4gICAgICogIEZvciBhbiBhbmltYXRlZCBTUFMsIGl0IGlzIHVzdWFsbHkgY2FsbGVkIHdpdGhpbiB0aGUgcmVuZGVyIGxvb3AuXHJcbiAgICAgKiBAcGFyYW0gc3RhcnQgVGhlIHBhcnRpY2xlIGluZGV4IGluIHRoZSBwYXJ0aWNsZSBhcnJheSB3aGVyZSB0byBzdGFydCB0byBjb21wdXRlIHRoZSBwYXJ0aWNsZSBwcm9wZXJ0eSB2YWx1ZXMgXyhkZWZhdWx0IDApX1xyXG4gICAgICogQHBhcmFtIGVuZCBUaGUgcGFydGljbGUgaW5kZXggaW4gdGhlIHBhcnRpY2xlIGFycmF5IHdoZXJlIHRvIHN0b3AgdG8gY29tcHV0ZSB0aGUgcGFydGljbGUgcHJvcGVydHkgdmFsdWVzIF8oZGVmYXVsdCBuYlBhcnRpY2xlIC0gMSlfXHJcbiAgICAgKiBAcGFyYW0gdXBkYXRlIElmIHRoZSBtZXNoIG11c3QgYmUgZmluYWxseSB1cGRhdGVkIG9uIHRoaXMgY2FsbCBhZnRlciBhbGwgdGhlIHBhcnRpY2xlIGNvbXB1dGF0aW9ucyBfKGRlZmF1bHQgdHJ1ZSlfXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgUENTLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0UGFydGljbGVzKHN0YXJ0OiBudW1iZXIgPSAwLCBlbmQ6IG51bWJlciA9IHRoaXMubmJQYXJ0aWNsZXMgLSAxLCB1cGRhdGU6IGJvb2xlYW4gPSB0cnVlKTogUG9pbnRzQ2xvdWRTeXN0ZW0ge1xyXG4gICAgICAgIGlmICghdGhpcy5fdXBkYXRhYmxlIHx8ICF0aGlzLl9pc1JlYWR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY3VzdG9tIGJlZm9yZVVwZGF0ZVxyXG4gICAgICAgIHRoaXMuYmVmb3JlVXBkYXRlUGFydGljbGVzKHN0YXJ0LCBlbmQsIHVwZGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdE1hdHJpeCA9IFRtcFZlY3RvcnMuTWF0cml4WzBdO1xyXG4gICAgICAgIGNvbnN0IG1lc2ggPSB0aGlzLm1lc2g7XHJcbiAgICAgICAgY29uc3QgY29sb3JzMzIgPSB0aGlzLl9jb2xvcnMzMjtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbnMzMiA9IHRoaXMuX3Bvc2l0aW9uczMyO1xyXG4gICAgICAgIGNvbnN0IHV2czMyID0gdGhpcy5fdXZzMzI7XHJcblxyXG4gICAgICAgIGNvbnN0IHRlbXBWZWN0b3JzID0gVG1wVmVjdG9ycy5WZWN0b3IzO1xyXG4gICAgICAgIGNvbnN0IGNhbUF4aXNYID0gdGVtcFZlY3RvcnNbNV0uY29weUZyb21GbG9hdHMoMS4wLCAwLjAsIDAuMCk7XHJcbiAgICAgICAgY29uc3QgY2FtQXhpc1kgPSB0ZW1wVmVjdG9yc1s2XS5jb3B5RnJvbUZsb2F0cygwLjAsIDEuMCwgMC4wKTtcclxuICAgICAgICBjb25zdCBjYW1BeGlzWiA9IHRlbXBWZWN0b3JzWzddLmNvcHlGcm9tRmxvYXRzKDAuMCwgMC4wLCAxLjApO1xyXG4gICAgICAgIGNvbnN0IG1pbmltdW0gPSB0ZW1wVmVjdG9yc1s4XS5zZXRBbGwoTnVtYmVyLk1BWF9WQUxVRSk7XHJcbiAgICAgICAgY29uc3QgbWF4aW11bSA9IHRlbXBWZWN0b3JzWzldLnNldEFsbCgtTnVtYmVyLk1BWF9WQUxVRSk7XHJcblxyXG4gICAgICAgIE1hdHJpeC5JZGVudGl0eVRvUmVmKHJvdE1hdHJpeCk7XHJcbiAgICAgICAgbGV0IGlkeCA9IDA7IC8vIGN1cnJlbnQgaW5kZXggb2YgdGhlIHBhcnRpY2xlXHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1lc2g/LmlzRmFjZXREYXRhRW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb21wdXRlQm91bmRpbmdCb3ggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZW5kID0gZW5kID49IHRoaXMubmJQYXJ0aWNsZXMgPyB0aGlzLm5iUGFydGljbGVzIC0gMSA6IGVuZDtcclxuICAgICAgICBpZiAodGhpcy5fY29tcHV0ZUJvdW5kaW5nQm94KSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFydCAhPSAwIHx8IGVuZCAhPSB0aGlzLm5iUGFydGljbGVzIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gb25seSBzb21lIHBhcnRpY2xlcyBhcmUgdXBkYXRlZCwgdGhlbiB1c2UgdGhlIGN1cnJlbnQgZXhpc3RpbmcgQkJveCBiYXNpcy4gTm90ZSA6IGl0IGNhbiBvbmx5IGluY3JlYXNlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgYm91bmRpbmdJbmZvID0gdGhpcy5tZXNoPy5nZXRCb3VuZGluZ0luZm8oKTtcclxuICAgICAgICAgICAgICAgIGlmIChib3VuZGluZ0luZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtLmNvcHlGcm9tKGJvdW5kaW5nSW5mby5taW5pbXVtKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtLmNvcHlGcm9tKGJvdW5kaW5nSW5mby5tYXhpbXVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWR4ID0gMDsgLy8gcGFydGljbGUgaW5kZXhcclxuICAgICAgICBsZXQgcGluZGV4ID0gMDsgLy9pbmRleCBpbiBwb3NpdGlvbnMgYXJyYXlcclxuICAgICAgICBsZXQgY2luZGV4ID0gMDsgLy9pbmRleCBpbiBjb2xvciBhcnJheVxyXG4gICAgICAgIGxldCB1aW5kZXggPSAwOyAvL2luZGV4IGluIHV2IGFycmF5XHJcblxyXG4gICAgICAgIC8vIHBhcnRpY2xlIGxvb3BcclxuICAgICAgICBmb3IgKGxldCBwID0gc3RhcnQ7IHAgPD0gZW5kOyBwKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcGFydGljbGUgPSB0aGlzLnBhcnRpY2xlc1twXTtcclxuICAgICAgICAgICAgaWR4ID0gcGFydGljbGUuaWR4O1xyXG4gICAgICAgICAgICBwaW5kZXggPSAzICogaWR4O1xyXG4gICAgICAgICAgICBjaW5kZXggPSA0ICogaWR4O1xyXG4gICAgICAgICAgICB1aW5kZXggPSAyICogaWR4O1xyXG5cclxuICAgICAgICAgICAgLy8gY2FsbCB0byBjdXN0b20gdXNlciBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHBhcnRpY2xlIHByb3BlcnRpZXNcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYXJ0aWNsZShwYXJ0aWNsZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4ID0gcGFydGljbGUuX3JvdGF0aW9uTWF0cml4O1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0aWNsZVBvc2l0aW9uID0gcGFydGljbGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRpY2xlR2xvYmFsUG9zaXRpb24gPSBwYXJ0aWNsZS5fZ2xvYmFsUG9zaXRpb247XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29tcHV0ZVBhcnRpY2xlUm90YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlLmdldFJvdGF0aW9uTWF0cml4KHJvdE1hdHJpeCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRpY2xlSGFzUGFyZW50ID0gcGFydGljbGUucGFyZW50SWQgIT09IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChwYXJ0aWNsZUhhc1BhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJ0aWNsZXNbcGFydGljbGUucGFyZW50SWQhXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFJvdGF0aW9uTWF0cml4ID0gcGFyZW50Ll9yb3RhdGlvbk1hdHJpeDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudEdsb2JhbFBvc2l0aW9uID0gcGFyZW50Ll9nbG9iYWxQb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3RhdGVkWSA9IHBhcnRpY2xlUG9zaXRpb24ueCAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzFdICsgcGFydGljbGVQb3NpdGlvbi55ICogcGFyZW50Um90YXRpb25NYXRyaXhbNF0gKyBwYXJ0aWNsZVBvc2l0aW9uLnogKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs3XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdGF0ZWRYID0gcGFydGljbGVQb3NpdGlvbi54ICogcGFyZW50Um90YXRpb25NYXRyaXhbMF0gKyBwYXJ0aWNsZVBvc2l0aW9uLnkgKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFszXSArIHBhcnRpY2xlUG9zaXRpb24ueiAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzZdO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm90YXRlZFogPSBwYXJ0aWNsZVBvc2l0aW9uLnggKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFsyXSArIHBhcnRpY2xlUG9zaXRpb24ueSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzVdICsgcGFydGljbGVQb3NpdGlvbi56ICogcGFyZW50Um90YXRpb25NYXRyaXhbOF07XHJcblxyXG4gICAgICAgICAgICAgICAgcGFydGljbGVHbG9iYWxQb3NpdGlvbi54ID0gcGFyZW50R2xvYmFsUG9zaXRpb24ueCArIHJvdGF0ZWRYO1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGVHbG9iYWxQb3NpdGlvbi55ID0gcGFyZW50R2xvYmFsUG9zaXRpb24ueSArIHJvdGF0ZWRZO1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGVHbG9iYWxQb3NpdGlvbi56ID0gcGFyZW50R2xvYmFsUG9zaXRpb24ueiArIHJvdGF0ZWRaO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb21wdXRlUGFydGljbGVSb3RhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdE1hdHJpeFZhbHVlcyA9IHJvdE1hdHJpeC5tO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbMF0gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RNYXRyaXhWYWx1ZXNbMF0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFswXSArIHJvdE1hdHJpeFZhbHVlc1sxXSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzNdICsgcm90TWF0cml4VmFsdWVzWzJdICogcGFyZW50Um90YXRpb25NYXRyaXhbNl07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFsxXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdE1hdHJpeFZhbHVlc1swXSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzFdICsgcm90TWF0cml4VmFsdWVzWzFdICogcGFyZW50Um90YXRpb25NYXRyaXhbNF0gKyByb3RNYXRyaXhWYWx1ZXNbMl0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs3XTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzJdID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90TWF0cml4VmFsdWVzWzBdICogcGFyZW50Um90YXRpb25NYXRyaXhbMl0gKyByb3RNYXRyaXhWYWx1ZXNbMV0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs1XSArIHJvdE1hdHJpeFZhbHVlc1syXSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbM10gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RNYXRyaXhWYWx1ZXNbNF0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFswXSArIHJvdE1hdHJpeFZhbHVlc1s1XSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzNdICsgcm90TWF0cml4VmFsdWVzWzZdICogcGFyZW50Um90YXRpb25NYXRyaXhbNl07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFs0XSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdE1hdHJpeFZhbHVlc1s0XSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzFdICsgcm90TWF0cml4VmFsdWVzWzVdICogcGFyZW50Um90YXRpb25NYXRyaXhbNF0gKyByb3RNYXRyaXhWYWx1ZXNbNl0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs3XTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzVdID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90TWF0cml4VmFsdWVzWzRdICogcGFyZW50Um90YXRpb25NYXRyaXhbMl0gKyByb3RNYXRyaXhWYWx1ZXNbNV0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs1XSArIHJvdE1hdHJpeFZhbHVlc1s2XSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbNl0gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RNYXRyaXhWYWx1ZXNbOF0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFswXSArIHJvdE1hdHJpeFZhbHVlc1s5XSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzNdICsgcm90TWF0cml4VmFsdWVzWzEwXSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzZdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbN10gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RNYXRyaXhWYWx1ZXNbOF0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFsxXSArIHJvdE1hdHJpeFZhbHVlc1s5XSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzRdICsgcm90TWF0cml4VmFsdWVzWzEwXSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzddO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbOF0gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RNYXRyaXhWYWx1ZXNbOF0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFsyXSArIHJvdE1hdHJpeFZhbHVlc1s5XSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzVdICsgcm90TWF0cml4VmFsdWVzWzEwXSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzhdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGVHbG9iYWxQb3NpdGlvbi54ID0gMDtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlR2xvYmFsUG9zaXRpb24ueSA9IDA7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZUdsb2JhbFBvc2l0aW9uLnogPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb21wdXRlUGFydGljbGVSb3RhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdE1hdHJpeFZhbHVlcyA9IHJvdE1hdHJpeC5tO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbMF0gPSByb3RNYXRyaXhWYWx1ZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFsxXSA9IHJvdE1hdHJpeFZhbHVlc1sxXTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzJdID0gcm90TWF0cml4VmFsdWVzWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbM10gPSByb3RNYXRyaXhWYWx1ZXNbNF07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFs0XSA9IHJvdE1hdHJpeFZhbHVlc1s1XTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzVdID0gcm90TWF0cml4VmFsdWVzWzZdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbNl0gPSByb3RNYXRyaXhWYWx1ZXNbOF07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFs3XSA9IHJvdE1hdHJpeFZhbHVlc1s5XTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzhdID0gcm90TWF0cml4VmFsdWVzWzEwXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcGl2b3RCYWNrVHJhbnNsYXRpb24gPSB0ZW1wVmVjdG9yc1sxMV07XHJcbiAgICAgICAgICAgIGlmIChwYXJ0aWNsZS50cmFuc2xhdGVGcm9tUGl2b3QpIHtcclxuICAgICAgICAgICAgICAgIHBpdm90QmFja1RyYW5zbGF0aW9uLnNldEFsbCgwLjApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGl2b3RCYWNrVHJhbnNsYXRpb24uY29weUZyb20ocGFydGljbGUucGl2b3QpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBwb3NpdGlvbnNcclxuICAgICAgICAgICAgY29uc3QgdG1wVmVydGV4ID0gdGVtcFZlY3RvcnNbMF07XHJcbiAgICAgICAgICAgIHRtcFZlcnRleC5jb3B5RnJvbShwYXJ0aWNsZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleFggPSB0bXBWZXJ0ZXgueCAtIHBhcnRpY2xlLnBpdm90Lng7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleFkgPSB0bXBWZXJ0ZXgueSAtIHBhcnRpY2xlLnBpdm90Lnk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleFogPSB0bXBWZXJ0ZXgueiAtIHBhcnRpY2xlLnBpdm90Lno7XHJcblxyXG4gICAgICAgICAgICBsZXQgcm90YXRlZFggPSB2ZXJ0ZXhYICogcGFydGljbGVSb3RhdGlvbk1hdHJpeFswXSArIHZlcnRleFkgKiBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzNdICsgdmVydGV4WiAqIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbNl07XHJcbiAgICAgICAgICAgIGxldCByb3RhdGVkWSA9IHZlcnRleFggKiBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzFdICsgdmVydGV4WSAqIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbNF0gKyB2ZXJ0ZXhaICogcGFydGljbGVSb3RhdGlvbk1hdHJpeFs3XTtcclxuICAgICAgICAgICAgbGV0IHJvdGF0ZWRaID0gdmVydGV4WCAqIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbMl0gKyB2ZXJ0ZXhZICogcGFydGljbGVSb3RhdGlvbk1hdHJpeFs1XSArIHZlcnRleFogKiBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzhdO1xyXG5cclxuICAgICAgICAgICAgcm90YXRlZFggKz0gcGl2b3RCYWNrVHJhbnNsYXRpb24ueDtcclxuICAgICAgICAgICAgcm90YXRlZFkgKz0gcGl2b3RCYWNrVHJhbnNsYXRpb24ueTtcclxuICAgICAgICAgICAgcm90YXRlZFogKz0gcGl2b3RCYWNrVHJhbnNsYXRpb24uejtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHB4ID0gKHBvc2l0aW9uczMyW3BpbmRleF0gPSBwYXJ0aWNsZUdsb2JhbFBvc2l0aW9uLnggKyBjYW1BeGlzWC54ICogcm90YXRlZFggKyBjYW1BeGlzWS54ICogcm90YXRlZFkgKyBjYW1BeGlzWi54ICogcm90YXRlZFopO1xyXG4gICAgICAgICAgICBjb25zdCBweSA9IChwb3NpdGlvbnMzMltwaW5kZXggKyAxXSA9IHBhcnRpY2xlR2xvYmFsUG9zaXRpb24ueSArIGNhbUF4aXNYLnkgKiByb3RhdGVkWCArIGNhbUF4aXNZLnkgKiByb3RhdGVkWSArIGNhbUF4aXNaLnkgKiByb3RhdGVkWik7XHJcbiAgICAgICAgICAgIGNvbnN0IHB6ID0gKHBvc2l0aW9uczMyW3BpbmRleCArIDJdID0gcGFydGljbGVHbG9iYWxQb3NpdGlvbi56ICsgY2FtQXhpc1gueiAqIHJvdGF0ZWRYICsgY2FtQXhpc1kueiAqIHJvdGF0ZWRZICsgY2FtQXhpc1oueiAqIHJvdGF0ZWRaKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb21wdXRlQm91bmRpbmdCb3gpIHtcclxuICAgICAgICAgICAgICAgIG1pbmltdW0ubWluaW1pemVJblBsYWNlRnJvbUZsb2F0cyhweCwgcHksIHB6KTtcclxuICAgICAgICAgICAgICAgIG1heGltdW0ubWF4aW1pemVJblBsYWNlRnJvbUZsb2F0cyhweCwgcHksIHB6KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbXB1dGVQYXJ0aWNsZUNvbG9yICYmIHBhcnRpY2xlLmNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHBhcnRpY2xlLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JzMzIgPSB0aGlzLl9jb2xvcnMzMjtcclxuICAgICAgICAgICAgICAgIGNvbG9yczMyW2NpbmRleF0gPSBjb2xvci5yO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzMzJbY2luZGV4ICsgMV0gPSBjb2xvci5nO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzMzJbY2luZGV4ICsgMl0gPSBjb2xvci5iO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzMzJbY2luZGV4ICsgM10gPSBjb2xvci5hO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb21wdXRlUGFydGljbGVUZXh0dXJlICYmIHBhcnRpY2xlLnV2KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1diA9IHBhcnRpY2xlLnV2O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXZzMzIgPSB0aGlzLl91dnMzMjtcclxuICAgICAgICAgICAgICAgIHV2czMyW3VpbmRleF0gPSB1di54O1xyXG4gICAgICAgICAgICAgICAgdXZzMzJbdWluZGV4ICsgMV0gPSB1di55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB0aGUgVkJPIG11c3QgYmUgdXBkYXRlZFxyXG4gICAgICAgIGlmIChtZXNoKSB7XHJcbiAgICAgICAgICAgIGlmICh1cGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb21wdXRlUGFydGljbGVDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc2gudXBkYXRlVmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Db2xvcktpbmQsIGNvbG9yczMyLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvbXB1dGVQYXJ0aWNsZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNoLnVwZGF0ZVZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuVVZLaW5kLCB1dnMzMiwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1lc2gudXBkYXRlVmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQsIHBvc2l0aW9uczMyLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29tcHV0ZUJvdW5kaW5nQm94KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzaC5oYXNCb3VuZGluZ0luZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNoLmdldEJvdW5kaW5nSW5mbygpLnJlQ29uc3RydWN0KG1pbmltdW0sIG1heGltdW0sIG1lc2guX3dvcmxkTWF0cml4KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzaC5idWlsZEJvdW5kaW5nSW5mbyhtaW5pbXVtLCBtYXhpbXVtLCBtZXNoLl93b3JsZE1hdHJpeCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZnRlclVwZGF0ZVBhcnRpY2xlcyhzdGFydCwgZW5kLCB1cGRhdGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcG9zZXMgdGhlIFBDUy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tZXNoPy5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy52YXJzID0gbnVsbDtcclxuICAgICAgICAvLyBkcm9wIHJlZmVyZW5jZXMgdG8gaW50ZXJuYWwgYmlnIGFycmF5cyBmb3IgdGhlIEdDXHJcbiAgICAgICAgKDxhbnk+dGhpcy5fcG9zaXRpb25zKSA9IG51bGw7XHJcbiAgICAgICAgKDxhbnk+dGhpcy5faW5kaWNlcykgPSBudWxsO1xyXG4gICAgICAgICg8YW55PnRoaXMuX25vcm1hbHMpID0gbnVsbDtcclxuICAgICAgICAoPGFueT50aGlzLl91dnMpID0gbnVsbDtcclxuICAgICAgICAoPGFueT50aGlzLl9jb2xvcnMpID0gbnVsbDtcclxuICAgICAgICAoPGFueT50aGlzLl9pbmRpY2VzMzIpID0gbnVsbDtcclxuICAgICAgICAoPGFueT50aGlzLl9wb3NpdGlvbnMzMikgPSBudWxsO1xyXG4gICAgICAgICg8YW55PnRoaXMuX3V2czMyKSA9IG51bGw7XHJcbiAgICAgICAgKDxhbnk+dGhpcy5fY29sb3JzMzIpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFZpc2liaWxpdHkgaGVscGVyIDogUmVjb21wdXRlcyB0aGUgdmlzaWJsZSBzaXplIGFjY29yZGluZyB0byB0aGUgbWVzaCBib3VuZGluZyBib3hcclxuICAgICAqIGRvYyA6XHJcbiAgICAgKiBAcmV0dXJucyB0aGUgUENTLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVmcmVzaFZpc2libGVTaXplKCk6IFBvaW50c0Nsb3VkU3lzdGVtIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzVmlzaWJpbGl0eUJveExvY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1lc2g/LnJlZnJlc2hCb3VuZGluZ0luZm8oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWaXNpYmlsaXR5IGhlbHBlciA6IFNldHMgdGhlIHNpemUgb2YgYSB2aXNpYmlsaXR5IGJveCwgdGhpcyBzZXRzIHRoZSB1bmRlcmx5aW5nIG1lc2ggYm91bmRpbmcgYm94LlxyXG4gICAgICogQHBhcmFtIHNpemUgdGhlIHNpemUgKGZsb2F0KSBvZiB0aGUgdmlzaWJpbGl0eSBib3hcclxuICAgICAqIG5vdGUgOiB0aGlzIGRvZXNuJ3QgbG9jayB0aGUgUENTIG1lc2ggYm91bmRpbmcgYm94LlxyXG4gICAgICogZG9jIDpcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFZpc2liaWxpdHlCb3goc2l6ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1lc2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmlzID0gc2l6ZSAvIDI7XHJcbiAgICAgICAgdGhpcy5tZXNoLmJ1aWxkQm91bmRpbmdJbmZvKG5ldyBWZWN0b3IzKC12aXMsIC12aXMsIC12aXMpLCBuZXcgVmVjdG9yMyh2aXMsIHZpcywgdmlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIFBDUyBpcyBhbHdheXMgdmlzaWJsZSBvciBub3RcclxuICAgICAqIGRvYyA6XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNBbHdheXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbHdheXNWaXNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgUENTIGFzIGFsd2F5cyB2aXNpYmxlIG9yIG5vdFxyXG4gICAgICogZG9jIDpcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBpc0Fsd2F5c1Zpc2libGUodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1lc2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYWx3YXlzVmlzaWJsZSA9IHZhbDtcclxuICAgICAgICB0aGlzLm1lc2guYWx3YXlzU2VsZWN0QXNBY3RpdmVNZXNoID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGVsbHMgdG8gYHNldFBhcnRpY2xlcygpYCB0byBjb21wdXRlIHRoZSBwYXJ0aWNsZSByb3RhdGlvbnMgb3Igbm90XHJcbiAgICAgKiBEZWZhdWx0IHZhbHVlIDogZmFsc2UuIFRoZSBQQ1MgaXMgZmFzdGVyIHdoZW4gaXQncyBzZXQgdG8gZmFsc2VcclxuICAgICAqIE5vdGUgOiBwYXJ0aWNsZSByb3RhdGlvbnMgYXJlIG9ubHkgYXBwbGllZCB0byBwYXJlbnQgcGFydGljbGVzXHJcbiAgICAgKiBOb3RlIDogdGhlIHBhcnRpY2xlIHJvdGF0aW9ucyBhcmVuJ3Qgc3RvcmVkIHZhbHVlcywgc28gc2V0dGluZyBgY29tcHV0ZVBhcnRpY2xlUm90YXRpb25gIHRvIGZhbHNlIHdpbGwgcHJldmVudHMgdGhlIHBhcnRpY2xlIHRvIHJvdGF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNvbXB1dGVQYXJ0aWNsZVJvdGF0aW9uKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2NvbXB1dGVQYXJ0aWNsZVJvdGF0aW9uID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGVsbHMgdG8gYHNldFBhcnRpY2xlcygpYCB0byBjb21wdXRlIHRoZSBwYXJ0aWNsZSBjb2xvcnMgb3Igbm90LlxyXG4gICAgICogRGVmYXVsdCB2YWx1ZSA6IHRydWUuIFRoZSBQQ1MgaXMgZmFzdGVyIHdoZW4gaXQncyBzZXQgdG8gZmFsc2UuXHJcbiAgICAgKiBOb3RlIDogdGhlIHBhcnRpY2xlIGNvbG9ycyBhcmUgc3RvcmVkIHZhbHVlcywgc28gc2V0dGluZyBgY29tcHV0ZVBhcnRpY2xlQ29sb3JgIHRvIGZhbHNlIHdpbGwga2VlcCB5ZXQgdGhlIGxhc3QgY29sb3JzIHNldC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjb21wdXRlUGFydGljbGVDb2xvcih2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jb21wdXRlUGFydGljbGVDb2xvciA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGNvbXB1dGVQYXJ0aWNsZVRleHR1cmUodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fY29tcHV0ZVBhcnRpY2xlVGV4dHVyZSA9IHZhbDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBpZiBgc2V0UGFydGljbGVzKClgIGNvbXB1dGVzIHRoZSBwYXJ0aWNsZSBjb2xvcnMgb3Igbm90LlxyXG4gICAgICogRGVmYXVsdCB2YWx1ZSA6IGZhbHNlLiBUaGUgUENTIGlzIGZhc3RlciB3aGVuIGl0J3Mgc2V0IHRvIGZhbHNlLlxyXG4gICAgICogTm90ZSA6IHRoZSBwYXJ0aWNsZSBjb2xvcnMgYXJlIHN0b3JlZCB2YWx1ZXMsIHNvIHNldHRpbmcgYGNvbXB1dGVQYXJ0aWNsZUNvbG9yYCB0byBmYWxzZSB3aWxsIGtlZXAgeWV0IHRoZSBsYXN0IGNvbG9ycyBzZXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY29tcHV0ZVBhcnRpY2xlQ29sb3IoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXB1dGVQYXJ0aWNsZUNvbG9yO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGlmIGBzZXRQYXJ0aWNsZXMoKWAgY29tcHV0ZXMgdGhlIHBhcnRpY2xlIHRleHR1cmVzIG9yIG5vdC5cclxuICAgICAqIERlZmF1bHQgdmFsdWUgOiBmYWxzZS4gVGhlIFBDUyBpcyBmYXN0ZXIgd2hlbiBpdCdzIHNldCB0byBmYWxzZS5cclxuICAgICAqIE5vdGUgOiB0aGUgcGFydGljbGUgdGV4dHVyZXMgYXJlIHN0b3JlZCB2YWx1ZXMsIHNvIHNldHRpbmcgYGNvbXB1dGVQYXJ0aWNsZVRleHR1cmVgIHRvIGZhbHNlIHdpbGwga2VlcCB5ZXQgdGhlIGxhc3QgY29sb3JzIHNldC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjb21wdXRlUGFydGljbGVUZXh0dXJlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wdXRlUGFydGljbGVUZXh0dXJlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUZWxscyB0byBgc2V0UGFydGljbGVzKClgIHRvIGNvbXB1dGUgb3Igbm90IHRoZSBtZXNoIGJvdW5kaW5nIGJveCB3aGVuIGNvbXB1dGluZyB0aGUgcGFydGljbGUgcG9zaXRpb25zLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNvbXB1dGVCb3VuZGluZ0JveCh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jb21wdXRlQm91bmRpbmdCb3ggPSB2YWw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgaWYgYHNldFBhcnRpY2xlcygpYCBjb21wdXRlcyBvciBub3QgdGhlIG1lc2ggYm91bmRpbmcgYm94IHdoZW4gY29tcHV0aW5nIHRoZSBwYXJ0aWNsZSBwb3NpdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY29tcHV0ZUJvdW5kaW5nQm94KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wdXRlQm91bmRpbmdCb3g7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFBhcnRpY2xlIGJlaGF2aW9yIGxvZ2ljXHJcbiAgICAvLyB0aGVzZSBmb2xsb3dpbmcgbWV0aG9kcyBtYXkgYmUgb3ZlcndyaXR0ZW4gYnkgdXNlcnMgdG8gZml0IHRoZWlyIG5lZWRzXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90aGluZy4gSXQgbWF5IGJlIG92ZXJ3cml0dGVuIHRvIHNldCBhbGwgdGhlIHBhcnRpY2xlIGZpcnN0IHZhbHVlcy5cclxuICAgICAqIFRoZSBQQ1MgZG9lc24ndCBjYWxsIHRoaXMgZnVuY3Rpb24sIHlvdSBtYXkgaGF2ZSB0byBjYWxsIGl0IGJ5IHlvdXIgb3duLlxyXG4gICAgICogZG9jIDpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRQYXJ0aWNsZXMoKTogdm9pZCB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdGhpbmcuIEl0IG1heSBiZSBvdmVyd3JpdHRlbiB0byByZWN5Y2xlIGEgcGFydGljbGVcclxuICAgICAqIFRoZSBQQ1MgZG9lc24ndCBjYWxsIHRoaXMgZnVuY3Rpb24sIHlvdSBjYW4gdG8gY2FsbCBpdFxyXG4gICAgICogZG9jIDpcclxuICAgICAqIEBwYXJhbSBwYXJ0aWNsZSBUaGUgcGFydGljbGUgdG8gcmVjeWNsZVxyXG4gICAgICogQHJldHVybnMgdGhlIHJlY3ljbGVkIHBhcnRpY2xlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWN5Y2xlUGFydGljbGUocGFydGljbGU6IENsb3VkUG9pbnQpOiBDbG91ZFBvaW50IHtcclxuICAgICAgICByZXR1cm4gcGFydGljbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGEgcGFydGljbGUgOiB0aGlzIGZ1bmN0aW9uIHNob3VsZCAgYmUgb3ZlcndyaXR0ZW4gYnkgdGhlIHVzZXIuXHJcbiAgICAgKiBJdCBpcyBjYWxsZWQgb24gZWFjaCBwYXJ0aWNsZSBieSBgc2V0UGFydGljbGVzKClgLiBUaGlzIGlzIHRoZSBwbGFjZSB0byBjb2RlIGVhY2ggcGFydGljbGUgYmVoYXZpb3IuXHJcbiAgICAgKiBkb2MgOlxyXG4gICAgICogQGV4YW1wbGUgOiBqdXN0IHNldCBhIHBhcnRpY2xlIHBvc2l0aW9uIG9yIHZlbG9jaXR5IGFuZCByZWN5Y2xlIGNvbmRpdGlvbnNcclxuICAgICAqIEBwYXJhbSBwYXJ0aWNsZSBUaGUgcGFydGljbGUgdG8gdXBkYXRlXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgdXBkYXRlZCBwYXJ0aWNsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlUGFydGljbGUocGFydGljbGU6IENsb3VkUG9pbnQpOiBDbG91ZFBvaW50IHtcclxuICAgICAgICByZXR1cm4gcGFydGljbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBhbnkgb3RoZXIgdHJlYXRtZW50IGJ5IGBzZXRQYXJ0aWNsZXMoKWAgYW5kIHdpbGwgYmUgcGFzc2VkIHRocmVlIHBhcmFtZXRlcnMuXHJcbiAgICAgKiBUaGlzIGRvZXMgbm90aGluZyBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuIGJ5IHRoZSB1c2VyLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0IHRoZSBwYXJ0aWNsZSBpbmRleCBpbiB0aGUgcGFydGljbGUgYXJyYXkgd2hlcmUgdG8gc3RhcnQgdG8gaXRlcmF0ZSwgc2FtZSB0aGFuIHRoZSB2YWx1ZSBwYXNzZWQgdG8gc2V0UGFydGljbGUoKVxyXG4gICAgICogQHBhcmFtIHN0b3AgdGhlIHBhcnRpY2xlIGluZGV4IGluIHRoZSBwYXJ0aWNsZSBhcnJheSB3aGVyZSB0byBzdG9wIHRvIGl0ZXJhdGUsIHNhbWUgdGhhbiB0aGUgdmFsdWUgcGFzc2VkIHRvIHNldFBhcnRpY2xlKClcclxuICAgICAqIEBwYXJhbSB1cGRhdGUgdGhlIGJvb2xlYW4gdXBkYXRlIHZhbHVlIGFjdHVhbGx5IHBhc3NlZCB0byBzZXRQYXJ0aWNsZXMoKVxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICBwdWJsaWMgYmVmb3JlVXBkYXRlUGFydGljbGVzKHN0YXJ0PzogbnVtYmVyLCBzdG9wPzogbnVtYmVyLCB1cGRhdGU/OiBib29sZWFuKTogdm9pZCB7fVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkICBieSBgc2V0UGFydGljbGVzKClgIGFmdGVyIGFsbCB0aGUgb3RoZXIgdHJlYXRtZW50cyBhbmQganVzdCBiZWZvcmUgdGhlIGFjdHVhbCBtZXNoIHVwZGF0ZS5cclxuICAgICAqIFRoaXMgd2lsbCBiZSBwYXNzZWQgdGhyZWUgcGFyYW1ldGVycy5cclxuICAgICAqIFRoaXMgZG9lcyBub3RoaW5nIGFuZCBtYXkgYmUgb3ZlcndyaXR0ZW4gYnkgdGhlIHVzZXIuXHJcbiAgICAgKiBAcGFyYW0gc3RhcnQgdGhlIHBhcnRpY2xlIGluZGV4IGluIHRoZSBwYXJ0aWNsZSBhcnJheSB3aGVyZSB0byBzdGFydCB0byBpdGVyYXRlLCBzYW1lIHRoYW4gdGhlIHZhbHVlIHBhc3NlZCB0byBzZXRQYXJ0aWNsZSgpXHJcbiAgICAgKiBAcGFyYW0gc3RvcCB0aGUgcGFydGljbGUgaW5kZXggaW4gdGhlIHBhcnRpY2xlIGFycmF5IHdoZXJlIHRvIHN0b3AgdG8gaXRlcmF0ZSwgc2FtZSB0aGFuIHRoZSB2YWx1ZSBwYXNzZWQgdG8gc2V0UGFydGljbGUoKVxyXG4gICAgICogQHBhcmFtIHVwZGF0ZSB0aGUgYm9vbGVhbiB1cGRhdGUgdmFsdWUgYWN0dWFsbHkgcGFzc2VkIHRvIHNldFBhcnRpY2xlcygpXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuICAgIHB1YmxpYyBhZnRlclVwZGF0ZVBhcnRpY2xlcyhzdGFydD86IG51bWJlciwgc3RvcD86IG51bWJlciwgdXBkYXRlPzogYm9vbGVhbik6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJUGFyc2VkU3BsYXQgfSBmcm9tIFwiLi9zcGxhdERlZnNcIjtcclxuaW1wb3J0IHsgTW9kZSB9IGZyb20gXCIuL3NwbGF0RGVmc1wiO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnNjYWxhclwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0RW5naW5lIH0gZnJvbSBcImNvcmUvRW5naW5lc1wiO1xyXG5cclxuLyoqXHJcbiAqIERlZmluaXRpb24gb2YgYSBTT0cgZGF0YSBmaWxlXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBpbnRlcmZhY2UgU09HRGF0YUZpbGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBpbmRleCAwIGlzIG51bWJlciBvZiBzcGxhdHMgaW5kZXggMSBpcyBudW1iZXIgb2YgY29tcG9uZW50cyBwZXIgc3BsYXQgKDMgZm9yIHZlYzMsIDQgZm9yIHZlYzQsIGV0Yy4pXHJcbiAgICAgKi9cclxuICAgIHNoYXBlOiBudW1iZXJbXTtcclxuICAgIC8qKlxyXG4gICAgICogdHlwZSBvZiBjb21wb25lbnRzXHJcbiAgICAgKi9cclxuICAgIGR0eXBlOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIG1pbiByYW5nZSBvZiBkYXRhXHJcbiAgICAgKi9cclxuICAgIG1pbnM/OiBudW1iZXIgfCBudW1iZXJbXTtcclxuICAgIC8qKlxyXG4gICAgICogbWF4IHJhbmdlIG9mIGRhdGFcclxuICAgICAqL1xyXG4gICAgbWF4cz86IG51bWJlciB8IG51bWJlcltdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBwYWxldHRlIGZvciBpbmRleGVkIGRhdGEgKHF1YW50aXplZClcclxuICAgICAqL1xyXG4gICAgY29kZWJvb2s/OiBudW1iZXJbXTsgLy8gT25seSBmb3IgdmVyc2lvbiAyXHJcbiAgICAvKipcclxuICAgICAqIHR5cGUgb2YgZW5jb2RpbmdcclxuICAgICAqL1xyXG4gICAgZW5jb2Rpbmc/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIG51bWJlciBvZiBiaXRzIGZvciBxdWFudGl6YXRpb24gKGlmIGFueSlcclxuICAgICAqL1xyXG4gICAgcXVhbnRpemF0aW9uPzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiB3ZWJwIGZpbGUgbmFtZXNcclxuICAgICAqL1xyXG4gICAgZmlsZXM6IHN0cmluZ1tdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTSCBiYW5kIGNvdW50IChpZiBhcHBsaWNhYmxlKVxyXG4gICAgICovXHJcbiAgICBiYW5kcz86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluaXRpb24gb2YgdGhlIHJvb3QgU09HIGRhdGEgZmlsZVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgaW50ZXJmYWNlIFNPR1Jvb3REYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogdmVyc2lvbiBvZiB0aGUgU09HIGZvcm1hdFxyXG4gICAgICovXHJcbiAgICB2ZXJzaW9uPzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtZWFuIHBvc2l0aW9ucyBvZiB0aGUgc3BsYXRzXHJcbiAgICAgKi9cclxuICAgIG1lYW5zOiBTT0dEYXRhRmlsZTtcclxuICAgIC8qKlxyXG4gICAgICogc2NhbGVzIG9mIHRoZSBzcGxhdHNcclxuICAgICAqL1xyXG4gICAgc2NhbGVzOiBTT0dEYXRhRmlsZTtcclxuICAgIC8qKlxyXG4gICAgICogcXVhdGVybmlvbnMgb2YgdGhlIHNwbGF0c1xyXG4gICAgICovXHJcbiAgICBxdWF0czogU09HRGF0YUZpbGU7XHJcbiAgICAvKipcclxuICAgICAqIFNIMCBjb2VmZmljaWVudHMgb2YgdGhlIHNwbGF0cyAoYmFzZSBjb2xvcilcclxuICAgICAqL1xyXG4gICAgc2gwOiBTT0dEYXRhRmlsZTtcclxuICAgIC8qKlxyXG4gICAgICogIE9wdGlvbmFsIGhpZ2hlciBvcmRlciBTSCBjb2VmZmljaWVudHMgb2YgdGhlIHNwbGF0cyAobGlnaHRpbmcgaW5mb3JtYXRpb24pXHJcbiAgICAgKi9cclxuICAgIHNoTj86IFNPR0RhdGFGaWxlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBudW1iZXIgb2Ygc3BsYXRzIChvcHRpb25hbCwgY2FuIGJlIGluZmVycmVkIGZyb20gbWVhbnMuc2hhcGVbMF0pXHJcbiAgICAgKi9cclxuICAgIGNvdW50PzogbnVtYmVyO1xyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmludGVyZmFjZSBJV2ViUEltYWdlIHtcclxuICAgIGJpdHM6IFVpbnQ4QXJyYXk7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG59XHJcbmNvbnN0IFNIX0MwID0gMC4yODIwOTQ3OTE3NzM4NzgxNDtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIExvYWRXZWJwSW1hZ2VEYXRhKHJvb3RVcmxPckRhdGE6IHN0cmluZyB8IFVpbnQ4QXJyYXksIGZpbGVuYW1lOiBzdHJpbmcsIGVuZ2luZTogQWJzdHJhY3RFbmdpbmUpOiBQcm9taXNlPElXZWJQSW1hZ2U+IHtcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxJV2ViUEltYWdlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBlbmdpbmUuY3JlYXRlQ2FudmFzSW1hZ2UoKTtcclxuICAgICAgICBpZiAoIWltYWdlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgSW1hZ2VCaXRtYXBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIERyYXcgdG8gY2FudmFzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW52YXMgPSBlbmdpbmUuY3JlYXRlQ2FudmFzKGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjYW52YXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGNhbnZhc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN0eCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgMkQgY29udGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgcGl4ZWwgZGF0YSAoUkdCQSBwZXIgcGl4ZWwpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgYml0czogbmV3IFVpbnQ4QXJyYXkoaW1hZ2VEYXRhLmRhdGEuYnVmZmVyKSwgd2lkdGg6IGltYWdlRGF0YS53aWR0aCB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGBFcnJvciBsb2FkaW5nIGltYWdlICR7aW1hZ2Uuc3JjfSB3aXRoIGV4Y2VwdGlvbjogJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnNcclxuICAgICAgICAgICAgcmVqZWN0KGBFcnJvciBsb2FkaW5nIGltYWdlICR7aW1hZ2Uuc3JjfSB3aXRoIGV4Y2VwdGlvbjogJHtlcnJvcn1gKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCI7IC8vIFRvIGF2b2lkIENPUlMgaXNzdWVzXHJcbiAgICAgICAgbGV0IG9iamVjdFVybDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygcm9vdFVybE9yRGF0YSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAvLyBvbGQgYmVoYXZpb3I6IFVSTCArIGZpbGVuYW1lXHJcbiAgICAgICAgICAgIGlmICghZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZpbGVuYW1lIGlzIHJlcXVpcmVkIHdoZW4gdXNpbmcgYSBVUkxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gcm9vdFVybE9yRGF0YSArIGZpbGVuYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIG5ldyBiZWhhdmlvcjogVWludDhBcnJheVxyXG4gICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jvb3RVcmxPckRhdGEgYXMgYW55XSwgeyB0eXBlOiBcImltYWdlL3dlYnBcIiB9KTtcclxuICAgICAgICAgICAgb2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gb2JqZWN0VXJsO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGF3YWl0IHByb21pc2U7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFBhcnNlU29nRGF0YXMoZGF0YTogU09HUm9vdERhdGEsIGltYWdlRGF0YUFycmF5czogSVdlYlBJbWFnZVtdLCBzY2VuZTogU2NlbmUpOiBQcm9taXNlPElQYXJzZWRTcGxhdD4ge1xyXG4gICAgY29uc3Qgc3BsYXRDb3VudCA9IGRhdGEuY291bnQgPyBkYXRhLmNvdW50IDogZGF0YS5tZWFucy5zaGFwZVswXTtcclxuICAgIGNvbnN0IHJvd091dHB1dExlbmd0aCA9IDMgKiA0ICsgMyAqIDQgKyA0ICsgNDsgLy8gMzJcclxuICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihyb3dPdXRwdXRMZW5ndGggKiBzcGxhdENvdW50KTtcclxuXHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKTtcclxuICAgIGNvbnN0IHNjYWxlID0gbmV3IEZsb2F0MzJBcnJheShidWZmZXIpO1xyXG4gICAgY29uc3QgcmdiYSA9IG5ldyBVaW50OENsYW1wZWRBcnJheShidWZmZXIpO1xyXG4gICAgY29uc3Qgcm90ID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGJ1ZmZlcik7XHJcblxyXG4gICAgLy8gVW5kbyB0aGUgc3ltbWV0cmljIGxvZyB0cmFuc2Zvcm0gdXNlZCBhdCBlbmNvZGUgdGltZTpcclxuICAgIGNvbnN0IHVubG9nID0gKG46IG51bWJlcikgPT4gTWF0aC5zaWduKG4pICogKE1hdGguZXhwKE1hdGguYWJzKG4pKSAtIDEpO1xyXG5cclxuICAgIGNvbnN0IG1lYW5zbCA9IGltYWdlRGF0YUFycmF5c1swXS5iaXRzO1xyXG4gICAgY29uc3QgbWVhbnN1ID0gaW1hZ2VEYXRhQXJyYXlzWzFdLmJpdHM7XHJcbiAgICAvLyBDaGVjayB0aGF0IGRhdGEubWVhbnMubWlucyBpcyBhbiBhcnJheVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEubWVhbnMubWlucykgfHwgIUFycmF5LmlzQXJyYXkoZGF0YS5tZWFucy5tYXhzKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgYXJyYXlzIGluIFNPRyBkYXRhLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gUG9zaXRpb25zXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGF0Q291bnQ7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaSAqIDQ7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbWVhbnNNaW4gPSBkYXRhLm1lYW5zLm1pbnNbal07XHJcbiAgICAgICAgICAgIGNvbnN0IG1lYW5zTWF4ID0gZGF0YS5tZWFucy5tYXhzW2pdO1xyXG4gICAgICAgICAgICBjb25zdCBtZWFuc3VwID0gbWVhbnN1W2luZGV4ICsgal07XHJcbiAgICAgICAgICAgIGNvbnN0IG1lYW5zbG93ID0gbWVhbnNsW2luZGV4ICsgal07XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSAobWVhbnN1cCA8PCA4KSB8IG1lYW5zbG93O1xyXG4gICAgICAgICAgICBjb25zdCBuID0gU2NhbGFyLkxlcnAobWVhbnNNaW4sIG1lYW5zTWF4LCBxIC8gNjU1MzUpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbltpICogOCArIGpdID0gdW5sb2cobik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLSBTY2FsZXNcclxuICAgIGNvbnN0IHNjYWxlcyA9IGltYWdlRGF0YUFycmF5c1syXS5iaXRzO1xyXG4gICAgaWYgKGRhdGEudmVyc2lvbiA9PT0gMikge1xyXG4gICAgICAgIGlmICghZGF0YS5zY2FsZXMuY29kZWJvb2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBjb2RlYm9vayBpbiBTT0cgdmVyc2lvbiAyIHNjYWxlcyBkYXRhLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpICogNDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjID0gZGF0YS5zY2FsZXMuY29kZWJvb2tbc2NhbGVzW2luZGV4ICsgal1dO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NlID0gTWF0aC5leHAoc2MpO1xyXG4gICAgICAgICAgICAgICAgc2NhbGVbaSAqIDggKyAzICsgal0gPSBzY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLnNjYWxlcy5taW5zKSB8fCAhQXJyYXkuaXNBcnJheShkYXRhLnNjYWxlcy5tYXhzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGFycmF5cyBpbiBTT0cgc2NhbGVzIGRhdGEuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpICogNDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjID0gc2NhbGVzW2luZGV4ICsgal07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsc2MgPSBTY2FsYXIuTGVycChkYXRhLnNjYWxlcy5taW5zW2pdLCBkYXRhLnNjYWxlcy5tYXhzW2pdLCBzYyAvIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsc2NlID0gTWF0aC5leHAobHNjKTtcclxuICAgICAgICAgICAgICAgIHNjYWxlW2kgKiA4ICsgMyArIGpdID0gbHNjZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gQ29sb3JzL1NIMFxyXG4gICAgY29uc3QgY29sb3JzID0gaW1hZ2VEYXRhQXJyYXlzWzRdLmJpdHM7XHJcbiAgICBpZiAoZGF0YS52ZXJzaW9uID09PSAyKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhLnNoMC5jb2RlYm9vaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGNvZGVib29rIGluIFNPRyB2ZXJzaW9uIDIgc2gwIGRhdGEuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGF0Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGkgKiA0O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gMC41ICsgZGF0YS5zaDAuY29kZWJvb2tbY29sb3JzW2luZGV4ICsgal1dICogU0hfQzA7XHJcbiAgICAgICAgICAgICAgICByZ2JhW2kgKiAzMiArIDI0ICsgal0gPSBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQoMjU1ICogY29tcG9uZW50KSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJnYmFbaSAqIDMyICsgMjQgKyAzXSA9IGNvbG9yc1tpbmRleCArIDNdO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEuc2gwLm1pbnMpIHx8ICFBcnJheS5pc0FycmF5KGRhdGEuc2gwLm1heHMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgYXJyYXlzIGluIFNPRyBzaDAgZGF0YS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsYXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaSAqIDQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvcnNNaW4gPSBkYXRhLnNoMC5taW5zW2pdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JzTWF4ID0gZGF0YS5zaDAubWF4c1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvcnQgPSBjb2xvcnNbaW5kZXggKyBqXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBTY2FsYXIuTGVycChjb2xvcnNNaW4sIGNvbG9yc01heCwgY29sb3J0IC8gMjU1KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3NoO1xyXG4gICAgICAgICAgICAgICAgaWYgKGogPCAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3NoID0gMC41ICsgYyAqIFNIX0MwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjc2ggPSAxLjAgLyAoMS4wICsgTWF0aC5leHAoLWMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZ2JhW2kgKiAzMiArIDI0ICsgal0gPSBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQoMjU1ICogY3NoKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLSBSb3RhdGlvbnNcclxuICAgIC8vIERlcXVhbnRpemUgdGhlIHN0b3JlZCB0aHJlZSBjb21wb25lbnRzOlxyXG4gICAgY29uc3QgdG9Db21wID0gKGM6IG51bWJlcikgPT4gKChjIC8gMjU1IC0gMC41KSAqIDIuMCkgLyBNYXRoLlNRUlQyO1xyXG5cclxuICAgIGNvbnN0IHF1YXRBcnJheSA9IGltYWdlRGF0YUFycmF5c1szXS5iaXRzO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICBjb25zdCBxdWF0c3IgPSBxdWF0QXJyYXlbaSAqIDQgKyAwXTtcclxuICAgICAgICBjb25zdCBxdWF0c2cgPSBxdWF0QXJyYXlbaSAqIDQgKyAxXTtcclxuICAgICAgICBjb25zdCBxdWF0c2IgPSBxdWF0QXJyYXlbaSAqIDQgKyAyXTtcclxuICAgICAgICBjb25zdCBxdWF0c2EgPSBxdWF0QXJyYXlbaSAqIDQgKyAzXTtcclxuXHJcbiAgICAgICAgY29uc3QgYSA9IHRvQ29tcChxdWF0c3IpO1xyXG4gICAgICAgIGNvbnN0IGIgPSB0b0NvbXAocXVhdHNnKTtcclxuICAgICAgICBjb25zdCBjID0gdG9Db21wKHF1YXRzYik7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vZGUgPSBxdWF0c2EgLSAyNTI7IC8vIDAuLjMgKFIsRyxCLEEgaXMgb25lIG9mIHRoZSBmb3VyIGNvbXBvbmVudHMpXHJcblxyXG4gICAgICAgIC8vIFJlY29uc3RydWN0IHRoZSBvbWl0dGVkIGNvbXBvbmVudCBzbyB0aGF0IHx8cXx8ID0gMSBhbmQgdy5sLm8uZy4gdGhlIG9taXR0ZWQgb25lIGlzIG5vbi1uZWdhdGl2ZVxyXG4gICAgICAgIGNvbnN0IHQgPSBhICogYSArIGIgKiBiICsgYyAqIGM7XHJcbiAgICAgICAgY29uc3QgZCA9IE1hdGguc3FydChNYXRoLm1heCgwLCAxIC0gdCkpO1xyXG5cclxuICAgICAgICAvLyBQbGFjZSBjb21wb25lbnRzIGFjY29yZGluZyB0byBtb2RlXHJcbiAgICAgICAgbGV0IHE6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBxID0gW2QsIGEsIGIsIGNdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vIG9taXR0ZWQgPSB4XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHEgPSBbYSwgZCwgYiwgY107XHJcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gb21pdHRlZCA9IHlcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcSA9IFthLCBiLCBkLCBjXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBvbWl0dGVkID0gelxyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBxID0gW2EsIGIsIGMsIGRdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vIG9taXR0ZWQgPSB3XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHF1YXRlcm5pb24gbW9kZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJvdFtpICogMzIgKyAyOCArIDBdID0gcVswXSAqIDEyNy41ICsgMTI3LjU7XHJcbiAgICAgICAgcm90W2kgKiAzMiArIDI4ICsgMV0gPSBxWzFdICogMTI3LjUgKyAxMjcuNTtcclxuICAgICAgICByb3RbaSAqIDMyICsgMjggKyAyXSA9IHFbMl0gKiAxMjcuNSArIDEyNy41O1xyXG4gICAgICAgIHJvdFtpICogMzIgKyAyOCArIDNdID0gcVszXSAqIDEyNy41ICsgMTI3LjU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tIFNIXHJcbiAgICBpZiAoZGF0YS5zaE4pIHtcclxuICAgICAgICBjb25zdCBjb2VmZkNvdW50cyA9IFswLCAzLCA4LCAxNV07XHJcbiAgICAgICAgY29uc3QgY29lZmZzID0gZGF0YS5zaE4uYmFuZHMgPyBjb2VmZkNvdW50c1tkYXRhLnNoTi5iYW5kc10gOiBkYXRhLnNoTi5zaGFwZVsxXSAvIDM7IC8vIDMgY29tcG9uZW50cyBwZXIgY29lZmZcclxuICAgICAgICBjb25zdCBzaENlbnRyb2lkcyA9IGltYWdlRGF0YUFycmF5c1s1XS5iaXRzO1xyXG4gICAgICAgIGNvbnN0IHNoTGFiZWxzRGF0YSA9IGltYWdlRGF0YUFycmF5c1s2XS5iaXRzO1xyXG4gICAgICAgIGNvbnN0IHNoQ2VudHJvaWRzV2lkdGggPSBpbWFnZURhdGFBcnJheXNbNV0ud2lkdGg7XHJcblxyXG4gICAgICAgIGNvbnN0IHNoQ29tcG9uZW50Q291bnQgPSBjb2VmZnMgKiAzO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0dXJlQ291bnQgPSBNYXRoLmNlaWwoc2hDb21wb25lbnRDb3VudCAvIDE2KTsgLy8gNCBjb21wb25lbnRzIGNhbiBiZSBzdG9yZWQgcGVyIHRleHR1cmUsIDQgc2ggcGVyIGNvbXBvbmVudFxyXG4gICAgICAgIC8vbGV0IHNoSW5kZXhSZWFkID0gYnl0ZU9mZnNldDtcclxuXHJcbiAgICAgICAgLy8gc2ggaXMgYW4gYXJyYXkgb2YgdWludDhhcnJheSB0aGF0IHdpbGwgYmUgdXNlZCB0byBjcmVhdGUgc2ggdGV4dHVyZXNcclxuICAgICAgICBjb25zdCBzaDogVWludDhBcnJheVtdID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHNjZW5lLmdldEVuZ2luZSgpO1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gZW5naW5lLmdldENhcHMoKS5tYXhUZXh0dXJlU2l6ZTtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLmNlaWwoc3BsYXRDb3VudCAvIHdpZHRoKTtcclxuICAgICAgICAvLyBjcmVhdGUgYXJyYXkgZm9yIHRoZSBudW1iZXIgb2YgdGV4dHVyZXMgbmVlZGVkLlxyXG4gICAgICAgIGZvciAobGV0IHRleHR1cmVJbmRleCA9IDA7IHRleHR1cmVJbmRleCA8IHRleHR1cmVDb3VudDsgdGV4dHVyZUluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBVaW50OEFycmF5KGhlaWdodCAqIHdpZHRoICogNCAqIDQpOyAvLyA0IGNvbXBvbmVudHMgcGVyIHRleHR1cmUsIDQgc2ggcGVyIGNvbXBvbmVudFxyXG4gICAgICAgICAgICBzaC5wdXNoKHRleHR1cmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGEudmVyc2lvbiA9PT0gMikge1xyXG4gICAgICAgICAgICBpZiAoIWRhdGEuc2hOLmNvZGVib29rKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGNvZGVib29rIGluIFNPRyB2ZXJzaW9uIDIgc2hOIGRhdGEuXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGF0Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbiA9IHNoTGFiZWxzRGF0YVtpICogNCArIDBdICsgKHNoTGFiZWxzRGF0YVtpICogNCArIDFdIDw8IDgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdSA9IChuICUgNjQpICogY29lZmZzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IE1hdGguZmxvb3IobiAvIDY0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNvZWZmczsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hJbmRleFdyaXRlID0gayAqIDMgKyBqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlSW5kZXggPSBNYXRoLmZsb29yKHNoSW5kZXhXcml0ZSAvIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hBcnJheSA9IHNoW3RleHR1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVJbmRleEluVGV4dHVyZSA9IHNoSW5kZXhXcml0ZSAlIDE2OyAvLyBbMC4uMTVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldFBlclNwbGF0ID0gaSAqIDE2OyAvLyAxNiBzaCB2YWx1ZXMgcGVyIHRleHR1cmUgcGVyIHNwbGF0LlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hWYWx1ZSA9IGRhdGEuc2hOLmNvZGVib29rW3NoQ2VudHJvaWRzWyh1ICsgaykgKiA0ICsgaiArIHYgKiBzaENlbnRyb2lkc1dpZHRoICogNF1dICogMTI3LjUgKyAxMjcuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hBcnJheVtieXRlSW5kZXhJblRleHR1cmUgKyBvZmZzZXRQZXJTcGxhdF0gPSBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIHNoVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGF0Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbiA9IHNoTGFiZWxzRGF0YVtpICogNCArIDBdICsgKHNoTGFiZWxzRGF0YVtpICogNCArIDFdIDw8IDgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdSA9IChuICUgNjQpICogY29lZmZzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IE1hdGguZmxvb3IobiAvIDY0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoTWluID0gZGF0YS5zaE4ubWlucyBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaE1heCA9IGRhdGEuc2hOLm1heHMgYXMgbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjb2VmZnMgLyAzOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hJbmRleFdyaXRlID0gayAqIDMgKyBqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlSW5kZXggPSBNYXRoLmZsb29yKHNoSW5kZXhXcml0ZSAvIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hBcnJheSA9IHNoW3RleHR1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVJbmRleEluVGV4dHVyZSA9IHNoSW5kZXhXcml0ZSAlIDE2OyAvLyBbMC4uMTVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldFBlclNwbGF0ID0gaSAqIDE2OyAvLyAxNiBzaCB2YWx1ZXMgcGVyIHRleHR1cmUgcGVyIHNwbGF0LlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hWYWx1ZSA9IFNjYWxhci5MZXJwKHNoTWluLCBzaE1heCwgc2hDZW50cm9pZHNbKHUgKyBrKSAqIDQgKyBqICsgdiAqIHNoQ2VudHJvaWRzV2lkdGggKiA0XSAvIDI1NSkgKiAxMjcuNSArIDEyNy41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaEFycmF5W2J5dGVJbmRleEluVGV4dHVyZSArIG9mZnNldFBlclNwbGF0XSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDI1NSwgc2hWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IG1vZGU6IE1vZGUuU3BsYXQsIGRhdGE6IGJ1ZmZlciwgaGFzVmVydGV4Q29sb3JzOiBmYWxzZSwgc2g6IHNoIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoeyBtb2RlOiBNb2RlLlNwbGF0LCBkYXRhOiBidWZmZXIsIGhhc1ZlcnRleENvbG9yczogZmFsc2UgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlIFNPRyBkYXRhIGZyb20gZWl0aGVyIGEgU09HUm9vdERhdGEgb2JqZWN0ICh3aXRoIHdlYnAgZmlsZXMgbG9hZGVkIGZyb20gcm9vdFVybCkgb3IgZnJvbSBhIE1hcCBvZiBmaWxlbmFtZXMgdG8gVWludDhBcnJheSBmaWxlIGRhdGEgKGluY2x1ZGluZyBtZXRhLmpzb24pXHJcbiAqIEBwYXJhbSBkYXRhT3JGaWxlcyBFaXRoZXIgdGhlIFNPR1Jvb3REYXRhIG9yIGEgTWFwIG9mIGZpbGVuYW1lcyB0byBVaW50OEFycmF5IGZpbGUgZGF0YSAoaW5jbHVkaW5nIG1ldGEuanNvbilcclxuICogQHBhcmFtIHJvb3RVcmwgQmFzZSBVUkwgdG8gbG9hZCB3ZWJwIGZpbGVzIGZyb20gKGlmIGRhdGFPckZpbGVzIGlzIFNPR1Jvb3REYXRhKVxyXG4gKiBAcGFyYW0gc2NlbmUgVGhlIEJhYnlsb24uanMgc2NlbmVcclxuICogQHJldHVybnMgUGFyc2VkIGRhdGFcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQYXJzZVNvZ01ldGEoZGF0YU9yRmlsZXM6IFNPR1Jvb3REYXRhIHwgTWFwPHN0cmluZywgVWludDhBcnJheT4sIHJvb3RVcmw6IHN0cmluZywgc2NlbmU6IFNjZW5lKTogUHJvbWlzZTxJUGFyc2VkU3BsYXQ+IHtcclxuICAgIGxldCBkYXRhOiBTT0dSb290RGF0YTtcclxuICAgIGxldCBmaWxlczogTWFwPHN0cmluZywgVWludDhBcnJheT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKGRhdGFPckZpbGVzIGluc3RhbmNlb2YgTWFwKSB7XHJcbiAgICAgICAgZmlsZXMgPSBkYXRhT3JGaWxlcztcclxuXHJcbiAgICAgICAgY29uc3QgbWV0YUZpbGUgPSBmaWxlcy5nZXQoXCJtZXRhLmpzb25cIik7XHJcbiAgICAgICAgaWYgKCFtZXRhRmlsZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtZXRhLmpzb24gbm90IGZvdW5kIGluIGZpbGVzIE1hcFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShtZXRhRmlsZSkpIGFzIFNPR1Jvb3REYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhID0gZGF0YU9yRmlsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29sbGVjdCBhbGwgZmlsZSBuYW1lc1xyXG4gICAgY29uc3QgdXJscyA9IFsuLi5kYXRhLm1lYW5zLmZpbGVzLCAuLi5kYXRhLnNjYWxlcy5maWxlcywgLi4uZGF0YS5xdWF0cy5maWxlcywgLi4uZGF0YS5zaDAuZmlsZXNdO1xyXG4gICAgaWYgKGRhdGEuc2hOKSB7XHJcbiAgICAgICAgdXJscy5wdXNoKC4uLmRhdGEuc2hOLmZpbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2FkIHdlYnAgaW1hZ2VzIGluIHBhcmFsbGVsXHJcbiAgICBjb25zdCBpbWFnZURhdGFBcnJheXM6IElXZWJQSW1hZ2VbXSA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgIHVybHMubWFwKGFzeW5jIChmaWxlTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZmlsZXMgJiYgZmlsZXMuaGFzKGZpbGVOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gbG9hZCBmcm9tIGluLW1lbW9yeSBVaW50OEFycmF5XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlRGF0YSA9IGZpbGVzLmdldChmaWxlTmFtZSkhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IExvYWRXZWJwSW1hZ2VEYXRhKGZpbGVEYXRhLCBmaWxlTmFtZSwgc2NlbmUuZ2V0RW5naW5lKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gZmFsbGJhY2s6IGxvYWQgZnJvbSBVUkxcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBMb2FkV2VicEltYWdlRGF0YShyb290VXJsLCBmaWxlTmFtZSwgc2NlbmUuZ2V0RW5naW5lKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IFBhcnNlU29nRGF0YXMoZGF0YSwgaW1hZ2VEYXRhQXJyYXlzLCBzY2VuZSk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cclxuaW1wb3J0IHR5cGUgeyBJU2NlbmVMb2FkZXJQbHVnaW5Bc3luYywgSVNjZW5lTG9hZGVyUGx1Z2luRmFjdG9yeSwgSVNjZW5lTG9hZGVyQXN5bmNSZXN1bHQsIElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQsIFNjZW5lTG9hZGVyUGx1Z2luT3B0aW9ucyB9IGZyb20gXCJjb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJTY2VuZUxvYWRlclBsdWdpbiB9IGZyb20gXCJjb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIjtcclxuaW1wb3J0IHsgU1BMQVRGaWxlTG9hZGVyTWV0YWRhdGEgfSBmcm9tIFwiLi9zcGxhdEZpbGVMb2FkZXIubWV0YWRhdGFcIjtcclxuaW1wb3J0IHsgR2F1c3NpYW5TcGxhdHRpbmdNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL0dhdXNzaWFuU3BsYXR0aW5nL2dhdXNzaWFuU3BsYXR0aW5nTWVzaFwiO1xyXG5pbXBvcnQgeyBBc3NldENvbnRhaW5lciB9IGZyb20gXCJjb3JlL2Fzc2V0Q29udGFpbmVyXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgUG9pbnRzQ2xvdWRTeXN0ZW0gfSBmcm9tIFwiY29yZS9QYXJ0aWNsZXMvcG9pbnRzQ2xvdWRTeXN0ZW1cIjtcclxuaW1wb3J0IHsgQ29sb3I0IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBWZXJ0ZXhEYXRhIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2gudmVydGV4RGF0YVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNQTEFUTG9hZGluZ09wdGlvbnMgfSBmcm9tIFwiLi9zcGxhdExvYWRpbmdPcHRpb25zXCI7XHJcbmltcG9ydCB0eXBlIHsgR2F1c3NpYW5TcGxhdHRpbmdNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9HYXVzc2lhblNwbGF0dGluZy9nYXVzc2lhblNwbGF0dGluZ01hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFBhcnNlU3B6IH0gZnJvbSBcIi4vc3B6XCI7XHJcbmltcG9ydCB7IE1vZGUgfSBmcm9tIFwiLi9zcGxhdERlZnNcIjtcclxuaW1wb3J0IHR5cGUgeyBJUGFyc2VkU3BsYXQgfSBmcm9tIFwiLi9zcGxhdERlZnNcIjtcclxuaW1wb3J0IHsgUGFyc2VTb2dNZXRhIH0gZnJvbSBcIi4vc29nXCI7XHJcbmltcG9ydCB0eXBlIHsgU09HUm9vdERhdGEgfSBmcm9tIFwiLi9zb2dcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgQXJjUm90YXRlQ2FtZXJhIH0gZnJvbSBcImNvcmUvQ2FtZXJhcy9hcmNSb3RhdGVDYW1lcmFcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCIge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtanNkb2MsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTY2VuZUxvYWRlclBsdWdpbk9wdGlvbnMge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgdGhlIHNwbGF0IGxvYWRlci5cclxuICAgICAgICAgKi9cclxuICAgICAgICBbU1BMQVRGaWxlTG9hZGVyTWV0YWRhdGEubmFtZV06IFBhcnRpYWw8U1BMQVRMb2FkaW5nT3B0aW9ucz47XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEZGbGF0ZSBhY2Nlc3NcclxuZGVjbGFyZSBjb25zdCBmZmxhdGU6IGFueTtcclxuXHJcbi8qKlxyXG4gKiBAZXhwZXJpbWVudGFsXHJcbiAqIFNQTEFUIGZpbGUgdHlwZSBsb2FkZXIuXHJcbiAqIFRoaXMgaXMgYSBiYWJ5bG9uIHNjZW5lIGxvYWRlciBwbHVnaW4uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU1BMQVRGaWxlTG9hZGVyIGltcGxlbWVudHMgSVNjZW5lTG9hZGVyUGx1Z2luQXN5bmMsIElTY2VuZUxvYWRlclBsdWdpbkZhY3Rvcnkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHRoZSBuYW1lIG9mIHRoZSBwbHVnaW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gU1BMQVRGaWxlTG9hZGVyTWV0YWRhdGEubmFtZTtcclxuXHJcbiAgICBwcml2YXRlIF9hc3NldENvbnRhaW5lcjogTnVsbGFibGU8QXNzZXRDb250YWluZXI+ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9sb2FkaW5nT3B0aW9uczogUmVhZG9ubHk8U1BMQVRMb2FkaW5nT3B0aW9ucz47XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIGV4dGVuc2lvbnMgdGhlIHNwbGF0IGxvYWRlciBpcyBhYmxlIHRvIGxvYWQuXHJcbiAgICAgKiBmb3JjZSBkYXRhIHRvIGNvbWUgaW4gYXMgYW4gQXJyYXlCdWZmZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGV4dGVuc2lvbnMgPSBTUExBVEZpbGVMb2FkZXJNZXRhZGF0YS5leHRlbnNpb25zO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBsb2FkZXIgZm9yIGdhdXNzaWFuIHNwbGF0dGluZyBmaWxlc1xyXG4gICAgICogQHBhcmFtIGxvYWRpbmdPcHRpb25zIG9wdGlvbnMgZm9yIGxvYWRpbmcgYW5kIHBhcnNpbmcgc3BsYXQgYW5kIFBMWSBmaWxlcy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGluZ09wdGlvbnM6IFBhcnRpYWw8UmVhZG9ubHk8U1BMQVRMb2FkaW5nT3B0aW9ucz4+ID0gU1BMQVRGaWxlTG9hZGVyLl9EZWZhdWx0TG9hZGluZ09wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9sb2FkaW5nT3B0aW9ucyA9IGxvYWRpbmdPcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9EZWZhdWx0TG9hZGluZ09wdGlvbnMgPSB7XHJcbiAgICAgICAga2VlcEluUmFtOiBmYWxzZSxcclxuICAgICAgICBmbGlwWTogZmFsc2UsXHJcbiAgICB9IGFzIGNvbnN0IHNhdGlzZmllcyBTUExBVExvYWRpbmdPcHRpb25zO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIGNyZWF0ZVBsdWdpbihvcHRpb25zOiBTY2VuZUxvYWRlclBsdWdpbk9wdGlvbnMpOiBJU2NlbmVMb2FkZXJQbHVnaW5Bc3luYyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTUExBVEZpbGVMb2FkZXIob3B0aW9uc1tTUExBVEZpbGVMb2FkZXJNZXRhZGF0YS5uYW1lXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBvcnRzICBmcm9tIHRoZSBsb2FkZWQgZ2F1c3NpYW4gc3BsYXR0aW5nIGRhdGEgYW5kIGFkZHMgdGhlbSB0byB0aGUgc2NlbmVcclxuICAgICAqIEBwYXJhbSBtZXNoZXNOYW1lcyBhIHN0cmluZyBvciBhcnJheSBvZiBzdHJpbmdzIG9mIHRoZSBtZXNoIG5hbWVzIHRoYXQgc2hvdWxkIGJlIGxvYWRlZCBmcm9tIHRoZSBmaWxlXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgdGhlIHNjZW5lIHRoZSBtZXNoZXMgc2hvdWxkIGJlIGFkZGVkIHRvXHJcbiAgICAgKiBAcGFyYW0gZGF0YSB0aGUgZ2F1c3NpYW4gc3BsYXR0aW5nIGRhdGEgdG8gbG9hZFxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgcm9vdCB1cmwgdG8gbG9hZCBmcm9tXHJcbiAgICAgKiBAcGFyYW0gX29uUHJvZ3Jlc3MgY2FsbGJhY2sgY2FsbGVkIHdoaWxlIGZpbGUgaXMgbG9hZGluZ1xyXG4gICAgICogQHBhcmFtIF9maWxlTmFtZSBEZWZpbmVzIHRoZSBuYW1lIG9mIHRoZSBmaWxlIHRvIGxvYWRcclxuICAgICAqIEByZXR1cm5zIGEgcHJvbWlzZSBjb250YWluaW5nIHRoZSBsb2FkZWQgbWVzaGVzLCBwYXJ0aWNsZXMsIHNrZWxldG9ucyBhbmQgYW5pbWF0aW9uc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgaW1wb3J0TWVzaEFzeW5jKFxyXG4gICAgICAgIG1lc2hlc05hbWVzOiBhbnksXHJcbiAgICAgICAgc2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGRhdGE6IGFueSxcclxuICAgICAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICAgICAgX29uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsXHJcbiAgICAgICAgX2ZpbGVOYW1lPzogc3RyaW5nXHJcbiAgICApOiBQcm9taXNlPElTY2VuZUxvYWRlckFzeW5jUmVzdWx0PiB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3BhcnNlQXN5bmMobWVzaGVzTmFtZXMsIHNjZW5lLCBkYXRhLCByb290VXJsKS50aGVuKChtZXNoZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1lc2hlczogbWVzaGVzLFxyXG4gICAgICAgICAgICAgICAgcGFydGljbGVTeXN0ZW1zOiBbXSxcclxuICAgICAgICAgICAgICAgIHNrZWxldG9uczogW10sXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25Hcm91cHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtTm9kZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZ2VvbWV0cmllczogW10sXHJcbiAgICAgICAgICAgICAgICBsaWdodHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlTWFuYWdlcnM6IFtdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9CdWlsZFBvaW50Q2xvdWQocG9pbnRjbG91ZDogUG9pbnRzQ2xvdWRTeXN0ZW0sIGRhdGE6IEFycmF5QnVmZmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFkYXRhLmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1QnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XHJcbiAgICAgICAgY29uc3QgZkJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XHJcblxyXG4gICAgICAgIC8vIHBhcnNlZCBhcnJheSBjb250YWlucyByb29tIGZvciBwb3NpdGlvbigzZmxvYXRzKSwgbm9ybWFsKDNmbG9hdHMpLCBjb2xvciAoNGIpLCBxdWFudGl6ZWQgcXVhdGVybmlvbiAoNGIpXHJcbiAgICAgICAgY29uc3Qgcm93TGVuZ3RoID0gMyAqIDQgKyAzICogNCArIDQgKyA0O1xyXG4gICAgICAgIGNvbnN0IHZlcnRleENvdW50ID0gdUJ1ZmZlci5sZW5ndGggLyByb3dMZW5ndGg7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvaW50Y2xvdWRmdW5jID0gZnVuY3Rpb24gKHBhcnRpY2xlOiBhbnksIGk6IG51bWJlcikge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gZkJ1ZmZlcls4ICogaSArIDBdO1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gZkJ1ZmZlcls4ICogaSArIDFdO1xyXG4gICAgICAgICAgICBjb25zdCB6ID0gZkJ1ZmZlcls4ICogaSArIDJdO1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS5wb3NpdGlvbiA9IG5ldyBWZWN0b3IzKHgsIHksIHopO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgciA9IHVCdWZmZXJbcm93TGVuZ3RoICogaSArIDI0ICsgMF0gLyAyNTU7XHJcbiAgICAgICAgICAgIGNvbnN0IGcgPSB1QnVmZmVyW3Jvd0xlbmd0aCAqIGkgKyAyNCArIDFdIC8gMjU1O1xyXG4gICAgICAgICAgICBjb25zdCBiID0gdUJ1ZmZlcltyb3dMZW5ndGggKiBpICsgMjQgKyAyXSAvIDI1NTtcclxuICAgICAgICAgICAgcGFydGljbGUuY29sb3IgPSBuZXcgQ29sb3I0KHIsIGcsIGIsIDEpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBvaW50Y2xvdWQuYWRkUG9pbnRzKHZlcnRleENvdW50LCBwb2ludGNsb3VkZnVuYyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0J1aWxkTWVzaChzY2VuZTogU2NlbmUsIHBhcnNlZFBMWTogSVBhcnNlZFNwbGF0KTogTWVzaCB7XHJcbiAgICAgICAgY29uc3QgbWVzaCA9IG5ldyBNZXNoKFwiUExZTWVzaFwiLCBzY2VuZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVCdWZmZXIgPSBuZXcgVWludDhBcnJheShwYXJzZWRQTFkuZGF0YSk7XHJcbiAgICAgICAgY29uc3QgZkJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkocGFyc2VkUExZLmRhdGEpO1xyXG5cclxuICAgICAgICBjb25zdCByb3dMZW5ndGggPSAzICogNCArIDMgKiA0ICsgNCArIDQ7XHJcbiAgICAgICAgY29uc3QgdmVydGV4Q291bnQgPSB1QnVmZmVyLmxlbmd0aCAvIHJvd0xlbmd0aDtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHZlcnRleERhdGEgPSBuZXcgVmVydGV4RGF0YSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gZkJ1ZmZlcls4ICogaSArIDBdO1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gZkJ1ZmZlcls4ICogaSArIDFdO1xyXG4gICAgICAgICAgICBjb25zdCB6ID0gZkJ1ZmZlcls4ICogaSArIDJdO1xyXG4gICAgICAgICAgICBwb3NpdGlvbnMucHVzaCh4LCB5LCB6KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWRQTFkuaGFzVmVydGV4Q29sb3JzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGV4Q291bnQgKiA0KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByID0gdUJ1ZmZlcltyb3dMZW5ndGggKiBpICsgMjQgKyAwXSAvIDI1NTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGcgPSB1QnVmZmVyW3Jvd0xlbmd0aCAqIGkgKyAyNCArIDFdIC8gMjU1O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYiA9IHVCdWZmZXJbcm93TGVuZ3RoICogaSArIDI0ICsgMl0gLyAyNTU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnNbaSAqIDQgKyAwXSA9IHI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnNbaSAqIDQgKyAxXSA9IGc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnNbaSAqIDQgKyAyXSA9IGI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnNbaSAqIDQgKyAzXSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmVydGV4RGF0YS5jb2xvcnMgPSBjb2xvcnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2ZXJ0ZXhEYXRhLnBvc2l0aW9ucyA9IHBvc2l0aW9ucztcclxuICAgICAgICB2ZXJ0ZXhEYXRhLmluZGljZXMgPSBwYXJzZWRQTFkuZmFjZXMhO1xyXG5cclxuICAgICAgICB2ZXJ0ZXhEYXRhLmFwcGx5VG9NZXNoKG1lc2gpO1xyXG4gICAgICAgIHJldHVybiBtZXNoO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXgsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfdW56aXBXaXRoRkZsYXRlQXN5bmMoZGF0YTogVWludDhBcnJheSk6IFByb21pc2U8TWFwPHN0cmluZywgVWludDhBcnJheT4+IHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGxldCBmZmxhdGUgPSB0aGlzLl9sb2FkaW5nT3B0aW9ucy5mZmxhdGUgYXMgdHlwZW9mIGltcG9ydChcImZmbGF0ZVwiKTtcclxuICAgICAgICAvLyBlbnN1cmUgZmZsYXRlIGlzIGxvYWRlZFxyXG4gICAgICAgIGlmICghZmZsYXRlKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHdpbmRvdyBhcyBhbnkpLmZmbGF0ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgVG9vbHMuTG9hZFNjcmlwdEFzeW5jKHRoaXMuX2xvYWRpbmdPcHRpb25zLmRlZmxhdGVVUkwgPz8gXCJodHRwczovL3VucGtnLmNvbS9mZmxhdGUvdW1kL2luZGV4LmpzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZmbGF0ZSA9ICh3aW5kb3cgYXMgYW55KS5mZmxhdGUgYXMgdHlwZW9mIGZmbGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgdW56aXBTeW5jIH0gPSBmZmxhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHVuemlwcGVkID0gdW56aXBTeW5jKGRhdGEpIGFzIFJlY29yZDxzdHJpbmcsIFVpbnQ4QXJyYXk+OyAvLyB7IFtmaWxlbmFtZTogc3RyaW5nXTogVWludDhBcnJheSB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbGVzID0gbmV3IE1hcDxzdHJpbmcsIFVpbnQ4QXJyYXk+KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgY29udGVudF0gb2YgT2JqZWN0LmVudHJpZXModW56aXBwZWQpKSB7XHJcbiAgICAgICAgICAgIGZpbGVzLnNldChuYW1lLCBjb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbGVzO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jLCBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfcGFyc2VBc3luYyhtZXNoZXNOYW1lczogYW55LCBzY2VuZTogU2NlbmUsIGRhdGE6IGFueSwgcm9vdFVybDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxBYnN0cmFjdE1lc2g+PiB7XHJcbiAgICAgICAgY29uc3QgYmFieWxvbk1lc2hlc0FycmF5OiBBcnJheTxNZXNoPiA9IFtdOyAvL1RoZSBtZXNoIGZvciBiYWJ5bG9uXHJcblxyXG4gICAgICAgIGNvbnN0IG1ha2VHU0Zyb21QYXJzZWRTT0cgPSAocGFyc2VkU09HOiBJUGFyc2VkU3BsYXQpID0+IHtcclxuICAgICAgICAgICAgc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IGdhdXNzaWFuU3BsYXR0aW5nID0gbmV3IEdhdXNzaWFuU3BsYXR0aW5nTWVzaChcIkdhdXNzaWFuU3BsYXR0aW5nXCIsIG51bGwsIHNjZW5lLCB0aGlzLl9sb2FkaW5nT3B0aW9ucy5rZWVwSW5SYW0pO1xyXG4gICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIGdhdXNzaWFuU3BsYXR0aW5nLnZpZXdEaXJlY3Rpb25GYWN0b3Iuc2V0KDEsIC0xLCAxKTtcclxuICAgICAgICAgICAgYmFieWxvbk1lc2hlc0FycmF5LnB1c2goZ2F1c3NpYW5TcGxhdHRpbmcpO1xyXG4gICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy51cGRhdGVEYXRhKHBhcnNlZFNPRy5kYXRhLCBwYXJzZWRTT0cuc2gpO1xyXG4gICAgICAgICAgICBzY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgZGF0YSBpcyBqc29uIHN0cmluZ1xyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhU09HID0gSlNPTi5wYXJzZShkYXRhKSBhcyBTT0dSb290RGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGFTT0cgJiYgZGF0YVNPRy5tZWFucyAmJiBkYXRhU09HLnNjYWxlcyAmJiBkYXRhU09HLnF1YXRzICYmIGRhdGFTT0cuc2gwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBQYXJzZVNvZ01ldGEoZGF0YVNPRywgcm9vdFVybCwgc2NlbmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXMsIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChwYXJzZWRTT0cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VHU0Zyb21QYXJzZWRTT0cocGFyc2VkU09HKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYmFieWxvbk1lc2hlc0FycmF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgU09HIGRhdGEuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1OCA9IGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IG5ldyBVaW50OEFycmF5KGRhdGEpIDogZGF0YTtcclxuICAgICAgICAvLyBaSVAgc2lnbmF0dXJlIGNoZWNrIGZvciBTT0dcclxuICAgICAgICBpZiAodThbMF0gPT09IDB4NTAgJiYgdThbMV0gPT09IDB4NGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzLCBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdW56aXBXaXRoRkZsYXRlQXN5bmModTgpLnRoZW4oKGZpbGVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUGFyc2VTb2dNZXRhKGZpbGVzLCByb290VXJsLCBzY2VuZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlcywgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHBhcnNlZFNPRykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZUdTRnJvbVBhcnNlZFNPRyhwYXJzZWRTT0cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShiYWJ5bG9uTWVzaGVzQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBTT0cgemlwIGRhdGEuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlYWRhYmxlU3RyZWFtID0gbmV3IFJlYWRhYmxlU3RyZWFtKHtcclxuICAgICAgICAgICAgc3RhcnQoY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKG5ldyBVaW50OEFycmF5KGRhdGEpKTsgLy8gRW5xdWV1ZSB0aGUgQXJyYXlCdWZmZXIgYXMgYSBVaW50OEFycmF5XHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFVzZSBHWmlwIERlY29tcHJlc3Npb25TdHJlYW1cclxuICAgICAgICBjb25zdCBkZWNvbXByZXNzaW9uU3RyZWFtID0gbmV3IERlY29tcHJlc3Npb25TdHJlYW0oXCJnemlwXCIpO1xyXG4gICAgICAgIGNvbnN0IGRlY29tcHJlc3NlZFN0cmVhbSA9IHJlYWRhYmxlU3RyZWFtLnBpcGVUaHJvdWdoKGRlY29tcHJlc3Npb25TdHJlYW0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgbmV3IFJlc3BvbnNlKGRlY29tcHJlc3NlZFN0cmVhbSlcclxuICAgICAgICAgICAgICAgIC5hcnJheUJ1ZmZlcigpXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgIC50aGVuKChidWZmZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzLCBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgICAgIFBhcnNlU3B6KGJ1ZmZlciwgc2NlbmUsIHRoaXMuX2xvYWRpbmdPcHRpb25zKS50aGVuKChwYXJzZWRTUFopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhdXNzaWFuU3BsYXR0aW5nID0gbmV3IEdhdXNzaWFuU3BsYXR0aW5nTWVzaChcIkdhdXNzaWFuU3BsYXR0aW5nXCIsIG51bGwsIHNjZW5lLCB0aGlzLl9sb2FkaW5nT3B0aW9ucy5rZWVwSW5SYW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkU1BaLnRyYWluZWRXaXRoQW50aWFsaWFzaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnc01hdGVyaWFsID0gZ2F1c3NpYW5TcGxhdHRpbmcubWF0ZXJpYWwgYXMgR2F1c3NpYW5TcGxhdHRpbmdNYXRlcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdzTWF0ZXJpYWwua2VybmVsU2l6ZSA9IDAuMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdzTWF0ZXJpYWwuY29tcGVuc2F0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoZXNBcnJheS5wdXNoKGdhdXNzaWFuU3BsYXR0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2F1c3NpYW5TcGxhdHRpbmcudXBkYXRlRGF0YShwYXJzZWRTUFouZGF0YSwgcGFyc2VkU1BaLnNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5QXV0b0NhbWVyYUxpbWl0cyhwYXJzZWRTUFosIHNjZW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShiYWJ5bG9uTWVzaGVzQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDYXRjaCBhbnkgZGVjb21wcmVzc2lvbiBlcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzLCBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgICAgIFNQTEFURmlsZUxvYWRlci5fQ29udmVydFBMWVRvU3BsYXQoZGF0YSBhcyBBcnJheUJ1ZmZlcikudGhlbihhc3luYyAocGFyc2VkUExZKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcnNlZFBMWS5tb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1vZGUuU3BsYXQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnYXVzc2lhblNwbGF0dGluZyA9IG5ldyBHYXVzc2lhblNwbGF0dGluZ01lc2goXCJHYXVzc2lhblNwbGF0dGluZ1wiLCBudWxsLCBzY2VuZSwgdGhpcy5fbG9hZGluZ09wdGlvbnMua2VlcEluUmFtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F1c3NpYW5TcGxhdHRpbmcuX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaGVzQXJyYXkucHVzaChnYXVzc2lhblNwbGF0dGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhdXNzaWFuU3BsYXR0aW5nLnVwZGF0ZURhdGEocGFyc2VkUExZLmRhdGEsIHBhcnNlZFBMWS5zaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWRQTFkuY29tcHJlc3NlZCB8fCAhcGFyc2VkUExZLnJhd1NwbGF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy52aWV3RGlyZWN0aW9uRmFjdG9yLnNldCgtMSwgLTEsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkUExZLmNoaXJhbGl0eSA9PT0gXCJSaWdodEhhbmRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy5zY2FsaW5nLnkgKj0gLTEuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXJzZWRQTFkudXBBeGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiWFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhdXNzaWFuU3BsYXR0aW5nLnJvdGF0aW9uID0gbmV3IFZlY3RvcjMoMCwgMCwgTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIllcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy5yb3RhdGlvbiA9IG5ldyBWZWN0b3IzKDAsIDAsIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlpcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy5yb3RhdGlvbiA9IG5ldyBWZWN0b3IzKC1NYXRoLlBJIC8gMiwgTWF0aC5QSSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1vZGUuUG9pbnRDbG91ZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50Y2xvdWQgPSBuZXcgUG9pbnRzQ2xvdWRTeXN0ZW0oXCJQb2ludENsb3VkXCIsIDEsIHNjZW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFNQTEFURmlsZUxvYWRlci5fQnVpbGRQb2ludENsb3VkKHBvaW50Y2xvdWQsIHBhcnNlZFBMWS5kYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBwb2ludGNsb3VkLmJ1aWxkTWVzaEFzeW5jKCkudGhlbigobWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoZXNBcnJheS5wdXNoKG1lc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGNsb3VkLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTW9kZS5NZXNoOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZFBMWS5mYWNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2hlc0FycmF5LnB1c2goU1BMQVRGaWxlTG9hZGVyLl9CdWlsZE1lc2goc2NlbmUsIHBhcnNlZFBMWSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUExZIG1lc2ggZG9lc24ndCBjb250YWluIGZhY2UgaW5mb3JtYXRpb25zLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgU3BsYXQgbW9kZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlBdXRvQ2FtZXJhTGltaXRzKHBhcnNlZFBMWSwgc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGJhYnlsb25NZXNoZXNBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGxpZXMgY2FtZXJhIGxpbWl0cyBiYXNlZCBvbiBwYXJzZWQgbWV0YSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gbWV0YSBwYXJzZWQgc3BsYXQgbWV0YSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gc2NlbmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhcHBseUF1dG9DYW1lcmFMaW1pdHMobWV0YTogSVBhcnNlZFNwbGF0LCBzY2VuZTogU2NlbmUpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fbG9hZGluZ09wdGlvbnMuZGlzYWJsZUF1dG9DYW1lcmFMaW1pdHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKG1ldGEuc2FmZU9yYml0Q2FtZXJhUmFkaXVzTWluICE9PSB1bmRlZmluZWQgfHwgbWV0YS5zYWZlT3JiaXRDYW1lcmFFbGV2YXRpb25NaW5NYXggIT09IHVuZGVmaW5lZCkgJiYgc2NlbmUuYWN0aXZlQ2FtZXJhPy5nZXRDbGFzc05hbWUoKSA9PT0gXCJBcmNSb3RhdGVDYW1lcmFcIikge1xyXG4gICAgICAgICAgICBjb25zdCBhcmNDYW0gPSBzY2VuZS5hY3RpdmVDYW1lcmEgYXMgQXJjUm90YXRlQ2FtZXJhO1xyXG4gICAgICAgICAgICBpZiAobWV0YS5zYWZlT3JiaXRDYW1lcmFFbGV2YXRpb25NaW5NYXgpIHtcclxuICAgICAgICAgICAgICAgIGFyY0NhbS5sb3dlckJldGFMaW1pdCA9IE1hdGguUEkgKiAwLjUgLSBtZXRhLnNhZmVPcmJpdENhbWVyYUVsZXZhdGlvbk1pbk1heFsxXTtcclxuICAgICAgICAgICAgICAgIGFyY0NhbS51cHBlckJldGFMaW1pdCA9IE1hdGguUEkgKiAwLjUgLSBtZXRhLnNhZmVPcmJpdENhbWVyYUVsZXZhdGlvbk1pbk1heFswXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG1ldGEuc2FmZU9yYml0Q2FtZXJhUmFkaXVzTWluKSB7XHJcbiAgICAgICAgICAgICAgICBhcmNDYW0ubG93ZXJSYWRpdXNMaW1pdCA9IG1ldGEuc2FmZU9yYml0Q2FtZXJhUmFkaXVzTWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBpbnRvIGFuIGFzc2V0IGNvbnRhaW5lci5cclxuICAgICAqIEBwYXJhbSBzY2VuZSBUaGUgc2NlbmUgdG8gbG9hZCBpbnRvXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBpbXBvcnRcclxuICAgICAqIEBwYXJhbSByb290VXJsIFRoZSByb290IHVybCBmb3Igc2NlbmUgYW5kIHJlc291cmNlc1xyXG4gICAgICogQHJldHVybnMgVGhlIGxvYWRlZCBhc3NldCBjb250YWluZXJcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZEFzc2V0Q29udGFpbmVyQXN5bmMoc2NlbmU6IFNjZW5lLCBkYXRhOiBzdHJpbmcsIHJvb3RVcmw6IHN0cmluZyk6IFByb21pc2U8QXNzZXRDb250YWluZXI+IHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBuZXcgQXNzZXRDb250YWluZXIoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuX2Fzc2V0Q29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLmltcG9ydE1lc2hBc3luYyhudWxsLCBzY2VuZSwgZGF0YSwgcm9vdFVybClcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbWVzaCBvZiByZXN1bHQubWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5tZXNoZXMucHVzaChtZXNoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWVzaCBtYXRlcmlhbCB3aWxsIGJlIG51bGwgYmVmb3JlIDFzdCByZW5kZXJlZCBmcmFtZS5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hc3NldENvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hc3NldENvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXg7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBvcnRzIGFsbCBvYmplY3RzIGZyb20gdGhlIGxvYWRlZCBPQkogZGF0YSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBzY2VuZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIHRoZSBzY2VuZSB0aGUgb2JqZWN0cyBzaG91bGQgYmUgYWRkZWQgdG9cclxuICAgICAqIEBwYXJhbSBkYXRhIHRoZSBPQkogZGF0YSB0byBsb2FkXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCByb290IHVybCB0byBsb2FkIGZyb21cclxuICAgICAqIEByZXR1cm5zIGEgcHJvbWlzZSB3aGljaCBjb21wbGV0ZXMgd2hlbiBvYmplY3RzIGhhdmUgYmVlbiBsb2FkZWQgdG8gdGhlIHNjZW5lXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBsb2FkQXN5bmMoc2NlbmU6IFNjZW5lLCBkYXRhOiBzdHJpbmcsIHJvb3RVcmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIC8vR2V0IHRoZSAzRCBtb2RlbFxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgIHJldHVybiB0aGlzLmltcG9ydE1lc2hBc3luYyhudWxsLCBzY2VuZSwgZGF0YSwgcm9vdFVybCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB2b2lkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2R5bGFuZWJlcnQvZ3NwbGF0LmpzL2Jsb2IvbWFpbi9zcmMvbG9hZGVycy9QTFlMb2FkZXIudHMgVW5kZXIgTUlUIGxpY2Vuc2VcclxuICAgICAqIENvbnZlcnRzIGEgLnBseSBkYXRhIGFycmF5IGJ1ZmZlciB0byBzcGxhdFxyXG4gICAgICogaWYgZGF0YSBhcnJheSBidWZmZXIgaXMgbm90IHBseSwgcmV0dXJucyB0aGUgb3JpZ2luYWwgYnVmZmVyXHJcbiAgICAgKiBAcGFyYW0gZGF0YSB0aGUgLnBseSBkYXRhIHRvIGxvYWRcclxuICAgICAqIEByZXR1cm5zIHRoZSBsb2FkZWQgc3BsYXQgYnVmZmVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9Db252ZXJ0UExZVG9TcGxhdChkYXRhOiBBcnJheUJ1ZmZlcik6IFByb21pc2U8SVBhcnNlZFNwbGF0PiB7XHJcbiAgICAgICAgY29uc3QgdWJ1ZiA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZSh1YnVmLnNsaWNlKDAsIDEwMjQgKiAxMCkpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckVuZCA9IFwiZW5kX2hlYWRlclxcblwiO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckVuZEluZGV4ID0gaGVhZGVyLmluZGV4T2YoaGVhZGVyRW5kKTtcclxuICAgICAgICBpZiAoaGVhZGVyRW5kSW5kZXggPCAwIHx8ICFoZWFkZXIpIHtcclxuICAgICAgICAgICAgLy8gc3RhbmRhcmQgc3BsYXRcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgbW9kZTogTW9kZS5TcGxhdCwgZGF0YTogZGF0YSwgcmF3U3BsYXQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmVydGV4Q291bnQgPSBwYXJzZUludCgvZWxlbWVudCB2ZXJ0ZXggKFxcZCspXFxuLy5leGVjKGhlYWRlcikhWzFdKTtcclxuICAgICAgICBjb25zdCBmYWNlRWxlbWVudCA9IC9lbGVtZW50IGZhY2UgKFxcZCspXFxuLy5leGVjKGhlYWRlcik7XHJcbiAgICAgICAgbGV0IGZhY2VDb3VudCA9IDA7XHJcbiAgICAgICAgaWYgKGZhY2VFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGZhY2VDb3VudCA9IHBhcnNlSW50KGZhY2VFbGVtZW50WzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2h1bmtFbGVtZW50ID0gL2VsZW1lbnQgY2h1bmsgKFxcZCspXFxuLy5leGVjKGhlYWRlcik7XHJcbiAgICAgICAgbGV0IGNodW5rQ291bnQgPSAwO1xyXG4gICAgICAgIGlmIChjaHVua0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgY2h1bmtDb3VudCA9IHBhcnNlSW50KGNodW5rRWxlbWVudFsxXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcm93VmVydGV4T2Zmc2V0ID0gMDtcclxuICAgICAgICBsZXQgcm93Q2h1bmtPZmZzZXQgPSAwO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XHJcbiAgICAgICAgICAgIGRvdWJsZTogOCxcclxuICAgICAgICAgICAgaW50OiA0LFxyXG4gICAgICAgICAgICB1aW50OiA0LFxyXG4gICAgICAgICAgICBmbG9hdDogNCxcclxuICAgICAgICAgICAgc2hvcnQ6IDIsXHJcbiAgICAgICAgICAgIHVzaG9ydDogMixcclxuICAgICAgICAgICAgdWNoYXI6IDEsXHJcbiAgICAgICAgICAgIGxpc3Q6IDAsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdHlwZSBQbHlQcm9wZXJ0eSA9IHtcclxuICAgICAgICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IEVsZW1lbnRNb2RlOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge1xyXG4gICAgICAgICAgICBWZXJ0ZXg6IDAsXHJcbiAgICAgICAgICAgIENodW5rOiAxLFxyXG4gICAgICAgICAgICBTSDogMixcclxuICAgICAgICAgICAgRmxvYXRfVHVwbGU6IDMsXHJcbiAgICAgICAgICAgIEZsb2F0OiA0LFxyXG4gICAgICAgICAgICBVY2hhcjogNSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgY2h1bmtNb2RlID0gRWxlbWVudE1vZGUuQ2h1bms7XHJcbiAgICAgICAgY29uc3QgdmVydGV4UHJvcGVydGllczogUGx5UHJvcGVydHlbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNodW5rUHJvcGVydGllczogUGx5UHJvcGVydHlbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gaGVhZGVyLnNsaWNlKDAsIGhlYWRlckVuZEluZGV4KS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICBjb25zdCBtZXRhRGF0YTogUGFydGlhbDxJUGFyc2VkU3BsYXQ+ID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIG9mIGZpbHRlcmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wLnN0YXJ0c1dpdGgoXCJwcm9wZXJ0eSBcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFssIHR5cGUsIG5hbWVdID0gcHJvcC5zcGxpdChcIiBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNodW5rTW9kZSA9PSBFbGVtZW50TW9kZS5DaHVuaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNodW5rUHJvcGVydGllcy5wdXNoKHsgbmFtZSwgdHlwZSwgb2Zmc2V0OiByb3dDaHVua09mZnNldCB9KTtcclxuICAgICAgICAgICAgICAgICAgICByb3dDaHVua09mZnNldCArPSBvZmZzZXRzW3R5cGVdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaHVua01vZGUgPT0gRWxlbWVudE1vZGUuVmVydGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4UHJvcGVydGllcy5wdXNoKHsgbmFtZSwgdHlwZSwgb2Zmc2V0OiByb3dWZXJ0ZXhPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93VmVydGV4T2Zmc2V0ICs9IG9mZnNldHNbdHlwZV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNodW5rTW9kZSA9PSBFbGVtZW50TW9kZS5TSCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleFByb3BlcnRpZXMucHVzaCh7IG5hbWUsIHR5cGUsIG9mZnNldDogcm93VmVydGV4T2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaHVua01vZGUgPT0gRWxlbWVudE1vZGUuRmxvYXRfVHVwbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGRhdGEsIHJvd0NodW5rT2Zmc2V0LCBvZmZzZXRzLmZsb2F0ICogMik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YURhdGEuc2FmZU9yYml0Q2FtZXJhRWxldmF0aW9uTWluTWF4ID0gW3ZpZXcuZ2V0RmxvYXQzMigwLCB0cnVlKSwgdmlldy5nZXRGbG9hdDMyKDQsIHRydWUpXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2h1bmtNb2RlID09IEVsZW1lbnRNb2RlLkZsb2F0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBEYXRhVmlldyhkYXRhLCByb3dDaHVua09mZnNldCwgb2Zmc2V0cy5mbG9hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YURhdGEuc2FmZU9yYml0Q2FtZXJhUmFkaXVzTWluID0gdmlldy5nZXRGbG9hdDMyKDAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaHVua01vZGUgPT0gRWxlbWVudE1vZGUuVWNoYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGRhdGEsIHJvd0NodW5rT2Zmc2V0LCBvZmZzZXRzLnVjaGFyKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSA9PSBcInVwX2F4aXNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhRGF0YS51cEF4aXMgPSB2aWV3LmdldFVpbnQ4KDApID09IDAgPyBcIlhcIiA6IHZpZXcuZ2V0VWludDgoMCkgPT0gMSA/IFwiWVwiIDogXCJaXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuYW1lID09IFwiY2hpcmFsaXR5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0YURhdGEuY2hpcmFsaXR5ID0gdmlldy5nZXRVaW50OCgwKSA9PSAwID8gXCJMZWZ0SGFuZGVkXCIgOiBcIlJpZ2h0SGFuZGVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghb2Zmc2V0c1t0eXBlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGBVbnN1cHBvcnRlZCBwcm9wZXJ0eSB0eXBlOiAke3R5cGV9LmApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3Auc3RhcnRzV2l0aChcImVsZW1lbnQgXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbLCB0eXBlXSA9IHByb3Auc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJjaHVua1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2h1bmtNb2RlID0gRWxlbWVudE1vZGUuQ2h1bms7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJ2ZXJ0ZXhcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNodW5rTW9kZSA9IEVsZW1lbnRNb2RlLlZlcnRleDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInNoXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaHVua01vZGUgPSBFbGVtZW50TW9kZS5TSDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInNhZmVfb3JiaXRfY2FtZXJhX2VsZXZhdGlvbl9taW5fbWF4X3JhZGlhbnNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNodW5rTW9kZSA9IEVsZW1lbnRNb2RlLkZsb2F0X1R1cGxlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwic2FmZV9vcmJpdF9jYW1lcmFfcmFkaXVzX21pblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2h1bmtNb2RlID0gRWxlbWVudE1vZGUuRmxvYXQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJ1cF9heGlzXCIgfHwgdHlwZSA9PSBcImNoaXJhbGl0eVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2h1bmtNb2RlID0gRWxlbWVudE1vZGUuVWNoYXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJvd1ZlcnRleExlbmd0aCA9IHJvd1ZlcnRleE9mZnNldDtcclxuICAgICAgICBjb25zdCByb3dDaHVua0xlbmd0aCA9IHJvd0NodW5rT2Zmc2V0O1xyXG5cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICByZXR1cm4gKEdhdXNzaWFuU3BsYXR0aW5nTWVzaC5Db252ZXJ0UExZV2l0aFNIVG9TcGxhdEFzeW5jKGRhdGEpIGFzIGFueSkudGhlbihhc3luYyAoc3BsYXRzRGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGRhdGEsIGhlYWRlckVuZEluZGV4ICsgaGVhZGVyRW5kLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSByb3dDaHVua0xlbmd0aCAqIGNodW5rQ291bnQgKyByb3dWZXJ0ZXhMZW5ndGggKiB2ZXJ0ZXhDb3VudDtcclxuICAgICAgICAgICAgLy8gZmFjZXNcclxuICAgICAgICAgICAgY29uc3QgZmFjZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgICAgIGlmIChmYWNlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFjZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWNlVmVydGV4Q291bnQgPSBkYXRhVmlldy5nZXRVaW50OChvZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWNlVmVydGV4Q291bnQgIT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gb25seSBzdXBwb3J0IHRyaWFuZ2xlc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmYWNlVmVydGV4Q291bnQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IGRhdGFWaWV3LmdldFVpbnQzMihvZmZzZXQgKyAoMiAtIGopICogNCwgdHJ1ZSk7IC8vIGNoYW5nZSBmYWNlIHdpbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZXMucHVzaCh2ZXJ0ZXhJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSAxMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZWFybHkgZXhpdCBmb3IgY2h1bmtlZC9xdWFudGl6ZWQgcGx5XHJcbiAgICAgICAgICAgIGlmIChjaHVua0NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgbW9kZTogTW9kZS5TcGxhdCwgZGF0YTogc3BsYXRzRGF0YS5idWZmZXIsIHNoOiBzcGxhdHNEYXRhLnNoLCBmYWNlczogZmFjZXMsIGhhc1ZlcnRleENvbG9yczogZmFsc2UsIGNvbXByZXNzZWQ6IHRydWUsIHJhd1NwbGF0OiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvdW50IGF2YWlsYWJsZSBwcm9wZXJ0aWVzLiBpZiBhbGwgbmVjZXNzYXJ5IGFyZSBwcmVzZW50IHRoZW4gaXQncyBhIHNwbGF0LiBPdGhlcndpc2UsIGl0J3MgYSBwb2ludCBjbG91ZFxyXG4gICAgICAgICAgICAvLyBpZiBmYWNlcyBhcmUgZm91bmQsIHRoZW4gaXQncyBhIHN0YW5kYXJkIG1lc2hcclxuICAgICAgICAgICAgbGV0IHByb3BlcnR5Q291bnQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlDb2xvckNvdW50ID0gMDtcclxuICAgICAgICAgICAgY29uc3Qgc3BsYXRQcm9wZXJ0aWVzID0gW1wieFwiLCBcInlcIiwgXCJ6XCIsIFwic2NhbGVfMFwiLCBcInNjYWxlXzFcIiwgXCJzY2FsZV8yXCIsIFwib3BhY2l0eVwiLCBcInJvdF8wXCIsIFwicm90XzFcIiwgXCJyb3RfMlwiLCBcInJvdF8zXCJdO1xyXG4gICAgICAgICAgICBjb25zdCBzcGxhdENvbG9yUHJvcGVydGllcyA9IFtcInJlZFwiLCBcImdyZWVuXCIsIFwiYmx1ZVwiLCBcImZfZGNfMFwiLCBcImZfZGNfMVwiLCBcImZfZGNfMlwiXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHlJbmRleCA9IDA7IHByb3BlcnR5SW5kZXggPCB2ZXJ0ZXhQcm9wZXJ0aWVzLmxlbmd0aDsgcHJvcGVydHlJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHZlcnRleFByb3BlcnRpZXNbcHJvcGVydHlJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsYXRQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5Lm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNwbGF0Q29sb3JQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5Lm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlDb2xvckNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaGFzTWFuZGF0b3J5UHJvcGVydGllcyA9IHByb3BlcnR5Q291bnQgPT0gc3BsYXRQcm9wZXJ0aWVzLmxlbmd0aCAmJiBwcm9wZXJ0eUNvbG9yQ291bnQgPT0gMztcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudE1vZGUgPSBmYWNlQ291bnQgPyBNb2RlLk1lc2ggOiBoYXNNYW5kYXRvcnlQcm9wZXJ0aWVzID8gTW9kZS5TcGxhdCA6IE1vZGUuUG9pbnRDbG91ZDtcclxuICAgICAgICAgICAgLy8gcGFyc2VkIHJlYWR5IHJlYWR5IHRvIGJlIHVzZWQgYXMgYSBzcGxhdFxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLm1ldGFEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IGN1cnJlbnRNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHNwbGF0c0RhdGEuYnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoOiBzcGxhdHNEYXRhLnNoLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhY2VzOiBmYWNlcyxcclxuICAgICAgICAgICAgICAgICAgICBoYXNWZXJ0ZXhDb2xvcnM6ICEhcHJvcGVydHlDb2xvckNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXByZXNzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhd1NwbGF0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQWRkIHRoaXMgbG9hZGVyIGludG8gdGhlIHJlZ2lzdGVyIHBsdWdpblxyXG5SZWdpc3RlclNjZW5lTG9hZGVyUGx1Z2luKG5ldyBTUExBVEZpbGVMb2FkZXIoKSk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jICovXHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguc2NhbGFyXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNQTEFUTG9hZGluZ09wdGlvbnMgfSBmcm9tIFwiLi9zcGxhdExvYWRpbmdPcHRpb25zXCI7XHJcbmltcG9ydCB7IE1vZGUgfSBmcm9tIFwiLi9zcGxhdERlZnNcIjtcclxuaW1wb3J0IHR5cGUgeyBJUGFyc2VkU3BsYXQgfSBmcm9tIFwiLi9zcGxhdERlZnNcIjtcclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgU1BaIGRhdGEgYW5kIHJldHVybnMgYSBwcm9taXNlIHJlc29sdmluZyB0byBhbiBJUGFyc2VkUExZIG9iamVjdC5cclxuICogQHBhcmFtIGRhdGEgVGhlIEFycmF5QnVmZmVyIGNvbnRhaW5pbmcgU1BaIGRhdGEuXHJcbiAqIEBwYXJhbSBzY2VuZSBUaGUgQmFieWxvbi5qcyBzY2VuZS5cclxuICogQHBhcmFtIGxvYWRpbmdPcHRpb25zIE9wdGlvbnMgZm9yIGxvYWRpbmcgR2F1c3NpYW4gU3BsYXR0aW5nIGZpbGVzLlxyXG4gKiBAcmV0dXJucyBBIHByb21pc2UgcmVzb2x2aW5nIHRvIHRoZSBwYXJzZWQgU1BaIGRhdGEuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUGFyc2VTcHooZGF0YTogQXJyYXlCdWZmZXIsIHNjZW5lOiBTY2VuZSwgbG9hZGluZ09wdGlvbnM6IFNQTEFUTG9hZGluZ09wdGlvbnMpOiBQcm9taXNlPElQYXJzZWRTcGxhdD4ge1xyXG4gICAgY29uc3QgdWJ1ZiA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xyXG4gICAgY29uc3QgdWJ1ZnUzMiA9IG5ldyBVaW50MzJBcnJheShkYXRhLnNsaWNlKDAsIDEyKSk7IC8vIE9ubHkgbmVlZCB1YnVmdTMyWzBdIHRvIFsyXVxyXG4gICAgLy8gZGVidWcgaW5mb3NcclxuICAgIGNvbnN0IHNwbGF0Q291bnQgPSB1YnVmdTMyWzJdO1xyXG5cclxuICAgIGNvbnN0IHNoRGVncmVlID0gdWJ1ZlsxMl07XHJcbiAgICBjb25zdCBmcmFjdGlvbmFsQml0cyA9IHVidWZbMTNdO1xyXG4gICAgY29uc3QgZmxhZ3MgPSB1YnVmWzE0XTtcclxuICAgIGNvbnN0IHJlc2VydmVkID0gdWJ1ZlsxNV07XHJcbiAgICBjb25zdCB2ZXJzaW9uID0gdWJ1ZnUzMlsxXTtcclxuXHJcbiAgICAvLyBjaGVjayBtYWdpYyBhbmQgdmVyc2lvblxyXG4gICAgaWYgKHJlc2VydmVkIHx8IHVidWZ1MzJbMF0gIT0gMHg1MDUzNDc0ZSB8fCAodmVyc2lvbiAhPSAyICYmIHZlcnNpb24gIT0gMykpIHtcclxuICAgICAgICAvLyByZXNlcnZlZCBtdXN0IGJlIDBcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IG1vZGU6IE1vZGUuUmVqZWN0LCBkYXRhOiBidWZmZXIsIGhhc1ZlcnRleENvbG9yczogZmFsc2UgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgcm93T3V0cHV0TGVuZ3RoID0gMyAqIDQgKyAzICogNCArIDQgKyA0OyAvLyAzMlxyXG4gICAgY29uc3QgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHJvd091dHB1dExlbmd0aCAqIHNwbGF0Q291bnQpO1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uU2NhbGUgPSAxLjAgLyAoMSA8PCBmcmFjdGlvbmFsQml0cyk7XHJcblxyXG4gICAgY29uc3QgaW50MzJWaWV3ID0gbmV3IEludDMyQXJyYXkoMSk7XHJcbiAgICBjb25zdCB1aW50OFZpZXcgPSBuZXcgVWludDhBcnJheShpbnQzMlZpZXcuYnVmZmVyKTtcclxuICAgIGNvbnN0IHJlYWQyNGJDb21wb25lbnQgPSBmdW5jdGlvbiAodTg6IFVpbnQ4QXJyYXksIG9mZnNldDogbnVtYmVyKSB7XHJcbiAgICAgICAgdWludDhWaWV3WzBdID0gdThbb2Zmc2V0ICsgMF07XHJcbiAgICAgICAgdWludDhWaWV3WzFdID0gdThbb2Zmc2V0ICsgMV07XHJcbiAgICAgICAgdWludDhWaWV3WzJdID0gdThbb2Zmc2V0ICsgMl07XHJcbiAgICAgICAgdWludDhWaWV3WzNdID0gdThbb2Zmc2V0ICsgMl0gJiAweDgwID8gMHhmZiA6IDB4MDA7XHJcbiAgICAgICAgcmV0dXJuIGludDMyVmlld1swXSAqIHBvc2l0aW9uU2NhbGU7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBieXRlT2Zmc2V0ID0gMTY7XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlcik7XHJcbiAgICBjb25zdCBzY2FsZSA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKTtcclxuICAgIGNvbnN0IHJnYmEgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoYnVmZmVyKTtcclxuICAgIGNvbnN0IHJvdCA9IG5ldyBVaW50OENsYW1wZWRBcnJheShidWZmZXIpO1xyXG5cclxuICAgIGxldCBjb29yZGluYXRlU2lnbiA9IDE7XHJcbiAgICBsZXQgcXVhdGVybmlvbk9mZnNldCA9IDA7XHJcbiAgICBpZiAoIWxvYWRpbmdPcHRpb25zLmZsaXBZKSB7XHJcbiAgICAgICAgY29vcmRpbmF0ZVNpZ24gPSAtMTtcclxuICAgICAgICBxdWF0ZXJuaW9uT2Zmc2V0ID0gMjU1O1xyXG4gICAgfVxyXG4gICAgLy8gcG9zaXRpb25zXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGF0Q291bnQ7IGkrKykge1xyXG4gICAgICAgIHBvc2l0aW9uW2kgKiA4ICsgMF0gPSByZWFkMjRiQ29tcG9uZW50KHVidWYsIGJ5dGVPZmZzZXQgKyAwKTtcclxuICAgICAgICBwb3NpdGlvbltpICogOCArIDFdID0gY29vcmRpbmF0ZVNpZ24gKiByZWFkMjRiQ29tcG9uZW50KHVidWYsIGJ5dGVPZmZzZXQgKyAzKTtcclxuICAgICAgICBwb3NpdGlvbltpICogOCArIDJdID0gY29vcmRpbmF0ZVNpZ24gKiByZWFkMjRiQ29tcG9uZW50KHVidWYsIGJ5dGVPZmZzZXQgKyA2KTtcclxuICAgICAgICBieXRlT2Zmc2V0ICs9IDk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29sb3JzXHJcbiAgICBjb25zdCBzaEMwID0gMC4yODI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGF0Q291bnQ7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGNvbXBvbmVudCA9IDA7IGNvbXBvbmVudCA8IDM7IGNvbXBvbmVudCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVWYWx1ZSA9IHVidWZbYnl0ZU9mZnNldCArIHNwbGF0Q291bnQgKyBpICogMyArIGNvbXBvbmVudF07XHJcbiAgICAgICAgICAgIC8vIDAuMTUgaXMgaGFyZCBjb2RlZCB2YWx1ZSBmcm9tIHNwelxyXG4gICAgICAgICAgICAvLyBTY2FsZSBmYWN0b3IgZm9yIERDIGNvbG9yIGNvbXBvbmVudHMuIFRvIGNvbnZlcnQgdG8gUkdCLCB3ZSBzaG91bGQgbXVsdGlwbHkgYnkgMC4yODIsIGJ1dCBpdCBjYW5cclxuICAgICAgICAgICAgLy8gYmUgdXNlZnVsIHRvIHJlcHJlc2VudCBiYXNlIGNvbG9ycyB0aGF0IGFyZSBvdXQgb2YgcmFuZ2UgaWYgdGhlIGhpZ2hlciBzcGhlcmljYWwgaGFybW9uaWNzIGJhbmRzXHJcbiAgICAgICAgICAgIC8vIGJyaW5nIHRoZW0gYmFjayBpbnRvIHJhbmdlIHNvIHdlIG11bHRpcGx5IGJ5IGEgc21hbGxlciB2YWx1ZS5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAoYnl0ZVZhbHVlIC0gMTI3LjUpIC8gKDAuMTUgKiAyNTUpO1xyXG4gICAgICAgICAgICByZ2JhW2kgKiAzMiArIDI0ICsgY29tcG9uZW50XSA9IFNjYWxhci5DbGFtcCgoMC41ICsgc2hDMCAqIHZhbHVlKSAqIDI1NSwgMCwgMjU1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJnYmFbaSAqIDMyICsgMjQgKyAzXSA9IHVidWZbYnl0ZU9mZnNldCArIGldO1xyXG4gICAgfVxyXG4gICAgYnl0ZU9mZnNldCArPSBzcGxhdENvdW50ICogNDtcclxuXHJcbiAgICAvLyBzY2FsZXNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsYXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgc2NhbGVbaSAqIDggKyAzICsgMF0gPSBNYXRoLmV4cCh1YnVmW2J5dGVPZmZzZXQgKyAwXSAvIDE2LjAgLSAxMC4wKTtcclxuICAgICAgICBzY2FsZVtpICogOCArIDMgKyAxXSA9IE1hdGguZXhwKHVidWZbYnl0ZU9mZnNldCArIDFdIC8gMTYuMCAtIDEwLjApO1xyXG4gICAgICAgIHNjYWxlW2kgKiA4ICsgMyArIDJdID0gTWF0aC5leHAodWJ1ZltieXRlT2Zmc2V0ICsgMl0gLyAxNi4wIC0gMTAuMCk7XHJcbiAgICAgICAgYnl0ZU9mZnNldCArPSAzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnZlcnQgcXVhdGVybmlvblxyXG4gICAgaWYgKHZlcnNpb24gPj0gMykge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgIEluIHZlcnNpb24gMywgcm90YXRpb25zIGFyZSByZXByZXNlbnRlZCBhcyB0aGUgc21hbGxlc3QgdGhyZWUgY29tcG9uZW50cyBvZiB0aGUgbm9ybWFsaXplZCByb3RhdGlvbiBxdWF0ZXJuaW9uLCBmb3Igb3B0aW1hbCByb3RhdGlvbiBhY2N1cmFjeS5cclxuICAgICAgICAgICAgVGhlIGxhcmdlc3QgY29tcG9uZW50IGNhbiBiZSBkZXJpdmVkIGZyb20gdGhlIG90aGVycyBhbmQgaXMgbm90IHN0b3JlZC4gSXRzIGluZGV4IGlzIHN0b3JlZCBvbiAyIGJpdHNcclxuICAgICAgICAgICAgYW5kIGVhY2ggb2YgdGhlIHNtYWxsZXN0IHRocmVlIGNvbXBvbmVudHMgaXMgZW5jb2RlZCBhcyBhIDEwLWJpdCBzaWduZWQgaW50ZWdlci5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHNxcnQxMiA9IE1hdGguU1FSVDFfMjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGF0Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCByID0gW3VidWZbYnl0ZU9mZnNldCArIDBdLCB1YnVmW2J5dGVPZmZzZXQgKyAxXSwgdWJ1ZltieXRlT2Zmc2V0ICsgMl0sIHVidWZbYnl0ZU9mZnNldCArIDNdXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXAgPSByWzBdICsgKHJbMV0gPDwgOCkgKyAoclsyXSA8PCAxNikgKyAoclszXSA8PCAyNCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjbWFzayA9ICgxIDw8IDkpIC0gMTtcclxuICAgICAgICAgICAgY29uc3Qgcm90YXRpb24gPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgaUxhcmdlc3QgPSBjb21wID4+PiAzMDtcclxuICAgICAgICAgICAgbGV0IHJlbWFpbmluZyA9IGNvbXA7XHJcbiAgICAgICAgICAgIGxldCBzdW1TcXVhcmVzID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAzOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgIT09IGlMYXJnZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFnID0gcmVtYWluaW5nICYgY21hc2s7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmVnYml0ID0gKHJlbWFpbmluZyA+Pj4gOSkgJiAweDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nID0gcmVtYWluaW5nID4+PiAxMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcm90YXRpb25baV0gPSBzcXJ0MTIgKiAobWFnIC8gY21hc2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWdiaXQgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRpb25baV0gPSAtcm90YXRpb25baV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBhY2N1bXVsYXRlIHRoZSBzdW0gb2Ygc3F1YXJlc1xyXG4gICAgICAgICAgICAgICAgICAgIHN1bVNxdWFyZXMgKz0gcm90YXRpb25baV0gKiByb3RhdGlvbltpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gMSAtIHN1bVNxdWFyZXM7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uW2lMYXJnZXN0XSA9IE1hdGguc3FydChNYXRoLm1heChzcXVhcmUsIDApKTtcclxuXHJcbiAgICAgICAgICAgIHJvdGF0aW9uWzFdICo9IGNvb3JkaW5hdGVTaWduO1xyXG4gICAgICAgICAgICByb3RhdGlvblsyXSAqPSBjb29yZGluYXRlU2lnbjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNodWZmbGUgPSBbMywgMCwgMSwgMl07IC8vIHNodWZmbGUgdG8gbWF0Y2ggdGhlIG9yZGVyIG9mIHRoZSBxdWF0ZXJuaW9uIGNvbXBvbmVudHMgaW4gdGhlIHNwbGF0IGZpbGVcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHJvdFtpICogMzIgKyAyOCArIGpdID0gTWF0aC5yb3VuZCgxMjcuNSArIHJvdGF0aW9uW3NodWZmbGVbal1dICogMTI3LjUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBieXRlT2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICBJbiB2ZXJzaW9uIDIsIHJvdGF0aW9ucyBhcmUgcmVwcmVzZW50ZWQgYXMgdGhlIGAoeCwgeSwgeilgIGNvbXBvbmVudHMgb2YgdGhlIG5vcm1hbGl6ZWQgcm90YXRpb24gcXVhdGVybmlvbi4gVGhlXHJcbiAgICAgICAgICAgIGB3YCBjb21wb25lbnQgY2FuIGJlIGRlcml2ZWQgZnJvbSB0aGUgb3RoZXJzIGFuZCBpcyBub3Qgc3RvcmVkLiBFYWNoIGNvbXBvbmVudCBpcyBlbmNvZGVkIGFzIGFuXHJcbiAgICAgICAgICAgIDgtYml0IHNpZ25lZCBpbnRlZ2VyLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IHVidWZbYnl0ZU9mZnNldCArIDBdO1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gdWJ1ZltieXRlT2Zmc2V0ICsgMV0gKiBjb29yZGluYXRlU2lnbiArIHF1YXRlcm5pb25PZmZzZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHogPSB1YnVmW2J5dGVPZmZzZXQgKyAyXSAqIGNvb3JkaW5hdGVTaWduICsgcXVhdGVybmlvbk9mZnNldDtcclxuICAgICAgICAgICAgY29uc3QgbnggPSB4IC8gMTI3LjUgLSAxO1xyXG4gICAgICAgICAgICBjb25zdCBueSA9IHkgLyAxMjcuNSAtIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IG56ID0geiAvIDEyNy41IC0gMTtcclxuICAgICAgICAgICAgcm90W2kgKiAzMiArIDI4ICsgMV0gPSB4O1xyXG4gICAgICAgICAgICByb3RbaSAqIDMyICsgMjggKyAyXSA9IHk7XHJcbiAgICAgICAgICAgIHJvdFtpICogMzIgKyAyOCArIDNdID0gejtcclxuICAgICAgICAgICAgY29uc3QgdiA9IDEgLSAobnggKiBueCArIG55ICogbnkgKyBueiAqIG56KTtcclxuICAgICAgICAgICAgcm90W2kgKiAzMiArIDI4ICsgMF0gPSAxMjcuNSArIE1hdGguc3FydCh2IDwgMCA/IDAgOiB2KSAqIDEyNy41O1xyXG5cclxuICAgICAgICAgICAgYnl0ZU9mZnNldCArPSAzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1NIXHJcbiAgICBpZiAoc2hEZWdyZWUpIHtcclxuICAgICAgICAvLyBzaFZlY3RvckNvdW50IGlzIDogMyBmb3IgZGltID0gMSwgOCBmb3IgZGltID0gMiBhbmQgMTUgZm9yIGRpbSA9IDNcclxuICAgICAgICAvLyBudW1iZXIgb2YgdmVjMyB2ZWN0b3IgbmVlZGVkIHBlciBzcGxhdFxyXG4gICAgICAgIGNvbnN0IHNoVmVjdG9yQ291bnQgPSAoc2hEZWdyZWUgKyAxKSAqIChzaERlZ3JlZSArIDEpIC0gMTsgLy8gbWludXMgMSBiZWNhdXNlIHNoMCBpcyBjb2xvclxyXG4gICAgICAgIC8vIG51bWJlciBvZiBjb21wb25lbnQgdmFsdWVzIDogMyBwZXIgdmVjdG9yMyAoNDUpXHJcbiAgICAgICAgY29uc3Qgc2hDb21wb25lbnRDb3VudCA9IHNoVmVjdG9yQ291bnQgKiAzO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0dXJlQ291bnQgPSBNYXRoLmNlaWwoc2hDb21wb25lbnRDb3VudCAvIDE2KTsgLy8gNCBjb21wb25lbnRzIGNhbiBiZSBzdG9yZWQgcGVyIHRleHR1cmUsIDQgc2ggcGVyIGNvbXBvbmVudFxyXG4gICAgICAgIGxldCBzaEluZGV4UmVhZCA9IGJ5dGVPZmZzZXQ7XHJcblxyXG4gICAgICAgIC8vIHNoIGlzIGFuIGFycmF5IG9mIHVpbnQ4YXJyYXkgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIHNoIHRleHR1cmVzXHJcbiAgICAgICAgY29uc3Qgc2g6IFVpbnQ4QXJyYXlbXSA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBlbmdpbmUgPSBzY2VuZS5nZXRFbmdpbmUoKTtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IGVuZ2luZS5nZXRDYXBzKCkubWF4VGV4dHVyZVNpemU7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5jZWlsKHNwbGF0Q291bnQgLyB3aWR0aCk7XHJcbiAgICAgICAgLy8gY3JlYXRlIGFycmF5IGZvciB0aGUgbnVtYmVyIG9mIHRleHR1cmVzIG5lZWRlZC5cclxuICAgICAgICBmb3IgKGxldCB0ZXh0dXJlSW5kZXggPSAwOyB0ZXh0dXJlSW5kZXggPCB0ZXh0dXJlQ291bnQ7IHRleHR1cmVJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVWludDhBcnJheShoZWlnaHQgKiB3aWR0aCAqIDQgKiA0KTsgLy8gNCBjb21wb25lbnRzIHBlciB0ZXh0dXJlLCA0IHNoIHBlciBjb21wb25lbnRcclxuICAgICAgICAgICAgc2gucHVzaCh0ZXh0dXJlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsYXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHNoSW5kZXhXcml0ZSA9IDA7IHNoSW5kZXhXcml0ZSA8IHNoQ29tcG9uZW50Q291bnQ7IHNoSW5kZXhXcml0ZSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaFZhbHVlID0gdWJ1ZltzaEluZGV4UmVhZCsrXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlSW5kZXggPSBNYXRoLmZsb29yKHNoSW5kZXhXcml0ZSAvIDE2KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoQXJyYXkgPSBzaFt0ZXh0dXJlSW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVJbmRleEluVGV4dHVyZSA9IHNoSW5kZXhXcml0ZSAlIDE2OyAvLyBbMC4uMTVdXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRQZXJTcGxhdCA9IGkgKiAxNjsgLy8gMTYgc2ggdmFsdWVzIHBlciB0ZXh0dXJlIHBlciBzcGxhdC5cclxuICAgICAgICAgICAgICAgIHNoQXJyYXlbYnl0ZUluZGV4SW5UZXh0dXJlICsgb2Zmc2V0UGVyU3BsYXRdID0gc2hWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyBtb2RlOiBNb2RlLlNwbGF0LCBkYXRhOiBidWZmZXIsIGhhc1ZlcnRleENvbG9yczogZmFsc2UsIHNoOiBzaCwgdHJhaW5lZFdpdGhBbnRpYWxpYXNpbmc6ICEhZmxhZ3MgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh7IG1vZGU6IE1vZGUuU3BsYXQsIGRhdGE6IGJ1ZmZlciwgaGFzVmVydGV4Q29sb3JzOiBmYWxzZSwgdHJhaW5lZFdpdGhBbnRpYWxpYXNpbmc6ICEhZmxhZ3MgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=