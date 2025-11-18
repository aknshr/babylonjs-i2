"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Materials_Textures_Loaders_exrTextureLoader_js"],{

/***/ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.compression.huf.js":
/*!********************************************************************************!*\
  !*** ../core/dist/Materials/Textures/Loaders/EXR/exrLoader.compression.huf.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplyLut: () => (/* binding */ ApplyLut),
/* harmony export */   HufUncompress: () => (/* binding */ HufUncompress),
/* harmony export */   ReverseLutFromBitmap: () => (/* binding */ ReverseLutFromBitmap),
/* harmony export */   Wav2Decode: () => (/* binding */ Wav2Decode)
/* harmony export */ });
/* harmony import */ var _exrLoader_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exrLoader.core */ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.core.js");
/* harmony import */ var _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exrLoader.interfaces */ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.interfaces.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * Inspired by https://github.com/sciecode/three.js/blob/dev/examples/jsm/loaders/EXRLoader.js
 * Referred to the original Industrial Light & Magic OpenEXR implementation and the TinyEXR / Syoyo Fujita
 * implementation.
 */
// /*
// Copyright (c) 2014 - 2017, Syoyo Fujita
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Syoyo Fujita nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// */
// // TinyEXR contains some OpenEXR code, which is licensed under ------------
// ///////////////////////////////////////////////////////////////////////////
// //
// // Copyright (c) 2002, Industrial Light & Magic, a division of Lucas
// // Digital Ltd. LLC
// //
// // All rights reserved.
// //
// // Redistribution and use in source and binary forms, with or without
// // modification, are permitted provided that the following conditions are
// // met:
// // *       Redistributions of source code must retain the above copyright
// // notice, this list of conditions and the following disclaimer.
// // *       Redistributions in binary form must reproduce the above
// // copyright notice, this list of conditions and the following disclaimer
// // in the documentation and/or other materials provided with the
// // distribution.
// // *       Neither the name of Industrial Light & Magic nor the names of
// // its contributors may be used to endorse or promote products derived
// // from this software without specific prior written permission.
// //
// // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// ///////////////////////////////////////////////////////////////////////////
// // End of OpenEXR license -------------------------------------------------
const NBITS = 16;
const A_OFFSET = 1 << (NBITS - 1);
const MOD_MASK = (1 << NBITS) - 1;
/** @internal */
function ReverseLutFromBitmap(bitmap, lut) {
    let k = 0;
    for (let i = 0; i < _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.USHORT_RANGE; ++i) {
        if (i == 0 || bitmap[i >> 3] & (1 << (i & 7))) {
            lut[k++] = i;
        }
    }
    const n = k - 1;
    while (k < _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.USHORT_RANGE) {
        lut[k++] = 0;
    }
    return n;
}
function HufClearDecTable(hdec) {
    for (let i = 0; i < _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.HUF_DECSIZE; i++) {
        hdec[i] = {};
        hdec[i].len = 0;
        hdec[i].lit = 0;
        hdec[i].p = null;
    }
}
function GetBits(nBits, c, lc, array, offset) {
    while (lc < nBits) {
        c = (c << 8) | (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.ParseUint8Array)(array, offset);
        lc += 8;
    }
    lc -= nBits;
    return {
        l: (c >> lc) & ((1 << nBits) - 1),
        c,
        lc,
    };
}
function GetChar(c, lc, array, offset) {
    c = (c << 8) | (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.ParseUint8Array)(array, offset);
    lc += 8;
    return {
        c,
        lc,
    };
}
function GetCode(po, rlc, c, lc, array, offset, outBuffer, outBufferOffset, outBufferEndOffset) {
    if (po == rlc) {
        if (lc < 8) {
            const gc = GetChar(c, lc, array, offset);
            c = gc.c;
            lc = gc.lc;
        }
        lc -= 8;
        let cs = c >> lc;
        cs = new Uint8Array([cs])[0];
        if (outBufferOffset.value + cs > outBufferEndOffset) {
            return null;
        }
        const s = outBuffer[outBufferOffset.value - 1];
        while (cs-- > 0) {
            outBuffer[outBufferOffset.value++] = s;
        }
    }
    else if (outBufferOffset.value < outBufferEndOffset) {
        outBuffer[outBufferOffset.value++] = po;
    }
    else {
        return null;
    }
    return { c, lc };
}
const HufTableBuffer = new Array(59);
function HufCanonicalCodeTable(hcode) {
    for (let i = 0; i <= 58; ++i) {
        HufTableBuffer[i] = 0;
    }
    for (let i = 0; i < _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.HUF_ENCSIZE; ++i) {
        HufTableBuffer[hcode[i]] += 1;
    }
    let c = 0;
    for (let i = 58; i > 0; --i) {
        const nc = (c + HufTableBuffer[i]) >> 1;
        HufTableBuffer[i] = c;
        c = nc;
    }
    for (let i = 0; i < _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.HUF_ENCSIZE; ++i) {
        const l = hcode[i];
        if (l > 0) {
            hcode[i] = l | (HufTableBuffer[l]++ << 6);
        }
    }
}
function HufUnpackEncTable(array, offset, ni, im, iM, hcode) {
    const p = offset;
    let c = 0;
    let lc = 0;
    for (; im <= iM; im++) {
        if (p.value - offset.value > ni) {
            return;
        }
        let gb = GetBits(6, c, lc, array, p);
        const l = gb.l;
        c = gb.c;
        lc = gb.lc;
        hcode[im] = l;
        if (l == _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.LONG_ZEROCODE_RUN) {
            if (p.value - offset.value > ni) {
                throw new Error("Error in HufUnpackEncTable");
            }
            gb = GetBits(8, c, lc, array, p);
            let zerun = gb.l + _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.SHORTEST_LONG_RUN;
            c = gb.c;
            lc = gb.lc;
            if (im + zerun > iM + 1) {
                throw new Error("Error in HufUnpackEncTable");
            }
            while (zerun--) {
                hcode[im++] = 0;
            }
            im--;
        }
        else if (l >= _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.SHORT_ZEROCODE_RUN) {
            let zerun = l - _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.SHORT_ZEROCODE_RUN + 2;
            if (im + zerun > iM + 1) {
                throw new Error("Error in HufUnpackEncTable");
            }
            while (zerun--) {
                hcode[im++] = 0;
            }
            im--;
        }
    }
    HufCanonicalCodeTable(hcode);
}
function HufLength(code) {
    return code & 63;
}
function HufCode(code) {
    return code >> 6;
}
function HufBuildDecTable(hcode, im, iM, hdecod) {
    for (; im <= iM; im++) {
        const c = HufCode(hcode[im]);
        const l = HufLength(hcode[im]);
        if (c >> l) {
            throw new Error("Invalid table entry");
        }
        if (l > _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.HUF_DECBITS) {
            const pl = hdecod[c >> (l - _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.HUF_DECBITS)];
            if (pl.len) {
                throw new Error("Invalid table entry");
            }
            pl.lit++;
            if (pl.p) {
                const p = pl.p;
                pl.p = new Array(pl.lit);
                for (let i = 0; i < pl.lit - 1; ++i) {
                    pl.p[i] = p[i];
                }
            }
            else {
                pl.p = new Array(1);
            }
            pl.p[pl.lit - 1] = im;
        }
        else if (l) {
            let plOffset = 0;
            for (let i = 1 << (_exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.HUF_DECBITS - l); i > 0; i--) {
                const pl = hdecod[(c << (_exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.HUF_DECBITS - l)) + plOffset];
                if (pl.len || pl.p) {
                    throw new Error("Invalid table entry");
                }
                pl.len = l;
                pl.lit = im;
                plOffset++;
            }
        }
    }
    return true;
}
function HufDecode(encodingTable, decodingTable, array, offset, ni, rlc, no, outBuffer, outOffset) {
    let c = 0;
    let lc = 0;
    const outBufferEndOffset = no;
    const inOffsetEnd = Math.trunc(offset.value + (ni + 7) / 8);
    while (offset.value < inOffsetEnd) {
        let gc = GetChar(c, lc, array, offset);
        c = gc.c;
        lc = gc.lc;
        while (lc >= _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.HUF_DECBITS) {
            const index = (c >> (lc - _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.HUF_DECBITS)) & _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.HUF_DECMASK;
            const pl = decodingTable[index];
            if (pl.len) {
                lc -= pl.len;
                const gCode = GetCode(pl.lit, rlc, c, lc, array, offset, outBuffer, outOffset, outBufferEndOffset);
                if (gCode) {
                    c = gCode.c;
                    lc = gCode.lc;
                }
            }
            else {
                if (!pl.p) {
                    throw new Error("hufDecode issues");
                }
                let j;
                for (j = 0; j < pl.lit; j++) {
                    const l = HufLength(encodingTable[pl.p[j]]);
                    while (lc < l && offset.value < inOffsetEnd) {
                        gc = GetChar(c, lc, array, offset);
                        c = gc.c;
                        lc = gc.lc;
                    }
                    if (lc >= l) {
                        if (HufCode(encodingTable[pl.p[j]]) == ((c >> (lc - l)) & ((1 << l) - 1))) {
                            lc -= l;
                            const gCode = GetCode(pl.p[j], rlc, c, lc, array, offset, outBuffer, outOffset, outBufferEndOffset);
                            if (gCode) {
                                c = gCode.c;
                                lc = gCode.lc;
                            }
                            break;
                        }
                    }
                }
                if (j == pl.lit) {
                    throw new Error("HufDecode issues");
                }
            }
        }
    }
    const i = (8 - ni) & 7;
    c >>= i;
    lc -= i;
    while (lc > 0) {
        const pl = decodingTable[(c << (_exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.HUF_DECBITS - lc)) & _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.HUF_DECMASK];
        if (pl.len) {
            lc -= pl.len;
            const gCode = GetCode(pl.lit, rlc, c, lc, array, offset, outBuffer, outOffset, outBufferEndOffset);
            if (gCode) {
                c = gCode.c;
                lc = gCode.lc;
            }
        }
        else {
            throw new Error("HufDecode issues");
        }
    }
    return true;
}
/** @internal */
function HufUncompress(array, dataView, offset, nCompressed, outBuffer, nRaw) {
    const outOffset = { value: 0 };
    const initialInOffset = offset.value;
    const im = (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.ParseUint32)(dataView, offset);
    const iM = (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.ParseUint32)(dataView, offset);
    offset.value += 4;
    const nBits = (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.ParseUint32)(dataView, offset);
    offset.value += 4;
    if (im < 0 || im >= _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.HUF_ENCSIZE || iM < 0 || iM >= _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.HUF_ENCSIZE) {
        throw new Error("Wrong HUF_ENCSIZE");
    }
    const freq = new Array(_exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.HUF_ENCSIZE);
    const hdec = new Array(_exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.HUF_DECSIZE);
    HufClearDecTable(hdec);
    const ni = nCompressed - (offset.value - initialInOffset);
    HufUnpackEncTable(array, offset, ni, im, iM, freq);
    if (nBits > 8 * (nCompressed - (offset.value - initialInOffset))) {
        throw new Error("Wrong hufUncompress");
    }
    HufBuildDecTable(freq, im, iM, hdec);
    HufDecode(freq, hdec, array, offset, nBits, iM, nRaw, outBuffer, outOffset);
}
function UInt16(value) {
    return value & 0xffff;
}
function Int16(value) {
    const ref = UInt16(value);
    return ref > 0x7fff ? ref - 0x10000 : ref;
}
function Wdec14(l, h) {
    const ls = Int16(l);
    const hs = Int16(h);
    const hi = hs;
    const ai = ls + (hi & 1) + (hi >> 1);
    const as = ai;
    const bs = ai - hi;
    return { a: as, b: bs };
}
function Wdec16(l, h) {
    const m = UInt16(l);
    const d = UInt16(h);
    const bb = (m - (d >> 1)) & MOD_MASK;
    const aa = (d + bb - A_OFFSET) & MOD_MASK;
    return { a: aa, b: bb };
}
/** @internal */
function Wav2Decode(buffer, j, nx, ox, ny, oy, mx) {
    const w14 = mx < 1 << 14;
    const n = nx > ny ? ny : nx;
    let p = 1;
    let p2;
    let py;
    while (p <= n) {
        p <<= 1;
    }
    p >>= 1;
    p2 = p;
    p >>= 1;
    while (p >= 1) {
        py = 0;
        const ey = py + oy * (ny - p2);
        const oy1 = oy * p;
        const oy2 = oy * p2;
        const ox1 = ox * p;
        const ox2 = ox * p2;
        let i00, i01, i10, i11;
        for (; py <= ey; py += oy2) {
            let px = py;
            const ex = py + ox * (nx - p2);
            for (; px <= ex; px += ox2) {
                const p01 = px + ox1;
                const p10 = px + oy1;
                const p11 = p10 + ox1;
                if (w14) {
                    let result = Wdec14(buffer[px + j], buffer[p10 + j]);
                    i00 = result.a;
                    i10 = result.b;
                    result = Wdec14(buffer[p01 + j], buffer[p11 + j]);
                    i01 = result.a;
                    i11 = result.b;
                    result = Wdec14(i00, i01);
                    buffer[px + j] = result.a;
                    buffer[p01 + j] = result.b;
                    result = Wdec14(i10, i11);
                    buffer[p10 + j] = result.a;
                    buffer[p11 + j] = result.b;
                }
                else {
                    let result = Wdec16(buffer[px + j], buffer[p10 + j]);
                    i00 = result.a;
                    i10 = result.b;
                    result = Wdec16(buffer[p01 + j], buffer[p11 + j]);
                    i01 = result.a;
                    i11 = result.b;
                    result = Wdec16(i00, i01);
                    buffer[px + j] = result.a;
                    buffer[p01 + j] = result.b;
                    result = Wdec16(i10, i11);
                    buffer[p10 + j] = result.a;
                    buffer[p11 + j] = result.b;
                }
            }
            if (nx & p) {
                const p10 = px + oy1;
                let result;
                if (w14) {
                    result = Wdec14(buffer[px + j], buffer[p10 + j]);
                }
                else {
                    result = Wdec16(buffer[px + j], buffer[p10 + j]);
                }
                i00 = result.a;
                buffer[p10 + j] = result.b;
                buffer[px + j] = i00;
            }
        }
        if (ny & p) {
            let px = py;
            const ex = py + ox * (nx - p2);
            for (; px <= ex; px += ox2) {
                const p01 = px + ox1;
                let result;
                if (w14) {
                    result = Wdec14(buffer[px + j], buffer[p01 + j]);
                }
                else {
                    result = Wdec16(buffer[px + j], buffer[p01 + j]);
                }
                i00 = result.a;
                buffer[p01 + j] = result.b;
                buffer[px + j] = i00;
            }
        }
        p2 = p;
        p >>= 1;
    }
    return py;
}
/** @internal */
function ApplyLut(lut, data, nData) {
    for (let i = 0; i < nData; ++i) {
        data[i] = lut[data[i]];
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

/***/ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.compression.js":
/*!****************************************************************************!*\
  !*** ../core/dist/Materials/Textures/Loaders/EXR/exrLoader.compression.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UncompressPIZ: () => (/* binding */ UncompressPIZ),
/* harmony export */   UncompressPXR: () => (/* binding */ UncompressPXR),
/* harmony export */   UncompressRAW: () => (/* binding */ UncompressRAW),
/* harmony export */   UncompressRLE: () => (/* binding */ UncompressRLE),
/* harmony export */   UncompressZIP: () => (/* binding */ UncompressZIP)
/* harmony export */ });
/* harmony import */ var _exrLoader_compression_huf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exrLoader.compression.huf */ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.compression.huf.js");
/* harmony import */ var _exrLoader_compression_rle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exrLoader.compression.rle */ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.compression.rle.js");
/* harmony import */ var _exrLoader_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exrLoader.core */ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.core.js");
/* harmony import */ var _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exrLoader.interfaces */ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.interfaces.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * No compression
 * @param decoder defines the decoder to use
 * @returns a decompressed data view
 */
function UncompressRAW(decoder) {
    return new DataView(decoder.array.buffer, decoder.offset.value, decoder.size);
}
/**
 * RLE compression
 * @param decoder defines the decoder to use
 * @returns a decompressed data view
 */
function UncompressRLE(decoder) {
    const compressed = decoder.viewer.buffer.slice(decoder.offset.value, decoder.offset.value + decoder.size);
    const rawBuffer = new Uint8Array((0,_exrLoader_compression_rle__WEBPACK_IMPORTED_MODULE_1__.DecodeRunLength)(compressed));
    const tmpBuffer = new Uint8Array(rawBuffer.length);
    (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_2__.Predictor)(rawBuffer);
    (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_2__.InterleaveScalar)(rawBuffer, tmpBuffer);
    return new DataView(tmpBuffer.buffer);
}
/**
 * Zip compression
 * @param decoder defines the decoder to use
 * @returns a decompressed data view
 */
function UncompressZIP(decoder) {
    const compressed = decoder.array.slice(decoder.offset.value, decoder.offset.value + decoder.size);
    const rawBuffer = fflate.unzlibSync(compressed);
    const tmpBuffer = new Uint8Array(rawBuffer.length);
    (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_2__.Predictor)(rawBuffer);
    (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_2__.InterleaveScalar)(rawBuffer, tmpBuffer);
    return new DataView(tmpBuffer.buffer);
}
/**
 * PXR compression
 * @param decoder defines the decoder to use
 * @returns a decompressed data view
 */
function UncompressPXR(decoder) {
    const compressed = decoder.array.slice(decoder.offset.value, decoder.offset.value + decoder.size);
    const rawBuffer = fflate.unzlibSync(compressed);
    const sz = decoder.lines * decoder.channels * decoder.width;
    const tmpBuffer = decoder.type == 1 ? new Uint16Array(sz) : new Uint32Array(sz);
    let tmpBufferEnd = 0;
    let writePtr = 0;
    const ptr = new Array(4);
    for (let y = 0; y < decoder.lines; y++) {
        for (let c = 0; c < decoder.channels; c++) {
            let pixel = 0;
            switch (decoder.type) {
                case 1:
                    ptr[0] = tmpBufferEnd;
                    ptr[1] = ptr[0] + decoder.width;
                    tmpBufferEnd = ptr[1] + decoder.width;
                    for (let j = 0; j < decoder.width; ++j) {
                        const diff = (rawBuffer[ptr[0]++] << 8) | rawBuffer[ptr[1]++];
                        pixel += diff;
                        tmpBuffer[writePtr] = pixel;
                        writePtr++;
                    }
                    break;
                case 2:
                    ptr[0] = tmpBufferEnd;
                    ptr[1] = ptr[0] + decoder.width;
                    ptr[2] = ptr[1] + decoder.width;
                    tmpBufferEnd = ptr[2] + decoder.width;
                    for (let j = 0; j < decoder.width; ++j) {
                        const diff = (rawBuffer[ptr[0]++] << 24) | (rawBuffer[ptr[1]++] << 16) | (rawBuffer[ptr[2]++] << 8);
                        pixel += diff;
                        tmpBuffer[writePtr] = pixel;
                        writePtr++;
                    }
                    break;
            }
        }
    }
    return new DataView(tmpBuffer.buffer);
}
/**
 * PIZ compression
 * @param decoder defines the decoder to use
 * @returns a decompressed data view
 */
function UncompressPIZ(decoder) {
    const inDataView = decoder.viewer;
    const inOffset = { value: decoder.offset.value };
    const outBuffer = new Uint16Array(decoder.width * decoder.scanlineBlockSize * (decoder.channels * decoder.type));
    const bitmap = new Uint8Array(_exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_3__.BITMAP_SIZE);
    // Setup channel info
    let outBufferEnd = 0;
    const pizChannelData = new Array(decoder.channels);
    for (let i = 0; i < decoder.channels; i++) {
        pizChannelData[i] = {};
        pizChannelData[i]["start"] = outBufferEnd;
        pizChannelData[i]["end"] = pizChannelData[i]["start"];
        pizChannelData[i]["nx"] = decoder.width;
        pizChannelData[i]["ny"] = decoder.lines;
        pizChannelData[i]["size"] = decoder.type;
        outBufferEnd += pizChannelData[i].nx * pizChannelData[i].ny * pizChannelData[i].size;
    }
    // Read range compression data
    const minNonZero = (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_2__.ParseUint16)(inDataView, inOffset);
    const maxNonZero = (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_2__.ParseUint16)(inDataView, inOffset);
    if (maxNonZero >= _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_3__.BITMAP_SIZE) {
        throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
    }
    if (minNonZero <= maxNonZero) {
        for (let i = 0; i < maxNonZero - minNonZero + 1; i++) {
            bitmap[i + minNonZero] = (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_2__.ParseUint8)(inDataView, inOffset);
        }
    }
    // Reverse LUT
    const lut = new Uint16Array(_exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_3__.USHORT_RANGE);
    const maxValue = (0,_exrLoader_compression_huf__WEBPACK_IMPORTED_MODULE_0__.ReverseLutFromBitmap)(bitmap, lut);
    const length = (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_2__.ParseUint32)(inDataView, inOffset);
    // Huffman decoding
    (0,_exrLoader_compression_huf__WEBPACK_IMPORTED_MODULE_0__.HufUncompress)(decoder.array, inDataView, inOffset, length, outBuffer, outBufferEnd);
    // Wavelet decoding
    for (let i = 0; i < decoder.channels; ++i) {
        const cd = pizChannelData[i];
        for (let j = 0; j < pizChannelData[i].size; ++j) {
            (0,_exrLoader_compression_huf__WEBPACK_IMPORTED_MODULE_0__.Wav2Decode)(outBuffer, cd.start + j, cd.nx, cd.size, cd.ny, cd.nx * cd.size, maxValue);
        }
    }
    // Expand the pixel data to their original range
    (0,_exrLoader_compression_huf__WEBPACK_IMPORTED_MODULE_0__.ApplyLut)(lut, outBuffer, outBufferEnd);
    // Rearrange the pixel data into the format expected by the caller.
    let tmpOffset = 0;
    const tmpBuffer = new Uint8Array(outBuffer.buffer.byteLength);
    for (let y = 0; y < decoder.lines; y++) {
        for (let c = 0; c < decoder.channels; c++) {
            const cd = pizChannelData[c];
            const n = cd.nx * cd.size;
            const cp = new Uint8Array(outBuffer.buffer, cd.end * _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_3__.INT16_SIZE, n * _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_3__.INT16_SIZE);
            tmpBuffer.set(cp, tmpOffset);
            tmpOffset += n * _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_3__.INT16_SIZE;
            cd.end += n;
        }
    }
    return new DataView(tmpBuffer.buffer);
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

/***/ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.compression.rle.js":
/*!********************************************************************************!*\
  !*** ../core/dist/Materials/Textures/Loaders/EXR/exrLoader.compression.rle.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DecodeRunLength: () => (/* binding */ DecodeRunLength)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/**
 * Inspired by https://github.com/sciecode/three.js/blob/dev/examples/jsm/loaders/EXRLoader.js
 * Referred to the original Industrial Light & Magic OpenEXR implementation and the TinyEXR / Syoyo Fujita
 * implementation.
 */
// /*
// Copyright (c) 2014 - 2017, Syoyo Fujita
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Syoyo Fujita nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// */
// // TinyEXR contains some OpenEXR code, which is licensed under ------------
// ///////////////////////////////////////////////////////////////////////////
// //
// // Copyright (c) 2002, Industrial Light & Magic, a division of Lucas
// // Digital Ltd. LLC
// //
// // All rights reserved.
// //
// // Redistribution and use in source and binary forms, with or without
// // modification, are permitted provided that the following conditions are
// // met:
// // *       Redistributions of source code must retain the above copyright
// // notice, this list of conditions and the following disclaimer.
// // *       Redistributions in binary form must reproduce the above
// // copyright notice, this list of conditions and the following disclaimer
// // in the documentation and/or other materials provided with the
// // distribution.
// // *       Neither the name of Industrial Light & Magic nor the names of
// // its contributors may be used to endorse or promote products derived
// // from this software without specific prior written permission.
// //
// // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// ///////////////////////////////////////////////////////////////////////////
// // End of OpenEXR license -------------------------------------------------
/** @internal */
function DecodeRunLength(source) {
    let size = source.byteLength;
    const out = [];
    let p = 0;
    const reader = new DataView(source);
    while (size > 0) {
        const l = reader.getInt8(p++);
        if (l < 0) {
            const count = -l;
            size -= count + 1;
            for (let i = 0; i < count; i++) {
                out.push(reader.getUint8(p++));
            }
        }
        else {
            const count = l;
            size -= 2;
            const value = reader.getUint8(p++);
            for (let i = 0; i < count + 1; i++) {
                out.push(value);
            }
        }
    }
    return out;
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

/***/ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.configuration.js":
/*!******************************************************************************!*\
  !*** ../core/dist/Materials/Textures/Loaders/EXR/exrLoader.configuration.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXROutputType: () => (/* binding */ EXROutputType),
/* harmony export */   ExrLoaderGlobalConfiguration: () => (/* binding */ ExrLoaderGlobalConfiguration)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var EXROutputType;
(function (EXROutputType) {
    EXROutputType[EXROutputType["Float"] = 0] = "Float";
    EXROutputType[EXROutputType["HalfFloat"] = 1] = "HalfFloat";
})(EXROutputType || (EXROutputType = {}));
/**
 * Class used to store configuration of the exr loader
 */
class ExrLoaderGlobalConfiguration {
}
/**
 * Defines the default output type to use (Half float by default)
 */
ExrLoaderGlobalConfiguration.DefaultOutputType = EXROutputType.HalfFloat;
/**
 * Url to use to load the fflate library (for zip decompression)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
ExrLoaderGlobalConfiguration.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";


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

/***/ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.core.js":
/*!*********************************************************************!*\
  !*** ../core/dist/Materials/Textures/Loaders/EXR/exrLoader.core.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompressionCodes: () => (/* binding */ CompressionCodes),
/* harmony export */   DecodeFloat32: () => (/* binding */ DecodeFloat32),
/* harmony export */   InterleaveScalar: () => (/* binding */ InterleaveScalar),
/* harmony export */   ParseFloat16: () => (/* binding */ ParseFloat16),
/* harmony export */   ParseFloat32: () => (/* binding */ ParseFloat32),
/* harmony export */   ParseInt32: () => (/* binding */ ParseInt32),
/* harmony export */   ParseInt64: () => (/* binding */ ParseInt64),
/* harmony export */   ParseNullTerminatedString: () => (/* binding */ ParseNullTerminatedString),
/* harmony export */   ParseUint16: () => (/* binding */ ParseUint16),
/* harmony export */   ParseUint32: () => (/* binding */ ParseUint32),
/* harmony export */   ParseUint8: () => (/* binding */ ParseUint8),
/* harmony export */   ParseUint8Array: () => (/* binding */ ParseUint8Array),
/* harmony export */   ParseValue: () => (/* binding */ ParseValue),
/* harmony export */   Predictor: () => (/* binding */ Predictor)
/* harmony export */ });
/* harmony import */ var core_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.scalar.functions */ "../core/dist/Maths/math.scalar.functions.js");
/* harmony import */ var _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exrLoader.interfaces */ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.interfaces.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * Inspired by https://github.com/sciecode/three.js/blob/dev/examples/jsm/loaders/EXRLoader.js
 * Referred to the original Industrial Light & Magic OpenEXR implementation and the TinyEXR / Syoyo Fujita
 * implementation.
 */
// /*
// Copyright (c) 2014 - 2017, Syoyo Fujita
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Syoyo Fujita nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// */
// // TinyEXR contains some OpenEXR code, which is licensed under ------------
// ///////////////////////////////////////////////////////////////////////////
// //
// // Copyright (c) 2002, Industrial Light & Magic, a division of Lucas
// // Digital Ltd. LLC
// //
// // All rights reserved.
// //
// // Redistribution and use in source and binary forms, with or without
// // modification, are permitted provided that the following conditions are
// // met:
// // *       Redistributions of source code must retain the above copyright
// // notice, this list of conditions and the following disclaimer.
// // *       Redistributions in binary form must reproduce the above
// // copyright notice, this list of conditions and the following disclaimer
// // in the documentation and/or other materials provided with the
// // distribution.
// // *       Neither the name of Industrial Light & Magic nor the names of
// // its contributors may be used to endorse or promote products derived
// // from this software without specific prior written permission.
// //
// // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// ///////////////////////////////////////////////////////////////////////////
// // End of OpenEXR license -------------------------------------------------
var CompressionCodes;
(function (CompressionCodes) {
    CompressionCodes[CompressionCodes["NO_COMPRESSION"] = 0] = "NO_COMPRESSION";
    CompressionCodes[CompressionCodes["RLE_COMPRESSION"] = 1] = "RLE_COMPRESSION";
    CompressionCodes[CompressionCodes["ZIPS_COMPRESSION"] = 2] = "ZIPS_COMPRESSION";
    CompressionCodes[CompressionCodes["ZIP_COMPRESSION"] = 3] = "ZIP_COMPRESSION";
    CompressionCodes[CompressionCodes["PIZ_COMPRESSION"] = 4] = "PIZ_COMPRESSION";
    CompressionCodes[CompressionCodes["PXR24_COMPRESSION"] = 5] = "PXR24_COMPRESSION";
})(CompressionCodes || (CompressionCodes = {}));
var LineOrders;
(function (LineOrders) {
    LineOrders[LineOrders["INCREASING_Y"] = 0] = "INCREASING_Y";
    LineOrders[LineOrders["DECREASING_Y"] = 1] = "DECREASING_Y";
})(LineOrders || (LineOrders = {}));
const Tables = GenerateTables();
// Fast Half Float Conversions, http://www.fox-toolkit.org/ftp/fasthalffloatconversion.pdf
function GenerateTables() {
    // float32 to float16 helpers
    const buffer = new ArrayBuffer(4);
    const floatView = new Float32Array(buffer);
    const uint32View = new Uint32Array(buffer);
    const baseTable = new Uint32Array(512);
    const shiftTable = new Uint32Array(512);
    for (let i = 0; i < 256; ++i) {
        const e = i - 127;
        // very small number (0, -0)
        if (e < -27) {
            baseTable[i] = 0x0000;
            baseTable[i | 0x100] = 0x8000;
            shiftTable[i] = 24;
            shiftTable[i | 0x100] = 24;
            // small number (denorm)
        }
        else if (e < -14) {
            baseTable[i] = 0x0400 >> (-e - 14);
            baseTable[i | 0x100] = (0x0400 >> (-e - 14)) | 0x8000;
            shiftTable[i] = -e - 1;
            shiftTable[i | 0x100] = -e - 1;
            // normal number
        }
        else if (e <= 15) {
            baseTable[i] = (e + 15) << 10;
            baseTable[i | 0x100] = ((e + 15) << 10) | 0x8000;
            shiftTable[i] = 13;
            shiftTable[i | 0x100] = 13;
            // large number (Infinity, -Infinity)
        }
        else if (e < 128) {
            baseTable[i] = 0x7c00;
            baseTable[i | 0x100] = 0xfc00;
            shiftTable[i] = 24;
            shiftTable[i | 0x100] = 24;
            // stay (NaN, Infinity, -Infinity)
        }
        else {
            baseTable[i] = 0x7c00;
            baseTable[i | 0x100] = 0xfc00;
            shiftTable[i] = 13;
            shiftTable[i | 0x100] = 13;
        }
    }
    // float16 to float32 helpers
    const mantissaTable = new Uint32Array(2048);
    const exponentTable = new Uint32Array(64);
    const offsetTable = new Uint32Array(64);
    for (let i = 1; i < 1024; ++i) {
        let m = i << 13; // zero pad mantissa bits
        let e = 0; // zero exponent
        // normalized
        while ((m & 0x00800000) === 0) {
            m <<= 1;
            e -= 0x00800000; // decrement exponent
        }
        m &= ~0x00800000; // clear leading 1 bit
        e += 0x38800000; // adjust bias
        mantissaTable[i] = m | e;
    }
    for (let i = 1024; i < 2048; ++i) {
        mantissaTable[i] = 0x38000000 + ((i - 1024) << 13);
    }
    for (let i = 1; i < 31; ++i) {
        exponentTable[i] = i << 23;
    }
    exponentTable[31] = 0x47800000;
    exponentTable[32] = 0x80000000;
    for (let i = 33; i < 63; ++i) {
        exponentTable[i] = 0x80000000 + ((i - 32) << 23);
    }
    exponentTable[63] = 0xc7800000;
    for (let i = 1; i < 64; ++i) {
        if (i !== 32) {
            offsetTable[i] = 1024;
        }
    }
    return {
        floatView: floatView,
        uint32View: uint32View,
        baseTable: baseTable,
        shiftTable: shiftTable,
        mantissaTable: mantissaTable,
        exponentTable: exponentTable,
        offsetTable: offsetTable,
    };
}
/**
 * Parse a null terminated string from the buffer
 * @param buffer buffer to read from
 * @param offset current offset in the buffer
 * @returns a string
 */
function ParseNullTerminatedString(buffer, offset) {
    const uintBuffer = new Uint8Array(buffer);
    let endOffset = 0;
    while (uintBuffer[offset.value + endOffset] != 0) {
        endOffset += 1;
    }
    const stringValue = new TextDecoder().decode(uintBuffer.slice(offset.value, offset.value + endOffset));
    offset.value = offset.value + endOffset + 1;
    return stringValue;
}
/**
 * Parse an int32 from the buffer
 * @param dataView dataview on the data
 * @param offset current offset in the data view
 * @returns an int32
 */
function ParseInt32(dataView, offset) {
    const value = dataView.getInt32(offset.value, true);
    offset.value += _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.INT32_SIZE;
    return value;
}
/**
 * Parse an uint32 from the buffer
 * @param dataView data view to read from
 * @param offset offset in the data view
 * @returns an uint32
 */
function ParseUint32(dataView, offset) {
    const value = dataView.getUint32(offset.value, true);
    offset.value += _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.INT32_SIZE;
    return value;
}
/**
 * Parse an uint8 from the buffer
 * @param dataView dataview on the data
 * @param offset current offset in the data view
 * @returns an uint8
 */
function ParseUint8(dataView, offset) {
    const value = dataView.getUint8(offset.value);
    offset.value += _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.INT8_SIZE;
    return value;
}
/**
 * Parse an uint16 from the buffer
 * @param dataView dataview on the data
 * @param offset current offset in the data view
 * @returns an uint16
 */
function ParseUint16(dataView, offset) {
    const value = dataView.getUint16(offset.value, true);
    offset.value += _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.INT16_SIZE;
    return value;
}
/**
 * Parse an uint8 from an array buffer
 * @param array array buffer
 * @param offset current offset in the data view
 * @returns an uint16
 */
function ParseUint8Array(array, offset) {
    const value = array[offset.value];
    offset.value += _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.INT8_SIZE;
    return value;
}
/**
 * Parse an int64 from the buffer
 * @param dataView dataview on the data
 * @param offset current offset in the data view
 * @returns an int64
 */
function ParseInt64(dataView, offset) {
    let int;
    if ("getBigInt64" in DataView.prototype) {
        int = Number(dataView.getBigInt64(offset.value, true));
    }
    else {
        int = dataView.getUint32(offset.value + 4, true) + Number(dataView.getUint32(offset.value, true) << 32);
    }
    offset.value += _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.ULONG_SIZE;
    return int;
}
/**
 * Parse a float32 from the buffer
 * @param dataView dataview on the data
 * @param offset current offset in the data view
 * @returns a float32
 */
function ParseFloat32(dataView, offset) {
    const value = dataView.getFloat32(offset.value, true);
    offset.value += _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_1__.FLOAT32_SIZE;
    return value;
}
/**
 * Parse a float16 from the buffer
 * @param dataView dataview on the data
 * @param offset current offset in the data view
 * @returns a float16
 */
function ParseFloat16(dataView, offset) {
    return DecodeFloat16(ParseUint16(dataView, offset));
}
function DecodeFloat16(binary) {
    const exponent = (binary & 0x7c00) >> 10;
    const fraction = binary & 0x03ff;
    return ((binary >> 15 ? -1 : 1) *
        (exponent ? (exponent === 0x1f ? (fraction ? NaN : Infinity) : Math.pow(2, exponent - 15) * (1 + fraction / 0x400)) : 6.103515625e-5 * (fraction / 0x400)));
}
function ToHalfFloat(value) {
    if (Math.abs(value) > 65504) {
        throw new Error("Value out of range.Consider using float instead of half-float.");
    }
    value = (0,core_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_0__.Clamp)(value, -65504, 65504);
    Tables.floatView[0] = value;
    const f = Tables.uint32View[0];
    const e = (f >> 23) & 0x1ff;
    return Tables.baseTable[e] + ((f & 0x007fffff) >> Tables.shiftTable[e]);
}
/**
 * Decode a float32 from the buffer
 * @param dataView dataview on the data
 * @param offset current offset in the data view
 * @returns a float32
 */
function DecodeFloat32(dataView, offset) {
    return ToHalfFloat(ParseFloat32(dataView, offset));
}
function ParseFixedLengthString(buffer, offset, size) {
    const stringValue = new TextDecoder().decode(new Uint8Array(buffer).slice(offset.value, offset.value + size));
    offset.value = offset.value + size;
    return stringValue;
}
function ParseRational(dataView, offset) {
    const x = ParseInt32(dataView, offset);
    const y = ParseUint32(dataView, offset);
    return [x, y];
}
function ParseTimecode(dataView, offset) {
    const x = ParseUint32(dataView, offset);
    const y = ParseUint32(dataView, offset);
    return [x, y];
}
function ParseV2f(dataView, offset) {
    const x = ParseFloat32(dataView, offset);
    const y = ParseFloat32(dataView, offset);
    return [x, y];
}
function ParseV3f(dataView, offset) {
    const x = ParseFloat32(dataView, offset);
    const y = ParseFloat32(dataView, offset);
    const z = ParseFloat32(dataView, offset);
    return [x, y, z];
}
function ParseChlist(dataView, offset, size) {
    const startOffset = offset.value;
    const channels = [];
    while (offset.value < startOffset + size - 1) {
        const name = ParseNullTerminatedString(dataView.buffer, offset);
        const pixelType = ParseInt32(dataView, offset);
        const pLinear = ParseUint8(dataView, offset);
        offset.value += 3; // reserved, three chars
        const xSampling = ParseInt32(dataView, offset);
        const ySampling = ParseInt32(dataView, offset);
        channels.push({
            name: name,
            pixelType: pixelType,
            pLinear: pLinear,
            xSampling: xSampling,
            ySampling: ySampling,
        });
    }
    offset.value += 1;
    return channels;
}
function ParseChromaticities(dataView, offset) {
    const redX = ParseFloat32(dataView, offset);
    const redY = ParseFloat32(dataView, offset);
    const greenX = ParseFloat32(dataView, offset);
    const greenY = ParseFloat32(dataView, offset);
    const blueX = ParseFloat32(dataView, offset);
    const blueY = ParseFloat32(dataView, offset);
    const whiteX = ParseFloat32(dataView, offset);
    const whiteY = ParseFloat32(dataView, offset);
    return { redX: redX, redY: redY, greenX: greenX, greenY: greenY, blueX: blueX, blueY: blueY, whiteX: whiteX, whiteY: whiteY };
}
function ParseCompression(dataView, offset) {
    return ParseUint8(dataView, offset);
}
function ParseBox2i(dataView, offset) {
    const xMin = ParseInt32(dataView, offset);
    const yMin = ParseInt32(dataView, offset);
    const xMax = ParseInt32(dataView, offset);
    const yMax = ParseInt32(dataView, offset);
    return { xMin: xMin, yMin: yMin, xMax: xMax, yMax: yMax };
}
function ParseLineOrder(dataView, offset) {
    const lineOrder = ParseUint8(dataView, offset);
    return LineOrders[lineOrder];
}
/**
 * Parse a value from the data view
 * @param dataView defines the data view to read from
 * @param offset defines the current offset in the data view
 * @param type defines the type of the value to read
 * @param size defines the size of the value to read
 * @returns the parsed value
 */
function ParseValue(dataView, offset, type, size) {
    switch (type) {
        case "string":
        case "stringvector":
        case "iccProfile":
            return ParseFixedLengthString(dataView.buffer, offset, size);
        case "chlist":
            return ParseChlist(dataView, offset, size);
        case "chromaticities":
            return ParseChromaticities(dataView, offset);
        case "compression":
            return ParseCompression(dataView, offset);
        case "box2i":
            return ParseBox2i(dataView, offset);
        case "lineOrder":
            return ParseLineOrder(dataView, offset);
        case "float":
            return ParseFloat32(dataView, offset);
        case "v2f":
            return ParseV2f(dataView, offset);
        case "v3f":
            return ParseV3f(dataView, offset);
        case "int":
            return ParseInt32(dataView, offset);
        case "rational":
            return ParseRational(dataView, offset);
        case "timecode":
            return ParseTimecode(dataView, offset);
        case "preview":
            offset.value += size;
            return "skipped";
        default:
            offset.value += size;
            return undefined;
    }
}
/**
 * Revert the endianness of the data
 * @param source defines the source
 */
function Predictor(source) {
    for (let t = 1; t < source.length; t++) {
        const d = source[t - 1] + source[t] - 128;
        source[t] = d;
    }
}
/**
 * Interleave pixels
 * @param source defines the data source
 * @param out defines the output
 */
function InterleaveScalar(source, out) {
    let t1 = 0;
    let t2 = Math.floor((source.length + 1) / 2);
    let s = 0;
    const stop = source.length - 1;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (s > stop) {
            break;
        }
        out[s++] = source[t1++];
        if (s > stop) {
            break;
        }
        out[s++] = source[t2++];
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

/***/ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.decoder.js":
/*!************************************************************************!*\
  !*** ../core/dist/Materials/Textures/Loaders/EXR/exrLoader.decoder.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateDecoderAsync: () => (/* binding */ CreateDecoderAsync),
/* harmony export */   ScanData: () => (/* binding */ ScanData)
/* harmony export */ });
/* harmony import */ var _exrLoader_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exrLoader.core */ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.core.js");
/* harmony import */ var _exrLoader_compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exrLoader.compression */ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.compression.js");
/* harmony import */ var _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exrLoader.interfaces */ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.interfaces.js");
/* harmony import */ var core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Engines/constants */ "../core/dist/Engines/constants.js");
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var _exrLoader_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exrLoader.configuration */ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.configuration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







/**
 * Inspired by https://github.com/sciecode/three.js/blob/dev/examples/jsm/loaders/EXRLoader.js
 * Referred to the original Industrial Light & Magic OpenEXR implementation and the TinyEXR / Syoyo Fujita
 * implementation.
 */
// /*
// Copyright (c) 2014 - 2017, Syoyo Fujita
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Syoyo Fujita nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// */
// // TinyEXR contains some OpenEXR code, which is licensed under ------------
// ///////////////////////////////////////////////////////////////////////////
// //
// // Copyright (c) 2002, Industrial Light & Magic, a division of Lucas
// // Digital Ltd. LLC
// //
// // All rights reserved.
// //
// // Redistribution and use in source and binary forms, with or without
// // modification, are permitted provided that the following conditions are
// // met:
// // *       Redistributions of source code must retain the above copyright
// // notice, this list of conditions and the following disclaimer.
// // *       Redistributions in binary form must reproduce the above
// // copyright notice, this list of conditions and the following disclaimer
// // in the documentation and/or other materials provided with the
// // distribution.
// // *       Neither the name of Industrial Light & Magic nor the names of
// // its contributors may be used to endorse or promote products derived
// // from this software without specific prior written permission.
// //
// // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// ///////////////////////////////////////////////////////////////////////////
// // End of OpenEXR license -------------------------------------------------
/**
 * Create a decoder for the exr file
 * @param header header of the exr file
 * @param dataView dataview of the exr file
 * @param offset current offset
 * @param outputType expected output type (float or half float)
 * @returns a promise that resolves with the decoder
 */
async function CreateDecoderAsync(header, dataView, offset, outputType) {
    const decoder = {
        size: 0,
        viewer: dataView,
        array: new Uint8Array(dataView.buffer),
        offset: offset,
        width: header.dataWindow.xMax - header.dataWindow.xMin + 1,
        height: header.dataWindow.yMax - header.dataWindow.yMin + 1,
        channels: header.channels.length,
        channelLineOffsets: {},
        scanOrder: () => 0,
        bytesPerLine: 0,
        outLineWidth: 0,
        lines: 0,
        scanlineBlockSize: 0,
        inputSize: null,
        type: 0,
        uncompress: null,
        getter: () => 0,
        format: core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTUREFORMAT_RGBA,
        outputChannels: 0,
        decodeChannels: {},
        blockCount: null,
        byteArray: null,
        linearSpace: false,
        textureType: 0,
    };
    switch (header.compression) {
        case _exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.CompressionCodes.NO_COMPRESSION:
            decoder.lines = 1;
            decoder.uncompress = _exrLoader_compression__WEBPACK_IMPORTED_MODULE_1__.UncompressRAW;
            break;
        case _exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.CompressionCodes.RLE_COMPRESSION:
            decoder.lines = 1;
            decoder.uncompress = _exrLoader_compression__WEBPACK_IMPORTED_MODULE_1__.UncompressRLE;
            break;
        case _exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.CompressionCodes.ZIPS_COMPRESSION:
            decoder.lines = 1;
            decoder.uncompress = _exrLoader_compression__WEBPACK_IMPORTED_MODULE_1__.UncompressZIP;
            await core_Misc_tools__WEBPACK_IMPORTED_MODULE_4__.Tools.LoadScriptAsync(_exrLoader_configuration__WEBPACK_IMPORTED_MODULE_5__.ExrLoaderGlobalConfiguration.FFLATEUrl);
            break;
        case _exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.CompressionCodes.ZIP_COMPRESSION:
            decoder.lines = 16;
            decoder.uncompress = _exrLoader_compression__WEBPACK_IMPORTED_MODULE_1__.UncompressZIP;
            await core_Misc_tools__WEBPACK_IMPORTED_MODULE_4__.Tools.LoadScriptAsync(_exrLoader_configuration__WEBPACK_IMPORTED_MODULE_5__.ExrLoaderGlobalConfiguration.FFLATEUrl);
            break;
        case _exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.CompressionCodes.PIZ_COMPRESSION:
            decoder.lines = 32;
            decoder.uncompress = _exrLoader_compression__WEBPACK_IMPORTED_MODULE_1__.UncompressPIZ;
            break;
        case _exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.CompressionCodes.PXR24_COMPRESSION:
            decoder.lines = 16;
            decoder.uncompress = _exrLoader_compression__WEBPACK_IMPORTED_MODULE_1__.UncompressPXR;
            await core_Misc_tools__WEBPACK_IMPORTED_MODULE_4__.Tools.LoadScriptAsync(_exrLoader_configuration__WEBPACK_IMPORTED_MODULE_5__.ExrLoaderGlobalConfiguration.FFLATEUrl);
            break;
        default:
            throw new Error(_exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.CompressionCodes[header.compression] + " is unsupported");
    }
    decoder.scanlineBlockSize = decoder.lines;
    const channels = {};
    for (const channel of header.channels) {
        switch (channel.name) {
            case "R":
            case "G":
            case "B":
            case "A":
                channels[channel.name] = true;
                decoder.type = channel.pixelType;
                break;
            case "Y":
                channels[channel.name] = true;
                decoder.type = channel.pixelType;
                // Note: 'Y' is deprecated in OpenGL 3.0+; prefer 'R' for single-channel EXRs.
                break;
            default:
                // Skip unsupported channels
                break;
        }
    }
    // RGB images will be converted to RGBA format, preventing software emulation in select devices.
    let fillAlpha = false;
    if (channels.R && channels.G && channels.B && channels.A) {
        decoder.outputChannels = 4;
        decoder.decodeChannels = { R: 0, G: 1, B: 2, A: 3 };
    }
    else if (channels.R && channels.G && channels.B) {
        fillAlpha = true;
        decoder.outputChannels = 4;
        decoder.decodeChannels = { R: 0, G: 1, B: 2, A: 3 };
    }
    else if (channels.R && channels.G) {
        decoder.outputChannels = 2;
        decoder.decodeChannels = { R: 0, G: 1 };
    }
    else if (channels.R) {
        decoder.outputChannels = 1;
        decoder.decodeChannels = { R: 0 };
    }
    else if (channels.Y) {
        decoder.outputChannels = 1;
        decoder.decodeChannels = { Y: 0 };
        // Note: Supporting 'Y' channel for legacy compatibility; prefer 'R' in new EXRs.
    }
    else {
        throw new Error("EXRLoader.parse: file contains unsupported data channels.");
    }
    if (decoder.type === 1) {
        // half
        switch (outputType) {
            case _exrLoader_configuration__WEBPACK_IMPORTED_MODULE_5__.EXROutputType.Float:
                decoder.getter = _exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.ParseFloat16;
                decoder.inputSize = _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_2__.INT16_SIZE;
                break;
            case _exrLoader_configuration__WEBPACK_IMPORTED_MODULE_5__.EXROutputType.HalfFloat:
                decoder.getter = _exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.ParseUint16;
                decoder.inputSize = _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_2__.INT16_SIZE;
                break;
        }
    }
    else if (decoder.type === 2) {
        // float
        switch (outputType) {
            case _exrLoader_configuration__WEBPACK_IMPORTED_MODULE_5__.EXROutputType.Float:
                decoder.getter = _exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.ParseFloat32;
                decoder.inputSize = _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_2__.FLOAT32_SIZE;
                break;
            case _exrLoader_configuration__WEBPACK_IMPORTED_MODULE_5__.EXROutputType.HalfFloat:
                decoder.getter = _exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.DecodeFloat32;
                decoder.inputSize = _exrLoader_interfaces__WEBPACK_IMPORTED_MODULE_2__.FLOAT32_SIZE;
        }
    }
    else {
        throw new Error("Unsupported pixelType " + decoder.type + " for " + header.compression);
    }
    decoder.blockCount = decoder.height / decoder.scanlineBlockSize;
    for (let i = 0; i < decoder.blockCount; i++) {
        (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.ParseInt64)(dataView, offset); // scanlineOffset
    }
    // we should be passed the scanline offset table, ready to start reading pixel data.
    const size = decoder.width * decoder.height * decoder.outputChannels;
    switch (outputType) {
        case _exrLoader_configuration__WEBPACK_IMPORTED_MODULE_5__.EXROutputType.Float:
            decoder.byteArray = new Float32Array(size);
            decoder.textureType = core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTURETYPE_FLOAT;
            // Fill initially with 1s for the alpha value if the texture is not RGBA, RGB values will be overwritten
            if (fillAlpha) {
                decoder.byteArray.fill(1, 0, size);
            }
            break;
        case _exrLoader_configuration__WEBPACK_IMPORTED_MODULE_5__.EXROutputType.HalfFloat:
            decoder.byteArray = new Uint16Array(size);
            decoder.textureType = core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTURETYPE_HALF_FLOAT;
            if (fillAlpha) {
                decoder.byteArray.fill(0x3c00, 0, size); // Uint16Array holds half float data, 0x3C00 is 1
            }
            break;
        default:
            throw new Error("Unsupported type: " + outputType);
    }
    let byteOffset = 0;
    for (const channel of header.channels) {
        if (decoder.decodeChannels[channel.name] !== undefined) {
            decoder.channelLineOffsets[channel.name] = byteOffset * decoder.width;
        }
        byteOffset += channel.pixelType * 2;
    }
    decoder.bytesPerLine = decoder.width * byteOffset;
    decoder.outLineWidth = decoder.width * decoder.outputChannels;
    if (header.lineOrder === "INCREASING_Y") {
        decoder.scanOrder = (y) => y;
    }
    else {
        decoder.scanOrder = (y) => decoder.height - 1 - y;
    }
    if (decoder.outputChannels == 4) {
        decoder.format = core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTUREFORMAT_RGBA;
        decoder.linearSpace = true;
    }
    else {
        decoder.format = core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTUREFORMAT_R;
        decoder.linearSpace = false;
    }
    return decoder;
}
/**
 * Scan the data of the exr file
 * @param decoder decoder to use
 * @param header header of the exr file
 * @param dataView dataview of the exr file
 * @param offset current offset
 */
function ScanData(decoder, header, dataView, offset) {
    const tmpOffset = { value: 0 };
    for (let scanlineBlockIdx = 0; scanlineBlockIdx < decoder.height / decoder.scanlineBlockSize; scanlineBlockIdx++) {
        const line = (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.ParseInt32)(dataView, offset) - header.dataWindow.yMin; // line_no
        decoder.size = (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_0__.ParseUint32)(dataView, offset); // data_len
        decoder.lines = line + decoder.scanlineBlockSize > decoder.height ? decoder.height - line : decoder.scanlineBlockSize;
        const isCompressed = decoder.size < decoder.lines * decoder.bytesPerLine;
        const viewer = isCompressed && decoder.uncompress ? decoder.uncompress(decoder) : (0,_exrLoader_compression__WEBPACK_IMPORTED_MODULE_1__.UncompressRAW)(decoder);
        offset.value += decoder.size;
        for (let lineY = 0; lineY < decoder.scanlineBlockSize; lineY++) {
            const scanY = scanlineBlockIdx * decoder.scanlineBlockSize;
            const trueY = lineY + decoder.scanOrder(scanY);
            if (trueY >= decoder.height) {
                continue;
            }
            const lineOffset = lineY * decoder.bytesPerLine;
            const outLineOffset = (decoder.height - 1 - trueY) * decoder.outLineWidth;
            for (let channelID = 0; channelID < decoder.channels; channelID++) {
                const name = header.channels[channelID].name;
                const lOff = decoder.channelLineOffsets[name];
                const cOff = decoder.decodeChannels[name];
                if (cOff === undefined) {
                    continue;
                }
                tmpOffset.value = lineOffset + lOff;
                for (let x = 0; x < decoder.width; x++) {
                    const outIndex = outLineOffset + x * decoder.outputChannels + cOff;
                    if (decoder.byteArray) {
                        decoder.byteArray[outIndex] = decoder.getter(viewer, tmpOffset);
                    }
                }
            }
        }
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

/***/ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.header.js":
/*!***********************************************************************!*\
  !*** ../core/dist/Materials/Textures/Loaders/EXR/exrLoader.header.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetExrHeader: () => (/* binding */ GetExrHeader)
/* harmony export */ });
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var _exrLoader_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exrLoader.core */ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.core.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/* eslint-disable @typescript-eslint/naming-convention */


/**
 * Inspired by https://github.com/sciecode/three.js/blob/dev/examples/jsm/loaders/EXRLoader.js
 * Referred to the original Industrial Light & Magic OpenEXR implementation and the TinyEXR / Syoyo Fujita
 * implementation.
 */
// /*
// Copyright (c) 2014 - 2017, Syoyo Fujita
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Syoyo Fujita nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// */
// // TinyEXR contains some OpenEXR code, which is licensed under ------------
// ///////////////////////////////////////////////////////////////////////////
// //
// // Copyright (c) 2002, Industrial Light & Magic, a division of Lucas
// // Digital Ltd. LLC
// //
// // All rights reserved.
// //
// // Redistribution and use in source and binary forms, with or without
// // modification, are permitted provided that the following conditions are
// // met:
// // *       Redistributions of source code must retain the above copyright
// // notice, this list of conditions and the following disclaimer.
// // *       Redistributions in binary form must reproduce the above
// // copyright notice, this list of conditions and the following disclaimer
// // in the documentation and/or other materials provided with the
// // distribution.
// // *       Neither the name of Industrial Light & Magic nor the names of
// // its contributors may be used to endorse or promote products derived
// // from this software without specific prior written permission.
// //
// // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// ///////////////////////////////////////////////////////////////////////////
// // End of OpenEXR license -------------------------------------------------
const EXR_MAGIC = 20000630;
/**
 * Gets the EXR header
 * @param dataView defines the data view to read from
 * @param offset defines the offset to start reading from
 * @returns the header
 */
function GetExrHeader(dataView, offset) {
    if (dataView.getUint32(0, true) != EXR_MAGIC) {
        throw new Error("Incorrect OpenEXR format");
    }
    const version = dataView.getUint8(4);
    const specData = dataView.getUint8(5); // fullMask
    const spec = {
        singleTile: !!(specData & 2),
        longName: !!(specData & 4),
        deepFormat: !!(specData & 8),
        multiPart: !!(specData & 16),
    };
    offset.value = 8;
    const headerData = {};
    let keepReading = true;
    while (keepReading) {
        const attributeName = (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_1__.ParseNullTerminatedString)(dataView.buffer, offset);
        if (!attributeName) {
            keepReading = false;
        }
        else {
            const attributeType = (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_1__.ParseNullTerminatedString)(dataView.buffer, offset);
            const attributeSize = (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_1__.ParseUint32)(dataView, offset);
            const attributeValue = (0,_exrLoader_core__WEBPACK_IMPORTED_MODULE_1__.ParseValue)(dataView, offset, attributeType, attributeSize);
            if (attributeValue === undefined) {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn(`Unknown header attribute type ${attributeType}'.`);
            }
            else {
                headerData[attributeName] = attributeValue;
            }
        }
    }
    if ((specData & ~0x04) != 0) {
        throw new Error("Unsupported file format");
    }
    return { version: version, spec: spec, ...headerData };
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

/***/ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.interfaces.js":
/*!***************************************************************************!*\
  !*** ../core/dist/Materials/Textures/Loaders/EXR/exrLoader.interfaces.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BITMAP_SIZE: () => (/* binding */ BITMAP_SIZE),
/* harmony export */   FLOAT32_SIZE: () => (/* binding */ FLOAT32_SIZE),
/* harmony export */   HUF_DECBITS: () => (/* binding */ HUF_DECBITS),
/* harmony export */   HUF_DECMASK: () => (/* binding */ HUF_DECMASK),
/* harmony export */   HUF_DECSIZE: () => (/* binding */ HUF_DECSIZE),
/* harmony export */   HUF_ENCBITS: () => (/* binding */ HUF_ENCBITS),
/* harmony export */   HUF_ENCSIZE: () => (/* binding */ HUF_ENCSIZE),
/* harmony export */   INT16_SIZE: () => (/* binding */ INT16_SIZE),
/* harmony export */   INT32_SIZE: () => (/* binding */ INT32_SIZE),
/* harmony export */   INT8_SIZE: () => (/* binding */ INT8_SIZE),
/* harmony export */   LONG_ZEROCODE_RUN: () => (/* binding */ LONG_ZEROCODE_RUN),
/* harmony export */   SHORTEST_LONG_RUN: () => (/* binding */ SHORTEST_LONG_RUN),
/* harmony export */   SHORT_ZEROCODE_RUN: () => (/* binding */ SHORT_ZEROCODE_RUN),
/* harmony export */   ULONG_SIZE: () => (/* binding */ ULONG_SIZE),
/* harmony export */   USHORT_RANGE: () => (/* binding */ USHORT_RANGE)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

const INT32_SIZE = 4;
const FLOAT32_SIZE = 4;
const INT8_SIZE = 1;
const INT16_SIZE = 2;
const ULONG_SIZE = 8;
const USHORT_RANGE = 1 << 16;
const BITMAP_SIZE = USHORT_RANGE >> 3;
const HUF_ENCBITS = 16;
const HUF_DECBITS = 14;
const HUF_ENCSIZE = (1 << HUF_ENCBITS) + 1;
const HUF_DECSIZE = 1 << HUF_DECBITS;
const HUF_DECMASK = HUF_DECSIZE - 1;
const SHORT_ZEROCODE_RUN = 59;
const LONG_ZEROCODE_RUN = 63;
const SHORTEST_LONG_RUN = 2 + LONG_ZEROCODE_RUN - SHORT_ZEROCODE_RUN;


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

/***/ "../core/dist/Materials/Textures/Loaders/exrTextureLoader.js":
/*!*******************************************************************!*\
  !*** ../core/dist/Materials/Textures/Loaders/exrTextureLoader.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReadExrDataAsync: () => (/* binding */ ReadExrDataAsync),
/* harmony export */   _ExrTextureLoader: () => (/* binding */ _ExrTextureLoader)
/* harmony export */ });
/* harmony import */ var _EXR_exrLoader_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EXR/exrLoader.header */ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.header.js");
/* harmony import */ var _EXR_exrLoader_decoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EXR/exrLoader.decoder */ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.decoder.js");
/* harmony import */ var _EXR_exrLoader_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EXR/exrLoader.configuration */ "../core/dist/Materials/Textures/Loaders/EXR/exrLoader.configuration.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * Inspired by https://github.com/sciecode/three.js/blob/dev/examples/jsm/loaders/EXRLoader.js
 * Referred to the original Industrial Light & Magic OpenEXR implementation and the TinyEXR / Syoyo Fujita
 * implementation.
 */
// /*
// Copyright (c) 2014 - 2017, Syoyo Fujita
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Syoyo Fujita nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// */
// // TinyEXR contains some OpenEXR code, which is licensed under ------------
// ///////////////////////////////////////////////////////////////////////////
// //
// // Copyright (c) 2002, Industrial Light & Magic, a division of Lucas
// // Digital Ltd. LLC
// //
// // All rights reserved.
// //
// // Redistribution and use in source and binary forms, with or without
// // modification, are permitted provided that the following conditions are
// // met:
// // *       Redistributions of source code must retain the above copyright
// // notice, this list of conditions and the following disclaimer.
// // *       Redistributions in binary form must reproduce the above
// // copyright notice, this list of conditions and the following disclaimer
// // in the documentation and/or other materials provided with the
// // distribution.
// // *       Neither the name of Industrial Light & Magic nor the names of
// // its contributors may be used to endorse or promote products derived
// // from this software without specific prior written permission.
// //
// // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// ///////////////////////////////////////////////////////////////////////////
// // End of OpenEXR license -------------------------------------------------
/**
 * Loader for .exr file format
 * @see [PIZ compression](https://playground.babylonjs.com/#4RN0VF#151)
 * @see [ZIP compression](https://playground.babylonjs.com/#4RN0VF#146)
 * @see [RLE compression](https://playground.babylonjs.com/#4RN0VF#149)
 * @see [PXR24 compression](https://playground.babylonjs.com/#4RN0VF#150)
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class _ExrTextureLoader {
    constructor() {
        /**
         * Defines whether the loader supports cascade loading the different faces.
         */
        this.supportCascades = false;
    }
    /**
     * Uploads the cube texture data to the WebGL texture. It has already been bound.
     * @param _data contains the texture data
     * @param _texture defines the BabylonJS internal texture
     * @param _createPolynomials will be true if polynomials have been requested
     * @param _onLoad defines the callback to trigger once the texture is ready
     * @param _onError defines the callback to trigger in case of error
     * Cube texture are not supported by .exr files
     */
    loadCubeData(_data, _texture, _createPolynomials, _onLoad, _onError) {
        // eslint-disable-next-line no-throw-literal
        throw ".exr not supported in Cube.";
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param callback defines the method to call once ready to upload
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    loadData(data, texture, callback) {
        const dataView = new DataView(data.buffer);
        const offset = { value: 0 };
        const header = (0,_EXR_exrLoader_header__WEBPACK_IMPORTED_MODULE_0__.GetExrHeader)(dataView, offset);
        (0,_EXR_exrLoader_decoder__WEBPACK_IMPORTED_MODULE_1__.CreateDecoderAsync)(header, dataView, offset, _EXR_exrLoader_configuration__WEBPACK_IMPORTED_MODULE_2__.ExrLoaderGlobalConfiguration.DefaultOutputType)
            // eslint-disable-next-line github/no-then
            .then((decoder) => {
            (0,_EXR_exrLoader_decoder__WEBPACK_IMPORTED_MODULE_1__.ScanData)(decoder, header, dataView, offset);
            // Updating texture
            const width = header.dataWindow.xMax - header.dataWindow.xMin + 1;
            const height = header.dataWindow.yMax - header.dataWindow.yMin + 1;
            callback(width, height, texture.generateMipMaps, false, () => {
                const engine = texture.getEngine();
                texture.format = header.format;
                texture.type = decoder.textureType;
                texture.invertY = false;
                texture._gammaSpace = !header.linearSpace;
                if (decoder.byteArray) {
                    engine._uploadDataToTextureDirectly(texture, decoder.byteArray, 0, 0, undefined, true);
                }
            });
        })
            // eslint-disable-next-line github/no-then
            .catch((error) => {
            core_Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error("Failed to load EXR texture: ", error);
        });
    }
}
/**
 * Read the EXR data from an ArrayBufferView asynchronously.
 * @param data ArrayBufferView containing the EXR data
 * @returns An object containing the width, height, and data of the EXR texture.
 */
async function ReadExrDataAsync(data) {
    const dataView = new DataView(data);
    const offset = { value: 0 };
    const header = (0,_EXR_exrLoader_header__WEBPACK_IMPORTED_MODULE_0__.GetExrHeader)(dataView, offset);
    try {
        const decoder = await (0,_EXR_exrLoader_decoder__WEBPACK_IMPORTED_MODULE_1__.CreateDecoderAsync)(header, dataView, offset, _EXR_exrLoader_configuration__WEBPACK_IMPORTED_MODULE_2__.EXROutputType.Float);
        (0,_EXR_exrLoader_decoder__WEBPACK_IMPORTED_MODULE_1__.ScanData)(decoder, header, dataView, offset);
        if (!decoder.byteArray) {
            core_Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error("Failed to decode EXR data: No byte array available.");
            return { width: 0, height: 0, data: null };
        }
        return {
            width: header.dataWindow.xMax - header.dataWindow.xMin + 1,
            height: header.dataWindow.yMax - header.dataWindow.yMin + 1,
            data: new Float32Array(decoder.byteArray),
        };
    }
    catch (error) {
        core_Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error("Failed to load EXR data: ", error);
    }
    return { width: 0, height: 0, data: null };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X01hdGVyaWFsc19UZXh0dXJlc19Mb2FkZXJzX2V4clRleHR1cmVMb2FkZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFFQTs7OztBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzbUJBO0FBQ0E7QUFDQTtBQUNBO0FBNkVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFFBOzs7O0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelZBO0FBQ0E7QUFFQTtBQUdBOzs7O0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUE4REE7QUE1REE7Ozs7Ozs7O0FBUUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvTWF0ZXJpYWxzL1RleHR1cmVzL0xvYWRlcnMvRVhSL2V4ckxvYWRlci5jb21wcmVzc2lvbi5odWYudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9NYXRlcmlhbHMvVGV4dHVyZXMvTG9hZGVycy9FWFIvZXhyTG9hZGVyLmNvbXByZXNzaW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvTWF0ZXJpYWxzL1RleHR1cmVzL0xvYWRlcnMvRVhSL2V4ckxvYWRlci5jb21wcmVzc2lvbi5ybGUudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9NYXRlcmlhbHMvVGV4dHVyZXMvTG9hZGVycy9FWFIvZXhyTG9hZGVyLmNvbmZpZ3VyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9NYXRlcmlhbHMvVGV4dHVyZXMvTG9hZGVycy9FWFIvZXhyTG9hZGVyLmNvcmUudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9NYXRlcmlhbHMvVGV4dHVyZXMvTG9hZGVycy9FWFIvZXhyTG9hZGVyLmRlY29kZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9NYXRlcmlhbHMvVGV4dHVyZXMvTG9hZGVycy9FWFIvZXhyTG9hZGVyLmhlYWRlci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01hdGVyaWFscy9UZXh0dXJlcy9Mb2FkZXJzL0VYUi9leHJMb2FkZXIuaW50ZXJmYWNlcy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01hdGVyaWFscy9UZXh0dXJlcy9Mb2FkZXJzL2V4clRleHR1cmVMb2FkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IERhdGFDdXJzb3IgfSBmcm9tIFwiLi9leHJMb2FkZXIuY29yZVwiO1xyXG5pbXBvcnQgeyBQYXJzZVVpbnQzMiwgUGFyc2VVaW50OEFycmF5IH0gZnJvbSBcIi4vZXhyTG9hZGVyLmNvcmVcIjtcclxuaW1wb3J0IHsgSFVGX0RFQ0JJVFMsIEhVRl9ERUNNQVNLLCBIVUZfREVDU0laRSwgSFVGX0VOQ1NJWkUsIExPTkdfWkVST0NPREVfUlVOLCBTSE9SVF9aRVJPQ09ERV9SVU4sIFNIT1JURVNUX0xPTkdfUlVOLCBVU0hPUlRfUkFOR0UgfSBmcm9tIFwiLi9leHJMb2FkZXIuaW50ZXJmYWNlc1wiO1xyXG5cclxuLyoqXHJcbiAqIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9zY2llY29kZS90aHJlZS5qcy9ibG9iL2Rldi9leGFtcGxlcy9qc20vbG9hZGVycy9FWFJMb2FkZXIuanNcclxuICogUmVmZXJyZWQgdG8gdGhlIG9yaWdpbmFsIEluZHVzdHJpYWwgTGlnaHQgJiBNYWdpYyBPcGVuRVhSIGltcGxlbWVudGF0aW9uIGFuZCB0aGUgVGlueUVYUiAvIFN5b3lvIEZ1aml0YVxyXG4gKiBpbXBsZW1lbnRhdGlvbi5cclxuICovXHJcblxyXG4vLyAvKlxyXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTQgLSAyMDE3LCBTeW95byBGdWppdGFcclxuLy8gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxyXG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuLy8gICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcclxuLy8gICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxyXG4vLyAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxyXG4vLyAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlXHJcbi8vICAgICAgIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbi8vICAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIFN5b3lvIEZ1aml0YSBub3IgdGhlXHJcbi8vICAgICAgIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzXHJcbi8vICAgICAgIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG5cclxuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EXHJcbi8vIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXHJcbi8vIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkVcclxuLy8gRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgPENPUFlSSUdIVCBIT0xERVI+IEJFIExJQUJMRSBGT1IgQU5ZXHJcbi8vIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTXHJcbi8vIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUztcclxuLy8gTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EXHJcbi8vIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXHJcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTXHJcbi8vIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxyXG4vLyAqL1xyXG5cclxuLy8gLy8gVGlueUVYUiBjb250YWlucyBzb21lIE9wZW5FWFIgY29kZSwgd2hpY2ggaXMgbGljZW5zZWQgdW5kZXIgLS0tLS0tLS0tLS0tXHJcblxyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gLy9cclxuLy8gLy8gQ29weXJpZ2h0IChjKSAyMDAyLCBJbmR1c3RyaWFsIExpZ2h0ICYgTWFnaWMsIGEgZGl2aXNpb24gb2YgTHVjYXNcclxuLy8gLy8gRGlnaXRhbCBMdGQuIExMQ1xyXG4vLyAvL1xyXG4vLyAvLyBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyAvL1xyXG4vLyAvLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcclxuLy8gLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxyXG4vLyAvLyBtZXQ6XHJcbi8vIC8vICogICAgICAgUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcclxuLy8gLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxyXG4vLyAvLyAqICAgICAgIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcclxuLy8gLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxyXG4vLyAvLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXHJcbi8vIC8vIGRpc3RyaWJ1dGlvbi5cclxuLy8gLy8gKiAgICAgICBOZWl0aGVyIHRoZSBuYW1lIG9mIEluZHVzdHJpYWwgTGlnaHQgJiBNYWdpYyBub3IgdGhlIG5hbWVzIG9mXHJcbi8vIC8vIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWRcclxuLy8gLy8gZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4vLyAvL1xyXG4vLyAvLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXHJcbi8vIC8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1RcclxuLy8gLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXHJcbi8vIC8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXHJcbi8vIC8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxyXG4vLyAvLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXHJcbi8vIC8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxyXG4vLyAvLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcclxuLy8gLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxyXG4vLyAvLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0VcclxuLy8gLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuLy8gLy9cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyAvLyBFbmQgb2YgT3BlbkVYUiBsaWNlbnNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IE5CSVRTID0gMTY7XHJcbmNvbnN0IEFfT0ZGU0VUID0gMSA8PCAoTkJJVFMgLSAxKTtcclxuY29uc3QgTU9EX01BU0sgPSAoMSA8PCBOQklUUykgLSAxO1xyXG5cclxuaW50ZXJmYWNlIElHZXRCaXRzIHtcclxuICAgIGw6IG51bWJlcjtcclxuICAgIGM6IG51bWJlcjtcclxuICAgIGxjOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJR2V0Q2hhciB7XHJcbiAgICBjOiBudW1iZXI7XHJcbiAgICBsYzogbnVtYmVyO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXZlcnNlTHV0RnJvbUJpdG1hcChiaXRtYXA6IFVpbnQ4QXJyYXksIGx1dDogVWludDE2QXJyYXkpIHtcclxuICAgIGxldCBrID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFVTSE9SVF9SQU5HRTsgKytpKSB7XHJcbiAgICAgICAgaWYgKGkgPT0gMCB8fCBiaXRtYXBbaSA+PiAzXSAmICgxIDw8IChpICYgNykpKSB7XHJcbiAgICAgICAgICAgIGx1dFtrKytdID0gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbiA9IGsgLSAxO1xyXG5cclxuICAgIHdoaWxlIChrIDwgVVNIT1JUX1JBTkdFKSB7XHJcbiAgICAgICAgbHV0W2srK10gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIdWZDbGVhckRlY1RhYmxlKGhkZWM6IEFycmF5PGFueT4pIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSFVGX0RFQ1NJWkU7IGkrKykge1xyXG4gICAgICAgIGhkZWNbaV0gPSB7fTtcclxuICAgICAgICBoZGVjW2ldLmxlbiA9IDA7XHJcbiAgICAgICAgaGRlY1tpXS5saXQgPSAwO1xyXG4gICAgICAgIGhkZWNbaV0ucCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdldEJpdHMobkJpdHM6IG51bWJlciwgYzogbnVtYmVyLCBsYzogbnVtYmVyLCBhcnJheTogVWludDhBcnJheSwgb2Zmc2V0OiBEYXRhQ3Vyc29yKTogSUdldEJpdHMge1xyXG4gICAgd2hpbGUgKGxjIDwgbkJpdHMpIHtcclxuICAgICAgICBjID0gKGMgPDwgOCkgfCBQYXJzZVVpbnQ4QXJyYXkoYXJyYXksIG9mZnNldCk7XHJcbiAgICAgICAgbGMgKz0gODtcclxuICAgIH1cclxuXHJcbiAgICBsYyAtPSBuQml0cztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGw6IChjID4+IGxjKSAmICgoMSA8PCBuQml0cykgLSAxKSxcclxuICAgICAgICBjLFxyXG4gICAgICAgIGxjLFxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gR2V0Q2hhcihjOiBudW1iZXIsIGxjOiBudW1iZXIsIGFycmF5OiBVaW50OEFycmF5LCBvZmZzZXQ6IERhdGFDdXJzb3IpOiBJR2V0Q2hhciB7XHJcbiAgICBjID0gKGMgPDwgOCkgfCBQYXJzZVVpbnQ4QXJyYXkoYXJyYXksIG9mZnNldCk7XHJcbiAgICBsYyArPSA4O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYyxcclxuICAgICAgICBsYyxcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdldENvZGUoXHJcbiAgICBwbzogbnVtYmVyLFxyXG4gICAgcmxjOiBudW1iZXIsXHJcbiAgICBjOiBudW1iZXIsXHJcbiAgICBsYzogbnVtYmVyLFxyXG4gICAgYXJyYXk6IFVpbnQ4QXJyYXksXHJcbiAgICBvZmZzZXQ6IERhdGFDdXJzb3IsXHJcbiAgICBvdXRCdWZmZXI6IFVpbnQxNkFycmF5LFxyXG4gICAgb3V0QnVmZmVyT2Zmc2V0OiBEYXRhQ3Vyc29yLFxyXG4gICAgb3V0QnVmZmVyRW5kT2Zmc2V0OiBudW1iZXJcclxuKTogTnVsbGFibGU8SUdldENoYXI+IHtcclxuICAgIGlmIChwbyA9PSBybGMpIHtcclxuICAgICAgICBpZiAobGMgPCA4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdjID0gR2V0Q2hhcihjLCBsYywgYXJyYXksIG9mZnNldCk7XHJcbiAgICAgICAgICAgIGMgPSBnYy5jO1xyXG4gICAgICAgICAgICBsYyA9IGdjLmxjO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGMgLT0gODtcclxuXHJcbiAgICAgICAgbGV0IGNzID0gYyA+PiBsYztcclxuICAgICAgICBjcyA9IG5ldyBVaW50OEFycmF5KFtjc10pWzBdO1xyXG5cclxuICAgICAgICBpZiAob3V0QnVmZmVyT2Zmc2V0LnZhbHVlICsgY3MgPiBvdXRCdWZmZXJFbmRPZmZzZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzID0gb3V0QnVmZmVyW291dEJ1ZmZlck9mZnNldC52YWx1ZSAtIDFdO1xyXG5cclxuICAgICAgICB3aGlsZSAoY3MtLSA+IDApIHtcclxuICAgICAgICAgICAgb3V0QnVmZmVyW291dEJ1ZmZlck9mZnNldC52YWx1ZSsrXSA9IHM7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChvdXRCdWZmZXJPZmZzZXQudmFsdWUgPCBvdXRCdWZmZXJFbmRPZmZzZXQpIHtcclxuICAgICAgICBvdXRCdWZmZXJbb3V0QnVmZmVyT2Zmc2V0LnZhbHVlKytdID0gcG87XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGMsIGxjIH07XHJcbn1cclxuXHJcbmNvbnN0IEh1ZlRhYmxlQnVmZmVyID0gbmV3IEFycmF5KDU5KTtcclxuXHJcbmZ1bmN0aW9uIEh1ZkNhbm9uaWNhbENvZGVUYWJsZShoY29kZTogQXJyYXk8YW55Pikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNTg7ICsraSkge1xyXG4gICAgICAgIEh1ZlRhYmxlQnVmZmVyW2ldID0gMDtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSFVGX0VOQ1NJWkU7ICsraSkge1xyXG4gICAgICAgIEh1ZlRhYmxlQnVmZmVyW2hjb2RlW2ldXSArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gNTg7IGkgPiAwOyAtLWkpIHtcclxuICAgICAgICBjb25zdCBuYyA9IChjICsgSHVmVGFibGVCdWZmZXJbaV0pID4+IDE7XHJcbiAgICAgICAgSHVmVGFibGVCdWZmZXJbaV0gPSBjO1xyXG4gICAgICAgIGMgPSBuYztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEhVRl9FTkNTSVpFOyArK2kpIHtcclxuICAgICAgICBjb25zdCBsID0gaGNvZGVbaV07XHJcbiAgICAgICAgaWYgKGwgPiAwKSB7XHJcbiAgICAgICAgICAgIGhjb2RlW2ldID0gbCB8IChIdWZUYWJsZUJ1ZmZlcltsXSsrIDw8IDYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSHVmVW5wYWNrRW5jVGFibGUoYXJyYXk6IFVpbnQ4QXJyYXksIG9mZnNldDogRGF0YUN1cnNvciwgbmk6IG51bWJlciwgaW06IG51bWJlciwgaU06IG51bWJlciwgaGNvZGU6IEFycmF5PGFueT4pIHtcclxuICAgIGNvbnN0IHAgPSBvZmZzZXQ7XHJcbiAgICBsZXQgYyA9IDA7XHJcbiAgICBsZXQgbGMgPSAwO1xyXG5cclxuICAgIGZvciAoOyBpbSA8PSBpTTsgaW0rKykge1xyXG4gICAgICAgIGlmIChwLnZhbHVlIC0gb2Zmc2V0LnZhbHVlID4gbmkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGdiID0gR2V0Qml0cyg2LCBjLCBsYywgYXJyYXksIHApO1xyXG5cclxuICAgICAgICBjb25zdCBsID0gZ2IubDtcclxuICAgICAgICBjID0gZ2IuYztcclxuICAgICAgICBsYyA9IGdiLmxjO1xyXG5cclxuICAgICAgICBoY29kZVtpbV0gPSBsO1xyXG5cclxuICAgICAgICBpZiAobCA9PSBMT05HX1pFUk9DT0RFX1JVTikge1xyXG4gICAgICAgICAgICBpZiAocC52YWx1ZSAtIG9mZnNldC52YWx1ZSA+IG5pKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBpbiBIdWZVbnBhY2tFbmNUYWJsZVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ2IgPSBHZXRCaXRzKDgsIGMsIGxjLCBhcnJheSwgcCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgemVydW4gPSBnYi5sICsgU0hPUlRFU1RfTE9OR19SVU47XHJcbiAgICAgICAgICAgIGMgPSBnYi5jO1xyXG4gICAgICAgICAgICBsYyA9IGdiLmxjO1xyXG5cclxuICAgICAgICAgICAgaWYgKGltICsgemVydW4gPiBpTSArIDEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIGluIEh1ZlVucGFja0VuY1RhYmxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAoemVydW4tLSkge1xyXG4gICAgICAgICAgICAgICAgaGNvZGVbaW0rK10gPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbS0tO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobCA+PSBTSE9SVF9aRVJPQ09ERV9SVU4pIHtcclxuICAgICAgICAgICAgbGV0IHplcnVuID0gbCAtIFNIT1JUX1pFUk9DT0RFX1JVTiArIDI7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW0gKyB6ZXJ1biA+IGlNICsgMSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgaW4gSHVmVW5wYWNrRW5jVGFibGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh6ZXJ1bi0tKSB7XHJcbiAgICAgICAgICAgICAgICBoY29kZVtpbSsrXSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltLS07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEh1ZkNhbm9uaWNhbENvZGVUYWJsZShoY29kZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEh1Zkxlbmd0aChjb2RlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBjb2RlICYgNjM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEh1ZkNvZGUoY29kZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gY29kZSA+PiA2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBIdWZCdWlsZERlY1RhYmxlKGhjb2RlOiBBcnJheTxhbnk+LCBpbTogbnVtYmVyLCBpTTogbnVtYmVyLCBoZGVjb2Q6IEFycmF5PGFueT4pIHtcclxuICAgIGZvciAoOyBpbSA8PSBpTTsgaW0rKykge1xyXG4gICAgICAgIGNvbnN0IGMgPSBIdWZDb2RlKGhjb2RlW2ltXSk7XHJcbiAgICAgICAgY29uc3QgbCA9IEh1Zkxlbmd0aChoY29kZVtpbV0pO1xyXG5cclxuICAgICAgICBpZiAoYyA+PiBsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdGFibGUgZW50cnlcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobCA+IEhVRl9ERUNCSVRTKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsID0gaGRlY29kW2MgPj4gKGwgLSBIVUZfREVDQklUUyldO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBsLmxlbikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0YWJsZSBlbnRyeVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGwubGl0Kys7XHJcblxyXG4gICAgICAgICAgICBpZiAocGwucCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHBsLnA7XHJcbiAgICAgICAgICAgICAgICBwbC5wID0gbmV3IEFycmF5KHBsLmxpdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbC5saXQgLSAxOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbC5wW2ldID0gcFtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBsLnAgPSBuZXcgQXJyYXkoMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBsLnBbcGwubGl0IC0gMV0gPSBpbTtcclxuICAgICAgICB9IGVsc2UgaWYgKGwpIHtcclxuICAgICAgICAgICAgbGV0IHBsT2Zmc2V0ID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxIDw8IChIVUZfREVDQklUUyAtIGwpOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbCA9IGhkZWNvZFsoYyA8PCAoSFVGX0RFQ0JJVFMgLSBsKSkgKyBwbE9mZnNldF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBsLmxlbiB8fCBwbC5wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0YWJsZSBlbnRyeVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwbC5sZW4gPSBsO1xyXG4gICAgICAgICAgICAgICAgcGwubGl0ID0gaW07XHJcblxyXG4gICAgICAgICAgICAgICAgcGxPZmZzZXQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gSHVmRGVjb2RlKFxyXG4gICAgZW5jb2RpbmdUYWJsZTogQXJyYXk8YW55PixcclxuICAgIGRlY29kaW5nVGFibGU6IEFycmF5PGFueT4sXHJcbiAgICBhcnJheTogVWludDhBcnJheSxcclxuICAgIG9mZnNldDogRGF0YUN1cnNvcixcclxuICAgIG5pOiBudW1iZXIsXHJcbiAgICBybGM6IG51bWJlcixcclxuICAgIG5vOiBudW1iZXIsXHJcbiAgICBvdXRCdWZmZXI6IFVpbnQxNkFycmF5LFxyXG4gICAgb3V0T2Zmc2V0OiBEYXRhQ3Vyc29yXHJcbikge1xyXG4gICAgbGV0IGMgPSAwO1xyXG4gICAgbGV0IGxjID0gMDtcclxuICAgIGNvbnN0IG91dEJ1ZmZlckVuZE9mZnNldCA9IG5vO1xyXG4gICAgY29uc3QgaW5PZmZzZXRFbmQgPSBNYXRoLnRydW5jKG9mZnNldC52YWx1ZSArIChuaSArIDcpIC8gOCk7XHJcblxyXG4gICAgd2hpbGUgKG9mZnNldC52YWx1ZSA8IGluT2Zmc2V0RW5kKSB7XHJcbiAgICAgICAgbGV0IGdjID0gR2V0Q2hhcihjLCBsYywgYXJyYXksIG9mZnNldCk7XHJcblxyXG4gICAgICAgIGMgPSBnYy5jO1xyXG4gICAgICAgIGxjID0gZ2MubGM7XHJcblxyXG4gICAgICAgIHdoaWxlIChsYyA+PSBIVUZfREVDQklUUykge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IChjID4+IChsYyAtIEhVRl9ERUNCSVRTKSkgJiBIVUZfREVDTUFTSztcclxuICAgICAgICAgICAgY29uc3QgcGwgPSBkZWNvZGluZ1RhYmxlW2luZGV4XTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwbC5sZW4pIHtcclxuICAgICAgICAgICAgICAgIGxjIC09IHBsLmxlbjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnQ29kZSA9IEdldENvZGUocGwubGl0LCBybGMsIGMsIGxjLCBhcnJheSwgb2Zmc2V0LCBvdXRCdWZmZXIsIG91dE9mZnNldCwgb3V0QnVmZmVyRW5kT2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgIGlmIChnQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGMgPSBnQ29kZS5jO1xyXG4gICAgICAgICAgICAgICAgICAgIGxjID0gZ0NvZGUubGM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBsLnApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJodWZEZWNvZGUgaXNzdWVzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBqO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBwbC5saXQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGwgPSBIdWZMZW5ndGgoZW5jb2RpbmdUYWJsZVtwbC5wW2pdXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChsYyA8IGwgJiYgb2Zmc2V0LnZhbHVlIDwgaW5PZmZzZXRFbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2MgPSBHZXRDaGFyKGMsIGxjLCBhcnJheSwgb2Zmc2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBnYy5jO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYyA9IGdjLmxjO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxjID49IGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEh1ZkNvZGUoZW5jb2RpbmdUYWJsZVtwbC5wW2pdXSkgPT0gKChjID4+IChsYyAtIGwpKSAmICgoMSA8PCBsKSAtIDEpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGMgLT0gbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnQ29kZSA9IEdldENvZGUocGwucFtqXSwgcmxjLCBjLCBsYywgYXJyYXksIG9mZnNldCwgb3V0QnVmZmVyLCBvdXRPZmZzZXQsIG91dEJ1ZmZlckVuZE9mZnNldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IGdDb2RlLmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGMgPSBnQ29kZS5sYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaiA9PSBwbC5saXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIdWZEZWNvZGUgaXNzdWVzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGkgPSAoOCAtIG5pKSAmIDc7XHJcblxyXG4gICAgYyA+Pj0gaTtcclxuICAgIGxjIC09IGk7XHJcblxyXG4gICAgd2hpbGUgKGxjID4gMCkge1xyXG4gICAgICAgIGNvbnN0IHBsID0gZGVjb2RpbmdUYWJsZVsoYyA8PCAoSFVGX0RFQ0JJVFMgLSBsYykpICYgSFVGX0RFQ01BU0tdO1xyXG5cclxuICAgICAgICBpZiAocGwubGVuKSB7XHJcbiAgICAgICAgICAgIGxjIC09IHBsLmxlbjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdDb2RlID0gR2V0Q29kZShwbC5saXQsIHJsYywgYywgbGMsIGFycmF5LCBvZmZzZXQsIG91dEJ1ZmZlciwgb3V0T2Zmc2V0LCBvdXRCdWZmZXJFbmRPZmZzZXQpO1xyXG4gICAgICAgICAgICBpZiAoZ0NvZGUpIHtcclxuICAgICAgICAgICAgICAgIGMgPSBnQ29kZS5jO1xyXG4gICAgICAgICAgICAgICAgbGMgPSBnQ29kZS5sYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkh1ZkRlY29kZSBpc3N1ZXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBmdW5jdGlvbiBIdWZVbmNvbXByZXNzKGFycmF5OiBVaW50OEFycmF5LCBkYXRhVmlldzogRGF0YVZpZXcsIG9mZnNldDogRGF0YUN1cnNvciwgbkNvbXByZXNzZWQ6IG51bWJlciwgb3V0QnVmZmVyOiBVaW50MTZBcnJheSwgblJhdzogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBvdXRPZmZzZXQ6IERhdGFDdXJzb3IgPSB7IHZhbHVlOiAwIH07XHJcbiAgICBjb25zdCBpbml0aWFsSW5PZmZzZXQgPSBvZmZzZXQudmFsdWU7XHJcblxyXG4gICAgY29uc3QgaW0gPSBQYXJzZVVpbnQzMihkYXRhVmlldywgb2Zmc2V0KTtcclxuICAgIGNvbnN0IGlNID0gUGFyc2VVaW50MzIoZGF0YVZpZXcsIG9mZnNldCk7XHJcblxyXG4gICAgb2Zmc2V0LnZhbHVlICs9IDQ7XHJcblxyXG4gICAgY29uc3QgbkJpdHMgPSBQYXJzZVVpbnQzMihkYXRhVmlldywgb2Zmc2V0KTtcclxuXHJcbiAgICBvZmZzZXQudmFsdWUgKz0gNDtcclxuXHJcbiAgICBpZiAoaW0gPCAwIHx8IGltID49IEhVRl9FTkNTSVpFIHx8IGlNIDwgMCB8fCBpTSA+PSBIVUZfRU5DU0laRSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIldyb25nIEhVRl9FTkNTSVpFXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZyZXEgPSBuZXcgQXJyYXkoSFVGX0VOQ1NJWkUpO1xyXG4gICAgY29uc3QgaGRlYyA9IG5ldyBBcnJheShIVUZfREVDU0laRSk7XHJcblxyXG4gICAgSHVmQ2xlYXJEZWNUYWJsZShoZGVjKTtcclxuXHJcbiAgICBjb25zdCBuaSA9IG5Db21wcmVzc2VkIC0gKG9mZnNldC52YWx1ZSAtIGluaXRpYWxJbk9mZnNldCk7XHJcblxyXG4gICAgSHVmVW5wYWNrRW5jVGFibGUoYXJyYXksIG9mZnNldCwgbmksIGltLCBpTSwgZnJlcSk7XHJcblxyXG4gICAgaWYgKG5CaXRzID4gOCAqIChuQ29tcHJlc3NlZCAtIChvZmZzZXQudmFsdWUgLSBpbml0aWFsSW5PZmZzZXQpKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIldyb25nIGh1ZlVuY29tcHJlc3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgSHVmQnVpbGREZWNUYWJsZShmcmVxLCBpbSwgaU0sIGhkZWMpO1xyXG5cclxuICAgIEh1ZkRlY29kZShmcmVxLCBoZGVjLCBhcnJheSwgb2Zmc2V0LCBuQml0cywgaU0sIG5SYXcsIG91dEJ1ZmZlciwgb3V0T2Zmc2V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gVUludDE2KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB2YWx1ZSAmIDB4ZmZmZjtcclxufVxyXG5cclxuZnVuY3Rpb24gSW50MTYodmFsdWU6IG51bWJlcikge1xyXG4gICAgY29uc3QgcmVmID0gVUludDE2KHZhbHVlKTtcclxuICAgIHJldHVybiByZWYgPiAweDdmZmYgPyByZWYgLSAweDEwMDAwIDogcmVmO1xyXG59XHJcblxyXG5mdW5jdGlvbiBXZGVjMTQobDogbnVtYmVyLCBoOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGxzID0gSW50MTYobCk7XHJcbiAgICBjb25zdCBocyA9IEludDE2KGgpO1xyXG5cclxuICAgIGNvbnN0IGhpID0gaHM7XHJcbiAgICBjb25zdCBhaSA9IGxzICsgKGhpICYgMSkgKyAoaGkgPj4gMSk7XHJcblxyXG4gICAgY29uc3QgYXMgPSBhaTtcclxuICAgIGNvbnN0IGJzID0gYWkgLSBoaTtcclxuXHJcbiAgICByZXR1cm4geyBhOiBhcywgYjogYnMgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gV2RlYzE2KGw6IG51bWJlciwgaDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBtID0gVUludDE2KGwpO1xyXG4gICAgY29uc3QgZCA9IFVJbnQxNihoKTtcclxuXHJcbiAgICBjb25zdCBiYiA9IChtIC0gKGQgPj4gMSkpICYgTU9EX01BU0s7XHJcbiAgICBjb25zdCBhYSA9IChkICsgYmIgLSBBX09GRlNFVCkgJiBNT0RfTUFTSztcclxuXHJcbiAgICByZXR1cm4geyBhOiBhYSwgYjogYmIgfTtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gV2F2MkRlY29kZShidWZmZXI6IFVpbnQxNkFycmF5LCBqOiBudW1iZXIsIG54OiBudW1iZXIsIG94OiBudW1iZXIsIG55OiBudW1iZXIsIG95OiBudW1iZXIsIG14OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHcxNCA9IG14IDwgMSA8PCAxNDtcclxuICAgIGNvbnN0IG4gPSBueCA+IG55ID8gbnkgOiBueDtcclxuICAgIGxldCBwID0gMTtcclxuICAgIGxldCBwMjtcclxuICAgIGxldCBweTtcclxuXHJcbiAgICB3aGlsZSAocCA8PSBuKSB7XHJcbiAgICAgICAgcCA8PD0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwID4+PSAxO1xyXG4gICAgcDIgPSBwO1xyXG4gICAgcCA+Pj0gMTtcclxuXHJcbiAgICB3aGlsZSAocCA+PSAxKSB7XHJcbiAgICAgICAgcHkgPSAwO1xyXG4gICAgICAgIGNvbnN0IGV5ID0gcHkgKyBveSAqIChueSAtIHAyKTtcclxuICAgICAgICBjb25zdCBveTEgPSBveSAqIHA7XHJcbiAgICAgICAgY29uc3Qgb3kyID0gb3kgKiBwMjtcclxuICAgICAgICBjb25zdCBveDEgPSBveCAqIHA7XHJcbiAgICAgICAgY29uc3Qgb3gyID0gb3ggKiBwMjtcclxuICAgICAgICBsZXQgaTAwLCBpMDEsIGkxMCwgaTExO1xyXG5cclxuICAgICAgICBmb3IgKDsgcHkgPD0gZXk7IHB5ICs9IG95Mikge1xyXG4gICAgICAgICAgICBsZXQgcHggPSBweTtcclxuICAgICAgICAgICAgY29uc3QgZXggPSBweSArIG94ICogKG54IC0gcDIpO1xyXG5cclxuICAgICAgICAgICAgZm9yICg7IHB4IDw9IGV4OyBweCArPSBveDIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAwMSA9IHB4ICsgb3gxO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcDEwID0gcHggKyBveTE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwMTEgPSBwMTAgKyBveDE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHcxNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBXZGVjMTQoYnVmZmVyW3B4ICsgal0sIGJ1ZmZlcltwMTAgKyBqXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkwMCA9IHJlc3VsdC5hO1xyXG4gICAgICAgICAgICAgICAgICAgIGkxMCA9IHJlc3VsdC5iO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBXZGVjMTQoYnVmZmVyW3AwMSArIGpdLCBidWZmZXJbcDExICsgal0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpMDEgPSByZXN1bHQuYTtcclxuICAgICAgICAgICAgICAgICAgICBpMTEgPSByZXN1bHQuYjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gV2RlYzE0KGkwMCwgaTAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyW3B4ICsgal0gPSByZXN1bHQuYTtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXJbcDAxICsgal0gPSByZXN1bHQuYjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gV2RlYzE0KGkxMCwgaTExKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyW3AxMCArIGpdID0gcmVzdWx0LmE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyW3AxMSArIGpdID0gcmVzdWx0LmI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBXZGVjMTYoYnVmZmVyW3B4ICsgal0sIGJ1ZmZlcltwMTAgKyBqXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkwMCA9IHJlc3VsdC5hO1xyXG4gICAgICAgICAgICAgICAgICAgIGkxMCA9IHJlc3VsdC5iO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBXZGVjMTYoYnVmZmVyW3AwMSArIGpdLCBidWZmZXJbcDExICsgal0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpMDEgPSByZXN1bHQuYTtcclxuICAgICAgICAgICAgICAgICAgICBpMTEgPSByZXN1bHQuYjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gV2RlYzE2KGkwMCwgaTAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyW3B4ICsgal0gPSByZXN1bHQuYTtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXJbcDAxICsgal0gPSByZXN1bHQuYjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gV2RlYzE2KGkxMCwgaTExKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyW3AxMCArIGpdID0gcmVzdWx0LmE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyW3AxMSArIGpdID0gcmVzdWx0LmI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChueCAmIHApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAxMCA9IHB4ICsgb3kxO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGlmICh3MTQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBXZGVjMTQoYnVmZmVyW3B4ICsgal0sIGJ1ZmZlcltwMTAgKyBqXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFdkZWMxNihidWZmZXJbcHggKyBqXSwgYnVmZmVyW3AxMCArIGpdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpMDAgPSByZXN1bHQuYTtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlcltwMTAgKyBqXSA9IHJlc3VsdC5iO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1ZmZlcltweCArIGpdID0gaTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobnkgJiBwKSB7XHJcbiAgICAgICAgICAgIGxldCBweCA9IHB5O1xyXG4gICAgICAgICAgICBjb25zdCBleCA9IHB5ICsgb3ggKiAobnggLSBwMik7XHJcblxyXG4gICAgICAgICAgICBmb3IgKDsgcHggPD0gZXg7IHB4ICs9IG94Mikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcDAxID0gcHggKyBveDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3MTQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBXZGVjMTQoYnVmZmVyW3B4ICsgal0sIGJ1ZmZlcltwMDEgKyBqXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFdkZWMxNihidWZmZXJbcHggKyBqXSwgYnVmZmVyW3AwMSArIGpdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpMDAgPSByZXN1bHQuYTtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlcltwMDEgKyBqXSA9IHJlc3VsdC5iO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1ZmZlcltweCArIGpdID0gaTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwMiA9IHA7XHJcbiAgICAgICAgcCA+Pj0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHk7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEFwcGx5THV0KGx1dDogVWludDE2QXJyYXksIGRhdGE6IFVpbnQxNkFycmF5LCBuRGF0YTogbnVtYmVyKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5EYXRhOyArK2kpIHtcclxuICAgICAgICBkYXRhW2ldID0gbHV0W2RhdGFbaV1dO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFwcGx5THV0LCBIdWZVbmNvbXByZXNzLCBSZXZlcnNlTHV0RnJvbUJpdG1hcCwgV2F2MkRlY29kZSB9IGZyb20gXCIuL2V4ckxvYWRlci5jb21wcmVzc2lvbi5odWZcIjtcclxuaW1wb3J0IHsgRGVjb2RlUnVuTGVuZ3RoIH0gZnJvbSBcIi4vZXhyTG9hZGVyLmNvbXByZXNzaW9uLnJsZVwiO1xyXG5pbXBvcnQgeyBJbnRlcmxlYXZlU2NhbGFyLCBQYXJzZVVpbnQxNiwgUGFyc2VVaW50MzIsIFBhcnNlVWludDgsIFByZWRpY3RvciB9IGZyb20gXCIuL2V4ckxvYWRlci5jb3JlXCI7XHJcbmltcG9ydCB7IEJJVE1BUF9TSVpFLCBJTlQxNl9TSVpFLCBVU0hPUlRfUkFOR0UsIHR5cGUgSUVYUkRlY29kZXIgfSBmcm9tIFwiLi9leHJMb2FkZXIuaW50ZXJmYWNlc1wiO1xyXG5cclxuLyoqXHJcbiAqIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9zY2llY29kZS90aHJlZS5qcy9ibG9iL2Rldi9leGFtcGxlcy9qc20vbG9hZGVycy9FWFJMb2FkZXIuanNcclxuICogUmVmZXJyZWQgdG8gdGhlIG9yaWdpbmFsIEluZHVzdHJpYWwgTGlnaHQgJiBNYWdpYyBPcGVuRVhSIGltcGxlbWVudGF0aW9uIGFuZCB0aGUgVGlueUVYUiAvIFN5b3lvIEZ1aml0YVxyXG4gKiBpbXBsZW1lbnRhdGlvbi5cclxuICovXHJcblxyXG4vLyAvKlxyXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTQgLSAyMDE3LCBTeW95byBGdWppdGFcclxuLy8gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxyXG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuLy8gICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcclxuLy8gICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxyXG4vLyAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxyXG4vLyAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlXHJcbi8vICAgICAgIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbi8vICAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIFN5b3lvIEZ1aml0YSBub3IgdGhlXHJcbi8vICAgICAgIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzXHJcbi8vICAgICAgIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG5cclxuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EXHJcbi8vIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXHJcbi8vIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkVcclxuLy8gRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgPENPUFlSSUdIVCBIT0xERVI+IEJFIExJQUJMRSBGT1IgQU5ZXHJcbi8vIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTXHJcbi8vIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUztcclxuLy8gTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EXHJcbi8vIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXHJcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTXHJcbi8vIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxyXG4vLyAqL1xyXG5cclxuLy8gLy8gVGlueUVYUiBjb250YWlucyBzb21lIE9wZW5FWFIgY29kZSwgd2hpY2ggaXMgbGljZW5zZWQgdW5kZXIgLS0tLS0tLS0tLS0tXHJcblxyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gLy9cclxuLy8gLy8gQ29weXJpZ2h0IChjKSAyMDAyLCBJbmR1c3RyaWFsIExpZ2h0ICYgTWFnaWMsIGEgZGl2aXNpb24gb2YgTHVjYXNcclxuLy8gLy8gRGlnaXRhbCBMdGQuIExMQ1xyXG4vLyAvL1xyXG4vLyAvLyBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyAvL1xyXG4vLyAvLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcclxuLy8gLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxyXG4vLyAvLyBtZXQ6XHJcbi8vIC8vICogICAgICAgUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcclxuLy8gLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxyXG4vLyAvLyAqICAgICAgIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcclxuLy8gLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxyXG4vLyAvLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXHJcbi8vIC8vIGRpc3RyaWJ1dGlvbi5cclxuLy8gLy8gKiAgICAgICBOZWl0aGVyIHRoZSBuYW1lIG9mIEluZHVzdHJpYWwgTGlnaHQgJiBNYWdpYyBub3IgdGhlIG5hbWVzIG9mXHJcbi8vIC8vIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWRcclxuLy8gLy8gZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4vLyAvL1xyXG4vLyAvLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXHJcbi8vIC8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1RcclxuLy8gLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXHJcbi8vIC8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXHJcbi8vIC8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxyXG4vLyAvLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXHJcbi8vIC8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxyXG4vLyAvLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcclxuLy8gLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxyXG4vLyAvLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0VcclxuLy8gLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuLy8gLy9cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyAvLyBFbmQgb2YgT3BlbkVYUiBsaWNlbnNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIEZGbGF0ZSBhY2Nlc3NcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5kZWNsYXJlIGNvbnN0IGZmbGF0ZTogYW55O1xyXG5cclxuLyoqXHJcbiAqIE5vIGNvbXByZXNzaW9uXHJcbiAqIEBwYXJhbSBkZWNvZGVyIGRlZmluZXMgdGhlIGRlY29kZXIgdG8gdXNlXHJcbiAqIEByZXR1cm5zIGEgZGVjb21wcmVzc2VkIGRhdGEgdmlld1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFVuY29tcHJlc3NSQVcoZGVjb2RlcjogSUVYUkRlY29kZXIpOiBEYXRhVmlldyB7XHJcbiAgICByZXR1cm4gbmV3IERhdGFWaWV3KGRlY29kZXIuYXJyYXkuYnVmZmVyLCBkZWNvZGVyLm9mZnNldC52YWx1ZSwgZGVjb2Rlci5zaXplKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJMRSBjb21wcmVzc2lvblxyXG4gKiBAcGFyYW0gZGVjb2RlciBkZWZpbmVzIHRoZSBkZWNvZGVyIHRvIHVzZVxyXG4gKiBAcmV0dXJucyBhIGRlY29tcHJlc3NlZCBkYXRhIHZpZXdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBVbmNvbXByZXNzUkxFKGRlY29kZXI6IElFWFJEZWNvZGVyKTogRGF0YVZpZXcge1xyXG4gICAgY29uc3QgY29tcHJlc3NlZCA9IGRlY29kZXIudmlld2VyLmJ1ZmZlci5zbGljZShkZWNvZGVyLm9mZnNldC52YWx1ZSwgZGVjb2Rlci5vZmZzZXQudmFsdWUgKyBkZWNvZGVyLnNpemUpO1xyXG5cclxuICAgIGNvbnN0IHJhd0J1ZmZlciA9IG5ldyBVaW50OEFycmF5KERlY29kZVJ1bkxlbmd0aChjb21wcmVzc2VkKSk7XHJcbiAgICBjb25zdCB0bXBCdWZmZXIgPSBuZXcgVWludDhBcnJheShyYXdCdWZmZXIubGVuZ3RoKTtcclxuXHJcbiAgICBQcmVkaWN0b3IocmF3QnVmZmVyKTtcclxuXHJcbiAgICBJbnRlcmxlYXZlU2NhbGFyKHJhd0J1ZmZlciwgdG1wQnVmZmVyKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IERhdGFWaWV3KHRtcEJ1ZmZlci5idWZmZXIpO1xyXG59XHJcblxyXG4vKipcclxuICogWmlwIGNvbXByZXNzaW9uXHJcbiAqIEBwYXJhbSBkZWNvZGVyIGRlZmluZXMgdGhlIGRlY29kZXIgdG8gdXNlXHJcbiAqIEByZXR1cm5zIGEgZGVjb21wcmVzc2VkIGRhdGEgdmlld1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFVuY29tcHJlc3NaSVAoZGVjb2RlcjogSUVYUkRlY29kZXIpOiBEYXRhVmlldyB7XHJcbiAgICBjb25zdCBjb21wcmVzc2VkID0gZGVjb2Rlci5hcnJheS5zbGljZShkZWNvZGVyLm9mZnNldC52YWx1ZSwgZGVjb2Rlci5vZmZzZXQudmFsdWUgKyBkZWNvZGVyLnNpemUpO1xyXG5cclxuICAgIGNvbnN0IHJhd0J1ZmZlciA9IGZmbGF0ZS51bnpsaWJTeW5jKGNvbXByZXNzZWQpO1xyXG4gICAgY29uc3QgdG1wQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkocmF3QnVmZmVyLmxlbmd0aCk7XHJcblxyXG4gICAgUHJlZGljdG9yKHJhd0J1ZmZlcik7XHJcblxyXG4gICAgSW50ZXJsZWF2ZVNjYWxhcihyYXdCdWZmZXIsIHRtcEJ1ZmZlcik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBEYXRhVmlldyh0bXBCdWZmZXIuYnVmZmVyKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBYUiBjb21wcmVzc2lvblxyXG4gKiBAcGFyYW0gZGVjb2RlciBkZWZpbmVzIHRoZSBkZWNvZGVyIHRvIHVzZVxyXG4gKiBAcmV0dXJucyBhIGRlY29tcHJlc3NlZCBkYXRhIHZpZXdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBVbmNvbXByZXNzUFhSKGRlY29kZXI6IElFWFJEZWNvZGVyKTogRGF0YVZpZXcge1xyXG4gICAgY29uc3QgY29tcHJlc3NlZCA9IGRlY29kZXIuYXJyYXkuc2xpY2UoZGVjb2Rlci5vZmZzZXQudmFsdWUsIGRlY29kZXIub2Zmc2V0LnZhbHVlICsgZGVjb2Rlci5zaXplKTtcclxuXHJcbiAgICBjb25zdCByYXdCdWZmZXIgPSBmZmxhdGUudW56bGliU3luYyhjb21wcmVzc2VkKTtcclxuXHJcbiAgICBjb25zdCBzeiA9IGRlY29kZXIubGluZXMgKiBkZWNvZGVyLmNoYW5uZWxzICogZGVjb2Rlci53aWR0aDtcclxuICAgIGNvbnN0IHRtcEJ1ZmZlciA9IGRlY29kZXIudHlwZSA9PSAxID8gbmV3IFVpbnQxNkFycmF5KHN6KSA6IG5ldyBVaW50MzJBcnJheShzeik7XHJcblxyXG4gICAgbGV0IHRtcEJ1ZmZlckVuZCA9IDA7XHJcbiAgICBsZXQgd3JpdGVQdHIgPSAwO1xyXG4gICAgY29uc3QgcHRyID0gbmV3IEFycmF5KDQpO1xyXG5cclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgZGVjb2Rlci5saW5lczsgeSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBkZWNvZGVyLmNoYW5uZWxzOyBjKyspIHtcclxuICAgICAgICAgICAgbGV0IHBpeGVsID0gMDtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZGVjb2Rlci50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcHRyWzBdID0gdG1wQnVmZmVyRW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHB0clsxXSA9IHB0clswXSArIGRlY29kZXIud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wQnVmZmVyRW5kID0gcHRyWzFdICsgZGVjb2Rlci53aWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkZWNvZGVyLndpZHRoOyArK2opIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlmZiA9IChyYXdCdWZmZXJbcHRyWzBdKytdIDw8IDgpIHwgcmF3QnVmZmVyW3B0clsxXSsrXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsICs9IGRpZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBCdWZmZXJbd3JpdGVQdHJdID0gcGl4ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRlUHRyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgcHRyWzBdID0gdG1wQnVmZmVyRW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHB0clsxXSA9IHB0clswXSArIGRlY29kZXIud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgcHRyWzJdID0gcHRyWzFdICsgZGVjb2Rlci53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICB0bXBCdWZmZXJFbmQgPSBwdHJbMl0gKyBkZWNvZGVyLndpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRlY29kZXIud2lkdGg7ICsraikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gKHJhd0J1ZmZlcltwdHJbMF0rK10gPDwgMjQpIHwgKHJhd0J1ZmZlcltwdHJbMV0rK10gPDwgMTYpIHwgKHJhd0J1ZmZlcltwdHJbMl0rK10gPDwgOCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbCArPSBkaWZmO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wQnVmZmVyW3dyaXRlUHRyXSA9IHBpeGVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0ZVB0cisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBEYXRhVmlldyh0bXBCdWZmZXIuYnVmZmVyKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBJWiBjb21wcmVzc2lvblxyXG4gKiBAcGFyYW0gZGVjb2RlciBkZWZpbmVzIHRoZSBkZWNvZGVyIHRvIHVzZVxyXG4gKiBAcmV0dXJucyBhIGRlY29tcHJlc3NlZCBkYXRhIHZpZXdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBVbmNvbXByZXNzUElaKGRlY29kZXI6IElFWFJEZWNvZGVyKTogRGF0YVZpZXcge1xyXG4gICAgY29uc3QgaW5EYXRhVmlldyA9IGRlY29kZXIudmlld2VyO1xyXG4gICAgY29uc3QgaW5PZmZzZXQgPSB7IHZhbHVlOiBkZWNvZGVyLm9mZnNldC52YWx1ZSB9O1xyXG5cclxuICAgIGNvbnN0IG91dEJ1ZmZlciA9IG5ldyBVaW50MTZBcnJheShkZWNvZGVyLndpZHRoICogZGVjb2Rlci5zY2FubGluZUJsb2NrU2l6ZSAqIChkZWNvZGVyLmNoYW5uZWxzICogZGVjb2Rlci50eXBlKSk7XHJcbiAgICBjb25zdCBiaXRtYXAgPSBuZXcgVWludDhBcnJheShCSVRNQVBfU0laRSk7XHJcblxyXG4gICAgLy8gU2V0dXAgY2hhbm5lbCBpbmZvXHJcbiAgICBsZXQgb3V0QnVmZmVyRW5kID0gMDtcclxuICAgIGNvbnN0IHBpekNoYW5uZWxEYXRhID0gbmV3IEFycmF5KGRlY29kZXIuY2hhbm5lbHMpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWNvZGVyLmNoYW5uZWxzOyBpKyspIHtcclxuICAgICAgICBwaXpDaGFubmVsRGF0YVtpXSA9IHt9O1xyXG4gICAgICAgIHBpekNoYW5uZWxEYXRhW2ldW1wic3RhcnRcIl0gPSBvdXRCdWZmZXJFbmQ7XHJcbiAgICAgICAgcGl6Q2hhbm5lbERhdGFbaV1bXCJlbmRcIl0gPSBwaXpDaGFubmVsRGF0YVtpXVtcInN0YXJ0XCJdO1xyXG4gICAgICAgIHBpekNoYW5uZWxEYXRhW2ldW1wibnhcIl0gPSBkZWNvZGVyLndpZHRoO1xyXG4gICAgICAgIHBpekNoYW5uZWxEYXRhW2ldW1wibnlcIl0gPSBkZWNvZGVyLmxpbmVzO1xyXG4gICAgICAgIHBpekNoYW5uZWxEYXRhW2ldW1wic2l6ZVwiXSA9IGRlY29kZXIudHlwZTtcclxuXHJcbiAgICAgICAgb3V0QnVmZmVyRW5kICs9IHBpekNoYW5uZWxEYXRhW2ldLm54ICogcGl6Q2hhbm5lbERhdGFbaV0ubnkgKiBwaXpDaGFubmVsRGF0YVtpXS5zaXplO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlYWQgcmFuZ2UgY29tcHJlc3Npb24gZGF0YVxyXG4gICAgY29uc3QgbWluTm9uWmVybyA9IFBhcnNlVWludDE2KGluRGF0YVZpZXcsIGluT2Zmc2V0KTtcclxuICAgIGNvbnN0IG1heE5vblplcm8gPSBQYXJzZVVpbnQxNihpbkRhdGFWaWV3LCBpbk9mZnNldCk7XHJcblxyXG4gICAgaWYgKG1heE5vblplcm8gPj0gQklUTUFQX1NJWkUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBQSVpfQ09NUFJFU1NJT04gQklUTUFQX1NJWkVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1pbk5vblplcm8gPD0gbWF4Tm9uWmVybykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4Tm9uWmVybyAtIG1pbk5vblplcm8gKyAxOyBpKyspIHtcclxuICAgICAgICAgICAgYml0bWFwW2kgKyBtaW5Ob25aZXJvXSA9IFBhcnNlVWludDgoaW5EYXRhVmlldywgaW5PZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXZlcnNlIExVVFxyXG4gICAgY29uc3QgbHV0ID0gbmV3IFVpbnQxNkFycmF5KFVTSE9SVF9SQU5HRSk7XHJcbiAgICBjb25zdCBtYXhWYWx1ZSA9IFJldmVyc2VMdXRGcm9tQml0bWFwKGJpdG1hcCwgbHV0KTtcclxuXHJcbiAgICBjb25zdCBsZW5ndGggPSBQYXJzZVVpbnQzMihpbkRhdGFWaWV3LCBpbk9mZnNldCk7XHJcblxyXG4gICAgLy8gSHVmZm1hbiBkZWNvZGluZ1xyXG4gICAgSHVmVW5jb21wcmVzcyhkZWNvZGVyLmFycmF5LCBpbkRhdGFWaWV3LCBpbk9mZnNldCwgbGVuZ3RoLCBvdXRCdWZmZXIsIG91dEJ1ZmZlckVuZCk7XHJcblxyXG4gICAgLy8gV2F2ZWxldCBkZWNvZGluZ1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWNvZGVyLmNoYW5uZWxzOyArK2kpIHtcclxuICAgICAgICBjb25zdCBjZCA9IHBpekNoYW5uZWxEYXRhW2ldO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBpekNoYW5uZWxEYXRhW2ldLnNpemU7ICsraikge1xyXG4gICAgICAgICAgICBXYXYyRGVjb2RlKG91dEJ1ZmZlciwgY2Quc3RhcnQgKyBqLCBjZC5ueCwgY2Quc2l6ZSwgY2QubnksIGNkLm54ICogY2Quc2l6ZSwgbWF4VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBFeHBhbmQgdGhlIHBpeGVsIGRhdGEgdG8gdGhlaXIgb3JpZ2luYWwgcmFuZ2VcclxuICAgIEFwcGx5THV0KGx1dCwgb3V0QnVmZmVyLCBvdXRCdWZmZXJFbmQpO1xyXG5cclxuICAgIC8vIFJlYXJyYW5nZSB0aGUgcGl4ZWwgZGF0YSBpbnRvIHRoZSBmb3JtYXQgZXhwZWN0ZWQgYnkgdGhlIGNhbGxlci5cclxuICAgIGxldCB0bXBPZmZzZXQgPSAwO1xyXG4gICAgY29uc3QgdG1wQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkob3V0QnVmZmVyLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgZGVjb2Rlci5saW5lczsgeSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBkZWNvZGVyLmNoYW5uZWxzOyBjKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2QgPSBwaXpDaGFubmVsRGF0YVtjXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG4gPSBjZC5ueCAqIGNkLnNpemU7XHJcbiAgICAgICAgICAgIGNvbnN0IGNwID0gbmV3IFVpbnQ4QXJyYXkob3V0QnVmZmVyLmJ1ZmZlciwgY2QuZW5kICogSU5UMTZfU0laRSwgbiAqIElOVDE2X1NJWkUpO1xyXG5cclxuICAgICAgICAgICAgdG1wQnVmZmVyLnNldChjcCwgdG1wT2Zmc2V0KTtcclxuICAgICAgICAgICAgdG1wT2Zmc2V0ICs9IG4gKiBJTlQxNl9TSVpFO1xyXG4gICAgICAgICAgICBjZC5lbmQgKz0gbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBEYXRhVmlldyh0bXBCdWZmZXIuYnVmZmVyKTtcclxufVxyXG4iLCIvKipcclxuICogSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL3NjaWVjb2RlL3RocmVlLmpzL2Jsb2IvZGV2L2V4YW1wbGVzL2pzbS9sb2FkZXJzL0VYUkxvYWRlci5qc1xyXG4gKiBSZWZlcnJlZCB0byB0aGUgb3JpZ2luYWwgSW5kdXN0cmlhbCBMaWdodCAmIE1hZ2ljIE9wZW5FWFIgaW1wbGVtZW50YXRpb24gYW5kIHRoZSBUaW55RVhSIC8gU3lveW8gRnVqaXRhXHJcbiAqIGltcGxlbWVudGF0aW9uLlxyXG4gKi9cclxuXHJcbi8vIC8qXHJcbi8vIENvcHlyaWdodCAoYykgMjAxNCAtIDIwMTcsIFN5b3lvIEZ1aml0YVxyXG4vLyBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XHJcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4vLyAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxyXG4vLyAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbi8vICAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XHJcbi8vICAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGVcclxuLy8gICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuLy8gICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgU3lveW8gRnVqaXRhIG5vciB0aGVcclxuLy8gICAgICAgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHNcclxuLy8gICAgICAgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcblxyXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkRcclxuLy8gQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcclxuLy8gV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRVxyXG4vLyBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCA8Q09QWVJJR0hUIEhPTERFUj4gQkUgTElBQkxFIEZPUiBBTllcclxuLy8gRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVNcclxuLy8gKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTO1xyXG4vLyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkRcclxuLy8gT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcclxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVNcclxuLy8gU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbi8vICovXHJcblxyXG4vLyAvLyBUaW55RVhSIGNvbnRhaW5zIHNvbWUgT3BlbkVYUiBjb2RlLCB3aGljaCBpcyBsaWNlbnNlZCB1bmRlciAtLS0tLS0tLS0tLS1cclxuXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyAvL1xyXG4vLyAvLyBDb3B5cmlnaHQgKGMpIDIwMDIsIEluZHVzdHJpYWwgTGlnaHQgJiBNYWdpYywgYSBkaXZpc2lvbiBvZiBMdWNhc1xyXG4vLyAvLyBEaWdpdGFsIEx0ZC4gTExDXHJcbi8vIC8vXHJcbi8vIC8vIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIC8vXHJcbi8vIC8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxyXG4vLyAvLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXHJcbi8vIC8vIG1ldDpcclxuLy8gLy8gKiAgICAgICBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxyXG4vLyAvLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbi8vIC8vICogICAgICAgUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxyXG4vLyAvLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXHJcbi8vIC8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcclxuLy8gLy8gZGlzdHJpYnV0aW9uLlxyXG4vLyAvLyAqICAgICAgIE5laXRoZXIgdGhlIG5hbWUgb2YgSW5kdXN0cmlhbCBMaWdodCAmIE1hZ2ljIG5vciB0aGUgbmFtZXMgb2ZcclxuLy8gLy8gaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZFxyXG4vLyAvLyBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbi8vIC8vXHJcbi8vIC8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcclxuLy8gLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxyXG4vLyAvLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcclxuLy8gLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcclxuLy8gLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXHJcbi8vIC8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1RcclxuLy8gLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXHJcbi8vIC8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxyXG4vLyAvLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXHJcbi8vIC8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxyXG4vLyAvLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxyXG4vLyAvL1xyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIC8vIEVuZCBvZiBPcGVuRVhSIGxpY2Vuc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRGVjb2RlUnVuTGVuZ3RoKHNvdXJjZTogQXJyYXlCdWZmZXIpIHtcclxuICAgIGxldCBzaXplID0gc291cmNlLmJ5dGVMZW5ndGg7XHJcbiAgICBjb25zdCBvdXQgPSBbXTtcclxuICAgIGxldCBwID0gMDtcclxuXHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRGF0YVZpZXcoc291cmNlKTtcclxuXHJcbiAgICB3aGlsZSAoc2l6ZSA+IDApIHtcclxuICAgICAgICBjb25zdCBsID0gcmVhZGVyLmdldEludDgocCsrKTtcclxuXHJcbiAgICAgICAgaWYgKGwgPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gLWw7XHJcbiAgICAgICAgICAgIHNpemUgLT0gY291bnQgKyAxO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBvdXQucHVzaChyZWFkZXIuZ2V0VWludDgocCsrKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGw7XHJcbiAgICAgICAgICAgIHNpemUgLT0gMjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVhZGVyLmdldFVpbnQ4KHArKyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ICsgMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBvdXQucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG91dDtcclxufVxyXG4iLCJleHBvcnQgZW51bSBFWFJPdXRwdXRUeXBlIHtcclxuICAgIEZsb2F0ID0gMCxcclxuICAgIEhhbGZGbG9hdCA9IDEsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB1c2VkIHRvIHN0b3JlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGV4ciBsb2FkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBFeHJMb2FkZXJHbG9iYWxDb25maWd1cmF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgZGVmYXVsdCBvdXRwdXQgdHlwZSB0byB1c2UgKEhhbGYgZmxvYXQgYnkgZGVmYXVsdClcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEZWZhdWx0T3V0cHV0VHlwZTogRVhST3V0cHV0VHlwZSA9IEVYUk91dHB1dFR5cGUuSGFsZkZsb2F0O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcmwgdG8gdXNlIHRvIGxvYWQgdGhlIGZmbGF0ZSBsaWJyYXJ5IChmb3IgemlwIGRlY29tcHJlc3Npb24pXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIHB1YmxpYyBzdGF0aWMgRkZMQVRFVXJsID0gXCJodHRwczovL3VucGtnLmNvbS9mZmxhdGVAMC44LjJcIjtcclxufVxyXG4iLCJpbXBvcnQgeyBDbGFtcCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguc2NhbGFyLmZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGTE9BVDMyX1NJWkUsIElOVDE2X1NJWkUsIElOVDMyX1NJWkUsIElOVDhfU0laRSwgVUxPTkdfU0laRSB9IGZyb20gXCIuL2V4ckxvYWRlci5pbnRlcmZhY2VzXCI7XHJcblxyXG4vKipcclxuICogSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL3NjaWVjb2RlL3RocmVlLmpzL2Jsb2IvZGV2L2V4YW1wbGVzL2pzbS9sb2FkZXJzL0VYUkxvYWRlci5qc1xyXG4gKiBSZWZlcnJlZCB0byB0aGUgb3JpZ2luYWwgSW5kdXN0cmlhbCBMaWdodCAmIE1hZ2ljIE9wZW5FWFIgaW1wbGVtZW50YXRpb24gYW5kIHRoZSBUaW55RVhSIC8gU3lveW8gRnVqaXRhXHJcbiAqIGltcGxlbWVudGF0aW9uLlxyXG4gKi9cclxuXHJcbi8vIC8qXHJcbi8vIENvcHlyaWdodCAoYykgMjAxNCAtIDIwMTcsIFN5b3lvIEZ1aml0YVxyXG4vLyBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XHJcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4vLyAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxyXG4vLyAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbi8vICAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XHJcbi8vICAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGVcclxuLy8gICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuLy8gICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgU3lveW8gRnVqaXRhIG5vciB0aGVcclxuLy8gICAgICAgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHNcclxuLy8gICAgICAgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcblxyXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkRcclxuLy8gQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcclxuLy8gV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRVxyXG4vLyBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCA8Q09QWVJJR0hUIEhPTERFUj4gQkUgTElBQkxFIEZPUiBBTllcclxuLy8gRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVNcclxuLy8gKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTO1xyXG4vLyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkRcclxuLy8gT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcclxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVNcclxuLy8gU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbi8vICovXHJcblxyXG4vLyAvLyBUaW55RVhSIGNvbnRhaW5zIHNvbWUgT3BlbkVYUiBjb2RlLCB3aGljaCBpcyBsaWNlbnNlZCB1bmRlciAtLS0tLS0tLS0tLS1cclxuXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyAvL1xyXG4vLyAvLyBDb3B5cmlnaHQgKGMpIDIwMDIsIEluZHVzdHJpYWwgTGlnaHQgJiBNYWdpYywgYSBkaXZpc2lvbiBvZiBMdWNhc1xyXG4vLyAvLyBEaWdpdGFsIEx0ZC4gTExDXHJcbi8vIC8vXHJcbi8vIC8vIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIC8vXHJcbi8vIC8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxyXG4vLyAvLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXHJcbi8vIC8vIG1ldDpcclxuLy8gLy8gKiAgICAgICBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxyXG4vLyAvLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbi8vIC8vICogICAgICAgUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxyXG4vLyAvLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXHJcbi8vIC8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcclxuLy8gLy8gZGlzdHJpYnV0aW9uLlxyXG4vLyAvLyAqICAgICAgIE5laXRoZXIgdGhlIG5hbWUgb2YgSW5kdXN0cmlhbCBMaWdodCAmIE1hZ2ljIG5vciB0aGUgbmFtZXMgb2ZcclxuLy8gLy8gaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZFxyXG4vLyAvLyBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbi8vIC8vXHJcbi8vIC8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcclxuLy8gLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxyXG4vLyAvLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcclxuLy8gLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcclxuLy8gLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXHJcbi8vIC8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1RcclxuLy8gLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXHJcbi8vIC8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxyXG4vLyAvLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXHJcbi8vIC8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxyXG4vLyAvLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxyXG4vLyAvL1xyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIC8vIEVuZCBvZiBPcGVuRVhSIGxpY2Vuc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGVudW0gQ29tcHJlc3Npb25Db2RlcyB7XHJcbiAgICBOT19DT01QUkVTU0lPTixcclxuICAgIFJMRV9DT01QUkVTU0lPTixcclxuICAgIFpJUFNfQ09NUFJFU1NJT04sXHJcbiAgICBaSVBfQ09NUFJFU1NJT04sXHJcbiAgICBQSVpfQ09NUFJFU1NJT04sXHJcbiAgICBQWFIyNF9DT01QUkVTU0lPTixcclxufVxyXG5cclxuZW51bSBMaW5lT3JkZXJzIHtcclxuICAgIElOQ1JFQVNJTkdfWSxcclxuICAgIERFQ1JFQVNJTkdfWSxcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB1c2VkIHRvIGRlZmluZSB0aGUgY3Vyc29yIHBvc2l0aW9uIGluIHRoZSBkYXRhXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUN1cnNvciB7XHJcbiAgICAvKiogQ3Vyb3NyIHBvc2l0aW9uICovXHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBUYWJsZXMgPSBHZW5lcmF0ZVRhYmxlcygpO1xyXG5cclxuLy8gRmFzdCBIYWxmIEZsb2F0IENvbnZlcnNpb25zLCBodHRwOi8vd3d3LmZveC10b29sa2l0Lm9yZy9mdHAvZmFzdGhhbGZmbG9hdGNvbnZlcnNpb24ucGRmXHJcbmZ1bmN0aW9uIEdlbmVyYXRlVGFibGVzKCkge1xyXG4gICAgLy8gZmxvYXQzMiB0byBmbG9hdDE2IGhlbHBlcnNcclxuXHJcbiAgICBjb25zdCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNCk7XHJcbiAgICBjb25zdCBmbG9hdFZpZXcgPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlcik7XHJcbiAgICBjb25zdCB1aW50MzJWaWV3ID0gbmV3IFVpbnQzMkFycmF5KGJ1ZmZlcik7XHJcblxyXG4gICAgY29uc3QgYmFzZVRhYmxlID0gbmV3IFVpbnQzMkFycmF5KDUxMik7XHJcbiAgICBjb25zdCBzaGlmdFRhYmxlID0gbmV3IFVpbnQzMkFycmF5KDUxMik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xyXG4gICAgICAgIGNvbnN0IGUgPSBpIC0gMTI3O1xyXG5cclxuICAgICAgICAvLyB2ZXJ5IHNtYWxsIG51bWJlciAoMCwgLTApXHJcblxyXG4gICAgICAgIGlmIChlIDwgLTI3KSB7XHJcbiAgICAgICAgICAgIGJhc2VUYWJsZVtpXSA9IDB4MDAwMDtcclxuICAgICAgICAgICAgYmFzZVRhYmxlW2kgfCAweDEwMF0gPSAweDgwMDA7XHJcbiAgICAgICAgICAgIHNoaWZ0VGFibGVbaV0gPSAyNDtcclxuICAgICAgICAgICAgc2hpZnRUYWJsZVtpIHwgMHgxMDBdID0gMjQ7XHJcblxyXG4gICAgICAgICAgICAvLyBzbWFsbCBudW1iZXIgKGRlbm9ybSlcclxuICAgICAgICB9IGVsc2UgaWYgKGUgPCAtMTQpIHtcclxuICAgICAgICAgICAgYmFzZVRhYmxlW2ldID0gMHgwNDAwID4+ICgtZSAtIDE0KTtcclxuICAgICAgICAgICAgYmFzZVRhYmxlW2kgfCAweDEwMF0gPSAoMHgwNDAwID4+ICgtZSAtIDE0KSkgfCAweDgwMDA7XHJcbiAgICAgICAgICAgIHNoaWZ0VGFibGVbaV0gPSAtZSAtIDE7XHJcbiAgICAgICAgICAgIHNoaWZ0VGFibGVbaSB8IDB4MTAwXSA9IC1lIC0gMTtcclxuXHJcbiAgICAgICAgICAgIC8vIG5vcm1hbCBudW1iZXJcclxuICAgICAgICB9IGVsc2UgaWYgKGUgPD0gMTUpIHtcclxuICAgICAgICAgICAgYmFzZVRhYmxlW2ldID0gKGUgKyAxNSkgPDwgMTA7XHJcbiAgICAgICAgICAgIGJhc2VUYWJsZVtpIHwgMHgxMDBdID0gKChlICsgMTUpIDw8IDEwKSB8IDB4ODAwMDtcclxuICAgICAgICAgICAgc2hpZnRUYWJsZVtpXSA9IDEzO1xyXG4gICAgICAgICAgICBzaGlmdFRhYmxlW2kgfCAweDEwMF0gPSAxMztcclxuXHJcbiAgICAgICAgICAgIC8vIGxhcmdlIG51bWJlciAoSW5maW5pdHksIC1JbmZpbml0eSlcclxuICAgICAgICB9IGVsc2UgaWYgKGUgPCAxMjgpIHtcclxuICAgICAgICAgICAgYmFzZVRhYmxlW2ldID0gMHg3YzAwO1xyXG4gICAgICAgICAgICBiYXNlVGFibGVbaSB8IDB4MTAwXSA9IDB4ZmMwMDtcclxuICAgICAgICAgICAgc2hpZnRUYWJsZVtpXSA9IDI0O1xyXG4gICAgICAgICAgICBzaGlmdFRhYmxlW2kgfCAweDEwMF0gPSAyNDtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXkgKE5hTiwgSW5maW5pdHksIC1JbmZpbml0eSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiYXNlVGFibGVbaV0gPSAweDdjMDA7XHJcbiAgICAgICAgICAgIGJhc2VUYWJsZVtpIHwgMHgxMDBdID0gMHhmYzAwO1xyXG4gICAgICAgICAgICBzaGlmdFRhYmxlW2ldID0gMTM7XHJcbiAgICAgICAgICAgIHNoaWZ0VGFibGVbaSB8IDB4MTAwXSA9IDEzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBmbG9hdDE2IHRvIGZsb2F0MzIgaGVscGVyc1xyXG4gICAgY29uc3QgbWFudGlzc2FUYWJsZSA9IG5ldyBVaW50MzJBcnJheSgyMDQ4KTtcclxuICAgIGNvbnN0IGV4cG9uZW50VGFibGUgPSBuZXcgVWludDMyQXJyYXkoNjQpO1xyXG4gICAgY29uc3Qgb2Zmc2V0VGFibGUgPSBuZXcgVWludDMyQXJyYXkoNjQpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTAyNDsgKytpKSB7XHJcbiAgICAgICAgbGV0IG0gPSBpIDw8IDEzOyAvLyB6ZXJvIHBhZCBtYW50aXNzYSBiaXRzXHJcbiAgICAgICAgbGV0IGUgPSAwOyAvLyB6ZXJvIGV4cG9uZW50XHJcblxyXG4gICAgICAgIC8vIG5vcm1hbGl6ZWRcclxuICAgICAgICB3aGlsZSAoKG0gJiAweDAwODAwMDAwKSA9PT0gMCkge1xyXG4gICAgICAgICAgICBtIDw8PSAxO1xyXG4gICAgICAgICAgICBlIC09IDB4MDA4MDAwMDA7IC8vIGRlY3JlbWVudCBleHBvbmVudFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbSAmPSB+MHgwMDgwMDAwMDsgLy8gY2xlYXIgbGVhZGluZyAxIGJpdFxyXG4gICAgICAgIGUgKz0gMHgzODgwMDAwMDsgLy8gYWRqdXN0IGJpYXNcclxuXHJcbiAgICAgICAgbWFudGlzc2FUYWJsZVtpXSA9IG0gfCBlO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxMDI0OyBpIDwgMjA0ODsgKytpKSB7XHJcbiAgICAgICAgbWFudGlzc2FUYWJsZVtpXSA9IDB4MzgwMDAwMDAgKyAoKGkgLSAxMDI0KSA8PCAxMyk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAzMTsgKytpKSB7XHJcbiAgICAgICAgZXhwb25lbnRUYWJsZVtpXSA9IGkgPDwgMjM7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb25lbnRUYWJsZVszMV0gPSAweDQ3ODAwMDAwO1xyXG4gICAgZXhwb25lbnRUYWJsZVszMl0gPSAweDgwMDAwMDAwO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAzMzsgaSA8IDYzOyArK2kpIHtcclxuICAgICAgICBleHBvbmVudFRhYmxlW2ldID0gMHg4MDAwMDAwMCArICgoaSAtIDMyKSA8PCAyMyk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb25lbnRUYWJsZVs2M10gPSAweGM3ODAwMDAwO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNjQ7ICsraSkge1xyXG4gICAgICAgIGlmIChpICE9PSAzMikge1xyXG4gICAgICAgICAgICBvZmZzZXRUYWJsZVtpXSA9IDEwMjQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmxvYXRWaWV3OiBmbG9hdFZpZXcsXHJcbiAgICAgICAgdWludDMyVmlldzogdWludDMyVmlldyxcclxuICAgICAgICBiYXNlVGFibGU6IGJhc2VUYWJsZSxcclxuICAgICAgICBzaGlmdFRhYmxlOiBzaGlmdFRhYmxlLFxyXG4gICAgICAgIG1hbnRpc3NhVGFibGU6IG1hbnRpc3NhVGFibGUsXHJcbiAgICAgICAgZXhwb25lbnRUYWJsZTogZXhwb25lbnRUYWJsZSxcclxuICAgICAgICBvZmZzZXRUYWJsZTogb2Zmc2V0VGFibGUsXHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2UgYSBudWxsIHRlcm1pbmF0ZWQgc3RyaW5nIGZyb20gdGhlIGJ1ZmZlclxyXG4gKiBAcGFyYW0gYnVmZmVyIGJ1ZmZlciB0byByZWFkIGZyb21cclxuICogQHBhcmFtIG9mZnNldCBjdXJyZW50IG9mZnNldCBpbiB0aGUgYnVmZmVyXHJcbiAqIEByZXR1cm5zIGEgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUGFyc2VOdWxsVGVybWluYXRlZFN0cmluZyhidWZmZXI6IEFycmF5QnVmZmVyLCBvZmZzZXQ6IERhdGFDdXJzb3IpIHtcclxuICAgIGNvbnN0IHVpbnRCdWZmZXIgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xyXG4gICAgbGV0IGVuZE9mZnNldCA9IDA7XHJcblxyXG4gICAgd2hpbGUgKHVpbnRCdWZmZXJbb2Zmc2V0LnZhbHVlICsgZW5kT2Zmc2V0XSAhPSAwKSB7XHJcbiAgICAgICAgZW5kT2Zmc2V0ICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUodWludEJ1ZmZlci5zbGljZShvZmZzZXQudmFsdWUsIG9mZnNldC52YWx1ZSArIGVuZE9mZnNldCkpO1xyXG5cclxuICAgIG9mZnNldC52YWx1ZSA9IG9mZnNldC52YWx1ZSArIGVuZE9mZnNldCArIDE7XHJcblxyXG4gICAgcmV0dXJuIHN0cmluZ1ZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2UgYW4gaW50MzIgZnJvbSB0aGUgYnVmZmVyXHJcbiAqIEBwYXJhbSBkYXRhVmlldyBkYXRhdmlldyBvbiB0aGUgZGF0YVxyXG4gKiBAcGFyYW0gb2Zmc2V0IGN1cnJlbnQgb2Zmc2V0IGluIHRoZSBkYXRhIHZpZXdcclxuICogQHJldHVybnMgYW4gaW50MzJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJzZUludDMyKGRhdGFWaWV3OiBEYXRhVmlldywgb2Zmc2V0OiBEYXRhQ3Vyc29yKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFWaWV3LmdldEludDMyKG9mZnNldC52YWx1ZSwgdHJ1ZSk7XHJcblxyXG4gICAgb2Zmc2V0LnZhbHVlICs9IElOVDMyX1NJWkU7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2UgYW4gdWludDMyIGZyb20gdGhlIGJ1ZmZlclxyXG4gKiBAcGFyYW0gZGF0YVZpZXcgZGF0YSB2aWV3IHRvIHJlYWQgZnJvbVxyXG4gKiBAcGFyYW0gb2Zmc2V0IG9mZnNldCBpbiB0aGUgZGF0YSB2aWV3XHJcbiAqIEByZXR1cm5zIGFuIHVpbnQzMlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlVWludDMyKGRhdGFWaWV3OiBEYXRhVmlldywgb2Zmc2V0OiBEYXRhQ3Vyc29yKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFWaWV3LmdldFVpbnQzMihvZmZzZXQudmFsdWUsIHRydWUpO1xyXG5cclxuICAgIG9mZnNldC52YWx1ZSArPSBJTlQzMl9TSVpFO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlIGFuIHVpbnQ4IGZyb20gdGhlIGJ1ZmZlclxyXG4gKiBAcGFyYW0gZGF0YVZpZXcgZGF0YXZpZXcgb24gdGhlIGRhdGFcclxuICogQHBhcmFtIG9mZnNldCBjdXJyZW50IG9mZnNldCBpbiB0aGUgZGF0YSB2aWV3XHJcbiAqIEByZXR1cm5zIGFuIHVpbnQ4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUGFyc2VVaW50OChkYXRhVmlldzogRGF0YVZpZXcsIG9mZnNldDogRGF0YUN1cnNvcikge1xyXG4gICAgY29uc3QgdmFsdWUgPSBkYXRhVmlldy5nZXRVaW50OChvZmZzZXQudmFsdWUpO1xyXG5cclxuICAgIG9mZnNldC52YWx1ZSArPSBJTlQ4X1NJWkU7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2UgYW4gdWludDE2IGZyb20gdGhlIGJ1ZmZlclxyXG4gKiBAcGFyYW0gZGF0YVZpZXcgZGF0YXZpZXcgb24gdGhlIGRhdGFcclxuICogQHBhcmFtIG9mZnNldCBjdXJyZW50IG9mZnNldCBpbiB0aGUgZGF0YSB2aWV3XHJcbiAqIEByZXR1cm5zIGFuIHVpbnQxNlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlVWludDE2KGRhdGFWaWV3OiBEYXRhVmlldywgb2Zmc2V0OiBEYXRhQ3Vyc29yKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFWaWV3LmdldFVpbnQxNihvZmZzZXQudmFsdWUsIHRydWUpO1xyXG5cclxuICAgIG9mZnNldC52YWx1ZSArPSBJTlQxNl9TSVpFO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlIGFuIHVpbnQ4IGZyb20gYW4gYXJyYXkgYnVmZmVyXHJcbiAqIEBwYXJhbSBhcnJheSBhcnJheSBidWZmZXJcclxuICogQHBhcmFtIG9mZnNldCBjdXJyZW50IG9mZnNldCBpbiB0aGUgZGF0YSB2aWV3XHJcbiAqIEByZXR1cm5zIGFuIHVpbnQxNlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlVWludDhBcnJheShhcnJheTogVWludDhBcnJheSwgb2Zmc2V0OiBEYXRhQ3Vyc29yKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGFycmF5W29mZnNldC52YWx1ZV07XHJcblxyXG4gICAgb2Zmc2V0LnZhbHVlICs9IElOVDhfU0laRTtcclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZSBhbiBpbnQ2NCBmcm9tIHRoZSBidWZmZXJcclxuICogQHBhcmFtIGRhdGFWaWV3IGRhdGF2aWV3IG9uIHRoZSBkYXRhXHJcbiAqIEBwYXJhbSBvZmZzZXQgY3VycmVudCBvZmZzZXQgaW4gdGhlIGRhdGEgdmlld1xyXG4gKiBAcmV0dXJucyBhbiBpbnQ2NFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlSW50NjQoZGF0YVZpZXc6IERhdGFWaWV3LCBvZmZzZXQ6IERhdGFDdXJzb3IpIHtcclxuICAgIGxldCBpbnQ7XHJcblxyXG4gICAgaWYgKFwiZ2V0QmlnSW50NjRcIiBpbiBEYXRhVmlldy5wcm90b3R5cGUpIHtcclxuICAgICAgICBpbnQgPSBOdW1iZXIoZGF0YVZpZXcuZ2V0QmlnSW50NjQob2Zmc2V0LnZhbHVlLCB0cnVlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGludCA9IGRhdGFWaWV3LmdldFVpbnQzMihvZmZzZXQudmFsdWUgKyA0LCB0cnVlKSArIE51bWJlcihkYXRhVmlldy5nZXRVaW50MzIob2Zmc2V0LnZhbHVlLCB0cnVlKSA8PCAzMik7XHJcbiAgICB9XHJcblxyXG4gICAgb2Zmc2V0LnZhbHVlICs9IFVMT05HX1NJWkU7XHJcblxyXG4gICAgcmV0dXJuIGludDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlIGEgZmxvYXQzMiBmcm9tIHRoZSBidWZmZXJcclxuICogQHBhcmFtIGRhdGFWaWV3IGRhdGF2aWV3IG9uIHRoZSBkYXRhXHJcbiAqIEBwYXJhbSBvZmZzZXQgY3VycmVudCBvZmZzZXQgaW4gdGhlIGRhdGEgdmlld1xyXG4gKiBAcmV0dXJucyBhIGZsb2F0MzJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJzZUZsb2F0MzIoZGF0YVZpZXc6IERhdGFWaWV3LCBvZmZzZXQ6IERhdGFDdXJzb3IpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gZGF0YVZpZXcuZ2V0RmxvYXQzMihvZmZzZXQudmFsdWUsIHRydWUpO1xyXG5cclxuICAgIG9mZnNldC52YWx1ZSArPSBGTE9BVDMyX1NJWkU7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2UgYSBmbG9hdDE2IGZyb20gdGhlIGJ1ZmZlclxyXG4gKiBAcGFyYW0gZGF0YVZpZXcgZGF0YXZpZXcgb24gdGhlIGRhdGFcclxuICogQHBhcmFtIG9mZnNldCBjdXJyZW50IG9mZnNldCBpbiB0aGUgZGF0YSB2aWV3XHJcbiAqIEByZXR1cm5zIGEgZmxvYXQxNlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlRmxvYXQxNihkYXRhVmlldzogRGF0YVZpZXcsIG9mZnNldDogRGF0YUN1cnNvcikge1xyXG4gICAgcmV0dXJuIERlY29kZUZsb2F0MTYoUGFyc2VVaW50MTYoZGF0YVZpZXcsIG9mZnNldCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZWNvZGVGbG9hdDE2KGJpbmFyeTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBleHBvbmVudCA9IChiaW5hcnkgJiAweDdjMDApID4+IDEwO1xyXG4gICAgY29uc3QgZnJhY3Rpb24gPSBiaW5hcnkgJiAweDAzZmY7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAoYmluYXJ5ID4+IDE1ID8gLTEgOiAxKSAqXHJcbiAgICAgICAgKGV4cG9uZW50ID8gKGV4cG9uZW50ID09PSAweDFmID8gKGZyYWN0aW9uID8gTmFOIDogSW5maW5pdHkpIDogTWF0aC5wb3coMiwgZXhwb25lbnQgLSAxNSkgKiAoMSArIGZyYWN0aW9uIC8gMHg0MDApKSA6IDYuMTAzNTE1NjI1ZS01ICogKGZyYWN0aW9uIC8gMHg0MDApKVxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVG9IYWxmRmxvYXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKE1hdGguYWJzKHZhbHVlKSA+IDY1NTA0KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmFsdWUgb3V0IG9mIHJhbmdlLkNvbnNpZGVyIHVzaW5nIGZsb2F0IGluc3RlYWQgb2YgaGFsZi1mbG9hdC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUgPSBDbGFtcCh2YWx1ZSwgLTY1NTA0LCA2NTUwNCk7XHJcblxyXG4gICAgVGFibGVzLmZsb2F0Vmlld1swXSA9IHZhbHVlO1xyXG4gICAgY29uc3QgZiA9IFRhYmxlcy51aW50MzJWaWV3WzBdO1xyXG4gICAgY29uc3QgZSA9IChmID4+IDIzKSAmIDB4MWZmO1xyXG4gICAgcmV0dXJuIFRhYmxlcy5iYXNlVGFibGVbZV0gKyAoKGYgJiAweDAwN2ZmZmZmKSA+PiBUYWJsZXMuc2hpZnRUYWJsZVtlXSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWNvZGUgYSBmbG9hdDMyIGZyb20gdGhlIGJ1ZmZlclxyXG4gKiBAcGFyYW0gZGF0YVZpZXcgZGF0YXZpZXcgb24gdGhlIGRhdGFcclxuICogQHBhcmFtIG9mZnNldCBjdXJyZW50IG9mZnNldCBpbiB0aGUgZGF0YSB2aWV3XHJcbiAqIEByZXR1cm5zIGEgZmxvYXQzMlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIERlY29kZUZsb2F0MzIoZGF0YVZpZXc6IERhdGFWaWV3LCBvZmZzZXQ6IERhdGFDdXJzb3IpIHtcclxuICAgIHJldHVybiBUb0hhbGZGbG9hdChQYXJzZUZsb2F0MzIoZGF0YVZpZXcsIG9mZnNldCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYXJzZUZpeGVkTGVuZ3RoU3RyaW5nKGJ1ZmZlcjogQXJyYXlCdWZmZXIsIG9mZnNldDogRGF0YUN1cnNvciwgc2l6ZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShuZXcgVWludDhBcnJheShidWZmZXIpLnNsaWNlKG9mZnNldC52YWx1ZSwgb2Zmc2V0LnZhbHVlICsgc2l6ZSkpO1xyXG5cclxuICAgIG9mZnNldC52YWx1ZSA9IG9mZnNldC52YWx1ZSArIHNpemU7XHJcblxyXG4gICAgcmV0dXJuIHN0cmluZ1ZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYXJzZVJhdGlvbmFsKGRhdGFWaWV3OiBEYXRhVmlldywgb2Zmc2V0OiBEYXRhQ3Vyc29yKSB7XHJcbiAgICBjb25zdCB4ID0gUGFyc2VJbnQzMihkYXRhVmlldywgb2Zmc2V0KTtcclxuICAgIGNvbnN0IHkgPSBQYXJzZVVpbnQzMihkYXRhVmlldywgb2Zmc2V0KTtcclxuXHJcbiAgICByZXR1cm4gW3gsIHldO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYXJzZVRpbWVjb2RlKGRhdGFWaWV3OiBEYXRhVmlldywgb2Zmc2V0OiBEYXRhQ3Vyc29yKSB7XHJcbiAgICBjb25zdCB4ID0gUGFyc2VVaW50MzIoZGF0YVZpZXcsIG9mZnNldCk7XHJcbiAgICBjb25zdCB5ID0gUGFyc2VVaW50MzIoZGF0YVZpZXcsIG9mZnNldCk7XHJcblxyXG4gICAgcmV0dXJuIFt4LCB5XTtcclxufVxyXG5cclxuZnVuY3Rpb24gUGFyc2VWMmYoZGF0YVZpZXc6IERhdGFWaWV3LCBvZmZzZXQ6IERhdGFDdXJzb3IpIHtcclxuICAgIGNvbnN0IHggPSBQYXJzZUZsb2F0MzIoZGF0YVZpZXcsIG9mZnNldCk7XHJcbiAgICBjb25zdCB5ID0gUGFyc2VGbG9hdDMyKGRhdGFWaWV3LCBvZmZzZXQpO1xyXG5cclxuICAgIHJldHVybiBbeCwgeV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBhcnNlVjNmKGRhdGFWaWV3OiBEYXRhVmlldywgb2Zmc2V0OiBEYXRhQ3Vyc29yKSB7XHJcbiAgICBjb25zdCB4ID0gUGFyc2VGbG9hdDMyKGRhdGFWaWV3LCBvZmZzZXQpO1xyXG4gICAgY29uc3QgeSA9IFBhcnNlRmxvYXQzMihkYXRhVmlldywgb2Zmc2V0KTtcclxuICAgIGNvbnN0IHogPSBQYXJzZUZsb2F0MzIoZGF0YVZpZXcsIG9mZnNldCk7XHJcblxyXG4gICAgcmV0dXJuIFt4LCB5LCB6XTtcclxufVxyXG5cclxuZnVuY3Rpb24gUGFyc2VDaGxpc3QoZGF0YVZpZXc6IERhdGFWaWV3LCBvZmZzZXQ6IERhdGFDdXJzb3IsIHNpemU6IG51bWJlcikge1xyXG4gICAgY29uc3Qgc3RhcnRPZmZzZXQgPSBvZmZzZXQudmFsdWU7XHJcbiAgICBjb25zdCBjaGFubmVscyA9IFtdO1xyXG5cclxuICAgIHdoaWxlIChvZmZzZXQudmFsdWUgPCBzdGFydE9mZnNldCArIHNpemUgLSAxKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IFBhcnNlTnVsbFRlcm1pbmF0ZWRTdHJpbmcoZGF0YVZpZXcuYnVmZmVyLCBvZmZzZXQpO1xyXG4gICAgICAgIGNvbnN0IHBpeGVsVHlwZSA9IFBhcnNlSW50MzIoZGF0YVZpZXcsIG9mZnNldCk7XHJcbiAgICAgICAgY29uc3QgcExpbmVhciA9IFBhcnNlVWludDgoZGF0YVZpZXcsIG9mZnNldCk7XHJcbiAgICAgICAgb2Zmc2V0LnZhbHVlICs9IDM7IC8vIHJlc2VydmVkLCB0aHJlZSBjaGFyc1xyXG4gICAgICAgIGNvbnN0IHhTYW1wbGluZyA9IFBhcnNlSW50MzIoZGF0YVZpZXcsIG9mZnNldCk7XHJcbiAgICAgICAgY29uc3QgeVNhbXBsaW5nID0gUGFyc2VJbnQzMihkYXRhVmlldywgb2Zmc2V0KTtcclxuXHJcbiAgICAgICAgY2hhbm5lbHMucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHBpeGVsVHlwZTogcGl4ZWxUeXBlLFxyXG4gICAgICAgICAgICBwTGluZWFyOiBwTGluZWFyLFxyXG4gICAgICAgICAgICB4U2FtcGxpbmc6IHhTYW1wbGluZyxcclxuICAgICAgICAgICAgeVNhbXBsaW5nOiB5U2FtcGxpbmcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb2Zmc2V0LnZhbHVlICs9IDE7XHJcblxyXG4gICAgcmV0dXJuIGNoYW5uZWxzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYXJzZUNocm9tYXRpY2l0aWVzKGRhdGFWaWV3OiBEYXRhVmlldywgb2Zmc2V0OiBEYXRhQ3Vyc29yKSB7XHJcbiAgICBjb25zdCByZWRYID0gUGFyc2VGbG9hdDMyKGRhdGFWaWV3LCBvZmZzZXQpO1xyXG4gICAgY29uc3QgcmVkWSA9IFBhcnNlRmxvYXQzMihkYXRhVmlldywgb2Zmc2V0KTtcclxuICAgIGNvbnN0IGdyZWVuWCA9IFBhcnNlRmxvYXQzMihkYXRhVmlldywgb2Zmc2V0KTtcclxuICAgIGNvbnN0IGdyZWVuWSA9IFBhcnNlRmxvYXQzMihkYXRhVmlldywgb2Zmc2V0KTtcclxuICAgIGNvbnN0IGJsdWVYID0gUGFyc2VGbG9hdDMyKGRhdGFWaWV3LCBvZmZzZXQpO1xyXG4gICAgY29uc3QgYmx1ZVkgPSBQYXJzZUZsb2F0MzIoZGF0YVZpZXcsIG9mZnNldCk7XHJcbiAgICBjb25zdCB3aGl0ZVggPSBQYXJzZUZsb2F0MzIoZGF0YVZpZXcsIG9mZnNldCk7XHJcbiAgICBjb25zdCB3aGl0ZVkgPSBQYXJzZUZsb2F0MzIoZGF0YVZpZXcsIG9mZnNldCk7XHJcblxyXG4gICAgcmV0dXJuIHsgcmVkWDogcmVkWCwgcmVkWTogcmVkWSwgZ3JlZW5YOiBncmVlblgsIGdyZWVuWTogZ3JlZW5ZLCBibHVlWDogYmx1ZVgsIGJsdWVZOiBibHVlWSwgd2hpdGVYOiB3aGl0ZVgsIHdoaXRlWTogd2hpdGVZIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBhcnNlQ29tcHJlc3Npb24oZGF0YVZpZXc6IERhdGFWaWV3LCBvZmZzZXQ6IERhdGFDdXJzb3IpIHtcclxuICAgIHJldHVybiBQYXJzZVVpbnQ4KGRhdGFWaWV3LCBvZmZzZXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYXJzZUJveDJpKGRhdGFWaWV3OiBEYXRhVmlldywgb2Zmc2V0OiBEYXRhQ3Vyc29yKSB7XHJcbiAgICBjb25zdCB4TWluID0gUGFyc2VJbnQzMihkYXRhVmlldywgb2Zmc2V0KTtcclxuICAgIGNvbnN0IHlNaW4gPSBQYXJzZUludDMyKGRhdGFWaWV3LCBvZmZzZXQpO1xyXG4gICAgY29uc3QgeE1heCA9IFBhcnNlSW50MzIoZGF0YVZpZXcsIG9mZnNldCk7XHJcbiAgICBjb25zdCB5TWF4ID0gUGFyc2VJbnQzMihkYXRhVmlldywgb2Zmc2V0KTtcclxuXHJcbiAgICByZXR1cm4geyB4TWluOiB4TWluLCB5TWluOiB5TWluLCB4TWF4OiB4TWF4LCB5TWF4OiB5TWF4IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBhcnNlTGluZU9yZGVyKGRhdGFWaWV3OiBEYXRhVmlldywgb2Zmc2V0OiBEYXRhQ3Vyc29yKSB7XHJcbiAgICBjb25zdCBsaW5lT3JkZXIgPSBQYXJzZVVpbnQ4KGRhdGFWaWV3LCBvZmZzZXQpO1xyXG5cclxuICAgIHJldHVybiBMaW5lT3JkZXJzW2xpbmVPcmRlcl07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZSBhIHZhbHVlIGZyb20gdGhlIGRhdGEgdmlld1xyXG4gKiBAcGFyYW0gZGF0YVZpZXcgZGVmaW5lcyB0aGUgZGF0YSB2aWV3IHRvIHJlYWQgZnJvbVxyXG4gKiBAcGFyYW0gb2Zmc2V0IGRlZmluZXMgdGhlIGN1cnJlbnQgb2Zmc2V0IGluIHRoZSBkYXRhIHZpZXdcclxuICogQHBhcmFtIHR5cGUgZGVmaW5lcyB0aGUgdHlwZSBvZiB0aGUgdmFsdWUgdG8gcmVhZFxyXG4gKiBAcGFyYW0gc2l6ZSBkZWZpbmVzIHRoZSBzaXplIG9mIHRoZSB2YWx1ZSB0byByZWFkXHJcbiAqIEByZXR1cm5zIHRoZSBwYXJzZWQgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJzZVZhbHVlKGRhdGFWaWV3OiBEYXRhVmlldywgb2Zmc2V0OiBEYXRhQ3Vyc29yLCB0eXBlOiBzdHJpbmcsIHNpemU6IG51bWJlcikge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxyXG4gICAgICAgIGNhc2UgXCJzdHJpbmd2ZWN0b3JcIjpcclxuICAgICAgICBjYXNlIFwiaWNjUHJvZmlsZVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gUGFyc2VGaXhlZExlbmd0aFN0cmluZyhkYXRhVmlldy5idWZmZXIsIG9mZnNldCwgc2l6ZSk7XHJcbiAgICAgICAgY2FzZSBcImNobGlzdFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gUGFyc2VDaGxpc3QoZGF0YVZpZXcsIG9mZnNldCwgc2l6ZSk7XHJcbiAgICAgICAgY2FzZSBcImNocm9tYXRpY2l0aWVzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBQYXJzZUNocm9tYXRpY2l0aWVzKGRhdGFWaWV3LCBvZmZzZXQpO1xyXG4gICAgICAgIGNhc2UgXCJjb21wcmVzc2lvblwiOlxyXG4gICAgICAgICAgICByZXR1cm4gUGFyc2VDb21wcmVzc2lvbihkYXRhVmlldywgb2Zmc2V0KTtcclxuICAgICAgICBjYXNlIFwiYm94MmlcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFBhcnNlQm94MmkoZGF0YVZpZXcsIG9mZnNldCk7XHJcbiAgICAgICAgY2FzZSBcImxpbmVPcmRlclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gUGFyc2VMaW5lT3JkZXIoZGF0YVZpZXcsIG9mZnNldCk7XHJcbiAgICAgICAgY2FzZSBcImZsb2F0XCI6XHJcbiAgICAgICAgICAgIHJldHVybiBQYXJzZUZsb2F0MzIoZGF0YVZpZXcsIG9mZnNldCk7XHJcbiAgICAgICAgY2FzZSBcInYyZlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gUGFyc2VWMmYoZGF0YVZpZXcsIG9mZnNldCk7XHJcbiAgICAgICAgY2FzZSBcInYzZlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gUGFyc2VWM2YoZGF0YVZpZXcsIG9mZnNldCk7XHJcbiAgICAgICAgY2FzZSBcImludFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gUGFyc2VJbnQzMihkYXRhVmlldywgb2Zmc2V0KTtcclxuICAgICAgICBjYXNlIFwicmF0aW9uYWxcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFBhcnNlUmF0aW9uYWwoZGF0YVZpZXcsIG9mZnNldCk7XHJcbiAgICAgICAgY2FzZSBcInRpbWVjb2RlXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVRpbWVjb2RlKGRhdGFWaWV3LCBvZmZzZXQpO1xyXG4gICAgICAgIGNhc2UgXCJwcmV2aWV3XCI6XHJcbiAgICAgICAgICAgIG9mZnNldC52YWx1ZSArPSBzaXplO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJza2lwcGVkXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgb2Zmc2V0LnZhbHVlICs9IHNpemU7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXZlcnQgdGhlIGVuZGlhbm5lc3Mgb2YgdGhlIGRhdGFcclxuICogQHBhcmFtIHNvdXJjZSBkZWZpbmVzIHRoZSBzb3VyY2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBQcmVkaWN0b3Ioc291cmNlOiBVaW50OEFycmF5KSB7XHJcbiAgICBmb3IgKGxldCB0ID0gMTsgdCA8IHNvdXJjZS5sZW5ndGg7IHQrKykge1xyXG4gICAgICAgIGNvbnN0IGQgPSBzb3VyY2VbdCAtIDFdICsgc291cmNlW3RdIC0gMTI4O1xyXG4gICAgICAgIHNvdXJjZVt0XSA9IGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmxlYXZlIHBpeGVsc1xyXG4gKiBAcGFyYW0gc291cmNlIGRlZmluZXMgdGhlIGRhdGEgc291cmNlXHJcbiAqIEBwYXJhbSBvdXQgZGVmaW5lcyB0aGUgb3V0cHV0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSW50ZXJsZWF2ZVNjYWxhcihzb3VyY2U6IFVpbnQ4QXJyYXksIG91dDogVWludDhBcnJheSkge1xyXG4gICAgbGV0IHQxID0gMDtcclxuICAgIGxldCB0MiA9IE1hdGguZmxvb3IoKHNvdXJjZS5sZW5ndGggKyAxKSAvIDIpO1xyXG4gICAgbGV0IHMgPSAwO1xyXG4gICAgY29uc3Qgc3RvcCA9IHNvdXJjZS5sZW5ndGggLSAxO1xyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKHMgPiBzdG9wKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXRbcysrXSA9IHNvdXJjZVt0MSsrXTtcclxuXHJcbiAgICAgICAgaWYgKHMgPiBzdG9wKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXRbcysrXSA9IHNvdXJjZVt0MisrXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IERhdGFDdXJzb3IgfSBmcm9tIFwiLi9leHJMb2FkZXIuY29yZVwiO1xyXG5pbXBvcnQgeyBDb21wcmVzc2lvbkNvZGVzLCBEZWNvZGVGbG9hdDMyLCBQYXJzZUZsb2F0MTYsIFBhcnNlRmxvYXQzMiwgUGFyc2VJbnQzMiwgUGFyc2VJbnQ2NCwgUGFyc2VVaW50MTYsIFBhcnNlVWludDMyIH0gZnJvbSBcIi4vZXhyTG9hZGVyLmNvcmVcIjtcclxuaW1wb3J0IHsgVW5jb21wcmVzc1BJWiwgVW5jb21wcmVzc1BYUiwgVW5jb21wcmVzc1JBVywgVW5jb21wcmVzc1JMRSwgVW5jb21wcmVzc1pJUCB9IGZyb20gXCIuL2V4ckxvYWRlci5jb21wcmVzc2lvblwiO1xyXG5pbXBvcnQgeyBGTE9BVDMyX1NJWkUsIElOVDE2X1NJWkUsIHR5cGUgSUVYUkRlY29kZXIsIHR5cGUgSUVYUkhlYWRlciB9IGZyb20gXCIuL2V4ckxvYWRlci5pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCJjb3JlL0VuZ2luZXMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgeyBFeHJMb2FkZXJHbG9iYWxDb25maWd1cmF0aW9uLCBFWFJPdXRwdXRUeXBlIH0gZnJvbSBcIi4vZXhyTG9hZGVyLmNvbmZpZ3VyYXRpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vc2NpZWNvZGUvdGhyZWUuanMvYmxvYi9kZXYvZXhhbXBsZXMvanNtL2xvYWRlcnMvRVhSTG9hZGVyLmpzXHJcbiAqIFJlZmVycmVkIHRvIHRoZSBvcmlnaW5hbCBJbmR1c3RyaWFsIExpZ2h0ICYgTWFnaWMgT3BlbkVYUiBpbXBsZW1lbnRhdGlvbiBhbmQgdGhlIFRpbnlFWFIgLyBTeW95byBGdWppdGFcclxuICogaW1wbGVtZW50YXRpb24uXHJcbiAqL1xyXG5cclxuLy8gLypcclxuLy8gQ29weXJpZ2h0IChjKSAyMDE0IC0gMjAxNywgU3lveW8gRnVqaXRhXHJcbi8vIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcclxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbi8vICAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XHJcbi8vICAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuLy8gICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHRcclxuLy8gICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxyXG4vLyAgICAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG4vLyAgICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBTeW95byBGdWppdGEgbm9yIHRoZVxyXG4vLyAgICAgICBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0c1xyXG4vLyAgICAgICBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuXHJcbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORFxyXG4vLyBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxyXG4vLyBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFXHJcbi8vIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIDxDT1BZUklHSFQgSE9MREVSPiBCRSBMSUFCTEUgRk9SIEFOWVxyXG4vLyBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFU1xyXG4vLyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7XHJcbi8vIExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORFxyXG4vLyBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxyXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJU1xyXG4vLyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuLy8gKi9cclxuXHJcbi8vIC8vIFRpbnlFWFIgY29udGFpbnMgc29tZSBPcGVuRVhSIGNvZGUsIHdoaWNoIGlzIGxpY2Vuc2VkIHVuZGVyIC0tLS0tLS0tLS0tLVxyXG5cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIC8vXHJcbi8vIC8vIENvcHlyaWdodCAoYykgMjAwMiwgSW5kdXN0cmlhbCBMaWdodCAmIE1hZ2ljLCBhIGRpdmlzaW9uIG9mIEx1Y2FzXHJcbi8vIC8vIERpZ2l0YWwgTHRkLiBMTENcclxuLy8gLy9cclxuLy8gLy8gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gLy9cclxuLy8gLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XHJcbi8vIC8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcclxuLy8gLy8gbWV0OlxyXG4vLyAvLyAqICAgICAgIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XHJcbi8vIC8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuLy8gLy8gKiAgICAgICBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXHJcbi8vIC8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcclxuLy8gLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxyXG4vLyAvLyBkaXN0cmlidXRpb24uXHJcbi8vIC8vICogICAgICAgTmVpdGhlciB0aGUgbmFtZSBvZiBJbmR1c3RyaWFsIExpZ2h0ICYgTWFnaWMgbm9yIHRoZSBuYW1lcyBvZlxyXG4vLyAvLyBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkXHJcbi8vIC8vIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuLy8gLy9cclxuLy8gLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xyXG4vLyAvLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXHJcbi8vIC8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxyXG4vLyAvLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxyXG4vLyAvLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcclxuLy8gLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxyXG4vLyAvLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcclxuLy8gLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXHJcbi8vIC8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcclxuLy8gLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXHJcbi8vIC8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbi8vIC8vXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gLy8gRW5kIG9mIE9wZW5FWFIgbGljZW5zZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgZGVjb2RlciBmb3IgdGhlIGV4ciBmaWxlXHJcbiAqIEBwYXJhbSBoZWFkZXIgaGVhZGVyIG9mIHRoZSBleHIgZmlsZVxyXG4gKiBAcGFyYW0gZGF0YVZpZXcgZGF0YXZpZXcgb2YgdGhlIGV4ciBmaWxlXHJcbiAqIEBwYXJhbSBvZmZzZXQgY3VycmVudCBvZmZzZXRcclxuICogQHBhcmFtIG91dHB1dFR5cGUgZXhwZWN0ZWQgb3V0cHV0IHR5cGUgKGZsb2F0IG9yIGhhbGYgZmxvYXQpXHJcbiAqIEByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGRlY29kZXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBDcmVhdGVEZWNvZGVyQXN5bmMoaGVhZGVyOiBJRVhSSGVhZGVyLCBkYXRhVmlldzogRGF0YVZpZXcsIG9mZnNldDogRGF0YUN1cnNvciwgb3V0cHV0VHlwZTogRVhST3V0cHV0VHlwZSk6IFByb21pc2U8SUVYUkRlY29kZXI+IHtcclxuICAgIGNvbnN0IGRlY29kZXI6IElFWFJEZWNvZGVyID0ge1xyXG4gICAgICAgIHNpemU6IDAsXHJcbiAgICAgICAgdmlld2VyOiBkYXRhVmlldyxcclxuICAgICAgICBhcnJheTogbmV3IFVpbnQ4QXJyYXkoZGF0YVZpZXcuYnVmZmVyKSxcclxuICAgICAgICBvZmZzZXQ6IG9mZnNldCxcclxuICAgICAgICB3aWR0aDogaGVhZGVyLmRhdGFXaW5kb3cueE1heCAtIGhlYWRlci5kYXRhV2luZG93LnhNaW4gKyAxLFxyXG4gICAgICAgIGhlaWdodDogaGVhZGVyLmRhdGFXaW5kb3cueU1heCAtIGhlYWRlci5kYXRhV2luZG93LnlNaW4gKyAxLFxyXG4gICAgICAgIGNoYW5uZWxzOiBoZWFkZXIuY2hhbm5lbHMubGVuZ3RoLFxyXG4gICAgICAgIGNoYW5uZWxMaW5lT2Zmc2V0czoge30sXHJcbiAgICAgICAgc2Nhbk9yZGVyOiAoKSA9PiAwLFxyXG4gICAgICAgIGJ5dGVzUGVyTGluZTogMCxcclxuICAgICAgICBvdXRMaW5lV2lkdGg6IDAsXHJcbiAgICAgICAgbGluZXM6IDAsXHJcbiAgICAgICAgc2NhbmxpbmVCbG9ja1NpemU6IDAsXHJcbiAgICAgICAgaW5wdXRTaXplOiBudWxsLFxyXG4gICAgICAgIHR5cGU6IDAsXHJcbiAgICAgICAgdW5jb21wcmVzczogbnVsbCxcclxuICAgICAgICBnZXR0ZXI6ICgpID0+IDAsXHJcbiAgICAgICAgZm9ybWF0OiBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9SR0JBLFxyXG4gICAgICAgIG91dHB1dENoYW5uZWxzOiAwLFxyXG4gICAgICAgIGRlY29kZUNoYW5uZWxzOiB7fSxcclxuICAgICAgICBibG9ja0NvdW50OiBudWxsLFxyXG4gICAgICAgIGJ5dGVBcnJheTogbnVsbCxcclxuICAgICAgICBsaW5lYXJTcGFjZTogZmFsc2UsXHJcbiAgICAgICAgdGV4dHVyZVR5cGU6IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIHN3aXRjaCAoaGVhZGVyLmNvbXByZXNzaW9uKSB7XHJcbiAgICAgICAgY2FzZSBDb21wcmVzc2lvbkNvZGVzLk5PX0NPTVBSRVNTSU9OOlxyXG4gICAgICAgICAgICBkZWNvZGVyLmxpbmVzID0gMTtcclxuICAgICAgICAgICAgZGVjb2Rlci51bmNvbXByZXNzID0gVW5jb21wcmVzc1JBVztcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgQ29tcHJlc3Npb25Db2Rlcy5STEVfQ09NUFJFU1NJT046XHJcbiAgICAgICAgICAgIGRlY29kZXIubGluZXMgPSAxO1xyXG4gICAgICAgICAgICBkZWNvZGVyLnVuY29tcHJlc3MgPSBVbmNvbXByZXNzUkxFO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBDb21wcmVzc2lvbkNvZGVzLlpJUFNfQ09NUFJFU1NJT046XHJcbiAgICAgICAgICAgIGRlY29kZXIubGluZXMgPSAxO1xyXG4gICAgICAgICAgICBkZWNvZGVyLnVuY29tcHJlc3MgPSBVbmNvbXByZXNzWklQO1xyXG4gICAgICAgICAgICBhd2FpdCBUb29scy5Mb2FkU2NyaXB0QXN5bmMoRXhyTG9hZGVyR2xvYmFsQ29uZmlndXJhdGlvbi5GRkxBVEVVcmwpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBDb21wcmVzc2lvbkNvZGVzLlpJUF9DT01QUkVTU0lPTjpcclxuICAgICAgICAgICAgZGVjb2Rlci5saW5lcyA9IDE2O1xyXG4gICAgICAgICAgICBkZWNvZGVyLnVuY29tcHJlc3MgPSBVbmNvbXByZXNzWklQO1xyXG4gICAgICAgICAgICBhd2FpdCBUb29scy5Mb2FkU2NyaXB0QXN5bmMoRXhyTG9hZGVyR2xvYmFsQ29uZmlndXJhdGlvbi5GRkxBVEVVcmwpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBDb21wcmVzc2lvbkNvZGVzLlBJWl9DT01QUkVTU0lPTjpcclxuICAgICAgICAgICAgZGVjb2Rlci5saW5lcyA9IDMyO1xyXG4gICAgICAgICAgICBkZWNvZGVyLnVuY29tcHJlc3MgPSBVbmNvbXByZXNzUElaO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBDb21wcmVzc2lvbkNvZGVzLlBYUjI0X0NPTVBSRVNTSU9OOlxyXG4gICAgICAgICAgICBkZWNvZGVyLmxpbmVzID0gMTY7XHJcbiAgICAgICAgICAgIGRlY29kZXIudW5jb21wcmVzcyA9IFVuY29tcHJlc3NQWFI7XHJcbiAgICAgICAgICAgIGF3YWl0IFRvb2xzLkxvYWRTY3JpcHRBc3luYyhFeHJMb2FkZXJHbG9iYWxDb25maWd1cmF0aW9uLkZGTEFURVVybCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoQ29tcHJlc3Npb25Db2Rlc1toZWFkZXIuY29tcHJlc3Npb25dICsgXCIgaXMgdW5zdXBwb3J0ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjb2Rlci5zY2FubGluZUJsb2NrU2l6ZSA9IGRlY29kZXIubGluZXM7XHJcblxyXG4gICAgY29uc3QgY2hhbm5lbHM6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBib29sZWFuO1xyXG4gICAgfSA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBjaGFubmVsIG9mIGhlYWRlci5jaGFubmVscykge1xyXG4gICAgICAgIHN3aXRjaCAoY2hhbm5lbC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJSXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJHXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJCXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJBXCI6XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsc1tjaGFubmVsLm5hbWVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRlY29kZXIudHlwZSA9IGNoYW5uZWwucGl4ZWxUeXBlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJZXCI6XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsc1tjaGFubmVsLm5hbWVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRlY29kZXIudHlwZSA9IGNoYW5uZWwucGl4ZWxUeXBlO1xyXG4gICAgICAgICAgICAgICAgLy8gTm90ZTogJ1knIGlzIGRlcHJlY2F0ZWQgaW4gT3BlbkdMIDMuMCs7IHByZWZlciAnUicgZm9yIHNpbmdsZS1jaGFubmVsIEVYUnMuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIFNraXAgdW5zdXBwb3J0ZWQgY2hhbm5lbHNcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSR0IgaW1hZ2VzIHdpbGwgYmUgY29udmVydGVkIHRvIFJHQkEgZm9ybWF0LCBwcmV2ZW50aW5nIHNvZnR3YXJlIGVtdWxhdGlvbiBpbiBzZWxlY3QgZGV2aWNlcy5cclxuICAgIGxldCBmaWxsQWxwaGEgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoY2hhbm5lbHMuUiAmJiBjaGFubmVscy5HICYmIGNoYW5uZWxzLkIgJiYgY2hhbm5lbHMuQSkge1xyXG4gICAgICAgIGRlY29kZXIub3V0cHV0Q2hhbm5lbHMgPSA0O1xyXG4gICAgICAgIGRlY29kZXIuZGVjb2RlQ2hhbm5lbHMgPSB7IFI6IDAsIEc6IDEsIEI6IDIsIEE6IDMgfTtcclxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbHMuUiAmJiBjaGFubmVscy5HICYmIGNoYW5uZWxzLkIpIHtcclxuICAgICAgICBmaWxsQWxwaGEgPSB0cnVlO1xyXG4gICAgICAgIGRlY29kZXIub3V0cHV0Q2hhbm5lbHMgPSA0O1xyXG4gICAgICAgIGRlY29kZXIuZGVjb2RlQ2hhbm5lbHMgPSB7IFI6IDAsIEc6IDEsIEI6IDIsIEE6IDMgfTtcclxuICAgIH0gZWxzZSBpZiAoY2hhbm5lbHMuUiAmJiBjaGFubmVscy5HKSB7XHJcbiAgICAgICAgZGVjb2Rlci5vdXRwdXRDaGFubmVscyA9IDI7XHJcbiAgICAgICAgZGVjb2Rlci5kZWNvZGVDaGFubmVscyA9IHsgUjogMCwgRzogMSB9O1xyXG4gICAgfSBlbHNlIGlmIChjaGFubmVscy5SKSB7XHJcbiAgICAgICAgZGVjb2Rlci5vdXRwdXRDaGFubmVscyA9IDE7XHJcbiAgICAgICAgZGVjb2Rlci5kZWNvZGVDaGFubmVscyA9IHsgUjogMCB9O1xyXG4gICAgfSBlbHNlIGlmIChjaGFubmVscy5ZKSB7XHJcbiAgICAgICAgZGVjb2Rlci5vdXRwdXRDaGFubmVscyA9IDE7XHJcbiAgICAgICAgZGVjb2Rlci5kZWNvZGVDaGFubmVscyA9IHsgWTogMCB9O1xyXG4gICAgICAgIC8vIE5vdGU6IFN1cHBvcnRpbmcgJ1knIGNoYW5uZWwgZm9yIGxlZ2FjeSBjb21wYXRpYmlsaXR5OyBwcmVmZXIgJ1InIGluIG5ldyBFWFJzLlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFWFJMb2FkZXIucGFyc2U6IGZpbGUgY29udGFpbnMgdW5zdXBwb3J0ZWQgZGF0YSBjaGFubmVscy5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlY29kZXIudHlwZSA9PT0gMSkge1xyXG4gICAgICAgIC8vIGhhbGZcclxuICAgICAgICBzd2l0Y2ggKG91dHB1dFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBFWFJPdXRwdXRUeXBlLkZsb2F0OlxyXG4gICAgICAgICAgICAgICAgZGVjb2Rlci5nZXR0ZXIgPSBQYXJzZUZsb2F0MTY7XHJcbiAgICAgICAgICAgICAgICBkZWNvZGVyLmlucHV0U2l6ZSA9IElOVDE2X1NJWkU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRVhST3V0cHV0VHlwZS5IYWxmRmxvYXQ6XHJcbiAgICAgICAgICAgICAgICBkZWNvZGVyLmdldHRlciA9IFBhcnNlVWludDE2O1xyXG4gICAgICAgICAgICAgICAgZGVjb2Rlci5pbnB1dFNpemUgPSBJTlQxNl9TSVpFO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkZWNvZGVyLnR5cGUgPT09IDIpIHtcclxuICAgICAgICAvLyBmbG9hdFxyXG4gICAgICAgIHN3aXRjaCAob3V0cHV0VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEVYUk91dHB1dFR5cGUuRmxvYXQ6XHJcbiAgICAgICAgICAgICAgICBkZWNvZGVyLmdldHRlciA9IFBhcnNlRmxvYXQzMjtcclxuICAgICAgICAgICAgICAgIGRlY29kZXIuaW5wdXRTaXplID0gRkxPQVQzMl9TSVpFO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEVYUk91dHB1dFR5cGUuSGFsZkZsb2F0OlxyXG4gICAgICAgICAgICAgICAgZGVjb2Rlci5nZXR0ZXIgPSBEZWNvZGVGbG9hdDMyO1xyXG4gICAgICAgICAgICAgICAgZGVjb2Rlci5pbnB1dFNpemUgPSBGTE9BVDMyX1NJWkU7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBwaXhlbFR5cGUgXCIgKyBkZWNvZGVyLnR5cGUgKyBcIiBmb3IgXCIgKyBoZWFkZXIuY29tcHJlc3Npb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlY29kZXIuYmxvY2tDb3VudCA9IGRlY29kZXIuaGVpZ2h0IC8gZGVjb2Rlci5zY2FubGluZUJsb2NrU2l6ZTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY29kZXIuYmxvY2tDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgUGFyc2VJbnQ2NChkYXRhVmlldywgb2Zmc2V0KTsgLy8gc2NhbmxpbmVPZmZzZXRcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSBzaG91bGQgYmUgcGFzc2VkIHRoZSBzY2FubGluZSBvZmZzZXQgdGFibGUsIHJlYWR5IHRvIHN0YXJ0IHJlYWRpbmcgcGl4ZWwgZGF0YS5cclxuICAgIGNvbnN0IHNpemUgPSBkZWNvZGVyLndpZHRoICogZGVjb2Rlci5oZWlnaHQgKiBkZWNvZGVyLm91dHB1dENoYW5uZWxzO1xyXG5cclxuICAgIHN3aXRjaCAob3V0cHV0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgRVhST3V0cHV0VHlwZS5GbG9hdDpcclxuICAgICAgICAgICAgZGVjb2Rlci5ieXRlQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHNpemUpO1xyXG4gICAgICAgICAgICBkZWNvZGVyLnRleHR1cmVUeXBlID0gQ29uc3RhbnRzLlRFWFRVUkVUWVBFX0ZMT0FUO1xyXG5cclxuICAgICAgICAgICAgLy8gRmlsbCBpbml0aWFsbHkgd2l0aCAxcyBmb3IgdGhlIGFscGhhIHZhbHVlIGlmIHRoZSB0ZXh0dXJlIGlzIG5vdCBSR0JBLCBSR0IgdmFsdWVzIHdpbGwgYmUgb3ZlcndyaXR0ZW5cclxuICAgICAgICAgICAgaWYgKGZpbGxBbHBoYSkge1xyXG4gICAgICAgICAgICAgICAgZGVjb2Rlci5ieXRlQXJyYXkuZmlsbCgxLCAwLCBzaXplKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgRVhST3V0cHV0VHlwZS5IYWxmRmxvYXQ6XHJcbiAgICAgICAgICAgIGRlY29kZXIuYnl0ZUFycmF5ID0gbmV3IFVpbnQxNkFycmF5KHNpemUpO1xyXG4gICAgICAgICAgICBkZWNvZGVyLnRleHR1cmVUeXBlID0gQ29uc3RhbnRzLlRFWFRVUkVUWVBFX0hBTEZfRkxPQVQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmlsbEFscGhhKSB7XHJcbiAgICAgICAgICAgICAgICBkZWNvZGVyLmJ5dGVBcnJheS5maWxsKDB4M2MwMCwgMCwgc2l6ZSk7IC8vIFVpbnQxNkFycmF5IGhvbGRzIGhhbGYgZmxvYXQgZGF0YSwgMHgzQzAwIGlzIDFcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHR5cGU6IFwiICsgb3V0cHV0VHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJ5dGVPZmZzZXQgPSAwO1xyXG4gICAgZm9yIChjb25zdCBjaGFubmVsIG9mIGhlYWRlci5jaGFubmVscykge1xyXG4gICAgICAgIGlmIChkZWNvZGVyLmRlY29kZUNoYW5uZWxzW2NoYW5uZWwubmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBkZWNvZGVyLmNoYW5uZWxMaW5lT2Zmc2V0c1tjaGFubmVsLm5hbWVdID0gYnl0ZU9mZnNldCAqIGRlY29kZXIud2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBieXRlT2Zmc2V0ICs9IGNoYW5uZWwucGl4ZWxUeXBlICogMjtcclxuICAgIH1cclxuXHJcbiAgICBkZWNvZGVyLmJ5dGVzUGVyTGluZSA9IGRlY29kZXIud2lkdGggKiBieXRlT2Zmc2V0O1xyXG4gICAgZGVjb2Rlci5vdXRMaW5lV2lkdGggPSBkZWNvZGVyLndpZHRoICogZGVjb2Rlci5vdXRwdXRDaGFubmVscztcclxuXHJcbiAgICBpZiAoaGVhZGVyLmxpbmVPcmRlciA9PT0gXCJJTkNSRUFTSU5HX1lcIikge1xyXG4gICAgICAgIGRlY29kZXIuc2Nhbk9yZGVyID0gKHkpID0+IHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlY29kZXIuc2Nhbk9yZGVyID0gKHkpID0+IGRlY29kZXIuaGVpZ2h0IC0gMSAtIHk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlY29kZXIub3V0cHV0Q2hhbm5lbHMgPT0gNCkge1xyXG4gICAgICAgIGRlY29kZXIuZm9ybWF0ID0gQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfUkdCQTtcclxuICAgICAgICBkZWNvZGVyLmxpbmVhclNwYWNlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVjb2Rlci5mb3JtYXQgPSBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9SO1xyXG4gICAgICAgIGRlY29kZXIubGluZWFyU3BhY2UgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGVjb2RlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNjYW4gdGhlIGRhdGEgb2YgdGhlIGV4ciBmaWxlXHJcbiAqIEBwYXJhbSBkZWNvZGVyIGRlY29kZXIgdG8gdXNlXHJcbiAqIEBwYXJhbSBoZWFkZXIgaGVhZGVyIG9mIHRoZSBleHIgZmlsZVxyXG4gKiBAcGFyYW0gZGF0YVZpZXcgZGF0YXZpZXcgb2YgdGhlIGV4ciBmaWxlXHJcbiAqIEBwYXJhbSBvZmZzZXQgY3VycmVudCBvZmZzZXRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBTY2FuRGF0YShkZWNvZGVyOiBJRVhSRGVjb2RlciwgaGVhZGVyOiBJRVhSSGVhZGVyLCBkYXRhVmlldzogRGF0YVZpZXcsIG9mZnNldDogRGF0YUN1cnNvcik6IHZvaWQge1xyXG4gICAgY29uc3QgdG1wT2Zmc2V0ID0geyB2YWx1ZTogMCB9O1xyXG5cclxuICAgIGZvciAobGV0IHNjYW5saW5lQmxvY2tJZHggPSAwOyBzY2FubGluZUJsb2NrSWR4IDwgZGVjb2Rlci5oZWlnaHQgLyBkZWNvZGVyLnNjYW5saW5lQmxvY2tTaXplOyBzY2FubGluZUJsb2NrSWR4KyspIHtcclxuICAgICAgICBjb25zdCBsaW5lID0gUGFyc2VJbnQzMihkYXRhVmlldywgb2Zmc2V0KSAtIGhlYWRlci5kYXRhV2luZG93LnlNaW47IC8vIGxpbmVfbm9cclxuICAgICAgICBkZWNvZGVyLnNpemUgPSBQYXJzZVVpbnQzMihkYXRhVmlldywgb2Zmc2V0KTsgLy8gZGF0YV9sZW5cclxuICAgICAgICBkZWNvZGVyLmxpbmVzID0gbGluZSArIGRlY29kZXIuc2NhbmxpbmVCbG9ja1NpemUgPiBkZWNvZGVyLmhlaWdodCA/IGRlY29kZXIuaGVpZ2h0IC0gbGluZSA6IGRlY29kZXIuc2NhbmxpbmVCbG9ja1NpemU7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQ29tcHJlc3NlZCA9IGRlY29kZXIuc2l6ZSA8IGRlY29kZXIubGluZXMgKiBkZWNvZGVyLmJ5dGVzUGVyTGluZTtcclxuICAgICAgICBjb25zdCB2aWV3ZXIgPSBpc0NvbXByZXNzZWQgJiYgZGVjb2Rlci51bmNvbXByZXNzID8gZGVjb2Rlci51bmNvbXByZXNzKGRlY29kZXIpIDogVW5jb21wcmVzc1JBVyhkZWNvZGVyKTtcclxuXHJcbiAgICAgICAgb2Zmc2V0LnZhbHVlICs9IGRlY29kZXIuc2l6ZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgbGluZVkgPSAwOyBsaW5lWSA8IGRlY29kZXIuc2NhbmxpbmVCbG9ja1NpemU7IGxpbmVZKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NhblkgPSBzY2FubGluZUJsb2NrSWR4ICogZGVjb2Rlci5zY2FubGluZUJsb2NrU2l6ZTtcclxuICAgICAgICAgICAgY29uc3QgdHJ1ZVkgPSBsaW5lWSArIGRlY29kZXIuc2Nhbk9yZGVyKHNjYW5ZKTtcclxuICAgICAgICAgICAgaWYgKHRydWVZID49IGRlY29kZXIuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbGluZU9mZnNldCA9IGxpbmVZICogZGVjb2Rlci5ieXRlc1BlckxpbmU7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dExpbmVPZmZzZXQgPSAoZGVjb2Rlci5oZWlnaHQgLSAxIC0gdHJ1ZVkpICogZGVjb2Rlci5vdXRMaW5lV2lkdGg7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGFubmVsSUQgPSAwOyBjaGFubmVsSUQgPCBkZWNvZGVyLmNoYW5uZWxzOyBjaGFubmVsSUQrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGhlYWRlci5jaGFubmVsc1tjaGFubmVsSURdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsT2ZmID0gZGVjb2Rlci5jaGFubmVsTGluZU9mZnNldHNbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjT2ZmID0gZGVjb2Rlci5kZWNvZGVDaGFubmVsc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY09mZiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdG1wT2Zmc2V0LnZhbHVlID0gbGluZU9mZnNldCArIGxPZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBkZWNvZGVyLndpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXRJbmRleCA9IG91dExpbmVPZmZzZXQgKyB4ICogZGVjb2Rlci5vdXRwdXRDaGFubmVscyArIGNPZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlY29kZXIuYnl0ZUFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZXIuYnl0ZUFycmF5W291dEluZGV4XSA9IGRlY29kZXIuZ2V0dGVyKHZpZXdlciwgdG1wT2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XHJcbmltcG9ydCB0eXBlIHsgRGF0YUN1cnNvciB9IGZyb20gXCIuL2V4ckxvYWRlci5jb3JlXCI7XHJcbmltcG9ydCB7IFBhcnNlTnVsbFRlcm1pbmF0ZWRTdHJpbmcsIFBhcnNlVWludDMyLCBQYXJzZVZhbHVlIH0gZnJvbSBcIi4vZXhyTG9hZGVyLmNvcmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJRVhSSGVhZGVyIH0gZnJvbSBcIi4vZXhyTG9hZGVyLmludGVyZmFjZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vc2NpZWNvZGUvdGhyZWUuanMvYmxvYi9kZXYvZXhhbXBsZXMvanNtL2xvYWRlcnMvRVhSTG9hZGVyLmpzXHJcbiAqIFJlZmVycmVkIHRvIHRoZSBvcmlnaW5hbCBJbmR1c3RyaWFsIExpZ2h0ICYgTWFnaWMgT3BlbkVYUiBpbXBsZW1lbnRhdGlvbiBhbmQgdGhlIFRpbnlFWFIgLyBTeW95byBGdWppdGFcclxuICogaW1wbGVtZW50YXRpb24uXHJcbiAqL1xyXG5cclxuLy8gLypcclxuLy8gQ29weXJpZ2h0IChjKSAyMDE0IC0gMjAxNywgU3lveW8gRnVqaXRhXHJcbi8vIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcclxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbi8vICAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XHJcbi8vICAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuLy8gICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHRcclxuLy8gICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxyXG4vLyAgICAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG4vLyAgICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBTeW95byBGdWppdGEgbm9yIHRoZVxyXG4vLyAgICAgICBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0c1xyXG4vLyAgICAgICBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuXHJcbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORFxyXG4vLyBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxyXG4vLyBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFXHJcbi8vIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIDxDT1BZUklHSFQgSE9MREVSPiBCRSBMSUFCTEUgRk9SIEFOWVxyXG4vLyBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFU1xyXG4vLyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7XHJcbi8vIExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORFxyXG4vLyBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxyXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJU1xyXG4vLyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuLy8gKi9cclxuXHJcbi8vIC8vIFRpbnlFWFIgY29udGFpbnMgc29tZSBPcGVuRVhSIGNvZGUsIHdoaWNoIGlzIGxpY2Vuc2VkIHVuZGVyIC0tLS0tLS0tLS0tLVxyXG5cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIC8vXHJcbi8vIC8vIENvcHlyaWdodCAoYykgMjAwMiwgSW5kdXN0cmlhbCBMaWdodCAmIE1hZ2ljLCBhIGRpdmlzaW9uIG9mIEx1Y2FzXHJcbi8vIC8vIERpZ2l0YWwgTHRkLiBMTENcclxuLy8gLy9cclxuLy8gLy8gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gLy9cclxuLy8gLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XHJcbi8vIC8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcclxuLy8gLy8gbWV0OlxyXG4vLyAvLyAqICAgICAgIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XHJcbi8vIC8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuLy8gLy8gKiAgICAgICBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXHJcbi8vIC8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcclxuLy8gLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxyXG4vLyAvLyBkaXN0cmlidXRpb24uXHJcbi8vIC8vICogICAgICAgTmVpdGhlciB0aGUgbmFtZSBvZiBJbmR1c3RyaWFsIExpZ2h0ICYgTWFnaWMgbm9yIHRoZSBuYW1lcyBvZlxyXG4vLyAvLyBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkXHJcbi8vIC8vIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuLy8gLy9cclxuLy8gLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xyXG4vLyAvLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXHJcbi8vIC8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxyXG4vLyAvLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxyXG4vLyAvLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcclxuLy8gLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxyXG4vLyAvLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcclxuLy8gLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXHJcbi8vIC8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcclxuLy8gLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXHJcbi8vIC8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbi8vIC8vXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gLy8gRW5kIG9mIE9wZW5FWFIgbGljZW5zZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBFWFJfTUFHSUMgPSAyMDAwMDYzMDtcclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSBFWFIgaGVhZGVyXHJcbiAqIEBwYXJhbSBkYXRhVmlldyBkZWZpbmVzIHRoZSBkYXRhIHZpZXcgdG8gcmVhZCBmcm9tXHJcbiAqIEBwYXJhbSBvZmZzZXQgZGVmaW5lcyB0aGUgb2Zmc2V0IHRvIHN0YXJ0IHJlYWRpbmcgZnJvbVxyXG4gKiBAcmV0dXJucyB0aGUgaGVhZGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gR2V0RXhySGVhZGVyKGRhdGFWaWV3OiBEYXRhVmlldywgb2Zmc2V0OiBEYXRhQ3Vyc29yKTogSUVYUkhlYWRlciB7XHJcbiAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDMyKDAsIHRydWUpICE9IEVYUl9NQUdJQykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBPcGVuRVhSIGZvcm1hdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2ZXJzaW9uID0gZGF0YVZpZXcuZ2V0VWludDgoNCk7XHJcblxyXG4gICAgY29uc3Qgc3BlY0RhdGEgPSBkYXRhVmlldy5nZXRVaW50OCg1KTsgLy8gZnVsbE1hc2tcclxuICAgIGNvbnN0IHNwZWMgPSB7XHJcbiAgICAgICAgc2luZ2xlVGlsZTogISEoc3BlY0RhdGEgJiAyKSxcclxuICAgICAgICBsb25nTmFtZTogISEoc3BlY0RhdGEgJiA0KSxcclxuICAgICAgICBkZWVwRm9ybWF0OiAhIShzcGVjRGF0YSAmIDgpLFxyXG4gICAgICAgIG11bHRpUGFydDogISEoc3BlY0RhdGEgJiAxNiksXHJcbiAgICB9O1xyXG5cclxuICAgIG9mZnNldC52YWx1ZSA9IDg7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyRGF0YTogYW55ID0ge307XHJcblxyXG4gICAgbGV0IGtlZXBSZWFkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICB3aGlsZSAoa2VlcFJlYWRpbmcpIHtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gUGFyc2VOdWxsVGVybWluYXRlZFN0cmluZyhkYXRhVmlldy5idWZmZXIsIG9mZnNldCk7XHJcblxyXG4gICAgICAgIGlmICghYXR0cmlidXRlTmFtZSkge1xyXG4gICAgICAgICAgICBrZWVwUmVhZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVR5cGUgPSBQYXJzZU51bGxUZXJtaW5hdGVkU3RyaW5nKGRhdGFWaWV3LmJ1ZmZlciwgb2Zmc2V0KTtcclxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlU2l6ZSA9IFBhcnNlVWludDMyKGRhdGFWaWV3LCBvZmZzZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IFBhcnNlVmFsdWUoZGF0YVZpZXcsIG9mZnNldCwgYXR0cmlidXRlVHlwZSwgYXR0cmlidXRlU2l6ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlVmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYFVua25vd24gaGVhZGVyIGF0dHJpYnV0ZSB0eXBlICR7YXR0cmlidXRlVHlwZX0nLmApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyRGF0YVthdHRyaWJ1dGVOYW1lXSA9IGF0dHJpYnV0ZVZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgoc3BlY0RhdGEgJiB+MHgwNCkgIT0gMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGZpbGUgZm9ybWF0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHZlcnNpb246IHZlcnNpb24sIHNwZWM6IHNwZWMsIC4uLmhlYWRlckRhdGEgfTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgRGF0YUN1cnNvciB9IGZyb20gXCIuL2V4ckxvYWRlci5jb3JlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSU5UMzJfU0laRSA9IDQ7XHJcbmV4cG9ydCBjb25zdCBGTE9BVDMyX1NJWkUgPSA0O1xyXG5leHBvcnQgY29uc3QgSU5UOF9TSVpFID0gMTtcclxuZXhwb3J0IGNvbnN0IElOVDE2X1NJWkUgPSAyO1xyXG5leHBvcnQgY29uc3QgVUxPTkdfU0laRSA9IDg7XHJcbmV4cG9ydCBjb25zdCBVU0hPUlRfUkFOR0UgPSAxIDw8IDE2O1xyXG5leHBvcnQgY29uc3QgQklUTUFQX1NJWkUgPSBVU0hPUlRfUkFOR0UgPj4gMztcclxuZXhwb3J0IGNvbnN0IEhVRl9FTkNCSVRTID0gMTY7XHJcbmV4cG9ydCBjb25zdCBIVUZfREVDQklUUyA9IDE0O1xyXG5leHBvcnQgY29uc3QgSFVGX0VOQ1NJWkUgPSAoMSA8PCBIVUZfRU5DQklUUykgKyAxO1xyXG5leHBvcnQgY29uc3QgSFVGX0RFQ1NJWkUgPSAxIDw8IEhVRl9ERUNCSVRTO1xyXG5leHBvcnQgY29uc3QgSFVGX0RFQ01BU0sgPSBIVUZfREVDU0laRSAtIDE7XHJcbmV4cG9ydCBjb25zdCBTSE9SVF9aRVJPQ09ERV9SVU4gPSA1OTtcclxuZXhwb3J0IGNvbnN0IExPTkdfWkVST0NPREVfUlVOID0gNjM7XHJcbmV4cG9ydCBjb25zdCBTSE9SVEVTVF9MT05HX1JVTiA9IDIgKyBMT05HX1pFUk9DT0RFX1JVTiAtIFNIT1JUX1pFUk9DT0RFX1JVTjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVYUkNIYW5uZWwge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcGl4ZWxUeXBlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURlY29kZUNoYW5uZWwge1xyXG4gICAgW25hbWU6IHN0cmluZ106IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB1c2VkIHRvIGRlZmluZSB0aGUgRVhSIGhlYWRlclxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRVhSSGVhZGVyIHtcclxuICAgIC8qKiBWZXJzaW9uICovXHJcbiAgICB2ZXJzaW9uOiBudW1iZXI7XHJcbiAgICAvKiogU3BlY2lmaWNhdGlvbnMgKi9cclxuICAgIHNwZWM6IHtcclxuICAgICAgICBzaW5nbGVUaWxlOiBib29sZWFuO1xyXG4gICAgICAgIGxvbmdOYW1lOiBib29sZWFuO1xyXG4gICAgICAgIGRlZXBGb3JtYXQ6IGJvb2xlYW47XHJcbiAgICAgICAgbXVsdGlQYXJ0OiBib29sZWFuO1xyXG4gICAgfTtcclxuICAgIC8qKiBEYXRhIHdpbmRvdyAqL1xyXG4gICAgZGF0YVdpbmRvdzoge1xyXG4gICAgICAgIHhNaW46IG51bWJlcjtcclxuICAgICAgICB4TWF4OiBudW1iZXI7XHJcbiAgICAgICAgeU1pbjogbnVtYmVyO1xyXG4gICAgICAgIHlNYXg6IG51bWJlcjtcclxuICAgIH07XHJcbiAgICAvKiogQ2hhbm5lbHMgKi9cclxuICAgIGNoYW5uZWxzOiBJRVhSQ0hhbm5lbFtdO1xyXG4gICAgLyoqIEV4dHJhIGRhdGEgKi9cclxuICAgIFtuYW1lOiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVYUkRlY29kZXIge1xyXG4gICAgc2l6ZTogbnVtYmVyO1xyXG4gICAgdmlld2VyOiBEYXRhVmlldztcclxuICAgIGFycmF5OiBVaW50OEFycmF5O1xyXG4gICAgYnl0ZUFycmF5OiBOdWxsYWJsZTxGbG9hdDMyQXJyYXkgfCBVaW50MTZBcnJheT47XHJcbiAgICBvZmZzZXQ6IERhdGFDdXJzb3I7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBjaGFubmVsczogbnVtYmVyO1xyXG4gICAgY2hhbm5lbExpbmVPZmZzZXRzOiBJRGVjb2RlQ2hhbm5lbDtcclxuICAgIHNjYW5PcmRlcjogKHZhbHVlOiBudW1iZXIpID0+IG51bWJlcjtcclxuICAgIGJ5dGVzUGVyTGluZTogbnVtYmVyO1xyXG4gICAgb3V0TGluZVdpZHRoOiBudW1iZXI7XHJcbiAgICBsaW5lczogbnVtYmVyO1xyXG4gICAgc2NhbmxpbmVCbG9ja1NpemU6IG51bWJlcjtcclxuICAgIGlucHV0U2l6ZTogTnVsbGFibGU8bnVtYmVyPjtcclxuICAgIHR5cGU6IG51bWJlcjtcclxuICAgIHVuY29tcHJlc3M6IE51bGxhYmxlPChkZWNvZGVyOiBJRVhSRGVjb2RlcikgPT4gRGF0YVZpZXc+O1xyXG4gICAgZ2V0dGVyOiAoZGF0YVZpZXc6IERhdGFWaWV3LCBvZmZzZXQ6IERhdGFDdXJzb3IpID0+IG51bWJlcjtcclxuICAgIGZvcm1hdDogbnVtYmVyO1xyXG4gICAgb3V0cHV0Q2hhbm5lbHM6IG51bWJlcjtcclxuICAgIGRlY29kZUNoYW5uZWxzOiBJRGVjb2RlQ2hhbm5lbDtcclxuICAgIGJsb2NrQ291bnQ6IE51bGxhYmxlPG51bWJlcj47XHJcbiAgICBsaW5lYXJTcGFjZTogYm9vbGVhbjtcclxuICAgIHRleHR1cmVUeXBlOiBudW1iZXI7XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgSW50ZXJuYWxUZXh0dXJlIH0gZnJvbSBcIi4uL2ludGVybmFsVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElJbnRlcm5hbFRleHR1cmVMb2FkZXIgfSBmcm9tIFwiLi9pbnRlcm5hbFRleHR1cmVMb2FkZXJcIjtcclxuaW1wb3J0IHsgR2V0RXhySGVhZGVyIH0gZnJvbSBcIi4vRVhSL2V4ckxvYWRlci5oZWFkZXJcIjtcclxuaW1wb3J0IHsgQ3JlYXRlRGVjb2RlckFzeW5jLCBTY2FuRGF0YSB9IGZyb20gXCIuL0VYUi9leHJMb2FkZXIuZGVjb2RlclwiO1xyXG5pbXBvcnQgeyBFeHJMb2FkZXJHbG9iYWxDb25maWd1cmF0aW9uLCBFWFJPdXRwdXRUeXBlIH0gZnJvbSBcIi4vRVhSL2V4ckxvYWRlci5jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XHJcblxyXG4vKipcclxuICogSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL3NjaWVjb2RlL3RocmVlLmpzL2Jsb2IvZGV2L2V4YW1wbGVzL2pzbS9sb2FkZXJzL0VYUkxvYWRlci5qc1xyXG4gKiBSZWZlcnJlZCB0byB0aGUgb3JpZ2luYWwgSW5kdXN0cmlhbCBMaWdodCAmIE1hZ2ljIE9wZW5FWFIgaW1wbGVtZW50YXRpb24gYW5kIHRoZSBUaW55RVhSIC8gU3lveW8gRnVqaXRhXHJcbiAqIGltcGxlbWVudGF0aW9uLlxyXG4gKi9cclxuXHJcbi8vIC8qXHJcbi8vIENvcHlyaWdodCAoYykgMjAxNCAtIDIwMTcsIFN5b3lvIEZ1aml0YVxyXG4vLyBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XHJcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4vLyAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxyXG4vLyAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbi8vICAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XHJcbi8vICAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGVcclxuLy8gICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuLy8gICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgU3lveW8gRnVqaXRhIG5vciB0aGVcclxuLy8gICAgICAgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHNcclxuLy8gICAgICAgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcblxyXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkRcclxuLy8gQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcclxuLy8gV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRVxyXG4vLyBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCA8Q09QWVJJR0hUIEhPTERFUj4gQkUgTElBQkxFIEZPUiBBTllcclxuLy8gRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVNcclxuLy8gKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTO1xyXG4vLyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkRcclxuLy8gT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcclxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVNcclxuLy8gU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbi8vICovXHJcblxyXG4vLyAvLyBUaW55RVhSIGNvbnRhaW5zIHNvbWUgT3BlbkVYUiBjb2RlLCB3aGljaCBpcyBsaWNlbnNlZCB1bmRlciAtLS0tLS0tLS0tLS1cclxuXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyAvL1xyXG4vLyAvLyBDb3B5cmlnaHQgKGMpIDIwMDIsIEluZHVzdHJpYWwgTGlnaHQgJiBNYWdpYywgYSBkaXZpc2lvbiBvZiBMdWNhc1xyXG4vLyAvLyBEaWdpdGFsIEx0ZC4gTExDXHJcbi8vIC8vXHJcbi8vIC8vIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIC8vXHJcbi8vIC8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxyXG4vLyAvLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXHJcbi8vIC8vIG1ldDpcclxuLy8gLy8gKiAgICAgICBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxyXG4vLyAvLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbi8vIC8vICogICAgICAgUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxyXG4vLyAvLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXHJcbi8vIC8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcclxuLy8gLy8gZGlzdHJpYnV0aW9uLlxyXG4vLyAvLyAqICAgICAgIE5laXRoZXIgdGhlIG5hbWUgb2YgSW5kdXN0cmlhbCBMaWdodCAmIE1hZ2ljIG5vciB0aGUgbmFtZXMgb2ZcclxuLy8gLy8gaXRzIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZFxyXG4vLyAvLyBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbi8vIC8vXHJcbi8vIC8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcclxuLy8gLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxyXG4vLyAvLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcclxuLy8gLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcclxuLy8gLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXHJcbi8vIC8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1RcclxuLy8gLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXHJcbi8vIC8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxyXG4vLyAvLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXHJcbi8vIC8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxyXG4vLyAvLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxyXG4vLyAvL1xyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIC8vIEVuZCBvZiBPcGVuRVhSIGxpY2Vuc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLyoqXHJcbiAqIExvYWRlciBmb3IgLmV4ciBmaWxlIGZvcm1hdFxyXG4gKiBAc2VlIFtQSVogY29tcHJlc3Npb25dKGh0dHBzOi8vcGxheWdyb3VuZC5iYWJ5bG9uanMuY29tLyM0Uk4wVkYjMTUxKVxyXG4gKiBAc2VlIFtaSVAgY29tcHJlc3Npb25dKGh0dHBzOi8vcGxheWdyb3VuZC5iYWJ5bG9uanMuY29tLyM0Uk4wVkYjMTQ2KVxyXG4gKiBAc2VlIFtSTEUgY29tcHJlc3Npb25dKGh0dHBzOi8vcGxheWdyb3VuZC5iYWJ5bG9uanMuY29tLyM0Uk4wVkYjMTQ5KVxyXG4gKiBAc2VlIFtQWFIyNCBjb21wcmVzc2lvbl0oaHR0cHM6Ly9wbGF5Z3JvdW5kLmJhYnlsb25qcy5jb20vIzRSTjBWRiMxNTApXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgX0V4clRleHR1cmVMb2FkZXIgaW1wbGVtZW50cyBJSW50ZXJuYWxUZXh0dXJlTG9hZGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoZSBsb2FkZXIgc3VwcG9ydHMgY2FzY2FkZSBsb2FkaW5nIHRoZSBkaWZmZXJlbnQgZmFjZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBzdXBwb3J0Q2FzY2FkZXMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwbG9hZHMgdGhlIGN1YmUgdGV4dHVyZSBkYXRhIHRvIHRoZSBXZWJHTCB0ZXh0dXJlLiBJdCBoYXMgYWxyZWFkeSBiZWVuIGJvdW5kLlxyXG4gICAgICogQHBhcmFtIF9kYXRhIGNvbnRhaW5zIHRoZSB0ZXh0dXJlIGRhdGFcclxuICAgICAqIEBwYXJhbSBfdGV4dHVyZSBkZWZpbmVzIHRoZSBCYWJ5bG9uSlMgaW50ZXJuYWwgdGV4dHVyZVxyXG4gICAgICogQHBhcmFtIF9jcmVhdGVQb2x5bm9taWFscyB3aWxsIGJlIHRydWUgaWYgcG9seW5vbWlhbHMgaGF2ZSBiZWVuIHJlcXVlc3RlZFxyXG4gICAgICogQHBhcmFtIF9vbkxvYWQgZGVmaW5lcyB0aGUgY2FsbGJhY2sgdG8gdHJpZ2dlciBvbmNlIHRoZSB0ZXh0dXJlIGlzIHJlYWR5XHJcbiAgICAgKiBAcGFyYW0gX29uRXJyb3IgZGVmaW5lcyB0aGUgY2FsbGJhY2sgdG8gdHJpZ2dlciBpbiBjYXNlIG9mIGVycm9yXHJcbiAgICAgKiBDdWJlIHRleHR1cmUgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgLmV4ciBmaWxlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEN1YmVEYXRhKFxyXG4gICAgICAgIF9kYXRhOiBBcnJheUJ1ZmZlclZpZXcgfCBBcnJheUJ1ZmZlclZpZXdbXSxcclxuICAgICAgICBfdGV4dHVyZTogSW50ZXJuYWxUZXh0dXJlLFxyXG4gICAgICAgIF9jcmVhdGVQb2x5bm9taWFsczogYm9vbGVhbixcclxuICAgICAgICBfb25Mb2FkOiBOdWxsYWJsZTwoZGF0YT86IGFueSkgPT4gdm9pZD4sXHJcbiAgICAgICAgX29uRXJyb3I6IE51bGxhYmxlPChtZXNzYWdlPzogc3RyaW5nLCBleGNlcHRpb24/OiBhbnkpID0+IHZvaWQ+XHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxyXG4gICAgICAgIHRocm93IFwiLmV4ciBub3Qgc3VwcG9ydGVkIGluIEN1YmUuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGxvYWRzIHRoZSAyRCB0ZXh0dXJlIGRhdGEgdG8gdGhlIFdlYkdMIHRleHR1cmUuIEl0IGhhcyBhbHJlYWR5IGJlZW4gYm91bmQgb25jZSBpbiB0aGUgY2FsbGJhY2suXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBjb250YWlucyB0aGUgdGV4dHVyZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gdGV4dHVyZSBkZWZpbmVzIHRoZSBCYWJ5bG9uSlMgaW50ZXJuYWwgdGV4dHVyZVxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIGRlZmluZXMgdGhlIG1ldGhvZCB0byBjYWxsIG9uY2UgcmVhZHkgdG8gdXBsb2FkXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIHB1YmxpYyBsb2FkRGF0YShcclxuICAgICAgICBkYXRhOiBBcnJheUJ1ZmZlclZpZXcsXHJcbiAgICAgICAgdGV4dHVyZTogSW50ZXJuYWxUZXh0dXJlLFxyXG4gICAgICAgIGNhbGxiYWNrOiAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGxvYWRNaXBtYXA6IGJvb2xlYW4sIGlzQ29tcHJlc3NlZDogYm9vbGVhbiwgZG9uZTogKCkgPT4gdm9pZCwgZmFpbGVkTG9hZGluZz86IGJvb2xlYW4pID0+IHZvaWRcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGRhdGEuYnVmZmVyKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0geyB2YWx1ZTogMCB9O1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IEdldEV4ckhlYWRlcihkYXRhVmlldywgb2Zmc2V0KTtcclxuICAgICAgICBDcmVhdGVEZWNvZGVyQXN5bmMoaGVhZGVyLCBkYXRhVmlldywgb2Zmc2V0LCBFeHJMb2FkZXJHbG9iYWxDb25maWd1cmF0aW9uLkRlZmF1bHRPdXRwdXRUeXBlKVxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgLnRoZW4oKGRlY29kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIFNjYW5EYXRhKGRlY29kZXIsIGhlYWRlciwgZGF0YVZpZXcsIG9mZnNldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRpbmcgdGV4dHVyZVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBoZWFkZXIuZGF0YVdpbmRvdy54TWF4IC0gaGVhZGVyLmRhdGFXaW5kb3cueE1pbiArIDE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBoZWFkZXIuZGF0YVdpbmRvdy55TWF4IC0gaGVhZGVyLmRhdGFXaW5kb3cueU1pbiArIDE7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh3aWR0aCwgaGVpZ2h0LCB0ZXh0dXJlLmdlbmVyYXRlTWlwTWFwcywgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmdpbmUgPSB0ZXh0dXJlLmdldEVuZ2luZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmUuZm9ybWF0ID0gaGVhZGVyLmZvcm1hdDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLnR5cGUgPSBkZWNvZGVyLnRleHR1cmVUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmUuaW52ZXJ0WSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmUuX2dhbW1hU3BhY2UgPSAhaGVhZGVyLmxpbmVhclNwYWNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWNvZGVyLmJ5dGVBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmdpbmUuX3VwbG9hZERhdGFUb1RleHR1cmVEaXJlY3RseSh0ZXh0dXJlLCBkZWNvZGVyLmJ5dGVBcnJheSwgMCwgMCwgdW5kZWZpbmVkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihcIkZhaWxlZCB0byBsb2FkIEVYUiB0ZXh0dXJlOiBcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlYWQgdGhlIEVYUiBkYXRhIGZyb20gYW4gQXJyYXlCdWZmZXJWaWV3IGFzeW5jaHJvbm91c2x5LlxyXG4gKiBAcGFyYW0gZGF0YSBBcnJheUJ1ZmZlclZpZXcgY29udGFpbmluZyB0aGUgRVhSIGRhdGFcclxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHdpZHRoLCBoZWlnaHQsIGFuZCBkYXRhIG9mIHRoZSBFWFIgdGV4dHVyZS5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBSZWFkRXhyRGF0YUFzeW5jKGRhdGE6IEFycmF5QnVmZmVyKTogUHJvbWlzZTx7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyBkYXRhOiBOdWxsYWJsZTxGbG9hdDMyQXJyYXk+IH0+IHtcclxuICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGRhdGEpO1xyXG5cclxuICAgIGNvbnN0IG9mZnNldCA9IHsgdmFsdWU6IDAgfTtcclxuICAgIGNvbnN0IGhlYWRlciA9IEdldEV4ckhlYWRlcihkYXRhVmlldywgb2Zmc2V0KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGVjb2RlciA9IGF3YWl0IENyZWF0ZURlY29kZXJBc3luYyhoZWFkZXIsIGRhdGFWaWV3LCBvZmZzZXQsIEVYUk91dHB1dFR5cGUuRmxvYXQpO1xyXG4gICAgICAgIFNjYW5EYXRhKGRlY29kZXIsIGhlYWRlciwgZGF0YVZpZXcsIG9mZnNldCk7XHJcblxyXG4gICAgICAgIGlmICghZGVjb2Rlci5ieXRlQXJyYXkpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiRmFpbGVkIHRvIGRlY29kZSBFWFIgZGF0YTogTm8gYnl0ZSBhcnJheSBhdmFpbGFibGUuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4geyB3aWR0aDogMCwgaGVpZ2h0OiAwLCBkYXRhOiBudWxsIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3aWR0aDogaGVhZGVyLmRhdGFXaW5kb3cueE1heCAtIGhlYWRlci5kYXRhV2luZG93LnhNaW4gKyAxLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGhlYWRlci5kYXRhV2luZG93LnlNYXggLSBoZWFkZXIuZGF0YVdpbmRvdy55TWluICsgMSxcclxuICAgICAgICAgICAgZGF0YTogbmV3IEZsb2F0MzJBcnJheShkZWNvZGVyLmJ5dGVBcnJheSksXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgTG9nZ2VyLkVycm9yKFwiRmFpbGVkIHRvIGxvYWQgRVhSIGRhdGE6IFwiLCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgd2lkdGg6IDAsIGhlaWdodDogMCwgZGF0YTogbnVsbCB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==