apt -y update && apt -y upgrade

apt -y install curl unzip perl

curl -fsSLO https://github.com/tnalpgge/rank-amateur-cowsay/archive/refs/tags/cowsay-3.04.zip

unzip cowsay-3.04.zip

cd rank-amateur-cowsay-cowsay-3.04

echo "" | bash install.sh
