import { Head, Link, useForm } from '@inertiajs/react'
import type { PageProps } from '../../pages.gen'
import Layout from '../Layout'

export default function UsersShow({ user }: PageProps<'Users/Show'>) {
  const deleteForm = useForm({})

  return (
    <Layout>
      <Head title={user.name} />
      <p>
        <Link href="/users">← Back to users</Link>
      </p>
      <h1>{user.name}</h1>
      <dl>
        <dt>Email</dt>
        <dd>{user.email}</dd>
        <dt>Bio</dt>
        <dd>{user.bio}</dd>
      </dl>
      <button
        disabled={deleteForm.processing}
        onClick={() => {
          if (confirm(`Delete ${user.name}?`)) {
            deleteForm.delete(`/users/${user.id}`)
          }
        }}
      >
        Delete
      </button>
    </Layout>
  )
}
