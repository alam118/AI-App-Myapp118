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
                        <strong>💰 Monetization Tip:</strong
