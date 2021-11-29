---
id: docker-installation
title: Docker Installation
draft: true
---

FairOS-dfs can be installed by Docker.

Recommended OS: Ubuntu 18.04.1 LTS or higher.

### Install Docker

```sh
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker ${USER}
sudo apt-get install libffi-dev libssl-dev -y
sudo apt install python3-dev -y
sudo apt-get install -y python3 python3-pip
sudo pip3 install docker-compose
```

If receive an error: ModuleNotFoundError: No module named 'setuptools_rust', run

`pip3 install setuptools-rust` and try again.

Enable Docker as a daemon

`sudo systemctl enable docker`

#### Test Docker with command

`sudo docker run hello-world`

### Install and run Bee node

`mkdir bee-docker-data dfs-docker-data fairstack`

`sudo chmod 0777 bee-docker-data dfs-docker-data`

Info: cache-capacity = 20000000 ~ 94.5GB

Run node bee node for setup

 ```
 sudo docker run \
  -v /home/ubuntu/bee-docker-data:/home/bee/.bee \
  -p 1635:1635 \
  -p 1634:1634 \
  -p 1633:1633 \
  --rm -it ethersphere/bee:0.6.2 \
  start \
    --password=YOUR_PASSWORD \
    --cache-capacity 20000000 \
    --swap-endpoint https://goerli.infura.io/v3/YOUR_KEY \
    --debug-api-enable
 ```

Fund it with gBzz ang gEth. Wait until chequebook deployed and node started, then close it.

#### Obtaining stamps and define them in config file

Withdraw 0.1 gBzz from chequebook

`curl -XPOST "http://localhost:1635/chequebook/withdraw?amount=1000000000000000"`

Create stamps

`curl -s -XPOST http://localhost:1633/stamps/10000000/20`

Download docker-compose.yml for running Bee+FairOS

`cd fairstack`

`wget https://github.com/fairDataSociety/fairOS-dfs/raw/master/docker/testnet-new/docker-compose.yml`


Run

`nano docker-compose.yml`

Change `--postageBlockId "24659c815f7b17d23781c854776dbfde01aaee758545d3d77d8f93d1ca67ce96"` with your postage stamp.

Change `--cookieDomain "fairos1.fairdatasociety.org"` to your domain, add CORS domains to `--cors-origins`.


Start it in background.

`docker-compose up -d`

You can see logs with command:

```
docker logs fairstack_fairos_1 -f
docker logs fairstack_bee-1_1 -f
```

or if logs too much

`docker logs -f --tail 100 fairstack_fairos_1`

`docker logs -f --tail 100 fairstack_bee-1_1`

### Configuring public server

Configure firewall

```
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo ufw deny 1633
sudo ufw deny 1635
sudo ufw deny 9090
sudo ufw deny 9091
sudo ufw enable
```

Setup apache

```
sudo apt install apache2 -y
sudo mkdir /home/ubuntu/logs/
cd /etc/apache2/sites-available/
```

Create file with name of your domain.

```
sudo touch fairos1.fairdatasociety.org.conf
sudo nano fairos1.fairdatasociety.org.conf
```

Put content from this url to file above. Replace content with your domain. https://raw.githubusercontent.com/fairDataSociety/fairOS-dfs/master/docker/apache.conf

```
sudo a2dissite 000-default.conf
sudo a2enmod proxy_http
sudo systemctl restart apache2
```

Enable your domain. Replace YOUR_DOMAIN_HERE to your domain without `.conf`

```
sudo a2ensite YOUR_DOMAIN_HERE
sudo systemctl reload apache2
```


### Install certbot for https certificate


Replace YOUR_DOMAIN_HERE to your domain

```
sudo apt install certbot python3-certbot-apache -y
sudo certbot --apache -d YOUR_DOMAIN_HERE
```
