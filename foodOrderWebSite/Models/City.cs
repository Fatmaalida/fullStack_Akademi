using ff.Models.Abstracts;

namespace ff.Models
{
    public class City:CommonProp
    {
        public ICollection<User>? Users { get; set; }
        public ICollection<Restaurant>? Restaurants { get; set; }
    }
}
