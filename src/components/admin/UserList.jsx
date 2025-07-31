const UserList = ({ users }) => {
  const getBadgeColor = (subscription) => {
    switch (subscription) {
      case "Basic":
        return "bg-gray-200 text-gray-700";
      case "Pro":
        return "bg-blue-100 text-blue-700";
      case "Enterprise":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-4 sm:p-6 w-full mt-6 border border-gray-200">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">User List</h3>

      {users.length === 0 ? (
        <p className="text-gray-500 text-sm text-center py-6">
          No users added yet.
        </p>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm border-separate border-spacing-y-2 min-w-[600px]">
              <thead>
                <tr className="text-left text-gray-600 bg-gray-50">
                  <th className="p-3 sticky top-0 bg-gray-50 z-10">#</th>
                  <th className="p-3 sticky top-0 bg-gray-50 z-10">Email</th>
                  <th className="p-3 sticky top-0 bg-gray-50 z-10">Subscription</th>
                  <th className="p-3 sticky top-0 bg-gray-50 z-10 text-right">Key</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr
                    key={idx}
                    className="bg-white hover:shadow-md transition rounded-lg"
                  >
                    <td className="p-3 font-medium text-gray-700">{idx + 1}</td>
                    <td className="p-3 max-w-[200px] lg:max-w-[250px] truncate text-gray-800">
                      <span title={user.email}>{user.email}</span>
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(
                          user.subscription
                        )}`}
                      >
                        {user.subscription}
                      </span>
                    </td>
                    <td className="p-3 text-right font-mono text-gray-500">{user.key}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {users.map((user, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md p-4 rounded-xl border border-gray-100"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-800">
                      #{idx + 1}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${getBadgeColor(
                        user.subscription
                      )}`}
                    >
                      {user.subscription}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm break-all">{user.email}</p>
                  <p className="text-xs text-gray-500 font-mono">Key: {user.key}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UserList;
