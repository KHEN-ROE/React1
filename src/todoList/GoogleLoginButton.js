
import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";

const GoogleLoginButton = () => {
    const clientId = '1050135280688-bgoki6c46rsshsbm68ru5mh075qnhlvn.apps.googleusercontent.com'
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                      useOneTap // 원탭로그인
                      auto_select // 자동로그인
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleLoginButton
