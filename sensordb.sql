-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 08 2019 г., 16:49
-- Версия сервера: 5.6.38
-- Версия PHP: 7.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `sensordb`
--

-- --------------------------------------------------------

--
-- Структура таблицы `manufacturers`
--

CREATE TABLE `manufacturers` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `person` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `manufacturers`
--

INSERT INTO `manufacturers` (`id`, `name`, `person`) VALUES
(1, 'MEFE', 'AAA'),
(2, 'ACHEN', 'BBB'),
(3, 'SATELIT', 'CCC');

-- --------------------------------------------------------

--
-- Структура таблицы `materials`
--

CREATE TABLE `materials` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `materials`
--

INSERT INTO `materials` (`id`, `name`) VALUES
(1, 'InSb'),
(2, 'InAs'),
(3, 'Au');

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2018_11_19_125537_create_roles_table', 1),
(3, '2018_11_19_131539_create_users_fk', 1),
(4, '2019_01_23_104314_create_manufacturers_table', 1),
(5, '2019_01_23_104416_create_materials_table', 1),
(6, '2019_01_23_104456_create_series_table', 1),
(8, '2019_03_01_084619_create_samples_table', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'root'),
(2, 'admin'),
(3, 'user');

-- --------------------------------------------------------

--
-- Структура таблицы `samples`
--

CREATE TABLE `samples` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `current` double NOT NULL,
  `resistance` double NOT NULL,
  `sqr_resistance` double NOT NULL,
  `offset` double NOT NULL,
  `hall_voltage` double NOT NULL,
  `sensitive_i` double NOT NULL,
  `sensitive_v` double NOT NULL,
  `concentration` double NOT NULL,
  `resistivity` double NOT NULL,
  `mobility` double NOT NULL,
  `date_time` timestamp NULL DEFAULT NULL,
  `noties` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `series_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `samples`
--

INSERT INTO `samples` (`id`, `name`, `current`, `resistance`, `sqr_resistance`, `offset`, `hall_voltage`, `sensitive_i`, `sensitive_v`, `concentration`, `resistivity`, `mobility`, `date_time`, `noties`, `series_id`) VALUES
(1, 'name-1', 10.5, 50.5, 30.5, 2.5, 3.5, 12.5, 8.5, 5.5e17, 0.322, 20000.5, '1999-12-31 22:00:00', 'noty', 1),
(2, 'name-2', 10400.000000000002, 50.4, 30.4, 2400, 3400, 12.4, 8.4, 5.4e17, 0.324, 20000.4, '1999-12-31 22:00:00', 'noty', 2),
(3, 'name-3', 10, 50, 30, 2, 3, 12, 8, 5e17, 0.32, 20000, '1999-12-31 22:00:00', 'noty', 1),
(4, 'name-4', 10, 50, 30, 200, 300, 12, 8, 5e17, 0.32, 20000, '1999-12-31 22:00:00', 'noty', 2),
(5, 'name-5', 10, 50, 30, 2, 3, 12, 8, 5e17, 0.32, 20000, '1999-12-31 22:00:00', 'noty', 1),
(6, 'name-6', 10, 50, 30, 200, 300, 12, 8, 5e17, 0.32, 20000, '1999-12-31 22:00:00', 'noty', 2),
(7, 'name-7', 0.01, 50, 30, 0.002, 0.003, 12, 8, 5e17, 0.32, 20000, '1999-12-31 22:00:00', 'noty', 3),
(8, 'name-8', 0.00001, 50, 30, 0.0002, 0.0003, 12, 8, 5e17, 0.32, 20000, '1999-12-31 22:00:00', 'noty', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `series`
--

CREATE TABLE `series` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `structure` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thickness` double NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `current` double NOT NULL,
  `resistance` double NOT NULL,
  `sensitivity` double NOT NULL,
  `offset` double NOT NULL,
  `material_type` enum('3D','2D') COLLATE utf8mb4_unicode_ci NOT NULL,
  `vunits` enum('V','mV','mkV','nV') COLLATE utf8mb4_unicode_ci NOT NULL,
  `iunits` enum('A','mA','mkA','nA') COLLATE utf8mb4_unicode_ci NOT NULL,
  `manufacturers_id` int(10) UNSIGNED NOT NULL,
  `materials_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `series`
--

INSERT INTO `series` (`id`, `name`, `structure`, `thickness`, `image`, `current`, `resistance`, `sensitivity`, `offset`, `material_type`, `vunits`, `iunits`, `manufacturers_id`, `materials_id`) VALUES
(1, 'series-1', 'layer-3/substrate', 1000, 'image-3', 10, 50, 35, 1, '3D', 'mV', 'mA', 1, 1),
(2, 'series-2', 'layer-3/substrate', 1000, 'image-3', 10, 50, 35, 1, '3D', 'mkV', 'mkA', 2, 2),
(3, 'series-3', 'layer-3/substrate', 1000, 'image-3', 10, 50, 35, 1, '3D', 'V', 'A', 3, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `roles_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `token`, `roles_id`) VALUES
(2, 'root', '5b27b6e52d0f2c64c66d5dbc9e8a836b', '3fb024e46e221b100b3b948be1c5eb79', 1),
(3, 'admin', 'e10adc3949ba59abbe56e057f20f883e', 'fd7f0f5b6afa610ad3e334acad32b0e4', 2),
(4, 'user', 'e10adc3949ba59abbe56e057f20f883e', 'af4c236904b2069d556e33e73f2aa033', 3);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `manufacturers`
--
ALTER TABLE `manufacturers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `samples`
--
ALTER TABLE `samples`
  ADD PRIMARY KEY (`id`),
  ADD KEY `samples_series_id_foreign` (`series_id`);

--
-- Индексы таблицы `series`
--
ALTER TABLE `series`
  ADD PRIMARY KEY (`id`),
  ADD KEY `series_manufacturers_id_foreign` (`manufacturers_id`),
  ADD KEY `series_materials_id_foreign` (`materials_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_roles_id_foreign` (`roles_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `manufacturers`
--
ALTER TABLE `manufacturers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `materials`
--
ALTER TABLE `materials`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `samples`
--
ALTER TABLE `samples`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `series`
--
ALTER TABLE `series`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `samples`
--
ALTER TABLE `samples`
  ADD CONSTRAINT `samples_series_id_foreign` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `series`
--
ALTER TABLE `series`
  ADD CONSTRAINT `series_manufacturers_id_foreign` FOREIGN KEY (`manufacturers_id`) REFERENCES `manufacturers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `series_materials_id_foreign` FOREIGN KEY (`materials_id`) REFERENCES `materials` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_roles_id_foreign` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
