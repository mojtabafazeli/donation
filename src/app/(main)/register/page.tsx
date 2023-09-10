import FormAuth from '@/app/components/FormAuth/FormAuth';
import { FORM_TYPE } from "@/app/constants/formConstants";

export default function Auth() {
    return (
        <FormAuth form={FORM_TYPE.SIGN_UP} />
    )
}