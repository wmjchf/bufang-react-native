package com.bufang.react_native_umeng_sms;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.umeng.sms.UMSMS;
import com.umeng.sms.listener.UMSMSCheckListener;
import com.umeng.sms.listener.UMSMSCodeListener;

import java.util.Map;
import java.util.HashMap;

import static com.facebook.react.bridge.UiThreadUtil.runOnUiThread;

public class UMengSMSModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public UMengSMSModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }
    @Override
    public String getName() {
        return "UMengSMSPlugin";
    }
    //    @Override
//    public Map<String, Object> getConstants() {
//        final Map<String, Object> constants = new HashMap<>();
//        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
//        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
//        return constants;
//    }
    @ReactMethod
    public void getVerificationCode(String phoneNumber, String  tempId, final Callback successCallback, final Callback failCallback) {
        UMSMS.getVerificationCode(phoneNumber,tempId, new UMSMSCodeListener() {
            @Override
            public void getCodeSuccess(final String ret) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        successCallback.invoke(ret);
                    }
                });
            }
            @Override
            public void getCodeFailed(final int errCode,final String errMsg) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        failCallback.invoke(errCode + ":" +errMsg);
                    } });
            }
        });
    }
    @ReactMethod
    public void commitVerificationCode(String phoneNumber, String  code, final Callback successCallback, final Callback failCallback) {
        UMSMS.commitVerificationCode(phoneNumber, code, new UMSMSCheckListener() {
            @Override
            public void checkCodeSuccess(final String ret) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        successCallback.invoke(ret);
                    }
                });
            }
            @Override
            public void checkCodeFailed(final int errCode,final String errMsg) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        failCallback.invoke(errCode + ":" +errMsg);
                    }
                });
            }
        });
    }
}