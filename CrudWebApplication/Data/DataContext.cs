using CrudWebApplication.Model;
using Microsoft.EntityFrameworkCore;

namespace CrudWebApplication.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
             
        }

        public DbSet<Student> students { get; set; }
    }
}
