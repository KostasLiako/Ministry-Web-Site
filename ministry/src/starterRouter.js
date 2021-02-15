import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/starter/StarterHeader";
import Footer from "./layout/starter/StarterFooter";
import Starter from "./views/Starter.vue";
import Profile from "./views/Profile.vue";
import Reservation from "./views/components/Reservation.vue";
import Test from "./views/Test.vue";
import Employer from "./views/EmployerServices.vue";
import Suspension from "./views/SuspensionOfContract.vue";
import OdigiesCovid from "./views/OdigiesCovid.vue"
import GenikesPlhroforiesCovid from "./views/GenikesPlhroforiesCovid.vue"
import OdigiesErgodoti from "./views/OdigiesErgodoti.vue"
import OdigiesErgazomenou from "./views/OdigiesErgazomenou.vue"
import OdigiesEodi from "./views/OdigiesEodi.vue"
import Epikoinwnia from "./views/Epikoinwnia.vue"
import Discount from "./views/DiscountCalculation.vue"
import Remote from "./views/RemoteWork.vue"
import ReservationVal from "./views/ReservationValidation.vue"
import Employ from "./views/EmployServices.vue"
import SpecialLeave from "./views/SpecialLeave.vue"
import PrivatePage from "./views/PrivatePage.vue"
import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
import PrivatePage2 from "./views/PrivatePage2.vue"
import SpecialLeaveReady from "./views/SpecialLeaveReady.vue"
import RemoteWorReady from "./views/RemoteWorkReady.vue"
import SuspensionOfContractReady from "./views/SuspesionOfContractReady.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "starter",
      components: {
        header: Header,
        default: Starter,
        footer: Footer
      },
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: Header,
        default: Profile,
        footer: Footer
      }
    }, {
      path: "/reservation",
      name: "Reservation",
      components: {
        header: Header,
        default: Reservation,
        footer: Footer
      }
    }, {
      path: "/Epikoinwnia",
      name: "Epikoinwnia",
      components: {
        header: Header,
        default: Epikoinwnia,
        footer: Footer
      }
    },
    {
      path: "/employerServices",
      name: "employer",
      components: {
        header: Header,
        default: Employer,
        footer: Footer
      }
    },
    {
      path: "/employerServices/suspension",
      name: "suspension",
      components: {
        header: Header,
        default: Suspension,
        footer: Footer
      }
    },
    {
      path: "/OdigiesCovid",
      name: "OdigiesCovid",
      components: {
        header: Header,
        default: OdigiesCovid,
        footer: Footer
      }
    },
    {
      path: "/GenikesPlhroforiesCovid",
      name: "GenikesPlhroforiesCovid",
      components: {
        header: Header,
        default: GenikesPlhroforiesCovid,
        footer: Footer
      }
    },
    {
      path: "/OdigiesErgazomenou",
      name: "OdigiesErgazomenou",
      components: {
        header: Header,
        default: OdigiesErgazomenou,
        footer: Footer
      }
    },
    {
      path: "/OdigiesErgodoti",
      name: "OdigiesErgodoti",
      components: {
        header: Header,
        default: OdigiesErgodoti,
        footer: Footer
      }
    },
    {
      path: "/OdigiesEodi",
      name: "OdigiesEodi",
      components: {
        header: Header,
        default: OdigiesEodi,
        footer: Footer
      }
    },
    {
      path: "/Test",
      name: "Test",
      components: {
        header: Header,
        default: Test,
        footer: Footer
      }
    },
    {
      path: "/employerServices/discount",
      name: "Discount",
      components: {
        header: Header,
        default: Discount,
        footer: Footer
      }
    },
    {
      path: "/employerServices/remote",
      name: "Remote",
      components: {
        header: Header,
        default: Remote,
        footer: Footer
      }
    },
    {
      path: "/ReservationVal",
      name: "ReservationVal",
      components: {
        header: Header,
        default: ReservationVal,
        footer: Footer
      }
    },
    {
      path: "/employ",
      name: "Employ",
      components: {
        header: Header,
        default: Employ,
        footer: Footer
      }
    },
    {
      path: "/employ/special-leave",
      name: "SpecialLeave",
      components: {
        header: Header,
        default: SpecialLeave,
        footer: Footer
      }
    },
    {
      path: "/private-page",
      name: "PrivatePage",
      components: {
        header: Header,
        default: PrivatePage,
        footer: Footer
      }
    },
    {
      path: "/login",
      name: "Login",
      components: {
        header: Header,
        default: Login,
        footer: Footer
      }
    },
    {
      path: "/register",
      name: "Register",
      components: {
        header: Header,
        default: Register,
        footer: Footer
      }
    },
    {
      path: "/private-page2",
      name: "PrivatePage2",
      components: {
        header: Header,
        default: PrivatePage2,
        footer: Footer
      }
    },
    {
      path: "/special-leave-ready",
      name: "SpecialLeaveReady",
      components: {
        header: Header,
        default: SpecialLeaveReady,
        footer: Footer
      }
    },
    {
      path: "/remote-work-ready",
      name: "RemoteWorkReady",
      components: {
        header: Header,
        default: RemoteWorReady,
        footer: Footer
      }
    },
    ,
    {
      path: "/suspesion-ready",
      name: "SuspesionReady",
      components: {
        header: Header,
        default: SuspensionOfContractReady,
        footer: Footer
      }
    }
  ]
});
