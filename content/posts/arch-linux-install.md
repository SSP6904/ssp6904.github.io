---
title: 'Arch Linux install'
date: 2023-11-27T14:06:55Z
draft: true
---

In this post, I will show you how to install Arch Linux on a machine! Installing it is very different from what we are used to installing linux today. We are going use a virtual machine for this tutorial.

## Introduction

Arch Linux is a lightweight, and a free and open-source Linux distro that gives you immense customizability and control over your machine. The x86-64 centric Linux distro adheres to the KISS principle (keep it simple, stupid). As the name suggests, Arch believes in making the operating system a clean slate that leaves every decision to the user. You won't find any significant distribution-specific changes in Arch, making the transition seamless from any other Linux distro.

## Links

ISO Image - [https://archlinux.org/download/](https://archlinux.org/download/)

Rufus - [https://rufus.ie](https://rufus.ie)

Balena Etcher - [https://etcher.balena.io/](https://etcher.balena.io/)

dd - [https://www.cyberciti.biz/faq/creating-a-bootable-ubuntu-usb-stick-on-a-debian-linux/](https://www.cyberciti.biz/faq/creating-a-bootable-ubuntu-usb-stick-on-a-debian-linux/)

Lets get started!

## Step 1

To start off, you need to download the ISO image. On their website, they have mirror sepific to your location. For me, I use the United States mirrors. 

![image1](/posts/images/archlinux_step2.png)

Select a mirror. After that, you can download the ISO file.

![image2](/posts/images/archlinux_step1.png)

The ISO file is aabout 800MB, so it may take some time to download. For me, it took about 5 minutes on AT&T internet. In the meantime, you can download one of the tools that are used for flashing the ISO image

## Step 2

There are a lot of ways you can make a bootable ISO image. For most users, it is best to use Rufus, as it's more easyier to use, plus it has some features that most tools don't have. Keep in mind that this tool is only for Windows. The other tools I have listed in this post will depend on what OS you are using.

> IMPORTENT: If you are using Rufus, you need to spesify on using BIOS or UEFI. Please note the devices firmware. I recommand UEFI, as it provides better boot times, and in general, more faster than BIOS, which is MBR.

## Step 3

Once you have flashed the image to a USB drive, you can now install Arch Linux. I'm going to be using a virtual machine, as it is the same thing to most other computers compatabile with the OS. If you are installing it to a computer, you may need to look up on what key you use to get into the boot menu.

Also, for most users, you can use Wi-Fi or Ethernet, as these connections can very on your device. If you want, you can use this link on the Wi-Fi setup: [https://wiki.archlinux.org/title/Network_configuration/Wireless](https://wiki.archlinux.org/title/Network_configuration/Wireless)

If you are going to use ethernet, you can skip this step.

## Step 4

Turn on your computer, and plug in the USB drive. My computer is a Dell model, so I will use the F12 key. Select your USB drive, and press enter to boot it. Once you are in, you may see this screen.

![image3](/posts/images/archlinux_step4.png)

Press enter on the first option to boot into the USB. Give it some time to copy files to a RAMDisk. Once it is done, you start off with a terminal screen.

## Step 5

Connect the Ethernet cable to your computer. 