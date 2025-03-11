---
title: 'Arch Linux install'
description: 'Install arch linux on your computer'
date: 2023-11-30T14:06:55Z
---

In this post, I will show you how to install Arch Linux on a machine! Installing it is very different from what we are used to installing linux today. We are going use a virtual machine for this tutorial.

<!-- more -->

## What is Arch Linux
Arch Linux is a lightweight, and a free and open-source Linux distro that gives you immense customizability and control over your machine. The x86-64 centric Linux distro adheres to the KISS principle (keep it simple, stupid). As the name suggests, Arch believes in making the operating system a clean slate that leaves every decision to the user. You won't find any significant distribution-specific changes in Arch, making the transition seamless from any other Linux distro.

## Links
ISO Image - [https://archlinux.org/download/](https://archlinux.org/download/)

Rufus - [https://rufus.ie](https://rufus.ie)

Balena Etcher - [https://etcher.balena.io/](https://etcher.balena.io/)

dd - [https://www.cyberciti.biz/faq/creating-a-bootable-ubuntu-usb-stick-on-a-debian-linux/](https://www.cyberciti.biz/faq/creating-a-bootable-ubuntu-usb-stick-on-a-debian-linux/)

Lets get started!

## Getting the image
To start off, you need to download the ISO image. On their website, they have mirror specific to your location. For me, I use the United States mirrors. 

![image1](https://files.shaunhoffer.cc/images/blog/archlinux_109.png)

Select a mirror. After that, you can download the ISO file.

![image2](https://files.shaunhoffer.cc/images/blog/archlinux_110.png)

The ISO file is about 800MB, so it may take some time to download. For me, it took about 5 minutes on AT&T internet. In the meantime, you can download one of the tools that are used for flashing the ISO image

## Flashing the image
There are a lot of ways you can make a bootable ISO image. For most users, it is best to use Rufus, as it's more easier to use, plus it has some features that most tools don't have. Keep in mind that this tool is only for Windows. The other tools I have listed in this post will depend on what OS you are using.

!!! note

    If you are using Rufus, you need to specify on using BIOS or UEFI. Please note the devices firmware. I recommend UEFI, as it provides better boot times, and in general, more faster than BIOS, which is MBR.

## Booting the OS
Once you have flashed the image to a USB drive, you can now install Arch Linux. I'm going to be using a virtual machine, as it is the same thing to most other computers compatible with the OS. If you are installing it to a computer, you may need to look up on what key you use to get into the boot menu.

Turn on your computer, and plug in the USB drive. Since I'm using a virtual machine, I will use the boot menu key used on it. Select your USB drive, and press enter to boot it. Once you are in, you may see this screen.

![image3](https://files.shaunhoffer.cc/images/blog/archlinux_111.png)

Press enter on the first option to boot into the USB. Give it some time to copy files to a RAM Disk. Once it is done, you will start off with a terminal screen.

![image3](https://files.shaunhoffer.cc/images/blog/archlinux_112.png)

## Prepare your install

### Connect to the internet
Connect the Ethernet cable to your computer. You should get internet from DHCP from your router. If you use a different configuration, look up on how to do that. This tutorial will use DHCP. If you want to use a static ip, open this link to the Arch Linux wiki and follow the guide on how to do that. 

For users that use Wi-Fi, click [here](https://wiki.archlinux.org/title/Network_configuration/Wireless). For users that use Etherent, you should be fine, but you may need to setup DHCP or static IP to get your IP address.

You can look [here](https://wiki.archlinux.org/title/dhcpcd#Static_profile) on setting up static IP's!

If you are able to get internet, you should do a ping test to be sure you can get packages. Using the command below will ping Google.

```bash
$ ping -c2 www.google.com
```

![image3](https://files.shaunhoffer.cc/images/blog/archlinux_113.png)

### Partiton your disk
It's time to partition the disk. To start off, we're going to list the disk we will use. For me, I have a 32GB Disk in my virtual machine, and it's device name is `vda`. So I will use that. You can list disks using one of these commands

```bash
$ cat /proc/partitions
$ ls /dev/[s|x|v]d*
$ lsblk
$ fdisk –l 
```

![image3](https://files.shaunhoffer.cc/images/blog/archlinux_114.png)

Let's go over the disk layout. Here's is what we need:

|Name      |Size|Format |
|----------|----|-------|
|EFI System|300M|FAT32  |
|Swap      |RAM |Swap ON|
|Root      |HDD |ext4   |

Now we can start partitioning the disk. Run the "cfdisk" utility to do that.

```bash
$ cfdisk /dev/sdX
```

Replace X with your drive name.

![image3](https://files.shaunhoffer.cc/images/blog/archlinux_115.png)

Select the GPT label on this screen. Once done, you should see something like this.

![image3](https://files.shaunhoffer.cc/images/blog/archlinux_116.png)

Do the following here:

New --> `300M` --> Type --> EFI System

New --> `RAM SIZE` --> Type --> Linux Swap

New --> `HDD Size`

You should have the layout like this:

![image3](https://files.shaunhoffer.cc/images/blog/archlinux_117.png)

You can now write your changes to the disk. To do so, follow this step.

Write --> Type `yes` --> Quit

When done, quit the app. To be sure you have everything correct, type this command.

```bash
$ lsblk
```

![image3](https://files.shaunhoffer.cc/images/blog/archlinux_118.png)

It's time to format the partitions! Type these commands in. Remember to change sdX with your device name.

```bash
$ mkfs.fat -F32 /dev/sdX1
$ mkfs.ext4 /dev/sdX3
$ mkswap /dev/sdX2
```

![image3](https://files.shaunhoffer.cc/images/blog/archlinux_119.png)

### Mount the partitions

Before we proceed, let's mount the partitions needed for install. Type these commands to do so.

```bash
$ mount /dev/sdX3 /mnt
$ ls /mnt 
$ swapon /dev/sdX2
```
![image3](https://files.shaunhoffer.cc/images/blog/archlinux_120.png)

## Install the packages

Let's begin. To install, we need to use the `pacstrap` command. This is so we can get the Linux base components. Use the command to do so.

```bash
$ pacstrap /mnt base base-devel linux linux-firmware nano vim dhcpcd
```

![image3](https://files.shaunhoffer.cc/images/blog/archlinux_121.png)

Depending on your internet speed, it take about an hour to finish up. Once done, create the fstab file. To do this, type this command.

## Generate your fstab

```bash
$ genfstab -U -p /mnt >> /mnt/etc/fstab
```

To check it, type this command

```bash
cat /mnt/etc/fstab
```

## Configure your system
Let's configure the system. First off, we need to chroot into the root partition.

```bash
$ arch-chroot /mnt
```

### Add your hostname

Let's add a hostname. You may change it however you please.

```bash
$ echo "archlinux" > /etc/hostname
```

### Setup your keyboard

Now we need to add the locale for our keyboard. Type this command. Be sure to have `nano` installed.

```bash
$ nano /etc/locale.gen
```

For me, I use en_US, so I will select that. If you know which one, uncomment that line and save the file.

![image](https://files.shaunhoffer.cc/images/blog/archlinux_122.png)

After that, type in these commands. If your configuration is different, change the lines for the `LANG` variable based on your keyboard layout.

```bash
$ locale-gen
$ echo LANG=en_US.UTF-8 > /etc/locale.conf
$ export LANG=en_US.UTF-8
```

![image](https://files.shaunhoffer.cc/images/blog/archlinux_123.png)

### Set your timezone

You should also set your timezone. For me, I live in the Eastern Time Zone, so I will use a city based on that. You can specify on your timezone based on where you live. You can search one with the first command below.

```bash
$ ls /usr/share/zoneinfo/
$ ln -s /usr/share/zoneinfo/Continent/Main_city /etc/localtime
```

![image](https://files.shaunhoffer.cc/images/blog/archlinux_124.png)

### Check for upgrades

Make sure that your system is up to date as well. This may be needed for some cases. You can run this command after installation if you want.

```bash
$ pacman -Syu
```

### Configure the root account

Now set a password for the root account. You should also create your own account and add a password to that as well.

```bash
$ passwd
```

### Create your user account

```bash
$ useradd -mg users -G wheel,storage,power -s /bin/bash your_new_user
$ passwd your_new_user
```

We should also setup sudo. To do this, type this command. The picture will show you how to do this step.

```bash
$ nano /etc/sudoers
```

![image](https://files.shaunhoffer.cc/images/blog/archlinux_125.png)

## Wrapping up

Our last step is to install the grub bootloader. Install these packages first.

```bash
$ pacman -S grub efibootmgr dosfstools os-prober mtools
```

Then you need to mount the boot partition and create a EFI folder inside it. Once that is done, you can install the grub bootloader

```bash
$ mkdir /boot/EFI
$ mount /dev/sdX1 /boot/EFI
$ grub-install --target=x86_64-efi  --bootloader-id=grub_uefi --recheck
```

After that, you can create the configuration file.

```bash
$ grub-mkconfig -o /boot/grub/grub.cfg
```

![image](https://files.shaunhoffer.cc/images/blog/archlinux_126.png)

Finally, enable the DHCP server service on boot. You don't have to do this step if you are using a static IP.

```bash
$ systemctl enable dhcpcd
```

## Reboot your system
Congrats! You have Arch Linux installed on your computer! To restart, exit out of the chroot environment, and then reboot

```bash
$ exit
$ reboot
```

![image](https://files.shaunhoffer.cc/images/blog/archlinux_127.png)

## Conclusion and final notes
In general, installing is very different from what we are used to seeing today. However, the OS is very lightweight, and easy to use. You can treat as a linux OS, any way you like.