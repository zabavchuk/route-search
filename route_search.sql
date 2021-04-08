-- Dumping database structure for route_search
CREATE DATABASE IF NOT EXISTS `route_search` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `route_search`;

-- Dumping structure for таблиця route_search.directions
CREATE TABLE IF NOT EXISTS `directions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `from` varchar(255) NOT NULL DEFAULT '',
  `to` varchar(255) NOT NULL DEFAULT '',
  `distance` int(6) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;

-- Dumping data for table route_search.directions: 51 rows
/*!40000 ALTER TABLE `directions` DISABLE KEYS */;
INSERT INTO `directions` (`id`, `from`, `to`, `distance`) VALUES
	(1, 'Львів', 'Луцьк', 150),
	(2, 'Львів', 'Тернопіль', 134),
	(3, 'Львів', 'Ужгород', 267),
	(4, 'Львів', 'Івано-Франківськ', 134),
	(6, 'Луцьк', 'Рівне', 72),
	(8, 'Ужгород', 'Івано-Франківськ', 292),
	(9, 'Львів', 'Рівне', 211),
	(12, 'Івано-Франківськ', 'Тернопіль', 134),
	(13, 'Івано-Франківськ', 'Чернівці', 135),
	(15, 'Тернопіль', 'Рівне', 159),
	(17, 'Тернопіль', 'Чернівці', 171),
	(18, 'Тернопіль', 'Хмельницький', 111),
	(21, 'Чернівці', 'Хмельницький', 187),
	(25, 'Рівне', 'Хмельницький', 194),
	(30, 'Хмельницький', 'Вінниця', 121),
	(31, 'Хмельницький', 'Житомир', 184),
	(32, 'Житомир', 'Рівне', 188),
	(33, 'Житомир', 'Вінниця', 128),
	(34, 'Житомир', 'Київ', 140),
	(35, 'Вінниця', 'Чернівці', 269),
	(36, 'Вінниця', 'Одеса', 423),
	(37, 'Вінниця', 'Київ', 267),
	(38, 'Вінниця', 'Черкаси', 354),
	(39, 'Вінниця', 'Кропивницький', 337),
	(40, 'Київ', 'Чернігів', 142),
	(41, 'Київ', 'Полтава', 344),
	(42, 'Київ', 'Черкаси', 192),
	(43, 'Чернігів', 'Суми', 306),
	(44, 'Чернігів', 'Полтава', 406),
	(45, 'Полтава', 'Суми', 174),
	(46, 'Полтава', 'Черкаси', 243),
	(47, 'Полтава', 'Харків', 143),
	(48, 'Полтава', 'Кропивницький', 249),
	(49, 'Полтава', 'Дніпро', 196),
	(50, 'Суми', 'Харків', 180),
	(51, 'Одеса', 'Миколаїв', 137),
	(52, 'Кропивницький', 'Черкаси', 129),
	(53, 'Кропивницький', 'Дніпро', 266),
	(54, 'Кропивницький', 'Миколаїв', 186),
	(55, 'Дніпро', 'Харків', 218),
	(56, 'Дніпро', 'Донецьк', 263),
	(57, 'Дніпро', 'Запоріжжя', 85),
	(58, 'Дніпро', 'Херсон', 329),
	(59, 'Дніпро', 'Миколаїв', 321),
	(60, 'Херсон', 'Миколаїв', 71),
	(61, 'Херсон', 'Сімферополь', 264),
	(62, 'Херсон', 'Запоріжжя', 287),
	(63, 'Харків', 'Луганськ', 338),
	(64, 'Харків', 'Донецьк', 314),
	(65, 'Донецьк', 'Луганськ', 168),
	(66, 'Донецьк', 'Запоріжжя', 229);
/*!40000 ALTER TABLE `directions` ENABLE KEYS */;

-- Dumping structure for таблиця route_search.paths
CREATE TABLE IF NOT EXISTS `paths` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `path` text NOT NULL,
  `distance` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Dumping data for table route_search.paths: 0 rows
/*!40000 ALTER TABLE `paths` DISABLE KEYS */;
/*!40000 ALTER TABLE `paths` ENABLE KEYS */;

-- Dumping structure for таблиця route_search.points
CREATE TABLE IF NOT EXISTS `points` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- Dumping data for table route_search.points: 27 rows
/*!40000 ALTER TABLE `points` DISABLE KEYS */;
INSERT INTO `points` (`id`, `name`) VALUES
	(1, 'Львів'),
	(2, 'Луцьк'),
	(3, 'Тернопіль'),
	(4, 'Рівне'),
	(5, 'Ужгород'),
	(6, 'Івано-Франківськ'),
	(7, 'Чернівці'),
	(8, 'Вінниця'),
	(9, 'Хмельницький'),
	(10, 'Житомир'),
	(11, 'Київ'),
	(12, 'Черкаси'),
	(13, 'Кропивницький'),
	(14, 'Миколаїв'),
	(15, 'Одеса'),
	(16, 'Чернігів'),
	(17, 'Суми'),
	(18, 'Полтава'),
	(19, 'Дніпро'),
	(20, 'Запоріжжя'),
	(21, 'Херсон'),
	(22, 'Сімферополь'),
	(23, 'Харків'),
	(24, 'Луганськ'),
	(25, 'Донецьк'),
	(26, 'Дубно'),
	(27, 'Шепетівка');
/*!40000 ALTER TABLE `points` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
