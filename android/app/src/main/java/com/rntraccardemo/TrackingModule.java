package com.rntraccardemo;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.core.content.ContextCompat;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.rntraccardemo.TrackingService.TrackingService;

import java.util.HashSet;
import java.util.Set;


public class TrackingModule extends ReactContextBaseJavaModule {



    public TrackingModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);

    }



    @NonNull
    @Override
    public String getName() {
        return "TrackingModule";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void startService() {
        Intent service = new Intent(getReactApplicationContext(), TrackingService.class);
//        Bundle bundle = new Bundle();
//
//        bundle.putString("foo", "bar");
//        service.putExtras(bundle);

        getReactApplicationContext().startService(service);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void stopService() {
        Intent service = new Intent(getReactApplicationContext(), TrackingService.class);
        getReactApplicationContext().stopService(service);
    }
}
