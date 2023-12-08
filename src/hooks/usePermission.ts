import { useState } from "react";
import { Platform } from "react-native";
import {
    PERMISSIONS,
    Permission,
    PermissionStatus,
    openSettings,
    request,
    requestMultiple
} from "react-native-permissions";
export type tCommonPermissionKey = "CAMERA" | "ALBUM";

export type tPermissionInfo = {
    permissionKey: tCommonPermissionKey;
    required: boolean;
};

type tPermissionRequiredStatus = {
    visible: boolean;
    title: string;
    desc: string;
};

export const PERMISSION_DENIED_MODAL_DEFAULT_VALUE: tPermissionRequiredStatus = {
    visible: false,
    title: "",
    desc: ""
};

export const REQUIRE_PERMISSION_MODAL_TEXT = {
    frontPart: " 위해",
    rearPart: "에\n접근하도록 허용해 주세요",
    desc: "(설정 > 앱 정보 > 예배를그리다 > 권한 > \n"
};

type tPermissionDenied = {
    permission: tCommonPermissionKey;
    name: string;
    status: PermissionStatus;
};

const COMMON_PERMISSION_LIST: Record<tCommonPermissionKey, Permission> =
    Platform.OS === "android"
        ? {
              CAMERA: PERMISSIONS.ANDROID.CAMERA,
              ALBUM:
                  Platform.Version < 33
                      ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
                      : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
          }
        : {
              CAMERA: PERMISSIONS.IOS.CAMERA,
              ALBUM: PERMISSIONS.IOS.PHOTO_LIBRARY
          };

const PERMISSION_NAMES: Record<tCommonPermissionKey, string> = {
    CAMERA: "카메라",
    ALBUM: "사진앨범"
};
export const usePermission = () => {
    const [permissionRequired, setPermissionRequired] = useState<tPermissionRequiredStatus>(
        PERMISSION_DENIED_MODAL_DEFAULT_VALUE
    );

    const requestInitPermissions = async () => {
        const permissionList: Permission[] = [];

        if (Platform.OS === "android" && Platform.Version > 32) {
            permissionList.push(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
        }

        if (Platform.OS === "ios") {
            permissionList.push(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
        }

        await requestMultiple([...permissionList]);
    };

    const requestPermission = async (permission: tCommonPermissionKey): Promise<tPermissionDenied> => {
        const permissionStatus = await request(COMMON_PERMISSION_LIST[permission]);

        return { permission, name: PERMISSION_NAMES[permission], status: permissionStatus };
    };

    const closePermissionModal = async (openSetting?: boolean) => {
        openSetting && (await openSettings());
        setPermissionRequired(PERMISSION_DENIED_MODAL_DEFAULT_VALUE);
    };

    const setPermissionRequiredParams = ({
        visible,
        serviceName,
        permissionName
    }: {
        visible: boolean;
        serviceName: string;
        permissionName: string;
    }) =>
        setPermissionRequired({
            visible,
            title: `${serviceName} ${REQUIRE_PERMISSION_MODAL_TEXT.frontPart}${permissionName}${REQUIRE_PERMISSION_MODAL_TEXT.rearPart}`,
            desc: `${REQUIRE_PERMISSION_MODAL_TEXT.desc}${permissionName})`
        });

    return {
        permissionRequired,
        requestInitPermissions,
        requestPermission,
        openSettings,
        closePermissionModal,
        setPermissionRequiredParams
    };
};
