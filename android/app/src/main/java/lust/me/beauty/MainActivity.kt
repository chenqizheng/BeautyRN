package lust.me.beauty

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val text = findViewById(R.id.text) as TextView;
        text.setOnClickListener {
            val intent = Intent(this, MyReactActivity::class.java);
            startActivity(intent);
        }
    }
}
