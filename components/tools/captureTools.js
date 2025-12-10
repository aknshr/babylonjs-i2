import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ButtonLine } from "shared-ui-components/fluent/hoc/buttonLine";
import { useState, useRef, useCallback } from "react";
import { Tools } from "core/Misc/tools";
import { SyncedSliderPropertyLine } from "shared-ui-components/fluent/hoc/propertyLines/syncedSliderPropertyLine";
import { SwitchPropertyLine } from "shared-ui-components/fluent/hoc/propertyLines/switchPropertyLine";
import { VideoRecorder } from "core/Misc/videoRecorder";
import { captureEquirectangularFromScene } from "core/Misc/equirectangularCapture";
import { Collapse } from "shared-ui-components/fluent/primitives/collapse";
import { CameraRegular, RecordRegular, RecordStopRegular } from "@fluentui/react-icons";
import { FrameGraphUtils } from "core/FrameGraph/frameGraphUtils";
export const CaptureRttTools = ({ scene }) => {
    const [useWidthHeight, setUseWidthHeight] = useState(false);
    const [screenshotSize, setScreenshotSize] = useState({ precision: 1 });
    const captureRender = useCallback(async () => {
        const sizeToUse = { ...screenshotSize };
        if (!useWidthHeight) {
            sizeToUse.width = undefined;
            sizeToUse.height = undefined;
        }
        if (scene.activeCamera) {
            Tools.CreateScreenshotUsingRenderTarget(scene.getEngine(), scene.activeCamera, sizeToUse, undefined, undefined, 4);
        }
    }, [scene, screenshotSize, useWidthHeight]);
    return (_jsxs(_Fragment, { children: [_jsx(ButtonLine, { label: "Capture", icon: CameraRegular, onClick: captureRender }), _jsx(SyncedSliderPropertyLine, { label: "Precision", value: screenshotSize.precision ?? 1, onChange: (value) => setScreenshotSize({ ...screenshotSize, precision: value ?? 1 }), min: 0.1, max: 10, step: 0.1 }), _jsx(SwitchPropertyLine, { label: "Use Custom Width/Height", value: useWidthHeight, onChange: (value) => setUseWidthHeight(value) }), _jsxs(Collapse, { visible: useWidthHeight, children: [_jsx(SyncedSliderPropertyLine, { label: "Width", value: screenshotSize.width ?? 512, onChange: (data) => setScreenshotSize({ ...screenshotSize, width: data ?? 512 }), min: 1, step: 1 }), _jsx(SyncedSliderPropertyLine, { label: "Height", value: screenshotSize.height ?? 512, onChange: (data) => setScreenshotSize({ ...screenshotSize, height: data ?? 512 }), min: 1, step: 1 })] })] }));
};
export const CaptureScreenshotTools = ({ scene }) => {
    const [isRecording, setIsRecording] = useState(false);
    const videoRecorder = useRef();
    const captureScreenshot = useCallback(() => {
        const camera = scene.frameGraph ? FrameGraphUtils.FindMainCamera(scene.frameGraph) : scene.activeCamera;
        if (camera) {
            Tools.CreateScreenshot(scene.getEngine(), camera, { precision: 1 });
        }
    }, [scene]);
    const captureEquirectangularAsync = useCallback(async () => {
        const currentActiveCamera = scene.activeCamera;
        if (!currentActiveCamera && scene.frameGraph) {
            scene.activeCamera = FrameGraphUtils.FindMainCamera(scene.frameGraph);
        }
        if (scene.activeCamera) {
            await captureEquirectangularFromScene(scene, { size: 1024, filename: "equirectangular_capture.png" });
        }
        // eslint-disable-next-line require-atomic-updates
        scene.activeCamera = currentActiveCamera;
    }, [scene]);
    const recordVideoAsync = useCallback(async () => {
        if (videoRecorder.current && videoRecorder.current.isRecording) {
            videoRecorder.current.stopRecording();
            setIsRecording(false);
            return;
        }
        if (!videoRecorder.current) {
            videoRecorder.current = new VideoRecorder(scene.getEngine());
        }
        void videoRecorder.current.startRecording();
        setIsRecording(true);
    }, [scene]);
    return (_jsxs(_Fragment, { children: [_jsx(ButtonLine, { label: "Capture", icon: CameraRegular, onClick: captureScreenshot }), _jsx(ButtonLine, { label: "Capture Equirectangular", icon: CameraRegular, onClick: captureEquirectangularAsync }), _jsx(ButtonLine, { label: isRecording ? "Stop Recording" : "Record Video", itemId: "Start/Stop Record", icon: isRecording ? RecordStopRegular : RecordRegular, onClick: recordVideoAsync })] }));
};
//# sourceMappingURL=captureTools.js.map