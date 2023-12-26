import { launchImageLibrary } from "react-native-image-picker";
import { PermissionStatus } from "react-native-permissions";
import { tCommonPermissionKey } from "~hooks/usePermission";
type tPermissionDenied = {
    permission: tCommonPermissionKey;
    name: string;
    status: PermissionStatus;
};
export const handleImagePicker = async (
    requestPermission: (permission: tCommonPermissionKey) => Promise<tPermissionDenied>,
    setPermissionRequiredParams: ({
        visible,
        serviceName,
        permissionName
    }: {
        visible: boolean;
        serviceName: string;
        permissionName: string;
    }) => void
) => {
    const permission = await requestPermission("ALBUM");
    if (permission.status === "blocked") {
        setPermissionRequiredParams({
            visible: true,
            serviceName: "",
            permissionName: permission.name
        });
        return;
    }

    const result = await launchImageLibrary({
        mediaType: "photo",
        selectionLimit: 1
    });

    if (result.didCancel || result.errorCode) return;

    return result.assets?.[0];
};
