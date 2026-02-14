using Microsoft.AspNetCore.Mvc;

namespace barbearia.Controllers
{
    public class ServicoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
