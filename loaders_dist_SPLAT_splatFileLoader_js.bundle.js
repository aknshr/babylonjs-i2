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
            const gaussianSplatting = this._loadingOptions.gaussianSplattingMesh ?? new core_Meshes_GaussianSplatting_gaussianSplattingMesh__WEBPACK_IMPORTED_MODULE_2__.GaussianSplattingMesh("GaussianSplatting", null, scene, this._loadingOptions.keepInRam);
            gaussianSplatting._parentContainer = this._assetContainer;
            babylonMeshesArray.push(gaussianSplatting);
            gaussianSplatting.updateData(parsedSOG.data, parsedSOG.sh, { flipY: false });
            gaussianSplatting.scaling.y *= -1;
            gaussianSplatting.computeWorldMatrix(true);
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
                    const gaussianSplatting = this._loadingOptions.gaussianSplattingMesh ?? new core_Meshes_GaussianSplatting_gaussianSplattingMesh__WEBPACK_IMPORTED_MODULE_2__.GaussianSplattingMesh("GaussianSplatting", null, scene, this._loadingOptions.keepInRam);
                    if (parsedSPZ.trainedWithAntialiasing) {
                        const gsMaterial = gaussianSplatting.material;
                        gsMaterial.kernelSize = 0.1;
                        gsMaterial.compensation = true;
                    }
                    gaussianSplatting._parentContainer = this._assetContainer;
                    babylonMeshesArray.push(gaussianSplatting);
                    gaussianSplatting.updateData(parsedSPZ.data, parsedSPZ.sh, { flipY: false });
                    if (!this._loadingOptions.flipY) {
                        gaussianSplatting.scaling.y *= -1.0;
                        gaussianSplatting.computeWorldMatrix(true);
                    }
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
                                const gaussianSplatting = this._loadingOptions.gaussianSplattingMesh ?? new core_Meshes_GaussianSplatting_gaussianSplattingMesh__WEBPACK_IMPORTED_MODULE_2__.GaussianSplattingMesh("GaussianSplatting", null, scene, this._loadingOptions.keepInRam);
                                gaussianSplatting._parentContainer = this._assetContainer;
                                babylonMeshesArray.push(gaussianSplatting);
                                gaussianSplatting.updateData(parsedPLY.data, parsedPLY.sh, { flipY: false });
                                gaussianSplatting.scaling.y *= -1.0;
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
                                gaussianSplatting.computeWorldMatrix(true);
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
    // positions
    for (let i = 0; i < splatCount; i++) {
        position[i * 8 + 0] = read24bComponent(ubuf, byteOffset + 0);
        position[i * 8 + 1] = read24bComponent(ubuf, byteOffset + 3);
        position[i * 8 + 2] = read24bComponent(ubuf, byteOffset + 6);
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
            const y = ubuf[byteOffset + 1];
            const z = ubuf[byteOffset + 2];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X1NQTEFUX3NwbGF0RmlsZUxvYWRlcl9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFJQTs7QUFFQTtBQUNBO0FBc0ZBOzs7Ozs7OztBQVFBO0FBQ0E7QUE5RkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFxQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFzREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBbEZBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFTQTs7O0FBR0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMza0NBO0FBc0ZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVaQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFFQTtBQWdCQTs7OztBQUlBO0FBQ0E7QUFlQTs7O0FBR0E7QUFDQTtBQWxCQTs7QUFFQTtBQUNBO0FBRUE7QUFHQTs7O0FBR0E7QUFDQTtBQU9BO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF0aEJBO0FBQ0E7QUFDQTtBQUNBO0FBc2hCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdsQkE7QUFDQTtBQU1BOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvUGFydGljbGVzL2Nsb3VkUG9pbnQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9QYXJ0aWNsZXMvcG9pbnRzQ2xvdWRTeXN0ZW0udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9TUExBVC9zb2cudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9TUExBVC9zcGxhdEZpbGVMb2FkZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9TUExBVC9zcHoudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdHJpeCB9IGZyb20gXCIuLi9NYXRocy9tYXRoXCI7XHJcbmltcG9ydCB7IENvbG9yNCwgVmVjdG9yMiwgVmVjdG9yMywgVG1wVmVjdG9ycywgUXVhdGVybmlvbiB9IGZyb20gXCIuLi9NYXRocy9tYXRoXCI7XHJcbmltcG9ydCB0eXBlIHsgTWVzaCB9IGZyb20gXCIuLi9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJvdW5kaW5nSW5mbyB9IGZyb20gXCIuLi9DdWxsaW5nL2JvdW5kaW5nSW5mb1wiO1xyXG5pbXBvcnQgdHlwZSB7IFBvaW50c0Nsb3VkU3lzdGVtIH0gZnJvbSBcIi4vcG9pbnRzQ2xvdWRTeXN0ZW1cIjtcclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgb25lIHBhcnRpY2xlIG9mIGEgcG9pbnRzIGNsb3VkIHN5c3RlbS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbG91ZFBvaW50IHtcclxuICAgIC8qKlxyXG4gICAgICogcGFydGljbGUgZ2xvYmFsIGluZGV4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpZHg6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb2xvciBvZiB0aGUgcGFydGljbGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbG9yOiBOdWxsYWJsZTxDb2xvcjQ+ID0gbmV3IENvbG9yNCgxLjAsIDEuMCwgMS4wLCAxLjApO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgd29ybGQgc3BhY2UgcG9zaXRpb24gb2YgdGhlIHBhcnRpY2xlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcG9zaXRpb246IFZlY3RvcjMgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHdvcmxkIHNwYWNlIHJvdGF0aW9uIG9mIHRoZSBwYXJ0aWNsZS4gKE5vdCB1c2UgaWYgcm90YXRpb25RdWF0ZXJuaW9uIGlzIHNldClcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJvdGF0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB3b3JsZCBzcGFjZSByb3RhdGlvbiBxdWF0ZXJuaW9uIG9mIHRoZSBwYXJ0aWNsZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJvdGF0aW9uUXVhdGVybmlvbjogTnVsbGFibGU8UXVhdGVybmlvbj47XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB1diBvZiB0aGUgcGFydGljbGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1djogTnVsbGFibGU8VmVjdG9yMj4gPSBuZXcgVmVjdG9yMigwLjAsIDAuMCk7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjdXJyZW50IHNwZWVkIG9mIHRoZSBwYXJ0aWNsZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZlbG9jaXR5OiBWZWN0b3IzID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwaXZvdCBwb2ludCBpbiB0aGUgcGFydGljbGUgbG9jYWwgc3BhY2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwaXZvdDogVmVjdG9yMyA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNdXN0IHRoZSBwYXJ0aWNsZSBiZSB0cmFuc2xhdGVkIGZyb20gaXRzIHBpdm90IHBvaW50IGluIGl0cyBsb2NhbCBzcGFjZSA/XHJcbiAgICAgKiBJbiB0aGlzIGNhc2UsIHRoZSBwaXZvdCBwb2ludCBpcyBzZXQgYXQgdGhlIG9yaWdpbiBvZiB0aGUgcGFydGljbGUgbG9jYWwgc3BhY2UgYW5kIHRoZSBwYXJ0aWNsZSBpcyB0cmFuc2xhdGVkLlxyXG4gICAgICogRGVmYXVsdCA6IGZhbHNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFuc2xhdGVGcm9tUGl2b3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogSW5kZXggb2YgdGhpcyBwYXJ0aWNsZSBpbiB0aGUgZ2xvYmFsIFwicG9zaXRpb25zXCIgYXJyYXkgKEludGVybmFsIHVzZSlcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3BvczogbnVtYmVyID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsIEluZGV4IG9mIHRoaXMgcGFydGljbGUgaW4gdGhlIGdsb2JhbCBcImluZGljZXNcIiBhcnJheSAoSW50ZXJuYWwgdXNlKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2luZDogbnVtYmVyID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogR3JvdXAgdGhpcyBwYXJ0aWNsZSBiZWxvbmdzIHRvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZ3JvdXA6IFBvaW50c0dyb3VwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHcm91cCBpZCBvZiB0aGlzIHBhcnRpY2xlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBncm91cElkOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRleCBvZiB0aGUgcGFydGljbGUgaW4gaXRzIGdyb3VwIGlkIChJbnRlcm5hbCB1c2UpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpZHhJbkdyb3VwOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWwgUGFydGljbGUgQm91bmRpbmdJbmZvIG9iamVjdCAoSW50ZXJuYWwgdXNlKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2JvdW5kaW5nSW5mbzogQm91bmRpbmdJbmZvO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWwgUmVmZXJlbmNlIHRvIHRoZSBQQ1MgdGhhdCB0aGUgcGFydGljbGUgYmVsb25ncyB0byAoSW50ZXJuYWwgdXNlKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3BjczogUG9pbnRzQ2xvdWRTeXN0ZW07XHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbCBTdGlsbCBzZXQgYXMgaW52aXNpYmxlIGluIG9yZGVyIHRvIHNraXAgdXNlbGVzcyBjb21wdXRhdGlvbnMgKEludGVybmFsIHVzZSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9zdGlsbEludmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWwgTGFzdCBjb21wdXRlZCBwYXJ0aWNsZSByb3RhdGlvbiBtYXRyaXhcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9yb3RhdGlvbk1hdHJpeDogbnVtYmVyW10gPSBbMS4wLCAwLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMC4wLCAwLjAsIDEuMF07XHJcbiAgICAvKipcclxuICAgICAqIFBhcmVudCBwYXJ0aWNsZSBJZCwgaWYgYW55LlxyXG4gICAgICogRGVmYXVsdCBudWxsLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGFyZW50SWQ6IE51bGxhYmxlPG51bWJlcj4gPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWwgSW50ZXJuYWwgZ2xvYmFsIHBvc2l0aW9uIGluIHRoZSBQQ1MuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZ2xvYmFsUG9zaXRpb246IFZlY3RvcjMgPSBWZWN0b3IzLlplcm8oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBQb2ludCBDbG91ZCBvYmplY3QuXHJcbiAgICAgKiBEb24ndCBjcmVhdGUgcGFydGljbGVzIG1hbnVhbGx5LCB1c2UgaW5zdGVhZCB0aGUgUENTIGludGVybmFsIHRvb2xzIGxpa2UgX2FkZFBhcnRpY2xlKClcclxuICAgICAqIEBwYXJhbSBwYXJ0aWNsZUluZGV4IChpbnRlZ2VyKSBpcyB0aGUgcGFydGljbGUgaW5kZXggaW4gdGhlIFBDUyBwb29sLiBJdCdzIGFsc28gdGhlIHBhcnRpY2xlIGlkZW50aWZpZXIuXHJcbiAgICAgKiBAcGFyYW0gZ3JvdXAgKFBvaW50c0dyb3VwKSBpcyB0aGUgZ3JvdXAgdGhlIHBhcnRpY2xlIGJlbG9uZ3MgdG9cclxuICAgICAqIEBwYXJhbSBncm91cElkIChpbnRlZ2VyKSBpcyB0aGUgZ3JvdXAgaWRlbnRpZmllciBpbiB0aGUgUENTLlxyXG4gICAgICogQHBhcmFtIGlkeEluR3JvdXAgKGludGVnZXIpIGlzIHRoZSBpbmRleCBvZiB0aGUgcGFydGljbGUgaW4gdGhlIGN1cnJlbnQgcG9pbnQgZ3JvdXAgKGV4OiB0aGUgMTB0aCBwb2ludCBvZiBhZGRQb2ludHMoMzApKVxyXG4gICAgICogQHBhcmFtIHBjcyBkZWZpbmVzIHRoZSBQQ1MgaXQgaXMgYXNzb2NpYXRlZCB0b1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJ0aWNsZUluZGV4OiBudW1iZXIsIGdyb3VwOiBQb2ludHNHcm91cCwgZ3JvdXBJZDogbnVtYmVyLCBpZHhJbkdyb3VwOiBudW1iZXIsIHBjczogUG9pbnRzQ2xvdWRTeXN0ZW0pIHtcclxuICAgICAgICB0aGlzLmlkeCA9IHBhcnRpY2xlSW5kZXg7XHJcbiAgICAgICAgdGhpcy5fZ3JvdXAgPSBncm91cDtcclxuICAgICAgICB0aGlzLmdyb3VwSWQgPSBncm91cElkO1xyXG4gICAgICAgIHRoaXMuaWR4SW5Hcm91cCA9IGlkeEluR3JvdXA7XHJcbiAgICAgICAgdGhpcy5fcGNzID0gcGNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IHBvaW50IHNpemVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzaXplKCk6IFZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgcG9pbnQgc2l6ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHNpemUoc2NhbGU6IFZlY3RvcjMpIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBzY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExlZ2FjeSBzdXBwb3J0LCBjaGFuZ2VkIHF1YXRlcm5pb24gdG8gcm90YXRpb25RdWF0ZXJuaW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcXVhdGVybmlvbigpOiBOdWxsYWJsZTxRdWF0ZXJuaW9uPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGVnYWN5IHN1cHBvcnQsIGNoYW5nZWQgcXVhdGVybmlvbiB0byByb3RhdGlvblF1YXRlcm5pb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBxdWF0ZXJuaW9uKHE6IE51bGxhYmxlPFF1YXRlcm5pb24+KSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblF1YXRlcm5pb24gPSBxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIGJvb2xlYW4uIFRydWUgaWYgdGhlIHBhcnRpY2xlIGludGVyc2VjdHMgYSBtZXNoLCBlbHNlIGZhbHNlXHJcbiAgICAgKiBUaGUgaW50ZXJzZWN0aW9uIGlzIGNvbXB1dGVkIG9uIHRoZSBwYXJ0aWNsZSBwb3NpdGlvbiBhbmQgQXhpcyBBbGlnbmVkIEJvdW5kaW5nIEJveCAoQUFCQikgb3IgU3BoZXJlXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IGlzIHRoZSBvYmplY3QgKHBvaW50IG9yIG1lc2gpIHdoYXQgdGhlIGludGVyc2VjdGlvbiBpcyBjb21wdXRlZCBhZ2FpbnN0XHJcbiAgICAgKiBAcGFyYW0gaXNTcGhlcmUgaXMgYm9vbGVhbiBmbGFnIHdoZW4gZmFsc2UgKGRlZmF1bHQpIGJvdW5kaW5nIGJveCBvZiBtZXNoIGlzIHVzZWQsIHdoZW4gdHJ1ZSB0aGUgYm91bmRpbmcgc3BoZXJlIGlzIHVzZWRcclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgaXQgaW50ZXJzZWN0c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW50ZXJzZWN0c01lc2godGFyZ2V0OiBNZXNoLCBpc1NwaGVyZTogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGFyZ2V0Lmhhc0JvdW5kaW5nSW5mbykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX3Bjcy5tZXNoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBvaW50IENsb3VkIFN5c3RlbSBkb2VzbnQgY29udGFpbiB0aGUgTWVzaFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc1NwaGVyZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmdldEJvdW5kaW5nSW5mbygpLmJvdW5kaW5nU3BoZXJlLmludGVyc2VjdHNQb2ludCh0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLl9wY3MubWVzaC5wb3NpdGlvbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYmJveCA9IHRhcmdldC5nZXRCb3VuZGluZ0luZm8oKS5ib3VuZGluZ0JveDtcclxuXHJcbiAgICAgICAgY29uc3QgbWF4WCA9IGJib3gubWF4aW11bVdvcmxkLng7XHJcbiAgICAgICAgY29uc3QgbWluWCA9IGJib3gubWluaW11bVdvcmxkLng7XHJcbiAgICAgICAgY29uc3QgbWF4WSA9IGJib3gubWF4aW11bVdvcmxkLnk7XHJcbiAgICAgICAgY29uc3QgbWluWSA9IGJib3gubWluaW11bVdvcmxkLnk7XHJcbiAgICAgICAgY29uc3QgbWF4WiA9IGJib3gubWF4aW11bVdvcmxkLno7XHJcbiAgICAgICAgY29uc3QgbWluWiA9IGJib3gubWluaW11bVdvcmxkLno7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLl9wY3MubWVzaC5wb3NpdGlvbi54O1xyXG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLl9wY3MubWVzaC5wb3NpdGlvbi55O1xyXG4gICAgICAgIGNvbnN0IHogPSB0aGlzLnBvc2l0aW9uLnogKyB0aGlzLl9wY3MubWVzaC5wb3NpdGlvbi56O1xyXG5cclxuICAgICAgICByZXR1cm4gbWluWCA8PSB4ICYmIHggPD0gbWF4WCAmJiBtaW5ZIDw9IHkgJiYgeSA8PSBtYXhZICYmIG1pblogPD0geiAmJiB6IDw9IG1heFo7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgdGhlIHJvdGF0aW9uIG1hdHJpeCBvZiB0aGUgcGFydGljbGVcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Um90YXRpb25NYXRyaXgobTogTWF0cml4KSB7XHJcbiAgICAgICAgbGV0IHF1YXRlcm5pb246IFF1YXRlcm5pb247XHJcbiAgICAgICAgaWYgKHRoaXMucm90YXRpb25RdWF0ZXJuaW9uKSB7XHJcbiAgICAgICAgICAgIHF1YXRlcm5pb24gPSB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBxdWF0ZXJuaW9uID0gVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzBdO1xyXG4gICAgICAgICAgICBjb25zdCByb3RhdGlvbiA9IHRoaXMucm90YXRpb247XHJcbiAgICAgICAgICAgIFF1YXRlcm5pb24uUm90YXRpb25ZYXdQaXRjaFJvbGxUb1JlZihyb3RhdGlvbi55LCByb3RhdGlvbi54LCByb3RhdGlvbi56LCBxdWF0ZXJuaW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHF1YXRlcm5pb24udG9Sb3RhdGlvbk1hdHJpeChtKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBncm91cCBvZiBwb2ludHMgaW4gYSBwb2ludHMgY2xvdWQgc3lzdGVtXHJcbiAqICAqIFBDUyBpbnRlcm5hbCB0b29sLCBkb24ndCB1c2UgaXQgbWFudWFsbHkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG9pbnRzR3JvdXAge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgb3Igc2V0IHRoZSBncm91cElkXHJcbiAgICAgKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIGdyb3VwSWQgaW5zdGVhZFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBwdWJsaWMgZ2V0IGdyb3VwSUQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cElkO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgcHVibGljIHNldCBncm91cElEKGdyb3VwSUQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBJZCA9IGdyb3VwSUQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBncm91cCBpZFxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBncm91cElkOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIGltYWdlIGRhdGEgZm9yIGdyb3VwIChpbnRlcm5hbCB1c2UpXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9ncm91cEltYWdlRGF0YTogTnVsbGFibGU8QXJyYXlCdWZmZXJWaWV3PjtcclxuICAgIC8qKlxyXG4gICAgICogSW1hZ2UgV2lkdGggKGludGVybmFsIHVzZSlcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2dyb3VwSW1nV2lkdGg6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogSW1hZ2UgSGVpZ2h0IChpbnRlcm5hbCB1c2UpXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9ncm91cEltZ0hlaWdodDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDdXN0b20gcG9zaXRpb24gZnVuY3Rpb24gKGludGVybmFsIHVzZSlcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3Bvc2l0aW9uRnVuY3Rpb246IE51bGxhYmxlPChwYXJ0aWNsZTogQ2xvdWRQb2ludCwgaT86IG51bWJlciwgcz86IG51bWJlcikgPT4gdm9pZD47XHJcbiAgICAvKipcclxuICAgICAqIGRlbnNpdHkgcGVyIGZhY2V0IGZvciBzdXJmYWNlIHBvaW50c1xyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZ3JvdXBEZW5zaXR5OiBudW1iZXJbXTtcclxuICAgIC8qKlxyXG4gICAgICogT25seSB3aGVuIHBvaW50cyBhcmUgY29sb3JlZCBieSB0ZXh0dXJlIGNhcnJpZXMgcG9pbnRlciB0byB0ZXh0dXJlIGxpc3QgYXJyYXlcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3RleHR1cmVOYjogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIHBvaW50cyBncm91cCBvYmplY3QuIFRoaXMgaXMgYW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHByb2R1Y2UgcGFydGljbGVzIGZvciB0aGUgUENTLlxyXG4gICAgICogUENTIGludGVybmFsIHRvb2wsIGRvbid0IHVzZSBpdCBtYW51YWxseS5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBwb3NGdW5jdGlvbjogTnVsbGFibGU8KHBhcnRpY2xlOiBDbG91ZFBvaW50LCBpPzogbnVtYmVyLCBzPzogbnVtYmVyKSA9PiB2b2lkPikge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBJZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uRnVuY3Rpb24gPSBwb3NGdW5jdGlvbjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IEluZGljZXNBcnJheSwgRmxvYXRBcnJheSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBDb2xvcjQsIENvbG9yMyB9IGZyb20gXCIuLi9NYXRocy9tYXRoXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIsIFZlY3RvcjMsIFZlY3RvcjQsIFRtcFZlY3RvcnMsIE1hdHJpeCB9IGZyb20gXCIuLi9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgVmVydGV4QnVmZmVyIH0gZnJvbSBcIi4uL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB7IFZlcnRleERhdGEgfSBmcm9tIFwiLi4vTWVzaGVzL21lc2gudmVydGV4RGF0YVwiO1xyXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcIi4uL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB7IEVuZ2luZVN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvZW5naW5lU3RvcmVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSwgSURpc3Bvc2FibGUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgQ2xvdWRQb2ludCwgUG9pbnRzR3JvdXAgfSBmcm9tIFwiLi9jbG91ZFBvaW50XCI7XHJcbmltcG9ydCB7IFJheSB9IGZyb20gXCIuLi9DdWxsaW5nL3JheVwiO1xyXG5pbXBvcnQgdHlwZSB7IFBpY2tpbmdJbmZvIH0gZnJvbSBcIi4uL0NvbGxpc2lvbnMvcGlja2luZ0luZm9cIjtcclxuaW1wb3J0IHsgU3RhbmRhcmRNYXRlcmlhbCB9IGZyb20gXCIuLi9NYXRlcmlhbHMvc3RhbmRhcmRNYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCIuLy4uL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBSYW5kb21SYW5nZSB9IGZyb20gXCIuLi9NYXRocy9tYXRoLnNjYWxhci5mdW5jdGlvbnNcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCIuLi9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuXHJcbi8qKiBEZWZpbmVzIHRoZSA0IGNvbG9yIG9wdGlvbnMgKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gUG9pbnRDb2xvciB7XHJcbiAgICAvKiogY29sb3IgdmFsdWUgKi9cclxuICAgIENvbG9yID0gMixcclxuICAgIC8qKiB1diB2YWx1ZSAqL1xyXG4gICAgVVYgPSAxLFxyXG4gICAgLyoqIHJhbmRvbSB2YWx1ZSAqL1xyXG4gICAgUmFuZG9tID0gMCxcclxuICAgIC8qKiBzdGF0ZWQgdmFsdWUgKi9cclxuICAgIFN0YXRlZCA9IDMsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgUG9pbnRDbG91ZFN5c3RlbSAoUENTKSBpcyBhIHNpbmdsZSB1cGRhdGFibGUgbWVzaC4gVGhlIHBvaW50cyBjb3JyZXNwb25kaW5nIHRvIHRoZSB2ZXJ0aWNlcyBvZiB0aGlzIGJpZyBtZXNoLlxyXG4gKiBBcyBpdCBpcyBqdXN0IGEgbWVzaCwgdGhlIFBvaW50Q2xvdWRTeXN0ZW0gaGFzIGFsbCB0aGUgc2FtZSBwcm9wZXJ0aWVzIGFzIGFueSBvdGhlciBCSlMgbWVzaCA6IG5vdCBtb3JlLCBub3QgbGVzcy4gSXQgY2FuIGJlIHNjYWxlZCwgcm90YXRlZCwgdHJhbnNsYXRlZCwgZW5saWdodGVkLCB0ZXh0dXJlZCwgbW92ZWQsIGV0Yy5cclxuXHJcbiAqIFRoZSBQb2ludENsb3VkU3lzdGVtIGlzIGFsc28gYSBwYXJ0aWNsZSBzeXN0ZW0sIHdpdGggZWFjaCBwb2ludCBiZWluZyBhIHBhcnRpY2xlLiBJdCBwcm92aWRlcyBzb21lIG1ldGhvZHMgdG8gbWFuYWdlIHRoZSBwYXJ0aWNsZXMuXHJcbiAqIEhvd2V2ZXIgaXQgaXMgYmVoYXZpb3IgYWdub3N0aWMuIFRoaXMgbWVhbnMgaXQgaGFzIG5vIGVtaXR0ZXIsIG5vIHBhcnRpY2xlIHBoeXNpY3MsIG5vIHBhcnRpY2xlIHJlY3ljbGVyLiBZb3UgaGF2ZSB0byBpbXBsZW1lbnQgeW91ciBvd24gYmVoYXZpb3IuXHJcbiAqXHJcbiAqIEZ1bGwgZG9jdW1lbnRhdGlvbiBoZXJlIDogVE8gQkUgRU5URVJFRFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvaW50c0Nsb3VkU3lzdGVtIGltcGxlbWVudHMgSURpc3Bvc2FibGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiAgVGhlIFBDUyBhcnJheSBvZiBjbG91ZCBwb2ludCBvYmplY3RzLiBKdXN0IGFjY2VzcyBlYWNoIHBhcnRpY2xlIGFzIHdpdGggYW55IGNsYXNzaWMgYXJyYXkuXHJcbiAgICAgKiAgRXhhbXBsZSA6IHZhciBwID0gU1BTLnBhcnRpY2xlc1tpXTtcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhcnRpY2xlczogQ2xvdWRQb2ludFtdID0gbmV3IEFycmF5PENsb3VkUG9pbnQ+KCk7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBQQ1MgdG90YWwgbnVtYmVyIG9mIHBhcnRpY2xlcy4gUmVhZCBvbmx5LiBVc2UgUENTLmNvdW50ZXIgaW5zdGVhZCBpZiB5b3UgbmVlZCB0byBzZXQgeW91ciBvd24gdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBuYlBhcnRpY2xlczogbnVtYmVyID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBhIGNvdW50ZXIgZm9yIHlvdXIgb3duIHVzYWdlLiBJdCdzIG5vdCBzZXQgYnkgYW55IFNQUyBmdW5jdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb3VudGVyOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgUENTIG5hbWUuIFRoaXMgbmFtZSBpcyBhbHNvIGdpdmVuIHRvIHRoZSB1bmRlcmx5aW5nIG1lc2guXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBQQ1MgbWVzaC4gSXQncyBhIHN0YW5kYXJkIEJKUyBNZXNoLCBzbyBhbGwgdGhlIG1ldGhvZHMgZnJvbSB0aGUgTWVzaCBjbGFzcyBhcmUgYXZhaWxhYmxlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbWVzaD86IE1lc2g7XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZW1wdHkgb2JqZWN0IGlzIGludGVuZGVkIHRvIHN0b3JlIHNvbWUgUENTIHNwZWNpZmljIG9yIHRlbXBvcmFyeSB2YWx1ZXMgaW4gb3JkZXIgdG8gbG93ZXIgdGhlIEdhcmJhZ2UgQ29sbGVjdG9yIGFjdGl2aXR5LlxyXG4gICAgICogUGxlYXNlIHJlYWQgOlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFyczogYW55ID0ge307XHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3NpemU6IG51bWJlcjsgLy9zaXplIG9mIGVhY2ggcG9pbnQgcGFydGljbGVcclxuXHJcbiAgICBwcml2YXRlIF9zY2VuZTogU2NlbmU7XHJcbiAgICBwcml2YXRlIF9wcm9taXNlczogQXJyYXk8UHJvbWlzZTxhbnk+PiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25zOiBudW1iZXJbXSA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICBwcml2YXRlIF9pbmRpY2VzOiBudW1iZXJbXSA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICBwcml2YXRlIF9ub3JtYWxzOiBudW1iZXJbXSA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICBwcml2YXRlIF9jb2xvcnM6IG51bWJlcltdID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgIHByaXZhdGUgX3V2czogbnVtYmVyW10gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgcHJpdmF0ZSBfaW5kaWNlczMyOiBJbmRpY2VzQXJyYXk7IC8vIHVzZWQgYXMgZGVwdGggc29ydGVkIGFycmF5IGlmIGRlcHRoIHNvcnQgZW5hYmxlZCwgZWxzZSB1c2VkIGFzIHR5cGVkIGluZGljZXNcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uczMyOiBGbG9hdDMyQXJyYXk7IC8vIHVwZGF0ZWQgcG9zaXRpb25zIGZvciB0aGUgVkJPXHJcbiAgICBwcml2YXRlIF9jb2xvcnMzMjogRmxvYXQzMkFycmF5O1xyXG4gICAgcHJpdmF0ZSBfdXZzMzI6IEZsb2F0MzJBcnJheTtcclxuICAgIHByaXZhdGUgX3VwZGF0YWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9pc1Zpc2liaWxpdHlCb3hMb2NrZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2Fsd2F5c1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2dyb3VwczogbnVtYmVyW10gPSBuZXcgQXJyYXk8bnVtYmVyPigpOyAvL3N0YXJ0IGluZGljZXMgZm9yIGVhY2ggZ3JvdXAgb2YgcGFydGljbGVzXHJcbiAgICBwcml2YXRlIF9ncm91cENvdW50ZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9jb21wdXRlUGFydGljbGVDb2xvcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9jb21wdXRlUGFydGljbGVUZXh0dXJlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2NvbXB1dGVQYXJ0aWNsZVJvdGF0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2NvbXB1dGVCb3VuZGluZ0JveDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfaXNSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgcGFydGljbGUgcG9zaXRpb25zIGNvbXB1dGVkIGJ5IHRoZSBQb2ludCBDbG91ZCBTeXN0ZW1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBwb3NpdGlvbnMoKTogRmxvYXQzMkFycmF5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb25zMzI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBwYXJ0aWNsZSBjb2xvcnMgY29tcHV0ZWQgYnkgdGhlIFBvaW50IENsb3VkIFN5c3RlbVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvbG9ycygpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvcnMzMjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHBhcnRpY2xlIHV2cyBjb21wdXRlZCBieSB0aGUgUG9pbnQgQ2xvdWQgU3lzdGVtXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdXZzKCk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3V2czMyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIFBDUyAoUG9pbnRzIENsb3VkIFN5c3RlbSkgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gbmFtZSAoU3RyaW5nKSBpcyB0aGUgUENTIG5hbWUsIHRoaXMgd2lsbCBiZSB0aGUgdW5kZXJseWluZyBtZXNoIG5hbWVcclxuICAgICAqIEBwYXJhbSBwb2ludFNpemUgKG51bWJlcikgaXMgdGhlIHNpemUgZm9yIGVhY2ggcG9pbnQuIEhhcyBubyBlZmZlY3Qgb24gYSBXZWJHUFUgZW5naW5lLlxyXG4gICAgICogQHBhcmFtIHNjZW5lIChTY2VuZSkgaXMgdGhlIHNjZW5lIGluIHdoaWNoIHRoZSBQQ1MgaXMgYWRkZWRcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIGRlZmluZXMgdGhlIG9wdGlvbnMgb2YgdGhlIFBDUyBlLmcuXHJcbiAgICAgKiAqIHVwZGF0YWJsZSAob3B0aW9uYWwgYm9vbGVhbiwgZGVmYXVsdCB0cnVlKSA6IGlmIHRoZSBQQ1MgbXVzdCBiZSB1cGRhdGFibGUgb3IgaW1tdXRhYmxlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcG9pbnRTaXplOiBudW1iZXIsIHNjZW5lOiBTY2VuZSwgb3B0aW9ucz86IHsgdXBkYXRhYmxlPzogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9zaXplID0gcG9pbnRTaXplO1xyXG4gICAgICAgIHRoaXMuX3NjZW5lID0gc2NlbmUgfHwgRW5naW5lU3RvcmUuTGFzdENyZWF0ZWRTY2VuZTtcclxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnVwZGF0YWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0YWJsZSA9IG9wdGlvbnMudXBkYXRhYmxlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIHRoZSBQQ1MgdW5kZXJseWluZyBtZXNoLiBSZXR1cm5zIGEgc3RhbmRhcmQgTWVzaC5cclxuICAgICAqIElmIG5vIHBvaW50cyB3ZXJlIGFkZGVkIHRvIHRoZSBQQ1MsIHRoZSByZXR1cm5lZCBtZXNoIGlzIGp1c3QgYSBzaW5nbGUgcG9pbnQuXHJcbiAgICAgKiBAcGFyYW0gbWF0ZXJpYWwgVGhlIG1hdGVyaWFsIHRvIHVzZSB0byByZW5kZXIgdGhlIG1lc2guIElmIG5vdCBwcm92aWRlZCwgd2lsbCBjcmVhdGUgYSBkZWZhdWx0IG9uZVxyXG4gICAgICogQHJldHVybnMgYSBwcm9taXNlIGZvciB0aGUgY3JlYXRlZCBtZXNoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBidWlsZE1lc2hBc3luYyhtYXRlcmlhbD86IE1hdGVyaWFsKTogUHJvbWlzZTxNZXNoPiB7XHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodGhpcy5fcHJvbWlzZXMpO1xyXG4gICAgICAgIHRoaXMuX2lzUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9idWlsZE1lc2hBc3luYyhtYXRlcmlhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfYnVpbGRNZXNoQXN5bmMobWF0ZXJpYWw/OiBNYXRlcmlhbCk6IFByb21pc2U8TWVzaD4ge1xyXG4gICAgICAgIGlmICh0aGlzLm5iUGFydGljbGVzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUG9pbnRzKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb25zMzIgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuX3Bvc2l0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5fdXZzMzIgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuX3V2cyk7XHJcbiAgICAgICAgdGhpcy5fY29sb3JzMzIgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuX2NvbG9ycyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZlcnRleERhdGEgPSBuZXcgVmVydGV4RGF0YSgpO1xyXG4gICAgICAgIHZlcnRleERhdGEuc2V0KHRoaXMuX3Bvc2l0aW9uczMyLCBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3V2czMyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmVydGV4RGF0YS5zZXQodGhpcy5fdXZzMzIsIFZlcnRleEJ1ZmZlci5VVktpbmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZWMgPSAwOyAvL2VtaXNzaXZlIGNvbG9yIHZhbHVlIDAgZm9yIFVWcywgMSBmb3IgY29sb3JcclxuICAgICAgICBpZiAodGhpcy5fY29sb3JzMzIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBlYyA9IDE7XHJcbiAgICAgICAgICAgIHZlcnRleERhdGEuc2V0KHRoaXMuX2NvbG9yczMyLCBWZXJ0ZXhCdWZmZXIuQ29sb3JLaW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWVzaCA9IG5ldyBNZXNoKHRoaXMubmFtZSwgdGhpcy5fc2NlbmUpO1xyXG4gICAgICAgIHZlcnRleERhdGEuYXBwbHlUb01lc2gobWVzaCwgdGhpcy5fdXBkYXRhYmxlKTtcclxuICAgICAgICB0aGlzLm1lc2ggPSBtZXNoO1xyXG5cclxuICAgICAgICAvLyBmcmVlIG1lbW9yeVxyXG4gICAgICAgICg8YW55PnRoaXMuX3Bvc2l0aW9ucykgPSBudWxsO1xyXG4gICAgICAgICg8YW55PnRoaXMuX3V2cykgPSBudWxsO1xyXG4gICAgICAgICg8YW55PnRoaXMuX2NvbG9ycykgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX3VwZGF0YWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1hdCA9IG1hdGVyaWFsO1xyXG5cclxuICAgICAgICBpZiAoIW1hdCkge1xyXG4gICAgICAgICAgICBtYXQgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChcInBvaW50IGNsb3VkIG1hdGVyaWFsXCIsIHRoaXMuX3NjZW5lKTtcclxuICAgICAgICAgICAgKDxTdGFuZGFyZE1hdGVyaWFsPm1hdCkuZW1pc3NpdmVDb2xvciA9IG5ldyBDb2xvcjMoZWMsIGVjLCBlYyk7XHJcbiAgICAgICAgICAgICg8U3RhbmRhcmRNYXRlcmlhbD5tYXQpLmRpc2FibGVMaWdodGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICg8U3RhbmRhcmRNYXRlcmlhbD5tYXQpLnBvaW50c0Nsb3VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgKDxTdGFuZGFyZE1hdGVyaWFsPm1hdCkucG9pbnRTaXplID0gdGhpcy5fc2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVzaC5tYXRlcmlhbCA9IG1hdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc2g7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkcyBhIG5ldyBwYXJ0aWNsZSBvYmplY3QgaW4gdGhlIHBhcnRpY2xlcyBhcnJheVxyXG4gICAgcHJpdmF0ZSBfYWRkUGFydGljbGUoaWR4OiBudW1iZXIsIGdyb3VwOiBQb2ludHNHcm91cCwgZ3JvdXBJZDogbnVtYmVyLCBpZHhJbkdyb3VwOiBudW1iZXIpOiBDbG91ZFBvaW50IHtcclxuICAgICAgICBjb25zdCBjcCA9IG5ldyBDbG91ZFBvaW50KGlkeCwgZ3JvdXAsIGdyb3VwSWQsIGlkeEluR3JvdXAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGFydGljbGVzLnB1c2goY3ApO1xyXG4gICAgICAgIHJldHVybiBjcDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yYW5kb21Vbml0VmVjdG9yKHBhcnRpY2xlOiBDbG91ZFBvaW50KTogdm9pZCB7XHJcbiAgICAgICAgcGFydGljbGUucG9zaXRpb24gPSBuZXcgVmVjdG9yMyhNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICBwYXJ0aWNsZS5jb2xvciA9IG5ldyBDb2xvcjQoMSwgMSwgMSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0Q29sb3JJbmRpY2VzRm9yQ29vcmQocG9pbnRzR3JvdXA6IFBvaW50c0dyb3VwLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlcik6IENvbG9yNCB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gPFVpbnQ4QXJyYXk+cG9pbnRzR3JvdXAuX2dyb3VwSW1hZ2VEYXRhO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0geSAqICh3aWR0aCAqIDQpICsgeCAqIDQ7XHJcbiAgICAgICAgY29uc3QgY29sb3JJbmRpY2VzID0gW2NvbG9yLCBjb2xvciArIDEsIGNvbG9yICsgMiwgY29sb3IgKyAzXTtcclxuICAgICAgICBjb25zdCByZWRJbmRleCA9IGNvbG9ySW5kaWNlc1swXTtcclxuICAgICAgICBjb25zdCBncmVlbkluZGV4ID0gY29sb3JJbmRpY2VzWzFdO1xyXG4gICAgICAgIGNvbnN0IGJsdWVJbmRleCA9IGNvbG9ySW5kaWNlc1syXTtcclxuICAgICAgICBjb25zdCBhbHBoYUluZGV4ID0gY29sb3JJbmRpY2VzWzNdO1xyXG4gICAgICAgIGNvbnN0IHJlZEZvckNvb3JkID0gaW1hZ2VEYXRhW3JlZEluZGV4XTtcclxuICAgICAgICBjb25zdCBncmVlbkZvckNvb3JkID0gaW1hZ2VEYXRhW2dyZWVuSW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGJsdWVGb3JDb29yZCA9IGltYWdlRGF0YVtibHVlSW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGFscGhhRm9yQ29vcmQgPSBpbWFnZURhdGFbYWxwaGFJbmRleF07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcjQocmVkRm9yQ29vcmQgLyAyNTUsIGdyZWVuRm9yQ29vcmQgLyAyNTUsIGJsdWVGb3JDb29yZCAvIDI1NSwgYWxwaGFGb3JDb29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0UG9pbnRzQ29sb3JPclVWKFxyXG4gICAgICAgIG1lc2g6IE1lc2gsXHJcbiAgICAgICAgcG9pbnRzR3JvdXA6IFBvaW50c0dyb3VwLFxyXG4gICAgICAgIGlzVm9sdW1lOiBib29sZWFuLFxyXG4gICAgICAgIGNvbG9yRnJvbVRleHR1cmU/OiBib29sZWFuLFxyXG4gICAgICAgIGhhc1RleHR1cmU/OiBib29sZWFuLFxyXG4gICAgICAgIGNvbG9yPzogQ29sb3I0LFxyXG4gICAgICAgIHJhbmdlPzogbnVtYmVyLFxyXG4gICAgICAgIHV2U2V0SW5kZXg/OiBudW1iZXJcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIHV2U2V0SW5kZXggPSB1dlNldEluZGV4ID8/IDA7XHJcblxyXG4gICAgICAgIGlmIChpc1ZvbHVtZSkge1xyXG4gICAgICAgICAgICBtZXNoLnVwZGF0ZUZhY2V0RGF0YSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm91bmRJbmZvID0gbWVzaC5nZXRCb3VuZGluZ0luZm8oKTtcclxuICAgICAgICBjb25zdCBkaWFtZXRlciA9IDIgKiBib3VuZEluZm8uYm91bmRpbmdTcGhlcmUucmFkaXVzO1xyXG5cclxuICAgICAgICBsZXQgbWVzaFBvcyA9IDxGbG9hdEFycmF5Pm1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQpO1xyXG4gICAgICAgIGNvbnN0IG1lc2hJbmQgPSA8SW5kaWNlc0FycmF5Pm1lc2guZ2V0SW5kaWNlcygpO1xyXG4gICAgICAgIGNvbnN0IG1lc2hVViA9IDxGbG9hdEFycmF5Pm1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5VVktpbmQgKyAodXZTZXRJbmRleCA/IHV2U2V0SW5kZXggKyAxIDogXCJcIikpO1xyXG4gICAgICAgIGNvbnN0IG1lc2hDb2wgPSA8RmxvYXRBcnJheT5tZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuQ29sb3JLaW5kKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGxhY2UgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICBtZXNoLmNvbXB1dGVXb3JsZE1hdHJpeCgpO1xyXG4gICAgICAgIGNvbnN0IG1lc2hNYXRyaXg6IE1hdHJpeCA9IG1lc2guZ2V0V29ybGRNYXRyaXgoKTtcclxuICAgICAgICBpZiAoIW1lc2hNYXRyaXguaXNJZGVudGl0eSgpKSB7XHJcbiAgICAgICAgICAgIG1lc2hQb3MgPSBtZXNoUG9zLnNsaWNlKDApO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IG1lc2hQb3MubGVuZ3RoIC8gMzsgcCsrKSB7XHJcbiAgICAgICAgICAgICAgICBWZWN0b3IzLlRyYW5zZm9ybUNvb3JkaW5hdGVzRnJvbUZsb2F0c1RvUmVmKG1lc2hQb3NbMyAqIHBdLCBtZXNoUG9zWzMgKiBwICsgMV0sIG1lc2hQb3NbMyAqIHAgKyAyXSwgbWVzaE1hdHJpeCwgcGxhY2UpO1xyXG4gICAgICAgICAgICAgICAgbWVzaFBvc1szICogcF0gPSBwbGFjZS54O1xyXG4gICAgICAgICAgICAgICAgbWVzaFBvc1szICogcCArIDFdID0gcGxhY2UueTtcclxuICAgICAgICAgICAgICAgIG1lc2hQb3NbMyAqIHAgKyAyXSA9IHBsYWNlLno7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpZHhQb2ludHM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIGxldCBpZDA6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGlkMTogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgaWQyOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCB2MFg6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHYwWTogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgdjBaOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCB2MVg6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHYxWTogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgdjFaOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCB2Mlg6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHYyWTogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgdjJaOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGNvbnN0IHZlcnRleDAgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXgxID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgY29uc3QgdmVydGV4MiA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IHZlYzAgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICBjb25zdCB2ZWMxID0gVmVjdG9yMy5aZXJvKCk7XHJcblxyXG4gICAgICAgIGxldCB1djBYOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCB1djBZOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCB1djFYOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCB1djFZOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCB1djJYOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCB1djJZOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGNvbnN0IHV2MCA9IFZlY3RvcjIuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IHV2MSA9IFZlY3RvcjIuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IHV2MiA9IFZlY3RvcjIuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IHV2ZWMwID0gVmVjdG9yMi5aZXJvKCk7XHJcbiAgICAgICAgY29uc3QgdXZlYzEgPSBWZWN0b3IyLlplcm8oKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbDBYOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBjb2wwWTogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgY29sMFo6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGNvbDBBOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBjb2wxWDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgY29sMVk6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGNvbDFaOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBjb2wxQTogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgY29sMlg6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGNvbDJZOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBjb2wyWjogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgY29sMkE6IG51bWJlciA9IDA7XHJcbiAgICAgICAgY29uc3QgY29sMCA9IFZlY3RvcjQuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IGNvbDEgPSBWZWN0b3I0Llplcm8oKTtcclxuICAgICAgICBjb25zdCBjb2wyID0gVmVjdG9yNC5aZXJvKCk7XHJcbiAgICAgICAgY29uc3QgY29sdmVjMCA9IFZlY3RvcjQuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IGNvbHZlYzEgPSBWZWN0b3I0Llplcm8oKTtcclxuXHJcbiAgICAgICAgbGV0IGxhbWRhOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBtdTogbnVtYmVyID0gMDtcclxuICAgICAgICByYW5nZSA9IHJhbmdlID8gcmFuZ2UgOiAwO1xyXG5cclxuICAgICAgICBsZXQgZmFjZXRQb2ludDogVmVjdG9yMztcclxuICAgICAgICBsZXQgdXZQb2ludDogVmVjdG9yMjtcclxuICAgICAgICBsZXQgY29sUG9pbnQ6IFZlY3RvcjQgPSBuZXcgVmVjdG9yNCgwLCAwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgbGV0IG5vcm0gPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICBsZXQgdGFuZyA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgIGxldCBiaU5vcm0gPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICBsZXQgYW5nbGUgPSAwO1xyXG4gICAgICAgIGxldCBmYWNldFBsYW5lVmVjID0gVmVjdG9yMy5aZXJvKCk7XHJcblxyXG4gICAgICAgIGxldCBnYXAgPSAwO1xyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IDA7XHJcbiAgICAgICAgY29uc3QgcmF5ID0gbmV3IFJheShWZWN0b3IzLlplcm8oKSwgbmV3IFZlY3RvcjMoMSwgMCwgMCkpO1xyXG4gICAgICAgIGxldCBwaWNrSW5mbzogUGlja2luZ0luZm87XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IFZlY3RvcjMuWmVybygpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWVzaEluZC5sZW5ndGggLyAzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlkMCA9IG1lc2hJbmRbMyAqIGluZGV4XTtcclxuICAgICAgICAgICAgaWQxID0gbWVzaEluZFszICogaW5kZXggKyAxXTtcclxuICAgICAgICAgICAgaWQyID0gbWVzaEluZFszICogaW5kZXggKyAyXTtcclxuICAgICAgICAgICAgdjBYID0gbWVzaFBvc1szICogaWQwXTtcclxuICAgICAgICAgICAgdjBZID0gbWVzaFBvc1szICogaWQwICsgMV07XHJcbiAgICAgICAgICAgIHYwWiA9IG1lc2hQb3NbMyAqIGlkMCArIDJdO1xyXG4gICAgICAgICAgICB2MVggPSBtZXNoUG9zWzMgKiBpZDFdO1xyXG4gICAgICAgICAgICB2MVkgPSBtZXNoUG9zWzMgKiBpZDEgKyAxXTtcclxuICAgICAgICAgICAgdjFaID0gbWVzaFBvc1szICogaWQxICsgMl07XHJcbiAgICAgICAgICAgIHYyWCA9IG1lc2hQb3NbMyAqIGlkMl07XHJcbiAgICAgICAgICAgIHYyWSA9IG1lc2hQb3NbMyAqIGlkMiArIDFdO1xyXG4gICAgICAgICAgICB2MlogPSBtZXNoUG9zWzMgKiBpZDIgKyAyXTtcclxuICAgICAgICAgICAgdmVydGV4MC5zZXQodjBYLCB2MFksIHYwWik7XHJcbiAgICAgICAgICAgIHZlcnRleDEuc2V0KHYxWCwgdjFZLCB2MVopO1xyXG4gICAgICAgICAgICB2ZXJ0ZXgyLnNldCh2MlgsIHYyWSwgdjJaKTtcclxuICAgICAgICAgICAgdmVydGV4MS5zdWJ0cmFjdFRvUmVmKHZlcnRleDAsIHZlYzApO1xyXG4gICAgICAgICAgICB2ZXJ0ZXgyLnN1YnRyYWN0VG9SZWYodmVydGV4MSwgdmVjMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWVzaFVWKSB7XHJcbiAgICAgICAgICAgICAgICB1djBYID0gbWVzaFVWWzIgKiBpZDBdO1xyXG4gICAgICAgICAgICAgICAgdXYwWSA9IG1lc2hVVlsyICogaWQwICsgMV07XHJcbiAgICAgICAgICAgICAgICB1djFYID0gbWVzaFVWWzIgKiBpZDFdO1xyXG4gICAgICAgICAgICAgICAgdXYxWSA9IG1lc2hVVlsyICogaWQxICsgMV07XHJcbiAgICAgICAgICAgICAgICB1djJYID0gbWVzaFVWWzIgKiBpZDJdO1xyXG4gICAgICAgICAgICAgICAgdXYyWSA9IG1lc2hVVlsyICogaWQyICsgMV07XHJcbiAgICAgICAgICAgICAgICB1djAuc2V0KHV2MFgsIHV2MFkpO1xyXG4gICAgICAgICAgICAgICAgdXYxLnNldCh1djFYLCB1djFZKTtcclxuICAgICAgICAgICAgICAgIHV2Mi5zZXQodXYyWCwgdXYyWSk7XHJcbiAgICAgICAgICAgICAgICB1djEuc3VidHJhY3RUb1JlZih1djAsIHV2ZWMwKTtcclxuICAgICAgICAgICAgICAgIHV2Mi5zdWJ0cmFjdFRvUmVmKHV2MSwgdXZlYzEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobWVzaENvbCAmJiBjb2xvckZyb21UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBjb2wwWCA9IG1lc2hDb2xbNCAqIGlkMF07XHJcbiAgICAgICAgICAgICAgICBjb2wwWSA9IG1lc2hDb2xbNCAqIGlkMCArIDFdO1xyXG4gICAgICAgICAgICAgICAgY29sMFogPSBtZXNoQ29sWzQgKiBpZDAgKyAyXTtcclxuICAgICAgICAgICAgICAgIGNvbDBBID0gbWVzaENvbFs0ICogaWQwICsgM107XHJcbiAgICAgICAgICAgICAgICBjb2wxWCA9IG1lc2hDb2xbNCAqIGlkMV07XHJcbiAgICAgICAgICAgICAgICBjb2wxWSA9IG1lc2hDb2xbNCAqIGlkMSArIDFdO1xyXG4gICAgICAgICAgICAgICAgY29sMVogPSBtZXNoQ29sWzQgKiBpZDEgKyAyXTtcclxuICAgICAgICAgICAgICAgIGNvbDFBID0gbWVzaENvbFs0ICogaWQxICsgM107XHJcbiAgICAgICAgICAgICAgICBjb2wyWCA9IG1lc2hDb2xbNCAqIGlkMl07XHJcbiAgICAgICAgICAgICAgICBjb2wyWSA9IG1lc2hDb2xbNCAqIGlkMiArIDFdO1xyXG4gICAgICAgICAgICAgICAgY29sMlogPSBtZXNoQ29sWzQgKiBpZDIgKyAyXTtcclxuICAgICAgICAgICAgICAgIGNvbDJBID0gbWVzaENvbFs0ICogaWQyICsgM107XHJcbiAgICAgICAgICAgICAgICBjb2wwLnNldChjb2wwWCwgY29sMFksIGNvbDBaLCBjb2wwQSk7XHJcbiAgICAgICAgICAgICAgICBjb2wxLnNldChjb2wxWCwgY29sMVksIGNvbDFaLCBjb2wxQSk7XHJcbiAgICAgICAgICAgICAgICBjb2wyLnNldChjb2wyWCwgY29sMlksIGNvbDJaLCBjb2wyQSk7XHJcbiAgICAgICAgICAgICAgICBjb2wxLnN1YnRyYWN0VG9SZWYoY29sMCwgY29sdmVjMCk7XHJcbiAgICAgICAgICAgICAgICBjb2wyLnN1YnRyYWN0VG9SZWYoY29sMSwgY29sdmVjMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB3aWR0aDogbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBkZWx0YVM6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IGRlbHRhVjogbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgaDogbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgczogbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgdjogbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgaHN2Q29sOiBDb2xvcjM7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlZENvbG9yOiBDb2xvcjMgPSBuZXcgQ29sb3IzKDAsIDAsIDApO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xQb2ludDM6IENvbG9yMyA9IG5ldyBDb2xvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIGxldCBwb2ludENvbG9yczogQ29sb3I0O1xyXG4gICAgICAgICAgICBsZXQgcGFydGljbGU6IENsb3VkUG9pbnQ7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50c0dyb3VwLl9ncm91cERlbnNpdHlbaW5kZXhdOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlkeFBvaW50cyA9IHRoaXMucGFydGljbGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FkZFBhcnRpY2xlKGlkeFBvaW50cywgcG9pbnRzR3JvdXAsIHRoaXMuX2dyb3VwQ291bnRlciwgaW5kZXggKyBpKTtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlID0gdGhpcy5wYXJ0aWNsZXNbaWR4UG9pbnRzXTtcclxuICAgICAgICAgICAgICAgIC8vZm9ybSBhIHBvaW50IGluc2lkZSB0aGUgZmFjZXQgdjAsIHYxLCB2MjtcclxuICAgICAgICAgICAgICAgIGxhbWRhID0gTWF0aC5zcXJ0KFJhbmRvbVJhbmdlKDAsIDEpKTtcclxuICAgICAgICAgICAgICAgIG11ID0gUmFuZG9tUmFuZ2UoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICBmYWNldFBvaW50ID0gdmVydGV4MC5hZGQodmVjMC5zY2FsZShsYW1kYSkpLmFkZCh2ZWMxLnNjYWxlKGxhbWRhICogbXUpKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1ZvbHVtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vcm0gPSBtZXNoLmdldEZhY2V0Tm9ybWFsKGluZGV4KS5ub3JtYWxpemUoKS5zY2FsZSgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFuZyA9IHZlYzAuY2xvbmUoKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICBiaU5vcm0gPSBWZWN0b3IzLkNyb3NzKG5vcm0sIHRhbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlID0gUmFuZG9tUmFuZ2UoMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZhY2V0UGxhbmVWZWMgPSB0YW5nLnNjYWxlKE1hdGguY29zKGFuZ2xlKSkuYWRkKGJpTm9ybS5zY2FsZShNYXRoLnNpbihhbmdsZSkpKTtcclxuICAgICAgICAgICAgICAgICAgICBhbmdsZSA9IFJhbmRvbVJhbmdlKDAuMSwgTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IGZhY2V0UGxhbmVWZWMuc2NhbGUoTWF0aC5jb3MoYW5nbGUpKS5hZGQobm9ybS5zY2FsZShNYXRoLnNpbihhbmdsZSkpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmF5Lm9yaWdpbiA9IGZhY2V0UG9pbnQuYWRkKGRpcmVjdGlvbi5zY2FsZSgwLjAwMDAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmF5LmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICByYXkubGVuZ3RoID0gZGlhbWV0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGlja0luZm8gPSByYXkuaW50ZXJzZWN0c01lc2gobWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpY2tJbmZvLmhpdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHBpY2tJbmZvLnBpY2tlZFBvaW50IS5zdWJ0cmFjdChmYWNldFBvaW50KS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwID0gUmFuZG9tUmFuZ2UoMCwgMSkgKiBkaXN0YW5jZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZXRQb2ludC5hZGRJblBsYWNlKGRpcmVjdGlvbi5zY2FsZShnYXApKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZS5wb3NpdGlvbiA9IGZhY2V0UG9pbnQuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9ucy5wdXNoKHBhcnRpY2xlLnBvc2l0aW9uLngsIHBhcnRpY2xlLnBvc2l0aW9uLnksIHBhcnRpY2xlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbG9yRnJvbVRleHR1cmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNoVVYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXZQb2ludCA9IHV2MC5hZGQodXZlYzAuc2NhbGUobGFtZGEpKS5hZGQodXZlYzEuc2NhbGUobGFtZGEgKiBtdSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sb3JGcm9tVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TZXQgcGFydGljbGUgY29sb3IgdG8gdGV4dHVyZSBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1RleHR1cmUgJiYgcG9pbnRzR3JvdXAuX2dyb3VwSW1hZ2VEYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBwb2ludHNHcm91cC5fZ3JvdXBJbWdXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBwb2ludHNHcm91cC5fZ3JvdXBJbWdIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRDb2xvcnMgPSB0aGlzLl9nZXRDb2xvckluZGljZXNGb3JDb29yZChwb2ludHNHcm91cCwgTWF0aC5yb3VuZCh1dlBvaW50LnggKiB3aWR0aCksIE1hdGgucm91bmQodXZQb2ludC55ICogaGVpZ2h0KSwgd2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLmNvbG9yID0gcG9pbnRDb2xvcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sb3JzLnB1c2gocG9pbnRDb2xvcnMuciwgcG9pbnRDb2xvcnMuZywgcG9pbnRDb2xvcnMuYiwgcG9pbnRDb2xvcnMuYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNoQ29sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZmFpbHVyZSBpbiB0ZXh0dXJlIGFuZCBjb2xvcnMgYXZhaWxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbFBvaW50ID0gY29sMC5hZGQoY29sdmVjMC5zY2FsZShsYW1kYSkpLmFkZChjb2x2ZWMxLnNjYWxlKGxhbWRhICogbXUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGUuY29sb3IgPSBuZXcgQ29sb3I0KGNvbFBvaW50LngsIGNvbFBvaW50LnksIGNvbFBvaW50LnosIGNvbFBvaW50LncpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xvcnMucHVzaChjb2xQb2ludC54LCBjb2xQb2ludC55LCBjb2xQb2ludC56LCBjb2xQb2ludC53KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xQb2ludCA9IGNvbDAuc2V0KE1hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS5jb2xvciA9IG5ldyBDb2xvcjQoY29sUG9pbnQueCwgY29sUG9pbnQueSwgY29sUG9pbnQueiwgY29sUG9pbnQudyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9ycy5wdXNoKGNvbFBvaW50LngsIGNvbFBvaW50LnksIGNvbFBvaW50LnosIGNvbFBvaW50LncpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vU2V0IHBhcnRpY2xlIHV2IGJhc2VkIG9uIGEgbWVzaCB1dlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGUudXYgPSB1dlBvaW50LmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91dnMucHVzaChwYXJ0aWNsZS51di54LCBwYXJ0aWNsZS51di55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlZENvbG9yLnNldChjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFTID0gUmFuZG9tUmFuZ2UoLXJhbmdlLCByYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhViA9IFJhbmRvbVJhbmdlKC1yYW5nZSwgcmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoc3ZDb2wgPSBzdGF0ZWRDb2xvci50b0hTVigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gaHN2Q29sLnI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBoc3ZDb2wuZyArIGRlbHRhUztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IGhzdkNvbC5iICsgZGVsdGFWO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocyA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodiA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yMy5IU1Z0b1JHQlRvUmVmKGgsIHMsIHYsIGNvbFBvaW50Myk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbFBvaW50LnNldChjb2xQb2ludDMuciwgY29sUG9pbnQzLmcsIGNvbFBvaW50My5iLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xQb2ludCA9IGNvbDAuc2V0KE1hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS5jb2xvciA9IG5ldyBDb2xvcjQoY29sUG9pbnQueCwgY29sUG9pbnQueSwgY29sUG9pbnQueiwgY29sUG9pbnQudyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sb3JzLnB1c2goY29sUG9pbnQueCwgY29sUG9pbnQueSwgY29sUG9pbnQueiwgY29sUG9pbnQudyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RvcmVzIG1lc2ggdGV4dHVyZSBpbiBkeW5hbWljIHRleHR1cmUgZm9yIGNvbG9yIHBpeGVsIHJldHJpZXZhbFxyXG4gICAgLy8gd2hlbiBwb2ludENvbG9yIHR5cGUgaXMgY29sb3IgZm9yIHN1cmZhY2UgcG9pbnRzXHJcbiAgICBwcml2YXRlIF9jb2xvckZyb21UZXh0dXJlKG1lc2g6IE1lc2gsIHBvaW50c0dyb3VwOiBQb2ludHNHcm91cCwgaXNWb2x1bWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBpZiAobWVzaC5tYXRlcmlhbCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBMb2dnZXIuV2FybihtZXNoLm5hbWUgKyBcImhhcyBubyBtYXRlcmlhbC5cIik7XHJcbiAgICAgICAgICAgIHBvaW50c0dyb3VwLl9ncm91cEltYWdlRGF0YSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldFBvaW50c0NvbG9yT3JVVihtZXNoLCBwb2ludHNHcm91cCwgaXNWb2x1bWUsIHRydWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWF0ID0gbWVzaC5tYXRlcmlhbDtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlTGlzdDogQmFzZVRleHR1cmVbXSA9IG1hdC5nZXRBY3RpdmVUZXh0dXJlcygpO1xyXG4gICAgICAgIGlmICh0ZXh0dXJlTGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgTG9nZ2VyLldhcm4obWVzaC5uYW1lICsgXCJoYXMgbm8gdXNhYmxlIHRleHR1cmUuXCIpO1xyXG4gICAgICAgICAgICBwb2ludHNHcm91cC5fZ3JvdXBJbWFnZURhdGEgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRQb2ludHNDb2xvck9yVVYobWVzaCwgcG9pbnRzR3JvdXAsIGlzVm9sdW1lLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNsb25lID0gbWVzaC5jbG9uZSgpO1xyXG4gICAgICAgIGNsb25lLnNldEVuYWJsZWQoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuX3Byb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlOiAoXzogdm9pZCkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQmFzZVRleHR1cmUuV2hlbkFsbFJlYWR5KHRleHR1cmVMaXN0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG4gPSBwb2ludHNHcm91cC5fdGV4dHVyZU5iO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiB0ZXh0dXJlTGlzdC5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSB0ZXh0dXJlTGlzdC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaW5hbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzR3JvdXAuX2dyb3VwSW1nV2lkdGggPSB0ZXh0dXJlTGlzdFtuXS5nZXRTaXplKCkud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50c0dyb3VwLl9ncm91cEltZ0hlaWdodCA9IHRleHR1cmVMaXN0W25dLmdldFNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldFBvaW50c0NvbG9yT3JVVihjbG9uZSwgcG9pbnRzR3JvdXAsIGlzVm9sdW1lLCB0cnVlLCB0cnVlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGV4dHVyZUxpc3Rbbl0uY29vcmRpbmF0ZXNJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzR3JvdXAuX2dyb3VwSW1hZ2VEYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhUHJvbWlzZSA9IHRleHR1cmVMaXN0W25dLnJlYWRQaXhlbHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGFQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlcywgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVByb21pc2UudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzR3JvdXAuX2dyb3VwSW1hZ2VEYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlcyB0aGUgcG9pbnQgZGVuc2l0eSBwZXIgZmFjZXQgb2YgYSBtZXNoIGZvciBzdXJmYWNlIHBvaW50c1xyXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlRGVuc2l0eShuYlBvaW50czogbnVtYmVyLCBwb3NpdGlvbnM6IEZsb2F0QXJyYXksIGluZGljZXM6IEluZGljZXNBcnJheSk6IG51bWJlcltdIHtcclxuICAgICAgICBsZXQgaWQwOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGlkMTogbnVtYmVyO1xyXG4gICAgICAgIGxldCBpZDI6IG51bWJlcjtcclxuICAgICAgICBsZXQgdjBYOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IHYwWTogbnVtYmVyO1xyXG4gICAgICAgIGxldCB2MFo6IG51bWJlcjtcclxuICAgICAgICBsZXQgdjFYOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IHYxWTogbnVtYmVyO1xyXG4gICAgICAgIGxldCB2MVo6IG51bWJlcjtcclxuICAgICAgICBsZXQgdjJYOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IHYyWTogbnVtYmVyO1xyXG4gICAgICAgIGxldCB2Mlo6IG51bWJlcjtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXgwID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgY29uc3QgdmVydGV4MSA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IHZlcnRleDIgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICBjb25zdCB2ZWMwID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgY29uc3QgdmVjMSA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbCA9IFZlY3RvcjMuWmVybygpO1xyXG5cclxuICAgICAgICBsZXQgYXJlYTogbnVtYmVyO1xyXG4gICAgICAgIGNvbnN0IGN1bXVsYXRpdmVBcmVhczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBsZXQgc3VyZmFjZUFyZWE6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IG5iRmFjZXRzID0gaW5kaWNlcy5sZW5ndGggLyAzO1xyXG5cclxuICAgICAgICAvL3N1cmZhY2UgYXJlYVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBuYkZhY2V0czsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZDAgPSBpbmRpY2VzWzMgKiBpbmRleF07XHJcbiAgICAgICAgICAgIGlkMSA9IGluZGljZXNbMyAqIGluZGV4ICsgMV07XHJcbiAgICAgICAgICAgIGlkMiA9IGluZGljZXNbMyAqIGluZGV4ICsgMl07XHJcbiAgICAgICAgICAgIHYwWCA9IHBvc2l0aW9uc1szICogaWQwXTtcclxuICAgICAgICAgICAgdjBZID0gcG9zaXRpb25zWzMgKiBpZDAgKyAxXTtcclxuICAgICAgICAgICAgdjBaID0gcG9zaXRpb25zWzMgKiBpZDAgKyAyXTtcclxuICAgICAgICAgICAgdjFYID0gcG9zaXRpb25zWzMgKiBpZDFdO1xyXG4gICAgICAgICAgICB2MVkgPSBwb3NpdGlvbnNbMyAqIGlkMSArIDFdO1xyXG4gICAgICAgICAgICB2MVogPSBwb3NpdGlvbnNbMyAqIGlkMSArIDJdO1xyXG4gICAgICAgICAgICB2MlggPSBwb3NpdGlvbnNbMyAqIGlkMl07XHJcbiAgICAgICAgICAgIHYyWSA9IHBvc2l0aW9uc1szICogaWQyICsgMV07XHJcbiAgICAgICAgICAgIHYyWiA9IHBvc2l0aW9uc1szICogaWQyICsgMl07XHJcbiAgICAgICAgICAgIHZlcnRleDAuc2V0KHYwWCwgdjBZLCB2MFopO1xyXG4gICAgICAgICAgICB2ZXJ0ZXgxLnNldCh2MVgsIHYxWSwgdjFaKTtcclxuICAgICAgICAgICAgdmVydGV4Mi5zZXQodjJYLCB2MlksIHYyWik7XHJcbiAgICAgICAgICAgIHZlcnRleDEuc3VidHJhY3RUb1JlZih2ZXJ0ZXgwLCB2ZWMwKTtcclxuICAgICAgICAgICAgdmVydGV4Mi5zdWJ0cmFjdFRvUmVmKHZlcnRleDEsIHZlYzEpO1xyXG4gICAgICAgICAgICBWZWN0b3IzLkNyb3NzVG9SZWYodmVjMCwgdmVjMSwgbm9ybWFsKTtcclxuICAgICAgICAgICAgYXJlYSA9IDAuNSAqIG5vcm1hbC5sZW5ndGgoKTtcclxuICAgICAgICAgICAgc3VyZmFjZUFyZWEgKz0gYXJlYTtcclxuICAgICAgICAgICAgY3VtdWxhdGl2ZUFyZWFzW2luZGV4XSA9IHN1cmZhY2VBcmVhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGVuc2l0eTogbnVtYmVyW10gPSBuZXcgQXJyYXk8bnVtYmVyPihuYkZhY2V0cyk7XHJcbiAgICAgICAgbGV0IHJlbWFpbmluZ1BvaW50cyA9IG5iUG9pbnRzO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gbmJGYWNldHMgLSAxOyBpbmRleCA+IDA7IGluZGV4LS0pIHtcclxuICAgICAgICAgICAgY29uc3QgY3VtdWxhdGl2ZUFyZWEgPSBjdW11bGF0aXZlQXJlYXNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoY3VtdWxhdGl2ZUFyZWEgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIGF2b2lkaW5nIGRpdmlzaW9uIGJ5IDAgdXBvbiBkZWdlbmVyYXRlIHRyaWFuZ2xlc1xyXG4gICAgICAgICAgICAgICAgZGVuc2l0eVtpbmRleF0gPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJlYSA9IGN1bXVsYXRpdmVBcmVhIC0gY3VtdWxhdGl2ZUFyZWFzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYWNldFBvaW50c1dpdGhGcmFjdGlvbiA9IChhcmVhIC8gY3VtdWxhdGl2ZUFyZWEpICogcmVtYWluaW5nUG9pbnRzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmxvb3JlZCA9IE1hdGguZmxvb3IoZmFjZXRQb2ludHNXaXRoRnJhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZnJhY3Rpb24gPSBmYWNldFBvaW50c1dpdGhGcmFjdGlvbiAtIGZsb29yZWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHRyYVBvaW50ID0gTnVtYmVyKE1hdGgucmFuZG9tKCkgPCBmcmFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYWNldFBvaW50cyA9IGZsb29yZWQgKyBleHRyYVBvaW50O1xyXG4gICAgICAgICAgICAgICAgZGVuc2l0eVtpbmRleF0gPSBmYWNldFBvaW50cztcclxuICAgICAgICAgICAgICAgIHJlbWFpbmluZ1BvaW50cyAtPSBmYWNldFBvaW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZW5zaXR5WzBdID0gcmVtYWluaW5nUG9pbnRzO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVuc2l0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgcG9pbnRzIHRvIHRoZSBQQ1MgaW4gcmFuZG9tIHBvc2l0aW9ucyB3aXRoaW4gYSB1bml0IHNwaGVyZVxyXG4gICAgICogQHBhcmFtIG5iIChwb3NpdGl2ZSBpbnRlZ2VyKSB0aGUgbnVtYmVyIG9mIHBhcnRpY2xlcyB0byBiZSBjcmVhdGVkIGZyb20gdGhpcyBtb2RlbFxyXG4gICAgICogQHBhcmFtIHBvaW50RnVuY3Rpb24gaXMgYW4gb3B0aW9uYWwgamF2YXNjcmlwdCBmdW5jdGlvbiB0byBiZSBjYWxsZWQgZm9yIGVhY2ggcGFydGljbGUgb24gUENTIGNyZWF0aW9uXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbnVtYmVyIG9mIGdyb3VwcyBpbiB0aGUgc3lzdGVtXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRQb2ludHMobmI6IG51bWJlciwgcG9pbnRGdW5jdGlvbjogYW55ID0gdGhpcy5fcmFuZG9tVW5pdFZlY3Rvcik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgcG9pbnRzR3JvdXAgPSBuZXcgUG9pbnRzR3JvdXAodGhpcy5fZ3JvdXBDb3VudGVyLCBwb2ludEZ1bmN0aW9uKTtcclxuICAgICAgICBsZXQgY3A6IENsb3VkUG9pbnQ7XHJcblxyXG4gICAgICAgIC8vIHBhcnRpY2xlc1xyXG4gICAgICAgIGxldCBpZHggPSB0aGlzLm5iUGFydGljbGVzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmI7IGkrKykge1xyXG4gICAgICAgICAgICBjcCA9IHRoaXMuX2FkZFBhcnRpY2xlKGlkeCwgcG9pbnRzR3JvdXAsIHRoaXMuX2dyb3VwQ291bnRlciwgaSk7XHJcbiAgICAgICAgICAgIGlmIChwb2ludHNHcm91cCAmJiBwb2ludHNHcm91cC5fcG9zaXRpb25GdW5jdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzR3JvdXAuX3Bvc2l0aW9uRnVuY3Rpb24oY3AsIGlkeCwgaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25zLnB1c2goY3AucG9zaXRpb24ueCwgY3AucG9zaXRpb24ueSwgY3AucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgIGlmIChjcC5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sb3JzLnB1c2goY3AuY29sb3IuciwgY3AuY29sb3IuZywgY3AuY29sb3IuYiwgY3AuY29sb3IuYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNwLnV2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91dnMucHVzaChjcC51di54LCBjcC51di55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZHgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uYlBhcnRpY2xlcyArPSBuYjtcclxuICAgICAgICB0aGlzLl9ncm91cENvdW50ZXIrKztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JvdXBDb3VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBwb2ludHMgdG8gdGhlIFBDUyBmcm9tIHRoZSBzdXJmYWNlIG9mIHRoZSBtb2RlbCBzaGFwZVxyXG4gICAgICogQHBhcmFtIG1lc2ggaXMgYW55IE1lc2ggb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIGFzIGEgc3VyZmFjZSBtb2RlbCBmb3IgdGhlIHBvaW50c1xyXG4gICAgICogQHBhcmFtIG5iIChwb3NpdGl2ZSBpbnRlZ2VyKSB0aGUgbnVtYmVyIG9mIHBhcnRpY2xlcyB0byBiZSBjcmVhdGVkIGZyb20gdGhpcyBtb2RlbFxyXG4gICAgICogQHBhcmFtIGNvbG9yV2l0aCBkZXRlcm1pbmVzIHdoZXRoZXIgYSBwb2ludCBpcyBjb2xvcmVkIHVzaW5nIGNvbG9yIChkZWZhdWx0KSwgdXYsIHJhbmRvbSwgc3RhdGVkIG9yIG5vbmUgKGludmlzaWJsZSlcclxuICAgICAqIEBwYXJhbSBjb2xvciAoY29sb3I0KSB0byBiZSB1c2VkIHdoZW4gY29sb3JXaXRoIGlzIHN0YXRlZCBvciBjb2xvciAobnVtYmVyKSB3aGVuIHVzZWQgdG8gc3BlY2lmeSB0ZXh0dXJlIHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gcmFuZ2UgKG51bWJlciBmcm9tIDAgdG8gMSkgdG8gZGV0ZXJtaW5lIHRoZSB2YXJpYXRpb24gaW4gc2hhcGUgYW5kIHRvbmUgZm9yIGEgc3RhdGVkIGNvbG9yXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbnVtYmVyIG9mIGdyb3VwcyBpbiB0aGUgc3lzdGVtXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRTdXJmYWNlUG9pbnRzKG1lc2g6IE1lc2gsIG5iOiBudW1iZXIsIGNvbG9yV2l0aD86IG51bWJlciwgY29sb3I/OiBDb2xvcjQgfCBudW1iZXIsIHJhbmdlPzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgY29sb3JlZCA9IGNvbG9yV2l0aCA/IGNvbG9yV2l0aCA6IFBvaW50Q29sb3IuUmFuZG9tO1xyXG4gICAgICAgIGlmIChpc05hTihjb2xvcmVkKSB8fCBjb2xvcmVkIDwgMCB8fCBjb2xvcmVkID4gMykge1xyXG4gICAgICAgICAgICBjb2xvcmVkID0gUG9pbnRDb2xvci5SYW5kb207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtZXNoUG9zID0gPEZsb2F0QXJyYXk+bWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCk7XHJcbiAgICAgICAgY29uc3QgbWVzaEluZCA9IDxJbmRpY2VzQXJyYXk+bWVzaC5nZXRJbmRpY2VzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2dyb3Vwcy5wdXNoKHRoaXMuX2dyb3VwQ291bnRlcik7XHJcbiAgICAgICAgY29uc3QgcG9pbnRzR3JvdXAgPSBuZXcgUG9pbnRzR3JvdXAodGhpcy5fZ3JvdXBDb3VudGVyLCBudWxsKTtcclxuXHJcbiAgICAgICAgcG9pbnRzR3JvdXAuX2dyb3VwRGVuc2l0eSA9IHRoaXMuX2NhbGN1bGF0ZURlbnNpdHkobmIsIG1lc2hQb3MsIG1lc2hJbmQpO1xyXG4gICAgICAgIGlmIChjb2xvcmVkID09PSBQb2ludENvbG9yLkNvbG9yKSB7XHJcbiAgICAgICAgICAgIHBvaW50c0dyb3VwLl90ZXh0dXJlTmIgPSA8bnVtYmVyPmNvbG9yID8gPG51bWJlcj5jb2xvciA6IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3IgPSA8Q29sb3I0PmNvbG9yID8gPENvbG9yND5jb2xvciA6IG5ldyBDb2xvcjQoMSwgMSwgMSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoY29sb3JlZCkge1xyXG4gICAgICAgICAgICBjYXNlIFBvaW50Q29sb3IuQ29sb3I6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xvckZyb21UZXh0dXJlKG1lc2gsIHBvaW50c0dyb3VwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQb2ludENvbG9yLlVWOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0UG9pbnRzQ29sb3JPclVWKG1lc2gsIHBvaW50c0dyb3VwLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFBvaW50Q29sb3IuUmFuZG9tOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0UG9pbnRzQ29sb3JPclVWKG1lc2gsIHBvaW50c0dyb3VwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQb2ludENvbG9yLlN0YXRlZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFBvaW50c0NvbG9yT3JVVihtZXNoLCBwb2ludHNHcm91cCwgZmFsc2UsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCA8Q29sb3I0PmNvbG9yLCByYW5nZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uYlBhcnRpY2xlcyArPSBuYjtcclxuICAgICAgICB0aGlzLl9ncm91cENvdW50ZXIrKztcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JvdXBDb3VudGVyIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgcG9pbnRzIHRvIHRoZSBQQ1MgaW5zaWRlIHRoZSBtb2RlbCBzaGFwZVxyXG4gICAgICogQHBhcmFtIG1lc2ggaXMgYW55IE1lc2ggb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIGFzIGEgc3VyZmFjZSBtb2RlbCBmb3IgdGhlIHBvaW50c1xyXG4gICAgICogQHBhcmFtIG5iIChwb3NpdGl2ZSBpbnRlZ2VyKSB0aGUgbnVtYmVyIG9mIHBhcnRpY2xlcyB0byBiZSBjcmVhdGVkIGZyb20gdGhpcyBtb2RlbFxyXG4gICAgICogQHBhcmFtIGNvbG9yV2l0aCBkZXRlcm1pbmVzIHdoZXRoZXIgYSBwb2ludCBpcyBjb2xvcmVkIHVzaW5nIGNvbG9yIChkZWZhdWx0KSwgdXYsIHJhbmRvbSwgc3RhdGVkIG9yIG5vbmUgKGludmlzaWJsZSlcclxuICAgICAqIEBwYXJhbSBjb2xvciAoY29sb3I0KSB0byBiZSB1c2VkIHdoZW4gY29sb3JXaXRoIGlzIHN0YXRlZCBvciBjb2xvciAobnVtYmVyKSB3aGVuIHVzZWQgdG8gc3BlY2lmeSB0ZXh0dXJlIHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gcmFuZ2UgKG51bWJlciBmcm9tIDAgdG8gMSkgdG8gZGV0ZXJtaW5lIHRoZSB2YXJpYXRpb24gaW4gc2hhcGUgYW5kIHRvbmUgZm9yIGEgc3RhdGVkIGNvbG9yXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbnVtYmVyIG9mIGdyb3VwcyBpbiB0aGUgc3lzdGVtXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRWb2x1bWVQb2ludHMobWVzaDogTWVzaCwgbmI6IG51bWJlciwgY29sb3JXaXRoPzogbnVtYmVyLCBjb2xvcj86IENvbG9yNCB8IG51bWJlciwgcmFuZ2U/OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBjb2xvcmVkID0gY29sb3JXaXRoID8gY29sb3JXaXRoIDogUG9pbnRDb2xvci5SYW5kb207XHJcbiAgICAgICAgaWYgKGlzTmFOKGNvbG9yZWQpIHx8IGNvbG9yZWQgPCAwIHx8IGNvbG9yZWQgPiAzKSB7XHJcbiAgICAgICAgICAgIGNvbG9yZWQgPSBQb2ludENvbG9yLlJhbmRvbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1lc2hQb3MgPSA8RmxvYXRBcnJheT5tZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kKTtcclxuICAgICAgICBjb25zdCBtZXNoSW5kID0gPEluZGljZXNBcnJheT5tZXNoLmdldEluZGljZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZ3JvdXBzLnB1c2godGhpcy5fZ3JvdXBDb3VudGVyKTtcclxuICAgICAgICBjb25zdCBwb2ludHNHcm91cCA9IG5ldyBQb2ludHNHcm91cCh0aGlzLl9ncm91cENvdW50ZXIsIG51bGwpO1xyXG5cclxuICAgICAgICBwb2ludHNHcm91cC5fZ3JvdXBEZW5zaXR5ID0gdGhpcy5fY2FsY3VsYXRlRGVuc2l0eShuYiwgbWVzaFBvcywgbWVzaEluZCk7XHJcbiAgICAgICAgaWYgKGNvbG9yZWQgPT09IFBvaW50Q29sb3IuQ29sb3IpIHtcclxuICAgICAgICAgICAgcG9pbnRzR3JvdXAuX3RleHR1cmVOYiA9IDxudW1iZXI+Y29sb3IgPyA8bnVtYmVyPmNvbG9yIDogMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xvciA9IDxDb2xvcjQ+Y29sb3IgPyA8Q29sb3I0PmNvbG9yIDogbmV3IENvbG9yNCgxLCAxLCAxLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChjb2xvcmVkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUG9pbnRDb2xvci5Db2xvcjpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9yRnJvbVRleHR1cmUobWVzaCwgcG9pbnRzR3JvdXAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUG9pbnRDb2xvci5VVjpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFBvaW50c0NvbG9yT3JVVihtZXNoLCBwb2ludHNHcm91cCwgdHJ1ZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFBvaW50Q29sb3IuUmFuZG9tOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0UG9pbnRzQ29sb3JPclVWKG1lc2gsIHBvaW50c0dyb3VwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFBvaW50Q29sb3IuU3RhdGVkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0UG9pbnRzQ29sb3JPclVWKG1lc2gsIHBvaW50c0dyb3VwLCB0cnVlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgPENvbG9yND5jb2xvciwgcmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubmJQYXJ0aWNsZXMgKz0gbmI7XHJcbiAgICAgICAgdGhpcy5fZ3JvdXBDb3VudGVyKys7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VwQ291bnRlciAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgU2V0cyBhbGwgdGhlIHBhcnRpY2xlcyA6IHRoaXMgbWV0aG9kIGFjdHVhbGx5IHJlYWxseSB1cGRhdGVzIHRoZSBtZXNoIGFjY29yZGluZyB0byB0aGUgcGFydGljbGUgcG9zaXRpb25zLCByb3RhdGlvbnMsIGNvbG9ycywgdGV4dHVyZXMsIGV0Yy5cclxuICAgICAqICBUaGlzIG1ldGhvZCBjYWxscyBgdXBkYXRlUGFydGljbGUoKWAgZm9yIGVhY2ggcGFydGljbGUgb2YgdGhlIFNQUy5cclxuICAgICAqICBGb3IgYW4gYW5pbWF0ZWQgU1BTLCBpdCBpcyB1c3VhbGx5IGNhbGxlZCB3aXRoaW4gdGhlIHJlbmRlciBsb29wLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0IFRoZSBwYXJ0aWNsZSBpbmRleCBpbiB0aGUgcGFydGljbGUgYXJyYXkgd2hlcmUgdG8gc3RhcnQgdG8gY29tcHV0ZSB0aGUgcGFydGljbGUgcHJvcGVydHkgdmFsdWVzIF8oZGVmYXVsdCAwKV9cclxuICAgICAqIEBwYXJhbSBlbmQgVGhlIHBhcnRpY2xlIGluZGV4IGluIHRoZSBwYXJ0aWNsZSBhcnJheSB3aGVyZSB0byBzdG9wIHRvIGNvbXB1dGUgdGhlIHBhcnRpY2xlIHByb3BlcnR5IHZhbHVlcyBfKGRlZmF1bHQgbmJQYXJ0aWNsZSAtIDEpX1xyXG4gICAgICogQHBhcmFtIHVwZGF0ZSBJZiB0aGUgbWVzaCBtdXN0IGJlIGZpbmFsbHkgdXBkYXRlZCBvbiB0aGlzIGNhbGwgYWZ0ZXIgYWxsIHRoZSBwYXJ0aWNsZSBjb21wdXRhdGlvbnMgXyhkZWZhdWx0IHRydWUpX1xyXG4gICAgICogQHJldHVybnMgdGhlIFBDUy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFBhcnRpY2xlcyhzdGFydDogbnVtYmVyID0gMCwgZW5kOiBudW1iZXIgPSB0aGlzLm5iUGFydGljbGVzIC0gMSwgdXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IFBvaW50c0Nsb3VkU3lzdGVtIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3VwZGF0YWJsZSB8fCAhdGhpcy5faXNSZWFkeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGN1c3RvbSBiZWZvcmVVcGRhdGVcclxuICAgICAgICB0aGlzLmJlZm9yZVVwZGF0ZVBhcnRpY2xlcyhzdGFydCwgZW5kLCB1cGRhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCByb3RNYXRyaXggPSBUbXBWZWN0b3JzLk1hdHJpeFswXTtcclxuICAgICAgICBjb25zdCBtZXNoID0gdGhpcy5tZXNoO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yczMyID0gdGhpcy5fY29sb3JzMzI7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25zMzIgPSB0aGlzLl9wb3NpdGlvbnMzMjtcclxuICAgICAgICBjb25zdCB1dnMzMiA9IHRoaXMuX3V2czMyO1xyXG5cclxuICAgICAgICBjb25zdCB0ZW1wVmVjdG9ycyA9IFRtcFZlY3RvcnMuVmVjdG9yMztcclxuICAgICAgICBjb25zdCBjYW1BeGlzWCA9IHRlbXBWZWN0b3JzWzVdLmNvcHlGcm9tRmxvYXRzKDEuMCwgMC4wLCAwLjApO1xyXG4gICAgICAgIGNvbnN0IGNhbUF4aXNZID0gdGVtcFZlY3RvcnNbNl0uY29weUZyb21GbG9hdHMoMC4wLCAxLjAsIDAuMCk7XHJcbiAgICAgICAgY29uc3QgY2FtQXhpc1ogPSB0ZW1wVmVjdG9yc1s3XS5jb3B5RnJvbUZsb2F0cygwLjAsIDAuMCwgMS4wKTtcclxuICAgICAgICBjb25zdCBtaW5pbXVtID0gdGVtcFZlY3RvcnNbOF0uc2V0QWxsKE51bWJlci5NQVhfVkFMVUUpO1xyXG4gICAgICAgIGNvbnN0IG1heGltdW0gPSB0ZW1wVmVjdG9yc1s5XS5zZXRBbGwoLU51bWJlci5NQVhfVkFMVUUpO1xyXG5cclxuICAgICAgICBNYXRyaXguSWRlbnRpdHlUb1JlZihyb3RNYXRyaXgpO1xyXG4gICAgICAgIGxldCBpZHggPSAwOyAvLyBjdXJyZW50IGluZGV4IG9mIHRoZSBwYXJ0aWNsZVxyXG5cclxuICAgICAgICBpZiAodGhpcy5tZXNoPy5pc0ZhY2V0RGF0YUVuYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29tcHV0ZUJvdW5kaW5nQm94ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVuZCA9IGVuZCA+PSB0aGlzLm5iUGFydGljbGVzID8gdGhpcy5uYlBhcnRpY2xlcyAtIDEgOiBlbmQ7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbXB1dGVCb3VuZGluZ0JveCkge1xyXG4gICAgICAgICAgICBpZiAoc3RhcnQgIT0gMCB8fCBlbmQgIT0gdGhpcy5uYlBhcnRpY2xlcyAtIDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIG9ubHkgc29tZSBwYXJ0aWNsZXMgYXJlIHVwZGF0ZWQsIHRoZW4gdXNlIHRoZSBjdXJyZW50IGV4aXN0aW5nIEJCb3ggYmFzaXMuIE5vdGUgOiBpdCBjYW4gb25seSBpbmNyZWFzZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvdW5kaW5nSW5mbyA9IHRoaXMubWVzaD8uZ2V0Qm91bmRpbmdJbmZvKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm91bmRpbmdJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bS5jb3B5RnJvbShib3VuZGluZ0luZm8ubWluaW11bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bS5jb3B5RnJvbShib3VuZGluZ0luZm8ubWF4aW11bSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlkeCA9IDA7IC8vIHBhcnRpY2xlIGluZGV4XHJcbiAgICAgICAgbGV0IHBpbmRleCA9IDA7IC8vaW5kZXggaW4gcG9zaXRpb25zIGFycmF5XHJcbiAgICAgICAgbGV0IGNpbmRleCA9IDA7IC8vaW5kZXggaW4gY29sb3IgYXJyYXlcclxuICAgICAgICBsZXQgdWluZGV4ID0gMDsgLy9pbmRleCBpbiB1diBhcnJheVxyXG5cclxuICAgICAgICAvLyBwYXJ0aWNsZSBsb29wXHJcbiAgICAgICAgZm9yIChsZXQgcCA9IHN0YXJ0OyBwIDw9IGVuZDsgcCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRpY2xlID0gdGhpcy5wYXJ0aWNsZXNbcF07XHJcbiAgICAgICAgICAgIGlkeCA9IHBhcnRpY2xlLmlkeDtcclxuICAgICAgICAgICAgcGluZGV4ID0gMyAqIGlkeDtcclxuICAgICAgICAgICAgY2luZGV4ID0gNCAqIGlkeDtcclxuICAgICAgICAgICAgdWluZGV4ID0gMiAqIGlkeDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNhbGwgdG8gY3VzdG9tIHVzZXIgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBwYXJ0aWNsZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFydGljbGUocGFydGljbGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcGFydGljbGVSb3RhdGlvbk1hdHJpeCA9IHBhcnRpY2xlLl9yb3RhdGlvbk1hdHJpeDtcclxuICAgICAgICAgICAgY29uc3QgcGFydGljbGVQb3NpdGlvbiA9IHBhcnRpY2xlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0aWNsZUdsb2JhbFBvc2l0aW9uID0gcGFydGljbGUuX2dsb2JhbFBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbXB1dGVQYXJ0aWNsZVJvdGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZS5nZXRSb3RhdGlvbk1hdHJpeChyb3RNYXRyaXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXJ0aWNsZUhhc1BhcmVudCA9IHBhcnRpY2xlLnBhcmVudElkICE9PSBudWxsO1xyXG4gICAgICAgICAgICBpZiAocGFydGljbGVIYXNQYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFydGljbGVzW3BhcnRpY2xlLnBhcmVudElkIV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRSb3RhdGlvbk1hdHJpeCA9IHBhcmVudC5fcm90YXRpb25NYXRyaXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRHbG9iYWxQb3NpdGlvbiA9IHBhcmVudC5fZ2xvYmFsUG9zaXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm90YXRlZFkgPSBwYXJ0aWNsZVBvc2l0aW9uLnggKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFsxXSArIHBhcnRpY2xlUG9zaXRpb24ueSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzRdICsgcGFydGljbGVQb3NpdGlvbi56ICogcGFyZW50Um90YXRpb25NYXRyaXhbN107XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3RhdGVkWCA9IHBhcnRpY2xlUG9zaXRpb24ueCAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzBdICsgcGFydGljbGVQb3NpdGlvbi55ICogcGFyZW50Um90YXRpb25NYXRyaXhbM10gKyBwYXJ0aWNsZVBvc2l0aW9uLnogKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs2XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdGF0ZWRaID0gcGFydGljbGVQb3NpdGlvbi54ICogcGFyZW50Um90YXRpb25NYXRyaXhbMl0gKyBwYXJ0aWNsZVBvc2l0aW9uLnkgKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs1XSArIHBhcnRpY2xlUG9zaXRpb24ueiAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzhdO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlR2xvYmFsUG9zaXRpb24ueCA9IHBhcmVudEdsb2JhbFBvc2l0aW9uLnggKyByb3RhdGVkWDtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlR2xvYmFsUG9zaXRpb24ueSA9IHBhcmVudEdsb2JhbFBvc2l0aW9uLnkgKyByb3RhdGVkWTtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlR2xvYmFsUG9zaXRpb24ueiA9IHBhcmVudEdsb2JhbFBvc2l0aW9uLnogKyByb3RhdGVkWjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29tcHV0ZVBhcnRpY2xlUm90YXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RNYXRyaXhWYWx1ZXMgPSByb3RNYXRyaXgubTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzBdID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90TWF0cml4VmFsdWVzWzBdICogcGFyZW50Um90YXRpb25NYXRyaXhbMF0gKyByb3RNYXRyaXhWYWx1ZXNbMV0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFszXSArIHJvdE1hdHJpeFZhbHVlc1syXSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzZdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbMV0gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RNYXRyaXhWYWx1ZXNbMF0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFsxXSArIHJvdE1hdHJpeFZhbHVlc1sxXSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzRdICsgcm90TWF0cml4VmFsdWVzWzJdICogcGFyZW50Um90YXRpb25NYXRyaXhbN107XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFsyXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdE1hdHJpeFZhbHVlc1swXSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzJdICsgcm90TWF0cml4VmFsdWVzWzFdICogcGFyZW50Um90YXRpb25NYXRyaXhbNV0gKyByb3RNYXRyaXhWYWx1ZXNbMl0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs4XTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzNdID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90TWF0cml4VmFsdWVzWzRdICogcGFyZW50Um90YXRpb25NYXRyaXhbMF0gKyByb3RNYXRyaXhWYWx1ZXNbNV0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFszXSArIHJvdE1hdHJpeFZhbHVlc1s2XSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzZdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbNF0gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RNYXRyaXhWYWx1ZXNbNF0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFsxXSArIHJvdE1hdHJpeFZhbHVlc1s1XSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzRdICsgcm90TWF0cml4VmFsdWVzWzZdICogcGFyZW50Um90YXRpb25NYXRyaXhbN107XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFs1XSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdE1hdHJpeFZhbHVlc1s0XSAqIHBhcmVudFJvdGF0aW9uTWF0cml4WzJdICsgcm90TWF0cml4VmFsdWVzWzVdICogcGFyZW50Um90YXRpb25NYXRyaXhbNV0gKyByb3RNYXRyaXhWYWx1ZXNbNl0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs4XTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzZdID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90TWF0cml4VmFsdWVzWzhdICogcGFyZW50Um90YXRpb25NYXRyaXhbMF0gKyByb3RNYXRyaXhWYWx1ZXNbOV0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFszXSArIHJvdE1hdHJpeFZhbHVlc1sxMF0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs2XTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzddID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90TWF0cml4VmFsdWVzWzhdICogcGFyZW50Um90YXRpb25NYXRyaXhbMV0gKyByb3RNYXRyaXhWYWx1ZXNbOV0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs0XSArIHJvdE1hdHJpeFZhbHVlc1sxMF0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs3XTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzhdID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90TWF0cml4VmFsdWVzWzhdICogcGFyZW50Um90YXRpb25NYXRyaXhbMl0gKyByb3RNYXRyaXhWYWx1ZXNbOV0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs1XSArIHJvdE1hdHJpeFZhbHVlc1sxMF0gKiBwYXJlbnRSb3RhdGlvbk1hdHJpeFs4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlR2xvYmFsUG9zaXRpb24ueCA9IDA7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZUdsb2JhbFBvc2l0aW9uLnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGVHbG9iYWxQb3NpdGlvbi56ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29tcHV0ZVBhcnRpY2xlUm90YXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RNYXRyaXhWYWx1ZXMgPSByb3RNYXRyaXgubTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzBdID0gcm90TWF0cml4VmFsdWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbMV0gPSByb3RNYXRyaXhWYWx1ZXNbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFsyXSA9IHJvdE1hdHJpeFZhbHVlc1syXTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzNdID0gcm90TWF0cml4VmFsdWVzWzRdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbNF0gPSByb3RNYXRyaXhWYWx1ZXNbNV07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFs1XSA9IHJvdE1hdHJpeFZhbHVlc1s2XTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzZdID0gcm90TWF0cml4VmFsdWVzWzhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbN10gPSByb3RNYXRyaXhWYWx1ZXNbOV07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVSb3RhdGlvbk1hdHJpeFs4XSA9IHJvdE1hdHJpeFZhbHVlc1sxMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBpdm90QmFja1RyYW5zbGF0aW9uID0gdGVtcFZlY3RvcnNbMTFdO1xyXG4gICAgICAgICAgICBpZiAocGFydGljbGUudHJhbnNsYXRlRnJvbVBpdm90KSB7XHJcbiAgICAgICAgICAgICAgICBwaXZvdEJhY2tUcmFuc2xhdGlvbi5zZXRBbGwoMC4wKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBpdm90QmFja1RyYW5zbGF0aW9uLmNvcHlGcm9tKHBhcnRpY2xlLnBpdm90KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gcG9zaXRpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IHRtcFZlcnRleCA9IHRlbXBWZWN0b3JzWzBdO1xyXG4gICAgICAgICAgICB0bXBWZXJ0ZXguY29weUZyb20ocGFydGljbGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhYID0gdG1wVmVydGV4LnggLSBwYXJ0aWNsZS5waXZvdC54O1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhZID0gdG1wVmVydGV4LnkgLSBwYXJ0aWNsZS5waXZvdC55O1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhaID0gdG1wVmVydGV4LnogLSBwYXJ0aWNsZS5waXZvdC56O1xyXG5cclxuICAgICAgICAgICAgbGV0IHJvdGF0ZWRYID0gdmVydGV4WCAqIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbMF0gKyB2ZXJ0ZXhZICogcGFydGljbGVSb3RhdGlvbk1hdHJpeFszXSArIHZlcnRleFogKiBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzZdO1xyXG4gICAgICAgICAgICBsZXQgcm90YXRlZFkgPSB2ZXJ0ZXhYICogcGFydGljbGVSb3RhdGlvbk1hdHJpeFsxXSArIHZlcnRleFkgKiBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzRdICsgdmVydGV4WiAqIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbN107XHJcbiAgICAgICAgICAgIGxldCByb3RhdGVkWiA9IHZlcnRleFggKiBwYXJ0aWNsZVJvdGF0aW9uTWF0cml4WzJdICsgdmVydGV4WSAqIHBhcnRpY2xlUm90YXRpb25NYXRyaXhbNV0gKyB2ZXJ0ZXhaICogcGFydGljbGVSb3RhdGlvbk1hdHJpeFs4XTtcclxuXHJcbiAgICAgICAgICAgIHJvdGF0ZWRYICs9IHBpdm90QmFja1RyYW5zbGF0aW9uLng7XHJcbiAgICAgICAgICAgIHJvdGF0ZWRZICs9IHBpdm90QmFja1RyYW5zbGF0aW9uLnk7XHJcbiAgICAgICAgICAgIHJvdGF0ZWRaICs9IHBpdm90QmFja1RyYW5zbGF0aW9uLno7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBweCA9IChwb3NpdGlvbnMzMltwaW5kZXhdID0gcGFydGljbGVHbG9iYWxQb3NpdGlvbi54ICsgY2FtQXhpc1gueCAqIHJvdGF0ZWRYICsgY2FtQXhpc1kueCAqIHJvdGF0ZWRZICsgY2FtQXhpc1oueCAqIHJvdGF0ZWRaKTtcclxuICAgICAgICAgICAgY29uc3QgcHkgPSAocG9zaXRpb25zMzJbcGluZGV4ICsgMV0gPSBwYXJ0aWNsZUdsb2JhbFBvc2l0aW9uLnkgKyBjYW1BeGlzWC55ICogcm90YXRlZFggKyBjYW1BeGlzWS55ICogcm90YXRlZFkgKyBjYW1BeGlzWi55ICogcm90YXRlZFopO1xyXG4gICAgICAgICAgICBjb25zdCBweiA9IChwb3NpdGlvbnMzMltwaW5kZXggKyAyXSA9IHBhcnRpY2xlR2xvYmFsUG9zaXRpb24ueiArIGNhbUF4aXNYLnogKiByb3RhdGVkWCArIGNhbUF4aXNZLnogKiByb3RhdGVkWSArIGNhbUF4aXNaLnogKiByb3RhdGVkWik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29tcHV0ZUJvdW5kaW5nQm94KSB7XHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtLm1pbmltaXplSW5QbGFjZUZyb21GbG9hdHMocHgsIHB5LCBweik7XHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtLm1heGltaXplSW5QbGFjZUZyb21GbG9hdHMocHgsIHB5LCBweik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb21wdXRlUGFydGljbGVDb2xvciAmJiBwYXJ0aWNsZS5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBwYXJ0aWNsZS5jb2xvcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yczMyID0gdGhpcy5fY29sb3JzMzI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMzMltjaW5kZXhdID0gY29sb3IucjtcclxuICAgICAgICAgICAgICAgIGNvbG9yczMyW2NpbmRleCArIDFdID0gY29sb3IuZztcclxuICAgICAgICAgICAgICAgIGNvbG9yczMyW2NpbmRleCArIDJdID0gY29sb3IuYjtcclxuICAgICAgICAgICAgICAgIGNvbG9yczMyW2NpbmRleCArIDNdID0gY29sb3IuYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29tcHV0ZVBhcnRpY2xlVGV4dHVyZSAmJiBwYXJ0aWNsZS51dikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXYgPSBwYXJ0aWNsZS51djtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHV2czMyID0gdGhpcy5fdXZzMzI7XHJcbiAgICAgICAgICAgICAgICB1dnMzMlt1aW5kZXhdID0gdXYueDtcclxuICAgICAgICAgICAgICAgIHV2czMyW3VpbmRleCArIDFdID0gdXYueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIFZCTyBtdXN0IGJlIHVwZGF0ZWRcclxuICAgICAgICBpZiAobWVzaCkge1xyXG4gICAgICAgICAgICBpZiAodXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29tcHV0ZVBhcnRpY2xlQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNoLnVwZGF0ZVZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuQ29sb3JLaW5kLCBjb2xvcnMzMiwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb21wdXRlUGFydGljbGVUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzaC51cGRhdGVWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlVWS2luZCwgdXZzMzIsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtZXNoLnVwZGF0ZVZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kLCBwb3NpdGlvbnMzMiwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbXB1dGVCb3VuZGluZ0JveCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc2guaGFzQm91bmRpbmdJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzaC5nZXRCb3VuZGluZ0luZm8oKS5yZUNvbnN0cnVjdChtaW5pbXVtLCBtYXhpbXVtLCBtZXNoLl93b3JsZE1hdHJpeCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc2guYnVpbGRCb3VuZGluZ0luZm8obWluaW11bSwgbWF4aW11bSwgbWVzaC5fd29ybGRNYXRyaXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWZ0ZXJVcGRhdGVQYXJ0aWNsZXMoc3RhcnQsIGVuZCwgdXBkYXRlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VzIHRoZSBQQ1MuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVzaD8uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMudmFycyA9IG51bGw7XHJcbiAgICAgICAgLy8gZHJvcCByZWZlcmVuY2VzIHRvIGludGVybmFsIGJpZyBhcnJheXMgZm9yIHRoZSBHQ1xyXG4gICAgICAgICg8YW55PnRoaXMuX3Bvc2l0aW9ucykgPSBudWxsO1xyXG4gICAgICAgICg8YW55PnRoaXMuX2luZGljZXMpID0gbnVsbDtcclxuICAgICAgICAoPGFueT50aGlzLl9ub3JtYWxzKSA9IG51bGw7XHJcbiAgICAgICAgKDxhbnk+dGhpcy5fdXZzKSA9IG51bGw7XHJcbiAgICAgICAgKDxhbnk+dGhpcy5fY29sb3JzKSA9IG51bGw7XHJcbiAgICAgICAgKDxhbnk+dGhpcy5faW5kaWNlczMyKSA9IG51bGw7XHJcbiAgICAgICAgKDxhbnk+dGhpcy5fcG9zaXRpb25zMzIpID0gbnVsbDtcclxuICAgICAgICAoPGFueT50aGlzLl91dnMzMikgPSBudWxsO1xyXG4gICAgICAgICg8YW55PnRoaXMuX2NvbG9yczMyKSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWaXNpYmlsaXR5IGhlbHBlciA6IFJlY29tcHV0ZXMgdGhlIHZpc2libGUgc2l6ZSBhY2NvcmRpbmcgdG8gdGhlIG1lc2ggYm91bmRpbmcgYm94XHJcbiAgICAgKiBkb2MgOlxyXG4gICAgICogQHJldHVybnMgdGhlIFBDUy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZnJlc2hWaXNpYmxlU2l6ZSgpOiBQb2ludHNDbG91ZFN5c3RlbSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1Zpc2liaWxpdHlCb3hMb2NrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNoPy5yZWZyZXNoQm91bmRpbmdJbmZvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmlzaWJpbGl0eSBoZWxwZXIgOiBTZXRzIHRoZSBzaXplIG9mIGEgdmlzaWJpbGl0eSBib3gsIHRoaXMgc2V0cyB0aGUgdW5kZXJseWluZyBtZXNoIGJvdW5kaW5nIGJveC5cclxuICAgICAqIEBwYXJhbSBzaXplIHRoZSBzaXplIChmbG9hdCkgb2YgdGhlIHZpc2liaWxpdHkgYm94XHJcbiAgICAgKiBub3RlIDogdGhpcyBkb2Vzbid0IGxvY2sgdGhlIFBDUyBtZXNoIGJvdW5kaW5nIGJveC5cclxuICAgICAqIGRvYyA6XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRWaXNpYmlsaXR5Qm94KHNpemU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZpcyA9IHNpemUgLyAyO1xyXG4gICAgICAgIHRoaXMubWVzaC5idWlsZEJvdW5kaW5nSW5mbyhuZXcgVmVjdG9yMygtdmlzLCAtdmlzLCAtdmlzKSwgbmV3IFZlY3RvcjModmlzLCB2aXMsIHZpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBQQ1MgaXMgYWx3YXlzIHZpc2libGUgb3Igbm90XHJcbiAgICAgKiBkb2MgOlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzQWx3YXlzVmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWx3YXlzVmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIFBDUyBhcyBhbHdheXMgdmlzaWJsZSBvciBub3RcclxuICAgICAqIGRvYyA6XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgaXNBbHdheXNWaXNpYmxlKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2Fsd2F5c1Zpc2libGUgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5tZXNoLmFsd2F5c1NlbGVjdEFzQWN0aXZlTWVzaCA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRlbGxzIHRvIGBzZXRQYXJ0aWNsZXMoKWAgdG8gY29tcHV0ZSB0aGUgcGFydGljbGUgcm90YXRpb25zIG9yIG5vdFxyXG4gICAgICogRGVmYXVsdCB2YWx1ZSA6IGZhbHNlLiBUaGUgUENTIGlzIGZhc3RlciB3aGVuIGl0J3Mgc2V0IHRvIGZhbHNlXHJcbiAgICAgKiBOb3RlIDogcGFydGljbGUgcm90YXRpb25zIGFyZSBvbmx5IGFwcGxpZWQgdG8gcGFyZW50IHBhcnRpY2xlc1xyXG4gICAgICogTm90ZSA6IHRoZSBwYXJ0aWNsZSByb3RhdGlvbnMgYXJlbid0IHN0b3JlZCB2YWx1ZXMsIHNvIHNldHRpbmcgYGNvbXB1dGVQYXJ0aWNsZVJvdGF0aW9uYCB0byBmYWxzZSB3aWxsIHByZXZlbnRzIHRoZSBwYXJ0aWNsZSB0byByb3RhdGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjb21wdXRlUGFydGljbGVSb3RhdGlvbih2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jb21wdXRlUGFydGljbGVSb3RhdGlvbiA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRlbGxzIHRvIGBzZXRQYXJ0aWNsZXMoKWAgdG8gY29tcHV0ZSB0aGUgcGFydGljbGUgY29sb3JzIG9yIG5vdC5cclxuICAgICAqIERlZmF1bHQgdmFsdWUgOiB0cnVlLiBUaGUgUENTIGlzIGZhc3RlciB3aGVuIGl0J3Mgc2V0IHRvIGZhbHNlLlxyXG4gICAgICogTm90ZSA6IHRoZSBwYXJ0aWNsZSBjb2xvcnMgYXJlIHN0b3JlZCB2YWx1ZXMsIHNvIHNldHRpbmcgYGNvbXB1dGVQYXJ0aWNsZUNvbG9yYCB0byBmYWxzZSB3aWxsIGtlZXAgeWV0IHRoZSBsYXN0IGNvbG9ycyBzZXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY29tcHV0ZVBhcnRpY2xlQ29sb3IodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fY29tcHV0ZVBhcnRpY2xlQ29sb3IgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjb21wdXRlUGFydGljbGVUZXh0dXJlKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2NvbXB1dGVQYXJ0aWNsZVRleHR1cmUgPSB2YWw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgaWYgYHNldFBhcnRpY2xlcygpYCBjb21wdXRlcyB0aGUgcGFydGljbGUgY29sb3JzIG9yIG5vdC5cclxuICAgICAqIERlZmF1bHQgdmFsdWUgOiBmYWxzZS4gVGhlIFBDUyBpcyBmYXN0ZXIgd2hlbiBpdCdzIHNldCB0byBmYWxzZS5cclxuICAgICAqIE5vdGUgOiB0aGUgcGFydGljbGUgY29sb3JzIGFyZSBzdG9yZWQgdmFsdWVzLCBzbyBzZXR0aW5nIGBjb21wdXRlUGFydGljbGVDb2xvcmAgdG8gZmFsc2Ugd2lsbCBrZWVwIHlldCB0aGUgbGFzdCBjb2xvcnMgc2V0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvbXB1dGVQYXJ0aWNsZUNvbG9yKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wdXRlUGFydGljbGVDb2xvcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBpZiBgc2V0UGFydGljbGVzKClgIGNvbXB1dGVzIHRoZSBwYXJ0aWNsZSB0ZXh0dXJlcyBvciBub3QuXHJcbiAgICAgKiBEZWZhdWx0IHZhbHVlIDogZmFsc2UuIFRoZSBQQ1MgaXMgZmFzdGVyIHdoZW4gaXQncyBzZXQgdG8gZmFsc2UuXHJcbiAgICAgKiBOb3RlIDogdGhlIHBhcnRpY2xlIHRleHR1cmVzIGFyZSBzdG9yZWQgdmFsdWVzLCBzbyBzZXR0aW5nIGBjb21wdXRlUGFydGljbGVUZXh0dXJlYCB0byBmYWxzZSB3aWxsIGtlZXAgeWV0IHRoZSBsYXN0IGNvbG9ycyBzZXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY29tcHV0ZVBhcnRpY2xlVGV4dHVyZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcHV0ZVBhcnRpY2xlVGV4dHVyZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGVsbHMgdG8gYHNldFBhcnRpY2xlcygpYCB0byBjb21wdXRlIG9yIG5vdCB0aGUgbWVzaCBib3VuZGluZyBib3ggd2hlbiBjb21wdXRpbmcgdGhlIHBhcnRpY2xlIHBvc2l0aW9ucy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjb21wdXRlQm91bmRpbmdCb3godmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fY29tcHV0ZUJvdW5kaW5nQm94ID0gdmFsO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGlmIGBzZXRQYXJ0aWNsZXMoKWAgY29tcHV0ZXMgb3Igbm90IHRoZSBtZXNoIGJvdW5kaW5nIGJveCB3aGVuIGNvbXB1dGluZyB0aGUgcGFydGljbGUgcG9zaXRpb25zLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvbXB1dGVCb3VuZGluZ0JveCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcHV0ZUJvdW5kaW5nQm94O1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBQYXJ0aWNsZSBiZWhhdmlvciBsb2dpY1xyXG4gICAgLy8gdGhlc2UgZm9sbG93aW5nIG1ldGhvZHMgbWF5IGJlIG92ZXJ3cml0dGVuIGJ5IHVzZXJzIHRvIGZpdCB0aGVpciBuZWVkc1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdGhpbmcuIEl0IG1heSBiZSBvdmVyd3JpdHRlbiB0byBzZXQgYWxsIHRoZSBwYXJ0aWNsZSBmaXJzdCB2YWx1ZXMuXHJcbiAgICAgKiBUaGUgUENTIGRvZXNuJ3QgY2FsbCB0aGlzIGZ1bmN0aW9uLCB5b3UgbWF5IGhhdmUgdG8gY2FsbCBpdCBieSB5b3VyIG93bi5cclxuICAgICAqIGRvYyA6XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0UGFydGljbGVzKCk6IHZvaWQge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gZG9lcyBub3RoaW5nLiBJdCBtYXkgYmUgb3ZlcndyaXR0ZW4gdG8gcmVjeWNsZSBhIHBhcnRpY2xlXHJcbiAgICAgKiBUaGUgUENTIGRvZXNuJ3QgY2FsbCB0aGlzIGZ1bmN0aW9uLCB5b3UgY2FuIHRvIGNhbGwgaXRcclxuICAgICAqIGRvYyA6XHJcbiAgICAgKiBAcGFyYW0gcGFydGljbGUgVGhlIHBhcnRpY2xlIHRvIHJlY3ljbGVcclxuICAgICAqIEByZXR1cm5zIHRoZSByZWN5Y2xlZCBwYXJ0aWNsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVjeWNsZVBhcnRpY2xlKHBhcnRpY2xlOiBDbG91ZFBvaW50KTogQ2xvdWRQb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnRpY2xlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBhIHBhcnRpY2xlIDogdGhpcyBmdW5jdGlvbiBzaG91bGQgIGJlIG92ZXJ3cml0dGVuIGJ5IHRoZSB1c2VyLlxyXG4gICAgICogSXQgaXMgY2FsbGVkIG9uIGVhY2ggcGFydGljbGUgYnkgYHNldFBhcnRpY2xlcygpYC4gVGhpcyBpcyB0aGUgcGxhY2UgdG8gY29kZSBlYWNoIHBhcnRpY2xlIGJlaGF2aW9yLlxyXG4gICAgICogZG9jIDpcclxuICAgICAqIEBleGFtcGxlIDoganVzdCBzZXQgYSBwYXJ0aWNsZSBwb3NpdGlvbiBvciB2ZWxvY2l0eSBhbmQgcmVjeWNsZSBjb25kaXRpb25zXHJcbiAgICAgKiBAcGFyYW0gcGFydGljbGUgVGhlIHBhcnRpY2xlIHRvIHVwZGF0ZVxyXG4gICAgICogQHJldHVybnMgdGhlIHVwZGF0ZWQgcGFydGljbGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZVBhcnRpY2xlKHBhcnRpY2xlOiBDbG91ZFBvaW50KTogQ2xvdWRQb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnRpY2xlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgYW55IG90aGVyIHRyZWF0bWVudCBieSBgc2V0UGFydGljbGVzKClgIGFuZCB3aWxsIGJlIHBhc3NlZCB0aHJlZSBwYXJhbWV0ZXJzLlxyXG4gICAgICogVGhpcyBkb2VzIG5vdGhpbmcgYW5kIG1heSBiZSBvdmVyd3JpdHRlbiBieSB0aGUgdXNlci5cclxuICAgICAqIEBwYXJhbSBzdGFydCB0aGUgcGFydGljbGUgaW5kZXggaW4gdGhlIHBhcnRpY2xlIGFycmF5IHdoZXJlIHRvIHN0YXJ0IHRvIGl0ZXJhdGUsIHNhbWUgdGhhbiB0aGUgdmFsdWUgcGFzc2VkIHRvIHNldFBhcnRpY2xlKClcclxuICAgICAqIEBwYXJhbSBzdG9wIHRoZSBwYXJ0aWNsZSBpbmRleCBpbiB0aGUgcGFydGljbGUgYXJyYXkgd2hlcmUgdG8gc3RvcCB0byBpdGVyYXRlLCBzYW1lIHRoYW4gdGhlIHZhbHVlIHBhc3NlZCB0byBzZXRQYXJ0aWNsZSgpXHJcbiAgICAgKiBAcGFyYW0gdXBkYXRlIHRoZSBib29sZWFuIHVwZGF0ZSB2YWx1ZSBhY3R1YWxseSBwYXNzZWQgdG8gc2V0UGFydGljbGVzKClcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4gICAgcHVibGljIGJlZm9yZVVwZGF0ZVBhcnRpY2xlcyhzdGFydD86IG51bWJlciwgc3RvcD86IG51bWJlciwgdXBkYXRlPzogYm9vbGVhbik6IHZvaWQge31cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCAgYnkgYHNldFBhcnRpY2xlcygpYCBhZnRlciBhbGwgdGhlIG90aGVyIHRyZWF0bWVudHMgYW5kIGp1c3QgYmVmb3JlIHRoZSBhY3R1YWwgbWVzaCB1cGRhdGUuXHJcbiAgICAgKiBUaGlzIHdpbGwgYmUgcGFzc2VkIHRocmVlIHBhcmFtZXRlcnMuXHJcbiAgICAgKiBUaGlzIGRvZXMgbm90aGluZyBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuIGJ5IHRoZSB1c2VyLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0IHRoZSBwYXJ0aWNsZSBpbmRleCBpbiB0aGUgcGFydGljbGUgYXJyYXkgd2hlcmUgdG8gc3RhcnQgdG8gaXRlcmF0ZSwgc2FtZSB0aGFuIHRoZSB2YWx1ZSBwYXNzZWQgdG8gc2V0UGFydGljbGUoKVxyXG4gICAgICogQHBhcmFtIHN0b3AgdGhlIHBhcnRpY2xlIGluZGV4IGluIHRoZSBwYXJ0aWNsZSBhcnJheSB3aGVyZSB0byBzdG9wIHRvIGl0ZXJhdGUsIHNhbWUgdGhhbiB0aGUgdmFsdWUgcGFzc2VkIHRvIHNldFBhcnRpY2xlKClcclxuICAgICAqIEBwYXJhbSB1cGRhdGUgdGhlIGJvb2xlYW4gdXBkYXRlIHZhbHVlIGFjdHVhbGx5IHBhc3NlZCB0byBzZXRQYXJ0aWNsZXMoKVxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICBwdWJsaWMgYWZ0ZXJVcGRhdGVQYXJ0aWNsZXMoc3RhcnQ/OiBudW1iZXIsIHN0b3A/OiBudW1iZXIsIHVwZGF0ZT86IGJvb2xlYW4pOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgSVBhcnNlZFNwbGF0IH0gZnJvbSBcIi4vc3BsYXREZWZzXCI7XHJcbmltcG9ydCB7IE1vZGUgfSBmcm9tIFwiLi9zcGxhdERlZnNcIjtcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5zY2FsYXJcIjtcclxuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdEVuZ2luZSB9IGZyb20gXCJjb3JlL0VuZ2luZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBEZWZpbml0aW9uIG9mIGEgU09HIGRhdGEgZmlsZVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgaW50ZXJmYWNlIFNPR0RhdGFGaWxlIHtcclxuICAgIC8qKlxyXG4gICAgICogaW5kZXggMCBpcyBudW1iZXIgb2Ygc3BsYXRzIGluZGV4IDEgaXMgbnVtYmVyIG9mIGNvbXBvbmVudHMgcGVyIHNwbGF0ICgzIGZvciB2ZWMzLCA0IGZvciB2ZWM0LCBldGMuKVxyXG4gICAgICovXHJcbiAgICBzaGFwZTogbnVtYmVyW107XHJcbiAgICAvKipcclxuICAgICAqIHR5cGUgb2YgY29tcG9uZW50c1xyXG4gICAgICovXHJcbiAgICBkdHlwZTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtaW4gcmFuZ2Ugb2YgZGF0YVxyXG4gICAgICovXHJcbiAgICBtaW5zPzogbnVtYmVyIHwgbnVtYmVyW107XHJcbiAgICAvKipcclxuICAgICAqIG1heCByYW5nZSBvZiBkYXRhXHJcbiAgICAgKi9cclxuICAgIG1heHM/OiBudW1iZXIgfCBudW1iZXJbXTtcclxuICAgIC8qKlxyXG4gICAgICogcGFsZXR0ZSBmb3IgaW5kZXhlZCBkYXRhIChxdWFudGl6ZWQpXHJcbiAgICAgKi9cclxuICAgIGNvZGVib29rPzogbnVtYmVyW107IC8vIE9ubHkgZm9yIHZlcnNpb24gMlxyXG4gICAgLyoqXHJcbiAgICAgKiB0eXBlIG9mIGVuY29kaW5nXHJcbiAgICAgKi9cclxuICAgIGVuY29kaW5nPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBudW1iZXIgb2YgYml0cyBmb3IgcXVhbnRpemF0aW9uIChpZiBhbnkpXHJcbiAgICAgKi9cclxuICAgIHF1YW50aXphdGlvbj86IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogd2VicCBmaWxlIG5hbWVzXHJcbiAgICAgKi9cclxuICAgIGZpbGVzOiBzdHJpbmdbXTtcclxuICAgIC8qKlxyXG4gICAgICogU0ggYmFuZCBjb3VudCAoaWYgYXBwbGljYWJsZSlcclxuICAgICAqL1xyXG4gICAgYmFuZHM/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbml0aW9uIG9mIHRoZSByb290IFNPRyBkYXRhIGZpbGVcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGludGVyZmFjZSBTT0dSb290RGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIHZlcnNpb24gb2YgdGhlIFNPRyBmb3JtYXRcclxuICAgICAqL1xyXG4gICAgdmVyc2lvbj86IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogbWVhbiBwb3NpdGlvbnMgb2YgdGhlIHNwbGF0c1xyXG4gICAgICovXHJcbiAgICBtZWFuczogU09HRGF0YUZpbGU7XHJcbiAgICAvKipcclxuICAgICAqIHNjYWxlcyBvZiB0aGUgc3BsYXRzXHJcbiAgICAgKi9cclxuICAgIHNjYWxlczogU09HRGF0YUZpbGU7XHJcbiAgICAvKipcclxuICAgICAqIHF1YXRlcm5pb25zIG9mIHRoZSBzcGxhdHNcclxuICAgICAqL1xyXG4gICAgcXVhdHM6IFNPR0RhdGFGaWxlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTSDAgY29lZmZpY2llbnRzIG9mIHRoZSBzcGxhdHMgKGJhc2UgY29sb3IpXHJcbiAgICAgKi9cclxuICAgIHNoMDogU09HRGF0YUZpbGU7XHJcbiAgICAvKipcclxuICAgICAqICBPcHRpb25hbCBoaWdoZXIgb3JkZXIgU0ggY29lZmZpY2llbnRzIG9mIHRoZSBzcGxhdHMgKGxpZ2h0aW5nIGluZm9ybWF0aW9uKVxyXG4gICAgICovXHJcbiAgICBzaE4/OiBTT0dEYXRhRmlsZTtcclxuICAgIC8qKlxyXG4gICAgICogbnVtYmVyIG9mIHNwbGF0cyAob3B0aW9uYWwsIGNhbiBiZSBpbmZlcnJlZCBmcm9tIG1lYW5zLnNoYXBlWzBdKVxyXG4gICAgICovXHJcbiAgICBjb3VudD86IG51bWJlcjtcclxufVxyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5pbnRlcmZhY2UgSVdlYlBJbWFnZSB7XHJcbiAgICBiaXRzOiBVaW50OEFycmF5O1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxufVxyXG5jb25zdCBTSF9DMCA9IDAuMjgyMDk0NzkxNzczODc4MTQ7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBMb2FkV2VicEltYWdlRGF0YShyb290VXJsT3JEYXRhOiBzdHJpbmcgfCBVaW50OEFycmF5LCBmaWxlbmFtZTogc3RyaW5nLCBlbmdpbmU6IEFic3RyYWN0RW5naW5lKTogUHJvbWlzZTxJV2ViUEltYWdlPiB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8SVdlYlBJbWFnZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gZW5naW5lLmNyZWF0ZUNhbnZhc0ltYWdlKCk7XHJcbiAgICAgICAgaWYgKCFpbWFnZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIEltYWdlQml0bWFwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEcmF3IHRvIGNhbnZhc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZW5naW5lLmNyZWF0ZUNhbnZhcyhpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGlmICghY2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBjYW52YXNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjdHgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IDJEIGNvbnRleHRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IHBpeGVsIGRhdGEgKFJHQkEgcGVyIHBpeGVsKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGJpdHM6IG5ldyBVaW50OEFycmF5KGltYWdlRGF0YS5kYXRhLmJ1ZmZlciksIHdpZHRoOiBpbWFnZURhdGEud2lkdGggfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnNcclxuICAgICAgICAgICAgICAgIHJlamVjdChgRXJyb3IgbG9hZGluZyBpbWFnZSAke2ltYWdlLnNyY30gd2l0aCBleGNlcHRpb246ICR7ZXJyb3J9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItcHJvbWlzZS1yZWplY3QtZXJyb3JzXHJcbiAgICAgICAgICAgIHJlamVjdChgRXJyb3IgbG9hZGluZyBpbWFnZSAke2ltYWdlLnNyY30gd2l0aCBleGNlcHRpb246ICR7ZXJyb3J9YCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiOyAvLyBUbyBhdm9pZCBDT1JTIGlzc3Vlc1xyXG4gICAgICAgIGxldCBvYmplY3RVcmw6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodHlwZW9mIHJvb3RVcmxPckRhdGEgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgLy8gb2xkIGJlaGF2aW9yOiBVUkwgKyBmaWxlbmFtZVxyXG4gICAgICAgICAgICBpZiAoIWZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaWxlbmFtZSBpcyByZXF1aXJlZCB3aGVuIHVzaW5nIGEgVVJMXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHJvb3RVcmxPckRhdGEgKyBmaWxlbmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBuZXcgYmVoYXZpb3I6IFVpbnQ4QXJyYXlcclxuICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtyb290VXJsT3JEYXRhIGFzIGFueV0sIHsgdHlwZTogXCJpbWFnZS93ZWJwXCIgfSk7XHJcbiAgICAgICAgICAgIG9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IG9iamVjdFVybDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhd2FpdCBwcm9taXNlO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBQYXJzZVNvZ0RhdGFzKGRhdGE6IFNPR1Jvb3REYXRhLCBpbWFnZURhdGFBcnJheXM6IElXZWJQSW1hZ2VbXSwgc2NlbmU6IFNjZW5lKTogUHJvbWlzZTxJUGFyc2VkU3BsYXQ+IHtcclxuICAgIGNvbnN0IHNwbGF0Q291bnQgPSBkYXRhLmNvdW50ID8gZGF0YS5jb3VudCA6IGRhdGEubWVhbnMuc2hhcGVbMF07XHJcbiAgICBjb25zdCByb3dPdXRwdXRMZW5ndGggPSAzICogNCArIDMgKiA0ICsgNCArIDQ7IC8vIDMyXHJcbiAgICBjb25zdCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIocm93T3V0cHV0TGVuZ3RoICogc3BsYXRDb3VudCk7XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlcik7XHJcbiAgICBjb25zdCBzY2FsZSA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKTtcclxuICAgIGNvbnN0IHJnYmEgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoYnVmZmVyKTtcclxuICAgIGNvbnN0IHJvdCA9IG5ldyBVaW50OENsYW1wZWRBcnJheShidWZmZXIpO1xyXG5cclxuICAgIC8vIFVuZG8gdGhlIHN5bW1ldHJpYyBsb2cgdHJhbnNmb3JtIHVzZWQgYXQgZW5jb2RlIHRpbWU6XHJcbiAgICBjb25zdCB1bmxvZyA9IChuOiBudW1iZXIpID0+IE1hdGguc2lnbihuKSAqIChNYXRoLmV4cChNYXRoLmFicyhuKSkgLSAxKTtcclxuXHJcbiAgICBjb25zdCBtZWFuc2wgPSBpbWFnZURhdGFBcnJheXNbMF0uYml0cztcclxuICAgIGNvbnN0IG1lYW5zdSA9IGltYWdlRGF0YUFycmF5c1sxXS5iaXRzO1xyXG4gICAgLy8gQ2hlY2sgdGhhdCBkYXRhLm1lYW5zLm1pbnMgaXMgYW4gYXJyYXlcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLm1lYW5zLm1pbnMpIHx8ICFBcnJheS5pc0FycmF5KGRhdGEubWVhbnMubWF4cykpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGFycmF5cyBpbiBTT0cgZGF0YS5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tIFBvc2l0aW9uc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGkgKiA0O1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lYW5zTWluID0gZGF0YS5tZWFucy5taW5zW2pdO1xyXG4gICAgICAgICAgICBjb25zdCBtZWFuc01heCA9IGRhdGEubWVhbnMubWF4c1tqXTtcclxuICAgICAgICAgICAgY29uc3QgbWVhbnN1cCA9IG1lYW5zdVtpbmRleCArIGpdO1xyXG4gICAgICAgICAgICBjb25zdCBtZWFuc2xvdyA9IG1lYW5zbFtpbmRleCArIGpdO1xyXG4gICAgICAgICAgICBjb25zdCBxID0gKG1lYW5zdXAgPDwgOCkgfCBtZWFuc2xvdztcclxuICAgICAgICAgICAgY29uc3QgbiA9IFNjYWxhci5MZXJwKG1lYW5zTWluLCBtZWFuc01heCwgcSAvIDY1NTM1KTtcclxuICAgICAgICAgICAgcG9zaXRpb25baSAqIDggKyBqXSA9IHVubG9nKG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gU2NhbGVzXHJcbiAgICBjb25zdCBzY2FsZXMgPSBpbWFnZURhdGFBcnJheXNbMl0uYml0cztcclxuICAgIGlmIChkYXRhLnZlcnNpb24gPT09IDIpIHtcclxuICAgICAgICBpZiAoIWRhdGEuc2NhbGVzLmNvZGVib29rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgY29kZWJvb2sgaW4gU09HIHZlcnNpb24gMiBzY2FsZXMgZGF0YS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsYXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaSAqIDQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzYyA9IGRhdGEuc2NhbGVzLmNvZGVib29rW3NjYWxlc1tpbmRleCArIGpdXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjZSA9IE1hdGguZXhwKHNjKTtcclxuICAgICAgICAgICAgICAgIHNjYWxlW2kgKiA4ICsgMyArIGpdID0gc2NlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5zY2FsZXMubWlucykgfHwgIUFycmF5LmlzQXJyYXkoZGF0YS5zY2FsZXMubWF4cykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBhcnJheXMgaW4gU09HIHNjYWxlcyBkYXRhLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsYXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaSAqIDQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzYyA9IHNjYWxlc1tpbmRleCArIGpdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbHNjID0gU2NhbGFyLkxlcnAoZGF0YS5zY2FsZXMubWluc1tqXSwgZGF0YS5zY2FsZXMubWF4c1tqXSwgc2MgLyAyNTUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbHNjZSA9IE1hdGguZXhwKGxzYyk7XHJcbiAgICAgICAgICAgICAgICBzY2FsZVtpICogOCArIDMgKyBqXSA9IGxzY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tIENvbG9ycy9TSDBcclxuICAgIGNvbnN0IGNvbG9ycyA9IGltYWdlRGF0YUFycmF5c1s0XS5iaXRzO1xyXG4gICAgaWYgKGRhdGEudmVyc2lvbiA9PT0gMikge1xyXG4gICAgICAgIGlmICghZGF0YS5zaDAuY29kZWJvb2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBjb2RlYm9vayBpbiBTT0cgdmVyc2lvbiAyIHNoMCBkYXRhLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpICogNDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IDAuNSArIGRhdGEuc2gwLmNvZGVib29rW2NvbG9yc1tpbmRleCArIGpdXSAqIFNIX0MwO1xyXG4gICAgICAgICAgICAgICAgcmdiYVtpICogMzIgKyAyNCArIGpdID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBNYXRoLnJvdW5kKDI1NSAqIGNvbXBvbmVudCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZ2JhW2kgKiAzMiArIDI0ICsgM10gPSBjb2xvcnNbaW5kZXggKyAzXTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLnNoMC5taW5zKSB8fCAhQXJyYXkuaXNBcnJheShkYXRhLnNoMC5tYXhzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGFycmF5cyBpbiBTT0cgc2gwIGRhdGEuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGF0Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGkgKiA0O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JzTWluID0gZGF0YS5zaDAubWluc1tqXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yc01heCA9IGRhdGEuc2gwLm1heHNbal07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3J0ID0gY29sb3JzW2luZGV4ICsgal07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gU2NhbGFyLkxlcnAoY29sb3JzTWluLCBjb2xvcnNNYXgsIGNvbG9ydCAvIDI1NSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNzaDtcclxuICAgICAgICAgICAgICAgIGlmIChqIDwgMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNzaCA9IDAuNSArIGMgKiBTSF9DMDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3NoID0gMS4wIC8gKDEuMCArIE1hdGguZXhwKC1jKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmdiYVtpICogMzIgKyAyNCArIGpdID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBNYXRoLnJvdW5kKDI1NSAqIGNzaCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gUm90YXRpb25zXHJcbiAgICAvLyBEZXF1YW50aXplIHRoZSBzdG9yZWQgdGhyZWUgY29tcG9uZW50czpcclxuICAgIGNvbnN0IHRvQ29tcCA9IChjOiBudW1iZXIpID0+ICgoYyAvIDI1NSAtIDAuNSkgKiAyLjApIC8gTWF0aC5TUVJUMjtcclxuXHJcbiAgICBjb25zdCBxdWF0QXJyYXkgPSBpbWFnZURhdGFBcnJheXNbM10uYml0cztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsYXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcXVhdHNyID0gcXVhdEFycmF5W2kgKiA0ICsgMF07XHJcbiAgICAgICAgY29uc3QgcXVhdHNnID0gcXVhdEFycmF5W2kgKiA0ICsgMV07XHJcbiAgICAgICAgY29uc3QgcXVhdHNiID0gcXVhdEFycmF5W2kgKiA0ICsgMl07XHJcbiAgICAgICAgY29uc3QgcXVhdHNhID0gcXVhdEFycmF5W2kgKiA0ICsgM107XHJcblxyXG4gICAgICAgIGNvbnN0IGEgPSB0b0NvbXAocXVhdHNyKTtcclxuICAgICAgICBjb25zdCBiID0gdG9Db21wKHF1YXRzZyk7XHJcbiAgICAgICAgY29uc3QgYyA9IHRvQ29tcChxdWF0c2IpO1xyXG5cclxuICAgICAgICBjb25zdCBtb2RlID0gcXVhdHNhIC0gMjUyOyAvLyAwLi4zIChSLEcsQixBIGlzIG9uZSBvZiB0aGUgZm91ciBjb21wb25lbnRzKVxyXG5cclxuICAgICAgICAvLyBSZWNvbnN0cnVjdCB0aGUgb21pdHRlZCBjb21wb25lbnQgc28gdGhhdCB8fHF8fCA9IDEgYW5kIHcubC5vLmcuIHRoZSBvbWl0dGVkIG9uZSBpcyBub24tbmVnYXRpdmVcclxuICAgICAgICBjb25zdCB0ID0gYSAqIGEgKyBiICogYiArIGMgKiBjO1xyXG4gICAgICAgIGNvbnN0IGQgPSBNYXRoLnNxcnQoTWF0aC5tYXgoMCwgMSAtIHQpKTtcclxuXHJcbiAgICAgICAgLy8gUGxhY2UgY29tcG9uZW50cyBhY2NvcmRpbmcgdG8gbW9kZVxyXG4gICAgICAgIGxldCBxOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgcSA9IFtkLCBhLCBiLCBjXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBvbWl0dGVkID0geFxyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBxID0gW2EsIGQsIGIsIGNdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vIG9taXR0ZWQgPSB5XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHEgPSBbYSwgYiwgZCwgY107XHJcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gb21pdHRlZCA9IHpcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgcSA9IFthLCBiLCBjLCBkXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBvbWl0dGVkID0gd1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBxdWF0ZXJuaW9uIG1vZGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb3RbaSAqIDMyICsgMjggKyAwXSA9IHFbMF0gKiAxMjcuNSArIDEyNy41O1xyXG4gICAgICAgIHJvdFtpICogMzIgKyAyOCArIDFdID0gcVsxXSAqIDEyNy41ICsgMTI3LjU7XHJcbiAgICAgICAgcm90W2kgKiAzMiArIDI4ICsgMl0gPSBxWzJdICogMTI3LjUgKyAxMjcuNTtcclxuICAgICAgICByb3RbaSAqIDMyICsgMjggKyAzXSA9IHFbM10gKiAxMjcuNSArIDEyNy41O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLSBTSFxyXG4gICAgaWYgKGRhdGEuc2hOKSB7XHJcbiAgICAgICAgY29uc3QgY29lZmZDb3VudHMgPSBbMCwgMywgOCwgMTVdO1xyXG4gICAgICAgIGNvbnN0IGNvZWZmcyA9IGRhdGEuc2hOLmJhbmRzID8gY29lZmZDb3VudHNbZGF0YS5zaE4uYmFuZHNdIDogZGF0YS5zaE4uc2hhcGVbMV0gLyAzOyAvLyAzIGNvbXBvbmVudHMgcGVyIGNvZWZmXHJcbiAgICAgICAgY29uc3Qgc2hDZW50cm9pZHMgPSBpbWFnZURhdGFBcnJheXNbNV0uYml0cztcclxuICAgICAgICBjb25zdCBzaExhYmVsc0RhdGEgPSBpbWFnZURhdGFBcnJheXNbNl0uYml0cztcclxuICAgICAgICBjb25zdCBzaENlbnRyb2lkc1dpZHRoID0gaW1hZ2VEYXRhQXJyYXlzWzVdLndpZHRoO1xyXG5cclxuICAgICAgICBjb25zdCBzaENvbXBvbmVudENvdW50ID0gY29lZmZzICogMztcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dHVyZUNvdW50ID0gTWF0aC5jZWlsKHNoQ29tcG9uZW50Q291bnQgLyAxNik7IC8vIDQgY29tcG9uZW50cyBjYW4gYmUgc3RvcmVkIHBlciB0ZXh0dXJlLCA0IHNoIHBlciBjb21wb25lbnRcclxuICAgICAgICAvL2xldCBzaEluZGV4UmVhZCA9IGJ5dGVPZmZzZXQ7XHJcblxyXG4gICAgICAgIC8vIHNoIGlzIGFuIGFycmF5IG9mIHVpbnQ4YXJyYXkgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIHNoIHRleHR1cmVzXHJcbiAgICAgICAgY29uc3Qgc2g6IFVpbnQ4QXJyYXlbXSA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBlbmdpbmUgPSBzY2VuZS5nZXRFbmdpbmUoKTtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IGVuZ2luZS5nZXRDYXBzKCkubWF4VGV4dHVyZVNpemU7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5jZWlsKHNwbGF0Q291bnQgLyB3aWR0aCk7XHJcbiAgICAgICAgLy8gY3JlYXRlIGFycmF5IGZvciB0aGUgbnVtYmVyIG9mIHRleHR1cmVzIG5lZWRlZC5cclxuICAgICAgICBmb3IgKGxldCB0ZXh0dXJlSW5kZXggPSAwOyB0ZXh0dXJlSW5kZXggPCB0ZXh0dXJlQ291bnQ7IHRleHR1cmVJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVWludDhBcnJheShoZWlnaHQgKiB3aWR0aCAqIDQgKiA0KTsgLy8gNCBjb21wb25lbnRzIHBlciB0ZXh0dXJlLCA0IHNoIHBlciBjb21wb25lbnRcclxuICAgICAgICAgICAgc2gucHVzaCh0ZXh0dXJlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnZlcnNpb24gPT09IDIpIHtcclxuICAgICAgICAgICAgaWYgKCFkYXRhLnNoTi5jb2RlYm9vaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBjb2RlYm9vayBpbiBTT0cgdmVyc2lvbiAyIHNoTiBkYXRhLlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSBzaExhYmVsc0RhdGFbaSAqIDQgKyAwXSArIChzaExhYmVsc0RhdGFbaSAqIDQgKyAxXSA8PCA4KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHUgPSAobiAlIDY0KSAqIGNvZWZmcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBNYXRoLmZsb29yKG4gLyA2NCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjb2VmZnM7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoSW5kZXhXcml0ZSA9IGsgKiAzICsgajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZUluZGV4ID0gTWF0aC5mbG9vcihzaEluZGV4V3JpdGUgLyAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoQXJyYXkgPSBzaFt0ZXh0dXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBieXRlSW5kZXhJblRleHR1cmUgPSBzaEluZGV4V3JpdGUgJSAxNjsgLy8gWzAuLjE1XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRQZXJTcGxhdCA9IGkgKiAxNjsgLy8gMTYgc2ggdmFsdWVzIHBlciB0ZXh0dXJlIHBlciBzcGxhdC5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoVmFsdWUgPSBkYXRhLnNoTi5jb2RlYm9va1tzaENlbnRyb2lkc1sodSArIGspICogNCArIGogKyB2ICogc2hDZW50cm9pZHNXaWR0aCAqIDRdXSAqIDEyNy41ICsgMTI3LjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoQXJyYXlbYnl0ZUluZGV4SW5UZXh0dXJlICsgb2Zmc2V0UGVyU3BsYXRdID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBzaFZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSBzaExhYmVsc0RhdGFbaSAqIDQgKyAwXSArIChzaExhYmVsc0RhdGFbaSAqIDQgKyAxXSA8PCA4KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHUgPSAobiAlIDY0KSAqIGNvZWZmcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBNYXRoLmZsb29yKG4gLyA2NCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaE1pbiA9IGRhdGEuc2hOLm1pbnMgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hNYXggPSBkYXRhLnNoTi5tYXhzIGFzIG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY29lZmZzIC8gMzsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoSW5kZXhXcml0ZSA9IGsgKiAzICsgajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZUluZGV4ID0gTWF0aC5mbG9vcihzaEluZGV4V3JpdGUgLyAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoQXJyYXkgPSBzaFt0ZXh0dXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBieXRlSW5kZXhJblRleHR1cmUgPSBzaEluZGV4V3JpdGUgJSAxNjsgLy8gWzAuLjE1XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRQZXJTcGxhdCA9IGkgKiAxNjsgLy8gMTYgc2ggdmFsdWVzIHBlciB0ZXh0dXJlIHBlciBzcGxhdC5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoVmFsdWUgPSBTY2FsYXIuTGVycChzaE1pbiwgc2hNYXgsIHNoQ2VudHJvaWRzWyh1ICsgaykgKiA0ICsgaiArIHYgKiBzaENlbnRyb2lkc1dpZHRoICogNF0gLyAyNTUpICogMTI3LjUgKyAxMjcuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hBcnJheVtieXRlSW5kZXhJblRleHR1cmUgKyBvZmZzZXRQZXJTcGxhdF0gPSBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIHNoVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyBtb2RlOiBNb2RlLlNwbGF0LCBkYXRhOiBidWZmZXIsIGhhc1ZlcnRleENvbG9yczogZmFsc2UsIHNoOiBzaCB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICByZXNvbHZlKHsgbW9kZTogTW9kZS5TcGxhdCwgZGF0YTogYnVmZmVyLCBoYXNWZXJ0ZXhDb2xvcnM6IGZhbHNlIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZSBTT0cgZGF0YSBmcm9tIGVpdGhlciBhIFNPR1Jvb3REYXRhIG9iamVjdCAod2l0aCB3ZWJwIGZpbGVzIGxvYWRlZCBmcm9tIHJvb3RVcmwpIG9yIGZyb20gYSBNYXAgb2YgZmlsZW5hbWVzIHRvIFVpbnQ4QXJyYXkgZmlsZSBkYXRhIChpbmNsdWRpbmcgbWV0YS5qc29uKVxyXG4gKiBAcGFyYW0gZGF0YU9yRmlsZXMgRWl0aGVyIHRoZSBTT0dSb290RGF0YSBvciBhIE1hcCBvZiBmaWxlbmFtZXMgdG8gVWludDhBcnJheSBmaWxlIGRhdGEgKGluY2x1ZGluZyBtZXRhLmpzb24pXHJcbiAqIEBwYXJhbSByb290VXJsIEJhc2UgVVJMIHRvIGxvYWQgd2VicCBmaWxlcyBmcm9tIChpZiBkYXRhT3JGaWxlcyBpcyBTT0dSb290RGF0YSlcclxuICogQHBhcmFtIHNjZW5lIFRoZSBCYWJ5bG9uLmpzIHNjZW5lXHJcbiAqIEByZXR1cm5zIFBhcnNlZCBkYXRhXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUGFyc2VTb2dNZXRhKGRhdGFPckZpbGVzOiBTT0dSb290RGF0YSB8IE1hcDxzdHJpbmcsIFVpbnQ4QXJyYXk+LCByb290VXJsOiBzdHJpbmcsIHNjZW5lOiBTY2VuZSk6IFByb21pc2U8SVBhcnNlZFNwbGF0PiB7XHJcbiAgICBsZXQgZGF0YTogU09HUm9vdERhdGE7XHJcbiAgICBsZXQgZmlsZXM6IE1hcDxzdHJpbmcsIFVpbnQ4QXJyYXk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmIChkYXRhT3JGaWxlcyBpbnN0YW5jZW9mIE1hcCkge1xyXG4gICAgICAgIGZpbGVzID0gZGF0YU9yRmlsZXM7XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGFGaWxlID0gZmlsZXMuZ2V0KFwibWV0YS5qc29uXCIpO1xyXG4gICAgICAgIGlmICghbWV0YUZpbGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWV0YS5qc29uIG5vdCBmb3VuZCBpbiBmaWxlcyBNYXBcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUobWV0YUZpbGUpKSBhcyBTT0dSb290RGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGFPckZpbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbGxlY3QgYWxsIGZpbGUgbmFtZXNcclxuICAgIGNvbnN0IHVybHMgPSBbLi4uZGF0YS5tZWFucy5maWxlcywgLi4uZGF0YS5zY2FsZXMuZmlsZXMsIC4uLmRhdGEucXVhdHMuZmlsZXMsIC4uLmRhdGEuc2gwLmZpbGVzXTtcclxuICAgIGlmIChkYXRhLnNoTikge1xyXG4gICAgICAgIHVybHMucHVzaCguLi5kYXRhLnNoTi5maWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTG9hZCB3ZWJwIGltYWdlcyBpbiBwYXJhbGxlbFxyXG4gICAgY29uc3QgaW1hZ2VEYXRhQXJyYXlzOiBJV2ViUEltYWdlW10gPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICB1cmxzLm1hcChhc3luYyAoZmlsZU5hbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZpbGVzICYmIGZpbGVzLmhhcyhmaWxlTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxvYWQgZnJvbSBpbi1tZW1vcnkgVWludDhBcnJheVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZURhdGEgPSBmaWxlcy5nZXQoZmlsZU5hbWUpITtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBMb2FkV2VicEltYWdlRGF0YShmaWxlRGF0YSwgZmlsZU5hbWUsIHNjZW5lLmdldEVuZ2luZSgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrOiBsb2FkIGZyb20gVVJMXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgTG9hZFdlYnBJbWFnZURhdGEocm9vdFVybCwgZmlsZU5hbWUsIHNjZW5lLmdldEVuZ2luZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBhd2FpdCBQYXJzZVNvZ0RhdGFzKGRhdGEsIGltYWdlRGF0YUFycmF5cywgc2NlbmUpO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jKi9cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbmltcG9ydCB0eXBlIHsgSVNjZW5lTG9hZGVyUGx1Z2luQXN5bmMsIElTY2VuZUxvYWRlclBsdWdpbkZhY3RvcnksIElTY2VuZUxvYWRlckFzeW5jUmVzdWx0LCBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50LCBTY2VuZUxvYWRlclBsdWdpbk9wdGlvbnMgfSBmcm9tIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyU2NlbmVMb2FkZXJQbHVnaW4gfSBmcm9tIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCI7XHJcbmltcG9ydCB7IFNQTEFURmlsZUxvYWRlck1ldGFkYXRhIH0gZnJvbSBcIi4vc3BsYXRGaWxlTG9hZGVyLm1ldGFkYXRhXCI7XHJcbmltcG9ydCB7IEdhdXNzaWFuU3BsYXR0aW5nTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9HYXVzc2lhblNwbGF0dGluZy9nYXVzc2lhblNwbGF0dGluZ01lc2hcIjtcclxuaW1wb3J0IHsgQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9hc3NldENvbnRhaW5lclwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL2Fic3RyYWN0TWVzaFwiO1xyXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFBvaW50c0Nsb3VkU3lzdGVtIH0gZnJvbSBcImNvcmUvUGFydGljbGVzL3BvaW50c0Nsb3VkU3lzdGVtXCI7XHJcbmltcG9ydCB7IENvbG9yNCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguY29sb3JcIjtcclxuaW1wb3J0IHsgVmVydGV4RGF0YSB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoLnZlcnRleERhdGFcIjtcclxuaW1wb3J0IHR5cGUgeyBTUExBVExvYWRpbmdPcHRpb25zIH0gZnJvbSBcIi4vc3BsYXRMb2FkaW5nT3B0aW9uc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEdhdXNzaWFuU3BsYXR0aW5nTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvR2F1c3NpYW5TcGxhdHRpbmcvZ2F1c3NpYW5TcGxhdHRpbmdNYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQYXJzZVNweiB9IGZyb20gXCIuL3NwelwiO1xyXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSBcIi4vc3BsYXREZWZzXCI7XHJcbmltcG9ydCB0eXBlIHsgSVBhcnNlZFNwbGF0IH0gZnJvbSBcIi4vc3BsYXREZWZzXCI7XHJcbmltcG9ydCB7IFBhcnNlU29nTWV0YSB9IGZyb20gXCIuL3NvZ1wiO1xyXG5pbXBvcnQgdHlwZSB7IFNPR1Jvb3REYXRhIH0gZnJvbSBcIi4vc29nXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFyY1JvdGF0ZUNhbWVyYSB9IGZyb20gXCJjb3JlL0NhbWVyYXMvYXJjUm90YXRlQ2FtZXJhXCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLWpzZG9jLCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2NlbmVMb2FkZXJQbHVnaW5PcHRpb25zIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBzcGxhdCBsb2FkZXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgW1NQTEFURmlsZUxvYWRlck1ldGFkYXRhLm5hbWVdOiBQYXJ0aWFsPFNQTEFUTG9hZGluZ09wdGlvbnM+O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBGRmxhdGUgYWNjZXNzXHJcbmRlY2xhcmUgY29uc3QgZmZsYXRlOiBhbnk7XHJcblxyXG4vKipcclxuICogQGV4cGVyaW1lbnRhbFxyXG4gKiBTUExBVCBmaWxlIHR5cGUgbG9hZGVyLlxyXG4gKiBUaGlzIGlzIGEgYmFieWxvbiBzY2VuZSBsb2FkZXIgcGx1Z2luLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNQTEFURmlsZUxvYWRlciBpbXBsZW1lbnRzIElTY2VuZUxvYWRlclBsdWdpbkFzeW5jLCBJU2NlbmVMb2FkZXJQbHVnaW5GYWN0b3J5IHtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgcGx1Z2luLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IFNQTEFURmlsZUxvYWRlck1ldGFkYXRhLm5hbWU7XHJcblxyXG4gICAgcHJpdmF0ZSBfYXNzZXRDb250YWluZXI6IE51bGxhYmxlPEFzc2V0Q29udGFpbmVyPiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbG9hZGluZ09wdGlvbnM6IFJlYWRvbmx5PFNQTEFUTG9hZGluZ09wdGlvbnM+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHRoZSBleHRlbnNpb25zIHRoZSBzcGxhdCBsb2FkZXIgaXMgYWJsZSB0byBsb2FkLlxyXG4gICAgICogZm9yY2UgZGF0YSB0byBjb21lIGluIGFzIGFuIEFycmF5QnVmZmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBleHRlbnNpb25zID0gU1BMQVRGaWxlTG9hZGVyTWV0YWRhdGEuZXh0ZW5zaW9ucztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgbG9hZGVyIGZvciBnYXVzc2lhbiBzcGxhdHRpbmcgZmlsZXNcclxuICAgICAqIEBwYXJhbSBsb2FkaW5nT3B0aW9ucyBvcHRpb25zIGZvciBsb2FkaW5nIGFuZCBwYXJzaW5nIHNwbGF0IGFuZCBQTFkgZmlsZXMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRpbmdPcHRpb25zOiBQYXJ0aWFsPFJlYWRvbmx5PFNQTEFUTG9hZGluZ09wdGlvbnM+PiA9IFNQTEFURmlsZUxvYWRlci5fRGVmYXVsdExvYWRpbmdPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZ09wdGlvbnMgPSBsb2FkaW5nT3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfRGVmYXVsdExvYWRpbmdPcHRpb25zID0ge1xyXG4gICAgICAgIGtlZXBJblJhbTogZmFsc2UsXHJcbiAgICAgICAgZmxpcFk6IGZhbHNlLFxyXG4gICAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgU1BMQVRMb2FkaW5nT3B0aW9ucztcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBjcmVhdGVQbHVnaW4ob3B0aW9uczogU2NlbmVMb2FkZXJQbHVnaW5PcHRpb25zKTogSVNjZW5lTG9hZGVyUGx1Z2luQXN5bmMge1xyXG4gICAgICAgIHJldHVybiBuZXcgU1BMQVRGaWxlTG9hZGVyKG9wdGlvbnNbU1BMQVRGaWxlTG9hZGVyTWV0YWRhdGEubmFtZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1wb3J0cyAgZnJvbSB0aGUgbG9hZGVkIGdhdXNzaWFuIHNwbGF0dGluZyBkYXRhIGFuZCBhZGRzIHRoZW0gdG8gdGhlIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gbWVzaGVzTmFtZXMgYSBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5ncyBvZiB0aGUgbWVzaCBuYW1lcyB0aGF0IHNob3VsZCBiZSBsb2FkZWQgZnJvbSB0aGUgZmlsZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIHRoZSBzY2VuZSB0aGUgbWVzaGVzIHNob3VsZCBiZSBhZGRlZCB0b1xyXG4gICAgICogQHBhcmFtIGRhdGEgdGhlIGdhdXNzaWFuIHNwbGF0dGluZyBkYXRhIHRvIGxvYWRcclxuICAgICAqIEBwYXJhbSByb290VXJsIHJvb3QgdXJsIHRvIGxvYWQgZnJvbVxyXG4gICAgICogQHBhcmFtIF9vblByb2dyZXNzIGNhbGxiYWNrIGNhbGxlZCB3aGlsZSBmaWxlIGlzIGxvYWRpbmdcclxuICAgICAqIEBwYXJhbSBfZmlsZU5hbWUgRGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgZmlsZSB0byBsb2FkXHJcbiAgICAgKiBAcmV0dXJucyBhIHByb21pc2UgY29udGFpbmluZyB0aGUgbG9hZGVkIG1lc2hlcywgcGFydGljbGVzLCBza2VsZXRvbnMgYW5kIGFuaW1hdGlvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGltcG9ydE1lc2hBc3luYyhcclxuICAgICAgICBtZXNoZXNOYW1lczogYW55LFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBkYXRhOiBhbnksXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIF9vblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLFxyXG4gICAgICAgIF9maWxlTmFtZT86IHN0cmluZ1xyXG4gICAgKTogUHJvbWlzZTxJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdD4ge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9wYXJzZUFzeW5jKG1lc2hlc05hbWVzLCBzY2VuZSwgZGF0YSwgcm9vdFVybCkudGhlbigobWVzaGVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtZXNoZXM6IG1lc2hlcyxcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtczogW10sXHJcbiAgICAgICAgICAgICAgICBza2VsZXRvbnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uR3JvdXBzOiBbXSxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU5vZGVzOiBbXSxcclxuICAgICAgICAgICAgICAgIGdlb21ldHJpZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgbGlnaHRzOiBbXSxcclxuICAgICAgICAgICAgICAgIHNwcml0ZU1hbmFnZXJzOiBbXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQnVpbGRQb2ludENsb3VkKHBvaW50Y2xvdWQ6IFBvaW50c0Nsb3VkU3lzdGVtLCBkYXRhOiBBcnJheUJ1ZmZlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghZGF0YS5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdUJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGZCdWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGEpO1xyXG5cclxuICAgICAgICAvLyBwYXJzZWQgYXJyYXkgY29udGFpbnMgcm9vbSBmb3IgcG9zaXRpb24oM2Zsb2F0cyksIG5vcm1hbCgzZmxvYXRzKSwgY29sb3IgKDRiKSwgcXVhbnRpemVkIHF1YXRlcm5pb24gKDRiKVxyXG4gICAgICAgIGNvbnN0IHJvd0xlbmd0aCA9IDMgKiA0ICsgMyAqIDQgKyA0ICsgNDtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXhDb3VudCA9IHVCdWZmZXIubGVuZ3RoIC8gcm93TGVuZ3RoO1xyXG5cclxuICAgICAgICBjb25zdCBwb2ludGNsb3VkZnVuYyA9IGZ1bmN0aW9uIChwYXJ0aWNsZTogYW55LCBpOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGZCdWZmZXJbOCAqIGkgKyAwXTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IGZCdWZmZXJbOCAqIGkgKyAxXTtcclxuICAgICAgICAgICAgY29uc3QgeiA9IGZCdWZmZXJbOCAqIGkgKyAyXTtcclxuICAgICAgICAgICAgcGFydGljbGUucG9zaXRpb24gPSBuZXcgVmVjdG9yMyh4LCB5LCB6KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB1QnVmZmVyW3Jvd0xlbmd0aCAqIGkgKyAyNCArIDBdIC8gMjU1O1xyXG4gICAgICAgICAgICBjb25zdCBnID0gdUJ1ZmZlcltyb3dMZW5ndGggKiBpICsgMjQgKyAxXSAvIDI1NTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHVCdWZmZXJbcm93TGVuZ3RoICogaSArIDI0ICsgMl0gLyAyNTU7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLmNvbG9yID0gbmV3IENvbG9yNChyLCBnLCBiLCAxKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwb2ludGNsb3VkLmFkZFBvaW50cyh2ZXJ0ZXhDb3VudCwgcG9pbnRjbG91ZGZ1bmMpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9CdWlsZE1lc2goc2NlbmU6IFNjZW5lLCBwYXJzZWRQTFk6IElQYXJzZWRTcGxhdCk6IE1lc2gge1xyXG4gICAgICAgIGNvbnN0IG1lc2ggPSBuZXcgTWVzaChcIlBMWU1lc2hcIiwgc2NlbmUpO1xyXG5cclxuICAgICAgICBjb25zdCB1QnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkocGFyc2VkUExZLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGZCdWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KHBhcnNlZFBMWS5kYXRhKTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm93TGVuZ3RoID0gMyAqIDQgKyAzICogNCArIDQgKyA0O1xyXG4gICAgICAgIGNvbnN0IHZlcnRleENvdW50ID0gdUJ1ZmZlci5sZW5ndGggLyByb3dMZW5ndGg7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCB2ZXJ0ZXhEYXRhID0gbmV3IFZlcnRleERhdGEoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGZCdWZmZXJbOCAqIGkgKyAwXTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IGZCdWZmZXJbOCAqIGkgKyAxXTtcclxuICAgICAgICAgICAgY29uc3QgeiA9IGZCdWZmZXJbOCAqIGkgKyAyXTtcclxuICAgICAgICAgICAgcG9zaXRpb25zLnB1c2goeCwgeSwgeik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkUExZLmhhc1ZlcnRleENvbG9ycykge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMgPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRleENvdW50ICogNCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHVCdWZmZXJbcm93TGVuZ3RoICogaSArIDI0ICsgMF0gLyAyNTU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnID0gdUJ1ZmZlcltyb3dMZW5ndGggKiBpICsgMjQgKyAxXSAvIDI1NTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGIgPSB1QnVmZmVyW3Jvd0xlbmd0aCAqIGkgKyAyNCArIDJdIC8gMjU1O1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2kgKiA0ICsgMF0gPSByO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2kgKiA0ICsgMV0gPSBnO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2kgKiA0ICsgMl0gPSBiO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2kgKiA0ICsgM10gPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZlcnRleERhdGEuY29sb3JzID0gY29sb3JzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmVydGV4RGF0YS5wb3NpdGlvbnMgPSBwb3NpdGlvbnM7XHJcbiAgICAgICAgdmVydGV4RGF0YS5pbmRpY2VzID0gcGFyc2VkUExZLmZhY2VzITtcclxuXHJcbiAgICAgICAgdmVydGV4RGF0YS5hcHBseVRvTWVzaChtZXNoKTtcclxuICAgICAgICByZXR1cm4gbWVzaDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIHByaXZhdGUgYXN5bmMgX3VuemlwV2l0aEZGbGF0ZUFzeW5jKGRhdGE6IFVpbnQ4QXJyYXkpOiBQcm9taXNlPE1hcDxzdHJpbmcsIFVpbnQ4QXJyYXk+PiB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBsZXQgZmZsYXRlID0gdGhpcy5fbG9hZGluZ09wdGlvbnMuZmZsYXRlIGFzIHR5cGVvZiBpbXBvcnQoXCJmZmxhdGVcIik7XHJcbiAgICAgICAgLy8gZW5zdXJlIGZmbGF0ZSBpcyBsb2FkZWRcclxuICAgICAgICBpZiAoIWZmbGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mICh3aW5kb3cgYXMgYW55KS5mZmxhdGUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IFRvb2xzLkxvYWRTY3JpcHRBc3luYyh0aGlzLl9sb2FkaW5nT3B0aW9ucy5kZWZsYXRlVVJMID8/IFwiaHR0cHM6Ly91bnBrZy5jb20vZmZsYXRlL3VtZC9pbmRleC5qc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmZmxhdGUgPSAod2luZG93IGFzIGFueSkuZmZsYXRlIGFzIHR5cGVvZiBmZmxhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7IHVuemlwU3luYyB9ID0gZmZsYXRlO1xyXG5cclxuICAgICAgICBjb25zdCB1bnppcHBlZCA9IHVuemlwU3luYyhkYXRhKSBhcyBSZWNvcmQ8c3RyaW5nLCBVaW50OEFycmF5PjsgLy8geyBbZmlsZW5hbWU6IHN0cmluZ106IFVpbnQ4QXJyYXkgfVxyXG5cclxuICAgICAgICBjb25zdCBmaWxlcyA9IG5ldyBNYXA8c3RyaW5nLCBVaW50OEFycmF5PigpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW25hbWUsIGNvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHVuemlwcGVkKSkge1xyXG4gICAgICAgICAgICBmaWxlcy5zZXQobmFtZSwgY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWxlcztcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX3BhcnNlQXN5bmMobWVzaGVzTmFtZXM6IGFueSwgc2NlbmU6IFNjZW5lLCBkYXRhOiBhbnksIHJvb3RVcmw6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8QWJzdHJhY3RNZXNoPj4ge1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25NZXNoZXNBcnJheTogQXJyYXk8TWVzaD4gPSBbXTsgLy9UaGUgbWVzaCBmb3IgYmFieWxvblxyXG5cclxuICAgICAgICBjb25zdCBtYWtlR1NGcm9tUGFyc2VkU09HID0gKHBhcnNlZFNPRzogSVBhcnNlZFNwbGF0KSA9PiB7XHJcbiAgICAgICAgICAgIHNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICBjb25zdCBnYXVzc2lhblNwbGF0dGluZyA9IHRoaXMuX2xvYWRpbmdPcHRpb25zLmdhdXNzaWFuU3BsYXR0aW5nTWVzaCA/PyBuZXcgR2F1c3NpYW5TcGxhdHRpbmdNZXNoKFwiR2F1c3NpYW5TcGxhdHRpbmdcIiwgbnVsbCwgc2NlbmUsIHRoaXMuX2xvYWRpbmdPcHRpb25zLmtlZXBJblJhbSk7XHJcbiAgICAgICAgICAgIGdhdXNzaWFuU3BsYXR0aW5nLl9wYXJlbnRDb250YWluZXIgPSB0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgYmFieWxvbk1lc2hlc0FycmF5LnB1c2goZ2F1c3NpYW5TcGxhdHRpbmcpO1xyXG4gICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy51cGRhdGVEYXRhKHBhcnNlZFNPRy5kYXRhLCBwYXJzZWRTT0cuc2gsIHsgZmxpcFk6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy5zY2FsaW5nLnkgKj0gLTE7XHJcbiAgICAgICAgICAgIGdhdXNzaWFuU3BsYXR0aW5nLmNvbXB1dGVXb3JsZE1hdHJpeCh0cnVlKTtcclxuICAgICAgICAgICAgc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIGRhdGEgaXMganNvbiBzdHJpbmdcclxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YVNPRyA9IEpTT04ucGFyc2UoZGF0YSkgYXMgU09HUm9vdERhdGE7XHJcbiAgICAgICAgICAgIGlmIChkYXRhU09HICYmIGRhdGFTT0cubWVhbnMgJiYgZGF0YVNPRy5zY2FsZXMgJiYgZGF0YVNPRy5xdWF0cyAmJiBkYXRhU09HLnNoMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUGFyc2VTb2dNZXRhKGRhdGFTT0csIHJvb3RVcmwsIHNjZW5lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzLCBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocGFyc2VkU09HKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWtlR1NGcm9tUGFyc2VkU09HKHBhcnNlZFNPRyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGJhYnlsb25NZXNoZXNBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIFNPRyBkYXRhLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdTggPSBkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgPyBuZXcgVWludDhBcnJheShkYXRhKSA6IGRhdGE7XHJcbiAgICAgICAgLy8gWklQIHNpZ25hdHVyZSBjaGVjayBmb3IgU09HXHJcbiAgICAgICAgaWYgKHU4WzBdID09PSAweDUwICYmIHU4WzFdID09PSAweDRiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlcywgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3VuemlwV2l0aEZGbGF0ZUFzeW5jKHU4KS50aGVuKChmaWxlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFBhcnNlU29nTWV0YShmaWxlcywgcm9vdFVybCwgc2NlbmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXMsIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChwYXJzZWRTT0cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VHU0Zyb21QYXJzZWRTT0cocGFyc2VkU09HKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYmFieWxvbk1lc2hlc0FycmF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgU09HIHppcCBkYXRhLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZWFkYWJsZVN0cmVhbSA9IG5ldyBSZWFkYWJsZVN0cmVhbSh7XHJcbiAgICAgICAgICAgIHN0YXJ0KGNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShuZXcgVWludDhBcnJheShkYXRhKSk7IC8vIEVucXVldWUgdGhlIEFycmF5QnVmZmVyIGFzIGEgVWludDhBcnJheVxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBVc2UgR1ppcCBEZWNvbXByZXNzaW9uU3RyZWFtXHJcbiAgICAgICAgY29uc3QgZGVjb21wcmVzc2lvblN0cmVhbSA9IG5ldyBEZWNvbXByZXNzaW9uU3RyZWFtKFwiZ3ppcFwiKTtcclxuICAgICAgICBjb25zdCBkZWNvbXByZXNzZWRTdHJlYW0gPSByZWFkYWJsZVN0cmVhbS5waXBlVGhyb3VnaChkZWNvbXByZXNzaW9uU3RyZWFtKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBSZXNwb25zZShkZWNvbXByZXNzZWRTdHJlYW0pXHJcbiAgICAgICAgICAgICAgICAuYXJyYXlCdWZmZXIoKVxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAudGhlbigoYnVmZmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlcywgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgICAgICBQYXJzZVNweihidWZmZXIsIHNjZW5lLCB0aGlzLl9sb2FkaW5nT3B0aW9ucykudGhlbigocGFyc2VkU1BaKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnYXVzc2lhblNwbGF0dGluZyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkaW5nT3B0aW9ucy5nYXVzc2lhblNwbGF0dGluZ01lc2ggPz8gbmV3IEdhdXNzaWFuU3BsYXR0aW5nTWVzaChcIkdhdXNzaWFuU3BsYXR0aW5nXCIsIG51bGwsIHNjZW5lLCB0aGlzLl9sb2FkaW5nT3B0aW9ucy5rZWVwSW5SYW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkU1BaLnRyYWluZWRXaXRoQW50aWFsaWFzaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnc01hdGVyaWFsID0gZ2F1c3NpYW5TcGxhdHRpbmcubWF0ZXJpYWwgYXMgR2F1c3NpYW5TcGxhdHRpbmdNYXRlcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdzTWF0ZXJpYWwua2VybmVsU2l6ZSA9IDAuMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdzTWF0ZXJpYWwuY29tcGVuc2F0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoZXNBcnJheS5wdXNoKGdhdXNzaWFuU3BsYXR0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2F1c3NpYW5TcGxhdHRpbmcudXBkYXRlRGF0YShwYXJzZWRTUFouZGF0YSwgcGFyc2VkU1BaLnNoLCB7IGZsaXBZOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9sb2FkaW5nT3B0aW9ucy5mbGlwWSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F1c3NpYW5TcGxhdHRpbmcuc2NhbGluZy55ICo9IC0xLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy5jb21wdXRlV29ybGRNYXRyaXgodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5QXV0b0NhbWVyYUxpbWl0cyhwYXJzZWRTUFosIHNjZW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShiYWJ5bG9uTWVzaGVzQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDYXRjaCBhbnkgZGVjb21wcmVzc2lvbiBlcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzLCBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgICAgIFNQTEFURmlsZUxvYWRlci5fQ29udmVydFBMWVRvU3BsYXQoZGF0YSBhcyBBcnJheUJ1ZmZlcikudGhlbihhc3luYyAocGFyc2VkUExZKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcnNlZFBMWS5tb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIE1vZGUuU3BsYXQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnYXVzc2lhblNwbGF0dGluZyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkaW5nT3B0aW9ucy5nYXVzc2lhblNwbGF0dGluZ01lc2ggPz8gbmV3IEdhdXNzaWFuU3BsYXR0aW5nTWVzaChcIkdhdXNzaWFuU3BsYXR0aW5nXCIsIG51bGwsIHNjZW5lLCB0aGlzLl9sb2FkaW5nT3B0aW9ucy5rZWVwSW5SYW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoZXNBcnJheS5wdXNoKGdhdXNzaWFuU3BsYXR0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F1c3NpYW5TcGxhdHRpbmcudXBkYXRlRGF0YShwYXJzZWRQTFkuZGF0YSwgcGFyc2VkUExZLnNoLCB7IGZsaXBZOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F1c3NpYW5TcGxhdHRpbmcuc2NhbGluZy55ICo9IC0xLjA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkUExZLmNoaXJhbGl0eSA9PT0gXCJSaWdodEhhbmRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy5zY2FsaW5nLnkgKj0gLTEuMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXJzZWRQTFkudXBBeGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiWFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhdXNzaWFuU3BsYXR0aW5nLnJvdGF0aW9uID0gbmV3IFZlY3RvcjMoMCwgMCwgTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIllcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy5yb3RhdGlvbiA9IG5ldyBWZWN0b3IzKDAsIDAsIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlpcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXVzc2lhblNwbGF0dGluZy5yb3RhdGlvbiA9IG5ldyBWZWN0b3IzKC1NYXRoLlBJIC8gMiwgTWF0aC5QSSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2F1c3NpYW5TcGxhdHRpbmcuY29tcHV0ZVdvcmxkTWF0cml4KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTW9kZS5Qb2ludENsb3VkOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9pbnRjbG91ZCA9IG5ldyBQb2ludHNDbG91ZFN5c3RlbShcIlBvaW50Q2xvdWRcIiwgMSwgc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoU1BMQVRGaWxlTG9hZGVyLl9CdWlsZFBvaW50Q2xvdWQocG9pbnRjbG91ZCwgcGFyc2VkUExZLmRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHBvaW50Y2xvdWQuYnVpbGRNZXNoQXN5bmMoKS50aGVuKChtZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2hlc0FycmF5LnB1c2gobWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50Y2xvdWQuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBNb2RlLk1lc2g6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkUExZLmZhY2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaGVzQXJyYXkucHVzaChTUExBVEZpbGVMb2FkZXIuX0J1aWxkTWVzaChzY2VuZSwgcGFyc2VkUExZKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQTFkgbWVzaCBkb2Vzbid0IGNvbnRhaW4gZmFjZSBpbmZvcm1hdGlvbnMuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBTcGxhdCBtb2RlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseUF1dG9DYW1lcmFMaW1pdHMocGFyc2VkUExZLCBzY2VuZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYmFieWxvbk1lc2hlc0FycmF5KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbGllcyBjYW1lcmEgbGltaXRzIGJhc2VkIG9uIHBhcnNlZCBtZXRhIGRhdGFcclxuICAgICAqIEBwYXJhbSBtZXRhIHBhcnNlZCBzcGxhdCBtZXRhIGRhdGFcclxuICAgICAqIEBwYXJhbSBzY2VuZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFwcGx5QXV0b0NhbWVyYUxpbWl0cyhtZXRhOiBJUGFyc2VkU3BsYXQsIHNjZW5lOiBTY2VuZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy5kaXNhYmxlQXV0b0NhbWVyYUxpbWl0cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgobWV0YS5zYWZlT3JiaXRDYW1lcmFSYWRpdXNNaW4gIT09IHVuZGVmaW5lZCB8fCBtZXRhLnNhZmVPcmJpdENhbWVyYUVsZXZhdGlvbk1pbk1heCAhPT0gdW5kZWZpbmVkKSAmJiBzY2VuZS5hY3RpdmVDYW1lcmE/LmdldENsYXNzTmFtZSgpID09PSBcIkFyY1JvdGF0ZUNhbWVyYVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyY0NhbSA9IHNjZW5lLmFjdGl2ZUNhbWVyYSBhcyBBcmNSb3RhdGVDYW1lcmE7XHJcbiAgICAgICAgICAgIGlmIChtZXRhLnNhZmVPcmJpdENhbWVyYUVsZXZhdGlvbk1pbk1heCkge1xyXG4gICAgICAgICAgICAgICAgYXJjQ2FtLmxvd2VyQmV0YUxpbWl0ID0gTWF0aC5QSSAqIDAuNSAtIG1ldGEuc2FmZU9yYml0Q2FtZXJhRWxldmF0aW9uTWluTWF4WzFdO1xyXG4gICAgICAgICAgICAgICAgYXJjQ2FtLnVwcGVyQmV0YUxpbWl0ID0gTWF0aC5QSSAqIDAuNSAtIG1ldGEuc2FmZU9yYml0Q2FtZXJhRWxldmF0aW9uTWluTWF4WzBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobWV0YS5zYWZlT3JiaXRDYW1lcmFSYWRpdXNNaW4pIHtcclxuICAgICAgICAgICAgICAgIGFyY0NhbS5sb3dlclJhZGl1c0xpbWl0ID0gbWV0YS5zYWZlT3JiaXRDYW1lcmFSYWRpdXNNaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGludG8gYW4gYXNzZXQgY29udGFpbmVyLlxyXG4gICAgICogQHBhcmFtIHNjZW5lIFRoZSBzY2VuZSB0byBsb2FkIGludG9cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGltcG9ydFxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgVGhlIHJvb3QgdXJsIGZvciBzY2VuZSBhbmQgcmVzb3VyY2VzXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbG9hZGVkIGFzc2V0IGNvbnRhaW5lclxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBsb2FkQXNzZXRDb250YWluZXJBc3luYyhzY2VuZTogU2NlbmUsIGRhdGE6IHN0cmluZywgcm9vdFVybDogc3RyaW5nKTogUHJvbWlzZTxBc3NldENvbnRhaW5lcj4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBBc3NldENvbnRhaW5lcihzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5fYXNzZXRDb250YWluZXIgPSBjb250YWluZXI7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuaW1wb3J0TWVzaEFzeW5jKG51bGwsIHNjZW5lLCBkYXRhLCByb290VXJsKVxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBtZXNoIG9mIHJlc3VsdC5tZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLm1lc2hlcy5wdXNoKG1lc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBtZXNoIG1hdGVyaWFsIHdpbGwgYmUgbnVsbCBiZWZvcmUgMXN0IHJlbmRlcmVkIGZyYW1lLlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Fzc2V0Q29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Fzc2V0Q29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBleDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEltcG9ydHMgYWxsIG9iamVjdHMgZnJvbSB0aGUgbG9hZGVkIE9CSiBkYXRhIGFuZCBhZGRzIHRoZW0gdG8gdGhlIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgdGhlIHNjZW5lIHRoZSBvYmplY3RzIHNob3VsZCBiZSBhZGRlZCB0b1xyXG4gICAgICogQHBhcmFtIGRhdGEgdGhlIE9CSiBkYXRhIHRvIGxvYWRcclxuICAgICAqIEBwYXJhbSByb290VXJsIHJvb3QgdXJsIHRvIGxvYWQgZnJvbVxyXG4gICAgICogQHJldHVybnMgYSBwcm9taXNlIHdoaWNoIGNvbXBsZXRlcyB3aGVuIG9iamVjdHMgaGF2ZSBiZWVuIGxvYWRlZCB0byB0aGUgc2NlbmVcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jLCBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIGxvYWRBc3luYyhzY2VuZTogU2NlbmUsIGRhdGE6IHN0cmluZywgcm9vdFVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLy9HZXQgdGhlIDNEIG1vZGVsXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wb3J0TWVzaEFzeW5jKG51bGwsIHNjZW5lLCBkYXRhLCByb290VXJsKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHZvaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZHlsYW5lYmVydC9nc3BsYXQuanMvYmxvYi9tYWluL3NyYy9sb2FkZXJzL1BMWUxvYWRlci50cyBVbmRlciBNSVQgbGljZW5zZVxyXG4gICAgICogQ29udmVydHMgYSAucGx5IGRhdGEgYXJyYXkgYnVmZmVyIHRvIHNwbGF0XHJcbiAgICAgKiBpZiBkYXRhIGFycmF5IGJ1ZmZlciBpcyBub3QgcGx5LCByZXR1cm5zIHRoZSBvcmlnaW5hbCBidWZmZXJcclxuICAgICAqIEBwYXJhbSBkYXRhIHRoZSAucGx5IGRhdGEgdG8gbG9hZFxyXG4gICAgICogQHJldHVybnMgdGhlIGxvYWRlZCBzcGxhdCBidWZmZXJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0NvbnZlcnRQTFlUb1NwbGF0KGRhdGE6IEFycmF5QnVmZmVyKTogUHJvbWlzZTxJUGFyc2VkU3BsYXQ+IHtcclxuICAgICAgICBjb25zdCB1YnVmID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKHVidWYuc2xpY2UoMCwgMTAyNCAqIDEwKSk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyRW5kID0gXCJlbmRfaGVhZGVyXFxuXCI7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyRW5kSW5kZXggPSBoZWFkZXIuaW5kZXhPZihoZWFkZXJFbmQpO1xyXG4gICAgICAgIGlmIChoZWFkZXJFbmRJbmRleCA8IDAgfHwgIWhlYWRlcikge1xyXG4gICAgICAgICAgICAvLyBzdGFuZGFyZCBzcGxhdFxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoeyBtb2RlOiBNb2RlLlNwbGF0LCBkYXRhOiBkYXRhLCByYXdTcGxhdDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2ZXJ0ZXhDb3VudCA9IHBhcnNlSW50KC9lbGVtZW50IHZlcnRleCAoXFxkKylcXG4vLmV4ZWMoaGVhZGVyKSFbMV0pO1xyXG4gICAgICAgIGNvbnN0IGZhY2VFbGVtZW50ID0gL2VsZW1lbnQgZmFjZSAoXFxkKylcXG4vLmV4ZWMoaGVhZGVyKTtcclxuICAgICAgICBsZXQgZmFjZUNvdW50ID0gMDtcclxuICAgICAgICBpZiAoZmFjZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZmFjZUNvdW50ID0gcGFyc2VJbnQoZmFjZUVsZW1lbnRbMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjaHVua0VsZW1lbnQgPSAvZWxlbWVudCBjaHVuayAoXFxkKylcXG4vLmV4ZWMoaGVhZGVyKTtcclxuICAgICAgICBsZXQgY2h1bmtDb3VudCA9IDA7XHJcbiAgICAgICAgaWYgKGNodW5rRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjaHVua0NvdW50ID0gcGFyc2VJbnQoY2h1bmtFbGVtZW50WzFdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByb3dWZXJ0ZXhPZmZzZXQgPSAwO1xyXG4gICAgICAgIGxldCByb3dDaHVua09mZnNldCA9IDA7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0czogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHtcclxuICAgICAgICAgICAgZG91YmxlOiA4LFxyXG4gICAgICAgICAgICBpbnQ6IDQsXHJcbiAgICAgICAgICAgIHVpbnQ6IDQsXHJcbiAgICAgICAgICAgIGZsb2F0OiA0LFxyXG4gICAgICAgICAgICBzaG9ydDogMixcclxuICAgICAgICAgICAgdXNob3J0OiAyLFxyXG4gICAgICAgICAgICB1Y2hhcjogMSxcclxuICAgICAgICAgICAgbGlzdDogMCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0eXBlIFBseVByb3BlcnR5ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIHR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgb2Zmc2V0OiBudW1iZXI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgRWxlbWVudE1vZGU6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XHJcbiAgICAgICAgICAgIFZlcnRleDogMCxcclxuICAgICAgICAgICAgQ2h1bms6IDEsXHJcbiAgICAgICAgICAgIFNIOiAyLFxyXG4gICAgICAgICAgICBGbG9hdF9UdXBsZTogMyxcclxuICAgICAgICAgICAgRmxvYXQ6IDQsXHJcbiAgICAgICAgICAgIFVjaGFyOiA1LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBjaHVua01vZGUgPSBFbGVtZW50TW9kZS5DaHVuaztcclxuICAgICAgICBjb25zdCB2ZXJ0ZXhQcm9wZXJ0aWVzOiBQbHlQcm9wZXJ0eVtdID0gW107XHJcbiAgICAgICAgY29uc3QgY2h1bmtQcm9wZXJ0aWVzOiBQbHlQcm9wZXJ0eVtdID0gW107XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBoZWFkZXIuc2xpY2UoMCwgaGVhZGVyRW5kSW5kZXgpLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIGNvbnN0IG1ldGFEYXRhOiBQYXJ0aWFsPElQYXJzZWRTcGxhdD4gPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3Agb2YgZmlsdGVyZWQpIHtcclxuICAgICAgICAgICAgaWYgKHByb3Auc3RhcnRzV2l0aChcInByb3BlcnR5IFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgWywgdHlwZSwgbmFtZV0gPSBwcm9wLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2h1bmtNb2RlID09IEVsZW1lbnRNb2RlLkNodW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2h1bmtQcm9wZXJ0aWVzLnB1c2goeyBuYW1lLCB0eXBlLCBvZmZzZXQ6IHJvd0NodW5rT2Zmc2V0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd0NodW5rT2Zmc2V0ICs9IG9mZnNldHNbdHlwZV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNodW5rTW9kZSA9PSBFbGVtZW50TW9kZS5WZXJ0ZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhQcm9wZXJ0aWVzLnB1c2goeyBuYW1lLCB0eXBlLCBvZmZzZXQ6IHJvd1ZlcnRleE9mZnNldCB9KTtcclxuICAgICAgICAgICAgICAgICAgICByb3dWZXJ0ZXhPZmZzZXQgKz0gb2Zmc2V0c1t0eXBlXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2h1bmtNb2RlID09IEVsZW1lbnRNb2RlLlNIKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4UHJvcGVydGllcy5wdXNoKHsgbmFtZSwgdHlwZSwgb2Zmc2V0OiByb3dWZXJ0ZXhPZmZzZXQgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNodW5rTW9kZSA9PSBFbGVtZW50TW9kZS5GbG9hdF9UdXBsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcoZGF0YSwgcm93Q2h1bmtPZmZzZXQsIG9mZnNldHMuZmxvYXQgKiAyKTtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhRGF0YS5zYWZlT3JiaXRDYW1lcmFFbGV2YXRpb25NaW5NYXggPSBbdmlldy5nZXRGbG9hdDMyKDAsIHRydWUpLCB2aWV3LmdldEZsb2F0MzIoNCwgdHJ1ZSldO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaHVua01vZGUgPT0gRWxlbWVudE1vZGUuRmxvYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGRhdGEsIHJvd0NodW5rT2Zmc2V0LCBvZmZzZXRzLmZsb2F0KTtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhRGF0YS5zYWZlT3JiaXRDYW1lcmFSYWRpdXNNaW4gPSB2aWV3LmdldEZsb2F0MzIoMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNodW5rTW9kZSA9PSBFbGVtZW50TW9kZS5VY2hhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcoZGF0YSwgcm93Q2h1bmtPZmZzZXQsIG9mZnNldHMudWNoYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09IFwidXBfYXhpc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFEYXRhLnVwQXhpcyA9IHZpZXcuZ2V0VWludDgoMCkgPT0gMCA/IFwiWFwiIDogdmlldy5nZXRVaW50OCgwKSA9PSAxID8gXCJZXCIgOiBcIlpcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT0gXCJjaGlyYWxpdHlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhRGF0YS5jaGlyYWxpdHkgPSB2aWV3LmdldFVpbnQ4KDApID09IDAgPyBcIkxlZnRIYW5kZWRcIiA6IFwiUmlnaHRIYW5kZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFvZmZzZXRzW3R5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYFVuc3VwcG9ydGVkIHByb3BlcnR5IHR5cGU6ICR7dHlwZX0uYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcC5zdGFydHNXaXRoKFwiZWxlbWVudCBcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFssIHR5cGVdID0gcHJvcC5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSBcImNodW5rXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaHVua01vZGUgPSBFbGVtZW50TW9kZS5DaHVuaztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInZlcnRleFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2h1bmtNb2RlID0gRWxlbWVudE1vZGUuVmVydGV4O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwic2hcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNodW5rTW9kZSA9IEVsZW1lbnRNb2RlLlNIO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwic2FmZV9vcmJpdF9jYW1lcmFfZWxldmF0aW9uX21pbl9tYXhfcmFkaWFuc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2h1bmtNb2RlID0gRWxlbWVudE1vZGUuRmxvYXRfVHVwbGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJzYWZlX29yYml0X2NhbWVyYV9yYWRpdXNfbWluXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaHVua01vZGUgPSBFbGVtZW50TW9kZS5GbG9hdDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInVwX2F4aXNcIiB8fCB0eXBlID09IFwiY2hpcmFsaXR5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaHVua01vZGUgPSBFbGVtZW50TW9kZS5VY2hhcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgcm93VmVydGV4TGVuZ3RoID0gcm93VmVydGV4T2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IHJvd0NodW5rTGVuZ3RoID0gcm93Q2h1bmtPZmZzZXQ7XHJcblxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgIHJldHVybiAoR2F1c3NpYW5TcGxhdHRpbmdNZXNoLkNvbnZlcnRQTFlXaXRoU0hUb1NwbGF0QXN5bmMoZGF0YSkgYXMgYW55KS50aGVuKGFzeW5jIChzcGxhdHNEYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoZGF0YSwgaGVhZGVyRW5kSW5kZXggKyBoZWFkZXJFbmQubGVuZ3RoKTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHJvd0NodW5rTGVuZ3RoICogY2h1bmtDb3VudCArIHJvd1ZlcnRleExlbmd0aCAqIHZlcnRleENvdW50O1xyXG4gICAgICAgICAgICAvLyBmYWNlc1xyXG4gICAgICAgICAgICBjb25zdCBmYWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAgICAgaWYgKGZhY2VDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYWNlQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhY2VWZXJ0ZXhDb3VudCA9IGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhY2VWZXJ0ZXhDb3VudCAhPSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBvbmx5IHN1cHBvcnQgdHJpYW5nbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZhY2VWZXJ0ZXhDb3VudDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleEluZGV4ID0gZGF0YVZpZXcuZ2V0VWludDMyKG9mZnNldCArICgyIC0gaikgKiA0LCB0cnVlKTsgLy8gY2hhbmdlIGZhY2Ugd2luZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNlcy5wdXNoKHZlcnRleEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDEyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBlYXJseSBleGl0IGZvciBjaHVua2VkL3F1YW50aXplZCBwbHlcclxuICAgICAgICAgICAgaWYgKGNodW5rQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBtb2RlOiBNb2RlLlNwbGF0LCBkYXRhOiBzcGxhdHNEYXRhLmJ1ZmZlciwgc2g6IHNwbGF0c0RhdGEuc2gsIGZhY2VzOiBmYWNlcywgaGFzVmVydGV4Q29sb3JzOiBmYWxzZSwgY29tcHJlc3NlZDogdHJ1ZSwgcmF3U3BsYXQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY291bnQgYXZhaWxhYmxlIHByb3BlcnRpZXMuIGlmIGFsbCBuZWNlc3NhcnkgYXJlIHByZXNlbnQgdGhlbiBpdCdzIGEgc3BsYXQuIE90aGVyd2lzZSwgaXQncyBhIHBvaW50IGNsb3VkXHJcbiAgICAgICAgICAgIC8vIGlmIGZhY2VzIGFyZSBmb3VuZCwgdGhlbiBpdCdzIGEgc3RhbmRhcmQgbWVzaFxyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eUNvbG9yQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBzcGxhdFByb3BlcnRpZXMgPSBbXCJ4XCIsIFwieVwiLCBcInpcIiwgXCJzY2FsZV8wXCIsIFwic2NhbGVfMVwiLCBcInNjYWxlXzJcIiwgXCJvcGFjaXR5XCIsIFwicm90XzBcIiwgXCJyb3RfMVwiLCBcInJvdF8yXCIsIFwicm90XzNcIl07XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGF0Q29sb3JQcm9wZXJ0aWVzID0gW1wicmVkXCIsIFwiZ3JlZW5cIiwgXCJibHVlXCIsIFwiZl9kY18wXCIsIFwiZl9kY18xXCIsIFwiZl9kY18yXCJdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eUluZGV4ID0gMDsgcHJvcGVydHlJbmRleCA8IHZlcnRleFByb3BlcnRpZXMubGVuZ3RoOyBwcm9wZXJ0eUluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdmVydGV4UHJvcGVydGllc1twcm9wZXJ0eUluZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGxhdFByb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHkubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsYXRDb2xvclByb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHkubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUNvbG9yQ291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBoYXNNYW5kYXRvcnlQcm9wZXJ0aWVzID0gcHJvcGVydHlDb3VudCA9PSBzcGxhdFByb3BlcnRpZXMubGVuZ3RoICYmIHByb3BlcnR5Q29sb3JDb3VudCA9PSAzO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TW9kZSA9IGZhY2VDb3VudCA/IE1vZGUuTWVzaCA6IGhhc01hbmRhdG9yeVByb3BlcnRpZXMgPyBNb2RlLlNwbGF0IDogTW9kZS5Qb2ludENsb3VkO1xyXG4gICAgICAgICAgICAvLyBwYXJzZWQgcmVhZHkgcmVhZHkgdG8gYmUgdXNlZCBhcyBhIHNwbGF0XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ubWV0YURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogY3VycmVudE1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogc3BsYXRzRGF0YS5idWZmZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2g6IHNwbGF0c0RhdGEuc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFjZXM6IGZhY2VzLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1ZlcnRleENvbG9yczogISFwcm9wZXJ0eUNvbG9yQ291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcHJlc3NlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcmF3U3BsYXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBZGQgdGhpcyBsb2FkZXIgaW50byB0aGUgcmVnaXN0ZXIgcGx1Z2luXHJcblJlZ2lzdGVyU2NlbmVMb2FkZXJQbHVnaW4obmV3IFNQTEFURmlsZUxvYWRlcigpKTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMgKi9cclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5zY2FsYXJcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgU1BMQVRMb2FkaW5nT3B0aW9ucyB9IGZyb20gXCIuL3NwbGF0TG9hZGluZ09wdGlvbnNcIjtcclxuaW1wb3J0IHsgTW9kZSB9IGZyb20gXCIuL3NwbGF0RGVmc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElQYXJzZWRTcGxhdCB9IGZyb20gXCIuL3NwbGF0RGVmc1wiO1xyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyBTUFogZGF0YSBhbmQgcmV0dXJucyBhIHByb21pc2UgcmVzb2x2aW5nIHRvIGFuIElQYXJzZWRQTFkgb2JqZWN0LlxyXG4gKiBAcGFyYW0gZGF0YSBUaGUgQXJyYXlCdWZmZXIgY29udGFpbmluZyBTUFogZGF0YS5cclxuICogQHBhcmFtIHNjZW5lIFRoZSBCYWJ5bG9uLmpzIHNjZW5lLlxyXG4gKiBAcGFyYW0gbG9hZGluZ09wdGlvbnMgT3B0aW9ucyBmb3IgbG9hZGluZyBHYXVzc2lhbiBTcGxhdHRpbmcgZmlsZXMuXHJcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSByZXNvbHZpbmcgdG8gdGhlIHBhcnNlZCBTUFogZGF0YS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJzZVNweihkYXRhOiBBcnJheUJ1ZmZlciwgc2NlbmU6IFNjZW5lLCBsb2FkaW5nT3B0aW9uczogU1BMQVRMb2FkaW5nT3B0aW9ucyk6IFByb21pc2U8SVBhcnNlZFNwbGF0PiB7XHJcbiAgICBjb25zdCB1YnVmID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XHJcbiAgICBjb25zdCB1YnVmdTMyID0gbmV3IFVpbnQzMkFycmF5KGRhdGEuc2xpY2UoMCwgMTIpKTsgLy8gT25seSBuZWVkIHVidWZ1MzJbMF0gdG8gWzJdXHJcbiAgICAvLyBkZWJ1ZyBpbmZvc1xyXG4gICAgY29uc3Qgc3BsYXRDb3VudCA9IHVidWZ1MzJbMl07XHJcblxyXG4gICAgY29uc3Qgc2hEZWdyZWUgPSB1YnVmWzEyXTtcclxuICAgIGNvbnN0IGZyYWN0aW9uYWxCaXRzID0gdWJ1ZlsxM107XHJcbiAgICBjb25zdCBmbGFncyA9IHVidWZbMTRdO1xyXG4gICAgY29uc3QgcmVzZXJ2ZWQgPSB1YnVmWzE1XTtcclxuICAgIGNvbnN0IHZlcnNpb24gPSB1YnVmdTMyWzFdO1xyXG5cclxuICAgIC8vIGNoZWNrIG1hZ2ljIGFuZCB2ZXJzaW9uXHJcbiAgICBpZiAocmVzZXJ2ZWQgfHwgdWJ1ZnUzMlswXSAhPSAweDUwNTM0NzRlIHx8ICh2ZXJzaW9uICE9IDIgJiYgdmVyc2lvbiAhPSAzKSkge1xyXG4gICAgICAgIC8vIHJlc2VydmVkIG11c3QgYmUgMFxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHsgbW9kZTogTW9kZS5SZWplY3QsIGRhdGE6IGJ1ZmZlciwgaGFzVmVydGV4Q29sb3JzOiBmYWxzZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByb3dPdXRwdXRMZW5ndGggPSAzICogNCArIDMgKiA0ICsgNCArIDQ7IC8vIDMyXHJcbiAgICBjb25zdCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIocm93T3V0cHV0TGVuZ3RoICogc3BsYXRDb3VudCk7XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25TY2FsZSA9IDEuMCAvICgxIDw8IGZyYWN0aW9uYWxCaXRzKTtcclxuXHJcbiAgICBjb25zdCBpbnQzMlZpZXcgPSBuZXcgSW50MzJBcnJheSgxKTtcclxuICAgIGNvbnN0IHVpbnQ4VmlldyA9IG5ldyBVaW50OEFycmF5KGludDMyVmlldy5idWZmZXIpO1xyXG4gICAgY29uc3QgcmVhZDI0YkNvbXBvbmVudCA9IGZ1bmN0aW9uICh1ODogVWludDhBcnJheSwgb2Zmc2V0OiBudW1iZXIpIHtcclxuICAgICAgICB1aW50OFZpZXdbMF0gPSB1OFtvZmZzZXQgKyAwXTtcclxuICAgICAgICB1aW50OFZpZXdbMV0gPSB1OFtvZmZzZXQgKyAxXTtcclxuICAgICAgICB1aW50OFZpZXdbMl0gPSB1OFtvZmZzZXQgKyAyXTtcclxuICAgICAgICB1aW50OFZpZXdbM10gPSB1OFtvZmZzZXQgKyAyXSAmIDB4ODAgPyAweGZmIDogMHgwMDtcclxuICAgICAgICByZXR1cm4gaW50MzJWaWV3WzBdICogcG9zaXRpb25TY2FsZTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGJ5dGVPZmZzZXQgPSAxNjtcclxuXHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKTtcclxuICAgIGNvbnN0IHNjYWxlID0gbmV3IEZsb2F0MzJBcnJheShidWZmZXIpO1xyXG4gICAgY29uc3QgcmdiYSA9IG5ldyBVaW50OENsYW1wZWRBcnJheShidWZmZXIpO1xyXG4gICAgY29uc3Qgcm90ID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGJ1ZmZlcik7XHJcblxyXG4gICAgLy8gcG9zaXRpb25zXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGF0Q291bnQ7IGkrKykge1xyXG4gICAgICAgIHBvc2l0aW9uW2kgKiA4ICsgMF0gPSByZWFkMjRiQ29tcG9uZW50KHVidWYsIGJ5dGVPZmZzZXQgKyAwKTtcclxuICAgICAgICBwb3NpdGlvbltpICogOCArIDFdID0gcmVhZDI0YkNvbXBvbmVudCh1YnVmLCBieXRlT2Zmc2V0ICsgMyk7XHJcbiAgICAgICAgcG9zaXRpb25baSAqIDggKyAyXSA9IHJlYWQyNGJDb21wb25lbnQodWJ1ZiwgYnl0ZU9mZnNldCArIDYpO1xyXG4gICAgICAgIGJ5dGVPZmZzZXQgKz0gOTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb2xvcnNcclxuICAgIGNvbnN0IHNoQzAgPSAwLjI4MjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsYXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgY29tcG9uZW50ID0gMDsgY29tcG9uZW50IDwgMzsgY29tcG9uZW50KyspIHtcclxuICAgICAgICAgICAgY29uc3QgYnl0ZVZhbHVlID0gdWJ1ZltieXRlT2Zmc2V0ICsgc3BsYXRDb3VudCArIGkgKiAzICsgY29tcG9uZW50XTtcclxuICAgICAgICAgICAgLy8gMC4xNSBpcyBoYXJkIGNvZGVkIHZhbHVlIGZyb20gc3B6XHJcbiAgICAgICAgICAgIC8vIFNjYWxlIGZhY3RvciBmb3IgREMgY29sb3IgY29tcG9uZW50cy4gVG8gY29udmVydCB0byBSR0IsIHdlIHNob3VsZCBtdWx0aXBseSBieSAwLjI4MiwgYnV0IGl0IGNhblxyXG4gICAgICAgICAgICAvLyBiZSB1c2VmdWwgdG8gcmVwcmVzZW50IGJhc2UgY29sb3JzIHRoYXQgYXJlIG91dCBvZiByYW5nZSBpZiB0aGUgaGlnaGVyIHNwaGVyaWNhbCBoYXJtb25pY3MgYmFuZHNcclxuICAgICAgICAgICAgLy8gYnJpbmcgdGhlbSBiYWNrIGludG8gcmFuZ2Ugc28gd2UgbXVsdGlwbHkgYnkgYSBzbWFsbGVyIHZhbHVlLlxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IChieXRlVmFsdWUgLSAxMjcuNSkgLyAoMC4xNSAqIDI1NSk7XHJcbiAgICAgICAgICAgIHJnYmFbaSAqIDMyICsgMjQgKyBjb21wb25lbnRdID0gU2NhbGFyLkNsYW1wKCgwLjUgKyBzaEMwICogdmFsdWUpICogMjU1LCAwLCAyNTUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmdiYVtpICogMzIgKyAyNCArIDNdID0gdWJ1ZltieXRlT2Zmc2V0ICsgaV07XHJcbiAgICB9XHJcbiAgICBieXRlT2Zmc2V0ICs9IHNwbGF0Q291bnQgKiA0O1xyXG5cclxuICAgIC8vIHNjYWxlc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICBzY2FsZVtpICogOCArIDMgKyAwXSA9IE1hdGguZXhwKHVidWZbYnl0ZU9mZnNldCArIDBdIC8gMTYuMCAtIDEwLjApO1xyXG4gICAgICAgIHNjYWxlW2kgKiA4ICsgMyArIDFdID0gTWF0aC5leHAodWJ1ZltieXRlT2Zmc2V0ICsgMV0gLyAxNi4wIC0gMTAuMCk7XHJcbiAgICAgICAgc2NhbGVbaSAqIDggKyAzICsgMl0gPSBNYXRoLmV4cCh1YnVmW2J5dGVPZmZzZXQgKyAyXSAvIDE2LjAgLSAxMC4wKTtcclxuICAgICAgICBieXRlT2Zmc2V0ICs9IDM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29udmVydCBxdWF0ZXJuaW9uXHJcbiAgICBpZiAodmVyc2lvbiA+PSAzKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgSW4gdmVyc2lvbiAzLCByb3RhdGlvbnMgYXJlIHJlcHJlc2VudGVkIGFzIHRoZSBzbWFsbGVzdCB0aHJlZSBjb21wb25lbnRzIG9mIHRoZSBub3JtYWxpemVkIHJvdGF0aW9uIHF1YXRlcm5pb24sIGZvciBvcHRpbWFsIHJvdGF0aW9uIGFjY3VyYWN5LlxyXG4gICAgICAgICAgICBUaGUgbGFyZ2VzdCBjb21wb25lbnQgY2FuIGJlIGRlcml2ZWQgZnJvbSB0aGUgb3RoZXJzIGFuZCBpcyBub3Qgc3RvcmVkLiBJdHMgaW5kZXggaXMgc3RvcmVkIG9uIDIgYml0c1xyXG4gICAgICAgICAgICBhbmQgZWFjaCBvZiB0aGUgc21hbGxlc3QgdGhyZWUgY29tcG9uZW50cyBpcyBlbmNvZGVkIGFzIGEgMTAtYml0IHNpZ25lZCBpbnRlZ2VyLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgY29uc3Qgc3FydDEyID0gTWF0aC5TUVJUMV8yO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsYXRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBbdWJ1ZltieXRlT2Zmc2V0ICsgMF0sIHVidWZbYnl0ZU9mZnNldCArIDFdLCB1YnVmW2J5dGVPZmZzZXQgKyAyXSwgdWJ1ZltieXRlT2Zmc2V0ICsgM11dO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29tcCA9IHJbMF0gKyAoclsxXSA8PCA4KSArIChyWzJdIDw8IDE2KSArIChyWzNdIDw8IDI0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNtYXNrID0gKDEgPDwgOSkgLSAxO1xyXG4gICAgICAgICAgICBjb25zdCByb3RhdGlvbiA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBpTGFyZ2VzdCA9IGNvbXAgPj4+IDMwO1xyXG4gICAgICAgICAgICBsZXQgcmVtYWluaW5nID0gY29tcDtcclxuICAgICAgICAgICAgbGV0IHN1bVNxdWFyZXMgPSAwO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDM7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaUxhcmdlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYWcgPSByZW1haW5pbmcgJiBjbWFzaztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZWdiaXQgPSAocmVtYWluaW5nID4+PiA5KSAmIDB4MTtcclxuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmcgPSByZW1haW5pbmcgPj4+IDEwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByb3RhdGlvbltpXSA9IHNxcnQxMiAqIChtYWcgLyBjbWFzayk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5lZ2JpdCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGlvbltpXSA9IC1yb3RhdGlvbltpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFjY3VtdWxhdGUgdGhlIHN1bSBvZiBzcXVhcmVzXHJcbiAgICAgICAgICAgICAgICAgICAgc3VtU3F1YXJlcyArPSByb3RhdGlvbltpXSAqIHJvdGF0aW9uW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSAxIC0gc3VtU3F1YXJlcztcclxuICAgICAgICAgICAgcm90YXRpb25baUxhcmdlc3RdID0gTWF0aC5zcXJ0KE1hdGgubWF4KHNxdWFyZSwgMCkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2h1ZmZsZSA9IFszLCAwLCAxLCAyXTsgLy8gc2h1ZmZsZSB0byBtYXRjaCB0aGUgb3JkZXIgb2YgdGhlIHF1YXRlcm5pb24gY29tcG9uZW50cyBpbiB0aGUgc3BsYXQgZmlsZVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgcm90W2kgKiAzMiArIDI4ICsgal0gPSBNYXRoLnJvdW5kKDEyNy41ICsgcm90YXRpb25bc2h1ZmZsZVtqXV0gKiAxMjcuNSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gNDtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgIEluIHZlcnNpb24gMiwgcm90YXRpb25zIGFyZSByZXByZXNlbnRlZCBhcyB0aGUgYCh4LCB5LCB6KWAgY29tcG9uZW50cyBvZiB0aGUgbm9ybWFsaXplZCByb3RhdGlvbiBxdWF0ZXJuaW9uLiBUaGVcclxuICAgICAgICAgICAgYHdgIGNvbXBvbmVudCBjYW4gYmUgZGVyaXZlZCBmcm9tIHRoZSBvdGhlcnMgYW5kIGlzIG5vdCBzdG9yZWQuIEVhY2ggY29tcG9uZW50IGlzIGVuY29kZWQgYXMgYW5cclxuICAgICAgICAgICAgOC1iaXQgc2lnbmVkIGludGVnZXIuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGF0Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gdWJ1ZltieXRlT2Zmc2V0ICsgMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSB1YnVmW2J5dGVPZmZzZXQgKyAxXTtcclxuICAgICAgICAgICAgY29uc3QgeiA9IHVidWZbYnl0ZU9mZnNldCArIDJdO1xyXG4gICAgICAgICAgICBjb25zdCBueCA9IHggLyAxMjcuNSAtIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IG55ID0geSAvIDEyNy41IC0gMTtcclxuICAgICAgICAgICAgY29uc3QgbnogPSB6IC8gMTI3LjUgLSAxO1xyXG4gICAgICAgICAgICByb3RbaSAqIDMyICsgMjggKyAxXSA9IHg7XHJcbiAgICAgICAgICAgIHJvdFtpICogMzIgKyAyOCArIDJdID0geTtcclxuICAgICAgICAgICAgcm90W2kgKiAzMiArIDI4ICsgM10gPSB6O1xyXG4gICAgICAgICAgICBjb25zdCB2ID0gMSAtIChueCAqIG54ICsgbnkgKiBueSArIG56ICogbnopO1xyXG4gICAgICAgICAgICByb3RbaSAqIDMyICsgMjggKyAwXSA9IDEyNy41ICsgTWF0aC5zcXJ0KHYgPCAwID8gMCA6IHYpICogMTI3LjU7XHJcblxyXG4gICAgICAgICAgICBieXRlT2Zmc2V0ICs9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vU0hcclxuICAgIGlmIChzaERlZ3JlZSkge1xyXG4gICAgICAgIC8vIHNoVmVjdG9yQ291bnQgaXMgOiAzIGZvciBkaW0gPSAxLCA4IGZvciBkaW0gPSAyIGFuZCAxNSBmb3IgZGltID0gM1xyXG4gICAgICAgIC8vIG51bWJlciBvZiB2ZWMzIHZlY3RvciBuZWVkZWQgcGVyIHNwbGF0XHJcbiAgICAgICAgY29uc3Qgc2hWZWN0b3JDb3VudCA9IChzaERlZ3JlZSArIDEpICogKHNoRGVncmVlICsgMSkgLSAxOyAvLyBtaW51cyAxIGJlY2F1c2Ugc2gwIGlzIGNvbG9yXHJcbiAgICAgICAgLy8gbnVtYmVyIG9mIGNvbXBvbmVudCB2YWx1ZXMgOiAzIHBlciB2ZWN0b3IzICg0NSlcclxuICAgICAgICBjb25zdCBzaENvbXBvbmVudENvdW50ID0gc2hWZWN0b3JDb3VudCAqIDM7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHR1cmVDb3VudCA9IE1hdGguY2VpbChzaENvbXBvbmVudENvdW50IC8gMTYpOyAvLyA0IGNvbXBvbmVudHMgY2FuIGJlIHN0b3JlZCBwZXIgdGV4dHVyZSwgNCBzaCBwZXIgY29tcG9uZW50XHJcbiAgICAgICAgbGV0IHNoSW5kZXhSZWFkID0gYnl0ZU9mZnNldDtcclxuXHJcbiAgICAgICAgLy8gc2ggaXMgYW4gYXJyYXkgb2YgdWludDhhcnJheSB0aGF0IHdpbGwgYmUgdXNlZCB0byBjcmVhdGUgc2ggdGV4dHVyZXNcclxuICAgICAgICBjb25zdCBzaDogVWludDhBcnJheVtdID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHNjZW5lLmdldEVuZ2luZSgpO1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gZW5naW5lLmdldENhcHMoKS5tYXhUZXh0dXJlU2l6ZTtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLmNlaWwoc3BsYXRDb3VudCAvIHdpZHRoKTtcclxuICAgICAgICAvLyBjcmVhdGUgYXJyYXkgZm9yIHRoZSBudW1iZXIgb2YgdGV4dHVyZXMgbmVlZGVkLlxyXG4gICAgICAgIGZvciAobGV0IHRleHR1cmVJbmRleCA9IDA7IHRleHR1cmVJbmRleCA8IHRleHR1cmVDb3VudDsgdGV4dHVyZUluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBVaW50OEFycmF5KGhlaWdodCAqIHdpZHRoICogNCAqIDQpOyAvLyA0IGNvbXBvbmVudHMgcGVyIHRleHR1cmUsIDQgc2ggcGVyIGNvbXBvbmVudFxyXG4gICAgICAgICAgICBzaC5wdXNoKHRleHR1cmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxhdENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgc2hJbmRleFdyaXRlID0gMDsgc2hJbmRleFdyaXRlIDwgc2hDb21wb25lbnRDb3VudDsgc2hJbmRleFdyaXRlKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoVmFsdWUgPSB1YnVmW3NoSW5kZXhSZWFkKytdO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVJbmRleCA9IE1hdGguZmxvb3Ioc2hJbmRleFdyaXRlIC8gMTYpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hBcnJheSA9IHNoW3RleHR1cmVJbmRleF07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYnl0ZUluZGV4SW5UZXh0dXJlID0gc2hJbmRleFdyaXRlICUgMTY7IC8vIFswLi4xNV1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldFBlclNwbGF0ID0gaSAqIDE2OyAvLyAxNiBzaCB2YWx1ZXMgcGVyIHRleHR1cmUgcGVyIHNwbGF0LlxyXG4gICAgICAgICAgICAgICAgc2hBcnJheVtieXRlSW5kZXhJblRleHR1cmUgKyBvZmZzZXRQZXJTcGxhdF0gPSBzaFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IG1vZGU6IE1vZGUuU3BsYXQsIGRhdGE6IGJ1ZmZlciwgaGFzVmVydGV4Q29sb3JzOiBmYWxzZSwgc2g6IHNoLCB0cmFpbmVkV2l0aEFudGlhbGlhc2luZzogISFmbGFncyB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICByZXNvbHZlKHsgbW9kZTogTW9kZS5TcGxhdCwgZGF0YTogYnVmZmVyLCBoYXNWZXJ0ZXhDb2xvcnM6IGZhbHNlLCB0cmFpbmVkV2l0aEFudGlhbGlhc2luZzogISFmbGFncyB9KTtcclxuICAgIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==