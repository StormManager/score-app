import React, { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { useTheme } from "styled-components/native";
import CBToast, { tToastAction } from "./CBToast";

type tToastServiceCategory = "manage";

type tToastMessageType = "info" | "warn" | "check";

type tToastStyle = {
    mainColor: string;
    backgroundColor: string;
};

type tToastParams = {
    text: string;
    action?: tToastAction;
};

type ToastRef = {
    show: (messageType: tToastMessageType, serviceType: tToastServiceCategory, param: tToastParams) => void;
};

const ToastRoot = forwardRef<ToastRef, any>((_, ref) => {
    const themeApp = useTheme();
    const [open, setOpen] = useState(false);
    const [toastStyle, setToastStyle] = useState<tToastStyle>();
    const [params, setParams] = useState<tToastParams>();

    const show = (messageType: tToastMessageType, serviceType: tToastServiceCategory, param: tToastParams) => {
        setOpen(false);
        setTimeout(() => {
            setToastStyle({
                mainColor: themeApp.colors.white,
                backgroundColor: themeApp.colors.gray[4]
            });
            setParams(param);
            setOpen(true);
        }, 100)
    };

    useImperativeHandle(ref, () => ({
        show
    }));

    return (
        <>
            {open && (
                <CBToast
                    text={params?.text ?? ""}
                    mainColor={toastStyle?.mainColor ?? ""}
                    backgroundColor={toastStyle?.backgroundColor ?? ""}
                    onClose={() => setOpen(false)}
                />
            )}
        </>
    );
});

let _toastRef: ToastRef;

const connectRef = (_ref: ToastRef) => {
    _toastRef = _ref;
    return _toastRef;
};

const Toast = () => {
    const setRef = useCallback((_ref: ToastRef | null) => {
        if (_ref) {
            const ref = connectRef(_ref);
            return ref;
        }
    }, []);

    return <ToastRoot ref={setRef} />;
};

export default Toast;

Toast.info = (serviceType: tToastServiceCategory, param: tToastParams) => {
    _toastRef.show("info", serviceType, param);
};

Toast.warn = (serviceType: tToastServiceCategory, param: tToastParams) => {
    _toastRef.show("warn", serviceType, param);
};

Toast.check = (serviceType: tToastServiceCategory, param: tToastParams) => {
    _toastRef.show("check", serviceType, param);
};
