import { useState } from 'react';
import { FiUpload, FiFile, FiImage, FiFilm, FiFolder, FiHome, FiMenu } from 'react-icons/fi';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: <FiHome className="mr-3" /> },
  { id: 'recent', label: 'Recent Files', icon: <FiFile className="mr-3" /> },
  { id: 'documents', label: 'Documents', icon: <FiFile className="mr-3" /> },
  { id: 'images', label: 'Images', icon: <FiImage className="mr-3" /> },
  { id: 'media', label: 'Media', icon: <FiFilm className="mr-3" /> },
  { id: 'others', label: 'Others', icon: <FiFolder className="mr-3" /> },
];

const recentFiles = [
  { id: 1, name: 'Project_Proposal.pdf', type: 'document', size: '2.4 MB', date: '2023-08-20' },
  { id: 2, name: 'Profile_Picture.jpg', type: 'image', size: '1.2 MB', date: '2023-08-19' },
  { id: 3, name: 'Meeting_Notes.docx', type: 'document', size: '0.8 MB', date: '2023-08-18' },
  { id: 4, name: 'Presentation.pptx', type: 'document', size: '5.7 MB', date: '2023-08-17' },
  { id: 5, name: 'Screenshot.png', type: 'image', size: '0.9 MB', date: '2023-08-16' },
];

export default function HomeView() {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleFileUpload = (e) => {
    const files = e.target.files;
    console.log('Files to upload:', files);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-md transition-all duration-300 ease-in-out`}>
        <div className="p-4 flex items-center justify-between border-b">
          <h1 className={`text-xl font-bold text-purple-600 ${!sidebarOpen && 'hidden'}`}>StoreBox</h1>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <FiMenu className="text-gray-600" />
          </button>
        </div>
        
        <nav className="mt-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`flex items-center w-full px-6 py-3 text-left ${
                activeNav === item.id
                  ? 'bg-purple-50 text-purple-600 border-r-4 border-purple-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.icon}
              {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {navItems.find(item => item.id === activeNav)?.label || 'Dashboard'}
            </h2>
            <div className="flex items-center space-x-4">
              <label className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-purple-700 transition-colors">
                <FiUpload className="mr-2" />
                Upload File
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                  multiple
                />
              </label>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {activeNav === 'dashboard' && (
            <div className="space-y-6">
              {/* Welcome Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Welcome to StoreBox</h2>
                <p className="text-gray-600">Manage your files and documents in one place.</p>
              </div>

              {/* Quick Stats or Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-sm font-medium text-gray-500">Total Files</h3>
                  <p className="text-2xl font-bold text-gray-800 mt-1">1,248</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-sm font-medium text-gray-500">Storage Used</h3>
                  <p className="text-2xl font-bold text-gray-800 mt-1">45.2 GB</p>
                  <p className="text-sm text-gray-500 mt-1">of 100 GB</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-sm font-medium text-gray-500">Last Updated</h3>
                  <p className="text-2xl font-bold text-gray-800 mt-1">Just now</p>
                </div>
              </div>
            </div>
          )}

          {activeNav === 'recent' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Recent Files</h2>
                  <button className="text-sm text-purple-600 hover:text-purple-700">View All</button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Size
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Modified
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentFiles.map((file) => (
                        <tr key={file.id} className="hover:bg-gray-50 cursor-pointer">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-md flex items-center justify-center">
                                {file.type === 'image' ? (
                                  <FiImage className="h-5 w-5 text-purple-600" />
                                ) : (
                                  <FiFile className="h-5 w-5 text-purple-600" />
                                )}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{file.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 capitalize">
                              {file.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {file.size}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {file.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeNav === 'documents' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Documents</h2>
              <p className="text-gray-600">Your documents will appear here.</p>
              {/* Add document-specific content here */}
            </div>
          )}

          {activeNav === 'images' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Images</h2>
              <p className="text-gray-600">Your images will appear here.</p>
              {/* Add image gallery content here */}
            </div>
          )}

          {activeNav === 'media' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Media</h2>
              <p className="text-gray-600">Your media files will appear here.</p>
              {/* Add media player or gallery here */}
            </div>
          )}

          {activeNav === 'others' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Other Files</h2>
              <p className="text-gray-600">All other files will appear here.</p>
              {/* Add other files content here */}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}