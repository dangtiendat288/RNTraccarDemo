package com.rntraccardemo;

import static com.rntraccardemo.SharedPreference.KeyConstants.KEY_DEVICE;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.util.Log;

public class SharedPrefModule extends ReactContextBaseJavaModule {
    private SharedPreferences mSharedPreference;
    public static final String KEY_TEXT = "KEY_TEXT";

    public SharedPrefModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);

        mSharedPreference = PreferenceManager.getDefaultSharedPreferences(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "SharedPrefModule";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getFromSharedPref(String key) {
        String text = "";
        if (mSharedPreference.contains(key)) {
            text = mSharedPreference.getString(key, "Nothing");
            Log.d("ABC", "Text: " + text);
        }
        return text;
    }

    ;

    @ReactMethod
    public void saveToSharedPref(String key,String id) {
//        if (!mSharedPreference.contains(KEY_TEXT)) {
            mSharedPreference.edit().putString(key, id).apply();
            Log.d("ABC", id+ " has been added to SharedPref successfully");
//        }
    }

}
