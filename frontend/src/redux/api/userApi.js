import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://parfumes-1.onrender.com/api/v1", 
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        // Həm kiçik həm böyük hərflə 'authorization' başlığını dəstəkləyirik
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include" 
  }),
  tagTypes: ["User", "Referrals", "AdminUsers"],
  endpoints: (builder) => ({
    // GİRİŞ
    login: builder.mutation({
      query: (data) => ({ url: "/login", method: "POST", body: data }),
      invalidatesTags: ["User"],
    }),

    // QEYDİYYAT
    register: builder.mutation({
      query: (data) => ({ url: "/register", method: "POST", body: data }),
      invalidatesTags: ["User"],
    }),

    // ÇIXIŞ (Navbar-dakı handleLogout ilə tam uyğun)
    logout: builder.mutation({
      query: () => ({ url: "/logout", method: "GET" }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          console.error("Logout xətası:", err);
        } finally {
          // Sorğu bitsə də, xəta versə də yaddaşı təmizləyirik
          localStorage.removeItem("token");
          dispatch(userApi.util.resetApiState());
        }
      },
    }),

    // PROFİL (Navbar-ın data?.user gözləntisinə uyğun)
    getUserProfile: builder.query({
      query: () => `/me?n=${Date.now()}`,
      providesTags: ["User"],
    }),

    // MY TREE MƏLUMATLARI
    getMyNetworkTree: builder.query({
      query: () => `/me/network-tree?n=${Date.now()}`,
      providesTags: ["Referrals"],
    }),

    // DİGƏR ENDPOİNTLƏR
    getMyReferrals: builder.query({
      query: () => "/me/referrals",
      providesTags: ["Referrals"],
    }),
    getAllUsersAdmin: builder.query({
      query: () => "/admin/users",
      providesTags: ["AdminUsers"],
    }),
    updateReferralByAdmin: builder.mutation({
      query: (body) => ({ url: "/admin/referral-update", method: "PUT", body }),
      invalidatesTags: ["AdminUsers", "Referrals", "User"],
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({ url: "/password/forget", method: "POST", body: data }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, data }) => ({ 
        url: `/password/reset/${token}`, 
        method: "PUT", 
        body: data 
      }),
    }),
  }),
});

export const {
  useLoginMutation, useRegisterMutation, useLogoutMutation,
  useGetUserProfileQuery, useGetMyReferralsQuery, useGetMyNetworkTreeQuery,
  useGetAllUsersAdminQuery, useUpdateReferralByAdminMutation,
  useForgotPasswordMutation, useResetPasswordMutation,
} = userApi;


