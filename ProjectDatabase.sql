CREATE DATABASE  IF NOT EXISTS `sp_shop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sp_shop`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: sp_shop
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `catname` varchar(255) NOT NULL,
  `description` mediumtext,
  `category_image` varchar(255) DEFAULT 'assets/img/product/no_image.png',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `catname_UNIQUE` (`catname`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Pancake','Pancake','\"assets/img/product/Peanut Butter Pancake.jpg\"','2021-05-20 06:01:21'),(2,'Beancurd','Beancurd','\"assets/img/product/Sea Salt Gula Melaka Beancurd.jpg\"','2021-05-20 15:18:56'),(3,'Drinks','Drinks','\"assets/img/product/Pearly Taro Soya Milk.jpg\"','2021-05-20 15:21:35'),(6,'Pearly','Pearly','\"assets/img/product/Pearly Beancurd.jpg\"','2021-06-19 10:17:56');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_tags`
--

DROP TABLE IF EXISTS `category_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_tags` (
  `category_tags_id` int NOT NULL AUTO_INCREMENT,
  `fk_product_id` int NOT NULL,
  `fk_category_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`category_tags_id`),
  KEY `fk_product_id_idx` (`fk_product_id`),
  KEY `fk_category_id_idx` (`fk_category_id`),
  CONSTRAINT `fk_category_id` FOREIGN KEY (`fk_category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_product_id` FOREIGN KEY (`fk_product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_tags`
--

LOCK TABLES `category_tags` WRITE;
/*!40000 ALTER TABLE `category_tags` DISABLE KEYS */;
INSERT INTO `category_tags` VALUES (3,2,1,'2021-06-15 07:22:27'),(17,6,2,'2021-06-19 10:15:37'),(20,9,3,'2021-06-19 10:15:37'),(23,9,6,'2021-06-19 10:19:35'),(63,5,1,'2021-07-30 18:58:27'),(64,5,2,'2021-07-30 18:58:27'),(65,5,3,'2021-07-30 18:58:27'),(66,3,1,'2021-07-30 18:58:55'),(67,3,2,'2021-07-30 18:58:55'),(68,3,3,'2021-07-30 18:58:55'),(69,3,6,'2021-07-30 18:58:55'),(70,7,1,'2021-07-30 18:59:11'),(78,1,1,'2021-08-01 12:44:11'),(79,1,2,'2021-08-01 12:44:11'),(80,1,3,'2021-08-01 12:44:11'),(81,1,6,'2021-08-01 12:44:11'),(82,4,1,'2021-08-01 12:44:21'),(83,4,2,'2021-08-01 12:44:21'),(84,4,3,'2021-08-01 12:44:21'),(85,4,6,'2021-08-01 12:44:21'),(90,8,1,'2021-08-08 11:20:09'),(91,8,2,'2021-08-08 11:20:09'),(92,8,3,'2021-08-08 11:20:09'),(93,8,6,'2021-08-08 11:20:09'),(94,13,1,'2021-08-08 13:07:18'),(95,13,2,'2021-08-08 13:07:18'),(96,13,3,'2021-08-08 13:07:18'),(97,13,6,'2021-08-08 13:07:18'),(102,12,1,'2021-08-08 13:14:55'),(103,12,2,'2021-08-08 13:14:55'),(104,12,3,'2021-08-08 13:14:55'),(105,12,6,'2021-08-08 13:14:55'),(114,14,1,'2021-08-08 13:35:39'),(115,14,2,'2021-08-08 13:35:39'),(116,14,3,'2021-08-08 13:35:39'),(117,14,6,'2021-08-08 13:35:39'),(118,15,1,'2021-08-09 17:38:42'),(119,15,2,'2021-08-09 17:38:42'),(120,15,3,'2021-08-09 17:38:42');
/*!40000 ALTER TABLE `category_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_inquiry`
--

DROP TABLE IF EXISTS `customer_inquiry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_inquiry` (
  `id_customer_inquiry` int NOT NULL AUTO_INCREMENT,
  `fk_user_id` int DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_customer_inquiry`),
  KEY `fk_userid2_idx` (`fk_user_id`),
  CONSTRAINT `fk_userid2` FOREIGN KEY (`fk_user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_inquiry`
--

LOCK TABLES `customer_inquiry` WRITE;
/*!40000 ALTER TABLE `customer_inquiry` DISABLE KEYS */;
INSERT INTO `customer_inquiry` VALUES (1,2,'aaa'),(2,2,'asdasdasdasdasdasdasdasdasa'),(3,2,'How do i order?'),(4,2,'i cant  buy, help please?'),(5,2,'Delta Charlie 1');
/*!40000 ALTER TABLE `customer_inquiry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `reciept_id` int NOT NULL,
  `address` varchar(255) NOT NULL,
  `postal_code` varchar(255) NOT NULL,
  `unit_address` varchar(255) NOT NULL DEFAULT '-',
  `status` int NOT NULL DEFAULT '0' COMMENT '0 = haven''t view, 1 = viewed/dismissed',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `price_at_order` double(255,2) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `user_id_fk_1_idx` (`user_id`),
  KEY `product_id_fk_1_idx` (`product_id`),
  KEY `reciept_id_idx` (`reciept_id`),
  CONSTRAINT `product_id_fk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reciept_id` FOREIGN KEY (`reciept_id`) REFERENCES `reciepts` (`reciept_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_id_fk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=182 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (106,2,5,141233234,'59 Raffles Pl #14-01, 048621, Singapore','048621','#14-01',0,'2021-08-08 10:58:20',1.20),(107,2,1,141233235,'Shimei East Kitchen 3015 Bedok North Street 5 #06-02 486350, Singapore','486350','#06-02',0,'2021-08-08 11:16:04',NULL),(108,2,1,141233235,'Shimei East Kitchen 3015 Bedok North Street 5 #06-02 486350, Singapore','486350','#06-02',0,'2021-08-08 11:16:04',NULL),(109,2,1,141233235,'Shimei East Kitchen 3015 Bedok North Street 5 #06-02 486350, Singapore','486350','#06-02',0,'2021-08-08 11:16:04',NULL),(110,2,1,141233235,'Shimei East Kitchen 3015 Bedok North Street 5 #06-02 486350, Singapore','486350','#06-02',0,'2021-08-08 11:16:04',NULL),(111,2,1,141233235,'Shimei East Kitchen 3015 Bedok North Street 5 #06-02 486350, Singapore','486350','#06-02',0,'2021-08-08 11:16:04',NULL),(112,2,1,141233235,'Shimei East Kitchen 3015 Bedok North Street 5 #06-02 486350, Singapore','486350','#06-02',0,'2021-08-08 11:16:04',NULL),(113,2,1,141233235,'Shimei East Kitchen 3015 Bedok North Street 5 #06-02 486350, Singapore','486350','#06-02',0,'2021-08-08 11:16:04',NULL),(114,2,1,141233235,'Shimei East Kitchen 3015 Bedok North Street 5 #06-02 486350, Singapore','486350','#06-02',0,'2021-08-08 11:16:04',NULL),(115,2,1,141233235,'Shimei East Kitchen 3015 Bedok North Street 5 #06-02 486350, Singapore','486350','#06-02',0,'2021-08-08 11:16:04',NULL),(116,2,1,141233236,'BLK 3023 UBI ROAD 3, #06-09 408663, Singapore','408663','#06-09',0,'2021-08-08 11:17:38',6.60),(117,2,1,141233237,'342 Tg Katong Rd S(437100), Singapore','437100','-',0,'2021-08-08 11:19:03',6.60),(118,2,1,141233237,'342 Tg Katong Rd S(437100), Singapore','437100','-',0,'2021-08-08 11:19:03',6.60),(119,2,1,141233237,'342 Tg Katong Rd S(437100), Singapore','437100','-',0,'2021-08-08 11:19:03',6.60),(120,2,1,141233237,'342 Tg Katong Rd S(437100), Singapore','437100','-',0,'2021-08-08 11:19:03',6.60),(121,2,1,141233237,'342 Tg Katong Rd S(437100), Singapore','437100','-',0,'2021-08-08 11:19:03',6.60),(122,2,1,141233237,'342 Tg Katong Rd S(437100), Singapore','437100','-',0,'2021-08-08 11:19:03',6.60),(123,2,1,141233237,'342 Tg Katong Rd S(437100), Singapore','437100','-',0,'2021-08-08 11:19:03',6.60),(124,2,1,141233237,'342 Tg Katong Rd S(437100), Singapore','437100','-',0,'2021-08-08 11:19:03',6.60),(125,2,1,141233237,'342 Tg Katong Rd S(437100), Singapore','437100','-',0,'2021-08-08 11:19:03',6.60),(126,2,1,141233237,'342 Tg Katong Rd S(437100), Singapore','437100','-',0,'2021-08-08 11:19:03',6.60),(127,2,8,141233237,'342 Tg Katong Rd S(437100), Singapore','437100','-',0,'2021-08-08 11:19:03',4.60),(128,2,8,141233237,'342 Tg Katong Rd S(437100), Singapore','437100','-',0,'2021-08-08 11:19:03',4.60),(129,2,8,141233237,'342 Tg Katong Rd S(437100), Singapore','437100','-',0,'2021-08-08 11:19:03',4.60),(130,2,8,141233237,'342 Tg Katong Rd S(437100), Singapore','437100','-',0,'2021-08-08 11:19:03',4.60),(131,2,1,141233238,'47 Jln Anak Bukit #047-22 Bukit Panjang Plaza, 588996, Singapore','588996','#047-22',0,'2021-08-08 11:21:27',6.60),(132,2,1,141233238,'47 Jln Anak Bukit #047-22 Bukit Panjang Plaza, 588996, Singapore','588996','#047-22',0,'2021-08-08 11:21:27',6.60),(133,2,1,141233238,'47 Jln Anak Bukit #047-22 Bukit Panjang Plaza, 588996, Singapore','588996','#047-22',0,'2021-08-08 11:21:27',6.60),(134,2,1,141233238,'47 Jln Anak Bukit #047-22 Bukit Panjang Plaza, 588996, Singapore','588996','#047-22',0,'2021-08-08 11:21:27',6.60),(135,2,1,141233238,'47 Jln Anak Bukit #047-22 Bukit Panjang Plaza, 588996, Singapore','588996','#047-22',0,'2021-08-08 11:21:27',6.60),(136,2,8,141233238,'47 Jln Anak Bukit #047-22 Bukit Panjang Plaza, 588996, Singapore','588996','#047-22',0,'2021-08-08 11:21:27',10.00),(137,2,8,141233238,'47 Jln Anak Bukit #047-22 Bukit Panjang Plaza, 588996, Singapore','588996','#047-22',0,'2021-08-08 11:21:27',10.00),(138,2,8,141233238,'47 Jln Anak Bukit #047-22 Bukit Panjang Plaza, 588996, Singapore','588996','#047-22',0,'2021-08-08 11:21:27',10.00),(139,2,8,141233238,'47 Jln Anak Bukit #047-22 Bukit Panjang Plaza, 588996, Singapore','588996','#047-22',0,'2021-08-08 11:21:27',10.00),(140,2,8,141233238,'47 Jln Anak Bukit #047-22 Bukit Panjang Plaza, 588996, Singapore','588996','#047-22',0,'2021-08-08 11:21:27',10.00),(141,2,1,141233239,'16 Koek Rd #03-13, 228796, Singapore','228796','#03-13',0,'2021-08-08 11:25:15',6.60),(142,2,1,141233239,'16 Koek Rd #03-13, 228796, Singapore','228796','#03-13',0,'2021-08-08 11:25:15',6.60),(143,2,1,141233240,'39 Napier Road #05-13 Gleneagles Medical Ctr, 258499, Singapore','258499','#05-13',0,'2021-08-08 11:26:05',6.60),(144,2,1,141233240,'39 Napier Road #05-13 Gleneagles Medical Ctr, 258499, Singapore','258499','#05-13',0,'2021-08-08 11:26:05',6.60),(145,2,1,141233240,'39 Napier Road #05-13 Gleneagles Medical Ctr, 258499, Singapore','258499','#05-13',0,'2021-08-08 11:26:05',6.60),(146,2,1,141233240,'39 Napier Road #05-13 Gleneagles Medical Ctr, 258499, Singapore','258499','#05-13',0,'2021-08-08 11:26:05',6.60),(147,2,1,141233240,'39 Napier Road #05-13 Gleneagles Medical Ctr, 258499, Singapore','258499','#05-13',0,'2021-08-08 11:26:05',6.60),(148,2,1,141233241,'Ion Orchard, 2 Orchard Turn 238801, Singapore','238801','-',0,'2021-08-08 11:28:41',6.60),(149,2,1,141233241,'Ion Orchard, 2 Orchard Turn 238801, Singapore','238801','-',0,'2021-08-08 11:28:41',6.60),(150,2,1,141233241,'Ion Orchard, 2 Orchard Turn 238801, Singapore','238801','-',0,'2021-08-08 11:28:41',6.60),(151,2,1,141233242,'Ion Orchard, 2 Orchard Turn 238801, Singapore','238801','-',0,'2021-08-08 11:32:05',6.60),(152,2,1,141233243,'blk 183 toa payoh central 01-286, 310183, Singapore','310183','#01-286',0,'2021-08-08 11:32:53',6.60),(153,2,1,141233243,'blk 183 toa payoh central 01-286, 310183, Singapore','310183','#01-286',0,'2021-08-08 11:32:53',6.60),(154,2,1,141233243,'blk 183 toa payoh central 01-286, 310183, Singapore','310183','#01-286',0,'2021-08-08 11:32:53',6.60),(155,2,1,141233243,'blk 183 toa payoh central 01-286, 310183, Singapore','310183','#01-286',0,'2021-08-08 11:32:53',6.60),(156,2,1,141233243,'blk 183 toa payoh central 01-286, 310183, Singapore','310183','#01-286',0,'2021-08-08 11:32:53',6.60),(157,2,1,141233243,'blk 183 toa payoh central 01-286, 310183, Singapore','310183','#01-286',0,'2021-08-08 11:32:53',6.60),(158,2,3,141233244,'Blk 720 Clementi West St 2 #01-K1 S(120720), Singapore','120720','#01-K1',0,'2021-08-08 13:39:07',6.60),(159,2,3,141233244,'Blk 720 Clementi West St 2 #01-K1 S(120720), Singapore','120720','#01-K1',0,'2021-08-08 13:39:07',6.60),(160,2,12,141233244,'Blk 720 Clementi West St 2 #01-K1 S(120720), Singapore','120720','#01-K1',0,'2021-08-08 13:39:07',20.00),(161,2,12,141233244,'Blk 720 Clementi West St 2 #01-K1 S(120720), Singapore','120720','#01-K1',0,'2021-08-08 13:39:07',20.00),(162,2,12,141233244,'Blk 720 Clementi West St 2 #01-K1 S(120720), Singapore','120720','#01-K1',0,'2021-08-08 13:39:07',20.00),(163,50,4,141233245,'60 Lor 23 Geylang #05-01 Yu Li Ind Bldg S(388601), Singapore','388371','#05-01',0,'2021-08-08 16:04:23',6.60),(164,50,4,141233245,'60 Lor 23 Geylang #05-01 Yu Li Ind Bldg S(388601), Singapore','388371','#05-01',0,'2021-08-08 16:04:23',6.60),(165,2,12,141233248,'NewTown street 60 DDELTA LEMA','10010','#06-437',0,'2021-08-09 17:14:08',20.00),(166,2,12,141233248,'NewTown street 60 DDELTA LEMA','10010','#06-437',0,'2021-08-09 17:14:08',20.00),(167,2,4,141233249,'Dover Road Clementi Bus Stop','730363','-',0,'2021-08-09 17:23:22',6.60),(168,2,4,141233250,'JTC 22 Woodlands Link #03-20 738734, Singapore','738734','-',0,'2021-08-09 17:24:26',6.60),(169,2,4,141233252,'429 ORCHARD ROAD 03-23 DELPHI ORCHARD, 238876, Singapore','239065','#06-437',0,'2021-08-09 17:48:19',6.60),(170,2,4,141233253,'17 Jalan Minyak #01-328 1610017, Singapore','161005','#01-328',0,'2021-08-09 17:49:52',6.60),(171,2,4,141233253,'17 Jalan Minyak #01-328 1610017, Singapore','161005','#01-328',0,'2021-08-09 17:49:52',6.60),(172,2,4,141233253,'17 Jalan Minyak #01-328 1610017, Singapore','161005','#01-328',0,'2021-08-09 17:49:52',6.60),(173,2,4,141233253,'17 Jalan Minyak #01-328 1610017, Singapore','161005','#01-328',0,'2021-08-09 17:49:52',6.60),(174,2,4,141233253,'17 Jalan Minyak #01-328 1610017, Singapore','161005','#01-328',0,'2021-08-09 17:49:52',6.60),(175,2,4,141233253,'17 Jalan Minyak #01-328 1610017, Singapore','161005','#01-328',0,'2021-08-09 17:49:52',6.60),(176,2,4,141233253,'17 Jalan Minyak #01-328 1610017, Singapore','161005','#01-328',0,'2021-08-09 17:49:52',6.60),(177,2,4,141233253,'17 Jalan Minyak #01-328 1610017, Singapore','161005','#01-328',0,'2021-08-09 17:49:52',6.60),(178,2,8,141233253,'17 Jalan Minyak #01-328 1610017, Singapore','161005','#01-328',0,'2021-08-09 17:49:52',10.00),(179,2,8,141233253,'17 Jalan Minyak #01-328 1610017, Singapore','161005','#01-328',0,'2021-08-09 17:49:52',10.00),(180,2,8,141233253,'17 Jalan Minyak #01-328 1610017, Singapore','161005','#01-328',0,'2021-08-09 17:49:52',10.00),(181,2,8,141233253,'17 Jalan Minyak #01-328 1610017, Singapore','161005','#01-328',0,'2021-08-09 17:49:52',10.00);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_title` varchar(255) NOT NULL,
  `brief_description` mediumtext,
  `detail_description` mediumtext,
  `cost_price` decimal(9,2) NOT NULL,
  `retail_price` decimal(9,2) NOT NULL,
  `stock_quantity` int NOT NULL,
  `image_location` varchar(255) DEFAULT 'assets/img/product/no_image.png',
  `status` tinyint NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `title_UNIQUE` (`product_title`),
  KEY `image_location_fk_idx` (`image_location`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Peanut Butter Pancake','Our peanut butter pancake contains all the natural nuts in the world.\r\n										','Our peanut butter pancake contains all the natural nuts in the world. Sourcing from the heartland of South Africa, the nuts are of high quality and fragance. There is no compromise when it comes to ours nuts. This is a must try!\r\n										',1.20,6.60,342,'assets/img/product/Peanut Butter Pancake.jpg',2,'2021-05-20 05:56:19'),(2,'Red Bean Pancake','Sourced from guatamala, this red bean pancake contains 100% pure red beans.','Sourced from guatamala, this red bean pancake contains 100% pure red beans. The red beans are put through a rigorous screening process that ensures that they are of the highest grade 1 standard awarded by azuki redbean, the international redbean quality standard.',1.20,6.60,232,'assets/img/product/Red Bean Pancake.jpg',0,'2021-06-11 18:24:09'),(3,'Tuna Pancake','This tuna was born and bred in Singapore, owing to our rich nutrient-filled waters. \r\n										','This tuna was born and bred in Singapore, owing to our rich nutrient-filled waters. We ensure that the tunas are brought in fresh from the sea, with a guaranteed quality to the texture of the meat. Singapore tuna is held to such a high standard it is internationally revered.\r\n										',1.20,6.60,421,'assets/img/product/Tuna Pancake.jpg',0,'2021-06-11 18:24:09'),(4,'Sea Salt Gula Melaka Beancurd','Sourced from the himalayan mountains, this salt contains minerals that every human needs. Infused with our bean curd.\r\n										\r\n										\r\n										','Sourced from the himalayan mountains, this salt contains minerals that every human needs. Infused with our bean curd. The Gula Melaka and the bean curd fuse together so well, it gives a unique taste that is hard to miss.\r\n										\r\n										\r\n										',1.20,6.60,108,'assets/img/product/Sea Salt Gula Melaka Beancurd.jpg',0,'2021-06-11 18:24:09'),(5,'Pearly Beancurd','Pearls from the bean curd are soft and chewy, yet not difficult to eat.\r\n										','Pearls from the bean curd are soft and chewy, yet not difficult to eat. We ensure that the pearls are sourced from a reliable source, and that they are 100% safe to consume. \r\n										',1.20,6.60,851,'assets/img/product/Pearly Beancurd.jpg',0,'2021-06-11 18:24:37'),(6,'Grass Jelly Beancurd','The texture that comes from out grass jelly is both soft and smooth.','The texture that comes from out grass jelly is both soft and smooth. The grass jelly blends well with the bean curd, owing to our intense research that our research team did to perfect this combination.',0.80,4.60,377,'assets/img/product/Grass Jelly Beancurd.jpg',0,'2021-06-11 18:26:28'),(7,'Watermelon Soya Milk','The freshest watermelons are chosen for this specialty blend.\r\n										','The freshest watermelons are chosen for this specialty blend.The blend with watermelons and soya milk is irresistible to the human taste buds! Try it out now!\r\n										',0.50,3.60,121,'assets/img/product/Watermelon Soya Milk.jpg',0,'2021-06-11 18:26:28'),(8,'Pearly Bandung Soya Milk','Combining Bandung, a local delight with pearls and soya milk, who could resist such a treat?\r\n										','Combining Bandung, a local delight with pearls and soya milk, who could resist such a treat? This triple blend is a deep favourite with out customers, not trying it will be a big regret in your life!\r\n										',0.80,10.00,469,'assets/img/product/Pearly Bandung Soya Milk.jpg',0,'2021-06-11 18:26:28'),(9,'Pearly Taro Soya Milk','This taro milk has both a silky and smooth texture. It is no mistake that it is a must try!','This taro milk has both a silky and smooth texture. It is no mistake that it is a must try! People travel from all over the world to try out our Pearly Taro Soya Milk! Why not give it a shot?',0.80,4.60,616,'assets/img/product/Pearly Taro Soya Milk.jpg',0,'2021-06-11 18:26:28'),(12,'LIMITED EDITION BISCUIT!','LIMITED EDITION BISCUIT!		\r\n										','LIMITED EDITION BISCUIT!!!\r\n										',0.80,20.00,90,'assets/img/product/16284284957741627704086548.jpg',0,'2021-07-23 18:21:56'),(13,'Atlas10','Atlas10','Atlas10',0.80,4.10,319,'assets/img/product/16284280383071628175915783.jpg',2,'2021-08-08 13:07:18'),(14,'ATLAS12','ATLAS12\r\n										\r\n										','ATLAS12\r\n										\r\n										',0.80,2.48,221,'assets/img/product/16284297390871628175915783.jpg',2,'2021-08-08 13:18:46'),(15,'Delta Romeo','123','123',0.80,1.20,21,'assets/img/product/16285307222431628261329379.jpg',2,'2021-08-09 17:38:42');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reciepts`
--

DROP TABLE IF EXISTS `reciepts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reciepts` (
  `reciept_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `total_price` double(255,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`reciept_id`),
  KEY `user_id_fk_2_idx` (`user_id`),
  CONSTRAINT `user_id_fk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=141233254 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reciepts`
--

LOCK TABLES `reciepts` WRITE;
/*!40000 ALTER TABLE `reciepts` DISABLE KEYS */;
INSERT INTO `reciepts` VALUES (141233234,2,7.06,'2021-08-08 10:58:20'),(141233235,2,63.56,'2021-08-08 11:16:04'),(141233236,2,7.06,'2021-08-08 11:17:38'),(141233237,2,90.31,'2021-08-08 11:19:03'),(141233238,2,88.81,'2021-08-08 11:21:27'),(141233239,2,14.12,'2021-08-08 11:25:15'),(141233240,2,35.31,'2021-08-08 11:26:05'),(141233241,2,21.19,'2021-08-08 11:28:41'),(141233242,2,7.06,'2021-08-08 11:32:05'),(141233243,2,42.37,'2021-08-08 11:32:53'),(141233244,2,78.32,'2021-08-08 13:39:07'),(141233245,50,14.12,'2021-08-08 16:04:22'),(141233246,2,7.06,'2021-08-09 17:10:49'),(141233247,2,7.06,'2021-08-09 17:12:35'),(141233248,2,42.80,'2021-08-09 17:14:08'),(141233249,2,7.06,'2021-08-09 17:23:22'),(141233250,2,7.06,'2021-08-09 17:24:26'),(141233252,2,7.06,'2021-08-09 17:48:19'),(141233253,2,99.30,'2021-08-09 17:49:52');
/*!40000 ALTER TABLE `reciepts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `content` longtext NOT NULL,
  `fk_user_id` int NOT NULL,
  `fk_product_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`review_id`),
  KEY `fk_user_id_idx` (`fk_user_id`),
  KEY `fk_product_id_idx` (`fk_product_id`),
  CONSTRAINT `fk_product_id_1` FOREIGN KEY (`fk_product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_id` FOREIGN KEY (`fk_user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'Very Nice!',1,2,'2021-06-19 14:20:08'),(2,'This is very Good!',26,5,'2021-06-19 14:52:40'),(3,'Superduper goooooooood aoooga!',26,5,'2021-06-19 14:55:26'),(4,'Very NICEEEE',26,4,'2021-06-19 15:01:13'),(7,'HI',2,2,'2021-07-26 08:21:21'),(8,'HI',2,2,'2021-07-26 08:22:01'),(9,'asdasdasdasd',2,12,'2021-08-08 13:15:55');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_number` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` varchar(45) NOT NULL DEFAULT 'Customer',
  `profile_pic_url` varchar(45) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `status` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Terry Tan','terry@gmail.com','96472290','$2a$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Admin','https://www.abc.com/terry.jpg','AIA Alexandra 371 Alexandra Road #10-04',0,'2021-05-18 08:18:00'),(2,'Jia Shunz','jiashun@gmail.com','96472290','$2a$10$FRQm0QD4yFd.cd20V90kvee.wxMexLdX5oUiSY2C5BP8Llyd24V1S','Admin','https://www.abc.com/jiashun.jpg','3 Jalan Lengkok Yew Tee',0,'2021-05-18 08:19:02'),(3,'Shu Yang','ShuYang@gmail.com','96472292','$2a$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Admin','https://www.abc.com/shuyang.jpg','115A Commonwealth Drive #05-24 Tanglin Halt',0,'2021-05-18 08:20:34'),(18,'Matthew Chan','Matthew@gmail.com','96472293','$2a$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer','https://www.abc.com/Matthew.jpg','36 Gul Drive',0,'2021-05-18 08:24:27'),(19,'YanBin','YanBin@gmail.com','96472294','$2a$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer','https://www.abc.com/YanBin.jpg','191 Up Paya Lebar Rd',0,'2021-05-18 08:24:27'),(20,'MrYong','MrYong@gmail.com','96472295','$2a$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer','https://www.abc.com/Yong.jpg','10 Eunos Road 8',0,'2021-05-18 08:24:27'),(21,'JingWen','JingWen@gmail.com','96472296','$2a$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer','https://www.abc.com/JingWen.jpg','23 KALIDASA AVENUE TEACHER\'S HOUSING ESTATE',0,'2021-05-18 08:24:27'),(22,'Isaac','Isaac@gmail.com','96472297','$2a$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer','https://www.abc.com/Isaac.jpg','1 Sophia Road 04-10R Peace Centre',0,'2021-05-18 08:24:27'),(23,'James Ng','JamesNg@gmail.com','96472298','$2a$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer','https://www.abc.com/jamesNg.jpg','1 Park Road #03-62 People\'s Park Complex',0,'2021-05-18 08:24:27'),(24,'Ashley Low','ashleylow@gmail.com','96472299','$2a$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Admin','https://www.abc.com/AshleyLow.jpg','545 ORCHARD ROAD#03-04',0,'2021-05-18 08:24:27'),(26,'Cummerata','Cummerata@gmail.com','96472300','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer',NULL,'7 TEMASEK BOULEVARD 22-02A SUNTEC TOWER ONE',0,'2021-06-11 20:08:06'),(27,'Runterra','Runterra@gmail.com','96472301','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer',NULL,'30 Raffles Place #32-00 Chevron House',0,'2021-06-11 20:12:13'),(28,'Jeffery Tan','JefferyTan@gmail.com','96472302','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer',NULL,'143 Cecil Street #16-04 Gb Building',0,'2021-06-18 12:06:53'),(30,'Tan Shien Hu','TanShienHu@gmail.com','96472303','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer',NULL,'218 CHANGI ROAD 03-06 PKMS BUILDING',1,'2021-06-18 12:10:22'),(31,'asdasdasd','TanShienHuaa@gmail.com','96472304','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer',NULL,'273 Thomson Rd Novena Gdns',0,'2021-06-18 12:11:49'),(32,'Kelvin Kang','TanShienHua@gmail.com','96472305','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer',NULL,'400 Balestier Rd #05-01',0,'2021-06-18 12:17:39'),(33,'Ramesh Monika','rameshmonika@gmail.com','96472306','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Admin',NULL,'Woodlands Avenue 11',0,'2021-06-18 15:49:08'),(34,'Low Jin Kiats','lowjinkiat@gmail.com','96472307','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer',NULL,'Jalan Seng kangs',0,'2021-07-06 01:20:46'),(35,'sadasdasdas','jiashuasdn@gmail.com','96472308','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer',NULL,'asdasdasdasd',0,'2021-07-23 18:37:21'),(36,'EditProfileSpecific','EditProfileSpecific@gmail.com','96472309','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer',NULL,'NewTown street 68',0,'2021-07-23 18:42:15'),(37,'zxcxzczxczxczx','zxcxzczxczxczx@gmail.com','96472200','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer',NULL,'Woodlands Avenue 5',0,'2021-07-24 11:57:09'),(38,'zxczxczx1','zxczxczx1@gmail.com','123123','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer',NULL,'zxczxczx1',0,'2021-07-25 06:30:33'),(39,'MNBVC','MNBVC@gmail.com','96470010','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer',NULL,'NewTown street 68',0,'2021-07-25 06:31:40'),(40,'Delta','Delta@gmail.com','96472230','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer',NULL,'Singapore Polytechnic',0,'2021-07-25 06:41:32'),(41,'Alpha','Alpha@gmail.com','10101010','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer',NULL,'Singapore Polytechnic',0,'2021-07-25 06:42:41'),(42,'Beta','Beta@gmail.com','12341234','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Customer',NULL,'Singapore Polytechnic',0,'2021-07-25 06:44:42'),(43,'Charlie','Charlie@gmail.com','98749874','$10$jM476g7pOJ2.l27jQYArQ..9Ge6AcOc9rmTPPi/JE/QgntJ22Z..y','Admin',NULL,'Singapore Polytechnic',1,'2021-07-25 06:45:58'),(44,'Delta2','Delta2@gmail.com','964722000','$2a$10$w7zRNqmy52Iq2AoF9Igp8.Gc2KgHy39wi8FZISm/CVTnAIUkoSYcu','Customer',NULL,'Singapore Polytechnic',0,'2021-07-28 07:13:55'),(45,'Hotel','Hotel@gmail.com','96472200','$2a$10$nNfr3NcWewo7Q0Xb2e20tu77uf/0MAqya8B370sylnWHKFaG9atqW','Customer',NULL,'Singapore Woodlands',1,'2021-07-28 18:58:54'),(46,'Zulu','Zulu@gmail.com','96472000','$2a$10$vb/W8gnokFtqsWSXeJec.uynakfVs.2WZjqeK51tFwEI.vSDR1BTG','Customer',NULL,'NewTown street 68',0,'2021-08-01 12:30:08'),(47,'MrJIPENGXIANG','MrJIPENGXIANG@gmail.com','96442233','$2a$10$U75OizmLd0nNzLq41yJDkORhqy4dKDEX4FsQdhY2vw3xKLsslpPLy','Customer',NULL,'Singapore Polytechnic',1,'2021-08-03 01:16:41'),(48,'asdasdasdasdasdasdasdasdasd123','asdasdasdasdasdasdasdasdasd123@gmail.com','123123123213213123123123','$2a$10$j.ZW98wsFAwEX1aOut4S5eSzSh4cyzFhkLJtBrnMSvmIiLrldw.Qu','Customer',NULL,'asdasdasdasdasdasdasdasdasd123',0,'2021-08-08 10:01:48'),(49,'HOSPITAL5','HOSPITAL5@gmail.com','96112345','$2a$10$0fBe4UtNFJet2GwuADGPf.j3A3oER76Zw5nHrUaNzCxpesQ3AV.nK','Customer',NULL,'Singapore Polytechnic',1,'2021-08-08 14:34:57'),(50,'Sigma','Sigma@gmail.com','13246548','$2a$10$dWdVw/VnLLPwxyuq19DqOO/a72w.3VeZ4.SSorob8eHV2qU4HCMsi','Customer',NULL,'Sigma',0,'2021-08-08 14:47:05'),(51,'','','','$2a$10$x/Ge7oTMnIrxE8gHWHNVEOjsTS/HNwA2qrr2BtO8u.K0NoB0E.o0.','Customer',NULL,'',0,'2021-08-22 10:08:35');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'sp_shop'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-19  1:50:29
