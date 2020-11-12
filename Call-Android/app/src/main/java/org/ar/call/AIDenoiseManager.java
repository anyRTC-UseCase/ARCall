package org.ar.call;
import android.content.Context;

public class AIDenoiseManager {

    public AIDenoiseCallBack aiDenoiseCallBack;
    private Context mContext;
    private static AIDenoiseManager instance;

    public AIDenoiseManager getInstance(Context context) {
        if (instance == null) {
            instance = new AIDenoiseManager(context);
        }
        return instance;
    }

    public AIDenoiseManager(Context context){
        this.mContext =context.getApplicationContext();
    }

    public void setAIDenoiseCallBack(AIDenoiseCallBack aiDenoiseCallBack){
        this.aiDenoiseCallBack =aiDenoiseCallBack;
    }

    public void updateAI(int val){
        if (aiDenoiseCallBack!=null){
            aiDenoiseCallBack.updateAI(val);
        }
    }

}

