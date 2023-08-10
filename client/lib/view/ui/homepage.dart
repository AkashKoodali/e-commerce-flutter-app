import 'package:flutter/material.dart';
import 'package:client/view/shared/appstyle.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text(
          "Home",
          style: appstyle(40, Colors.black, FontWeight.bold),
        ),
      ),
    );
  }
}
