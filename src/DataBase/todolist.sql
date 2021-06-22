-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-06-2021 a las 15:32:05
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `todolist`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lista`
--

CREATE TABLE `lista` (
  `id` int(11) NOT NULL,
  `Name` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Description` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Autor` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Estado` tinyint(1) NOT NULL,
  `Date` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `lista`
--

INSERT INTO `lista` (`id`, `Name`, `Description`, `Autor`, `Estado`, `Date`) VALUES
(84, 'Aula 8', 'tomar captura', 'Alex', 1, '2021-06-22T08:50:00.000Z'),
(86, 'Aula 8', 'tomar captura', 'Alex', 0, '2021-06-22T09:02:00.000Z'),
(87, 'Aula 8', 'tomar captura', 'Alex', 0, '2021-06-22T09:02:00.000Z'),
(88, 'Aula 8', 'tomar captura', 'Alex', 0, '2021-06-22T09:02:00.000Z'),
(89, 'Aula 8', 'tomar captura', 'Alex', 0, '2021-06-22T09:02:00.000Z'),
(90, 'Aula 8', 'tomar captura', 'Alex', 0, '2021-06-22T09:02:00.000Z'),
(91, 'Aula 8', 'tomar captura', 'Alex', 0, '2021-06-22T09:02:00.000Z'),
(92, 'Aula 8', 'tomar captura', 'Alex', 0, '2021-06-22T09:02:00.000Z'),
(93, 'Aula 8', 'tomar captura', 'Alex', 0, '2021-06-22T09:02:00.000Z'),
(94, 'Aula 8', 'tomar captura', 'Alex', 0, '2021-06-22T09:02:00.000Z'),
(95, 'Aula 8', 'tomar captura', 'Alex', 0, '2021-06-22T09:02:00.000Z'),
(96, 'Aula 8', 'tomar captura', 'Alex', 0, '2021-06-22T09:02:00.000Z'),
(97, 'Aula 8', 'tomar captura', 'Alex', 0, '2021-06-22T09:02:00.000Z'),
(98, 'Aula 8', 'tomar captura', 'Alex', 0, '2021-06-22T09:02:00.000Z'),
(99, 'Aula 8', 'tomar captura', 'Alex', 0, '2021-06-22T09:02:00.000Z'),
(100, 'Aula 8', 'tomar captura', 'Alex', 0, '2021-06-22T09:02:00.000Z'),
(103, 'Aula 8', 'tomar captura', 'Alex', 0, '2021-06-22T09:31:00.000Z');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `lista`
--
ALTER TABLE `lista`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `lista`
--
ALTER TABLE `lista`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
