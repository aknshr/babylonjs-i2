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
                    resolve(babylonMeshesArray);
                });
            });
        });
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
        let ElementMode;
        (function (ElementMode) {
            ElementMode[ElementMode["Vertex"] = 0] = "Vertex";
            ElementMode[ElementMode["Chunk"] = 1] = "Chunk";
            ElementMode[ElementMode["SH"] = 2] = "SH";
        })(ElementMode || (ElementMode = {}));
        let chunkMode = 1 /* ElementMode.Chunk */;
        const vertexProperties = [];
        const chunkProperties = [];
        const filtered = header.slice(0, headerEndIndex).split("\n");
        for (const prop of filtered) {
            if (prop.startsWith("property ")) {
                const [, type, name] = prop.split(" ");
                if (chunkMode == 1 /* ElementMode.Chunk */) {
                    chunkProperties.push({ name, type, offset: rowChunkOffset });
                    rowChunkOffset += offsets[type];
                }
                else if (chunkMode == 0 /* ElementMode.Vertex */) {
                    vertexProperties.push({ name, type, offset: rowVertexOffset });
                    rowVertexOffset += offsets[type];
                }
                else if (chunkMode == 2 /* ElementMode.SH */) {
                    vertexProperties.push({ name, type, offset: rowVertexOffset });
                }
                if (!offsets[type]) {
                    core_Misc_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Warn(`Unsupported property type: ${type}.`);
                }
            }
            else if (prop.startsWith("element ")) {
                const [, type] = prop.split(" ");
                if (type == "chunk") {
                    chunkMode = 1 /* ElementMode.Chunk */;
                }
                else if (type == "vertex") {
                    chunkMode = 0 /* ElementMode.Vertex */;
                }
                else if (type == "sh") {
                    chunkMode = 2 /* ElementMode.SH */;
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
                resolve({ mode: currentMode, data: splatsData.buffer, sh: splatsData.sh, faces: faces, hasVertexColors: !!propertyColorCount, compressed: false, rawSplat: false });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X1NQTEFUX3NwbGF0RmlsZUxvYWRlcl9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFJQTs7QUFFQTtBQUNBO0FBc0ZBOzs7Ozs7OztBQVFBO0FBQ0E7QUE5RkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFxQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFzREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBbEZBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFTQTs7O0FBR0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMza0NBO0FBc0ZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVaQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFFQTtBQWVBOzs7O0FBSUE7QUFDQTtBQWVBOzs7QUFHQTtBQUNBO0FBbEJBOztBQUVBO0FBQ0E7QUFFQTtBQUdBOzs7QUFHQTtBQUNBO0FBT0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXZjQTtBQUNBO0FBQ0E7QUFDQTtBQXVjQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdnQkE7QUFDQTtBQU1BOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1BhcnRpY2xlcy9jbG91ZFBvaW50LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvUGFydGljbGVzL3BvaW50c0Nsb3VkU3lzdGVtLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvU1BMQVQvc29nLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvU1BMQVQvc3BsYXRGaWxlTG9hZGVyLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvU1BMQVQvc3B6LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRyaXggfSBmcm9tIFwiLi4vTWF0aHMvbWF0aFwiO1xyXG5pbXBvcnQgeyBDb2xvcjQsIFZlY3RvcjIsIFZlY3RvcjMsIFRtcFZlY3RvcnMsIFF1YXRlcm5pb24gfSBmcm9tIFwiLi4vTWF0aHMvbWF0aFwiO1xyXG5pbXBvcnQgdHlwZSB7IE1lc2ggfSBmcm9tIFwiLi4vTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBCb3VuZGluZ0luZm8gfSBmcm9tIFwiLi4vQ3VsbGluZy9ib3VuZGluZ0luZm9cIjtcclxuaW1wb3J0IHR5cGUgeyBQb2ludHNDbG91ZFN5c3RlbSB9IGZyb20gXCIuL3BvaW50c0Nsb3VkU3lzdGVtXCI7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIG9uZSBwYXJ0aWNsZSBvZiBhIHBvaW50cyBjbG91ZCBzeXN0ZW0uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2xvdWRQb2ludCB7XHJcbiAgICAvKipcclxuICAgICAqIHBhcnRpY2xlIGdsb2JhbCBpbmRleFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaWR4OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29sb3Igb2YgdGhlIHBhcnRpY2xlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb2xvcjogTnVsbGFibGU8Q29sb3I0PiA9IG5ldyBDb2xvcjQoMS4wLCAxLjAsIDEuMCwgMS4wKTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHdvcmxkIHNwYWNlIHBvc2l0aW9uIG9mIHRoZSBwYXJ0aWNsZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB3b3JsZCBzcGFjZSByb3RhdGlvbiBvZiB0aGUgcGFydGljbGUuIChOb3QgdXNlIGlmIHJvdGF0aW9uUXVhdGVybmlvbiBpcyBzZXQpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByb3RhdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgd29ybGQgc3BhY2Ugcm90YXRpb24gcXVhdGVybmlvbiBvZiB0aGUgcGFydGljbGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByb3RhdGlvblF1YXRlcm5pb246IE51bGxhYmxlPFF1YXRlcm5pb24+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdXYgb2YgdGhlIHBhcnRpY2xlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXY6IE51bGxhYmxlPFZlY3RvcjI+ID0gbmV3IFZlY3RvcjIoMC4wLCAwLjApO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3VycmVudCBzcGVlZCBvZiB0aGUgcGFydGljbGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2ZWxvY2l0eTogVmVjdG9yMyA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcGl2b3QgcG9pbnQgaW4gdGhlIHBhcnRpY2xlIGxvY2FsIHNwYWNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGl2b3Q6IFZlY3RvcjMgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgIC8qKlxyXG4gICAgICogTXVzdCB0aGUgcGFydGljbGUgYmUgdHJhbnNsYXRlZCBmcm9tIGl0cyBwaXZvdCBwb2ludCBpbiBpdHMgbG9jYWwgc3BhY2UgP1xyXG4gICAgICogSW4gdGhpcyBjYXNlLCB0aGUgcGl2b3QgcG9pbnQgaXMgc2V0IGF0IHRoZSBvcmlnaW4gb2YgdGhlIHBhcnRpY2xlIGxvY2FsIHNwYWNlIGFuZCB0aGUgcGFydGljbGUgaXMgdHJhbnNsYXRlZC5cclxuICAgICAqIERlZmF1bHQgOiBmYWxzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdHJhbnNsYXRlRnJvbVBpdm90OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIEluZGV4IG9mIHRoaXMgcGFydGljbGUgaW4gdGhlIGdsb2JhbCBcInBvc2l0aW9uc1wiIGFycmF5IChJbnRlcm5hbCB1c2UpXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9wb3M6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbCBJbmRleCBvZiB0aGlzIHBhcnRpY2xlIGluIHRoZSBnbG9iYWwgXCJpbmRpY2VzXCIgYXJyYXkgKEludGVybmFsIHVzZSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9pbmQ6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIEdyb3VwIHRoaXMgcGFydGljbGUgYmVsb25ncyB0b1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2dyb3VwOiBQb2ludHNHcm91cDtcclxuICAgIC8qKlxyXG4gICAgICogR3JvdXAgaWQgb2YgdGhpcyBwYXJ0aWNsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ3JvdXBJZDogbnVtYmVyID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogSW5kZXggb2YgdGhlIHBhcnRpY2xlIGluIGl0cyBncm91cCBpZCAoSW50ZXJuYWwgdXNlKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaWR4SW5Hcm91cDogbnVtYmVyID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsIFBhcnRpY2xlIEJvdW5kaW5nSW5mbyBvYmplY3QgKEludGVybmFsIHVzZSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9ib3VuZGluZ0luZm86IEJvdW5kaW5nSW5mbztcclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsIFJlZmVyZW5jZSB0byB0aGUgUENTIHRoYXQgdGhlIHBhcnRpY2xlIGJlbG9uZ3MgdG8gKEludGVybmFsIHVzZSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9wY3M6IFBvaW50c0Nsb3VkU3lzdGVtO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWwgU3RpbGwgc2V0IGFzIGludmlzaWJsZSBpbiBvcmRlciB0byBza2lwIHVzZWxlc3MgY29tcHV0YXRpb25zIChJbnRlcm5hbCB1c2UpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfc3RpbGxJbnZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsIExhc3QgY29tcHV0ZWQgcGFydGljbGUgcm90YXRpb24gbWF0cml4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfcm90YXRpb25NYXRyaXg6IG51bWJlcltdID0gWzEuMCwgMC4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsIDAuMCwgMC4wLCAxLjBdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJlbnQgcGFydGljbGUgSWQsIGlmIGFueS5cclxuICAgICAqIERlZmF1bHQgbnVsbC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhcmVudElkOiBOdWxsYWJsZTxudW1iZXI+ID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsIEludGVybmFsIGdsb2JhbCBwb3NpdGlvbiBpbiB0aGUgUENTLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2dsb2JhbFBvc2l0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy5aZXJvKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgUG9pbnQgQ2xvdWQgb2JqZWN0LlxyXG4gICAgICogRG9uJ3QgY3JlYXRlIHBhcnRpY2xlcyBtYW51YWxseSwgdXNlIGluc3RlYWQgdGhlIFBDUyBpbnRlcm5hbCB0b29scyBsaWtlIF9hZGRQYXJ0aWNsZSgpXHJcbiAgICAgKiBAcGFyYW0gcGFydGljbGVJbmRleCAoaW50ZWdlcikgaXMgdGhlIHBhcnRpY2xlIGluZGV4IGluIHRoZSBQQ1MgcG9vbC4gSXQncyBhbHNvIHRoZSBwYXJ0aWNsZSBpZGVudGlmaWVyLlxyXG4gICAgICogQHBhcmFtIGdyb3VwIChQb2ludHNHcm91cCkgaXMgdGhlIGdyb3VwIHRoZSBwYXJ0aWNsZSBiZWxvbmdzIHRvXHJcbiAgICAgKiBAcGFyYW0gZ3JvdXBJZCAoaW50ZWdlcikgaXMgdGhlIGdyb3VwIGlkZW50aWZpZXIgaW4gdGhlIFBDUy5cclxuICAgICAqIEBwYXJhbSBpZHhJbkdyb3VwIChpbnRlZ2VyKSBpcyB0aGUgaW5kZXggb2YgdGhlIHBhcnRpY2xlIGluIHRoZSBjdXJyZW50IHBvaW50IGdyb3VwIChleDogdGhlIDEwdGggcG9pbnQgb2YgYWRkUG9pbnRzKDMwKSlcclxuICAgICAqIEBwYXJhbSBwY3MgZGVmaW5lcyB0aGUgUENTIGl0IGlzIGFzc29jaWF0ZWQgdG9cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocGFydGljbGVJbmRleDogbnVtYmVyLCBncm91cDogUG9pbnRzR3JvdXAsIGdyb3VwSWQ6IG51bWJlciwgaWR4SW5Hcm91cDogbnVtYmVyLCBwY3M6IFBvaW50c0Nsb3VkU3lzdGVtKSB7XHJcbiAgICAgICAgdGhpcy5pZHggPSBwYXJ0aWNsZUluZGV4O1xyXG4gICAgICAgIHRoaXMuX2dyb3VwID0gZ3JvdXA7XHJcbiAgICAgICAgdGhpcy5ncm91cElkID0gZ3JvdXBJZDtcclxuICAgICAgICB0aGlzLmlkeEluR3JvdXAgPSBpZHhJbkdyb3VwO1xyXG4gICAgICAgIHRoaXMuX3BjcyA9IHBjcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBwb2ludCBzaXplXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc2l6ZSgpOiBWZWN0b3IzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHBvaW50IHNpemVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBzaXplKHNjYWxlOiBWZWN0b3IzKSB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMZWdhY3kgc3VwcG9ydCwgY2hhbmdlZCBxdWF0ZXJuaW9uIHRvIHJvdGF0aW9uUXVhdGVybmlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHF1YXRlcm5pb24oKTogTnVsbGFibGU8UXVhdGVybmlvbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExlZ2FjeSBzdXBwb3J0LCBjaGFuZ2VkIHF1YXRlcm5pb24gdG8gcm90YXRpb25RdWF0ZXJuaW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgcXVhdGVybmlvbihxOiBOdWxsYWJsZTxRdWF0ZXJuaW9uPikge1xyXG4gICAgICAgIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uID0gcTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBib29sZWFuLiBUcnVlIGlmIHRoZSBwYXJ0aWNsZSBpbnRlcnNlY3RzIGEgbWVzaCwgZWxzZSBmYWxzZVxyXG4gICAgICogVGhlIGludGVyc2VjdGlvbiBpcyBjb21wdXRlZCBvbiB0aGUgcGFydGljbGUgcG9zaXRpb24gYW5kIEF4aXMgQWxpZ25lZCBCb3VuZGluZyBCb3ggKEFBQkIpIG9yIFNwaGVyZVxyXG4gICAgICogQHBhcmFtIHRhcmdldCBpcyB0aGUgb2JqZWN0IChwb2ludCBvciBtZXNoKSB3aGF0IHRoZSBpbnRlcnNlY3Rpb24gaXMgY29tcHV0ZWQgYWdhaW5zdFxyXG4gICAgICogQHBhcmFtIGlzU3BoZXJlIGlzIGJvb2xlYW4gZmxhZyB3aGVuIGZhbHNlIChkZWZhdWx0KSBib3VuZGluZyBib3ggb2YgbWVzaCBpcyB1c2VkLCB3aGVuIHRydWUgdGhlIGJvdW5kaW5nIHNwaGVyZSBpcyB1c2VkXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIGl0IGludGVyc2VjdHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGludGVyc2VjdHNNZXNoKHRhcmdldDogTWVzaCwgaXNTcGhlcmU6IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXRhcmdldC5oYXNCb3VuZGluZ0luZm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9wY3MubWVzaCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQb2ludCBDbG91ZCBTeXN0ZW0gZG9lc250IGNvbnRhaW4gdGhlIE1lc2hcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNTcGhlcmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5nZXRCb3VuZGluZ0luZm8oKS5ib3VuZGluZ1NwaGVyZS5pbnRlcnNlY3RzUG9pbnQodGhpcy5wb3NpdGlvbi5hZGQodGhpcy5fcGNzLm1lc2gucG9zaXRpb24pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJib3ggPSB0YXJnZXQuZ2V0Qm91bmRpbmdJbmZvKCkuYm91bmRpbmdCb3g7XHJcblxyXG4gICAgICAgIGNvbnN0IG1heFggPSBiYm94Lm1heGltdW1Xb3JsZC54O1xyXG4gICAgICAgIGNvbnN0IG1pblggPSBiYm94Lm1pbmltdW1Xb3JsZC54O1xyXG4gICAgICAgIGNvbnN0IG1heFkgPSBiYm94Lm1heGltdW1Xb3JsZC55O1xyXG4gICAgICAgIGNvbnN0IG1pblkgPSBiYm94Lm1pbmltdW1Xb3JsZC55O1xyXG4gICAgICAgIGNvbnN0IG1heFogPSBiYm94Lm1heGltdW1Xb3JsZC56O1xyXG4gICAgICAgIGNvbnN0IG1pblogPSBiYm94Lm1pbmltdW1Xb3JsZC56O1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5fcGNzLm1lc2gucG9zaXRpb24ueDtcclxuICAgICAgICBjb25zdCB5ID0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5fcGNzLm1lc2gucG9zaXRpb24ueTtcclxuICAgICAgICBjb25zdCB6ID0gdGhpcy5wb3NpdGlvbi56ICsgdGhpcy5fcGNzLm1lc2gucG9zaXRpb24uejtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1pblggPD0geCAmJiB4IDw9IG1heFggJiYgbWluWSA8PSB5ICYmIHkgPD0gbWF4WSAmJiBtaW5aIDw9IHogJiYgeiA8PSBtYXhaO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IHRoZSByb3RhdGlvbiBtYXRyaXggb2YgdGhlIHBhcnRpY2xlXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFJvdGF0aW9uTWF0cml4KG06IE1hdHJpeCkge1xyXG4gICAgICAgIGxldCBxdWF0ZXJuaW9uOiBRdWF0ZXJuaW9uO1xyXG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW9uUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICBxdWF0ZXJuaW9uID0gdGhpcy5yb3RhdGlvblF1YXRlcm5pb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcXVhdGVybmlvbiA9IFRtcFZlY3RvcnMuUXVhdGVybmlvblswXTtcclxuICAgICAgICAgICAgY29uc3Qgcm90YXRpb24gPSB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICAgICAgICBRdWF0ZXJuaW9uLlJvdGF0aW9uWWF3UGl0Y2hSb2xsVG9SZWYocm90YXRpb24ueSwgcm90YXRpb24ueCwgcm90YXRpb24ueiwgcXVhdGVybmlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBxdWF0ZXJuaW9uLnRvUm90YXRpb25NYXRyaXgobSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgZ3JvdXAgb2YgcG9pbnRzIGluIGEgcG9pbnRzIGNsb3VkIHN5c3RlbVxyXG4gKiAgKiBQQ1MgaW50ZXJuYWwgdG9vbCwgZG9uJ3QgdXNlIGl0IG1hbnVhbGx5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvaW50c0dyb3VwIHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IG9yIHNldCB0aGUgZ3JvdXBJZFxyXG4gICAgICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBncm91cElkIGluc3RlYWRcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgcHVibGljIGdldCBncm91cElEKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBJZDtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIHB1YmxpYyBzZXQgZ3JvdXBJRChncm91cElEOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmdyb3VwSWQgPSBncm91cElEO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZ3JvdXAgaWRcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ3JvdXBJZDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBpbWFnZSBkYXRhIGZvciBncm91cCAoaW50ZXJuYWwgdXNlKVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZ3JvdXBJbWFnZURhdGE6IE51bGxhYmxlPEFycmF5QnVmZmVyVmlldz47XHJcbiAgICAvKipcclxuICAgICAqIEltYWdlIFdpZHRoIChpbnRlcm5hbCB1c2UpXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9ncm91cEltZ1dpZHRoOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIEltYWdlIEhlaWdodCAoaW50ZXJuYWwgdXNlKVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZ3JvdXBJbWdIZWlnaHQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogQ3VzdG9tIHBvc2l0aW9uIGZ1bmN0aW9uIChpbnRlcm5hbCB1c2UpXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9wb3NpdGlvbkZ1bmN0aW9uOiBOdWxsYWJsZTwocGFydGljbGU6IENsb3VkUG9pbnQsIGk/OiBudW1iZXIsIHM/OiBudW1iZXIpID0+IHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBkZW5zaXR5IHBlciBmYWNldCBmb3Igc3VyZmFjZSBwb2ludHNcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2dyb3VwRGVuc2l0eTogbnVtYmVyW107XHJcbiAgICAvKipcclxuICAgICAqIE9ubHkgd2hlbiBwb2ludHMgYXJlIGNvbG9yZWQgYnkgdGV4dHVyZSBjYXJyaWVzIHBvaW50ZXIgdG8gdGV4dHVyZSBsaXN0IGFycmF5XHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF90ZXh0dXJlTmI6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBwb2ludHMgZ3JvdXAgb2JqZWN0LiBUaGlzIGlzIGFuIGludGVybmFsIHJlZmVyZW5jZSB0byBwcm9kdWNlIHBhcnRpY2xlcyBmb3IgdGhlIFBDUy5cclxuICAgICAqIFBDUyBpbnRlcm5hbCB0b29sLCBkb24ndCB1c2UgaXQgbWFudWFsbHkuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgcG9zRnVuY3Rpb246IE51bGxhYmxlPChwYXJ0aWNsZTogQ2xvdWRQb2ludCwgaT86IG51bWJlciwgcz86IG51bWJlcikgPT4gdm9pZD4pIHtcclxuICAgICAgICB0aGlzLmdyb3VwSWQgPSBpZDtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbkZ1bmN0aW9uID0gcG9zRnVuY3Rpb247XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBJbmRpY2VzQXJyYXksIEZsb2F0QXJyYXkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgQ29sb3I0LCBDb2xvcjMgfSBmcm9tIFwiLi4vTWF0aHMvbWF0aFwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyLCBWZWN0b3IzLCBWZWN0b3I0LCBUbXBWZWN0b3JzLCBNYXRyaXggfSBmcm9tIFwiLi4vTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uL01pc2MvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCIuLi9CdWZmZXJzL2J1ZmZlclwiO1xyXG5pbXBvcnQgeyBWZXJ0ZXhEYXRhIH0gZnJvbSBcIi4uL01lc2hlcy9tZXNoLnZlcnRleERhdGFcIjtcclxuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCIuLi9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBFbmdpbmVTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL2VuZ2luZVN0b3JlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUsIElEaXNwb3NhYmxlIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IENsb3VkUG9pbnQsIFBvaW50c0dyb3VwIH0gZnJvbSBcIi4vY2xvdWRQb2ludFwiO1xyXG5pbXBvcnQgeyBSYXkgfSBmcm9tIFwiLi4vQ3VsbGluZy9yYXlcIjtcclxuaW1wb3J0IHR5cGUgeyBQaWNraW5nSW5mbyB9IGZyb20gXCIuLi9Db2xsaXNpb25zL3BpY2tpbmdJbmZvXCI7XHJcbmltcG9ydCB7IFN0YW5kYXJkTWF0ZXJpYWwgfSBmcm9tIFwiLi4vTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiLi8uLi9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHsgUmFuZG9tUmFuZ2UgfSBmcm9tIFwiLi4vTWF0aHMvbWF0aC5zY2FsYXIuZnVuY3Rpb25zXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiLi4vTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcblxyXG4vKiogRGVmaW5lcyB0aGUgNCBjb2xvciBvcHRpb25zICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIFBvaW50Q29sb3Ige1xyXG4gICAgLyoqIGNvbG9yIHZhbHVlICovXHJcbiAgICBDb2xvciA9IDIsXHJcbiAgICAvKiogdXYgdmFsdWUgKi9cclxuICAgIFVWID0gMSxcclxuICAgIC8qKiByYW5kb20gdmFsdWUgKi9cclxuICAgIFJhbmRvbSA9IDAsXHJcbiAgICAvKiogc3RhdGVkIHZhbHVlICovXHJcbiAgICBTdGF0ZWQgPSAzLFxyXG59XHJcblxyXG4vKipcclxuICogVGhlIFBvaW50Q2xvdWRTeXN0ZW0gKFBDUykgaXMgYSBzaW5nbGUgdXBkYXRhYmxlIG1lc2guIFRoZSBwb2ludHMgY29ycmVzcG9uZGluZyB0byB0aGUgdmVydGljZXMgb2YgdGhpcyBiaWcgbWVzaC5cclxuICogQXMgaXQgaXMganVzdCBhIG1lc2gsIHRoZSBQb2ludENsb3VkU3lzdGVtIGhhcyBhbGwgdGhlIHNhbWUgcHJvcGVydGllcyBhcyBhbnkgb3RoZXIgQkpTIG1lc2ggOiBub3QgbW9yZSwgbm90IGxlc3MuIEl0IGNhbiBiZSBzY2FsZWQsIHJvdGF0ZWQsIHRyYW5zbGF0ZWQsIGVubGlnaHRlZCwgdGV4dHVyZWQsIG1vdmVkLCBldGMuXHJcblxyXG4gKiBUaGUgUG9pbnRDbG91ZFN5c3RlbSBpcyBhbHNvIGEgcGFydGljbGUgc3lzdGVtLCB3aXRoIGVhY2ggcG9pbnQgYmVpbmcgYSBwYXJ0aWNsZS4gSXQgcHJvdmlkZXMgc29tZSBtZXRob2RzIHRvIG1hbmFnZSB0aGUgcGFydGljbGVzLlxyXG4gKiBIb3dldmVyIGl0IGlzIGJlaGF2aW9yIGFnbm9zdGljLiBUaGlzIG1lYW5zIGl0IGhhcyBubyBlbWl0dGVyLCBubyBwYXJ0aWNsZSBwaHlzaWNzLCBubyBwYXJ0aWNsZSByZWN5Y2xlci4gWW91IGhhdmUgdG8gaW1wbGVtZW50IHlvdXIgb3duIGJlaGF2aW9yLlxyXG4gKlxyXG4gKiBGdWxsIGRvY3VtZW50YXRpb24gaGVyZSA6IFRPIEJFIEVOVEVSRURcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQb2ludHNDbG91ZFN5c3RlbSBpbXBsZW1lbnRzIElEaXNwb3NhYmxlIHtcclxuICAgIC8qKlxyXG4gICAgICogIFRoZSBQQ1MgYXJyYXkgb2YgY2xvdWQgcG9pbnQgb2JqZWN0cy4gSnVzdCBhY2Nlc3MgZWFjaCBwYXJ0aWNsZSBhcyB3aXRoIGFueSBjbGFzc2ljIGFycmF5LlxyXG4gICAgICogIEV4YW1wbGUgOiB2YXIgcCA9IFNQUy5wYXJ0aWNsZXNbaV07XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwYXJ0aWNsZXM6IENsb3VkUG9pbnRbXSA9IG5ldyBBcnJheTxDbG91ZFBvaW50PigpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgUENTIHRvdGFsIG51bWJlciBvZiBwYXJ0aWNsZXMuIFJlYWQgb25seS4gVXNlIFBDUy5jb3VudGVyIGluc3RlYWQgaWYgeW91IG5lZWQgdG8gc2V0IHlvdXIgb3duIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmJQYXJ0aWNsZXM6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgYSBjb3VudGVyIGZvciB5b3VyIG93biB1c2FnZS4gSXQncyBub3Qgc2V0IGJ5IGFueSBTUFMgZnVuY3Rpb25zLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY291bnRlcjogbnVtYmVyID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIFBDUyBuYW1lLiBUaGlzIG5hbWUgaXMgYWxzbyBnaXZlbiB0byB0aGUgdW5kZXJseWluZyBtZXNoLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgUENTIG1lc2guIEl0J3MgYSBzdGFuZGFyZCBCSlMgTWVzaCwgc28gYWxsIHRoZSBtZXRob2RzIGZyb20gdGhlIE1lc2ggY2xhc3MgYXJlIGF2YWlsYWJsZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG1lc2g/OiBNZXNoO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGVtcHR5IG9iamVjdCBpcyBpbnRlbmRlZCB0byBzdG9yZSBzb21lIFBDUyBzcGVjaWZpYyBvciB0ZW1wb3JhcnkgdmFsdWVzIGluIG9yZGVyIHRvIGxvd2VyIHRoZSBHYXJiYWdlIENvbGxlY3RvciBhY3Rpdml0eS5cclxuICAgICAqIFBsZWFzZSByZWFkIDpcclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhcnM6IGFueSA9IHt9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9zaXplOiBudW1iZXI7IC8vc2l6ZSBvZiBlYWNoIHBvaW50IHBhcnRpY2xlXHJcblxyXG4gICAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lO1xyXG4gICAgcHJpdmF0ZSBfcHJvbWlzZXM6IEFycmF5PFByb21pc2U8YW55Pj4gPSBbXTtcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uczogbnVtYmVyW10gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgcHJpdmF0ZSBfaW5kaWNlczogbnVtYmVyW10gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgcHJpdmF0ZSBfbm9ybWFsczogbnVtYmVyW10gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgcHJpdmF0ZSBfY29sb3JzOiBudW1iZXJbXSA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICBwcml2YXRlIF91dnM6IG51bWJlcltdID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgIHByaXZhdGUgX2luZGljZXMzMjogSW5kaWNlc0FycmF5OyAvLyB1c2VkIGFzIGRlcHRoIHNvcnRlZCBhcnJheSBpZiBkZXB0aCBzb3J0IGVuYWJsZWQsIGVsc2UgdXNlZCBhcyB0eXBlZCBpbmRpY2VzXHJcbiAgICBwcml2YXRlIF9wb3NpdGlvbnMzMjogRmxvYXQzMkFycmF5OyAvLyB1cGRhdGVkIHBvc2l0aW9ucyBmb3IgdGhlIFZCT1xyXG4gICAgcHJpdmF0ZSBfY29sb3JzMzI6IEZsb2F0MzJBcnJheTtcclxuICAgIHByaXZhdGUgX3V2czMyOiBGbG9hdDMyQXJyYXk7XHJcbiAgICBwcml2YXRlIF91cGRhdGFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfaXNWaXNpYmlsaXR5Qm94TG9ja2VkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9hbHdheXNWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9ncm91cHM6IG51bWJlcltdID0gbmV3IEFycmF5PG51bWJlcj4oKTsgLy9zdGFydCBpbmRpY2VzIGZvciBlYWNoIGdyb3VwIG9mIHBhcnRpY2xlc1xyXG4gICAgcHJpdmF0ZSBfZ3JvdXBDb3VudGVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfY29tcHV0ZVBhcnRpY2xlQ29sb3I6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfY29tcHV0ZVBhcnRpY2xlVGV4dHVyZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9jb21wdXRlUGFydGljbGVSb3RhdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9jb21wdXRlQm91bmRpbmdCb3g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2lzUmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHBhcnRpY2xlIHBvc2l0aW9ucyBjb21wdXRlZCBieSB0aGUgUG9pbnQgQ2xvdWQgU3lzdGVtXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcG9zaXRpb25zKCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uczMyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgcGFydGljbGUgY29sb3JzIGNvbXB1dGVkIGJ5IHRoZSBQb2ludCBDbG91ZCBTeXN0ZW1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjb2xvcnMoKTogRmxvYXQzMkFycmF5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JzMzI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBwYXJ0aWNsZSB1dnMgY29tcHV0ZWQgYnkgdGhlIFBvaW50IENsb3VkIFN5c3RlbVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHV2cygpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91dnMzMjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBQQ1MgKFBvaW50cyBDbG91ZCBTeXN0ZW0pIG9iamVjdFxyXG4gICAgICogQHBhcmFtIG5hbWUgKFN0cmluZykgaXMgdGhlIFBDUyBuYW1lLCB0aGlzIHdpbGwgYmUgdGhlIHVuZGVybHlpbmcgbWVzaCBuYW1lXHJcbiAgICAgKiBAcGFyYW0gcG9pbnRTaXplIChudW1iZXIpIGlzIHRoZSBzaXplIGZvciBlYWNoIHBvaW50LiBIYXMgbm8gZWZmZWN0IG9uIGEgV2ViR1BVIGVuZ2luZS5cclxuICAgICAqIEBwYXJhbSBzY2VuZSAoU2NlbmUpIGlzIHRoZSBzY2VuZSBpbiB3aGljaCB0aGUgUENTIGlzIGFkZGVkXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBkZWZpbmVzIHRoZSBvcHRpb25zIG9mIHRoZSBQQ1MgZS5nLlxyXG4gICAgICogKiB1cGRhdGFibGUgKG9wdGlvbmFsIGJvb2xlYW4sIGRlZmF1bHQgdHJ1ZSkgOiBpZiB0aGUgUENTIG11c3QgYmUgdXBkYXRhYmxlIG9yIGltbXV0YWJsZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50U2l6ZTogbnVtYmVyLCBzY2VuZTogU2NlbmUsIG9wdGlvbnM/OiB7IHVwZGF0YWJsZT86IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fc2l6ZSA9IHBvaW50U2l6ZTtcclxuICAgICAgICB0aGlzLl9zY2VuZSA9IHNjZW5lIHx8IEVuZ2luZVN0b3JlLkxhc3RDcmVhdGVkU2NlbmU7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy51cGRhdGFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGFibGUgPSBvcHRpb25zLnVwZGF0YWJsZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyB0aGUgUENTIHVuZGVybHlpbmcgbWVzaC4gUmV0dXJucyBhIHN0YW5kYXJkIE1lc2guXHJcbiAgICAgKiBJZiBubyBwb2ludHMgd2VyZSBhZGRlZCB0byB0aGUgUENTLCB0aGUgcmV0dXJuZWQgbWVzaCBpcyBqdXN0IGEgc2luZ2xlIHBvaW50LlxyXG4gICAgICogQHBhcmFtIG1hdGVyaWFsIFRoZSBtYXRlcmlhbCB0byB1c2UgdG8gcmVuZGVyIHRoZSBtZXNoLiBJZiBub3QgcHJvdmlkZWQsIHdpbGwgY3JlYXRlIGEgZGVmYXVsdCBvbmVcclxuICAgICAqIEByZXR1cm5zIGEgcHJvbWlzZSBmb3IgdGhlIGNyZWF0ZWQgbWVzaFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgYnVpbGRNZXNoQXN5bmMobWF0ZXJpYWw/OiBNYXRlcmlhbCk6IFByb21pc2U8TWVzaD4ge1xyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRoaXMuX3Byb21pc2VzKTtcclxuICAgICAgICB0aGlzLl9pc1JlYWR5ID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fYnVpbGRNZXNoQXN5bmMobWF0ZXJpYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2J1aWxkTWVzaEFzeW5jKG1hdGVyaWFsPzogTWF0ZXJpYWwpOiBQcm9taXNlPE1lc2g+IHtcclxuICAgICAgICBpZiAodGhpcy5uYlBhcnRpY2xlcyA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFBvaW50cygxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uczMyID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLl9wb3NpdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuX3V2czMyID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLl91dnMpO1xyXG4gICAgICAgIHRoaXMuX2NvbG9yczMyID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLl9jb2xvcnMpO1xyXG5cclxuICAgICAgICBjb25zdCB2ZXJ0ZXhEYXRhID0gbmV3IFZlcnRleERhdGEoKTtcclxuICAgICAgICB2ZXJ0ZXhEYXRhLnNldCh0aGlzLl9wb3NpdGlvbnMzMiwgVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl91dnMzMi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZlcnRleERhdGEuc2V0KHRoaXMuX3V2czMyLCBWZXJ0ZXhCdWZmZXIuVVZLaW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVjID0gMDsgLy9lbWlzc2l2ZSBjb2xvciB2YWx1ZSAwIGZvciBVVnMsIDEgZm9yIGNvbG9yXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbG9yczMyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZWMgPSAxO1xyXG4gICAgICAgICAgICB2ZXJ0ZXhEYXRhLnNldCh0aGlzLl9jb2xvcnMzMiwgVmVydGV4QnVmZmVyLkNvbG9yS2luZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1lc2ggPSBuZXcgTWVzaCh0aGlzLm5hbWUsIHRoaXMuX3NjZW5lKTtcclxuICAgICAgICB2ZXJ0ZXhEYXRhLmFwcGx5VG9NZXNoKG1lc2gsIHRoaXMuX3VwZGF0YWJsZSk7XHJcbiAgICAgICAgdGhpcy5tZXNoID0gbWVzaDtcclxuXHJcbiAgICAgICAgLy8gZnJlZSBtZW1vcnlcclxuICAgICAgICAoPGFueT50aGlzLl9wb3NpdGlvbnMpID0gbnVsbDtcclxuICAgICAgICAoPGFueT50aGlzLl91dnMpID0gbnVsbDtcclxuICAgICAgICAoPGFueT50aGlzLl9jb2xvcnMpID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl91cGRhdGFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMubGVuZ3RoID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYXQgPSBtYXRlcmlhbDtcclxuXHJcbiAgICAgICAgaWYgKCFtYXQpIHtcclxuICAgICAgICAgICAgbWF0ID0gbmV3IFN0YW5kYXJkTWF0ZXJpYWwoXCJwb2ludCBjbG91ZCBtYXRlcmlhbFwiLCB0aGlzLl9zY2VuZSk7XHJcbiAgICAgICAgICAgICg8U3RhbmRhcmRNYXRlcmlhbD5tYXQpLmVtaXNzaXZlQ29sb3IgPSBuZXcgQ29sb3IzKGVjLCBlYywgZWMpO1xyXG4gICAgICAgICAgICAoPFN0YW5kYXJkTWF0ZXJpYWw+bWF0KS5kaXNhYmxlTGlnaHRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAoPFN0YW5kYXJkTWF0ZXJpYWw+bWF0KS5wb2ludHNDbG91ZCA9IHRydWU7XHJcbiAgICAgICAgICAgICg8U3RhbmRhcmRNYXRlcmlhbD5tYXQpLnBvaW50U2l6ZSA9IHRoaXMuX3NpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lc2gubWF0ZXJpYWwgPSBtYXQ7XHJcblxyXG4gICAgICAgIHJldHVybiBtZXNoO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZHMgYSBuZXcgcGFydGljbGUgb2JqZWN0IGluIHRoZSBwYXJ0aWNsZXMgYXJyYXlcclxuICAgIHByaXZhdGUgX2FkZFBhcnRpY2xlKGlkeDogbnVtYmVyLCBncm91cDogUG9pbnRzR3JvdXAsIGdyb3VwSWQ6IG51bWJlciwgaWR4SW5Hcm91cDogbnVtYmVyKTogQ2xvdWRQb2ludCB7XHJcbiAgICAgICAgY29uc3QgY3AgPSBuZXcgQ2xvdWRQb2ludChpZHgsIGdyb3VwLCBncm91cElkLCBpZHhJbkdyb3VwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKGNwKTtcclxuICAgICAgICByZXR1cm4gY3A7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmFuZG9tVW5pdFZlY3RvcihwYXJ0aWNsZTogQ2xvdWRQb2ludCk6IHZvaWQge1xyXG4gICAgICAgIHBhcnRpY2xlLnBvc2l0aW9uID0gbmV3IFZlY3RvcjMoTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgcGFydGljbGUuY29sb3IgPSBuZXcgQ29sb3I0KDEsIDEsIDEsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldENvbG9ySW5kaWNlc0ZvckNvb3JkKHBvaW50c0dyb3VwOiBQb2ludHNHcm91cCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIpOiBDb2xvcjQge1xyXG4gICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IDxVaW50OEFycmF5PnBvaW50c0dyb3VwLl9ncm91cEltYWdlRGF0YTtcclxuICAgICAgICBjb25zdCBjb2xvciA9IHkgKiAod2lkdGggKiA0KSArIHggKiA0O1xyXG4gICAgICAgIGNvbnN0IGNvbG9ySW5kaWNlcyA9IFtjb2xvciwgY29sb3IgKyAxLCBjb2xvciArIDIsIGNvbG9yICsgM107XHJcbiAgICAgICAgY29uc3QgcmVkSW5kZXggPSBjb2xvckluZGljZXNbMF07XHJcbiAgICAgICAgY29uc3QgZ3JlZW5JbmRleCA9IGNvbG9ySW5kaWNlc1sxXTtcclxuICAgICAgICBjb25zdCBibHVlSW5kZXggPSBjb2xvckluZGljZXNbMl07XHJcbiAgICAgICAgY29uc3QgYWxwaGFJbmRleCA9IGNvbG9ySW5kaWNlc1szXTtcclxuICAgICAgICBjb25zdCByZWRGb3JDb29yZCA9IGltYWdlRGF0YVtyZWRJbmRleF07XHJcbiAgICAgICAgY29uc3QgZ3JlZW5Gb3JDb29yZCA9IGltYWdlRGF0YVtncmVlbkluZGV4XTtcclxuICAgICAgICBjb25zdCBibHVlRm9yQ29vcmQgPSBpbWFnZURhdGFbYmx1ZUluZGV4XTtcclxuICAgICAgICBjb25zdCBhbHBoYUZvckNvb3JkID0gaW1hZ2VEYXRhW2FscGhhSW5kZXhdO1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3I0KHJlZEZvckNvb3JkIC8gMjU1LCBncmVlbkZvckNvb3JkIC8gMjU1LCBibHVlRm9yQ29vcmQgLyAyNTUsIGFscGhhRm9yQ29vcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldFBvaW50c0NvbG9yT3JVVihcclxuICAgICAgICBtZXNoOiBNZXNoLFxyXG4gICAgICAgIHBvaW50c0dyb3VwOiBQb2ludHNHcm91cCxcclxuICAgICAgICBpc1ZvbHVtZTogYm9vbGVhbixcclxuICAgICAgICBjb2xvckZyb21UZXh0dXJlPzogYm9vbGVhbixcclxuICAgICAgICBoYXNUZXh0dXJlPzogYm9vbGVhbixcclxuICAgICAgICBjb2xvcj86IENvbG9yNCxcclxuICAgICAgICByYW5nZT86IG51bWJlcixcclxuICAgICAgICB1dlNldEluZGV4PzogbnVtYmVyXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICB1dlNldEluZGV4ID0gdXZTZXRJbmRleCA/PyAwO1xyXG5cclxuICAgICAgICBpZiAoaXNWb2x1bWUpIHtcclxuICAgICAgICAgICAgbWVzaC51cGRhdGVGYWNldERhdGEoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJvdW5kSW5mbyA9IG1lc2guZ2V0Qm91bmRpbmdJbmZvKCk7XHJcbiAgICAgICAgY29uc3QgZGlhbWV0ZXIgPSAyICogYm91bmRJbmZvLmJvdW5kaW5nU3BoZXJlLnJhZGl1cztcclxuXHJcbiAgICAgICAgbGV0IG1lc2hQb3MgPSA8RmxvYXRBcnJheT5tZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kKTtcclxuICAgICAgICBjb25zdCBtZXNoSW5kID0gPEluZGljZXNBcnJheT5tZXNoLmdldEluZGljZXMoKTtcclxuICAgICAgICBjb25zdCBtZXNoVVYgPSA8RmxvYXRBcnJheT5tZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuVVZLaW5kICsgKHV2U2V0SW5kZXggPyB1dlNldEluZGV4ICsgMSA6IFwiXCIpKTtcclxuICAgICAgICBjb25zdCBtZXNoQ29sID0gPEZsb2F0QXJyYXk+bWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLkNvbG9yS2luZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYWNlID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgbWVzaC5jb21wdXRlV29ybGRNYXRyaXgoKTtcclxuICAgICAgICBjb25zdCBtZXNoTWF0cml4OiBNYXRyaXggPSBtZXNoLmdldFdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgaWYgKCFtZXNoTWF0cml4LmlzSWRlbnRpdHkoKSkge1xyXG4gICAgICAgICAgICBtZXNoUG9zID0gbWVzaFBvcy5zbGljZSgwKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBtZXNoUG9zLmxlbmd0aCAvIDM7IHArKykge1xyXG4gICAgICAgICAgICAgICAgVmVjdG9yMy5UcmFuc2Zvcm1Db29yZGluYXRlc0Zyb21GbG9hdHNUb1JlZihtZXNoUG9zWzMgKiBwXSwgbWVzaFBvc1szICogcCArIDFdLCBtZXNoUG9zWzMgKiBwICsgMl0sIG1lc2hNYXRyaXgsIHBsYWNlKTtcclxuICAgICAgICAgICAgICAgIG1lc2hQb3NbMyAqIHBdID0gcGxhY2UueDtcclxuICAgICAgICAgICAgICAgIG1lc2hQb3NbMyAqIHAgKyAxXSA9IHBsYWNlLnk7XHJcbiAgICAgICAgICAgICAgICBtZXNoUG9zWzMgKiBwICsgMl0gPSBwbGFjZS56O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaWR4UG9pbnRzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBsZXQgaWQwOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBpZDE6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGlkMjogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgdjBYOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCB2MFk6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHYwWjogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgdjFYOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCB2MVk6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHYxWjogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgdjJYOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCB2Mlk6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHYyWjogbnVtYmVyID0gMDtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXgwID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgY29uc3QgdmVydGV4MSA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IHZlcnRleDIgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICBjb25zdCB2ZWMwID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgY29uc3QgdmVjMSA9IFZlY3RvcjMuWmVybygpO1xyXG5cclxuICAgICAgICBsZXQgdXYwWDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgdXYwWTogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgdXYxWDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgdXYxWTogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgdXYyWDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgdXYyWTogbnVtYmVyID0gMDtcclxuICAgICAgICBjb25zdCB1djAgPSBWZWN0b3IyLlplcm8oKTtcclxuICAgICAgICBjb25zdCB1djEgPSBWZWN0b3IyLlplcm8oKTtcclxuICAgICAgICBjb25zdCB1djIgPSBWZWN0b3IyLlplcm8oKTtcclxuICAgICAgICBjb25zdCB1dmVjMCA9IFZlY3RvcjIuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IHV2ZWMxID0gVmVjdG9yMi5aZXJvKCk7XHJcblxyXG4gICAgICAgIGxldCBjb2wwWDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgY29sMFk6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGNvbDBaOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBjb2wwQTogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgY29sMVg6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGNvbDFZOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBjb2wxWjogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgY29sMUE6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGNvbDJYOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBjb2wyWTogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgY29sMlo6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGNvbDJBOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGNvbnN0IGNvbDAgPSBWZWN0b3I0Llplcm8oKTtcclxuICAgICAgICBjb25zdCBjb2wxID0gVmVjdG9yNC5aZXJvKCk7XHJcbiAgICAgICAgY29uc3QgY29sMiA9IFZlY3RvcjQuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IGNvbHZlYzAgPSBWZWN0b3I0Llplcm8oKTtcclxuICAgICAgICBjb25zdCBjb2x2ZWMxID0gVmVjdG9yNC5aZXJvKCk7XHJcblxyXG4gICAgICAgIGxldCBsYW1kYTogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgbXU6IG51bWJlciA9IDA7XHJcbiAgICAgICAgcmFuZ2UgPSByYW5nZSA/IHJhbmdlIDogMDtcclxuXHJcbiAgICAgICAgbGV0IGZhY2V0UG9pbnQ6IFZlY3RvcjM7XHJcbiAgICAgICAgbGV0IHV2UG9pbnQ6IFZlY3RvcjI7XHJcbiAgICAgICAgbGV0IGNvbFBvaW50OiBWZWN0b3I0ID0gbmV3IFZlY3RvcjQoMCwgMCwgMCwgMCk7XHJcblxyXG4gICAgICAgIGxldCBub3JtID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgbGV0IHRhbmcgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICBsZXQgYmlOb3JtID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gMDtcclxuICAgICAgICBsZXQgZmFjZXRQbGFuZVZlYyA9IFZlY3RvcjMuWmVybygpO1xyXG5cclxuICAgICAgICBsZXQgZ2FwID0gMDtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSAwO1xyXG4gICAgICAgIGNvbnN0IHJheSA9IG5ldyBSYXkoVmVjdG9yMy5aZXJvKCksIG5ldyBWZWN0b3IzKDEsIDAsIDApKTtcclxuICAgICAgICBsZXQgcGlja0luZm86IFBpY2tpbmdJbmZvO1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBWZWN0b3IzLlplcm8oKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1lc2hJbmQubGVuZ3RoIC8gMzsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZDAgPSBtZXNoSW5kWzMgKiBpbmRleF07XHJcbiAgICAgICAgICAgIGlkMSA9IG1lc2hJbmRbMyAqIGluZGV4ICsgMV07XHJcbiAgICAgICAgICAgIGlkMiA9IG1lc2hJbmRbMyAqIGluZGV4ICsgMl07XHJcbiAgICAgICAgICAgIHYwWCA9IG1lc2hQb3NbMyAqIGlkMF07XHJcbiAgICAgICAgICAgIHYwWSA9IG1lc2hQb3NbMyAqIGlkMCArIDFdO1xyXG4gICAgICAgICAgICB2MFogPSBtZXNoUG9zWzMgKiBpZDAgKyAyXTtcclxuICAgICAgICAgICAgdjFYID0gbWVzaFBvc1szICogaWQxXTtcclxuICAgICAgICAgICAgdjFZID0gbWVzaFBvc1szICogaWQxICsgMV07XHJcbiAgICAgICAgICAgIHYxWiA9IG1lc2hQb3NbMyAqIGlkMSArIDJdO1xyXG4gICAgICAgICAgICB2MlggPSBtZXNoUG9zWzMgKiBpZDJdO1xyXG4gICAgICAgICAgICB2MlkgPSBtZXNoUG9zWzMgKiBpZDIgKyAxXTtcclxuICAgICAgICAgICAgdjJaID0gbWVzaFBvc1szICogaWQyICsgMl07XHJcbiAgICAgICAgICAgIHZlcnRleDAuc2V0KHYwWCwgdjBZLCB2MFopO1xyXG4gICAgICAgICAgICB2ZXJ0ZXgxLnNldCh2MVgsIHYxWSwgdjFaKTtcclxuICAgICAgICAgICAgdmVydGV4Mi5zZXQodjJYLCB2MlksIHYyWik7XHJcbiAgICAgICAgICAgIHZlcnRleDEuc3VidHJhY3RUb1JlZih2ZXJ0ZXgwLCB2ZWMwKTtcclxuICAgICAgICAgICAgdmVydGV4Mi5zdWJ0cmFjdFRvUmVmKHZlcnRleDEsIHZlYzEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1lc2hVVikge1xyXG4gICAgICAgICAgICAgICAgdXYwWCA9IG1lc2hVVlsyICogaWQwXTtcclxuICAgICAgICAgICAgICAgIHV2MFkgPSBtZXNoVVZbMiAqIGlkMCArIDFdO1xyXG4gICAgICAgICAgICAgICAgdXYxWCA9IG1lc2hVVlsyICogaWQxXTtcclxuICAgICAgICAgICAgICAgIHV2MVkgPSBtZXNoVVZbMiAqIGlkMSArIDFdO1xyXG4gICAgICAgICAgICAgICAgdXYyWCA9IG1lc2hVVlsyICogaWQyXTtcclxuICAgICAgICAgICAgICAgIHV2MlkgPSBtZXNoVVZbMiAqIGlkMiArIDFdO1xyXG4gICAgICAgICAgICAgICAgdXYwLnNldCh1djBYLCB1djBZKTtcclxuICAgICAgICAgICAgICAgIHV2MS5zZXQodXYxWCwgdXYxWSk7XHJcbiAgICAgICAgICAgICAgICB1djIuc2V0KHV2MlgsIHV2MlkpO1xyXG4gICAgICAgICAgICAgICAgdXYxLnN1YnRyYWN0VG9SZWYodXYwLCB1dmVjMCk7XHJcbiAgICAgICAgICAgICAgICB1djIuc3VidHJhY3RUb1JlZih1djEsIHV2ZWMxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG1lc2hDb2wgJiYgY29sb3JGcm9tVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgY29sMFggPSBtZXNoQ29sWzQgKiBpZDBdO1xyXG4gICAgICAgICAgICAgICAgY29sMFkgPSBtZXNoQ29sWzQgKiBpZDAgKyAxXTtcclxuICAgICAgICAgICAgICAgIGNvbDBaID0gbWVzaENvbFs0ICogaWQwICsgMl07XHJcbiAgICAgICAgICAgICAgICBjb2wwQSA9IG1lc2hDb2xbNCAqIGlkMCArIDNdO1xyXG4gICAgICAgICAgICAgICAgY29sMVggPSBtZXNoQ29sWzQgKiBpZDFdO1xyXG4gICAgICAgICAgICAgICAgY29sMVkgPSBtZXNoQ29sWzQgKiBpZDEgKyAxXTtcclxuICAgICAgICAgICAgICAgIGNvbDFaID0gbWVzaENvbFs0ICogaWQxICsgMl07XHJcbiAgICAgICAgICAgICAgICBjb2wxQSA9IG1lc2hDb2xbNCAqIGlkMSArIDNdO1xyXG4gICAgICAgICAgICAgICAgY29sMlggPSBtZXNoQ29sWzQgKiBpZDJdO1xyXG4gICAgICAgICAgICAgICAgY29sMlkgPSBtZXNoQ29sWzQgKiBpZDIgKyAxXTtcclxuICAgICAgICAgICAgICAgIGNvbDJaID0gbWVzaENvbFs0ICogaWQyICsgMl07XHJcbiAgICAgICAgICAgICAgICBjb2wyQSA9IG1lc2hDb2xbNCAqIGlkMiArIDNdO1xyXG4gICAgICAgICAgICAgICAgY29sMC5zZXQoY29sMFgsIGNvbDBZLCBjb2wwWiwgY29sMEEpO1xyXG4gICAgICAgICAgICAgICAgY29sMS5zZXQoY29sMVgsIGNvbDFZLCBjb2wxWiwgY29sMUEpO1xyXG4gICAgICAgICAgICAgICAgY29sMi5zZXQoY29sMlgsIGNvbDJZLCBjb2wyWiwgY29sMkEpO1xyXG4gICAgICAgICAgICAgICAgY29sMS5zdWJ0cmFjdFRvUmVmKGNvbDAsIGNvbHZlYzApO1xyXG4gICAgICAgICAgICAgICAgY29sMi5zdWJ0cmFjdFRvUmVmKGNvbDEsIGNvbHZlYzEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgd2lkdGg6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IGhlaWdodDogbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgZGVsdGFTOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBkZWx0YVY6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IGg6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IHM6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IHY6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IGhzdkNvbDogQ29sb3IzO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZWRDb2xvcjogQ29sb3IzID0gbmV3IENvbG9yMygwLCAwLCAwKTtcclxuICAgICAgICAgICAgY29uc3QgY29sUG9pbnQzOiBDb2xvcjMgPSBuZXcgQ29sb3IzKDAsIDAsIDApO1xyXG4gICAgICAgICAgICBsZXQgcG9pbnRDb2xvcnM6IENvbG9yNDtcclxuICAgICAgICAgICAgbGV0IHBhcnRpY2xlOiBDbG91ZFBvaW50O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHNHcm91cC5fZ3JvdXBEZW5zaXR5W2luZGV4XTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZHhQb2ludHMgPSB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRQYXJ0aWNsZShpZHhQb2ludHMsIHBvaW50c0dyb3VwLCB0aGlzLl9ncm91cENvdW50ZXIsIGluZGV4ICsgaSk7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzW2lkeFBvaW50c107XHJcbiAgICAgICAgICAgICAgICAvL2Zvcm0gYSBwb2ludCBpbnNpZGUgdGhlIGZhY2V0IHYwLCB2MSwgdjI7XHJcbiAgICAgICAgICAgICAgICBsYW1kYSA9IE1hdGguc3FydChSYW5kb21SYW5nZSgwLCAxKSk7XHJcbiAgICAgICAgICAgICAgICBtdSA9IFJhbmRvbVJhbmdlKDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgZmFjZXRQb2ludCA9IHZlcnRleDAuYWRkKHZlYzAuc2NhbGUobGFtZGEpKS5hZGQodmVjMS5zY2FsZShsYW1kYSAqIG11KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWb2x1bWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBub3JtID0gbWVzaC5nZXRGYWNldE5vcm1hbChpbmRleCkubm9ybWFsaXplKCkuc2NhbGUoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmcgPSB2ZWMwLmNsb25lKCkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmlOb3JtID0gVmVjdG9yMy5Dcm9zcyhub3JtLCB0YW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBhbmdsZSA9IFJhbmRvbVJhbmdlKDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgICAgICAgICBmYWNldFBsYW5lVmVjID0gdGFuZy5zY2FsZShNYXRoLmNvcyhhbmdsZSkpLmFkZChiaU5vcm0uc2NhbGUoTWF0aC5zaW4oYW5nbGUpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5nbGUgPSBSYW5kb21SYW5nZSgwLjEsIE1hdGguUEkgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBmYWNldFBsYW5lVmVjLnNjYWxlKE1hdGguY29zKGFuZ2xlKSkuYWRkKG5vcm0uc2NhbGUoTWF0aC5zaW4oYW5nbGUpKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJheS5vcmlnaW4gPSBmYWNldFBvaW50LmFkZChkaXJlY3Rpb24uc2NhbGUoMC4wMDAwMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJheS5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgcmF5Lmxlbmd0aCA9IGRpYW1ldGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBpY2tJbmZvID0gcmF5LmludGVyc2VjdHNNZXNoKG1lc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWNrSW5mby5oaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBwaWNrSW5mby5waWNrZWRQb2ludCEuc3VidHJhY3QoZmFjZXRQb2ludCkubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcCA9IFJhbmRvbVJhbmdlKDAsIDEpICogZGlzdGFuY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2V0UG9pbnQuYWRkSW5QbGFjZShkaXJlY3Rpb24uc2NhbGUoZ2FwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFydGljbGUucG9zaXRpb24gPSBmYWNldFBvaW50LmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3NpdGlvbnMucHVzaChwYXJ0aWNsZS5wb3NpdGlvbi54LCBwYXJ0aWNsZS5wb3NpdGlvbi55LCBwYXJ0aWNsZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xvckZyb21UZXh0dXJlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzaFVWKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV2UG9pbnQgPSB1djAuYWRkKHV2ZWMwLnNjYWxlKGxhbWRhKSkuYWRkKHV2ZWMxLnNjYWxlKGxhbWRhICogbXUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yRnJvbVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vU2V0IHBhcnRpY2xlIGNvbG9yIHRvIHRleHR1cmUgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNUZXh0dXJlICYmIHBvaW50c0dyb3VwLl9ncm91cEltYWdlRGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gcG9pbnRzR3JvdXAuX2dyb3VwSW1nV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gcG9pbnRzR3JvdXAuX2dyb3VwSW1nSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50Q29sb3JzID0gdGhpcy5fZ2V0Q29sb3JJbmRpY2VzRm9yQ29vcmQocG9pbnRzR3JvdXAsIE1hdGgucm91bmQodXZQb2ludC54ICogd2lkdGgpLCBNYXRoLnJvdW5kKHV2UG9pbnQueSAqIGhlaWdodCksIHdpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS5jb2xvciA9IHBvaW50Q29sb3JzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9ycy5wdXNoKHBvaW50Q29sb3JzLnIsIHBvaW50Q29sb3JzLmcsIHBvaW50Q29sb3JzLmIsIHBvaW50Q29sb3JzLmEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzaENvbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZhaWx1cmUgaW4gdGV4dHVyZSBhbmQgY29sb3JzIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xQb2ludCA9IGNvbDAuYWRkKGNvbHZlYzAuc2NhbGUobGFtZGEpKS5hZGQoY29sdmVjMS5zY2FsZShsYW1kYSAqIG11KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLmNvbG9yID0gbmV3IENvbG9yNChjb2xQb2ludC54LCBjb2xQb2ludC55LCBjb2xQb2ludC56LCBjb2xQb2ludC53KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sb3JzLnB1c2goY29sUG9pbnQueCwgY29sUG9pbnQueSwgY29sUG9pbnQueiwgY29sUG9pbnQudyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sUG9pbnQgPSBjb2wwLnNldChNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGUuY29sb3IgPSBuZXcgQ29sb3I0KGNvbFBvaW50LngsIGNvbFBvaW50LnksIGNvbFBvaW50LnosIGNvbFBvaW50LncpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xvcnMucHVzaChjb2xQb2ludC54LCBjb2xQb2ludC55LCBjb2xQb2ludC56LCBjb2xQb2ludC53KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1NldCBwYXJ0aWNsZSB1diBiYXNlZCBvbiBhIG1lc2ggdXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLnV2ID0gdXZQb2ludC5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXZzLnB1c2gocGFydGljbGUudXYueCwgcGFydGljbGUudXYueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZWRDb2xvci5zZXQoY29sb3IuciwgY29sb3IuZywgY29sb3IuYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhUyA9IFJhbmRvbVJhbmdlKC1yYW5nZSwgcmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YVYgPSBSYW5kb21SYW5nZSgtcmFuZ2UsIHJhbmdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHN2Q29sID0gc3RhdGVkQ29sb3IudG9IU1YoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IGhzdkNvbC5yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gaHN2Q29sLmcgKyBkZWx0YVM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBoc3ZDb2wuYiArIGRlbHRhVjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocyA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb2xvcjMuSFNWdG9SR0JUb1JlZihoLCBzLCB2LCBjb2xQb2ludDMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xQb2ludC5zZXQoY29sUG9pbnQzLnIsIGNvbFBvaW50My5nLCBjb2xQb2ludDMuYiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sUG9pbnQgPSBjb2wwLnNldChNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGUuY29sb3IgPSBuZXcgQ29sb3I0KGNvbFBvaW50LngsIGNvbFBvaW50LnksIGNvbFBvaW50LnosIGNvbFBvaW50LncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9ycy5wdXNoKGNvbFBvaW50LngsIGNvbFBvaW50LnksIGNvbFBvaW50LnosIGNvbFBvaW50LncpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHN0b3JlcyBtZXNoIHRleHR1cmUgaW4gZHluYW1pYyB0ZXh0dXJlIGZvciBjb2xvciBwaXhlbCByZXRyaWV2YWxcclxuICAgIC8vIHdoZW4gcG9pbnRDb2xvciB0eXBlIGlzIGNvbG9yIGZvciBzdXJmYWNlIHBvaW50c1xyXG4gICAgcHJpdmF0ZSBfY29sb3JGcm9tVGV4dHVyZShtZXNoOiBNZXNoLCBwb2ludHNHcm91cDogUG9pbnRzR3JvdXAsIGlzVm9sdW1lOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKG1lc2gubWF0ZXJpYWwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLldhcm4obWVzaC5uYW1lICsgXCJoYXMgbm8gbWF0ZXJpYWwuXCIpO1xyXG4gICAgICAgICAgICBwb2ludHNHcm91cC5fZ3JvdXBJbWFnZURhdGEgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRQb2ludHNDb2xvck9yVVYobWVzaCwgcG9pbnRzR3JvdXAsIGlzVm9sdW1lLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdCA9IG1lc2gubWF0ZXJpYWw7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZUxpc3Q6IEJhc2VUZXh0dXJlW10gPSBtYXQuZ2V0QWN0aXZlVGV4dHVyZXMoKTtcclxuICAgICAgICBpZiAodGV4dHVyZUxpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5XYXJuKG1lc2gubmFtZSArIFwiaGFzIG5vIHVzYWJsZSB0ZXh0dXJlLlwiKTtcclxuICAgICAgICAgICAgcG9pbnRzR3JvdXAuX2dyb3VwSW1hZ2VEYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fc2V0UG9pbnRzQ29sb3JPclVWKG1lc2gsIHBvaW50c0dyb3VwLCBpc1ZvbHVtZSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjbG9uZSA9IG1lc2guY2xvbmUoKTtcclxuICAgICAgICBjbG9uZS5zZXRFbmFibGVkKGZhbHNlKTtcclxuICAgICAgICB0aGlzLl9wcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKF86IHZvaWQpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIEJhc2VUZXh0dXJlLldoZW5BbGxSZWFkeSh0ZXh0dXJlTGlzdCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuID0gcG9pbnRzR3JvdXAuX3RleHR1cmVOYjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuID4gdGV4dHVyZUxpc3QubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuID0gdGV4dHVyZUxpc3QubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmluYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50c0dyb3VwLl9ncm91cEltZ1dpZHRoID0gdGV4dHVyZUxpc3Rbbl0uZ2V0U2l6ZSgpLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludHNHcm91cC5fZ3JvdXBJbWdIZWlnaHQgPSB0ZXh0dXJlTGlzdFtuXS5nZXRTaXplKCkuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRQb2ludHNDb2xvck9yVVYoY2xvbmUsIHBvaW50c0dyb3VwLCBpc1ZvbHVtZSwgdHJ1ZSwgdHJ1ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRleHR1cmVMaXN0W25dLmNvb3JkaW5hdGVzSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50c0dyb3VwLl9ncm91cEltYWdlRGF0YSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVByb21pc2UgPSB0ZXh0dXJlTGlzdFtuXS5yZWFkUGl4ZWxzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXMsIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQcm9taXNlLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50c0dyb3VwLl9ncm91cEltYWdlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGN1bGF0ZXMgdGhlIHBvaW50IGRlbnNpdHkgcGVyIGZhY2V0IG9mIGEgbWVzaCBmb3Igc3VyZmFjZSBwb2ludHNcclxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZURlbnNpdHkobmJQb2ludHM6IG51bWJlciwgcG9zaXRpb25zOiBGbG9hdEFycmF5LCBpbmRpY2VzOiBJbmRpY2VzQXJyYXkpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgbGV0IGlkMDogbnVtYmVyO1xyXG4gICAgICAgIGxldCBpZDE6IG51bWJlcjtcclxuICAgICAgICBsZXQgaWQyOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IHYwWDogbnVtYmVyO1xyXG4gICAgICAgIGxldCB2MFk6IG51bWJlcjtcclxuICAgICAgICBsZXQgdjBaOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IHYxWDogbnVtYmVyO1xyXG4gICAgICAgIGxldCB2MVk6IG51bWJlcjtcclxuICAgICAgICBsZXQgdjFaOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IHYyWDogbnVtYmVyO1xyXG4gICAgICAgIGxldCB2Mlk6IG51bWJlcjtcclxuICAgICAgICBsZXQgdjJaOiBudW1iZXI7XHJcbiAgICAgICAgY29uc3QgdmVydGV4MCA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IHZlcnRleDEgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXgyID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgY29uc3QgdmVjMCA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IHZlYzEgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICBjb25zdCBub3JtYWwgPSBWZWN0b3IzLlplcm8oKTtcclxuXHJcbiAgICAgICAgbGV0IGFyZWE6IG51bWJlcjtcclxuICAgICAgICBjb25zdCBjdW11bGF0aXZlQXJlYXM6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgbGV0IHN1cmZhY2VBcmVhOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBjb25zdCBuYkZhY2V0cyA9IGluZGljZXMubGVuZ3RoIC8gMztcclxuXHJcbiAgICAgICAgLy9zdXJmYWNlIGFyZWFcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbmJGYWNldHM7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWQwID0gaW5kaWNlc1szICogaW5kZXhdO1xyXG4gICAgICAgICAgICBpZDEgPSBpbmRpY2VzWzMgKiBpbmRleCArIDFdO1xyXG4gICAgICAgICAgICBpZDIgPSBpbmRpY2VzWzMgKiBpbmRleCArIDJdO1xyXG4gICAgICAgICAgICB2MFggPSBwb3NpdGlvbnNbMyAqIGlkMF07XHJcbiAgICAgICAgICAgIHYwWSA9IHBvc2l0aW9uc1szICogaWQwICsgMV07XHJcbiAgICAgICAgICAgIHYwWiA9IHBvc2l0aW9uc1szICogaWQwICsgMl07XHJcbiAgICAgICAgICAgIHYxWCA9IHBvc2l0aW9uc1szICogaWQxXTtcclxuICAgICAgICAgICAgdjFZID0gcG9zaXRpb25zWzMgKiBpZDEgKyAxXTtcclxuICAgICAgICAgICAgdjFaID0gcG9zaXRpb25zWzMgKiBpZDEgKyAyXTtcclxuICAgICAgICAgICAgdjJYID0gcG9zaXRpb25zWzMgKiBpZDJdO1xyXG4gICAgICAgICAgICB2MlkgPSBwb3NpdGlvbnNbMyAqIGlkMiArIDFdO1xyXG4gICAgICAgICAgICB2MlogPSBwb3NpdGlvbnNbMyAqIGlkMiArIDJdO1xyXG4gICAgICAgICAgICB2ZXJ0ZXgwLnNldCh2MFgsIHYwWSwgdjBaKTtcclxuICAgICAgICAgICAgdmVydGV4MS5zZXQodjFYLCB2MVksIHYxWik7XHJcbiAgICAgICAgICAgIHZlcnRleDIuc2V0KHYyWCwgdjJZLCB2MlopO1xyXG4gICAgICAgICAgICB2ZXJ0ZXgxLnN1YnRyYWN0VG9SZWYodmVydGV4MCwgdmVjMCk7XHJcbiAgICAgICAgICAgIHZlcnRleDIuc3VidHJhY3RUb1JlZih2ZXJ0ZXgxLCB2ZWMxKTtcclxuICAgICAgICAgICAgVmVjdG9yMy5Dcm9zc1RvUmVmKHZlYzAsIHZlYzEsIG5vcm1hbCk7XHJcbiAgICAgICAgICAgIGFyZWEgPSAwLjUgKiBub3JtYWwubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgIHN1cmZhY2VBcmVhICs9IGFyZWE7XHJcbiAgICAgICAgICAgIGN1bXVsYXRpdmVBcmVhc1tpbmRleF0gPSBzdXJmYWNlQXJlYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbnNpdHk6IG51bWJlcltdID0gbmV3IEFycmF5PG51bWJlcj4obmJGYWNldHMpO1xyXG4gICAgICAgIGxldCByZW1haW5pbmdQb2ludHMgPSBuYlBvaW50cztcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IG5iRmFjZXRzIC0gMTsgaW5kZXggPiAwOyBpbmRleC0tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1bXVsYXRpdmVBcmVhID0gY3VtdWxhdGl2ZUFyZWFzW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKGN1bXVsYXRpdmVBcmVhID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhdm9pZGluZyBkaXZpc2lvbiBieSAwIHVwb24gZGVnZW5lcmF0ZSB0cmlhbmdsZXNcclxuICAgICAgICAgICAgICAgIGRlbnNpdHlbaW5kZXhdID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZWEgPSBjdW11bGF0aXZlQXJlYSAtIGN1bXVsYXRpdmVBcmVhc1tpbmRleCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmFjZXRQb2ludHNXaXRoRnJhY3Rpb24gPSAoYXJlYSAvIGN1bXVsYXRpdmVBcmVhKSAqIHJlbWFpbmluZ1BvaW50cztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZsb29yZWQgPSBNYXRoLmZsb29yKGZhY2V0UG9pbnRzV2l0aEZyYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZyYWN0aW9uID0gZmFjZXRQb2ludHNXaXRoRnJhY3Rpb24gLSBmbG9vcmVkO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXh0cmFQb2ludCA9IE51bWJlcihNYXRoLnJhbmRvbSgpIDwgZnJhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmFjZXRQb2ludHMgPSBmbG9vcmVkICsgZXh0cmFQb2ludDtcclxuICAgICAgICAgICAgICAgIGRlbnNpdHlbaW5kZXhdID0gZmFjZXRQb2ludHM7XHJcbiAgICAgICAgICAgICAgICByZW1haW5pbmdQb2ludHMgLT0gZmFjZXRQb2ludHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVuc2l0eVswXSA9IHJlbWFpbmluZ1BvaW50cztcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlbnNpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHBvaW50cyB0byB0aGUgUENTIGluIHJhbmRvbSBwb3NpdGlvbnMgd2l0aGluIGEgdW5pdCBzcGhlcmVcclxuICAgICAqIEBwYXJhbSBuYiAocG9zaXRpdmUgaW50ZWdlcikgdGhlIG51bWJlciBvZiBwYXJ0aWNsZXMgdG8gYmUgY3JlYXRlZCBmcm9tIHRoaXMgbW9kZWxcclxuICAgICAqIEBwYXJhbSBwb2ludEZ1bmN0aW9uIGlzIGFuIG9wdGlvbmFsIGphdmFzY3JpcHQgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGZvciBlYWNoIHBhcnRpY2xlIG9uIFBDUyBjcmVhdGlvblxyXG4gICAgICogQHJldHVybnMgdGhlIG51bWJlciBvZiBncm91cHMgaW4gdGhlIHN5c3RlbVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkUG9pbnRzKG5iOiBudW1iZXIsIHBvaW50RnVuY3Rpb246IGFueSA9IHRoaXMuX3JhbmRvbVVuaXRWZWN0b3IpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHBvaW50c0dyb3VwID0gbmV3IFBvaW50c0dyb3VwKHRoaXMuX2dyb3VwQ291bnRlciwgcG9pbnRGdW5jdGlvbik7XHJcbiAgICAgICAgbGV0IGNwOiBDbG91ZFBvaW50O1xyXG5cclxuICAgICAgICAvLyBwYXJ0aWNsZXNcclxuICAgICAgICBsZXQgaWR4ID0gdGhpcy5uYlBhcnRpY2xlcztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iOyBpKyspIHtcclxuICAgICAgICAgICAgY3AgPSB0aGlzLl9hZGRQYXJ0aWNsZShpZHgsIHBvaW50c0dyb3VwLCB0aGlzLl9ncm91cENvdW50ZXIsIGkpO1xyXG4gICAgICAgICAgICBpZiAocG9pbnRzR3JvdXAgJiYgcG9pbnRzR3JvdXAuX3Bvc2l0aW9uRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHBvaW50c0dyb3VwLl9wb3NpdGlvbkZ1bmN0aW9uKGNwLCBpZHgsIGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9ucy5wdXNoKGNwLnBvc2l0aW9uLngsIGNwLnBvc2l0aW9uLnksIGNwLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICBpZiAoY3AuY29sb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9ycy5wdXNoKGNwLmNvbG9yLnIsIGNwLmNvbG9yLmcsIGNwLmNvbG9yLmIsIGNwLmNvbG9yLmEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjcC51dikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXZzLnB1c2goY3AudXYueCwgY3AudXYueSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWR4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubmJQYXJ0aWNsZXMgKz0gbmI7XHJcbiAgICAgICAgdGhpcy5fZ3JvdXBDb3VudGVyKys7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VwQ291bnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgcG9pbnRzIHRvIHRoZSBQQ1MgZnJvbSB0aGUgc3VyZmFjZSBvZiB0aGUgbW9kZWwgc2hhcGVcclxuICAgICAqIEBwYXJhbSBtZXNoIGlzIGFueSBNZXNoIG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBhIHN1cmZhY2UgbW9kZWwgZm9yIHRoZSBwb2ludHNcclxuICAgICAqIEBwYXJhbSBuYiAocG9zaXRpdmUgaW50ZWdlcikgdGhlIG51bWJlciBvZiBwYXJ0aWNsZXMgdG8gYmUgY3JlYXRlZCBmcm9tIHRoaXMgbW9kZWxcclxuICAgICAqIEBwYXJhbSBjb2xvcldpdGggZGV0ZXJtaW5lcyB3aGV0aGVyIGEgcG9pbnQgaXMgY29sb3JlZCB1c2luZyBjb2xvciAoZGVmYXVsdCksIHV2LCByYW5kb20sIHN0YXRlZCBvciBub25lIChpbnZpc2libGUpXHJcbiAgICAgKiBAcGFyYW0gY29sb3IgKGNvbG9yNCkgdG8gYmUgdXNlZCB3aGVuIGNvbG9yV2l0aCBpcyBzdGF0ZWQgb3IgY29sb3IgKG51bWJlcikgd2hlbiB1c2VkIHRvIHNwZWNpZnkgdGV4dHVyZSBwb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHJhbmdlIChudW1iZXIgZnJvbSAwIHRvIDEpIHRvIGRldGVybWluZSB0aGUgdmFyaWF0aW9uIGluIHNoYXBlIGFuZCB0b25lIGZvciBhIHN0YXRlZCBjb2xvclxyXG4gICAgICogQHJldHVybnMgdGhlIG51bWJlciBvZiBncm91cHMgaW4gdGhlIHN5c3RlbVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkU3VyZmFjZVBvaW50cyhtZXNoOiBNZXNoLCBuYjogbnVtYmVyLCBjb2xvcldpdGg/OiBudW1iZXIsIGNvbG9yPzogQ29sb3I0IHwgbnVtYmVyLCByYW5nZT86IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGNvbG9yZWQgPSBjb2xvcldpdGggPyBjb2xvcldpdGggOiBQb2ludENvbG9yLlJhbmRvbTtcclxuICAgICAgICBpZiAoaXNOYU4oY29sb3JlZCkgfHwgY29sb3JlZCA8IDAgfHwgY29sb3JlZCA+IDMpIHtcclxuICAgICAgICAgICAgY29sb3JlZCA9IFBvaW50Q29sb3IuUmFuZG9tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWVzaFBvcyA9IDxGbG9hdEFycmF5Pm1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQpO1xyXG4gICAgICAgIGNvbnN0IG1lc2hJbmQgPSA8SW5kaWNlc0FycmF5Pm1lc2guZ2V0SW5kaWNlcygpO1xyXG5cclxuICAgICAgICB0aGlzLl9ncm91cHMucHVzaCh0aGlzLl9ncm91cENvdW50ZXIpO1xyXG4gICAgICAgIGNvbnN0IHBvaW50c0dyb3VwID0gbmV3IFBvaW50c0dyb3VwKHRoaXMuX2dyb3VwQ291bnRlciwgbnVsbCk7XHJcblxyXG4gICAgICAgIHBvaW50c0dyb3VwLl9ncm91cERlbnNpdHkgPSB0aGlzLl9jYWxjdWxhdGVEZW5zaXR5KG5iLCBtZXNoUG9zLCBtZXNoSW5kKTtcclxuICAgICAgICBpZiAoY29sb3JlZCA9PT0gUG9pbnRDb2xvci5Db2xvcikge1xyXG4gICAgICAgICAgICBwb2ludHNHcm91cC5fdGV4dHVyZU5iID0gPG51bWJlcj5jb2xvciA/IDxudW1iZXI+Y29sb3IgOiAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gPENvbG9yND5jb2xvciA/IDxDb2xvcjQ+Y29sb3IgOiBuZXcgQ29sb3I0KDEsIDEsIDEsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKGNvbG9yZWQpIHtcclxuICAgICAgICAgICAgY2FzZSBQb2ludENvbG9yLkNvbG9yOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sb3JGcm9tVGV4dHVyZShtZXNoLCBwb2ludHNHcm91cCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUG9pbnRDb2xvci5VVjpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFBvaW50c0NvbG9yT3JVVihtZXNoLCBwb2ludHNHcm91cCwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQb2ludENvbG9yLlJhbmRvbTpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFBvaW50c0NvbG9yT3JVVihtZXNoLCBwb2ludHNHcm91cCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUG9pbnRDb2xvci5TdGF0ZWQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRQb2ludHNDb2xvck9yVVYobWVzaCwgcG9pbnRzR3JvdXAsIGZhbHNlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgPENvbG9yND5jb2xvciwgcmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubmJQYXJ0aWNsZXMgKz0gbmI7XHJcbiAgICAgICAgdGhpcy5fZ3JvdXBDb3VudGVyKys7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VwQ291bnRlciAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHBvaW50cyB0byB0aGUgUENTIGluc2lkZSB0aGUgbW9kZWwgc2hhcGVcclxuICAgICAqIEBwYXJhbSBtZXNoIGlzIGFueSBNZXNoIG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBhIHN1cmZhY2UgbW9kZWwgZm9yIHRoZSBwb2ludHNcclxuICAgICAqIEBwYXJhbSBuYiAocG9zaXRpdmUgaW50ZWdlcikgdGhlIG51bWJlciBvZiBwYXJ0aWNsZXMgdG8gYmUgY3JlYXRlZCBmcm9tIHRoaXMgbW9kZWxcclxuICAgICAqIEBwYXJhbSBjb2xvcldpdGggZGV0ZXJtaW5lcyB3aGV0aGVyIGEgcG9pbnQgaXMgY29sb3JlZCB1c2luZyBjb2xvciAoZGVmYXVsdCksIHV2LCByYW5kb20sIHN0YXRlZCBvciBub25lIChpbnZpc2libGUpXHJcbiAgICAgKiBAcGFyYW0gY29sb3IgKGNvbG9yNCkgdG8gYmUgdXNlZCB3aGVuIGNvbG9yV2l0aCBpcyBzdGF0ZWQgb3IgY29sb3IgKG51bWJlcikgd2hlbiB1c2VkIHRvIHNwZWNpZnkgdGV4dHVyZSBwb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHJhbmdlIChudW1iZXIgZnJvbSAwIHRvIDEpIHRvIGRldGVybWluZSB0aGUgdmFyaWF0aW9uIGluIHNoYXBlIGFuZCB0b25lIGZvciBhIHN0YXRlZCBjb2xvclxyXG4gICAgICogQHJldHVybnMgdGhlIG51bWJlciBvZiBncm91cHMgaW4gdGhlIHN5c3RlbVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkVm9sdW1lUG9pbnRzKG1lc2g6IE1lc2gsIG5iOiBudW1iZXIsIGNvbG9yV2l0aD86IG51bWJlciwgY29sb3I/OiBDb2xvcjQgfCBudW1iZXIsIHJhbmdlPzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgY29sb3JlZCA9IGNvbG9yV2l0aCA/IGNvbG9yV2l0aCA6IFBvaW50Q29sb3IuUmFuZG9tO1xyXG4gICAgICAgIGlmIChpc05hTihjb2xvcmVkKSB8fCBjb2xvcmVkIDwgMCB8fCBjb2xvcmVkID4gMykge1xyXG4gICAgICAgICAgICBjb2xvcmVkID0gUG9pbnRDb2xvci5SYW5kb207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtZXNoUG9zID0gPEZsb2F0QXJyYXk+bWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCk7XHJcbiAgICAgICAgY29uc3QgbWVzaEluZCA9IDxJbmRpY2VzQXJyYXk+bWVzaC5nZXRJbmRpY2VzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2dyb3Vwcy5wdXNoKHRoaXMuX2dyb3VwQ291bnRlcik7XHJcbiAgICAgICAgY29uc3QgcG9pbnRzR3JvdXAgPSBuZXcgUG9pbnRzR3JvdXAodGhpcy5fZ3JvdXBDb3VudGVyLCBudWxsKTtcclxuXHJcbiAgICAgICAgcG9pbnRzR3JvdXAuX2dyb3VwRGVuc2l0eSA9IHRoaXMuX2NhbGN1bGF0ZURlbnNpdHkobmIsIG1lc2hQb3MsIG1lc2hJbmQpO1xyXG4gICAgICAgIGlmIChjb2xvcmVkID09PSBQb2ludENvbG9yLkNvbG9yKSB7XHJcbiAgICAgICAgICAgIHBvaW50c0dyb3VwLl90ZXh0dXJlTmIgPSA8bnVtYmVyPmNvbG9yID8gPG51bWJlcj5jb2xvciA6IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3IgPSA8Q29sb3I0PmNvbG9yID8gPENvbG9yND5jb2xvciA6IG5ldyBDb2xvcjQoMSwgMSwgMSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoY29sb3JlZCkge1xyXG4gICAgICAgICAgICBjYXNlIFBvaW50Q29sb3IuQ29sb3I6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xvckZyb21UZXh0dXJlKG1lc2gsIHBvaW50c0dyb3VwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFBvaW50Q29sb3IuVVY6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRQb2ludHNDb2xvck9yVVYobWVzaCwgcG9pbnRzR3JvdXAsIHRydWUsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQb2ludENvbG9yLlJhbmRvbTpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFBvaW50c0NvbG9yT3JVVihtZXNoLCBwb2ludHNHcm91cCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQb2ludENvbG9yLlN0YXRlZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFBvaW50c0NvbG9yT3JVVihtZXNoLCBwb2ludHNHcm91cCwgdHJ1ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIDxDb2xvcjQ+Y29sb3IsIHJhbmdlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5iUGFydGljbGVzICs9IG5iO1xyXG4gICAgICAgIHRoaXMuX2dyb3VwQ291bnRlcisrO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cENvdW50ZXIgLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFNldHMgYWxsIHRoZSBwYXJ0aWNsZXMgOiB0aGlzIG1ldGhvZCBhY3R1YWxseSByZWFsbHkgdXBkYXRlcyB0aGUgbWVzaCBhY2NvcmRpbmcgdG8gdGhlIHBhcnRpY2xlIHBvc2l0aW9ucywgcm90YXRpb25zLCBjb2xvcnMsIHRleHR1cmVzLCBldGMuXHJcbiAgICAgKiAgVGhpcyBtZXRob2QgY2FsbHMgYHVwZGF0ZVBhcnRpY2xlKClgIGZvciBlYWNoIHBhcnRpY2xlIG9mIHRoZSBTUFMuXHJcbiAgICAgKiAgRm9yIGFuIGFuaW1hdGVkIFNQUywgaXQgaXMgdXN1YWxseSBjYWxsZWQgd2l0aGluIHRoZSByZW5kZXIgbG9vcC5cclxuICAgICAqIEBwYXJhbSBzdGFydCBUaGUgcGFydGljbGUgaW5kZXggaW4gdGhlIHBhcnRpY2xlIGFycmF5IHdoZXJlIHRvIHN0YXJ0IHRvIGNvbXB1dGUgdGhlIHBhcnRpY2xlIHByb3BlcnR5IHZhbHVlcyBfKGRlZmF1bHQgMClfXHJcbiAgICAgKiBAcGFyYW0gZW5kIFRoZSBwYXJ0aWNsZSBpbmRleCBpbiB0aGUgcGFydGljbGUgYXJyYXkgd2hlcmUgdG8gc3RvcCB0byBjb21wdXRlIHRoZSBwYXJ0aWNsZSBwcm9wZXJ0eSB2YWx1ZXMgXyhkZWZhdWx0IG5iUGFydGljbGUgLSAxKV9cclxuICAgICAqIEBwYXJhbSB1cGRhdGUgSWYgdGhlIG1lc2ggbXVzdCBiZSBmaW5hbGx5IHVwZGF0ZWQgb24gdGhpcyBjYWxsIGFmdGVyIGFsbCB0aGUgcGFydGljbGUgY29tcHV0YXRpb25zIF8oZGVmYXVsdCB0cnVlKV9cclxuICAgICAqIEByZXR1cm5zIHRoZSBQQ1MuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRQYXJ0aWNsZXMoc3RhcnQ6IG51bWJlciA9IDAsIGVuZDogbnVtYmVyID0gdGhpcy5uYlBhcnRpY2xlcyAtIDEsIHVwZGF0ZTogYm9vbGVhbiA9IHRydWUpOiBQb2ludHNDbG91ZFN5c3RlbSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl91cGRhdGFibGUgfHwgIXRoaXMuX2lzUmVhZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjdXN0b20gYmVmb3JlVXBkYXRlXHJcbiAgICAgICAgdGhpcy5iZWZvcmVVcGRhdGVQYXJ0aWNsZXMoc3RhcnQsIGVuZCwgdXBkYXRlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm90TWF0cml4ID0gVG1wVmVjdG9ycy5NYXRyaXhbMF07XHJcbiAgICAgICAgY29uc3QgbWVzaCA9IHRoaXMubWVzaDtcclxuICAgICAgICBjb25zdCBjb2xvcnMzMiA9IHRoaXMuX2NvbG9yczMyO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uczMyID0gdGhpcy5fcG9zaXRpb25zMzI7XHJcbiAgICAgICAgY29uc3QgdXZzMzIgPSB0aGlzLl91dnMzMjtcclxuXHJcbiAgICAgICAgY29uc3QgdGVtcFZlY3RvcnMgPSBUbXBWZWN0b3JzLlZlY3RvcjM7XHJcbiAgICAgICAgY29uc3QgY2FtQXhpc1ggPSB0ZW1wVmVjdG9yc1s1XS5jb3B5RnJvbUZsb2F0cygxLjAsIDAuMCwgMC4wKTtcclxuICAgICAgICBjb25zdCBjYW1BeGlzWSA9IHRlbXBWZWN0b3JzWzZdLmNvcHlGcm9tRmxvYXRzKDAuMCwgMS4wLCAwLjApO1xyXG4gICAgICAgIGNvbnN0IGNhbUF4aXNaID0gdGVtcFZlY3RvcnNbN10uY29weUZyb21GbG9hdHMoMC4wLCAwLjAsIDEuMCk7XHJcbiAgICAgICAgY29uc3QgbWluaW11bSA9IHRlbXBWZWN0b3JzWzhdLnNldEFsbChOdW1iZXIuTUFYX1ZBTFVFKTtcclxuICAgICAgICBjb25zdCBtYXhpbXVtID0gdGVtcFZlY3RvcnNbOV0uc2V0QWxsKC1OdW1iZXIuTUFYX1ZBTFVFKTtcclxuXHJcbiAgICAgICAgTWF0cml4LklkZW50aXR5VG9SZWYocm90TWF0cml4KTtcclxuICAgICAgICBsZXQgaWR4ID0gMDsgLy8gY3VycmVudCBpbmRleCBvZiB0aGUgcGFydGljbGVcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWVzaD8uaXNGYWNldERhdGFFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXB1dGVCb3VuZGluZ0JveCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbmQgPSBlbmQgPj0gdGhpcy5uYlBhcnRpY2xlcyA/IHRoaXMubmJQYXJ0aWNsZXMgLSAxIDogZW5kO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb21wdXRlQm91bmRpbmdCb3gpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ICE9IDAgfHwgZW5kICE9IHRoaXMubmJQYXJ0aWNsZXMgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvbmx5IHNvbWUgcGFydGljbGVzIGFyZSB1cGRhdGVkLCB0aGVuIHVzZSB0aGUgY3VycmVudCBleGlzdGluZyBCQm94IGJhc2lzLiBOb3RlIDogaXQgY2FuIG9ubHkgaW5jcmVhc2UuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3VuZGluZ0luZm8gPSB0aGlzLm1lc2g/LmdldEJvdW5kaW5nSW5mbygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvdW5kaW5nSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW0uY29weUZyb20oYm91bmRpbmdJbmZvLm1pbmltdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW0uY29weUZyb20oYm91bmRpbmdJbmZvLm1heGltdW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZHggPSAwOyAvLyBwYXJ0aWNsZSBpbmRleFxyXG4gICAgICAgIGxldCBwaW5kZXggPSAwOyAvL2luZGV4IGluIHBvc2l0aW9ucyBhcnJheVxyXG4gICAgICAgIGxldCBjaW5kZXggPSAwOyAvL2luZGV4IGluIGNvbG9yIGFycmF5XHJcbiAgICAgICAgbGV0IHVpbmRleCA9IDA7IC8vaW5kZXggaW4gdXYgYXJyYXlcclxuXHJcbiAgICAgICAgLy8gcGFydGljbGUgbG9vcFxyXG4gICAgICAgIGZvciAobGV0IHAgPSBzdGFydDsgcCA8PSBlbmQ7IHArKykge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzW3BdO1xyXG4gICAgICAgICAgICBpZHggPSBwYXJ0aWNsZS5pZHg7XHJcbiAgICAgICAgICAgIHBpbmRleCA9IDMgKiBpZHg7XHJcbiAgICAgICAgICAgIGNpbmRleCA9IDQgKiBpZHg7XHJcbiAgICAgICAgICAgIHVpbmRleCA9IDIgKiBpZHg7XHJcblxyXG4gICAgICAgICAgICAvLyBjYWxsIHRvIGN1c3RvbSB1c2VyIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgcGFydGljbGUgcHJvcGVydGllc1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhcnRpY2xlKHBhcnRpY2xlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRpY2xlUm90YXRpb25NYXRyaXggPSBwYXJ0aWNsZS5fcm90YXRpb25NYXRyaXg7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRpY2xlUG9zaXRpb24gPSBwYXJ0aWNsZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgY29uc3QgcGFydGljbGVHbG9iYWxQb3NpdGlvbiA9IHBhcnRpY2xlLl9nbG9iYWxQb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb21wdXRlUGFydGljbGVSb3RhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGUuZ2V0Um90YXRpb25NYXRyaXgocm90TWF0cml4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcGFydGljbGVIYXNQYXJlbnQgPSBwYXJ0aWNsZS5wYXJlbnRJZCAhPT0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHBhcnRpY2xlSGFzUGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcnRpY2xlc1twYXJ0aWNsZS5wYXJlbnRJZCFdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Um90YXRpb25NYXRyaXggPSBwYXJlbnQuX3JvdGF0aW9uTWF0cml4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50R2xvYmFsUG9zaXRpb24gPSBwYXJlbnQuX2dsb2JhbFBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdGF0ZWRZID0gcGFydGljbGVQb3NpdGlvbi54ICogcGFyZW50Um90YXRpb25NYXRyaXhbMV0gKyBwYXJ0aWNsZVBvc2l0aW9uLnkgKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs0XSArIHBhcnRpY2xlUG9zaXRpb24ueiAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzddO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm90YXRlZFggPSBwYXJ0aWNsZVBvc2l0aW9uLnggKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFswXSArIHBhcnRpY2xlUG9zaXRpb24ueSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzNdICsgcGFydGljbGVQb3NpdGlvbi56ICogcGFyZW50Um90YXRpb25NYXRyaXhbNl07XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3RhdGVkWiA9IHBhcnRpY2xlUG9zaXRpb24ueCAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzJdICsgcGFydGljbGVQb3NpdGlvbi55ICogcGFyZW50Um90YXRpb25NYXRyaXhbNV0gKyBwYXJ0aWNsZVBvc2l0aW9uLnogKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs4XTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZUdsb2JhbFBvc2l0aW9uLnggPSBwYXJlbnRHbG9iYWxQb3NpdGlvbi54ICsgcm90YXRlZFg7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZUdsb2JhbFBvc2l0aW9uLnkgPSBwYXJlbnRHbG9iYWxQb3NpdGlvbi55ICsgcm90YXRlZFk7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZUdsb2JhbFBvc2l0aW9uLnogPSBwYXJlbnRHbG9iYWxQb3NpdGlvbi56ICsgcm90YXRlZFo7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvbXB1dGVQYXJ0aWNsZVJvdGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm90TWF0cml4VmFsdWVzID0gcm90TWF0cml4Lm07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFswXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdE1hdHJpeFZhbHVlc1swXSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzBdICsgcm90TWF0cml4VmFsdWVzWzFdICogcGFyZW50Um90YXRpb25NYXRyaXhbM10gKyByb3RNYXRyaXhWYWx1ZXNbMl0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs2XTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzFdID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90TWF0cml4VmFsdWVzWzBdICogcGFyZW50Um90YXRpb25NYXRyaXhbMV0gKyByb3RNYXRyaXhWYWx1ZXNbMV0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs0XSArIHJvdE1hdHJpeFZhbHVlc1syXSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzddO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbMl0gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RNYXRyaXhWYWx1ZXNbMF0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFsyXSArIHJvdE1hdHJpeFZhbHVlc1sxXSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzVdICsgcm90TWF0cml4VmFsdWVzWzJdICogcGFyZW50Um90YXRpb25NYXRyaXhbOF07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFszXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdE1hdHJpeFZhbHVlc1s0XSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzBdICsgcm90TWF0cml4VmFsdWVzWzVdICogcGFyZW50Um90YXRpb25NYXRyaXhbM10gKyByb3RNYXRyaXhWYWx1ZXNbNl0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs2XTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzRdID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90TWF0cml4VmFsdWVzWzRdICogcGFyZW50Um90YXRpb25NYXRyaXhbMV0gKyByb3RNYXRyaXhWYWx1ZXNbNV0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs0XSArIHJvdE1hdHJpeFZhbHVlc1s2XSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzddO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbNV0gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RNYXRyaXhWYWx1ZXNbNF0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFsyXSArIHJvdE1hdHJpeFZhbHVlc1s1XSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzVdICsgcm90TWF0cml4VmFsdWVzWzZdICogcGFyZW50Um90YXRpb25NYXRyaXhbOF07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFs2XSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdE1hdHJpeFZhbHVlc1s4XSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzBdICsgcm90TWF0cml4VmFsdWVzWzldICogcGFyZW50Um90YXRpb25NYXRyaXhbM10gKyByb3RNYXRyaXhWYWx1ZXNbMTBdICogcGFyZW50Um90YXRpb25NYXRyaXhbNl07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFs3XSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdE1hdHJpeFZhbHVlc1s4XSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzFdICsgcm90TWF0cml4VmFsdWVzWzldICogcGFyZW50Um90YXRpb25NYXRyaXhbNF0gKyByb3RNYXRyaXhWYWx1ZXNbMTBdICogcGFyZW50Um90YXRpb25NYXRyaXhbN107XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFs4XSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdE1hdHJpeFZhbHVlc1s4XSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzJdICsgcm90TWF0cml4VmFsdWVzWzldICogcGFyZW50Um90YXRpb25NYXRyaXhbNV0gKyByb3RNYXRyaXhWYWx1ZXNbMTBdICogcGFyZW50Um90YXRpb25NYXRyaXhbOF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZUdsb2JhbFBvc2l0aW9uLnggPSAwO1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGVHbG9iYWxQb3NpdGlvbi55ID0gMDtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlR2xvYmFsUG9zaXRpb24ueiA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvbXB1dGVQYXJ0aWNsZVJvdGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm90TWF0cml4VmFsdWVzID0gcm90TWF0cml4Lm07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFswXSA9IHJvdE1hdHJpeFZhbHVlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzFdID0gcm90TWF0cml4VmFsdWVzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbMl0gPSByb3RNYXRyaXhWYWx1ZXNbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFszXSA9IHJvdE1hdHJpeFZhbHVlc1s0XTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzRdID0gcm90TWF0cml4VmFsdWVzWzVdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbNV0gPSByb3RNYXRyaXhWYWx1ZXNbNl07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFs2XSA9IHJvdE1hdHJpeFZhbHVlc1s4XTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzddID0gcm90TWF0cml4VmFsdWVzWzldO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbOF0gPSByb3RNYXRyaXhWYWx1ZXNbMTBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwaXZvdEJhY2tUcmFuc2xhdGlvbiA9IHRlbXBWZWN0b3JzWzExXTtcclxuICAgICAgICAgICAgaWYgKHBhcnRpY2xlLnRyYW5zbGF0ZUZyb21QaXZvdCkge1xyXG4gICAgICAgICAgICAgICAgcGl2b3RCYWNrVHJhbnNsYXRpb24uc2V0QWxsKDAuMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwaXZvdEJhY2tUcmFuc2xhdGlvbi5jb3B5RnJvbShwYXJ0aWNsZS5waXZvdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uc1xyXG4gICAgICAgICAgICBjb25zdCB0bXBWZXJ0ZXggPSB0ZW1wVmVjdG9yc1swXTtcclxuICAgICAgICAgICAgdG1wVmVydGV4LmNvcHlGcm9tKHBhcnRpY2xlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgdmVydGV4WCA9IHRtcFZlcnRleC54IC0gcGFydGljbGUucGl2b3QueDtcclxuICAgICAgICAgICAgY29uc3QgdmVydGV4WSA9IHRtcFZlcnRleC55IC0gcGFydGljbGUucGl2b3QueTtcclxuICAgICAgICAgICAgY29uc3QgdmVydGV4WiA9IHRtcFZlcnRleC56IC0gcGFydGljbGUucGl2b3QuejtcclxuXHJcbiAgICAgICAgICAgIGxldCByb3RhdGVkWCA9IHZlcnRleFggKiBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzBdICsgdmVydGV4WSAqIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbM10gKyB2ZXJ0ZXhaICogcGFydGljbGVSb3RhdGlvbk1hdHJpeFs2XTtcclxuICAgICAgICAgICAgbGV0IHJvdGF0ZWRZID0gdmVydGV4WCAqIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbMV0gKyB2ZXJ0ZXhZICogcGFydGljbGVSb3RhdGlvbk1hdHJpeFs0XSArIHZlcnRleFogKiBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzddO1xyXG4gICAgICAgICAgICBsZXQgcm90YXRlZFogPSB2ZXJ0ZXhYICogcGFydGljbGVSb3RhdGlvbk1hdHJpeFsyXSArIHZlcnRleFkgKiBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzVdICsgdmVydGV4WiAqIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbOF07XHJcblxyXG4gICAgICAgICAgICByb3RhdGVkWCArPSBwaXZvdEJhY2tUcmFuc2xhdGlvbi54O1xyXG4gICAgICAgICAgICByb3RhdGVkWSArPSBwaXZvdEJhY2tUcmFuc2xhdGlvbi55O1xyXG4gICAgICAgICAgICByb3RhdGVkWiArPSBwaXZvdEJhY2tUcmFuc2xhdGlvbi56O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHggPSAocG9zaXRpb25zMzJbcGluZGV4XSA9IHBhcnRpY2xlR2xvYmFsUG9zaXRpb24ueCArIGNhbUF4aXNYLnggKiByb3RhdGVkWCArIGNhbUF4aXNZLnggKiByb3RhdGVkWSArIGNhbUF4aXNaLnggKiByb3RhdGVkWik7XHJcbiAgICAgICAgICAgIGNvbnN0IHB5ID0gKHBvc2l0aW9uczMyW3BpbmRleCArIDFdID0gcGFydGljbGVHbG9iYWxQb3NpdGlvbi55ICsgY2FtQXhpc1gueSAqIHJvdGF0ZWRYICsgY2FtQXhpc1kueSAqIHJvdGF0ZWRZICsgY2FtQXhpc1oueSAqIHJvdGF0ZWRaKTtcclxuICAgICAgICAgICAgY29uc3QgcHogPSAocG9zaXRpb25zMzJbcGluZGV4ICsgMl0gPSBwYXJ0aWNsZUdsb2JhbFBvc2l0aW9uLnogKyBjYW1BeGlzWC56ICogcm90YXRlZFggKyBjYW1BeGlzWS56ICogcm90YXRlZFkgKyBjYW1BeGlzWi56ICogcm90YXRlZFopO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbXB1dGVCb3VuZGluZ0JveCkge1xyXG4gICAgICAgICAgICAgICAgbWluaW11bS5taW5pbWl6ZUluUGxhY2VGcm9tRmxvYXRzKHB4LCBweSwgcHopO1xyXG4gICAgICAgICAgICAgICAgbWF4aW11bS5tYXhpbWl6ZUluUGxhY2VGcm9tRmxvYXRzKHB4LCBweSwgcHopO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29tcHV0ZVBhcnRpY2xlQ29sb3IgJiYgcGFydGljbGUuY29sb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gcGFydGljbGUuY29sb3I7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvcnMzMiA9IHRoaXMuX2NvbG9yczMyO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzMzJbY2luZGV4XSA9IGNvbG9yLnI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMzMltjaW5kZXggKyAxXSA9IGNvbG9yLmc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMzMltjaW5kZXggKyAyXSA9IGNvbG9yLmI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMzMltjaW5kZXggKyAzXSA9IGNvbG9yLmE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbXB1dGVQYXJ0aWNsZVRleHR1cmUgJiYgcGFydGljbGUudXYpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHV2ID0gcGFydGljbGUudXY7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1dnMzMiA9IHRoaXMuX3V2czMyO1xyXG4gICAgICAgICAgICAgICAgdXZzMzJbdWluZGV4XSA9IHV2Lng7XHJcbiAgICAgICAgICAgICAgICB1dnMzMlt1aW5kZXggKyAxXSA9IHV2Lnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBWQk8gbXVzdCBiZSB1cGRhdGVkXHJcbiAgICAgICAgaWYgKG1lc2gpIHtcclxuICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvbXB1dGVQYXJ0aWNsZUNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzaC51cGRhdGVWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLkNvbG9yS2luZCwgY29sb3JzMzIsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29tcHV0ZVBhcnRpY2xlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc2gudXBkYXRlVmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5VVktpbmQsIHV2czMyLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWVzaC51cGRhdGVWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCwgcG9zaXRpb25zMzIsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb21wdXRlQm91bmRpbmdCb3gpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNoLmhhc0JvdW5kaW5nSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc2guZ2V0Qm91bmRpbmdJbmZvKCkucmVDb25zdHJ1Y3QobWluaW11bSwgbWF4aW11bSwgbWVzaC5fd29ybGRNYXRyaXgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNoLmJ1aWxkQm91bmRpbmdJbmZvKG1pbmltdW0sIG1heGltdW0sIG1lc2guX3dvcmxkTWF0cml4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFmdGVyVXBkYXRlUGFydGljbGVzKHN0YXJ0LCBlbmQsIHVwZGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlcyB0aGUgUENTLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lc2g/LmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLnZhcnMgPSBudWxsO1xyXG4gICAgICAgIC8vIGRyb3AgcmVmZXJlbmNlcyB0byBpbnRlcm5hbCBiaWcgYXJyYXlzIGZvciB0aGUgR0NcclxuICAgICAgICAoPGFueT50aGlzLl9wb3NpdGlvbnMpID0gbnVsbDtcclxuICAgICAgICAoPGFueT50aGlzLl9pbmRpY2VzKSA9IG51bGw7XHJcbiAgICAgICAgKDxhbnk+dGhpcy5fbm9ybWFscykgPSBudWxsO1xyXG4gICAgICAgICg8YW55PnRoaXMuX3V2cykgPSBudWxsO1xyXG4gICAgICAgICg8YW55PnRoaXMuX2NvbG9ycykgPSBudWxsO1xyXG4gICAgICAgICg8YW55PnRoaXMuX2luZGljZXMzMikgPSBudWxsO1xyXG4gICAgICAgICg8YW55PnRoaXMuX3Bvc2l0aW9uczMyKSA9IG51bGw7XHJcbiAgICAgICAgKDxhbnk+dGhpcy5fdXZzMzIpID0gbnVsbDtcclxuICAgICAgICAoPGFueT50aGlzLl9jb2xvcnMzMikgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmlzaWJpbGl0eSBoZWxwZXIgOiBSZWNvbXB1dGVzIHRoZSB2aXNpYmxlIHNpemUgYWNjb3JkaW5nIHRvIHRoZSBtZXNoIGJvdW5kaW5nIGJveFxyXG4gICAgICogZG9jIDpcclxuICAgICAqIEByZXR1cm5zIHRoZSBQQ1MuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWZyZXNoVmlzaWJsZVNpemUoKTogUG9pbnRzQ2xvdWRTeXN0ZW0ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNWaXNpYmlsaXR5Qm94TG9ja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzaD8ucmVmcmVzaEJvdW5kaW5nSW5mbygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFZpc2liaWxpdHkgaGVscGVyIDogU2V0cyB0aGUgc2l6ZSBvZiBhIHZpc2liaWxpdHkgYm94LCB0aGlzIHNldHMgdGhlIHVuZGVybHlpbmcgbWVzaCBib3VuZGluZyBib3guXHJcbiAgICAgKiBAcGFyYW0gc2l6ZSB0aGUgc2l6ZSAoZmxvYXQpIG9mIHRoZSB2aXNpYmlsaXR5IGJveFxyXG4gICAgICogbm90ZSA6IHRoaXMgZG9lc24ndCBsb2NrIHRoZSBQQ1MgbWVzaCBib3VuZGluZyBib3guXHJcbiAgICAgKiBkb2MgOlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VmlzaWJpbGl0eUJveChzaXplOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubWVzaCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2aXMgPSBzaXplIC8gMjtcclxuICAgICAgICB0aGlzLm1lc2guYnVpbGRCb3VuZGluZ0luZm8obmV3IFZlY3RvcjMoLXZpcywgLXZpcywgLXZpcyksIG5ldyBWZWN0b3IzKHZpcywgdmlzLCB2aXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgd2hldGhlciB0aGUgUENTIGlzIGFsd2F5cyB2aXNpYmxlIG9yIG5vdFxyXG4gICAgICogZG9jIDpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBpc0Fsd2F5c1Zpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fsd2F5c1Zpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBQQ1MgYXMgYWx3YXlzIHZpc2libGUgb3Igbm90XHJcbiAgICAgKiBkb2MgOlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGlzQWx3YXlzVmlzaWJsZSh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMubWVzaCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9hbHdheXNWaXNpYmxlID0gdmFsO1xyXG4gICAgICAgIHRoaXMubWVzaC5hbHdheXNTZWxlY3RBc0FjdGl2ZU1lc2ggPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUZWxscyB0byBgc2V0UGFydGljbGVzKClgIHRvIGNvbXB1dGUgdGhlIHBhcnRpY2xlIHJvdGF0aW9ucyBvciBub3RcclxuICAgICAqIERlZmF1bHQgdmFsdWUgOiBmYWxzZS4gVGhlIFBDUyBpcyBmYXN0ZXIgd2hlbiBpdCdzIHNldCB0byBmYWxzZVxyXG4gICAgICogTm90ZSA6IHBhcnRpY2xlIHJvdGF0aW9ucyBhcmUgb25seSBhcHBsaWVkIHRvIHBhcmVudCBwYXJ0aWNsZXNcclxuICAgICAqIE5vdGUgOiB0aGUgcGFydGljbGUgcm90YXRpb25zIGFyZW4ndCBzdG9yZWQgdmFsdWVzLCBzbyBzZXR0aW5nIGBjb21wdXRlUGFydGljbGVSb3RhdGlvbmAgdG8gZmFsc2Ugd2lsbCBwcmV2ZW50cyB0aGUgcGFydGljbGUgdG8gcm90YXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY29tcHV0ZVBhcnRpY2xlUm90YXRpb24odmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fY29tcHV0ZVBhcnRpY2xlUm90YXRpb24gPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUZWxscyB0byBgc2V0UGFydGljbGVzKClgIHRvIGNvbXB1dGUgdGhlIHBhcnRpY2xlIGNvbG9ycyBvciBub3QuXHJcbiAgICAgKiBEZWZhdWx0IHZhbHVlIDogdHJ1ZS4gVGhlIFBDUyBpcyBmYXN0ZXIgd2hlbiBpdCdzIHNldCB0byBmYWxzZS5cclxuICAgICAqIE5vdGUgOiB0aGUgcGFydGljbGUgY29sb3JzIGFyZSBzdG9yZWQgdmFsdWVzLCBzbyBzZXR0aW5nIGBjb21wdXRlUGFydGljbGVDb2xvcmAgdG8gZmFsc2Ugd2lsbCBrZWVwIHlldCB0aGUgbGFzdCBjb2xvcnMgc2V0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNvbXB1dGVQYXJ0aWNsZUNvbG9yKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2NvbXB1dGVQYXJ0aWNsZUNvbG9yID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgY29tcHV0ZVBhcnRpY2xlVGV4dHVyZSh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jb21wdXRlUGFydGljbGVUZXh0dXJlID0gdmFsO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGlmIGBzZXRQYXJ0aWNsZXMoKWAgY29tcHV0ZXMgdGhlIHBhcnRpY2xlIGNvbG9ycyBvciBub3QuXHJcbiAgICAgKiBEZWZhdWx0IHZhbHVlIDogZmFsc2UuIFRoZSBQQ1MgaXMgZmFzdGVyIHdoZW4gaXQncyBzZXQgdG8gZmFsc2UuXHJcbiAgICAgKiBOb3RlIDogdGhlIHBhcnRpY2xlIGNvbG9ycyBhcmUgc3RvcmVkIHZhbHVlcywgc28gc2V0dGluZyBgY29tcHV0ZVBhcnRpY2xlQ29sb3JgIHRvIGZhbHNlIHdpbGwga2VlcCB5ZXQgdGhlIGxhc3QgY29sb3JzIHNldC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjb21wdXRlUGFydGljbGVDb2xvcigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcHV0ZVBhcnRpY2xlQ29sb3I7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgaWYgYHNldFBhcnRpY2xlcygpYCBjb21wdXRlcyB0aGUgcGFydGljbGUgdGV4dHVyZXMgb3Igbm90LlxyXG4gICAgICogRGVmYXVsdCB2YWx1ZSA6IGZhbHNlLiBUaGUgUENTIGlzIGZhc3RlciB3aGVuIGl0J3Mgc2V0IHRvIGZhbHNlLlxyXG4gICAgICogTm90ZSA6IHRoZSBwYXJ0aWNsZSB0ZXh0dXJlcyBhcmUgc3RvcmVkIHZhbHVlcywgc28gc2V0dGluZyBgY29tcHV0ZVBhcnRpY2xlVGV4dHVyZWAgdG8gZmFsc2Ugd2lsbCBrZWVwIHlldCB0aGUgbGFzdCBjb2xvcnMgc2V0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvbXB1dGVQYXJ0aWNsZVRleHR1cmUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXB1dGVQYXJ0aWNsZVRleHR1cmU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRlbGxzIHRvIGBzZXRQYXJ0aWNsZXMoKWAgdG8gY29tcHV0ZSBvciBub3QgdGhlIG1lc2ggYm91bmRpbmcgYm94IHdoZW4gY29tcHV0aW5nIHRoZSBwYXJ0aWNsZSBwb3NpdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY29tcHV0ZUJvdW5kaW5nQm94KHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2NvbXB1dGVCb3VuZGluZ0JveCA9IHZhbDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBpZiBgc2V0UGFydGljbGVzKClgIGNvbXB1dGVzIG9yIG5vdCB0aGUgbWVzaCBib3VuZGluZyBib3ggd2hlbiBjb21wdXRpbmcgdGhlIHBhcnRpY2xlIHBvc2l0aW9ucy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjb21wdXRlQm91bmRpbmdCb3goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXB1dGVCb3VuZGluZ0JveDtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUGFydGljbGUgYmVoYXZpb3IgbG9naWNcclxuICAgIC8vIHRoZXNlIGZvbGxvd2luZyBtZXRob2RzIG1heSBiZSBvdmVyd3JpdHRlbiBieSB1c2VycyB0byBmaXQgdGhlaXIgbmVlZHNcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gZG9lcyBub3RoaW5nLiBJdCBtYXkgYmUgb3ZlcndyaXR0ZW4gdG8gc2V0IGFsbCB0aGUgcGFydGljbGUgZmlyc3QgdmFsdWVzLlxyXG4gICAgICogVGhlIFBDUyBkb2Vzbid0IGNhbGwgdGhpcyBmdW5jdGlvbiwgeW91IG1heSBoYXZlIHRvIGNhbGwgaXQgYnkgeW91ciBvd24uXHJcbiAgICAgKiBkb2MgOlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdFBhcnRpY2xlcygpOiB2b2lkIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90aGluZy4gSXQgbWF5IGJlIG92ZXJ3cml0dGVuIHRvIHJlY3ljbGUgYSBwYXJ0aWNsZVxyXG4gICAgICogVGhlIFBDUyBkb2Vzbid0IGNhbGwgdGhpcyBmdW5jdGlvbiwgeW91IGNhbiB0byBjYWxsIGl0XHJcbiAgICAgKiBkb2MgOlxyXG4gICAgICogQHBhcmFtIHBhcnRpY2xlIFRoZSBwYXJ0aWNsZSB0byByZWN5Y2xlXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgcmVjeWNsZWQgcGFydGljbGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlY3ljbGVQYXJ0aWNsZShwYXJ0aWNsZTogQ2xvdWRQb2ludCk6IENsb3VkUG9pbnQge1xyXG4gICAgICAgIHJldHVybiBwYXJ0aWNsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgYSBwYXJ0aWNsZSA6IHRoaXMgZnVuY3Rpb24gc2hvdWxkICBiZSBvdmVyd3JpdHRlbiBieSB0aGUgdXNlci5cclxuICAgICAqIEl0IGlzIGNhbGxlZCBvbiBlYWNoIHBhcnRpY2xlIGJ5IGBzZXRQYXJ0aWNsZXMoKWAuIFRoaXMgaXMgdGhlIHBsYWNlIHRvIGNvZGUgZWFjaCBwYXJ0aWNsZSBiZWhhdmlvci5cclxuICAgICAqIGRvYyA6XHJcbiAgICAgKiBAZXhhbXBsZSA6IGp1c3Qgc2V0IGEgcGFydGljbGUgcG9zaXRpb24gb3IgdmVsb2NpdHkgYW5kIHJlY3ljbGUgY29uZGl0aW9uc1xyXG4gICAgICogQHBhcmFtIHBhcnRpY2xlIFRoZSBwYXJ0aWNsZSB0byB1cGRhdGVcclxuICAgICAqIEByZXR1cm5zIHRoZSB1cGRhdGVkIHBhcnRpY2xlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVQYXJ0aWNsZShwYXJ0aWNsZTogQ2xvdWRQb2ludCk6IENsb3VkUG9pbnQge1xyXG4gICAgICAgIHJldHVybiBwYXJ0aWNsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGFueSBvdGhlciB0cmVhdG1lbnQgYnkgYHNldFBhcnRpY2xlcygpYCBhbmQgd2lsbCBiZSBwYXNzZWQgdGhyZWUgcGFyYW1ldGVycy5cclxuICAgICAqIFRoaXMgZG9lcyBub3RoaW5nIGFuZCBtYXkgYmUgb3ZlcndyaXR0ZW4gYnkgdGhlIHVzZXIuXHJcbiAgICAgKiBAcGFyYW0gc3RhcnQgdGhlIHBhcnRpY2xlIGluZGV4IGluIHRoZSBwYXJ0aWNsZSBhcnJheSB3aGVyZSB0byBzdGFydCB0byBpdGVyYXRlLCBzYW1lIHRoYW4gdGhlIHZhbHVlIHBhc3NlZCB0byBzZXRQYXJ0aWNsZSgpXHJcbiAgICAgKiBAcGFyYW0gc3RvcCB0aGUgcGFydGljbGUgaW5kZXggaW4gdGhlIHBhcnRpY2xlIGFycmF5IHdoZXJlIHRvIHN0b3AgdG8gaXRlcmF0ZSwgc2FtZSB0aGFuIHRoZSB2YWx1ZSBwYXNzZWQgdG8gc2V0UGFydGljbGUoKVxyXG4gICAgICogQHBhcmFtIHVwZGF0ZSB0aGUgYm9vbGVhbiB1cGRhdGUgdmFsdWUgYWN0dWFsbHkgcGFzc2VkIHRvIHNldFBhcnRpY2xlcygpXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuICAgIHB1YmxpYyBiZWZvcmVVcGRhdGVQYXJ0aWNsZXMoc3RhcnQ/OiBudW1iZXIsIHN0b3A/OiBudW1iZXIsIHVwZGF0ZT86IGJvb2xlYW4pOiB2b2lkIHt9XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgIGJ5IGBzZXRQYXJ0aWNsZXMoKWAgYWZ0ZXIgYWxsIHRoZSBvdGhlciB0cmVhdG1lbnRzIGFuZCBqdXN0IGJlZm9yZSB0aGUgYWN0dWFsIG1lc2ggdXBkYXRlLlxyXG4gICAgICogVGhpcyB3aWxsIGJlIHBhc3NlZCB0aHJlZSBwYXJhbWV0ZXJzLlxyXG4gICAgICogVGhpcyBkb2VzIG5vdGhpbmcgYW5kIG1heSBiZSBvdmVyd3JpdHRlbiBieSB0aGUgdXNlci5cclxuICAgICAqIEBwYXJhbSBzdGFydCB0aGUgcGFydGljbGUgaW5kZXggaW4gdGhlIHBhcnRpY2xlIGFycmF5IHdoZXJlIHRvIHN0YXJ0IHRvIGl0ZXJhdGUsIHNhbWUgdGhhbiB0aGUgdmFsdWUgcGFzc2VkIHRvIHNldFBhcnRpY2xlKClcclxuICAgICAqIEBwYXJhbSBzdG9wIHRoZSBwYXJ0aWNsZSBpbmRleCBpbiB0aGUgcGFydGljbGUgYXJyYXkgd2hlcmUgdG8gc3RvcCB0byBpdGVyYXRlLCBzYW1lIHRoYW4gdGhlIHZhbHVlIHBhc3NlZCB0byBzZXRQYXJ0aWNsZSgpXHJcbiAgICAgKiBAcGFyYW0gdXBkYXRlIHRoZSBib29sZWFuIHVwZGF0ZSB2YWx1ZSBhY3R1YWxseSBwYXNzZWQgdG8gc2V0UGFydGljbGVzKClcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4gICAgcHVibGljIGFmdGVyVXBkYXRlUGFydGljbGVzKHN0YXJ0PzogbnVtYmVyLCBzdG9wPzogbnVtYmVyLCB1cGRhdGU/OiBib29sZWFuKTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElQYXJzZWRQTFkgfSBmcm9tIFwiLi9zcGxhdERlZnNcIjtcclxuaW1wb3J0IHsgTW9kZSB9IGZyb20gXCIuL3NwbGF0RGVmc1wiO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnNjYWxhclwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0RW5naW5lIH0gZnJvbSBcImNvcmUvRW5naW5lc1wiO1xyXG5cclxuLyoqXHJcbiAqIERlZmluaXRpb24gb2YgYSBTT0cgZGF0YSBmaWxlXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBpbnRlcmZhY2UgU09HRGF0YUZpbGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBpbmRleCAwIGlzIG51bWJlciBvZiBzcGxhdHMgaW5kZXggMSBpcyBudW1iZXIgb2YgY29tcG9uZW50cyBwZXIgc3BsYXQgKDMgZm9yIHZlYzMsIDQgZm9yIHZlYzQsIGV0Yy4pXHJcbiAgICAgKi9cclxuICAgIHNoYXBlOiBudW1iZXJbXTtcclxuICAgIC8qKlxyXG4gICAgICogdHlwZSBvZiBjb21wb25lbnRzXHJcbiAgICAgKi9cclxuICAgIGR0eXBlOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIG1pbiByYW5nZSBvZiBkYXRhXHJcbiAgICAgKi9cclxuICAgIG1pbnM/OiBudW1iZXIgfCBudW1iZXJbXTtcclxuICAgIC8qKlxyXG4gICAgICogbWF4IHJhbmdlIG9mIGRhdGFcclxuICAgICAqL1xyXG4gICAgbWF4cz86IG51bWJlciB8IG51bWJlcltdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBwYWxldHRlIGZvciBpbmRleGVkIGRhdGEgKHF1YW50aXplZClcclxuICAgICAqL1xyXG4gICAgY29kZWJvb2s/OiBudW1iZXJbXTsgLy8gT25seSBmb3IgdmVyc2lvbiAyXHJcbiAgICAvKipcclxuICAgICAqIHR5cGUgb2YgZW5jb2RpbmdcclxuICAgICAqL1xyXG4gICAgZW5jb2Rpbmc/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIG51bWJlciBvZiBiaXRzIGZvciBxdWFudGl6YXRpb24gKGlmIGFueSlcclxuICAgICAqL1xyXG4gICAgcXVhbnRpemF0aW9uPzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiB3ZWJwIGZpbGUgbmFtZXNcclxuICAgICAqL1xyXG4gICAgZmlsZXM6IHN0cmluZ1tdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTSCBiYW5kIGNvdW50IChpZiBhcHBsaWNhYmxlKVxyXG4gICAgICovXHJcbiAgICBiYW5kcz86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluaXRpb24gb2YgdGhlIHJvb3QgU09HIGRhdGEgZmlsZVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgaW50ZXJmYWNlIFNPR1Jvb3REYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogdmVyc2lvbiBvZiB0aGUgU09HIGZvcm1hdFxyXG4gICAgICovXHJcbiAgICB2ZXJzaW9uPzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtZWFuIHBvc2l0aW9ucyBvZiB0aGUgc3BsYXRzXHJcbiAgICAgKi9cclxuICAgIG1lYW5zOiBTT0dEYXRhRmlsZTtcclxuICAgIC8qKlxyXG4gICAgICogc2NhbGVzIG9mIHRoZSBzcGxhdHNcclxuICAgICAqL1xyXG4gICAgc2NhbGVzOiBTT0dEYXRhRmlsZTtcclxuICAgIC8qKlxyXG4gICAgICogcXVhdGVybmlvbnMgb2YgdGhlIHNwbGF0c1xyXG4gICAgICovXHJcbiAgICBxdWF0czogU09HRGF0YUZpbGU7XHJcbiAgICAvKipcclxuICAgICAqIFNIMCBjb2VmZmljaWVudHMgb2YgdGhlIHNwbGF0cyAoYmFzZSBjb2xvcilcclxuICAgICAqL1xyXG4gICAgc2gwOiBTT0dEYXRhRmlsZTtcclxuICAgIC8qKlxyXG4gICAgICogIE9wdGlvbmFsIGhpZ2hlciBvcmRlciBTSCBjb2VmZmljaWVudHMgb2YgdGhlIHNwbGF0cyAobGlnaHRpbmcgaW5mb3JtYXRpb24pXHJcbiAgICAgKi9cclxuICAgIHNoTj86IFNPR0RhdGFGaWxlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBudW1iZXIgb2Ygc3BsYXRzIChvcHRpb25hbCwgY2FuIGJlIGluZmVycmVkIGZyb20gbWVhbnMuc2hhcGVbMF0pXHJcbiAgICAgKi9cclxuICAgIGNvdW50PzogbnVtYmVyO1xyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmludGVyZmFjZSBJV2ViUEltYWdlIHtcclxuICAgIGJpdHM6IFVpbnQ4QXJyYXk7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG59XHJcbmNvbnN0IFNIX0MwID0gMC4yODIwOTQ3OTE3NzM4NzgxNDtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIExvYWRXZWJwSW1hZ2VEYXRhKHJvb3RVcmxPckRhdGE6IHN0cmluZyB8IFVpbnQ4QXJyYXksIGZpbGVuYW1lOiBzdHJpbmcsIGVuZ2luZTogQWJzdHJhY3RFbmdpbmUpOiBQcm9taXNlPElXZWJQSW1hZ2U+IHtcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxJV2ViUEltYWdlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBlbmdpbmUuY3JlYXRlQ2FudmFzSW1hZ2UoKTtcclxuICAgICAgICBpZiAoIWltYWdlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgSW1hZ2VCaXRtYXBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIERyYXcgdG8gY2FudmFzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW52YXMgPSBlbmdpbmUuY3JlYXRlQ2FudmFzKGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjYW52YXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGNhbnZhc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN0eCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgMkQgY29udGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgcGl4ZWwgZGF0YSAoUkdCQSBwZXIgcGl4ZWwpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgYml0czogbmV3IFVpbnQ4QXJyYXkoaW1hZ2VEYXRhLmRhdGEuYnVmZmVyKSwgd2lkdGg6IGltYWdlRGF0YS53aWR0aCB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGBFcnJvciBsb2FkaW5nIGltYWdlICR7aW1hZ2Uuc3JjfSB3aXRoIGV4Y2VwdGlvbjogJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnNcclxuICAgICAgICAgICAgcmVqZWN0KGBFcnJvciBsb2FkaW5nIGltYWdlICR7aW1hZ2Uuc3JjfSB3aXRoIGV4Y2VwdGlvbjogJHtlcnJvcn1gKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCI7IC8vIFRvIGF2b2lkIENPUlMgaXNzdWVzXHJcbiAgICAgICAgbGV0IG9iamVjdFVybDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygcm9vdFVybE9yRGF0YSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAvLyBvbGQgYmVoYXZpb3I6IFVSTCArIGZpbGVuYW1lXHJcbiAgICAgICAgICAgIGlmICghZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZpbGVuYW1lIGlzIHJlcXVpcmVkIHdoZW4gdXNpbmcgYSBVUkxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gcm9vdFVybE9yRGF0YSArIGZpbGVuYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIG5ldyBiZWhhdmlvcjogVWludDhBcnJheVxyXG4gICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jvb3RVcmxPckRhdGEgYXMgYW55XSwgeyB0eXBlOiBcImltYWdlL3dlYnBcIiB9KTtcclxuICAgICAgICAgICAgb2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gb2JqZWN0VXJsO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGF3YWl0IHByb21pc2U7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFBhcnNlU29nRGF0YXMoZGF0YTogU09HUm9vdERhdGEsIGltYWdlRGF0YUFycmF5czogSVdlYlBJbWFnZVtdLCBzY2VuZTogU2NlbmUpOiBQcm9taXNlPElQYXJzZWRQTFk+IHtcclxuICAgIGNvbnN0IHNwbGF0Q291bnQgPSBkYXRhLmNvdW50ID8gZGF0YS5jb3VudCA6IGRhdGEubWVhbnMuc2hhcGVbMF07XHJcbiAgICBjb25zdCByb3dPdXRwdXRMZW5ndGggPSAzICogNCArIDMgKiA0ICsgNCArIDQ7IC8vIDMyXHJcbiAgICBjb25zdCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIocm93T3V0cHV0TGVuZ3RoICogc3BsYXRDb3VudCk7XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlcik7XHJcbiAgICBjb25zdCBzY2FsZSA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKTtcclxuICAgIGNvbnN0IHJnYmEgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoYnVmZmVyKTtcclxuICAgIGNvbnN0IHJvdCA9IG5ldyBVaW50OENsYW1wZWRBcnJheShidWZmZXIpO1xyXG5cclxuICAgIC8vIFVuZG8gdGhlIHN5bW1ldHJpYyBsb2cgdHJhbnNmb3JtIHVzZWQgYXQgZW5jb2RlIHRpbWU6XHJcbiAgICBjb25zdCB1bmxvZyA9IChuOiBudW1iZXIpID0+IE1hdGguc2lnbihuKSAqIChNYXRoLmV4cChNYXRoLmFicyhuKSkgLSAxKTtcclxuXHJcbiAgICBjb25zdCBtZWFuc2wgPSBpbWFnZURhdGFBcnJheXNbMF0uYml0cztcclxuICAgIGNvbnN0IG1lYW5zdSA9IGltYWdlRGF0YUFycmF5c1sxXS5iaXRzO1xyXG4gICAgLy8gQ2hlY2sgdGhhdCBkYXRhLm1lYW5zLm1pbnMgaXMgYW4gYXJyYXlcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLm1lYW5zLm1pbnMpIHx8ICFBcnJheS5pc0FycmF5KGRhdGEubWVhbnMubWF4cykpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGFycmF5cyBpbiBTT0cgZGF0YS5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tIFBvc2l0aW9uc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGkgKiA0O1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lYW5zTWluID0gZGF0YS5tZWFucy5taW5zW2pdO1xyXG4gICAgICAgICAgICBjb25zdCBtZWFuc01heCA9IGRhdGEubWVhbnMubWF4c1tqXTtcclxuICAgICAgICAgICAgY29uc3QgbWVhbnN1cCA9IG1lYW5zdVtpbmRleCArIGpdO1xyXG4gICAgICAgICAgICBjb25zdCBtZWFuc2xvdyA9IG1lYW5zbFtpbmRleCArIGpdO1xyXG4gICAgICAgICAgICBjb25zdCBxID0gKG1lYW5zdXAgPDwgOCkgfCBtZWFuc2xvdztcclxuICAgICAgICAgICAgY29uc3QgbiA9IFNjYWxhci5MZXJwKG1lYW5zTWluLCBtZWFuc01heCwgcSAvIDY1NTM1KTtcclxuICAgICAgICAgICAgcG9zaXRpb25baSAqIDggKyBqXSA9IHVubG9nKG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gU2NhbGVzXHJcbiAgICBjb25zdCBzY2FsZXMgPSBpbWFnZURhdGFBcnJheXNbMl0uYml0cztcclxuICAgIGlmIChkYXRhLnZlcnNpb24gPT09IDIpIHtcclxuICAgICAgICBpZiAoIWRhdGEuc2NhbGVzLmNvZGVib29rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgY29kZWJvb2sgaW4gU09HIHZlcnNpb24gMiBzY2FsZXMgZGF0YS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsYXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaSAqIDQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzYyA9IGRhdGEuc2NhbGVzLmNvZGVib29rW3NjYWxlc1tpbmRleCArIGpdXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjZSA9IE1hdGguZXhwKHNjKTtcclxuICAgICAgICAgICAgICAgIHNjYWxlW2kgKiA4ICsgMyArIGpdID0gc2NlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5zY2FsZXMubWlucykgfHwgIUFycmF5LmlzQXJyYXkoZGF0YS5zY2FsZXMubWF4cykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBhcnJheXMgaW4gU09HIHNjYWxlcyBkYXRhLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsYXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaSAqIDQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzYyA9IHNjYWxlc1tpbmRleCArIGpdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbHNjID0gU2NhbGFyLkxlcnAoZGF0YS5zY2FsZXMubWluc1tqXSwgZGF0YS5zY2FsZXMubWF4c1tqXSwgc2MgLyAyNTUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbHNjZSA9IE1hdGguZXhwKGxzYyk7XHJcbiAgICAgICAgICAgICAgICBzY2FsZVtpICogOCArIDMgKyBqXSA9IGxzY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tIENvbG9ycy9TSDBcclxuICAgIGNvbnN0IGNvbG9ycyA9IGltYWdlRGF0YUFycmF5c1s0XS5iaXRzO1xyXG4gICAgaWYgKGRhdGEudmVyc2lvbiA9PT0gMikge1xyXG4gICAgICAgIGlmICghZGF0YS5zaDAuY29kZWJvb2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBjb2RlYm9vayBpbiBTT0cgdmVyc2lvbiAyIHNoMCBkYXRhLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpICogNDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IDAuNSArIGRhdGEuc2gwLmNvZGVib29rW2NvbG9yc1tpbmRleCArIGpdXSAqIFNIX0MwO1xyXG4gICAgICAgICAgICAgICAgcmdiYVtpICogMzIgKyAyNCArIGpdID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBNYXRoLnJvdW5kKDI1NSAqIGNvbXBvbmVudCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZ2JhW2kgKiAzMiArIDI0ICsgM10gPSBjb2xvcnNbaW5kZXggKyAzXTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLnNoMC5taW5zKSB8fCAhQXJyYXkuaXNBcnJheShkYXRhLnNoMC5tYXhzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGFycmF5cyBpbiBTT0cgc2gwIGRhdGEuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGF0Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGkgKiA0O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JzTWluID0gZGF0YS5zaDAubWluc1tqXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yc01heCA9IGRhdGEuc2gwLm1heHNbal07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3J0ID0gY29sb3JzW2luZGV4ICsgal07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gU2NhbGFyLkxlcnAoY29sb3JzTWluLCBjb2xvcnNNYXgsIGNvbG9ydCAvIDI1NSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNzaDtcclxuICAgICAgICAgICAgICAgIGlmIChqIDwgMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNzaCA9IDAuNSArIGMgKiBTSF9DMDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3NoID0gMS4wIC8gKDEuMCArIE1hdGguZXhwKC1jKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmdiYVtpICogMzIgKyAyNCArIGpdID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBNYXRoLnJvdW5kKDI1NSAqIGNzaCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gUm90YXRpb25zXHJcbiAgICAvLyBEZXF1YW50aXplIHRoZSBzdG9yZWQgdGhyZWUgY29tcG9uZW50czpcclxuICAgIGNvbnN0IHRvQ29tcCA9IChjOiBudW1iZXIpID0+ICgoYyAvIDI1NSAtIDAuNSkgKiAyLjApIC8gTWF0aC5TUVJUMjtcclxuXHJcbiAgICBjb25zdCBxdWF0QXJyYXkgPSBpbWFnZURhdGFBcnJheXNbM10uYml0cztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsYXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcXVhdHNyID0gcXVhdEFycmF5W2kgKiA0ICsgMF07XHJcbiAgICAgICAgY29uc3QgcXVhdHNnID0gcXVhdEFycmF5W2kgKiA0ICsgMV07XHJcbiAgICAgICAgY29uc3QgcXVhdHNiID0gcXVhdEFycmF5W2kgKiA0ICsgMl07XHJcbiAgICAgICAgY29uc3QgcXVhdHNhID0gcXVhdEFycmF5W2kgKiA0ICsgM107XHJcblxyXG4gICAgICAgIGNvbnN0IGEgPSB0b0NvbXAocXVhdHNyKTtcclxuICAgICAgICBjb25zdCBiID0gdG9Db21wKHF1YXRzZyk7XHJcbiAgICAgICAgY29uc3QgYyA9IHRvQ29tcChxdWF0c2IpO1xyXG5cclxuICAgICAgICBjb25zdCBtb2RlID0gcXVhdHNhIC0gMjUyOyAvLyAwLi4zIChSLEcsQixBIGlzIG9uZSBvZiB0aGUgZm91ciBjb21wb25lbnRzKVxyXG5cclxuICAgICAgICAvLyBSZWNvbnN0cnVjdCB0aGUgb21pdHRlZCBjb21wb25lbnQgc28gdGhhdCB8fHF8fCA9IDEgYW5kIHcubC5vLmcuIHRoZSBvbWl0dGVkIG9uZSBpcyBub24tbmVnYXRpdmVcclxuICAgICAgICBjb25zdCB0ID0gYSAqIGEgKyBiICogYiArIGMgKiBjO1xyXG4gICAgICAgIGNvbnN0IGQgPSBNYXRoLnNxcnQoTWF0aC5tYXgoMCwgMSAtIHQpKTtcclxuXHJcbiAgICAgICAgLy8gUGxhY2UgY29tcG9uZW50cyBhY2NvcmRpbmcgdG8gbW9kZVxyXG4gICAgICAgIGxldCBxOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgcSA9IFtkLCBhLCBiLCBjXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBvbWl0dGVkID0geFxyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBxID0gW2EsIGQsIGIsIGNdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vIG9taXR0ZWQgPSB5XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHEgPSBbYSwgYiwgZCwgY107XHJcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gb21pdHRlZCA9IHpcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgcSA9IFthLCBiLCBjLCBkXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBvbWl0dGVkID0gd1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBxdWF0ZXJuaW9uIG1vZGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb3RbaSAqIDMyICsgMjggKyAwXSA9IHFbMF0gKiAxMjcuNSArIDEyNy41O1xyXG4gICAgICAgIHJvdFtpICogMzIgKyAyOCArIDFdID0gcVsxXSAqIDEyNy41ICsgMTI3LjU7XHJcbiAgICAgICAgcm90W2kgKiAzMiArIDI4ICsgMl0gPSBxWzJdICogMTI3LjUgKyAxMjcuNTtcclxuICAgICAgICByb3RbaSAqIDMyICsgMjggKyAzXSA9IHFbM10gKiAxMjcuNSArIDEyNy41O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLSBTSFxyXG4gICAgaWYgKGRhdGEuc2hOKSB7XHJcbiAgICAgICAgY29uc3QgY29lZmZDb3VudHMgPSBbMCwgMywgOCwgMTVdO1xyXG4gICAgICAgIGNvbnN0IGNvZWZmcyA9IGRhdGEuc2hOLmJhbmRzID8gY29lZmZDb3VudHNbZGF0YS5zaE4uYmFuZHNdIDogZGF0YS5zaE4uc2hhcGVbMV0gLyAzOyAvLyAzIGNvbXBvbmVudHMgcGVyIGNvZWZmXHJcbiAgICAgICAgY29uc3Qgc2hDZW50cm9pZHMgPSBpbWFnZURhdGFBcnJheXNbNV0uYml0cztcclxuICAgICAgICBjb25zdCBzaExhYmVsc0RhdGEgPSBpbWFnZURhdGFBcnJheXNbNl0uYml0cztcclxuICAgICAgICBjb25zdCBzaENlbnRyb2lkc1dpZHRoID0gaW1hZ2VEYXRhQXJyYXlzWzVdLndpZHRoO1xyXG5cclxuICAgICAgICBjb25zdCBzaENvbXBvbmVudENvdW50ID0gY29lZmZzICogMztcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dHVyZUNvdW50ID0gTWF0aC5jZWlsKHNoQ29tcG9uZW50Q291bnQgLyAxNik7IC8vIDQgY29tcG9uZW50cyBjYW4gYmUgc3RvcmVkIHBlciB0ZXh0dXJlLCA0IHNoIHBlciBjb21wb25lbnRcclxuICAgICAgICAvL2xldCBzaEluZGV4UmVhZCA9IGJ5dGVPZmZzZXQ7XHJcblxyXG4gICAgICAgIC8vIHNoIGlzIGFuIGFycmF5IG9mIHVpbnQ4YXJyYXkgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIHNoIHRleHR1cmVzXHJcbiAgICAgICAgY29uc3Qgc2g6IFVpbnQ4QXJyYXlbXSA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBlbmdpbmUgPSBzY2VuZS5nZXRFbmdpbmUoKTtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IGVuZ2luZS5nZXRDYXBzKCkubWF4VGV4dHVyZVNpemU7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5jZWlsKHNwbGF0Q291bnQgLyB3aWR0aCk7XHJcbiAgICAgICAgLy8gY3JlYXRlIGFycmF5IGZvciB0aGUgbnVtYmVyIG9mIHRleHR1cmVzIG5lZWRlZC5cclxuICAgICAgICBmb3IgKGxldCB0ZXh0dXJlSW5kZXggPSAwOyB0ZXh0dXJlSW5kZXggPCB0ZXh0dXJlQ291bnQ7IHRleHR1cmVJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVWludDhBcnJheShoZWlnaHQgKiB3aWR0aCAqIDQgKiA0KTsgLy8gNCBjb21wb25lbnRzIHBlciB0ZXh0dXJlLCA0IHNoIHBlciBjb21wb25lbnRcclxuICAgICAgICAgICAgc2gucHVzaCh0ZXh0dXJlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnZlcnNpb24gPT09IDIpIHtcclxuICAgICAgICAgICAgaWYgKCFkYXRhLnNoTi5jb2RlYm9vaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBjb2RlYm9vayBpbiBTT0cgdmVyc2lvbiAyIHNoTiBkYXRhLlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSBzaExhYmVsc0RhdGFbaSAqIDQgKyAwXSArIChzaExhYmVsc0RhdGFbaSAqIDQgKyAxXSA8PCA4KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHUgPSAobiAlIDY0KSAqIGNvZWZmcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBNYXRoLmZsb29yKG4gLyA2NCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjb2VmZnM7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoSW5kZXhXcml0ZSA9IGsgKiAzICsgajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZUluZGV4ID0gTWF0aC5mbG9vcihzaEluZGV4V3JpdGUgLyAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoQXJyYXkgPSBzaFt0ZXh0dXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBieXRlSW5kZXhJblRleHR1cmUgPSBzaEluZGV4V3JpdGUgJSAxNjsgLy8gWzAuLjE1XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRQZXJTcGxhdCA9IGkgKiAxNjsgLy8gMTYgc2ggdmFsdWVzIHBlciB0ZXh0dXJlIHBlciBzcGxhdC5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoVmFsdWUgPSBkYXRhLnNoTi5jb2RlYm9va1tzaENlbnRyb2lkc1sodSArIGspICogNCArIGogKyB2ICogc2hDZW50cm9pZHNXaWR0aCAqIDRdXSAqIDEyNy41ICsgMTI3LjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoQXJyYXlbYnl0ZUluZGV4SW5UZXh0dXJlICsgb2Zmc2V0UGVyU3BsYXRdID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBzaFZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSBzaExhYmVsc0RhdGFbaSAqIDQgKyAwXSArIChzaExhYmVsc0RhdGFbaSAqIDQgKyAxXSA8PCA4KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHUgPSAobiAlIDY0KSAqIGNvZWZmcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBNYXRoLmZsb29yKG4gLyA2NCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaE1pbiA9IGRhdGEuc2hOLm1pbnMgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hNYXggPSBkYXRhLnNoTi5tYXhzIGFzIG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY29lZmZzIC8gMzsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoSW5kZXhXcml0ZSA9IGsgKiAzICsgajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZUluZGV4ID0gTWF0aC5mbG9vcihzaEluZGV4V3JpdGUgLyAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoQXJyYXkgPSBzaFt0ZXh0dXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBieXRlSW5kZXhJblRleHR1cmUgPSBzaEluZGV4V3JpdGUgJSAxNjsgLy8gWzAuLjE1XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRQZXJTcGxhdCA9IGkgKiAxNjsgLy8gMTYgc2ggdmFsdWVzIHBlciB0ZXh0dXJlIHBlciBzcGxhdC5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoVmFsdWUgPSBTY2FsYXIuTGVycChzaE1pbiwgc2hNYXgsIHNoQ2VudHJvaWRzWyh1ICsgaykgKiA0ICsgaiArIHYgKiBzaENlbnRyb2lkc1dpZHRoICogNF0gLyAyNTUpICogMTI3LjUgKyAxMjcuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hBcnJheVtieXRlSW5kZXhJblRleHR1cmUgKyBvZmZzZXRQZXJTcGxhdF0gPSBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIHNoVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyBtb2RlOiBNb2RlLlNwbGF0LCBkYXRhOiBidWZmZXIsIGhhc1ZlcnRleENvbG9yczogZmFsc2UsIHNoOiBzaCB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICByZXNvbHZlKHsgbW9kZTogTW9kZS5TcGxhdCwgZGF0YTogYnVmZmVyLCBoYXNWZXJ0ZXhDb2xvcnM6IGZhbHNlIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZSBTT0cgZGF0YSBmcm9tIGVpdGhlciBhIFNPR1Jvb3REYXRhIG9iamVjdCAod2l0aCB3ZWJwIGZpbGVzIGxvYWRlZCBmcm9tIHJvb3RVcmwpIG9yIGZyb20gYSBNYXAgb2YgZmlsZW5hbWVzIHRvIFVpbnQ4QXJyYXkgZmlsZSBkYXRhIChpbmNsdWRpbmcgbWV0YS5qc29uKVxyXG4gKiBAcGFyYW0gZGF0YU9yRmlsZXMgRWl0aGVyIHRoZSBTT0dSb290RGF0YSBvciBhIE1hcCBvZiBmaWxlbmFtZXMgdG8gVWludDhBcnJheSBmaWxlIGRhdGEgKGluY2x1ZGluZyBtZXRhLmpzb24pXHJcbiAqIEBwYXJhbSByb290VXJsIEJhc2UgVVJMIHRvIGxvYWQgd2VicCBmaWxlcyBmcm9tIChpZiBkYXRhT3JGaWxlcyBpcyBTT0dSb290RGF0YSlcclxuICogQHBhcmFtIHNjZW5lIFRoZSBCYWJ5bG9uLmpzIHNjZW5lXHJcbiAqIEByZXR1cm5zIFBhcnNlZCBkYXRhXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUGFyc2VTb2dNZXRhKGRhdGFPckZpbGVzOiBTT0dSb290RGF0YSB8IE1hcDxzdHJpbmcsIFVpbnQ4QXJyYXk+LCByb290VXJsOiBzdHJpbmcsIHNjZW5lOiBTY2VuZSk6IFByb21pc2U8SVBhcnNlZFBMWT4ge1xyXG4gICAgbGV0IGRhdGE6IFNPR1Jvb3REYXRhO1xyXG4gICAgbGV0IGZpbGVzOiBNYXA8c3RyaW5nLCBVaW50OEFycmF5PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBpZiAoZGF0YU9yRmlsZXMgaW5zdGFuY2VvZiBNYXApIHtcclxuICAgICAgICBmaWxlcyA9IGRhdGFPckZpbGVzO1xyXG5cclxuICAgICAgICBjb25zdCBtZXRhRmlsZSA9IGZpbGVzLmdldChcIm1ldGEuanNvblwiKTtcclxuICAgICAgICBpZiAoIW1ldGFGaWxlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1ldGEuanNvbiBub3QgZm91bmQgaW4gZmlsZXMgTWFwXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UobmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKG1ldGFGaWxlKSkgYXMgU09HUm9vdERhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGEgPSBkYXRhT3JGaWxlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb2xsZWN0IGFsbCBmaWxlIG5hbWVzXHJcbiAgICBjb25zdCB1cmxzID0gWy4uLmRhdGEubWVhbnMuZmlsZXMsIC4uLmRhdGEuc2NhbGVzLmZpbGVzLCAuLi5kYXRhLnF1YXRzLmZpbGVzLCAuLi5kYXRhLnNoMC5maWxlc107XHJcbiAgICBpZiAoZGF0YS5zaE4pIHtcclxuICAgICAgICB1cmxzLnB1c2goLi4uZGF0YS5zaE4uZmlsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWQgd2VicCBpbWFnZXMgaW4gcGFyYWxsZWxcclxuICAgIGNvbnN0IGltYWdlRGF0YUFycmF5czogSVdlYlBJbWFnZVtdID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgdXJscy5tYXAoYXN5bmMgKGZpbGVOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlcyAmJiBmaWxlcy5oYXMoZmlsZU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsb2FkIGZyb20gaW4tbWVtb3J5IFVpbnQ4QXJyYXlcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVEYXRhID0gZmlsZXMuZ2V0KGZpbGVOYW1lKSE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgTG9hZFdlYnBJbWFnZURhdGEoZmlsZURhdGEsIGZpbGVOYW1lLCBzY2VuZS5nZXRFbmdpbmUoKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmYWxsYmFjazogbG9hZCBmcm9tIFVSTFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IExvYWRXZWJwSW1hZ2VEYXRhKHJvb3RVcmwsIGZpbGVOYW1lLCBzY2VuZS5nZXRFbmdpbmUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gYXdhaXQgUGFyc2VTb2dEYXRhcyhkYXRhLCBpbWFnZURhdGFBcnJheXMsIHNjZW5lKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYyovXHJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xyXG5pbXBvcnQgdHlwZSB7IElTY2VuZUxvYWRlclBsdWdpbkFzeW5jLCBJU2NlbmVMb2FkZXJQbHVnaW5GYWN0b3J5LCBJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdCwgSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCwgU2NlbmVMb2FkZXJQbHVnaW5PcHRpb25zIH0gZnJvbSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlclNjZW5lTG9hZGVyUGx1Z2luIH0gZnJvbSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBTUExBVEZpbGVMb2FkZXJNZXRhZGF0YSB9IGZyb20gXCIuL3NwbGF0RmlsZUxvYWRlci5tZXRhZGF0YVwiO1xyXG5pbXBvcnQgeyBHYXVzc2lhblNwbGF0dGluZ01lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvR2F1c3NpYW5TcGxhdHRpbmcvZ2F1c3NpYW5TcGxhdHRpbmdNZXNoXCI7XHJcbmltcG9ydCB7IEFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvYXNzZXRDb250YWluZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBQb2ludHNDbG91ZFN5c3RlbSB9IGZyb20gXCJjb3JlL1BhcnRpY2xlcy9wb2ludHNDbG91ZFN5c3RlbVwiO1xyXG5pbXBvcnQgeyBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFZlcnRleERhdGEgfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaC52ZXJ0ZXhEYXRhXCI7XHJcbmltcG9ydCB0eXBlIHsgU1BMQVRMb2FkaW5nT3B0aW9ucyB9IGZyb20gXCIuL3NwbGF0TG9hZGluZ09wdGlvbnNcIjtcclxuaW1wb3J0IHR5cGUgeyBHYXVzc2lhblNwbGF0dGluZ01hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL0dhdXNzaWFuU3BsYXR0aW5nL2dhdXNzaWFuU3BsYXR0aW5nTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUGFyc2VTcHogfSBmcm9tIFwiLi9zcHpcIjtcclxuaW1wb3J0IHsgTW9kZSB9IGZyb20gXCIuL3NwbGF0RGVmc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElQYXJzZWRQTFkgfSBmcm9tIFwiLi9zcGxhdERlZnNcIjtcclxuaW1wb3J0IHsgUGFyc2VTb2dNZXRhIH0gZnJvbSBcIi4vc29nXCI7XHJcbmltcG9ydCB0eXBlIHsgU09HUm9vdERhdGEgfSBmcm9tIFwiLi9zb2dcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLWpzZG9jLCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2NlbmVMb2FkZXJQbHVnaW5PcHRpb25zIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBzcGxhdCBsb2FkZXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgW1NQTEFURmlsZUxvYWRlck1ldGFkYXRhLm5hbWVdOiBQYXJ0aWFsPFNQTEFUTG9hZGluZ09wdGlvbnM+O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBGRmxhdGUgYWNjZXNzXHJcbmRlY2xhcmUgY29uc3QgZmZsYXRlOiBhbnk7XHJcblxyXG4vKipcclxuICogQGV4cGVyaW1lbnRhbFxyXG4gKiBTUExBVCBmaWxlIHR5cGUgbG9hZGVyLlxyXG4gKiBUaGlzIGlzIGEgYmFieWxvbiBzY2VuZSBsb2FkZXIgcGx1Z2luLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNQTEFURmlsZUxvYWRlciBpbXBsZW1lbnRzIElTY2VuZUxvYWRlclBsdWdpbkFzeW5jLCBJU2NlbmVMb2FkZXJQbHVnaW5GYWN0b3J5IHtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgcGx1Z2luLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IFNQTEFURmlsZUxvYWRlck1ldGFkYXRhLm5hbWU7XHJcblxyXG4gICAgcHJpdmF0ZSBfYXNzZXRDb250YWluZXI6IE51bGxhYmxlPEFzc2V0Q29udGFpbmVyPiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbG9hZGluZ09wdGlvbnM6IFJlYWRvbmx5PFNQTEFUTG9hZGluZ09wdGlvbnM+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHRoZSBleHRlbnNpb25zIHRoZSBzcGxhdCBsb2FkZXIgaXMgYWJsZSB0byBsb2FkLlxyXG4gICAgICogZm9yY2UgZGF0YSB0byBjb21lIGluIGFzIGFuIEFycmF5QnVmZmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBleHRlbnNpb25zID0gU1BMQVRGaWxlTG9hZGVyTWV0YWRhdGEuZXh0ZW5zaW9ucztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgbG9hZGVyIGZvciBnYXVzc2lhbiBzcGxhdHRpbmcgZmlsZXNcclxuICAgICAqIEBwYXJhbSBsb2FkaW5nT3B0aW9ucyBvcHRpb25zIGZvciBsb2FkaW5nIGFuZCBwYXJzaW5nIHNwbGF0IGFuZCBQTFkgZmlsZXMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRpbmdPcHRpb25zOiBQYXJ0aWFsPFJlYWRvbmx5PFNQTEFUTG9hZGluZ09wdGlvbnM+PiA9IFNQTEFURmlsZUxvYWRlci5fRGVmYXVsdExvYWRpbmdPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZ09wdGlvbnMgPSBsb2FkaW5nT3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfRGVmYXVsdExvYWRpbmdPcHRpb25zID0ge1xyXG4gICAgICAgIGtlZXBJblJhbTogZmFsc2UsXHJcbiAgICAgICAgZmxpcFk6IGZhbHNlLFxyXG4gICAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgU1BMQVRMb2FkaW5nT3B0aW9ucztcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBjcmVhdGVQbHVnaW4ob3B0aW9uczogU2NlbmVMb2FkZXJQbHVnaW5PcHRpb25zKTogSVNjZW5lTG9hZGVyUGx1Z2luQXN5bmMge1xyXG4gICAgICAgIHJldHVybiBuZXcgU1BMQVRGaWxlTG9hZGVyKG9wdGlvbnNbU1BMQVRGaWxlTG9hZGVyTWV0YWRhdGEubmFtZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1wb3J0cyAgZnJvbSB0aGUgbG9hZGVkIGdhdXNzaWFuIHNwbGF0dGluZyBkYXRhIGFuZCBhZGRzIHRoZW0gdG8gdGhlIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gbWVzaGVzTmFtZXMgYSBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5ncyBvZiB0aGUgbWVzaCBuYW1lcyB0aGF0IHNob3VsZCBiZSBsb2FkZWQgZnJvbSB0aGUgZmlsZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIHRoZSBzY2VuZSB0aGUgbWVzaGVzIHNob3VsZCBiZSBhZGRlZCB0b1xyXG4gICAgICogQHBhcmFtIGRhdGEgdGhlIGdhdXNzaWFuIHNwbGF0dGluZyBkYXRhIHRvIGxvYWRcclxuICAgICAqIEBwYXJhbSByb290VXJsIHJvb3QgdXJsIHRvIGxvYWQgZnJvbVxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIGNhbGxiYWNrIGNhbGxlZCB3aGlsZSBmaWxlIGlzIGxvYWRpbmdcclxuICAgICAqIEBwYXJhbSBfZmlsZU5hbWUgRGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgZmlsZSB0byBsb2FkXHJcbiAgICAgKiBAcmV0dXJucyBhIHByb21pc2UgY29udGFpbmluZyB0aGUgbG9hZGVkIG1lc2hlcywgcGFydGljbGVzLCBza2VsZXRvbnMgYW5kIGFuaW1hdGlvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGltcG9ydE1lc2hBc3luYyhcclxuICAgICAgICBtZXNoZXNOYW1lczogYW55LFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBkYXRhOiBhbnksXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIF9vblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLFxyXG4gICAgICAgIF9maWxlTmFtZT86IHN0cmluZ1xyXG4gICAgKTogUHJvbWlzZTxJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdD4ge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9wYXJzZUFzeW5jKG1lc2hlc05hbWVzLCBzY2VuZSwgZGF0YSwgcm9vdFVybCkudGhlbigobWVzaGVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtZXNoZXM6IG1lc2hlcyxcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtczogW10sXHJcbiAgICAgICAgICAgICAgICBza2VsZXRvbnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uR3JvdXBzOiBbXSxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU5vZGVzOiBbXSxcclxuICAgICAgICAgICAgICAgIGdlb21ldHJpZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgbGlnaHRzOiBbXSxcclxuICAgICAgICAgICAgICAgIHNwcml0ZU1hbmFnZXJzOiBbXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQnVpbGRQb2ludENsb3VkKHBvaW50Y2xvdWQ6IFBvaW50c0Nsb3VkU3lzdGVtLCBkYXRhOiBBcnJheUJ1ZmZlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghZGF0YS5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdUJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGZCdWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGEpO1xyXG5cclxuICAgICAgICAvLyBwYXJzZWQgYXJyYXkgY29udGFpbnMgcm9vbSBmb3IgcG9zaXRpb24oM2Zsb2F0cyksIG5vcm1hbCgzZmxvYXRzKSwgY29sb3IgKDRiKSwgcXVhbnRpemVkIHF1YXRlcm5pb24gKDRiKVxyXG4gICAgICAgIGNvbnN0IHJvd0xlbmd0aCA9IDMgKiA0ICsgMyAqIDQgKyA0ICsgNDtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXhDb3VudCA9IHVCdWZmZXIubGVuZ3RoIC8gcm93TGVuZ3RoO1xyXG5cclxuICAgICAgICBjb25zdCBwb2ludGNsb3VkZnVuYyA9IGZ1bmN0aW9uIChwYXJ0aWNsZTogYW55LCBpOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGZCdWZmZXJbOCAqIGkgKyAwXTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IGZCdWZmZXJbOCAqIGkgKyAxXTtcclxuICAgICAgICAgICAgY29uc3QgeiA9IGZCdWZmZXJbOCAqIGkgKyAyXTtcclxuICAgICAgICAgICAgcGFydGljbGUucG9zaXRpb24gPSBuZXcgVmVjdG9yMyh4LCB5LCB6KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB1QnVmZmVyW3Jvd0xlbmd0aCAqIGkgKyAyNCArIDBdIC8gMjU1O1xyXG4gICAgICAgICAgICBjb25zdCBnID0gdUJ1ZmZlcltyb3dMZW5ndGggKiBpICsgMjQgKyAxXSAvIDI1NTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHVCdWZmZXJbcm93TGVuZ3RoICogaSArIDI0ICsgMl0gLyAyNTU7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLmNvbG9yID0gbmV3IENvbG9yNChyLCBnLCBiLCAxKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwb2ludGNsb3VkLmFkZFBvaW50cyh2ZXJ0ZXhDb3VudCwgcG9pbnRjbG91ZGZ1bmMpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9CdWlsZE1lc2goc2NlbmU6IFNjZW5lLCBwYXJzZWRQTFk6IElQYXJzZWRQTFkpOiBNZXNoIHtcclxuICAgICAgICBjb25zdCBtZXNoID0gbmV3IE1lc2goXCJQTFlNZXNoXCIsIHNjZW5lKTtcclxuXHJcbiAgICAgICAgY29uc3QgdUJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KHBhcnNlZFBMWS5kYXRhKTtcclxuICAgICAgICBjb25zdCBmQnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheShwYXJzZWRQTFkuZGF0YSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvd0xlbmd0aCA9IDMgKiA0ICsgMyAqIDQgKyA0ICsgNDtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXhDb3VudCA9IHVCdWZmZXIubGVuZ3RoIC8gcm93TGVuZ3RoO1xyXG5cclxuICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgdmVydGV4RGF0YSA9IG5ldyBWZXJ0ZXhEYXRhKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBmQnVmZmVyWzggKiBpICsgMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBmQnVmZmVyWzggKiBpICsgMV07XHJcbiAgICAgICAgICAgIGNvbnN0IHogPSBmQnVmZmVyWzggKiBpICsgMl07XHJcbiAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKHgsIHksIHopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZFBMWS5oYXNWZXJ0ZXhDb2xvcnMpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JzID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0ZXhDb3VudCAqIDQpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSB1QnVmZmVyW3Jvd0xlbmd0aCAqIGkgKyAyNCArIDBdIC8gMjU1O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZyA9IHVCdWZmZXJbcm93TGVuZ3RoICogaSArIDI0ICsgMV0gLyAyNTU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiID0gdUJ1ZmZlcltyb3dMZW5ndGggKiBpICsgMjQgKyAyXSAvIDI1NTtcclxuICAgICAgICAgICAgICAgIGNvbG9yc1tpICogNCArIDBdID0gcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yc1tpICogNCArIDFdID0gZztcclxuICAgICAgICAgICAgICAgIGNvbG9yc1tpICogNCArIDJdID0gYjtcclxuICAgICAgICAgICAgICAgIGNvbG9yc1tpICogNCArIDNdID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2ZXJ0ZXhEYXRhLmNvbG9ycyA9IGNvbG9ycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZlcnRleERhdGEucG9zaXRpb25zID0gcG9zaXRpb25zO1xyXG4gICAgICAgIHZlcnRleERhdGEuaW5kaWNlcyA9IHBhcnNlZFBMWS5mYWNlcyE7XHJcblxyXG4gICAgICAgIHZlcnRleERhdGEuYXBwbHlUb01lc2gobWVzaCk7XHJcbiAgICAgICAgcmV0dXJuIG1lc2g7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jLCBuby1yZXN0cmljdGVkLXN5bnRheCwgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBwcml2YXRlIGFzeW5jIF91bnppcFdpdGhGRmxhdGVBc3luYyhkYXRhOiBVaW50OEFycmF5KTogUHJvbWlzZTxNYXA8c3RyaW5nLCBVaW50OEFycmF5Pj4ge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgbGV0IGZmbGF0ZSA9IHRoaXMuX2xvYWRpbmdPcHRpb25zLmZmbGF0ZSBhcyB0eXBlb2YgaW1wb3J0KFwiZmZsYXRlXCIpO1xyXG4gICAgICAgIC8vIGVuc3VyZSBmZmxhdGUgaXMgbG9hZGVkXHJcbiAgICAgICAgaWYgKCFmZmxhdGUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAod2luZG93IGFzIGFueSkuZmZsYXRlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBUb29scy5Mb2FkU2NyaXB0QXN5bmModGhpcy5fbG9hZGluZ09wdGlvbnMuZGVmbGF0ZVVSTCA/PyBcImh0dHBzOi8vdW5wa2cuY29tL2ZmbGF0ZS91bWQvaW5kZXguanNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmZsYXRlID0gKHdpbmRvdyBhcyBhbnkpLmZmbGF0ZSBhcyB0eXBlb2YgZmZsYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyB1bnppcFN5bmMgfSA9IGZmbGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgdW56aXBwZWQgPSB1bnppcFN5bmMoZGF0YSkgYXMgUmVjb3JkPHN0cmluZywgVWludDhBcnJheT47IC8vIHsgW2ZpbGVuYW1lOiBzdHJpbmddOiBVaW50OEFycmF5IH1cclxuXHJcbiAgICAgICAgY29uc3QgZmlsZXMgPSBuZXcgTWFwPHN0cmluZywgVWludDhBcnJheT4oKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb250ZW50XSBvZiBPYmplY3QuZW50cmllcyh1bnppcHBlZCkpIHtcclxuICAgICAgICAgICAgZmlsZXMuc2V0KG5hbWUsIGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlsZXM7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9wYXJzZUFzeW5jKG1lc2hlc05hbWVzOiBhbnksIHNjZW5lOiBTY2VuZSwgZGF0YTogYW55LCByb290VXJsOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PEFic3RyYWN0TWVzaD4+IHtcclxuICAgICAgICBjb25zdCBiYWJ5bG9uTWVzaGVzQXJyYXk6IEFycmF5PE1lc2g+ID0gW107IC8vVGhlIG1lc2ggZm9yIGJhYnlsb25cclxuXHJcbiAgICAgICAgY29uc3QgbWFrZUdTRnJvbVBhcnNlZFNPRyA9IChwYXJzZWRTT0c6IElQYXJzZWRQTFkpID0+IHtcclxuICAgICAgICAgICAgc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IGdhdXNzaWFuU3BsYXR0aW5nID0gbmV3IEdhdXNzaWFuU3BsYXR0aW5nTWVzaChcIkdhdXNzaWFuU3BsYXR0aW5nXCIsIG51bGwsIHNjZW5lLCB0aGlzLl9sb2FkaW5nT3B0aW9ucy5rZWVwSW5SYW0pO1xyXG4gICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIGdhdXNzaWFuU3BsYXR0aW5nLnZpZXdEaXJlY3Rpb25GYWN0b3Iuc2V0KDEsIC0xLCAxKTtcclxuICAgICAgICAgICAgYmFieWxvbk1lc2hlc0FycmF5LnB1c2goZ2F1c3NpYW5TcGxhdHRpbmcpO1xyXG4gICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy51cGRhdGVEYXRhKHBhcnNlZFNPRy5kYXRhLCBwYXJzZWRTT0cuc2gpO1xyXG4gICAgICAgICAgICBzY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgZGF0YSBpcyBqc29uIHN0cmluZ1xyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhU09HID0gSlNPTi5wYXJzZShkYXRhKSBhcyBTT0dSb290RGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGFTT0cgJiYgZGF0YVNPRy5tZWFucyAmJiBkYXRhU09HLnNjYWxlcyAmJiBkYXRhU09HLnF1YXRzICYmIGRhdGFTT0cuc2gwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBQYXJzZVNvZ01ldGEoZGF0YVNPRywgcm9vdFVybCwgc2NlbmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXMsIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChwYXJzZWRTT0cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VHU0Zyb21QYXJzZWRTT0cocGFyc2VkU09HKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYmFieWxvbk1lc2hlc0FycmF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgU09HIGRhdGEuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1OCA9IGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IG5ldyBVaW50OEFycmF5KGRhdGEpIDogZGF0YTtcclxuICAgICAgICAvLyBaSVAgc2lnbmF0dXJlIGNoZWNrIGZvciBTT0dcclxuICAgICAgICBpZiAodThbMF0gPT09IDB4NTAgJiYgdThbMV0gPT09IDB4NGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzLCBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdW56aXBXaXRoRkZsYXRlQXN5bmModTgpLnRoZW4oKGZpbGVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUGFyc2VTb2dNZXRhKGZpbGVzLCByb290VXJsLCBzY2VuZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlcywgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHBhcnNlZFNPRykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZUdTRnJvbVBhcnNlZFNPRyhwYXJzZWRTT0cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShiYWJ5bG9uTWVzaGVzQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBTT0cgemlwIGRhdGEuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlYWRhYmxlU3RyZWFtID0gbmV3IFJlYWRhYmxlU3RyZWFtKHtcclxuICAgICAgICAgICAgc3RhcnQoY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKG5ldyBVaW50OEFycmF5KGRhdGEpKTsgLy8gRW5xdWV1ZSB0aGUgQXJyYXlCdWZmZXIgYXMgYSBVaW50OEFycmF5XHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFVzZSBHWmlwIERlY29tcHJlc3Npb25TdHJlYW1cclxuICAgICAgICBjb25zdCBkZWNvbXByZXNzaW9uU3RyZWFtID0gbmV3IERlY29tcHJlc3Npb25TdHJlYW0oXCJnemlwXCIpO1xyXG4gICAgICAgIGNvbnN0IGRlY29tcHJlc3NlZFN0cmVhbSA9IHJlYWRhYmxlU3RyZWFtLnBpcGVUaHJvdWdoKGRlY29tcHJlc3Npb25TdHJlYW0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgbmV3IFJlc3BvbnNlKGRlY29tcHJlc3NlZFN0cmVhbSlcclxuICAgICAgICAgICAgICAgIC5hcnJheUJ1ZmZlcigpXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgIC50aGVuKChidWZmZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzLCBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgICAgIFBhcnNlU3B6KGJ1ZmZlciwgc2NlbmUsIHRoaXMuX2xvYWRpbmdPcHRpb25zKS50aGVuKChwYXJzZWRTUFopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhdXNzaWFuU3BsYXR0aW5nID0gbmV3IEdhdXNzaWFuU3BsYXR0aW5nTWVzaChcIkdhdXNzaWFuU3BsYXR0aW5nXCIsIG51bGwsIHNjZW5lLCB0aGlzLl9sb2FkaW5nT3B0aW9ucy5rZWVwSW5SYW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkU1BaLnRyYWluZWRXaXRoQW50aWFsaWFzaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnc01hdGVyaWFsID0gZ2F1c3NpYW5TcGxhdHRpbmcubWF0ZXJpYWwgYXMgR2F1c3NpYW5TcGxhdHRpbmdNYXRlcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdzTWF0ZXJpYWwua2VybmVsU2l6ZSA9IDAuMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdzTWF0ZXJpYWwuY29tcGVuc2F0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoZXNBcnJheS5wdXNoKGdhdXNzaWFuU3BsYXR0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2F1c3NpYW5TcGxhdHRpbmcudXBkYXRlRGF0YShwYXJzZWRTUFouZGF0YSwgcGFyc2VkU1BaLnNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGJhYnlsb25NZXNoZXNBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENhdGNoIGFueSBkZWNvbXByZXNzaW9uIGVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXMsIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgU1BMQVRGaWxlTG9hZGVyLl9Db252ZXJ0UExZVG9TcGxhdChkYXRhIGFzIEFycmF5QnVmZmVyKS50aGVuKGFzeW5jIChwYXJzZWRQTFkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyc2VkUExZLm1vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTW9kZS5TcGxhdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhdXNzaWFuU3BsYXR0aW5nID0gbmV3IEdhdXNzaWFuU3BsYXR0aW5nTWVzaChcIkdhdXNzaWFuU3BsYXR0aW5nXCIsIG51bGwsIHNjZW5lLCB0aGlzLl9sb2FkaW5nT3B0aW9ucy5rZWVwSW5SYW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoZXNBcnJheS5wdXNoKGdhdXNzaWFuU3BsYXR0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F1c3NpYW5TcGxhdHRpbmcudXBkYXRlRGF0YShwYXJzZWRQTFkuZGF0YSwgcGFyc2VkUExZLnNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZFBMWS5jb21wcmVzc2VkIHx8ICFwYXJzZWRQTFkucmF3U3BsYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhdXNzaWFuU3BsYXR0aW5nLnZpZXdEaXJlY3Rpb25GYWN0b3Iuc2V0KC0xLCAtMSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1vZGUuUG9pbnRDbG91ZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50Y2xvdWQgPSBuZXcgUG9pbnRzQ2xvdWRTeXN0ZW0oXCJQb2ludENsb3VkXCIsIDEsIHNjZW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFNQTEFURmlsZUxvYWRlci5fQnVpbGRQb2ludENsb3VkKHBvaW50Y2xvdWQsIHBhcnNlZFBMWS5kYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBwb2ludGNsb3VkLmJ1aWxkTWVzaEFzeW5jKCkudGhlbigobWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoZXNBcnJheS5wdXNoKG1lc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGNsb3VkLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTW9kZS5NZXNoOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZFBMWS5mYWNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2hlc0FycmF5LnB1c2goU1BMQVRGaWxlTG9hZGVyLl9CdWlsZE1lc2goc2NlbmUsIHBhcnNlZFBMWSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUExZIG1lc2ggZG9lc24ndCBjb250YWluIGZhY2UgaW5mb3JtYXRpb25zLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgU3BsYXQgbW9kZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYmFieWxvbk1lc2hlc0FycmF5KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBpbnRvIGFuIGFzc2V0IGNvbnRhaW5lci5cclxuICAgICAqIEBwYXJhbSBzY2VuZSBUaGUgc2NlbmUgdG8gbG9hZCBpbnRvXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBpbXBvcnRcclxuICAgICAqIEBwYXJhbSByb290VXJsIFRoZSByb290IHVybCBmb3Igc2NlbmUgYW5kIHJlc291cmNlc1xyXG4gICAgICogQHJldHVybnMgVGhlIGxvYWRlZCBhc3NldCBjb250YWluZXJcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZEFzc2V0Q29udGFpbmVyQXN5bmMoc2NlbmU6IFNjZW5lLCBkYXRhOiBzdHJpbmcsIHJvb3RVcmw6IHN0cmluZyk6IFByb21pc2U8QXNzZXRDb250YWluZXI+IHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBuZXcgQXNzZXRDb250YWluZXIoc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuX2Fzc2V0Q29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLmltcG9ydE1lc2hBc3luYyhudWxsLCBzY2VuZSwgZGF0YSwgcm9vdFVybClcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbWVzaCBvZiByZXN1bHQubWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5tZXNoZXMucHVzaChtZXNoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWVzaCBtYXRlcmlhbCB3aWxsIGJlIG51bGwgYmVmb3JlIDFzdCByZW5kZXJlZCBmcmFtZS5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hc3NldENvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hc3NldENvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXg7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBvcnRzIGFsbCBvYmplY3RzIGZyb20gdGhlIGxvYWRlZCBPQkogZGF0YSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBzY2VuZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIHRoZSBzY2VuZSB0aGUgb2JqZWN0cyBzaG91bGQgYmUgYWRkZWQgdG9cclxuICAgICAqIEBwYXJhbSBkYXRhIHRoZSBPQkogZGF0YSB0byBsb2FkXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCByb290IHVybCB0byBsb2FkIGZyb21cclxuICAgICAqIEByZXR1cm5zIGEgcHJvbWlzZSB3aGljaCBjb21wbGV0ZXMgd2hlbiBvYmplY3RzIGhhdmUgYmVlbiBsb2FkZWQgdG8gdGhlIHNjZW5lXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBsb2FkQXN5bmMoc2NlbmU6IFNjZW5lLCBkYXRhOiBzdHJpbmcsIHJvb3RVcmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIC8vR2V0IHRoZSAzRCBtb2RlbFxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgIHJldHVybiB0aGlzLmltcG9ydE1lc2hBc3luYyhudWxsLCBzY2VuZSwgZGF0YSwgcm9vdFVybCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB2b2lkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2R5bGFuZWJlcnQvZ3NwbGF0LmpzL2Jsb2IvbWFpbi9zcmMvbG9hZGVycy9QTFlMb2FkZXIudHMgVW5kZXIgTUlUIGxpY2Vuc2VcclxuICAgICAqIENvbnZlcnRzIGEgLnBseSBkYXRhIGFycmF5IGJ1ZmZlciB0byBzcGxhdFxyXG4gICAgICogaWYgZGF0YSBhcnJheSBidWZmZXIgaXMgbm90IHBseSwgcmV0dXJucyB0aGUgb3JpZ2luYWwgYnVmZmVyXHJcbiAgICAgKiBAcGFyYW0gZGF0YSB0aGUgLnBseSBkYXRhIHRvIGxvYWRcclxuICAgICAqIEByZXR1cm5zIHRoZSBsb2FkZWQgc3BsYXQgYnVmZmVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9Db252ZXJ0UExZVG9TcGxhdChkYXRhOiBBcnJheUJ1ZmZlcik6IFByb21pc2U8SVBhcnNlZFBMWT4ge1xyXG4gICAgICAgIGNvbnN0IHVidWYgPSBuZXcgVWludDhBcnJheShkYXRhKTtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUodWJ1Zi5zbGljZSgwLCAxMDI0ICogMTApKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJFbmQgPSBcImVuZF9oZWFkZXJcXG5cIjtcclxuICAgICAgICBjb25zdCBoZWFkZXJFbmRJbmRleCA9IGhlYWRlci5pbmRleE9mKGhlYWRlckVuZCk7XHJcbiAgICAgICAgaWYgKGhlYWRlckVuZEluZGV4IDwgMCB8fCAhaGVhZGVyKSB7XHJcbiAgICAgICAgICAgIC8vIHN0YW5kYXJkIHNwbGF0XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7IG1vZGU6IE1vZGUuU3BsYXQsIGRhdGE6IGRhdGEsIHJhd1NwbGF0OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZlcnRleENvdW50ID0gcGFyc2VJbnQoL2VsZW1lbnQgdmVydGV4IChcXGQrKVxcbi8uZXhlYyhoZWFkZXIpIVsxXSk7XHJcbiAgICAgICAgY29uc3QgZmFjZUVsZW1lbnQgPSAvZWxlbWVudCBmYWNlIChcXGQrKVxcbi8uZXhlYyhoZWFkZXIpO1xyXG4gICAgICAgIGxldCBmYWNlQ291bnQgPSAwO1xyXG4gICAgICAgIGlmIChmYWNlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBmYWNlQ291bnQgPSBwYXJzZUludChmYWNlRWxlbWVudFsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNodW5rRWxlbWVudCA9IC9lbGVtZW50IGNodW5rIChcXGQrKVxcbi8uZXhlYyhoZWFkZXIpO1xyXG4gICAgICAgIGxldCBjaHVua0NvdW50ID0gMDtcclxuICAgICAgICBpZiAoY2h1bmtFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNodW5rQ291bnQgPSBwYXJzZUludChjaHVua0VsZW1lbnRbMV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJvd1ZlcnRleE9mZnNldCA9IDA7XHJcbiAgICAgICAgbGV0IHJvd0NodW5rT2Zmc2V0ID0gMDtcclxuICAgICAgICBjb25zdCBvZmZzZXRzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge1xyXG4gICAgICAgICAgICBkb3VibGU6IDgsXHJcbiAgICAgICAgICAgIGludDogNCxcclxuICAgICAgICAgICAgdWludDogNCxcclxuICAgICAgICAgICAgZmxvYXQ6IDQsXHJcbiAgICAgICAgICAgIHNob3J0OiAyLFxyXG4gICAgICAgICAgICB1c2hvcnQ6IDIsXHJcbiAgICAgICAgICAgIHVjaGFyOiAxLFxyXG4gICAgICAgICAgICBsaXN0OiAwLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHR5cGUgUGx5UHJvcGVydHkgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgdHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBvZmZzZXQ6IG51bWJlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBlbnVtIEVsZW1lbnRNb2RlIHtcclxuICAgICAgICAgICAgVmVydGV4ID0gMCxcclxuICAgICAgICAgICAgQ2h1bmsgPSAxLFxyXG4gICAgICAgICAgICBTSCA9IDIsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY2h1bmtNb2RlID0gRWxlbWVudE1vZGUuQ2h1bms7XHJcbiAgICAgICAgY29uc3QgdmVydGV4UHJvcGVydGllczogUGx5UHJvcGVydHlbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNodW5rUHJvcGVydGllczogUGx5UHJvcGVydHlbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gaGVhZGVyLnNsaWNlKDAsIGhlYWRlckVuZEluZGV4KS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3Agb2YgZmlsdGVyZWQpIHtcclxuICAgICAgICAgICAgaWYgKHByb3Auc3RhcnRzV2l0aChcInByb3BlcnR5IFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgWywgdHlwZSwgbmFtZV0gPSBwcm9wLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2h1bmtNb2RlID09IEVsZW1lbnRNb2RlLkNodW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2h1bmtQcm9wZXJ0aWVzLnB1c2goeyBuYW1lLCB0eXBlLCBvZmZzZXQ6IHJvd0NodW5rT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd0NodW5rT2Zmc2V0ICs9IG9mZnNldHNbdHlwZV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNodW5rTW9kZSA9PSBFbGVtZW50TW9kZS5WZXJ0ZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhQcm9wZXJ0aWVzLnB1c2goeyBuYW1lLCB0eXBlLCBvZmZzZXQ6IHJvd1ZlcnRleE9mZnNldCB9KTtcclxuICAgICAgICAgICAgICAgICAgICByb3dWZXJ0ZXhPZmZzZXQgKz0gb2Zmc2V0c1t0eXBlXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2h1bmtNb2RlID09IEVsZW1lbnRNb2RlLlNIKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4UHJvcGVydGllcy5wdXNoKHsgbmFtZSwgdHlwZSwgb2Zmc2V0OiByb3dWZXJ0ZXhPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9mZnNldHNbdHlwZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgVW5zdXBwb3J0ZWQgcHJvcGVydHkgdHlwZTogJHt0eXBlfS5gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wLnN0YXJ0c1dpdGgoXCJlbGVtZW50IFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgWywgdHlwZV0gPSBwcm9wLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09IFwiY2h1bmtcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNodW5rTW9kZSA9IEVsZW1lbnRNb2RlLkNodW5rO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwidmVydGV4XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaHVua01vZGUgPSBFbGVtZW50TW9kZS5WZXJ0ZXg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJzaFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2h1bmtNb2RlID0gRWxlbWVudE1vZGUuU0g7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJvd1ZlcnRleExlbmd0aCA9IHJvd1ZlcnRleE9mZnNldDtcclxuICAgICAgICBjb25zdCByb3dDaHVua0xlbmd0aCA9IHJvd0NodW5rT2Zmc2V0O1xyXG5cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICByZXR1cm4gKEdhdXNzaWFuU3BsYXR0aW5nTWVzaC5Db252ZXJ0UExZV2l0aFNIVG9TcGxhdEFzeW5jKGRhdGEpIGFzIGFueSkudGhlbihhc3luYyAoc3BsYXRzRGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGRhdGEsIGhlYWRlckVuZEluZGV4ICsgaGVhZGVyRW5kLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSByb3dDaHVua0xlbmd0aCAqIGNodW5rQ291bnQgKyByb3dWZXJ0ZXhMZW5ndGggKiB2ZXJ0ZXhDb3VudDtcclxuICAgICAgICAgICAgLy8gZmFjZXNcclxuICAgICAgICAgICAgY29uc3QgZmFjZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgICAgIGlmIChmYWNlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFjZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWNlVmVydGV4Q291bnQgPSBkYXRhVmlldy5nZXRVaW50OChvZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWNlVmVydGV4Q291bnQgIT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gb25seSBzdXBwb3J0IHRyaWFuZ2xlc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmYWNlVmVydGV4Q291bnQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IGRhdGFWaWV3LmdldFVpbnQzMihvZmZzZXQgKyAoMiAtIGopICogNCwgdHJ1ZSk7IC8vIGNoYW5nZSBmYWNlIHdpbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZXMucHVzaCh2ZXJ0ZXhJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSAxMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZWFybHkgZXhpdCBmb3IgY2h1bmtlZC9xdWFudGl6ZWQgcGx5XHJcbiAgICAgICAgICAgIGlmIChjaHVua0NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgbW9kZTogTW9kZS5TcGxhdCwgZGF0YTogc3BsYXRzRGF0YS5idWZmZXIsIHNoOiBzcGxhdHNEYXRhLnNoLCBmYWNlczogZmFjZXMsIGhhc1ZlcnRleENvbG9yczogZmFsc2UsIGNvbXByZXNzZWQ6IHRydWUsIHJhd1NwbGF0OiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvdW50IGF2YWlsYWJsZSBwcm9wZXJ0aWVzLiBpZiBhbGwgbmVjZXNzYXJ5IGFyZSBwcmVzZW50IHRoZW4gaXQncyBhIHNwbGF0LiBPdGhlcndpc2UsIGl0J3MgYSBwb2ludCBjbG91ZFxyXG4gICAgICAgICAgICAvLyBpZiBmYWNlcyBhcmUgZm91bmQsIHRoZW4gaXQncyBhIHN0YW5kYXJkIG1lc2hcclxuICAgICAgICAgICAgbGV0IHByb3BlcnR5Q291bnQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlDb2xvckNvdW50ID0gMDtcclxuICAgICAgICAgICAgY29uc3Qgc3BsYXRQcm9wZXJ0aWVzID0gW1wieFwiLCBcInlcIiwgXCJ6XCIsIFwic2NhbGVfMFwiLCBcInNjYWxlXzFcIiwgXCJzY2FsZV8yXCIsIFwib3BhY2l0eVwiLCBcInJvdF8wXCIsIFwicm90XzFcIiwgXCJyb3RfMlwiLCBcInJvdF8zXCJdO1xyXG4gICAgICAgICAgICBjb25zdCBzcGxhdENvbG9yUHJvcGVydGllcyA9IFtcInJlZFwiLCBcImdyZWVuXCIsIFwiYmx1ZVwiLCBcImZfZGNfMFwiLCBcImZfZGNfMVwiLCBcImZfZGNfMlwiXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHlJbmRleCA9IDA7IHByb3BlcnR5SW5kZXggPCB2ZXJ0ZXhQcm9wZXJ0aWVzLmxlbmd0aDsgcHJvcGVydHlJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHZlcnRleFByb3BlcnRpZXNbcHJvcGVydHlJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsYXRQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5Lm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNwbGF0Q29sb3JQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5Lm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlDb2xvckNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaGFzTWFuZGF0b3J5UHJvcGVydGllcyA9IHByb3BlcnR5Q291bnQgPT0gc3BsYXRQcm9wZXJ0aWVzLmxlbmd0aCAmJiBwcm9wZXJ0eUNvbG9yQ291bnQgPT0gMztcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudE1vZGUgPSBmYWNlQ291bnQgPyBNb2RlLk1lc2ggOiBoYXNNYW5kYXRvcnlQcm9wZXJ0aWVzID8gTW9kZS5TcGxhdCA6IE1vZGUuUG9pbnRDbG91ZDtcclxuICAgICAgICAgICAgLy8gcGFyc2VkIHJlYWR5IHJlYWR5IHRvIGJlIHVzZWQgYXMgYSBzcGxhdFxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoeyBtb2RlOiBjdXJyZW50TW9kZSwgZGF0YTogc3BsYXRzRGF0YS5idWZmZXIsIHNoOiBzcGxhdHNEYXRhLnNoLCBmYWNlczogZmFjZXMsIGhhc1ZlcnRleENvbG9yczogISFwcm9wZXJ0eUNvbG9yQ291bnQsIGNvbXByZXNzZWQ6IGZhbHNlLCByYXdTcGxhdDogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBZGQgdGhpcyBsb2FkZXIgaW50byB0aGUgcmVnaXN0ZXIgcGx1Z2luXHJcblJlZ2lzdGVyU2NlbmVMb2FkZXJQbHVnaW4obmV3IFNQTEFURmlsZUxvYWRlcigpKTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMgKi9cclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5zY2FsYXJcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgU1BMQVRMb2FkaW5nT3B0aW9ucyB9IGZyb20gXCIuL3NwbGF0TG9hZGluZ09wdGlvbnNcIjtcclxuaW1wb3J0IHsgTW9kZSB9IGZyb20gXCIuL3NwbGF0RGVmc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElQYXJzZWRQTFkgfSBmcm9tIFwiLi9zcGxhdERlZnNcIjtcclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgU1BaIGRhdGEgYW5kIHJldHVybnMgYSBwcm9taXNlIHJlc29sdmluZyB0byBhbiBJUGFyc2VkUExZIG9iamVjdC5cclxuICogQHBhcmFtIGRhdGEgVGhlIEFycmF5QnVmZmVyIGNvbnRhaW5pbmcgU1BaIGRhdGEuXHJcbiAqIEBwYXJhbSBzY2VuZSBUaGUgQmFieWxvbi5qcyBzY2VuZS5cclxuICogQHBhcmFtIGxvYWRpbmdPcHRpb25zIE9wdGlvbnMgZm9yIGxvYWRpbmcgR2F1c3NpYW4gU3BsYXR0aW5nIGZpbGVzLlxyXG4gKiBAcmV0dXJucyBBIHByb21pc2UgcmVzb2x2aW5nIHRvIHRoZSBwYXJzZWQgU1BaIGRhdGEuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUGFyc2VTcHooZGF0YTogQXJyYXlCdWZmZXIsIHNjZW5lOiBTY2VuZSwgbG9hZGluZ09wdGlvbnM6IFNQTEFUTG9hZGluZ09wdGlvbnMpOiBQcm9taXNlPElQYXJzZWRQTFk+IHtcclxuICAgIGNvbnN0IHVidWYgPSBuZXcgVWludDhBcnJheShkYXRhKTtcclxuICAgIGNvbnN0IHVidWZ1MzIgPSBuZXcgVWludDMyQXJyYXkoZGF0YS5zbGljZSgwLCAxMikpOyAvLyBPbmx5IG5lZWQgdWJ1ZnUzMlswXSB0byBbMl1cclxuICAgIC8vIGRlYnVnIGluZm9zXHJcbiAgICBjb25zdCBzcGxhdENvdW50ID0gdWJ1ZnUzMlsyXTtcclxuXHJcbiAgICBjb25zdCBzaERlZ3JlZSA9IHVidWZbMTJdO1xyXG4gICAgY29uc3QgZnJhY3Rpb25hbEJpdHMgPSB1YnVmWzEzXTtcclxuICAgIGNvbnN0IGZsYWdzID0gdWJ1ZlsxNF07XHJcbiAgICBjb25zdCByZXNlcnZlZCA9IHVidWZbMTVdO1xyXG4gICAgY29uc3QgdmVyc2lvbiA9IHVidWZ1MzJbMV07XHJcblxyXG4gICAgLy8gY2hlY2sgbWFnaWMgYW5kIHZlcnNpb25cclxuICAgIGlmIChyZXNlcnZlZCB8fCB1YnVmdTMyWzBdICE9IDB4NTA1MzQ3NGUgfHwgKHZlcnNpb24gIT0gMiAmJiB2ZXJzaW9uICE9IDMpKSB7XHJcbiAgICAgICAgLy8gcmVzZXJ2ZWQgbXVzdCBiZSAwXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyBtb2RlOiBNb2RlLlJlamVjdCwgZGF0YTogYnVmZmVyLCBoYXNWZXJ0ZXhDb2xvcnM6IGZhbHNlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJvd091dHB1dExlbmd0aCA9IDMgKiA0ICsgMyAqIDQgKyA0ICsgNDsgLy8gMzJcclxuICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihyb3dPdXRwdXRMZW5ndGggKiBzcGxhdENvdW50KTtcclxuXHJcbiAgICBjb25zdCBwb3NpdGlvblNjYWxlID0gMS4wIC8gKDEgPDwgZnJhY3Rpb25hbEJpdHMpO1xyXG5cclxuICAgIGNvbnN0IGludDMyVmlldyA9IG5ldyBJbnQzMkFycmF5KDEpO1xyXG4gICAgY29uc3QgdWludDhWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoaW50MzJWaWV3LmJ1ZmZlcik7XHJcbiAgICBjb25zdCByZWFkMjRiQ29tcG9uZW50ID0gZnVuY3Rpb24gKHU4OiBVaW50OEFycmF5LCBvZmZzZXQ6IG51bWJlcikge1xyXG4gICAgICAgIHVpbnQ4Vmlld1swXSA9IHU4W29mZnNldCArIDBdO1xyXG4gICAgICAgIHVpbnQ4Vmlld1sxXSA9IHU4W29mZnNldCArIDFdO1xyXG4gICAgICAgIHVpbnQ4Vmlld1syXSA9IHU4W29mZnNldCArIDJdO1xyXG4gICAgICAgIHVpbnQ4Vmlld1szXSA9IHU4W29mZnNldCArIDJdICYgMHg4MCA/IDB4ZmYgOiAweDAwO1xyXG4gICAgICAgIHJldHVybiBpbnQzMlZpZXdbMF0gKiBwb3NpdGlvblNjYWxlO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgYnl0ZU9mZnNldCA9IDE2O1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheShidWZmZXIpO1xyXG4gICAgY29uc3Qgc2NhbGUgPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlcik7XHJcbiAgICBjb25zdCByZ2JhID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGJ1ZmZlcik7XHJcbiAgICBjb25zdCByb3QgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoYnVmZmVyKTtcclxuXHJcbiAgICBsZXQgY29vcmRpbmF0ZVNpZ24gPSAxO1xyXG4gICAgbGV0IHF1YXRlcm5pb25PZmZzZXQgPSAwO1xyXG4gICAgaWYgKCFsb2FkaW5nT3B0aW9ucy5mbGlwWSkge1xyXG4gICAgICAgIGNvb3JkaW5hdGVTaWduID0gLTE7XHJcbiAgICAgICAgcXVhdGVybmlvbk9mZnNldCA9IDI1NTtcclxuICAgIH1cclxuICAgIC8vIHBvc2l0aW9uc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICBwb3NpdGlvbltpICogOCArIDBdID0gcmVhZDI0YkNvbXBvbmVudCh1YnVmLCBieXRlT2Zmc2V0ICsgMCk7XHJcbiAgICAgICAgcG9zaXRpb25baSAqIDggKyAxXSA9IGNvb3JkaW5hdGVTaWduICogcmVhZDI0YkNvbXBvbmVudCh1YnVmLCBieXRlT2Zmc2V0ICsgMyk7XHJcbiAgICAgICAgcG9zaXRpb25baSAqIDggKyAyXSA9IGNvb3JkaW5hdGVTaWduICogcmVhZDI0YkNvbXBvbmVudCh1YnVmLCBieXRlT2Zmc2V0ICsgNik7XHJcbiAgICAgICAgYnl0ZU9mZnNldCArPSA5O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbG9yc1xyXG4gICAgY29uc3Qgc2hDMCA9IDAuMjgyO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBjb21wb25lbnQgPSAwOyBjb21wb25lbnQgPCAzOyBjb21wb25lbnQrKykge1xyXG4gICAgICAgICAgICBjb25zdCBieXRlVmFsdWUgPSB1YnVmW2J5dGVPZmZzZXQgKyBzcGxhdENvdW50ICsgaSAqIDMgKyBjb21wb25lbnRdO1xyXG4gICAgICAgICAgICAvLyAwLjE1IGlzIGhhcmQgY29kZWQgdmFsdWUgZnJvbSBzcHpcclxuICAgICAgICAgICAgLy8gU2NhbGUgZmFjdG9yIGZvciBEQyBjb2xvciBjb21wb25lbnRzLiBUbyBjb252ZXJ0IHRvIFJHQiwgd2Ugc2hvdWxkIG11bHRpcGx5IGJ5IDAuMjgyLCBidXQgaXQgY2FuXHJcbiAgICAgICAgICAgIC8vIGJlIHVzZWZ1bCB0byByZXByZXNlbnQgYmFzZSBjb2xvcnMgdGhhdCBhcmUgb3V0IG9mIHJhbmdlIGlmIHRoZSBoaWdoZXIgc3BoZXJpY2FsIGhhcm1vbmljcyBiYW5kc1xyXG4gICAgICAgICAgICAvLyBicmluZyB0aGVtIGJhY2sgaW50byByYW5nZSBzbyB3ZSBtdWx0aXBseSBieSBhIHNtYWxsZXIgdmFsdWUuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKGJ5dGVWYWx1ZSAtIDEyNy41KSAvICgwLjE1ICogMjU1KTtcclxuICAgICAgICAgICAgcmdiYVtpICogMzIgKyAyNCArIGNvbXBvbmVudF0gPSBTY2FsYXIuQ2xhbXAoKDAuNSArIHNoQzAgKiB2YWx1ZSkgKiAyNTUsIDAsIDI1NSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZ2JhW2kgKiAzMiArIDI0ICsgM10gPSB1YnVmW2J5dGVPZmZzZXQgKyBpXTtcclxuICAgIH1cclxuICAgIGJ5dGVPZmZzZXQgKz0gc3BsYXRDb3VudCAqIDQ7XHJcblxyXG4gICAgLy8gc2NhbGVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGF0Q291bnQ7IGkrKykge1xyXG4gICAgICAgIHNjYWxlW2kgKiA4ICsgMyArIDBdID0gTWF0aC5leHAodWJ1ZltieXRlT2Zmc2V0ICsgMF0gLyAxNi4wIC0gMTAuMCk7XHJcbiAgICAgICAgc2NhbGVbaSAqIDggKyAzICsgMV0gPSBNYXRoLmV4cCh1YnVmW2J5dGVPZmZzZXQgKyAxXSAvIDE2LjAgLSAxMC4wKTtcclxuICAgICAgICBzY2FsZVtpICogOCArIDMgKyAyXSA9IE1hdGguZXhwKHVidWZbYnl0ZU9mZnNldCArIDJdIC8gMTYuMCAtIDEwLjApO1xyXG4gICAgICAgIGJ5dGVPZmZzZXQgKz0gMztcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb252ZXJ0IHF1YXRlcm5pb25cclxuICAgIGlmICh2ZXJzaW9uID49IDMpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICBJbiB2ZXJzaW9uIDMsIHJvdGF0aW9ucyBhcmUgcmVwcmVzZW50ZWQgYXMgdGhlIHNtYWxsZXN0IHRocmVlIGNvbXBvbmVudHMgb2YgdGhlIG5vcm1hbGl6ZWQgcm90YXRpb24gcXVhdGVybmlvbiwgZm9yIG9wdGltYWwgcm90YXRpb24gYWNjdXJhY3kuXHJcbiAgICAgICAgICAgIFRoZSBsYXJnZXN0IGNvbXBvbmVudCBjYW4gYmUgZGVyaXZlZCBmcm9tIHRoZSBvdGhlcnMgYW5kIGlzIG5vdCBzdG9yZWQuIEl0cyBpbmRleCBpcyBzdG9yZWQgb24gMiBiaXRzXHJcbiAgICAgICAgICAgIGFuZCBlYWNoIG9mIHRoZSBzbWFsbGVzdCB0aHJlZSBjb21wb25lbnRzIGlzIGVuY29kZWQgYXMgYSAxMC1iaXQgc2lnbmVkIGludGVnZXIuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBzcXJ0MTIgPSBNYXRoLlNRUlQxXzI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IFt1YnVmW2J5dGVPZmZzZXQgKyAwXSwgdWJ1ZltieXRlT2Zmc2V0ICsgMV0sIHVidWZbYnl0ZU9mZnNldCArIDJdLCB1YnVmW2J5dGVPZmZzZXQgKyAzXV07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb21wID0gclswXSArIChyWzFdIDw8IDgpICsgKHJbMl0gPDwgMTYpICsgKHJbM10gPDwgMjQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY21hc2sgPSAoMSA8PCA5KSAtIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdGF0aW9uID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGlMYXJnZXN0ID0gY29tcCA+Pj4gMzA7XHJcbiAgICAgICAgICAgIGxldCByZW1haW5pbmcgPSBjb21wO1xyXG4gICAgICAgICAgICBsZXQgc3VtU3F1YXJlcyA9IDA7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpICE9PSBpTGFyZ2VzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hZyA9IHJlbWFpbmluZyAmIGNtYXNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5lZ2JpdCA9IChyZW1haW5pbmcgPj4+IDkpICYgMHgxO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZyA9IHJlbWFpbmluZyA+Pj4gMTA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uW2ldID0gc3FydDEyICogKG1hZyAvIGNtYXNrKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmVnYml0ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uW2ldID0gLXJvdGF0aW9uW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWNjdW11bGF0ZSB0aGUgc3VtIG9mIHNxdWFyZXNcclxuICAgICAgICAgICAgICAgICAgICBzdW1TcXVhcmVzICs9IHJvdGF0aW9uW2ldICogcm90YXRpb25baV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IDEgLSBzdW1TcXVhcmVzO1xyXG4gICAgICAgICAgICByb3RhdGlvbltpTGFyZ2VzdF0gPSBNYXRoLnNxcnQoTWF0aC5tYXgoc3F1YXJlLCAwKSk7XHJcblxyXG4gICAgICAgICAgICByb3RhdGlvblsxXSAqPSBjb29yZGluYXRlU2lnbjtcclxuICAgICAgICAgICAgcm90YXRpb25bMl0gKj0gY29vcmRpbmF0ZVNpZ247XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaHVmZmxlID0gWzMsIDAsIDEsIDJdOyAvLyBzaHVmZmxlIHRvIG1hdGNoIHRoZSBvcmRlciBvZiB0aGUgcXVhdGVybmlvbiBjb21wb25lbnRzIGluIHRoZSBzcGxhdCBmaWxlXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICByb3RbaSAqIDMyICsgMjggKyBqXSA9IE1hdGgucm91bmQoMTI3LjUgKyByb3RhdGlvbltzaHVmZmxlW2pdXSAqIDEyNy41KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnl0ZU9mZnNldCArPSA0O1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgSW4gdmVyc2lvbiAyLCByb3RhdGlvbnMgYXJlIHJlcHJlc2VudGVkIGFzIHRoZSBgKHgsIHksIHopYCBjb21wb25lbnRzIG9mIHRoZSBub3JtYWxpemVkIHJvdGF0aW9uIHF1YXRlcm5pb24uIFRoZVxyXG4gICAgICAgICAgICBgd2AgY29tcG9uZW50IGNhbiBiZSBkZXJpdmVkIGZyb20gdGhlIG90aGVycyBhbmQgaXMgbm90IHN0b3JlZC4gRWFjaCBjb21wb25lbnQgaXMgZW5jb2RlZCBhcyBhblxyXG4gICAgICAgICAgICA4LWJpdCBzaWduZWQgaW50ZWdlci5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsYXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSB1YnVmW2J5dGVPZmZzZXQgKyAwXTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IHVidWZbYnl0ZU9mZnNldCArIDFdICogY29vcmRpbmF0ZVNpZ24gKyBxdWF0ZXJuaW9uT2Zmc2V0O1xyXG4gICAgICAgICAgICBjb25zdCB6ID0gdWJ1ZltieXRlT2Zmc2V0ICsgMl0gKiBjb29yZGluYXRlU2lnbiArIHF1YXRlcm5pb25PZmZzZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG54ID0geCAvIDEyNy41IC0gMTtcclxuICAgICAgICAgICAgY29uc3QgbnkgPSB5IC8gMTI3LjUgLSAxO1xyXG4gICAgICAgICAgICBjb25zdCBueiA9IHogLyAxMjcuNSAtIDE7XHJcbiAgICAgICAgICAgIHJvdFtpICogMzIgKyAyOCArIDFdID0geDtcclxuICAgICAgICAgICAgcm90W2kgKiAzMiArIDI4ICsgMl0gPSB5O1xyXG4gICAgICAgICAgICByb3RbaSAqIDMyICsgMjggKyAzXSA9IHo7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSAxIC0gKG54ICogbnggKyBueSAqIG55ICsgbnogKiBueik7XHJcbiAgICAgICAgICAgIHJvdFtpICogMzIgKyAyOCArIDBdID0gMTI3LjUgKyBNYXRoLnNxcnQodiA8IDAgPyAwIDogdikgKiAxMjcuNTtcclxuXHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9TSFxyXG4gICAgaWYgKHNoRGVncmVlKSB7XHJcbiAgICAgICAgLy8gc2hWZWN0b3JDb3VudCBpcyA6IDMgZm9yIGRpbSA9IDEsIDggZm9yIGRpbSA9IDIgYW5kIDE1IGZvciBkaW0gPSAzXHJcbiAgICAgICAgLy8gbnVtYmVyIG9mIHZlYzMgdmVjdG9yIG5lZWRlZCBwZXIgc3BsYXRcclxuICAgICAgICBjb25zdCBzaFZlY3RvckNvdW50ID0gKHNoRGVncmVlICsgMSkgKiAoc2hEZWdyZWUgKyAxKSAtIDE7IC8vIG1pbnVzIDEgYmVjYXVzZSBzaDAgaXMgY29sb3JcclxuICAgICAgICAvLyBudW1iZXIgb2YgY29tcG9uZW50IHZhbHVlcyA6IDMgcGVyIHZlY3RvcjMgKDQ1KVxyXG4gICAgICAgIGNvbnN0IHNoQ29tcG9uZW50Q291bnQgPSBzaFZlY3RvckNvdW50ICogMztcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dHVyZUNvdW50ID0gTWF0aC5jZWlsKHNoQ29tcG9uZW50Q291bnQgLyAxNik7IC8vIDQgY29tcG9uZW50cyBjYW4gYmUgc3RvcmVkIHBlciB0ZXh0dXJlLCA0IHNoIHBlciBjb21wb25lbnRcclxuICAgICAgICBsZXQgc2hJbmRleFJlYWQgPSBieXRlT2Zmc2V0O1xyXG5cclxuICAgICAgICAvLyBzaCBpcyBhbiBhcnJheSBvZiB1aW50OGFycmF5IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSBzaCB0ZXh0dXJlc1xyXG4gICAgICAgIGNvbnN0IHNoOiBVaW50OEFycmF5W10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgZW5naW5lID0gc2NlbmUuZ2V0RW5naW5lKCk7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBlbmdpbmUuZ2V0Q2FwcygpLm1heFRleHR1cmVTaXplO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGguY2VpbChzcGxhdENvdW50IC8gd2lkdGgpO1xyXG4gICAgICAgIC8vIGNyZWF0ZSBhcnJheSBmb3IgdGhlIG51bWJlciBvZiB0ZXh0dXJlcyBuZWVkZWQuXHJcbiAgICAgICAgZm9yIChsZXQgdGV4dHVyZUluZGV4ID0gMDsgdGV4dHVyZUluZGV4IDwgdGV4dHVyZUNvdW50OyB0ZXh0dXJlSW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFVpbnQ4QXJyYXkoaGVpZ2h0ICogd2lkdGggKiA0ICogNCk7IC8vIDQgY29tcG9uZW50cyBwZXIgdGV4dHVyZSwgNCBzaCBwZXIgY29tcG9uZW50XHJcbiAgICAgICAgICAgIHNoLnB1c2godGV4dHVyZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGF0Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBzaEluZGV4V3JpdGUgPSAwOyBzaEluZGV4V3JpdGUgPCBzaENvbXBvbmVudENvdW50OyBzaEluZGV4V3JpdGUrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hWYWx1ZSA9IHVidWZbc2hJbmRleFJlYWQrK107XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZUluZGV4ID0gTWF0aC5mbG9vcihzaEluZGV4V3JpdGUgLyAxNik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaEFycmF5ID0gc2hbdGV4dHVyZUluZGV4XTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBieXRlSW5kZXhJblRleHR1cmUgPSBzaEluZGV4V3JpdGUgJSAxNjsgLy8gWzAuLjE1XVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0UGVyU3BsYXQgPSBpICogMTY7IC8vIDE2IHNoIHZhbHVlcyBwZXIgdGV4dHVyZSBwZXIgc3BsYXQuXHJcbiAgICAgICAgICAgICAgICBzaEFycmF5W2J5dGVJbmRleEluVGV4dHVyZSArIG9mZnNldFBlclNwbGF0XSA9IHNoVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHsgbW9kZTogTW9kZS5TcGxhdCwgZGF0YTogYnVmZmVyLCBoYXNWZXJ0ZXhDb2xvcnM6IGZhbHNlLCBzaDogc2gsIHRyYWluZWRXaXRoQW50aWFsaWFzaW5nOiAhIWZsYWdzIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoeyBtb2RlOiBNb2RlLlNwbGF0LCBkYXRhOiBidWZmZXIsIGhhc1ZlcnRleENvbG9yczogZmFsc2UsIHRyYWluZWRXaXRoQW50aWFsaWFzaW5nOiAhIWZsYWdzIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9