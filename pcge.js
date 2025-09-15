// Plan Contable General Empresarial - Perú (Completo)
const pcge = [
  // CLASE 1: ACTIVO
  { codigo: "10", nombre: "Efectivo y equivalentes de efectivo" },
  { codigo: "101", nombre: "Caja" },
  { codigo: "102", nombre: "Caja chica" },
  { codigo: "103", nombre: "Efectivo en tránsito" },
  { codigo: "104", nombre: "Cuentas corrientes en instituciones financieras" },
  { codigo: "105", nombre: "Otros equivalentes de efectivo" },

  { codigo: "11", nombre: "Inversiones financieras" },
  { codigo: "111", nombre: "Inversiones a valor razonable con cambios en resultados" },
  { codigo: "112", nombre: "Inversiones a valor razonable con cambios en otro resultado integral" },
  { codigo: "113", nombre: "Inversiones mantenidas hasta el vencimiento" },

  { codigo: "12", nombre: "Cuentas por cobrar comerciales - terceros" },
  { codigo: "121", nombre: "Clientes" },
  { codigo: "122", nombre: "Facturas, boletas y otros comprobantes por cobrar" },
  { codigo: "123", nombre: "Letras por cobrar" },

  { codigo: "13", nombre: "Cuentas por cobrar comerciales - relacionadas" },
  { codigo: "131", nombre: "Cuentas por cobrar a empresas relacionadas" },

  { codigo: "14", nombre: "Cuentas por cobrar diversas - terceros" },
  { codigo: "141", nombre: "Préstamos al personal" },
  { codigo: "142", nombre: "Intereses por cobrar" },
  { codigo: "143", nombre: "Anticipos a proveedores" },

  { codigo: "16", nombre: "Inventarios" },
  { codigo: "161", nombre: "Mercaderías" },
  { codigo: "162", nombre: "Productos terminados" },
  { codigo: "163", nombre: "Productos en proceso" },
  { codigo: "164", nombre: "Materias primas" },
  { codigo: "165", nombre: "Materiales auxiliares, suministros y repuestos" },

  { codigo: "17", nombre: "Activos biológicos" },
  { codigo: "171", nombre: "Activos biológicos en producción" },
  { codigo: "172", nombre: "Activos biológicos en desarrollo" },

  { codigo: "18", nombre: "Propiedades de inversión" },
  { codigo: "181", nombre: "Propiedades de inversión - costo" },
  { codigo: "182", nombre: "Propiedades de inversión - valor razonable" },

  { codigo: "19", nombre: "Propiedad, planta y equipo" },
  { codigo: "191", nombre: "Terrenos" },
  { codigo: "192", nombre: "Edificaciones" },
  { codigo: "193", nombre: "Maquinarias y equipos" },
  { codigo: "194", nombre: "Unidades de transporte" },
  { codigo: "195", nombre: "Muebles y enseres" },
  { codigo: "196", nombre: "Equipos de cómputo" },

  // CLASE 2: PASIVO
  { codigo: "20", nombre: "Cuentas por pagar comerciales - terceros" },
  { codigo: "201", nombre: "Proveedores" },
  { codigo: "202", nombre: "Facturas, boletas y otros comprobantes por pagar" },
  { codigo: "203", nombre: "Letras por pagar" },

  { codigo: "21", nombre: "Cuentas por pagar comerciales - relacionadas" },
  { codigo: "211", nombre: "Cuentas por pagar a empresas relacionadas" },

  { codigo: "23", nombre: "Cuentas por pagar diversas - terceros" },
  { codigo: "231", nombre: "Remuneraciones por pagar" },
  { codigo: "232", nombre: "Intereses por pagar" },
  { codigo: "233", nombre: "Tributos por pagar" },

  { codigo: "25", nombre: "Obligaciones financieras" },
  { codigo: "251", nombre: "Préstamos bancarios" },
  { codigo: "252", nombre: "Arrendamientos financieros" },

  // CLASE 3: PATRIMONIO
  { codigo: "30", nombre: "Capital" },
  { codigo: "301", nombre: "Capital social" },
  { codigo: "302", nombre: "Capital adicional" },

  { codigo: "31", nombre: "Resultados acumulados" },
  { codigo: "311", nombre: "Resultados de ejercicios anteriores" },
  { codigo: "312", nombre: "Resultados no realizados" },

  // CLASE 4: INGRESOS
  { codigo: "40", nombre: "Ventas" },
  { codigo: "401", nombre: "Ventas de mercaderías" },
  { codigo: "402", nombre: "Ventas de productos terminados" },

  { codigo: "41", nombre: "Descuentos, rebajas y bonificaciones concedidas" },

  { codigo: "42", nombre: "Ingresos por servicios" },
  { codigo: "421", nombre: "Servicios prestados" },

  { codigo: "70", nombre: "Ingresos financieros" },
  { codigo: "701", nombre: "Intereses ganados" },
  { codigo: "702", nombre: "Ganancia por diferencia de cambio" },

  // CLASE 5: GASTOS
  { codigo: "60", nombre: "Compras" },
  { codigo: "601", nombre: "Compras de mercaderías" },
  { codigo: "602", nombre: "Compras de materias primas" },

  { codigo: "62", nombre: "Gastos de servicios prestados por terceros" },
  { codigo: "621", nombre: "Servicios básicos" },
  { codigo: "622", nombre: "Servicios de transporte" },

  { codigo: "63", nombre: "Gastos de personal" },
  { codigo: "631", nombre: "Remuneraciones" },
  { codigo: "632", nombre: "Beneficios sociales" },

  { codigo: "64", nombre: "Gastos financieros" },
  { codigo: "641", nombre: "Intereses" },
  { codigo: "642", nombre: "Pérdida por diferencia de cambio" },

  // CLASE 6: COSTOS DE VENTAS
  { codigo: "69", nombre: "Costo de ventas" },
  { codigo: "691", nombre: "Costo de ventas de mercaderías" },
  { codigo: "692", nombre: "Costo de ventas de productos terminados" },

  // CLASE 7: COSTOS DE PRODUCCIÓN
  { codigo: "71", nombre: "Variación de inventarios" },
  { codigo: "72", nombre: "Producción del ejercicio" },
  { codigo: "73", nombre: "Costos indirectos de fabricación" }
];