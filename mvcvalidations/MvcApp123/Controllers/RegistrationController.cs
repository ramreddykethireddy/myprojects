using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcApp123.Controllers
{
    public class RegistrationController : Controller
    {
        //
        // GET: /Registration/

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Registration(string name)
        {
            ViewBag.name = name;
            var model = name;
            return View(model);
        }

    }
}
