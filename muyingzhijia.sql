/*
Navicat MySQL Data Transfer

Source Server         : Devin
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : muyingzhijia

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-04-10 08:51:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8 NOT NULL,
  `price` varchar(60) NOT NULL,
  `imgurl` varchar(60) NOT NULL,
  `description` varchar(60) DEFAULT NULL,
  `color` varchar(30) CHARACTER SET utf8 NOT NULL,
  `reg_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '米高m-cro micro trike 手推车TR0001', '599.00', '../img/list/1.jpg', null, '白色', null);
INSERT INTO `goods` VALUES ('2', '米高micro mini deluxe 滑板车MMD001 可调节', '699.00', '../img/list/2.jpg', null, '湖蓝色', null);
INSERT INTO `goods` VALUES ('3', '米高micro mini deluxe 滑板车MMD001 可调节', '699.00', '../img/list/3.jpg', null, '紫色', null);
INSERT INTO `goods` VALUES ('4', '米高micro mini deluxe 滑板车MMD005 可调节', '699.00', '../img/list/4.jpg', null, '黄色', null);
INSERT INTO `goods` VALUES ('5', '米高micro mini deluxe 滑板车MMD006 可调节', '699.00', '../img/list/5.jpg', null, '蓝色', null);
INSERT INTO `goods` VALUES ('6', '米高micro 滑板车 德国进口miniMM0134', '699.00', '../img/list/6.jpg', null, '糖果蓝色', null);
INSERT INTO `goods` VALUES ('7', '米高micro 滑板车 德国进口miniMM0135', '699.00', '../img/list/7.jpg', null, '糖果粉色', null);
INSERT INTO `goods` VALUES ('8', '米高micro 滑板车 德国进口miniMM0136', '699.00', '../img/list/8.jpg', null, '糖果紫色', null);
INSERT INTO `goods` VALUES ('9', '米高micro滑板车（120/100mm）SA0024', '768.00', '../img/list/9.jpg', null, '蓝色', null);
INSERT INTO `goods` VALUES ('10', '米高micro滑板车（120/100mm）SA0027', '768.00', '../img/list/10.jpg', null, '粉色', null);
INSERT INTO `goods` VALUES ('11', '米高micro滑板车（120/100mm）SA0025', '768.00', '../img/list/11.jpg', null, '红色', null);
INSERT INTO `goods` VALUES ('12', '米高micro滑板车（120/100mm）SA0026', '768.00', '../img/list/12.jpg', null, '黑色', null);
INSERT INTO `goods` VALUES ('13', '米高micro滑板车（120/100mm）SA0084', '768.00', '../img/list/13.jpg', null, '深蓝色', null);
INSERT INTO `goods` VALUES ('14', '米高micro mini 3in1 deluxe 滑板车MMD009', '799.00', '../img/list/14.jpg', null, '粉色', null);
INSERT INTO `goods` VALUES ('15', '米高micro mini 3in1 deluxe 滑板车MMD010', '799.00', '../img/list/15.jpg', null, '绿色', null);
INSERT INTO `goods` VALUES ('16', '米高micro mini 3in1 deluxe 滑板车MMD014', '799.00', '../img/list/16.jpg', null, '蓝色', null);
INSERT INTO `goods` VALUES ('17', '米高micro mini 3in1 deluxe 滑板车MMD015', '799.00', '../img/list/17.jpg', null, '红色', null);
INSERT INTO `goods` VALUES ('18', '米高micro mini 3in1 deluxe 滑板车MMD016', '799.00', '../img/list/18.jpg', null, '橙色', null);
INSERT INTO `goods` VALUES ('19', '米高micro mini deluxe 滑板车MMD012 T把', '1128.00', '../img/list/19.jpg', null, '粉色', null);
INSERT INTO `goods` VALUES ('20', '米高micro mini deluxe 滑板车MMD022 T把', '1128.00', '../img/list/20.jpg', null, '绿色', null);
INSERT INTO `goods` VALUES ('21', '米高micro mini deluxe 滑板车MMD023 T把', '1128.00', '../img/list/21.jpg', null, '蓝色', null);
INSERT INTO `goods` VALUES ('22', '米高micro mini deluxe 滑板车MMD025 T把', '1128.00', '../img/list/22.jpg', null, '紫色', null);
INSERT INTO `goods` VALUES ('23', '米高micro mini deluxe 滑板车MMD026 T把', '1128.00', '../img/list/23.jpg', null, '红色', null);
INSERT INTO `goods` VALUES ('24', '米高micro mini deluxe 滑板车MMD019 T把', '1128.00', '../img/list/24.jpg', null, '湖蓝色', null);

-- ----------------------------
-- Table structure for goodsshow
-- ----------------------------
DROP TABLE IF EXISTS `goodsshow`;
CREATE TABLE `goodsshow` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `color` varchar(200) NOT NULL,
  `imgurl` varchar(200) NOT NULL,
  `superior` varchar(60) NOT NULL,
  `superiors` varchar(60) NOT NULL,
  `showimg` varchar(60) NOT NULL,
  `reg_date` timestamp NOT NULL,
  `price` varchar(60) NOT NULL,
  `made` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodsshow
-- ----------------------------
INSERT INTO `goodsshow` VALUES ('2', '米高micro mini deluxe 滑板车MMD001 湖蓝色可调节', '湖蓝色', '../img/detail/2', '运动健身车', '童车汽座', '../img/detail/show-2', '2017-04-07 16:49:29', '699.00', '中国');
INSERT INTO `goodsshow` VALUES ('1', '米高m-cro micro trike 手推车TR0001 白色', '白色', '../img/detail/1', '运动健身车', '童车汽座', '../img/detail/show-1', '2017-04-08 00:00:00', '599.00', '中国');

-- ----------------------------
-- Table structure for jingxuan
-- ----------------------------
DROP TABLE IF EXISTS `jingxuan`;
CREATE TABLE `jingxuan` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `imgurl` varchar(60) NOT NULL,
  `price` varchar(60) NOT NULL,
  `dispatch` varchar(60) NOT NULL,
  `reg_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jingxuan
-- ----------------------------
INSERT INTO `jingxuan` VALUES ('1', '宝贝可爱婴儿洁肤湿巾88抽x3包', '随时随地清洁宝宝幼嫩肌肤', '../img/index/jx01.jpg', '29.90', '母婴之家发货', null);
INSERT INTO `jingxuan` VALUES ('2', 'Grow’n up高思维趣味拆叠小滑梯', '一米多长的滑道，带给小朋友愉快的下滑体验；适用于室内和室外使用；可折叠设计，轻松携带', '../img/index/jx02.jpg', '359.00', '母婴之家发货', null);
INSERT INTO `jingxuan` VALUES ('3', '棒棒猪安全游戏围栏（6+2）五彩缤纷', '宝宝安全守护者', '../img/index/jx03.jpg', '538.00', '母婴之家供应商直发', null);

-- ----------------------------
-- Table structure for tehui
-- ----------------------------
DROP TABLE IF EXISTS `tehui`;
CREATE TABLE `tehui` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `imgurl` varchar(60) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` varchar(60) NOT NULL,
  `reg_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tehui
-- ----------------------------
INSERT INTO `tehui` VALUES ('1', '米高儿童滑板车', '../img/index/th01.jpg', '米高儿童滑板车 特价699元起', '769.00', null);
INSERT INTO `tehui` VALUES ('2', '卡特兔宝宝童鞋学步鞋特惠专场', '../img/index/th02.jpg', '卡特兔宝宝童鞋学步鞋特惠专场', '15.00', null);
INSERT INTO `tehui` VALUES ('3', '谷斐尔春季专场', '../img/index/th03.jpg', '谷斐尔春季专场', '15.90', null);
INSERT INTO `tehui` VALUES ('4', '贝尔奇洛婴童服饰用品特惠专场', '../img/index/th04.jpg', '贝尔奇洛婴童服饰用品特惠专场', '19.00', null);
INSERT INTO `tehui` VALUES ('5', '康科德儿童安全座椅', '../img/index/th05.jpg', '德国安全座椅安全轻柔呵护宝宝', '1299.00', null);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `reg_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '15156341300', '123456', null);
INSERT INTO `user` VALUES ('2', '17688865658', 'hzh921211Z', null);
SET FOREIGN_KEY_CHECKS=1;
