package org.ar.call.bean;

import java.util.List;

public class MultiUserBean {
    private int Mode;
    private boolean Conference;
    private String ChanId;
    private List<String> UserData;
    private String SipData;

    public MultiUserBean(int mode, boolean conference, String chanId, List<String> userData) {
        Mode = mode;
        Conference = conference;
        ChanId = chanId;
        UserData = userData;
    }

    public int getMode() {
        return Mode;
    }

    public void setMode(int mode) {
        Mode = mode;
    }

    public boolean isConference() {
        return Conference;
    }

    public void setConference(boolean conference) {
        Conference = conference;
    }

    public String getChanId() {
        return ChanId;
    }

    public void setChanId(String chanId) {
        ChanId = chanId;
    }

    public List<String> getUserData() {
        return UserData;
    }

    public void setUserData(List<String> userData) {
        UserData = userData;
    }

    public String getSipData() {
        return SipData;
    }

    public void setSipData(String sipData) {
        SipData = sipData;
    }
}
