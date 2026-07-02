// ============================================
// COMPLETE TUTORIAL DATA
// ============================================

const tutorials = [
    // ===== 1. FLUTTER APP DEVELOPMENT =====
    {
        id: 'flutter-beginner',
        title: 'Flutter Se App Kaise Banaye',
        category: 'beginner',
        icon: '📱',
        duration: '45 min',
        level: 'Beginner',
        rating: 4.8,
        students: 2540,
        description: 'Flutter से अपना पहला App बनाना सीखें - Step by Step Guide',
        cover: 'https://picsum.photos/seed/flutter/400/200',
        steps: [
            {
                title: '📌 Introduction to Flutter',
                content: `
                    <h3>Flutter क्या है?</h3>
                    <p>Flutter Google का एक UI Framework है जिससे आप एक ही Code से Android और iOS दोनों के लिए App बना सकते हैं।</p>
                    <div class="highlight-box">
                        <strong>✨ Key Benefits:</strong>
                        <ul>
                            <li>✅ एक ही Code - Android और iOS</li>
                            <li>✅ Beautiful UI - Custom Widgets</li>
                            <li>✅ Fast Development - Hot Reload</li>
                            <li>✅ Large Community Support</li>
                        </ul>
                    </div>
                    <div class="code-block">
                        <pre>
// Simple Flutter App
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('My First App')),
        body: Center(child: Text('Hello World!')),
      ),
    );
  }
}</pre>
                    </div>
                    <div class="tip-box">
                        <strong>💡 Pro Tip:</strong>
                        <p>Flutter Learning को आसान बनाने के लिए पहले Basic Widgets समझें - Text, Container, Row, Column.</p>
                    </div>
                `,
                image: 'https://picsum.photos/seed/flutter-intro/600/300'
            },
            {
                title: '🛠️ Required Tools',
                content: `
                    <h3>Flutter Development के लिए Tools</h3>
                    <div class="tools-grid-small">
                        <div class="tool-item">
                            <span class="tool-emoji">💻</span>
                            <div>
                                <strong>VS Code</strong>
                                <p>Best Code Editor for Flutter</p>
                            </div>
                        </div>
                        <div class="tool-item">
                            <span class="tool-emoji">📱</span>
                            <div>
                                <strong>Android Studio</strong>
                                <p>For Emulator & Android SDK</p>
                            </div>
                        </div>
                        <div class="tool-item">
                            <span class="tool-emoji">⚡</span>
                            <div>
                                <strong>Flutter SDK</strong>
                                <p>Flutter Framework</p>
                            </div>
                        </div>
                        <div class="tool-item">
                            <span class="tool-emoji">🔧</span>
                            <div>
                                <strong>Git</strong>
                                <p>Version Control</p>
                            </div>
                        </div>
                    </div>
                    <div class="highlight-box">
                        <strong>📦 Download Links:</strong>
                        <ul>
                            <li>🔗 <a href="#" onclick="showToast('Opening Flutter website...')">Flutter SDK - flutter.dev</a></li>
                            <li>🔗 <a href="#" onclick="showToast('Opening VS Code...')">VS Code - code.visualstudio.com</a></li>
                            <li>🔗 <a href="#" onclick="showToast('Opening Android Studio...')">Android Studio - developer.android.com</a></li>
                        </ul>
                    </div>
                `,
                image: 'https://picsum.photos/seed/flutter-tools/600/300'
            },
            {
                title: '📥 Installation Process',
                content: `
                    <h3>Flutter Installation - Step by Step</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <span class="step-num">1</span>
                            <div>
                                <strong>Download Flutter SDK</strong>
                                <p>flutter.dev से SDK Download करें</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">2</span>
                            <div>
                                <strong>Extract & Setup</strong>
                                <p>SDK को C:\\flutter में Extract करें</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">3</span>
                            <div>
                                <strong>Environment Variables</strong>
                                <p>Path में Flutter/bin Add करें</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">4</span>
                            <div>
                                <strong>Verify Installation</strong>
                                <p>Terminal में <code>flutter doctor</code> Run करें</p>
                            </div>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
# Check Flutter Installation
flutter doctor

# Output should show:
# ✓ Flutter SDK
# ✓ Android Studio
# ✓ VS Code</pre>
                    </div>
                    <div class="tip-box">
                        <strong>⚠️ Common Issues:</strong>
                        <p>Android Studio नहीं मिल रहा? Flutter Doctor में Android Studio Path Set करें.</p>
                    </div>
                `,
                image: 'https://picsum.photos/seed/flutter-install/600/300'
            },
            {
                title: '📁 Project Setup',
                content: `
                    <h3>First Flutter Project Create करें</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <span class="step-num">1</span>
                            <div>
                                <strong>Create Project</strong>
                                <p><code>flutter create my_first_app</code></p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">2</span>
                            <div>
                                <strong>Open in VS Code</strong>
                                <p>Project Folder को VS Code में Open करें</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">3</span>
                            <div>
                                <strong>Run the App</strong>
                                <p><code>flutter run</code> या VS Code से Run</p>
                            </div>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
# Create new Flutter project
flutter create my_first_app

# Go to project folder
cd my_first_app

# Run the app
flutter run</pre>
                    </div>
                    <div class="highlight-box">
                        <strong>📂 Project Structure:</strong>
                        <ul>
                            <li>📁 lib/ - Main Code</li>
                            <li>📁 android/ - Android Files</li>
                            <li>📁 ios/ - iOS Files</li>
                            <li>📄 pubspec.yaml - Dependencies</li>
                        </ul>
                    </div>
                `,
                image: 'https://picsum.photos/seed/flutter-project/600/300'
            },
            {
                title: '🎨 UI Design',
                content: `
                    <h3>Flutter में Beautiful UI Design</h3>
                    <p>Flutter के Widgets से Beautiful UI बनाना सीखें</p>
                    <div class="widget-grid">
                        <div class="widget-card">
                            <span>📦</span>
                            <strong>Container</strong>
                            <p>Box with padding, margin, decoration</p>
                        </div>
                        <div class="widget-card">
                            <span>📝</span>
                            <strong>Text</strong>
                            <p>Display text with styling</p>
                        </div>
                        <div class="widget-card">
                            <span>🖼️</span>
                            <strong>Image</strong>
                            <p>Display images from network/asset</p>
                        </div>
                        <div class="widget-card">
                            <span>📋</span>
                            <strong>ListView</strong>
                            <p>Scrollable list of items</p>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
// Beautiful UI Example
Container(
  decoration: BoxDecoration(
    gradient: LinearGradient(
      colors: [Colors.pink, Colors.purple],
    ),
    borderRadius: BorderRadius.circular(20),
  ),
  child: Column(
    children: [
      Icon(Icons.favorite, color: Colors.white, size: 50),
      Text('Love Flutter', 
        style: TextStyle(
          color: Colors.white,
          fontSize: 24,
          fontWeight: FontWeight.bold,
        ),
      ),
    ],
  ),
)</pre>
                    </div>
                    <div class="tip-box">
                        <strong>🎨 Design Tip:</strong>
                        <p>Always start with Widget Tree Diagram - Parent widgets से Child widgets तक Planning करें.</p>
                    </div>
                `,
                image: 'https://picsum.photos/seed/flutter-ui/600/300'
            },
            {
                title: '💻 Coding Steps',
                content: `
                    <h3>Flutter App Coding - Step by Step</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <span class="step-num">1</span>
                            <div>
                                <strong>Create Stateful Widget</strong>
                                <p>Dynamic content के लिए StatefulWidget Use करें</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">2</span>
                            <div>
                                <strong>Add State Variables</strong>
                                <p>Variables को State में Define करें</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">3</span>
                            <div>
                                <strong>Build UI</strong>
                                <p>Widgets से UI Build करें</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">4</span>
                            <div>
                                <strong>Add Interactivity</strong>
                                <p>Buttons, Gestures से User Interaction Add करें</p>
                            </div>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
// Counter App - Complete Example
class CounterApp extends StatefulWidget {
  @override
  _CounterAppState createState() => _CounterAppState();
}

class _CounterAppState extends State<CounterApp> {
  int counter = 0;

  void increment() {
    setState(() {
      counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Counter App')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Count: $counter', 
              style: TextStyle(fontSize: 48),
            ),
            ElevatedButton(
              onPressed: increment,
              child: Text('Press Me'),
            ),
          ],
        ),
      ),
    );
  }
}</pre>
                    </div>
                    <div class="tip-box">
                        <strong>💻 Coding Tip:</strong>
                        <p>Hot Reload का Use करें - Code Change करते ही App Update हो जाता है!</p>
                    </div>
                `,
                image: 'https://picsum.photos/seed/flutter-code/600/300'
            },
            {
                title: '🧪 Testing',
                content: `
                    <h3>Flutter App Testing</h3>
                    <div class="testing-grid">
                        <div class="testing-card">
                            <span>🧪</span>
                            <strong>Unit Testing</strong>
                            <p>Individual functions test करें</p>
                        </div>
                        <div class="testing-card">
                            <span>🖥️</span>
                            <strong>Widget Testing</strong>
                            <p>UI Widgets test करें</p>
                        </div>
                        <div class="testing-card">
                            <span>📱</span>
                            <strong>Integration Testing</strong>
                            <p>Full App Flow test करें</p>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
// Simple Widget Test
testWidgets('Counter test', (WidgetTester tester) async {
  await tester.pumpWidget(CounterApp());
  
  expect(find.text('0'), findsOneWidget);
  
  await tester.tap(find.byType(ElevatedButton));
  await tester.pump();
  
  expect(find.text('1'), findsOneWidget);
});</pre>
                    </div>
                    <div class="tip-box">
                        <strong>🧪 Testing Tip:</strong>
                        <p>Always test critical features first - Login, Payment, Data Saving.</p>
                    </div>
                `,
                image: 'https://picsum.photos/seed/flutter-test/600/300'
            },
            {
                title: '🐛 Bug Fixing',
                content: `
                    <h3>Common Bugs & Solutions</h3>
                    <div class="bug-list">
                        <div class="bug-item">
                            <span>🐛</span>
                            <div>
                                <strong>Null Safety Issues</strong>
                                <p>Solution: Use ?? operator or ! operator</p>
                            </div>
                        </div>
                        <div class="bug-item">
                            <span>🐛</span>
                            <div>
                                <strong>Widget Not Updating</strong>
                                <p>Solution: Use setState() or State Management</p>
                            </div>
                        </div>
                        <div class="bug-item">
                            <span>🐛</span>
                            <div>
                                <strong>Build Errors</strong>
                                <p>Solution: Check pubspec.yaml dependencies</p>
                            </div>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
// Fix: Null Safety
String? name;
String displayName = name ?? 'Guest';

// Fix: State Management
class MyWidget extends StatefulWidget {
  @override
  _MyWidgetState createState() => _MyWidgetState();
}

// Fix: Dependency Issue
dependencies:
  flutter:
    sdk: flutter
  http: ^0.13.0</pre>
                    </div>
                    <div class="tip-box">
                        <strong>🐛 Debugging Tip:</strong>
                        <p>VS Code Debugger Use करें - Breakpoints लगाकर Code Step करें.</p>
                    </div>
                `,
                image: 'https://picsum.photos/seed/flutter-debug/600/300'
            },
            {
                title: '💰 Monetization',
                content: `
                    <h3>App से पैसे कमाएं</h3>
                    <div class="monetization-grid">
                        <div class="monetization-card">
                            <span>📢</span>
                            <strong>Ads</strong>
                            <p>Google AdMob से Ads दिखाएं</p>
                        </div>
                        <div class="monetization-card">
                            <span>💎</span>
                            <strong>In-App Purchases</strong>
                            <p>Premium Features Sell करें</p>
                        </div>
                        <div class="monetization-card">
                            <span>💰</span>
                            <strong>Subscription</strong>
                            <p>Monthly/Annual Subscription</p>
                        </div>
                        <div class="monetization-card">
                            <span>🛒</span>
                            <strong>Products</strong>
                            <p>Physical/Digital Products Sell करें</p>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
// AdMob Integration
InterstitialAd? _interstitialAd;

void loadAd() {
  InterstitialAd.load(
    adUnitId: 'ca-app-pub-xxx/yyy',
    request: AdRequest(),
    adLoadCallback: InterstitialAdLoadCallback(
      onAdLoaded: (ad) => _interstitialAd = ad,
      onAdFailedToLoad: (error) => print(error),
    ),
  );
}</pre>
                    </div>
                    <div class="tip-box">
                        <strong>💰 Monetization Tip:</strong>
                        <p>Users को Value दें - पहले Free Features दें, फिर Premium Offer करें.</p>
                    </div>
                `,
                image: 'https://picsum.photos/seed/flutter-money/600/300'
            },
            {
                title: '📱 Play Store Publishing',
                content: `
                    <h3>Play Store पर App Publish करें</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <span class="step-num">1</span>
                            <div>
                                <strong>Create Keystore</strong>
                                <p>App Signing के लिए Keystore बनाएं</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">2</span>
                            <div>
                                <strong>Build APK</strong>
                                <p>Release Mode में APK बनाएं</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">3</span>
                            <div>
                                <strong>Google Play Console</strong>
                                <p>Play Console पर App Register करें</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">4</span>
                            <div>
                                <strong>Upload & Publish</strong>
                                <p>APK Upload करें और Publish करें</p>
                            </div>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
# Build APK
flutter build apk --release

# Build App Bundle
flutter build appbundle --release

# Output Location
build/app/outputs/flutter-apk/app-release.apk</pre>
                    </div>
                    <div class="tip-box">
                        <strong>📱 Publishing Tip:</strong>
                        <p>Play Store Listing को अच्छा बनाएं - Screenshots, Description, Keywords.</p>
                    </div>
                `,
                image: 'https://picsum.photos/seed/flutter-store/600/300'
            }
        ]
    },

    // ===== 2. ANDROID STUDIO =====
    {
        id: 'android-studio-beginner',
        title: 'Android Studio App Kaise Banaye',
        category: 'beginner',
        icon: '📱',
        duration: '50 min',
        level: 'Beginner',
        rating: 4.7,
        students: 1890,
        description: 'Android Studio से Native Android App बनाना सीखें',
        cover: 'https://picsum.photos/seed/android/400/200',
        steps: [
            {
                title: '📌 Introduction to Android Studio',
                content: `
                    <h3>Android Studio क्या है?</h3>
                    <p>Android Studio Official IDE है Android App Development के लिए।</p>
                    <div class="highlight-box">
                        <strong>✨ Features:</strong>
                        <ul>
                            <li>✅ Visual Layout Editor</li>
                            <li>✅ Code Completion</li>
                            <li>✅ Built-in Emulator</li>
                            <li>✅ Debugging Tools</li>
                        </ul>
                    </div>
                `,
                image: 'https://picsum.photos/seed/android-intro/600/300'
            },
            {
                title: '🛠️ Required Tools',
                content: `
                    <h3>Android Development Tools</h3>
                    <div class="tools-grid-small">
                        <div class="tool-item">
                            <span>📱</span>
                            <div>
                                <strong>Android Studio</strong>
                                <p>Official IDE</p>
                            </div>
                        </div>
                        <div class="tool-item">
                            <span>☕</span>
                            <div>
                                <strong>Java/Kotlin</strong>
                                <p>Programming Language</p>
                            </div>
                        </div>
                        <div class="tool-item">
                            <span>📦</span>
                            <div>
                                <strong>Android SDK</strong>
                                <p>Development Kit</p>
                            </div>
                        </div>
                        <div class="tool-item">
                            <span>⚡</span>
                            <div>
                                <strong>Gradle</strong>
                                <p>Build System</p>
                            </div>
                        </div>
                    </div>
                `,
                image: 'https://picsum.photos/seed/android-tools/600/300'
            },
            {
                title: '📥 Installation',
                content: `
                    <h3>Android Studio Install करें</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <span class="step-num">1</span>
                            <div>
                                <strong>Download Android Studio</strong>
                                <p>developer.android.com से Download करें</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">2</span>
                            <div>
                                <strong>Run Installer</strong>
                                <p>Wizard Follow करें</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">3</span>
                            <div>
                                <strong>Install SDK</strong>
                                <p>Recommended SDK Install करें</p>
                            </div>
                        </div>
                    </div>
                `,
                image: 'https://picsum.photos/seed/android-install/600/300'
            },
            {
                title: '📁 Project Setup',
                content: `
                    <h3>First Android Project</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <span class="step-num">1</span>
                            <div>
                                <strong>New Project</strong>
                                <p>File → New → New Project</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">2</span>
                            <div>
                                <strong>Choose Template</strong>
                                <p>Empty Activity Select करें</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">3</span>
                            <div>
                                <strong>Configure Project</strong>
                                <p>Name, Package, Location Set करें</p>
                            </div>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
// MainActivity.kt
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
}</pre>
                    </div>
                `,
                image: 'https://picsum.photos/seed/android-project/600/300'
            },
            {
                title: '🎨 UI Design',
                content: `
                    <h3>Android UI Design</h3>
                    <div class="widget-grid">
                        <div class="widget-card">
                            <span>📦</span>
                            <strong>LinearLayout</strong>
                            <p>Horizontal/Vertical Layout</p>
                        </div>
                        <div class="widget-card">
                            <span>📐</span>
                            <strong>ConstraintLayout</strong>
                            <p>Flexible Layout</p>
                        </div>
                        <div class="widget-card">
                            <span>📝</span>
                            <strong>TextView</strong>
                            <p>Display Text</p>
                        </div>
                        <div class="widget-card">
                            <span>🔘</span>
                            <strong>Button</strong>
                            <p>Clickable Button</p>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
<!-- activity_main.xml -->
<LinearLayout 
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center">

    <TextView
        android:text="Hello World!"
        android:textSize="24sp"
        android:textStyle="bold" />

    <Button
        android:text="Click Me"
        android:layout_marginTop="16dp" />

</LinearLayout></pre>
                    </div>
                `,
                image: 'https://picsum.photos/seed/android-ui/600/300'
            },
            {
                title: '💻 Coding Steps',
                content: `
                    <h3>Android App Coding</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <span class="step-num">1</span>
                            <div>
                                <strong>Write Logic</strong>
                                <p>Kotlin/Java में Code लिखें</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">2</span>
                            <div>
                                <strong>Connect UI</strong>
                                <p>findViewById से UI Elements Connect करें</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">3</span>
                            <div>
                                <strong>Add Features</strong>
                                <p>Features Add करें</p>
                            </div>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
// Kotlin Code
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        val button = findViewById<Button>(R.id.button)
        val text = findViewById<TextView>(R.id.textView)
        
        button.setOnClickListener {
            text.text = "Button Clicked!"
        }
    }
}</pre>
                    </div>
                `,
                image: 'https://picsum.photos/seed/android-code/600/300'
            },
            {
                title: '🧪 Testing',
                content: `
                    <h3>Android Testing</h3>
                    <div class="testing-grid">
                        <div class="testing-card">
                            <span>🧪</span>
                            <strong>Unit Tests</strong>
                            <p>JUnit Tests</p>
                        </div>
                        <div class="testing-card">
                            <span>📱</span>
                            <strong>Instrumented Tests</strong>
                            <p>Espresso Tests</p>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
// Espresso Test
@Test
fun testButtonClick() {
    onView(withId(R.id.button))
        .perform(click())
    
    onView(withId(R.id.textView))
        .check(matches(withText("Button Clicked!")))
}</pre>
                    </div>
                `,
                image: 'https://picsum.photos/seed/android-test/600/300'
            },
            {
                title: '🐛 Bug Fixing',
                content: `
                    <h3>Common Android Bugs</h3>
                    <div class="bug-list">
                        <div class="bug-item">
                            <span>🐛</span>
                            <div>
                                <strong>App Crashes</strong>
                                <p>Check Logcat for Error Details</p>
                            </div>
                        </div>
                        <div class="bug-item">
                            <span>🐛</span>
                            <div>
                                <strong>UI Not Showing</strong>
                                <p>Check Layout XML</p>
                            </div>
                        </div>
                    </div>
                `,
                image: 'https://picsum.photos/seed/android-bug/600/300'
            },
            {
                title: '💰 Monetization',
                content: `
                    <h3>Android App Monetization</h3>
                    <div class="monetization-grid">
                        <div class="monetization-card">
                            <span>📢</span>
                            <strong>AdMob Ads</strong>
                        </div>
                        <div class="monetization-card">
                            <span>💎</span>
                            <strong>In-App Purchases</strong>
                        </div>
                        <div class="monetization-card">
                            <span>💰</span>
                            <strong>Paid App</strong>
                        </div>
                    </div>
                `,
                image: 'https://picsum.photos/seed/android-money/600/300'
            },
            {
                title: '📱 Play Store Publishing',
                content: `
                    <h3>Play Store Publish</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <span class="step-num">1</span>
                            <div>
                                <strong>Generate Signed APK</strong>
                                <p>Build → Generate Signed APK</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">2</span>
                            <div>
                                <strong>Create Store Listing</strong>
                                <p>App Description, Screenshots</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">3</span>
                            <div>
                                <strong>Upload & Publish</strong>
                                <p>Play Console Upload</p>
                            </div>
                        </div>
                    </div>
                `,
                image: 'https://picsum.photos/seed/android-store/600/300'
            }
        ]
    },

    // ===== 3. GOOGLE AI STUDIO =====
    {
        id: 'google-ai-studio-beginner',
        title: 'Google AI Studio se App Kaise Banaye',
        category: 'beginner',
        icon: '🤖',
        duration: '40 min',
        level: 'Beginner',
        rating: 4.9,
        students: 3200,
        description: 'Google AI Studio से AI-Powered Apps बनाना सीखें',
        cover: 'https://picsum.photos/seed/ai-studio/400/200',
        steps: [
            {
                title: '📌 Introduction to Google AI Studio',
                content: `
                    <h3>Google AI Studio क्या है?</h3>
                    <p>Google AI Studio एक Platform है जिससे आप AI Models को आसानी से Use कर सकते हैं।</p>
                    <div class="highlight-box">
                        <strong>✨ Features:</strong>
                        <ul>
                            <li>✅ Gemini AI Access</li>
                            <li>✅ No-Code AI Development</li>
                            <li>✅ API Integration</li>
                            <li>✅ Free Tier Available</li>
                        </ul>
                    </div>
                `,
                image: 'https://picsum.photos/seed/ai-studio-intro/600/300'
            },
            {
                title: '🛠️ Required Tools',
                content: `
                    <h3>AI Studio Tools</h3>
                    <div class="tools-grid-small">
                        <div class="tool-item">
                            <span>🌐</span>
                            <div>
                                <strong>Google Account</strong>
                                <p>Gmail Account Required</p>
                            </div>
                        </div>
                        <div class="tool-item">
                            <span>🔑</span>
                            <div>
                                <strong>API Key</strong>
                                <p>Google AI Studio API Key</p>
                            </div>
                        </div>
                        <div class="tool-item">
                            <span>💻</span>
                            <div>
                                <strong>VS Code</strong>
                                <p>Code Editor</p>
                            </div>
                        </div>
                    </div>
                `,
                image: 'https://picsum.photos/seed/ai-tools/600/300'
            },
            {
                title: '📥 Getting Started',
                content: `
                    <h3>AI Studio Setup</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <span class="step-num">1</span>
                            <div>
                                <strong>Go to AI Studio</strong>
                                <p>aistudio.google.com Open करें</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">2</span>
                            <div>
                                <strong>Get API Key</strong>
                                <p>Get API Key from Settings</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">3</span>
                            <div>
                                <strong>Test Model</strong>
                                <p>Playground में Test करें</p>
                            </div>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
// Node.js Example
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function run() {
    const result = await model.generateContent("Hello!");
    console.log(result.response.text());
}</pre>
                    </div>
                `,
                image: 'https://picsum.photos/seed/ai-setup/600/300'
            },
            {
                title: '💻 Building with AI',
                content: `
                    <h3>AI App Build करें</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <span class="step-num">1</span>
                            <div>
                                <strong>Choose Model</strong>
                                <p>Gemini Pro or Gemini Vision</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">2</span>
                            <div>
                                <strong>Write Prompt</strong>
                                <p>Effective Prompts लिखें</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">3</span>
                            <div>
                                <strong>Integrate API</strong>
                                <p>API को App में Integrate करें</p>
                            </div>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
// Chat with AI
const chat = model.startChat({
  history: [
    { role: "user", parts: "Hello AI!" },
    { role: "model", parts: "Hello! How can I help you?" },
  ],
});

const result = await chat.sendMessage("I need help with coding");
console.log(result.response.text());</pre>
                    </div>
                `,
                image: 'https://picsum.photos/seed/ai-build/600/300'
            }
        ]
    },

    // ===== 4. ADVANCED FLUTTER =====
    {
        id: 'flutter-advanced',
        title: 'Advanced Flutter App Kaise Banaye',
        category: 'advanced',
        icon: '🚀',
        duration: '60 min',
        level: 'Advanced',
        rating: 4.9,
        students: 980,
        description: 'Advanced Flutter Concepts - State Management, Firebase, etc.',
        cover: 'https://picsum.photos/seed/flutter-adv/400/200',
        steps: [
            {
                title: '📌 Advanced Flutter Concepts',
                content: `
                    <h3>Advanced Flutter Topics</h3>
                    <div class="highlight-box">
                        <strong>📚 Topics Covered:</strong>
                        <ul>
                            <li>🔹 State Management (Provider, Riverpod)</li>
                            <li>🔹 Firebase Integration</li>
                            <li>🔹 Custom Widgets</li>
                            <li>🔹 Animations</li>
                            <li>🔹 Performance Optimization</li>
                        </ul>
                    </div>
                `,
                image: 'https://picsum.photos/seed/flutter-adv-intro/600/300'
            },
            {
                title: '🏗️ State Management',
                content: `
                    <h3>Provider - State Management</h3>
                    <div class="code-block">
                        <pre>
// Provider Example
class CounterProvider extends ChangeNotifier {
  int count = 0;
  
  void increment() {
    count++;
    notifyListeners();
  }
}

// UI
Consumer<CounterProvider>(
  builder: (context, provider, child) {
    return Text('Count: ${provider.count}');
  },
)</pre>
                    </div>
                `,
                image: 'https://picsum.photos/seed/flutter-state/600/300'
            },
            {
                title: '🔥 Firebase Integration',
                content: `
                    <h3>Firebase Setup</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <span class="step-num">1</span>
                            <div>
                                <strong>Create Firebase Project</strong>
                                <p>console.firebase.google.com</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">2</span>
                            <div>
                                <strong>Add Flutter App</strong>
                                <p>Android & iOS App Add करें</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-num">3</span>
                            <div>
                                <strong>Add Dependencies</strong>
                                <p>pubspec.yaml में Firebase Add करें</p>
                            </div>
                        </div>
                    </div>
                    <div class="code-block">
                        <pre>
# pubspec.yaml
dependencies:
  firebase_core: ^2.10.0
  firebase_auth: ^4.6.0
  cloud_firestore: ^4.7.0

// Initialize Firebase
await Firebase.initializeApp();</pre>
                    </div>
                `,
                image: 'https://picsum.photos/seed/flutter-firebase/600/300'
            }
        ]
    },

    // ===== 5. UI DESIGN =====
    {
        id: 'ui-design-beginner',
        title: 'UI Design Kaise Banaye',
        category: 'beginner',
        icon: '🎨',
        duration: '35 min',
        level: 'Beginner',
        rating: 4.6,
        students: 2100,
        description: 'Beautiful UI Design Principles and Tools',
        cover: 'https://picsum.photos/seed/ui-design/400/200',
        steps: [
            {
                title: '📌 Introduction to UI Design',
                content: `
                    <h3>UI Design क्या है?</h3>
                    <p>UI (User Interface) Design का मतलब है App का Look और Feel Design करना।</p>
                    <div class="highlight-box">
                        <strong>🎯 Key Principles:</strong>
                        <ul>
                            <li>✅ Simplicity - Simple Design</li>
                            <li>✅ Consistency - Consistent Elements</li>
                            <li>✅ Feedback - User Feedback</li>
                            <li>✅ Accessibility - All Users</li>
                        </ul>
                    </div>
                `,
                image: 'https://picsum.photos/seed/ui-intro/600/300'
            },
            {
                title: '🎨 Design Tools',
                content: `
                    <h3>UI Design Tools</h3>
                    <div class="tools-grid-small">
                        <div class="tool-item">
                            <span>🎨</span>
                            <div>
                                <strong>Figma</strong>
                                <p>Professional UI Design</p>
                            </div>
                        </div>
                        <div class="tool-item">
                            <span>🖍️</span>
                            <div>
                                <strong>Canva</strong>
                                <p>Easy Design Tool</p>
                            </div>
                        </div>
                        <div class="tool-item">
                            <span>📐</span>
                            <div>
                                <strong>Adobe XD</strong>
                                <p>Advanced Design Tool</p>
                            </div>
                        </div>
                    </div>
                `,
                image: 'https://picsum.photos/seed/ui-tools/600/300'
            }
        ]
    }
];

// ============================================
// EXPORT FUNCTIONS
// ============================================

function getTutorials() {
    return tutorials;
}

function getTutorialById(id) {
    return tutorials.find(t => t.id === id);
}

function getTutorialsByCategory(category) {
    if (category === 'all') return tutorials;
    return tutorials.filter(t => t.category === category);
}

function searchTutorials(query) {
    if (!query) return tutorials;
    const lowerQuery = query.toLowerCase();
    return tutorials.filter(t => 
        t.title.toLowerCase().includes(lowerQuery) ||
        t.description.toLowerCase().includes(lowerQuery)
    );
}
