// import { modules } from "../../../modules";

export const loadRoutes = async () => {
  let routes = [];

  // try {
  //   const { CpanelRoutes } = await import("@ncvc/cpanel");
  //   const route = { component: <CpanelRoutes />, path: "/cpanel/*" };

  //   routes = routes.concat(route);
  // } catch (error) {
  //   console.error("Error loading CpanelRoutes:", error);
  // }

  // try {
  //   const { MissionsRoutes } = await import("@ncvc/missions");
  //   const route = { component: <MissionsRoutes />, path: "/missions/*" };

  //   routes = routes.concat(route);
  // } catch (error) {
  //   console.error("Error loading MissionsRoutes:", error);
  // }

  return routes;

  // for (var module of modules) {
  //   try {
  //     var { default: ModuleRoutes } = await import(module.name);

  //     var route = { component: <ModuleRoutes />, path: module.path };
  //     routes.push(route);
  //   } catch (error) {
  //     console.error(`Error loading ModuleRoutes from ${module.name}:`, error);
  //   }
  // }
};
