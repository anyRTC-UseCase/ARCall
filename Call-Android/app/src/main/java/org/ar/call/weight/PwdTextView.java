package org.ar.call.weight;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import androidx.appcompat.widget.AppCompatTextView;
import android.util.AttributeSet;

public class PwdTextView extends AppCompatTextView {
    private Context context;
    //Paint即画笔，在绘图过程中起到了极其重要的作用，画笔主要保存了颜色，
    //样式等绘制信息，指定了如何绘制文本和图形，画笔对象有很多设置方法，
    //大体上可以分为两类，一类与图形绘制相关，一类与文本绘制相关
    private Paint paintLine = new Paint();

    //下划线高度
    private int underlineHeight = 5;

    //下划线颜色
    private int underLineColor = Color.parseColor("#00000000");

    private float radius;

    private boolean hasPwd;

    public PwdTextView(Context context) {
        this(context, null);
    }

    public PwdTextView(Context context, AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public PwdTextView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        this.context = context;
    }

    public void setUnderlineHeight(int underlineHeight) {
        this.underlineHeight = dp2px(underlineHeight);
    }
    public void setUnderLineColor(int underLineColor) {
        this.underLineColor = underLineColor;
        invalidate();
    }
    /**
     * dp转换成dx
     */
    public int dp2px(float dp) {
        float density = context.getResources().getDisplayMetrics().density;
        return (int) (dp * density + 0.5);
    }
    @SuppressLint("ResourceAsColor")
    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);

        if (hasPwd) {
            // 画一个黑色的圆
            Paint paint = new Paint(Paint.ANTI_ALIAS_FLAG);
            paint.setColor(Color.BLACK);
            paint.setStyle(Paint.Style.FILL);
            canvas.drawCircle(getWidth() / 2, getHeight() / 2, radius, paint);
        }
        //设置下划线颜色
        paintLine.setColor(underLineColor);
        //float left, float top, float right, float bottom
        canvas.drawRect(0, getHeight() - underlineHeight, getWidth(), getHeight(), paintLine);
    }

    //防止下划线高度大到一定值时会覆盖掉文字，需从写此方法
    @Override
    public void setPadding(int left, int top, int right, int bottom) {
        super.setPadding(left, top, right, bottom + underlineHeight);
    }
    public void clearPwd() {
        this.hasPwd = false;
        invalidate();
    }


    public void drawPwd(float radius) {
        this.hasPwd = true;
        if (radius == 0) {
            this.radius = getWidth() / 4;
        } else {
            this.radius = radius;
        }
        invalidate();
    }

}
