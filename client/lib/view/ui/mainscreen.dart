import 'package:client/controllers/mainscreen_provider.dart';
import 'package:client/view/ui/cartpage.dart';
import 'package:client/view/ui/homepage.dart';
import 'package:client/view/ui/profile.dart';
import 'package:client/view/ui/searchpage.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../shared/bottom_nav_bar.dart';

// ignore: must_be_immutable
class MainScreen extends StatelessWidget {
  MainScreen({Key? key}) : super(key: key);

  List<Widget> pageList = const [
    HomePage(),
    SearchPage(),
    HomePage(),
    CartPage(),
    ProfilePage()
  ];

  @override
  Widget build(BuildContext context) {
    return Consumer<MainScreenNotifier>(
        builder: (context, mainScreenNotifier, child) {
      return Scaffold(
        body: pageList[mainScreenNotifier.pageIndex],
        backgroundColor: const Color(0xFFE2E2E2),
        bottomNavigationBar: const BottomNavBar(),
      );
    });
  }
}
