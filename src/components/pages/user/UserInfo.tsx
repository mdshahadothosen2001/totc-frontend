import React from "react";
import { useUserProfile } from "../../../hooks";
import type { UserProfileProps } from "../../../types/user.type";

const UserInfo: React.FC<UserProfileProps> = ({ user_info, className }) => {
  const { user, avatar, displayName, initials } = useUserProfile(user_info);

  if (!user) return <div className={className}>No user information available.</div>;

  return (
    <div className={`${className ?? ""} flex flex-col md:flex-row gap-6 p-4 md:p-6`}>
      {/* Left column: compact profile + nav */}
      <aside className="w-full md:w-64 bg-white rounded-md shadow-sm p-4 flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden mb-3">
            {avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={avatar} alt={displayName} className="w-full h-full object-cover" />
            ) : (
              <span className="text-xl font-bold text-gray-700">{initials}</span>
            )}
          </div>
          <div className="font-semibold">{displayName || user.username}</div>
          {user.email && <div className="text-xs text-gray-500">{user.email}</div>}
        </div>

        <nav className="flex flex-col text-sm text-gray-600">
          <button className="text-left py-2 px-2 rounded-md flex items-center gap-3 bg-gray-50 w-full">
            <span className="w-4 h-4 bg-gray-300 rounded-full" />
            <span>Dashboard</span>
          </button>
          <button className="text-left py-2 px-2 rounded-md flex items-center gap-3 bg-teal-50 text-teal-600 font-medium w-full">
            <span className="w-4 h-4 bg-teal-300 rounded-full" />
            <span>User Profile</span>
          </button>
          <button className="text-left py-2 px-2 rounded-md flex items-center gap-3 w-full">
            <span className="w-4 h-4 bg-gray-300 rounded-full" />
            <span>Documents</span>
          </button>
          <button className="text-left py-2 px-2 rounded-md flex items-center gap-3 w-full">
            <span className="w-4 h-4 bg-gray-300 rounded-full" />
            <span>Setting</span>
          </button>
        </nav>

        <div>
          <button className="w-full border border-dashed border-gray-200 rounded-md py-3 text-sm text-gray-600">
            Add New Project
          </button>
          <div className="mt-4 text-xs text-gray-500">Current Projects</div>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-400 text-white flex items-center justify-center text-xs">WD</div>
                <div className="text-sm">Web Design</div>
              </div>
              <div className="text-sm text-gray-500">25%</div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-400 text-white flex items-center justify-center text-xs">DS</div>
                <div className="text-sm">Design System</div>
              </div>
              <div className="text-sm text-gray-500">50%</div>
            </li>
          </ul>
        </div>
      </aside>

      {/* Right column: main content */}
      <main className="flex-1 space-y-6">
        <div className="bg-white rounded-md shadow-sm p-4 md:p-6">
          <h3 className="font-semibold mb-4">General Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500">First Name</label>
              <input readOnly value={user.first_name ?? ""} className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-xs text-gray-500">Last Name</label>
              <input readOnly value={user.last_name ?? ""} className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm" />
            </div>

            <div>
              <label className="text-xs text-gray-500">Country / Region</label>
              <input readOnly value={user.region ?? ""} className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-xs text-gray-500">City</label>
              <input readOnly value={user.region ?? ""} className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm" />
            </div>

            <div>
              <label className="text-xs text-gray-500">Location</label>
              <input readOnly value={user.region ?? "Remote"} className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-xs text-gray-500">ZIP Code</label>
              <input readOnly value={"28004"} className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm" />
            </div>

            <div>
              <label className="text-xs text-gray-500">Email</label>
              <input readOnly value={user.email ?? ""} className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-xs text-gray-500">Team</label>
              <input readOnly value={user.title ?? "Student"} className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm" />
            </div>
          </div>

            <div className="mt-4 flex flex-col md:flex-row md:justify-end gap-2">
              <button className="w-full md:w-auto bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm">Cancel</button>
              <button className="w-full md:w-auto bg-black text-white px-4 py-2 rounded-md text-sm">Save all</button>
            </div>
        </div>

        <div className="bg-white rounded-md shadow-sm p-4 md:p-6">
          <h3 className="font-semibold mb-4">Professional Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500">Title</label>
              <input readOnly value={user.title ?? ""} className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-xs text-gray-500">Organization</label>
              <input readOnly value={user.organization ?? ""} className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-xs text-gray-500">Education</label>
              <input readOnly value={user.education ?? ""} className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-xs text-gray-500">Skills</label>
              <input readOnly value={(user.skills || []).join(", ")} className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm" />
            </div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row md:justify-end gap-2">
            <button className="w-full md:w-auto bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm">Cancel</button>
            <button className="w-full md:w-auto bg-black text-white px-4 py-2 rounded-md text-sm">Save all</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserInfo;
