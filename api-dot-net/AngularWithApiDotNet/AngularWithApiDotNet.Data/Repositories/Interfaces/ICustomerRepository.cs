using AngularWithApiDotNet.Model;

namespace AngularWithApiDotNet.Data.Repositories.Interfaces
{
    public interface ICustomerRepository
    {
        Task<IEnumerable<Customer>> GetAll();
        Task<Customer> GetById(int id);
        Task<bool> Insert(Customer customer);
        Task<bool> Update(Customer customer);
        Task<bool> Delete(int id);
    }
}
