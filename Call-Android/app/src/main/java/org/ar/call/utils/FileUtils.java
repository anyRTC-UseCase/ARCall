package org.ar.call.utils;

import android.content.Context;
import android.os.Environment;

import org.ar.rtm.RtmClient;

import java.io.File;

public class FileUtils {
    /**
     *
     * @param context
     * @param rtmClient
     * @param dir 文件夹名字，日志文件会在这里生成
     */
    public static void setLogFilePath(Context context, RtmClient rtmClient,String dir) {
        if ("mounted".equals(Environment.getExternalStorageState())) {
            File var1 = context.getExternalFilesDir((String)null);
            if (var1 != null) {
                String root = var1.getAbsolutePath();
                File fRoot = new File(root+"/"+dir);
                fRoot.mkdir();
                rtmClient.setLogFile(fRoot.getAbsolutePath());
            }
        }else {
            String root = context.getFilesDir().getAbsolutePath();
            File fRoot = new File(root+"/"+dir);
            fRoot.mkdir();
            rtmClient.setLogFile(fRoot.getAbsolutePath());
        }
    }



}
