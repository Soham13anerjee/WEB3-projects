## Follow the post to get a guide on how to get started with running bitcoin full node on local machine

[![Video](https://img.youtube.com/vi/rsicnI86QqE/maxresdefault.jpg)](https://www.youtube.com/watch?v=rsicnI86QqE)

Requirements:
1. Ubuntu/Fedora/Debian any distribution of Linux either as local machine or virtual machine
2. 2+ GB of free memory
3. 300 GB free space

**Current blockchain size is 15 GB. It's also important to note the required read/write speeds to run a bitcoin node locally

### steps followed jotted below:

1)Bitcoin Source Code Download
$ git clone https://github.com/bitcoin/bitcoin.git

2)Change the directory
 $ cd bitcoin

3)By default,the local copy will be synchronized with the most recent, which might be an unstable or beta version of bitcoin . Select a specific version by checking out a release tag(which does not have rc)
 
 $ git tag ---> list all bitcoin blockchain versions

 $ git checkout v0.21.0 (at time of making of this video) --> any random version picked up to see working

4)To check whether the desired version is selected or not
    $ git status

#### 5) Most Important Step-
   See all the prerequisites are installed, you start the build process by generating  
   A set of build scripts using the following command-
  
   For linux - $ more doc/buid-unix.md

   The documentation contains OS-wise requirements and commands list..
   Follow the instruction set for Ubuntu/Debian (as in my case)
                          
6)Assuming the prerequisites are installed, you start the build process by generating a set of build scripts using the following command -

 $ ./autogen.sh

7)Next run the configure script to automatically discover all the necessary libraries and create a customized build script for your system.

$ ./configure

If there are any missing libraries or errors, the configure command will terminate with an error. If an error occurs then again check for the prerequisites documentation and install all the prerequisites.(Step-5) To disable wallet use

$ ./configure --disable-wallet



8)To compile the source
 $ make

This may take minutes to hours(depending on the CPU and available memory).
If an error occurs ,or the compilation process is interrupted , it can be resumed any time by typing make.

9)Next install all the executables on your system using the below command

$ sudo make install

10) The default installation of bitcoind puts it in /usr/local/bin/ We can confirm that coin Core is correctly installed by asking the system for the path of executables,as follows.

$which bitcoind
[/usr/local/bin/bitcoind]

$which bitcoin-cli
[/usr/local/bin/bitcoin-cli]


11)Configuring the Bitcoin Node
Make a file under the bitcoin directory and make a bitcoin.conf file.
Copy the below code in bitcoin.conf to run full node
datadir=/lotsofspace/bitcoin
txindex=1
rpcuser= code(Any name you want)
rpcpassword= qwerty123 (choose a strong password)


12) Now lets run the bitcoin core
   
   $bitcoind -printtoconsole

 We can hit ctrl+C to interrupt the process once we are satisfied that it is loading correct settings

 13) To run the Bitcoin Core in the background as process
   $ bitcoind -daemon
14) Once done with the above command run to check whether it is working

 $ bitcoin-cli getblockhash 1000 ---> can take time even days n weeks in case syncing from internet to local storage takes time.

 $ bitcoin-cli stop --> to stop syncing after learning how 


